# MARTINFIERRO.ORG — Plan de cumplimiento comprobable (ES)

Fecha: 2026-11-01. Rama de integración de desarrollo, dependiente del PR #146. **Prohibido afirmar cumplimiento sin evidencia de archivo, commit, comprobación y resultado de CI.**

## Orden aprobado y criterios de aceptación

### 1. Componentes compartidos y SEO técnico
- [ ] 1.1 Title definitivo ≤60 caracteres con marca, sin duplicados en **todas** las páginas españolas. Evidencia: auditoría de HTML compilado.
- [ ] 1.2 Meta description única, 140–155 caracteres en todas las páginas editoriales indexables españolas. Evidencia: auditoría de HTML.
- [ ] 1.3 Open Graph por tipo, og:image real y específico 1200×630, twitter summary_large_image. Evidencia: imágenes válidas y HTML auditado.
- [ ] 1.4 JSON-LD consistente: WebPage, LearningResource, Chapter/Book, Article/NewsArticle, BreadcrumbList; autor y fechas únicamente comprobables. Evidencia: validación de schema compilado.
- [ ] 1.5 Componente Astro de imágenes, responsive srcset/sizes y metadatos de procedencia; comprobar derechos. Evidencia: archivos y validación.
- [ ] 1.6 Extender GitHub Actions para que los incumplimientos impidan el build. Evidencia: ejecución de CI en el commit final.

### 2. Las 46 guías estudiantiles
- [ ] 2.1 Cotejo de cada comentario con escenas, voces y estrofas de su canto; prueba de intercambio, sin párrafos genéricos. Evidencia: matriz 46x con notas de edición.
- [ ] 2.2 Para cada canto: resumen propio, 2–4 pasajes comentados, personajes y acciones, 3–6 términos auténticos, al menos 3 preguntas específicas. Evidencia: verificador y lectura manual.
- [ ] 2.3 Contexto anterior/siguiente, enlaces a lector y exégesis donde existan, sin enlaces rotos. Evidencia: recorrido generado.
- [ ] 2.4 Eliminar comentarios sobre auditoría visibles al estudiante; solo correcciones literarias relevantes. Evidencia: auditoría textual.
- [ ] 2.5 Cada guía incompleta noindex y fuera del sitemap; no afirmar que está lista. Evidencia: HTML final y sitemap.

### 3. Lector documental
- [ ] 3.1 Cotejo de 7210 versos y 1193 estrofas con **edición fuente identificada**. Evidencia: colación y ficha bibliográfica (no se confunde con conteo).
- [ ] 3.2 Anclas estables, texto sin interpolaciones, referencia de edición, enlaces guía/exégesis. Evidencia: validación HTML por canto.
- [ ] 3.3 Chapter dentro de Book con José Hernández como autor del poema. Evidencia: JSON-LD comprobado.

### 4. Revista, exégesis y personajes
- [ ] 4.1 Auditoría individual de artículos y fichas: utilidad, párrafos específicos, título/description, fuentes primarias e internas. Evidencia: matriz por URL.
- [ ] 4.2 Quitar etiquetas de proceso y notas del auditor, manteniendo información sustantiva.
- [ ] 4.3 Artículo del Día de la Tradición: prioridad temporal, sin prometer indexación ni alterar fechas artificialmente.

### 5. Imágenes y derechos
- [ ] 5.1 Validar cada origen, autor, licencia, créditos y representación; registrar fuentes.
- [ ] 5.2 Portadas de revista/exégesis ≥1600px, variantes WebP y responsive, pies y alt coherentes.
- [ ] 5.3 Quitar duplicaciones engañosas; no usar IA como documentación histórica.

### 6. Institucional y transparencia
- [ ] 6.1 /proyecto/ con responsables conocidos, proceso editorial, IA y política de correcciones, sin inventar atribuciones.
- [ ] 6.2 /fuentes-y-derechos/ con edición base identificada, método, imágenes y derechos.
- [ ] 6.3 Fechas reales, autoría institucional, vínculos y citas rastreables.

### 7. Puesta en producción y buscadores
- [ ] 7.1 Integrar PR #140–#146 y posteriores sin divergencias, con validación integral.
- [ ] 7.2 Auditar sitio español candidato en Cloudflare, canonical, redirecciones, sitemap y exclusiones.
- [ ] 7.3 **NO** retirar Disallow: / ni X-Robots-Tag sin autorización específica; solo preparar diagnóstico y procedimiento.
- [ ] 7.4 Envío sitemap y pruebas de indexabilidad **solo después** de apertura autorizada.

## Convención para cierre
Cada casilla se marca [x] únicamente al incorporar enlace a **commit, ruta exacta y verificación**. Los límites de contenido o fuentes se documentan como pendientes. Un CI verde certifica los controles automatizados ejecutados; no certifica calidad histórica.
