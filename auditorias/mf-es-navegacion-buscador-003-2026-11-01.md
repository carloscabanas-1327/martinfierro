# MF-ES-NAV-003 — Búsqueda documental y navegación (01/11/2026)

## Hechos verificados
- /buscar/ busca versos, no artículos.
- /indice-general/ dispone ya de filtrado de enlaces en el cliente mediante /js/indice-general.js: no reemplazarlo ni confundirlo con una búsqueda de texto íntegro.
- La edición inglesa dispone de /en/search/, /en/site-index/ y /en/verse-search/.
- src/pages/leer/[parte]/[canto].astro genera 46 rutas.
- Las rutas documentales enumeradas en src/data/es-reference.ts son páginas existentes en main o rutas generadas desde los seis temas.

## Cambio entregado
Nueva ruta /buscar-documentos/ con índice curado de títulos y descripciones, accesible sin JavaScript y filtrable por términos cuando JS funciona. Se enlaza desde /indice-general/. Es un buscador de metadatos, no búsqueda en texto íntegro de artículos.

## Deuda técnica pendiente
- Auditoría exhaustiva de páginas huérfanas: reconstruir grafo de enlaces sobre el HTML generado y distinguir footer/nav de enlaces en cuerpo. Un conteo de archivos Astro no basta.
- Auditoría responsive visual: 320/375/390/768/1024/1440 y 200 % zoom; no certificada sin navegador con rendering.
- Recorridos internos: generar matriz de enlaces pertinentes entre cada artículo, los cantos citados y los glosarios sin inventar referencias de versos.
- Comprobar pruebas de compilación, enlaces y regresión sobre CI.
- Coordinar con PR #124, #125 y #126, y no fusionar sin aprobación.
- Mantener noindex y no modificar el corpus.
