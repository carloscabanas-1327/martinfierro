# MF-ES-UX-005 — Verificación responsive y fuentes externas

Fecha 2026-11-01. GitHub Actions: run 41339142055, job 124945222294. Conclusión success.

## Responsive con Chromium
Capturas completas de la portada y de /buscar-documentos/ a 320, 375, 390, 768, 1024 y 1440 px.
- Los seis anchos: overflow horizontal false en ambas vistas.
- Búsqueda de «pulperia»: un resultado visible en cada ancho; errores JS cero.
- Simulación de zoom equivalente al 200 % mediante reducción de viewport CSS de 720 a 360 px y deviceScaleFactor=2: documentElement scrollWidth 360, clientWidth 360, overflow false.
- Archivos en artefacto de CI auditoria-responsive-es (ID 13096896166).
- Capturas 320 y 1440 revisadas visualmente: no se identificó superposición evidente de cabecera o tarjetas. Esta revisión no equivale a comprobación manual de todas las interacciones con teclado ni a un navegador real con zoom del usuario.

## Por qué fallaban los runs anteriores
Los runs 41338010813 y 41338935885 fallaron al simular zoom vía CSS documentElement.style.zoom='200%', que escala el contenido sin ajustar las media queries como el zoom real. El resultado señalaba un span en pie legal con right=754 frente a viewport=720. La nueva prueba reduce el viewport CSS y registra resultado correcto. El test sigue siendo una aproximación reproducible, no validación en Chrome/Firefox/Safari de usuario.

## URL externas
CI previo 41338010813 examinó 124 URLs con 83 OK, 26 restricted_or_broken (mayoría HTTP 403), 14 errores de red y 1 HTTP 404 aparente. El 404 correspondía a la colección de FamilySearch /es/search/collection/1974184, cuyo contenido se puede consultar mediante navegador web y fuente indexada; no sustituir ni borrar el enlace basándose solo en un HEAD automatizado. Los 403 frecuentes en cervantesvirtual.com son compatibles con bloqueo automatizado, no prueba de recursos inexistentes. Se conservan enlaces y fuentes mientras se realiza revisión editorial humana.

## Validación de integración
- Compilación Astro, corpus, índice general, búsqueda documental, grafo estático y capturas responsive: pasan.
- No merge; no modificación Cloudflare producción; no cambio a inglés ni corpus.
- Pendiente revisión manual de visualización a zoom real, estados HTTP de las URL con bloqueo y compatibilidad con PR #124, #125, #126, #127 y #128 antes de integrar.
