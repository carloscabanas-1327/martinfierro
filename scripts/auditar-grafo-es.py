#!/usr/bin/env python3
"""Auditoría reproducible de navegación interna sobre dist/ renderizado (solo lectura).
Uso: python3 scripts/auditar-grafo-es.py [dist] [salida.json]
Incluye enlaces estáticos reales del HTML publicado; no simula JavaScript.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
from collections import defaultdict, deque
import json, re, sys

class Parser(HTMLParser):
    def __init__(self):
        super().__init__(); self.stack=[]; self.links=[]; self.text=[]; self.context="body"
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag in ("header","footer","nav","main","article","aside"):
            self.stack.append(tag)
        if tag=="a" and a.get("href"):
            context="footer" if "footer" in self.stack else "header" if "header" in self.stack and "main" not in self.stack else "nav" if "nav" in self.stack else "article" if "article" in self.stack else "body"
            self.links.append((a["href"],context))
    def handle_endtag(self,tag):
        if tag in self.stack: self.stack=self.stack[:len(self.stack)-1-self.stack[::-1].index(tag)]
    def handle_data(self,data): self.text.append(data)

def route(file,root):
    rel=file.relative_to(root).as_posix()
    if rel=="index.html": return "/"
    if rel.endswith("/index.html"): return "/"+rel[:-10]
    if rel.endswith(".html"): return "/"+rel
    return "/"+rel

def normalize(href,from_route):
    p=urlsplit(href)
    if p.scheme or p.netloc or not p.path: return None
    if p.path.startswith("/"): path=p.path
    else:
        if p.path.startswith("#"): return None
        path=from_route.rstrip("/")+"/"+p.path
    parts=[]
    for item in unquote(path).split("/"):
        if item=="..":
            if parts: parts.pop()
        elif item not in ("","."): parts.append(item)
    clean="/"+"/".join(parts)
    if clean.endswith(".html"): return clean
    if re.search(r"\.[a-z0-9]+$",clean,re.I): return None
    return clean.rstrip("/")+"/"

def main():
    root=Path(sys.argv[1] if len(sys.argv)>1 else "dist")
    if not root.is_dir(): sys.exit("No existe dist/: ejecutar npm run build primero")
    files=list(root.rglob("*.html"))
    pages={route(f,root):f for f in files}
    es={p for p in pages if not p.startswith(("/en/","/de/","/fr/","/it/","/pt/","/la/","/pms/")) and p!="/404.html"}
    links=defaultdict(list); incoming=defaultdict(set); editorial_incoming=defaultdict(set)
    bad=[]; no_precise=[]
    for source,file in pages.items():
        if source not in es: continue
        parser=Parser()
        parser.feed(file.read_text(encoding="utf-8",errors="replace"))
        for href,kind in parser.links:
            target=normalize(href,source)
            if not target: continue
            links[source].append({"to":target,"context":kind})
            if target in es:
                incoming[target].add(source)
                if kind in ("article","body"): editorial_incoming[target].add(source)
            elif target not in pages and not target.endswith(".json"):
                bad.append({"from":source,"to":target,"context":kind})
        mentions=len(re.findall(r"\bcantos?\s+(?:[IVXLCDM]+|\d+)\b"," ".join(parser.text),re.I))
        direct=sum(1 for x in links[source] if re.fullmatch(r"/leer/(ida|vuelta)/\d+/",x["to"]))
        if mentions and not direct and source.startswith(("/revista/","/exegesis/","/cultura-gauchesca/")):
            no_precise.append({"page":source,"canto_mentions":mentions,"direct_canto_links":direct})
    def reach(start):
        seen={start}; q=deque([start])
        while q:
            for entry in links[q.popleft()]:
                t=entry["to"]
                if t in es and t not in seen: seen.add(t);q.append(t)
        return seen
    result={
      "source":"HTML generado en dist/; solo enlaces HTML, no JS",
      "spanish_pages":len(es),
      "unreachable_from_home":sorted(es-reach("/")),
      "without_incoming_from_spanish":sorted(p for p in es if p!="/" and not incoming[p]),
      "without_contextual_incoming":sorted(p for p in es if p!="/" and not editorial_incoming[p]),
      "internal_links_unresolved":bad,
      "canto_mentions_without_direct_link_candidates":no_precise,
      "incoming_counts":{p:len(incoming[p]) for p in sorted(es)},
      "contextual_incoming_counts":{p:len(editorial_incoming[p]) for p in sorted(es)}
    }
    path=Path(sys.argv[2] if len(sys.argv)>2 else "auditoria-grafo-es.json")
    path.write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(f"ES pages={len(es)} unreachable={len(result['unreachable_from_home'])} no_incoming={len(result['without_incoming_from_spanish'])} no_context={len(result['without_contextual_incoming'])} broken={len(bad)} canto_candidates={len(no_precise)}")
    print(path)
if __name__=="__main__": main()
