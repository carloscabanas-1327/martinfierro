# MF-ES-GRAFO-004 — Resultados de ejecución verificados

Fecha 2026-11-01; rama audit/mf-es-grafo-enlaces-004-20261101; run GitHub Actions 41336403729, job 124937052403, conclusión SUCCESS.

## Resultado del análisis sobre dist/
- 83 rutas HTML españolas y auxiliares analizadas (el conjunto incluye /es/, no equivale a 83 artículos).
- 0 rutas inalcanzables desde la portada según grafo de enlaces HTML.
- 0 páginas sin enlaces entrantes desde otras páginas españolas.
- 0 destinos internos inexistentes detectados por el script.
- 1 página sin enlaces entrantes considerados contextuales: /indice-general/. Sí cuenta con enlaces en navegación/pie.
- 0 candidatos detectados que mencionen un canto sin enlace directo bajo el patrón del script.

Fuente del reporte: artefacto `auditoria-grafo-es` (ID 13095765698), archivo `auditoria-grafo-es.json`, generado en CI.

## Advertencias sobre el alcance
- Este análisis no certifica buena usabilidad: 83 páginas pueden ser alcanzables mediante footer sin ofrecer rutas editoriales intuitivas.
- No evalúa enlaces exteriores, estados HTTP de producción, navegación JS ni anclas internas de versos.
- La clasificación de enlace contextual es sintáctica; algunos enlaces de índice o de componentes tienen tratamiento diferente.
- Artículos revisados (vida en fortines, Día de la Tradición, Quiénes eran los gauchos y Pulperías) tienen enlaces dinámicos reales a cantos o estrofas: la auditoría preliminar por búsqueda literal generó falsos positivos, que aquí se rectifican.
- No se ha certificado layout responsive: intento local de navegador Chromium/Playwright bloqueado por política de entorno (ERR_BLOCKED_BY_ADMINISTRATOR); no inventar capturas.

## Decisiones
1. No crear enlaces duplicados a cantos que ya están presentes.
2. Tratar /indice-general/ como oportunidad de navegación editorial (no página huérfana).
3. Unificar experiencia de búsqueda y navegación considerando PR #124, #126 y #127 antes de fusionar.
4. Conservar el corpus, la portada vigente, las URL y la edición inglesa.
5. Revisar con navegador autorizado 320, 375, 390, 768, 1024, 1440 px y zoom 200%; después ajustar CSS si hay problemas reales.
6. Mantener PR #128 sin merge. No realizar despliegue manual a Cloudflare.

## Estado
CI aprobada y JSON descargado y examinado. Ningún cambio en main ni en producción. El análisis automático detectó salud de enlaces internos estáticos, pero la usabilidad general queda pendiente de inspección UX real.
