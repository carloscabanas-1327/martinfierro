#!/usr/bin/env bash
# Controles que antes corrían en GitHub Actions (validar-portal.yml y
# construir-corpus.yml). Los builds y deploys van en Cloudflare Pages, así que
# estas pruebas se corren a mano antes de abrir cada PR:
#
#   bash scripts/verificar-antes-de-pr.sh            # portal (siempre)
#   bash scripts/verificar-antes-de-pr.sh --corpus   # además, corpus (si cambian scripts del corpus)
#
# La auditoría de enlaces externos y la de anchos (Playwright) no bloquean:
# avisan si fallan.
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ "${1:-}" == "--corpus" ]]; then
  echo "== Corpus"
  python3 scripts/construir.py
  python3 -m json.tool datos/versos.json > /dev/null
  python3 scripts/diagnostico_fuente.py
  python3 scripts/auditar.py
  python3 scripts/verificar_integridad.py
  python3 -m pip install --quiet pymupdf rapidfuzz
  python3 scripts/cotejar_bcn.py
fi

echo "== Portal: dependencias y build"
npm install --no-audit --no-fund --no-package-lock
npm run build

echo "== Páginas e índice"
python3 - <<'PY'
import json
from pathlib import Path
root=Path('dist')
assert (root/'index.html').is_file()
assert (root/'buscar/index.html').is_file()
assert (root/'temas/index.html').is_file()
assert (root/'leer/ida/1/index.html').is_file()
assert (root/'leer/vuelta/33/index.html').is_file()
index=json.loads((root/'indice-versos.json').read_text(encoding='utf-8'))
assert len(index)==7210, len(index)
assert sum(1 for v in index if v['parte']=='ida')==2316
assert sum(1 for v in index if v['parte']=='vuelta')==4894
cantos=list(root.glob('leer/*/[0-9]*/index.html'))
assert len(cantos)==46,len(cantos)
for v in index:
  html=root/f"leer/{v['parte']}/{v['canto']}/index.html"
  assert html.exists()
print('OK: 46 cantos, 7210 versos y rutas HTML construidas')
PY

echo "== Buscador del índice general"
node scripts/test-indice-search.mjs

echo "== Enlaces y cobertura del índice general"
python3 scripts/auditar-enlaces.py

echo "== Navegación española y grafo de enlaces"
test -f dist/buscar-documentos/index.html
python3 scripts/auditar-grafo-es.py dist auditoria-grafo-es.json
python3 - <<'PY'
import json
from pathlib import Path
report=json.loads(Path('auditoria-grafo-es.json').read_text())
assert not report['unreachable_from_home'],report['unreachable_from_home']
assert not report['internal_links_unresolved'],report['internal_links_unresolved']
html=Path('dist/index.html').read_text()
assert '/buscar-documentos/' in html
assert '/indice-general/' in html
# La barra «Lectura y herramientas» se retiró por duplicada (f51d033);
# se exige que la portada siga enlazando a los recorridos y herramientas.
for destino in ['/leer/ida/','/leer/vuelta/','/buscar/','/personajes/','/exegesis/','/archivo/','/en/']:
  assert f'href="{destino}"' in html, destino
print('Navegación ES: destinos, cobertura y buscador documental OK')
PY

echo "== Enlaces externos (no bloquea)"
python3 scripts/auditar-externos.py || echo "AVISO: auditoría de enlaces externos con errores (no bloquea)"

echo "== Seis anchos y zoom al 200 % (no bloquea si falta Playwright)"
if node -e "require.resolve('playwright')" 2>/dev/null; then
  python3 -m http.server 4322 --directory dist >/tmp/mf-preview.log 2>&1 &
  SERVER=$!
  trap 'kill $SERVER 2>/dev/null || true' EXIT
  sleep 1
  node scripts/auditar-responsive.mjs
else
  echo "AVISO: Playwright no está instalado; instalalo con 'npm install --no-save playwright && npx playwright install chromium' para esta prueba."
fi

echo "TODO OK"
