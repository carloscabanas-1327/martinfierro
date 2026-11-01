# MF-ES-NAV-002 — Auditoría comparativa de navegación (2026-11-01)

## Base verificable
Rama main: c0a48e71cfe1a4abb3cfbbc9dd52a1626d38b545.
Inspección directa: src/layouts/Base.astro, src/styles/editorial-shell.css, src/pages/index.astro, src/pages/en/index.astro, src/pages/indice-general/index.astro, src/pages/en/site-index/index.astro, src/pages/en/search/index.astro, src/pages/leer/index.astro.

## Problemas observados
1. La cabecera española tenía ocho opciones: La obra, Explorar, José Hernández, Exégesis, Biblioteca crítica, Revista, Archivo, Buscar; faltaban accesos directos a Personajes y al índice general, pese a existir ambas rutas.
2. El rótulo «Buscar» conducía exclusivamente a /buscar/ (versos). No hay un buscador documental español equivalente a /en/search/.
3. El índice documental español /indice-general/ existe, pero no era fácilmente visible desde la navegación principal. El inglés /en/site-index/ sí tiene presencia en su navegación.
4. El contenido inglés dispone de /en/search/ y /en/verse-search/ separados; su navegación principal es larga, pero ofrece accesos a recursos educativos específicos. No confundir más enlaces con mejor usabilidad.
5. La edición española carece de entrada directa desde la cabecera hacia /leer/ida/ y /leer/vuelta/. Los recorridos estaban dentro de /leer/ y de la portada.
6. Las reglas CSS del encabezado están dispersas por múltiples media queries, con riesgo de congestión de enlaces en tabletas y móviles. Requiere pruebas reales de enfoque, orden y ancho.
7. En la portada las siete tarjetas culturales no representan toda la estructura disponible; el índice es la fuente para el descubrimiento integral.
8. En /en/ existen 46 guías educativas; no crear enlaces españoles que prometan guías equivalentes inexistentes.

## Primera intervención correctiva
Se conserva la cabecera global y el contenido inglés. Navegación principal ES con siete destinos auténticos: Leer la obra, Revista, José Hernández, Personajes, Análisis, Biblioteca, Índice general.
Nueva banda ES de acceso rápido: La ida, La vuelta, Buscar versos, Temas, Cultura gauchesca, Archivo y English edition. HTML accesible y CSS con ajuste responsive. Ninguna ruta ni corpus alterados.

## Lo que falta para certificar
- Build Astro y pruebas del índice/enlaces bajo el commit de este PR.
- Capturas y comprobación responsive 320, 375, 390, 768, 1024 y 1440 px y zoom 200 %.
- Comprobar enlaces de los índices frente al manifest de salida.
- Clasificar páginas huérfanas, caminos redundantes y enlaces ES->EN; registrar equivalencias reales.
- Preparar buscador documental ES basado en un índice de páginas aprobadas (no confundirlo con búsqueda de versos).
- Auditar menú móvil por teclado, sin scroll horizontal, y simplificar estructuras en una fase posterior.
- Comprobar robots, canonical y link integrity desde la vista previa.
- Coordinar con PR #125 (portada) y #124 (buscador); no fusionar ramas solapadas a ciegas.

## Resguardos
No modificar el corpus de 7.210 versos, las 46 rutas del lector, /en/, páginas legales, bloqueo de indexación ni Cloudflare producción. PR borrador sin merge. La corrección presente es primera etapa; no equivale a auditoría integral terminada.
