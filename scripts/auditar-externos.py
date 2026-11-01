#!/usr/bin/env python3
"""Audita URL externas únicas del HTML Astro con concurrencia limitada. Reporte JSON, sin alterar contenidos."""
import concurrent.futures, html.parser, json, pathlib, sys, urllib.request, urllib.error, urllib.parse, time
class Links(html.parser.HTMLParser):
 def __init__(self): super().__init__(); self.urls=set()
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  for k in (("href",) if tag=="a" else ("src",) if tag in ("img","script") else ()):
   v=a.get(k,"")
   if v.startswith(("https://","http://")): self.urls.add(v)
def check(url):
 req=urllib.request.Request(url,headers={"User-Agent":"MartinFierroEditorialLinkAudit/1.0 (+https://martinfierro.org/)"},method="HEAD")
 try:
  with urllib.request.urlopen(req,timeout=12) as r: return {"url":url,"status":r.status,"final_url":r.geturl(),"result":"ok"}
 except urllib.error.HTTPError as e:
  if e.code in (403,405,429,500,501,502,503):
   try:
    req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0 MartinFierroLinkAudit/1.0","Range":"bytes=0-0"},method="GET")
    with urllib.request.urlopen(req,timeout=12) as r:return {"url":url,"status":r.status,"final_url":r.geturl(),"result":"ok"}
   except Exception:pass
  return {"url":url,"status":e.code,"result":"restricted_or_broken" if e.code in (401,403,429) else "http_error"}
 except Exception as e:return {"url":url,"result":"network_error","error":str(e)[:180]}
p=Links()
for file in pathlib.Path("dist").rglob("*.html"):
 p.feed(file.read_text(encoding="utf8",errors="replace"))
urls=sorted(p.urls)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
 results=list(pool.map(check,urls))
report={"count":len(urls),"results":results,"counts":{k:sum(r["result"]==k for r in results) for k in sorted(set(r["result"] for r in results))},"note":"Los 403/429 no prueban enlace roto: puede tratarse de bloqueo de bots. Repetir verificación editorial."}
path=pathlib.Path("auditoria-externos.json")
path.write_text(json.dumps(report,indent=2,ensure_ascii=False),encoding="utf8")
print("URL EXTERNAS",report["count"],report["counts"])
