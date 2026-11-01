#!/usr/bin/env python3
"""Auditoría del sitio Astro estático: enlaces internos e inventario del índice."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import json
import re
import sys

root = Path("dist")
class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = dict(attrs).get("href")
            if href: self.links.append(href)

pages = sorted(root.rglob("index.html"))
if not pages:
    raise SystemExit("No existen páginas HTML compiladas")
all_pages = {"/" if p.parent == root else "/" + p.parent.relative_to(root).as_posix().strip("/") + "/" for p in pages}
errors=[]
visited=0
for p in pages:
    parser=Links()
    parser.feed(p.read_text(encoding="utf-8"))
    source="/" if p.parent == root else "/" + p.parent.relative_to(root).as_posix().strip("/") + "/"
    for href in parser.links:
        if href.startswith(("mailto:", "tel:", "javascript:", "#", "data:")): continue
        parsed=urlparse(href)
        if parsed.scheme or parsed.netloc: continue
        target=unquote(parsed.path)
        if not target: continue
        if not target.startswith("/"):
            target=source+target
        parts=[]
        for element in target.split("/"):
            if element=="..":
                if parts: parts.pop()
            elif element and element!=".":parts.append(element)
        local="/" + "/".join(parts)
        candidate=root.joinpath(*parts)
        if candidate.is_dir(): candidate=candidate/"index.html"
        elif not candidate.exists() and candidate.suffix==".html": pass
        elif not candidate.exists() and not candidate.suffix: candidate=candidate/"index.html"
        visited+=1
        if not candidate.is_file():
            errors.append({"from":source,"href":href,"target":local})
index_file=root/"indice-general/index.html"
index_links=Links()
index_links.feed(index_file.read_text(encoding="utf-8"))
listed=set()
for href in index_links.links:
    u=urlparse(href)
    if u.scheme or u.netloc or not u.path.startswith("/"): continue
    path=u.path
    if not path.endswith("/") and not Path(path).suffix: path+="/"
    listed.add(path)
missing=sorted(all_pages-listed- {"/indice-general/"})
out={"html_pages":len(all_pages),"internal_links_checked":visited,
     "unresolved_links":errors,"pages_missing_from_general_index":missing}
Path("auditoria-enlaces.json").write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding="utf-8")
print(f"AUDITORÍA: {len(all_pages)} páginas; {visited} enlaces internos; {len(errors)} sin destino; {len(missing)} páginas no indexadas.")
for e in errors[:40]: print("ENLACE ROTO:",e)
for e in missing[:40]:print("FALTA EN ÍNDICE:",e)
sys.exit(1 if errors or missing else 0)
