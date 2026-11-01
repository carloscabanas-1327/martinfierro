# MF-ES-UX-005 — Integración editorial y navegación
Fecha: 2026-11-01. Rama base main c0a48e71.

## Alcance
- Unifica navegación principal y accesos rápidos sin incorporar toda la lista de opciones de /en/.
- Copia los recursos de búsqueda documental de PR #127 a esta rama, sin cambiar /buscar/ (versos).
- Etiquetas no ambiguas: «Buscar documentos» y «Buscar versos».
- Acceso desde índice general al buscador documental; su filtro interno ya existente permanece.
- Las rutas de lectura, personajes, biblioteca, revista, análisis y archivo se conservan.
- CSS móvil específico para cabecera ES; evitar cambios de diseño global inglés.

## Auditorías previas y límites
- Grafo ES (CI del PR #128): 83 páginas/rutas auxiliares, 0 inalcanzables, 0 destinos internos rotos detectados, 1 sin acceso contextual (/indice-general/).
- Los artículos revista verificados ya enlazan dinámicamente a cantos; no multiplicar enlaces.
- La cobertura de enlaces EXTERNOS en producción (respuestas 200/3xx, dominios retirados, licencias) y las ANCLAS de destino requieren prueba específica. No se afirma verificación.
- El trabajo responsive requiere capturas reales de los seis anchos y zoom 200 %. CSS implementado no equivale a certificación visual.

## Antes de integrar
1. Confirmar build Astro, 46 cantos, 7210 versos y enlaces.
2. Probar rutas /buscar-documentos/, /buscar/, /indice-general/ y menú con teclado.
3. Revisar el resultado de este PR contra #124, #125, #126, #127 y #128; decidir cuál cerrar para no fusionar duplicados.
4. Certificar headers noindex/SEO, anclas y recursos externos en preview.
5. Aprobación humana, sin merge ni despliegue manual.
