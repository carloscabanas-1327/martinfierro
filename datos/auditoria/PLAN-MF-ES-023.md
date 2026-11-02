# MARTINFIERRO.ORG — Plan de cumplimiento comprobable (ES)

Fecha: 2026-11-01. Rama de integración de desarrollo, dependiente del PR #146. **Prohibido afirmar cumplimiento sin evidencia de archivo, commit, comprobación y resultado de CI.**

## Orden aprobado y criterios de aceptación

### 1. Componentes compartidos y SEO técnico
- [x] 1.1 Title definitivo ≤60 caracteres con marca, sin duplicados en **todas** las páginas españolas. Evidencia: auditoría de HTML compilado.
- [x] 1.2 Meta description única, 140–155 caracteres en todas las páginas editoriales indexables españolas. Evidencia: auditoría de HTML.
- [ ] 1.3 Open Graph por tipo, og:image real y específico 1200×630, twitter summary_large_image. Evidencia: imágenes válidas y HTML auditado.
- [ ] 1.4 JSON-LD consistente: WebPage, LearningResource, Chapter/Book, Article/NewsArticle, BreadcrumbList; autor y fechas únicamente comprobables. Evidencia: validación de schema compilado.
- [ ] 1.5 Componente Astro de imágenes, responsive srcset/sizes y metadatos de procedencia; comprobar derechos. Evidencia: archivos y validación.
- [x] 1.6 Extender GitHub Actions para que los incumplimientos impidan el build. Evidencia: ejecución de CI en el commit final.

### 2. Las 46 guías estudiantiles
- [ ] 2.1 Cotejo de cada comentario con escenas, voces y estrofas de su canto; prueba de intercambio, sin párrafos genéricos. Evidencia: matriz 46x con notas de edición.
- [x] 2.2 Para cada canto: resumen propio, 2–4 pasajes comentados, personajes y acciones, 3–6 términos auténticos, al menos 3 preguntas específicas. Evidencia: verificador y lectura manual.
- [x] 2.3 Contexto anterior/siguiente, enlaces a lector y exégesis donde existan, sin enlaces rotos. Evidencia: recorrido generado.
- [x] 2.4 Eliminar comentarios sobre auditoría visibles al estudiante; solo correcciones literarias relevantes. Evidencia: auditoría textual.
- [x] 2.5 Cada guía incompleta noindex y fuera del sitemap; no afirmar que está lista. Evidencia: HTML final y sitemap.

### 3. Lector documental
- [ ] 3.1 Cotejo de 7210 versos y 1193 estrofas con **edición fuente identificada**. Evidencia: colación y ficha bibliográfica (no se confunde con conteo).
- [x] 3.2 Anclas estables, texto sin interpolaciones, referencia de edición, enlaces guía/exégesis. Evidencia: validación HTML por canto.
- [x] 3.3 Chapter dentro de Book con José Hernández como autor del poema. Evidencia: JSON-LD comprobado.

### 4. Revista, exégesis y personajes
- [ ] 4.1 Auditoría individual de artículos y fichas: utilidad, párrafos específicos, título/description, fuentes primarias e internas. Evidencia: matriz por URL.
- [ ] 4.2 Quitar etiquetas de proceso y notas del auditor, manteniendo información sustantiva.
- [ ] 4.3 Artículo del Día de la Tradición: prioridad temporal, sin prometer indexación ni alterar fechas artificialmente.

### 5. Imágenes y derechos
- [ ] 5.1 Validar cada origen, autor, licencia, créditos y representación; registrar fuentes.
- [ ] 5.2 Portadas de revista/exégesis ≥1600px, variantes WebP y responsive, pies y alt coherentes.
- [ ] 5.3 Quitar duplicaciones engañosas; no usar IA como documentación histórica.

