#!/usr/bin/env python3
"""Genera los datos estructurados de la traducción italiana de Folco Testena (1919).

Entrada: fuentes/testena-1919/fuente-ocr-archivo-ar.json (OCR por cantos, tal como
se publicó en archivo.ar, repo carloscabanas-1327/archivo, commit 143cca7).
Salida: andata.json, ritorno.json y corrispondenza.json en la misma carpeta.

No completa versos: copia el texto del OCR tal cual, salvo las correcciones
cotejadas con el facsímil que figuran en correzioni.json, y solo agrega
identificadores, numeración propia de la traducción y la correspondencia por canto
con el original de obra/. Uso: python3 scripts/importar-testena.py
"""
import json
from pathlib import Path

base = Path("fuentes/testena-1919")
visor = "https://digital.iai.spk-berlin.de/viewer/image/835991172/"
nombres = {1: ("andata", "ida"), 2: ("ritorno", "vuelta")}
fuente = json.loads((base / "fuente-ocr-archivo-ar.json").read_text(encoding="utf-8"))
# Correcciones cotejadas con el facsímil (correzioni.json): verso, texto OCR y texto impreso.
datos_corr = json.loads((base / "correzioni.json").read_text(encoding="utf-8"))
correzioni = {c["verso"]: c for c in datos_corr["correzioni"]}
# Partición en estrofas cotejada con el facsímil («parte-canto»: versos por estrofa);
# reemplaza los cortes del OCR, que fallan en los saltos de página.
strofe = datos_corr.get("strofe", {})
applicate = set()
def testo(vid, ocr):
    c = correzioni.get(vid)
    if not c: return ocr
    assert c["ocr"] == ocr, f"{vid}: el OCR no coincide con correzioni.json"
    applicate.add(vid)
    return c["stampa"]
corr = []
for p in fuente["partes"]:
    slug, orig = nombres[p["parte"]]
    originales = json.loads(Path(f"obra/{orig}/estrofas.json").read_text(encoding="utf-8"))
    canti = []
    for c in p["cantos"]:
        n = c["canto"]
        gruppi = []
        for i, e in enumerate(c["estrofas"], 1):
            # Las claves de correzioni.json usan la posición del verso en el OCR;
            # un texto impreso null elimina la línea (p. ej. una nota al pie leída como verso).
            # Un texto impreso en forma de lista reemplaza la línea por varias (versos que el OCR perdió).
            versi = []
            for j, v in enumerate(e, 1):
                x = testo(f"it-{slug}-c{n:02d}-e{i:03d}-v{j:02d}", v)
                if x is None: continue
                versi.extend(x if isinstance(x, list) else [x])
            gruppi.append(versi)
        if f"{slug}-{n}" in strofe:
            tutti = [v for g in gruppi for v in g]
            misure = strofe[f"{slug}-{n}"]
            assert sum(misure) == len(tutti), f"{slug}-{n}: la partición no suma los versos"
            gruppi, k = [], 0
            for m in misure: gruppi.append(tutti[k:k + m]); k += m
        estrofe = []
        for i, versi in enumerate(gruppi, 1):
            estrofe.append({"numero": i, "id": f"it-{slug}-c{n:02d}-e{i:03d}",
                            "versi": [{"id": f"it-{slug}-c{n:02d}-e{i:03d}-v{j:02d}", "linea": j, "testo": v} for j, v in enumerate(versi, 1)]})
        pagina = None if c["pagina"] == "-" else int(c["pagina"])
        canti.append({"numero": n, "pagina_libro": pagina, "immagine_facsimile": c["pdf"],
                      "url_facsimile": f"{visor}{c['pdf']}/", "estrofe": estrofe})
        o = [e for e in originales if e["canto"] == n]
        vo = sum(len(e["versos"]) for e in o)
        vt = sum(len(e["versi"]) for e in estrofe)
        corr.append({"parte": slug, "parte_originale": orig, "canto": n,
                     "originale": {"url": f"/leer/{orig}/{n}/", "estrofe": len(o), "versi": vo,
                                   "prima_estrofa": o[0]["numero"], "ultima_estrofa": o[-1]["numero"]},
                     "traduzione": {"url": f"/it/lettore/{slug}/{n}/", "estrofe": len(estrofe), "versi": vt},
                     "differenza_versi": vt - vo, "pagina_libro": pagina, "immagine_facsimile": c["pdf"]})
    salida = {"parte": slug, "parte_originale": orig, "titolo": p["titulo_it"], "titolo_originale": p["titulo"],
              "avvertenza": "Trascrizione OCR non collazionata integralmente. La numerazione di strofe e versi è quella della traduzione, non quella dell'originale spagnolo.",
              "canti": canti}
    (base / f"{slug}.json").write_text(json.dumps(salida, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
(base / "corrispondenza.json").write_text(json.dumps(
    {"nota": "Corrispondenza canto per canto fra l'originale (obra/) e la traduzione di Testena. Generata da scripts/importar-testena.py.",
     "canti": corr}, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
assert applicate == set(correzioni), f"Correcciones sin aplicar: {set(correzioni) - applicate}"
print(f"Testena: {len(corr)} cantos, {sum(c['traduzione']['versi'] for c in corr)} versos")