### 6. Institucional y transparencia
- [x] 6.1 /proyecto/ con responsables conocidos, proceso editorial, IA y política de correcciones, sin inventar atribuciones.
- [ ] 6.2 /fuentes-y-derechos/ con edición base identificada, método, imágenes y derechos.
- [ ] 6.3 Fechas reales, autoría institucional, vínculos y citas rastreables.

### 7. Puesta en producción y buscadores
- [ ] 7.1 Integrar PR #140–#146 y posteriores sin divergencias, con validación integral.
- [ ] 7.2 Auditar sitio español candidato en Cloudflare, canonical, redirecciones, sitemap y exclusiones.
- [ ] 7.3 **NO** retirar Disallow: / ni X-Robots-Tag sin autorización específica; solo preparar diagnóstico y procedimiento.
- [ ] 7.4 Envío sitemap y pruebas de indexabilidad **solo después** de apertura autorizada.

## Convención para cierre
Cada casilla se marca [x] únicamente al incorporar enlace a **commit, ruta exacta y verificación**. Los límites de contenido o fuentes se documentan como pendientes. Un CI verde certifica los controles automatizados ejecutados; no certifica calidad histórica.

## Evidencias verificadas en la operación MF-ES-023 (1 de noviembre de 2026, hora de Argentina)

- **CI integral aprobado:** [GitHub Actions 41366792644](https://github.com/carloscabanas-1327/martinfierro/actions/runs/41366792644). La compilación realizó auditorías de estudiantes, imágenes, SEO HTML y controles de navegación/responsive.
- **SEO HTML:** 50 incumplimientos detectados inicialmente y corregidos hasta superar los controles implementados de título y descripción en páginas españolas. El generador imprimió `SEO OK: 232 indexable URLs`: son *candidatas del sitemap generado*, NO páginas accesibles para Google mientras persista el bloqueo global.
- **Tarjetas sociales:** `OG OK: 92 tarjetas WebP 1200×630` para 46 lectores y 46 guías. El resto del sitio todavía requiere auditoría OG por tipo de contenido.
- **Guías:** `OK: 46 guías con 3 preguntas específicas, 3-6 voces de glosario, personajes y comentarios de 104 pasajes`. El texto original permaneció en 1193 estrofas y 7210 versos. 225 entradas de glosario corresponden a vocabulario localizado en los cantos.
- **Lector:** enlaces internos a cada guía y exégesis, anclas estables y referencias identificadas a Project Gutenberg (14765, 15066) y Biblioteca Virtual Miguel de Cervantes (ediciones de 1872 y 1879). Falta colación filológica exhaustiva de variantes.
- **Institucional:** /proyecto/ incluye política de uso de herramientas de IA y correcciones; /fuentes-y-derechos/ identifica las fuentes digitales y distingue cotejo pendiente.
- **Imágenes de revista — NO APROBADO:** auditoría de 6 artículos: **6 imágenes con ancho menor que 1600 píxeles** (cuatro archivos de 1536 px y dos de 1586 px); **2 usos duplicados binariamente**. Quedan por verificar autorías, licencias y variantes responsive. La compilación verde **no certifica estas condiciones**: el inventario es deliberadamente diagnóstico.
- **Indexación y despliegue:** PR de borrador, sin fusión a main. Se conserva el `Disallow: /` y la protección HTTP existente; no se autorizó la apertura de buscadores.

## Pendientes bloqueantes para declarar cumplimiento integral

1. Colación texto-verso con fuentes bibliográficas históricas y revisión crítica académica de los 46 comentarios.
2. Imágenes editoriales nativas de ≥1600 px, exclusivas por artículo, con origen/autor/licencia comprobados; variantes responsive reales.
3. Validación completa del JSON-LD y fechas editoriales en todas las familias de páginas (revista, archivo, personajes, idiomas).
4. Auditoría de enlaces y referencias históricas de cada pieza de revista y de los perfiles; corrección de frases metodológicas aún presentes fuera de las guías.
5. Conciliar el conjunto de PR #140–#147 en un único estado candidato a producción. Sin apertura de indexación hasta aprobación específica.
