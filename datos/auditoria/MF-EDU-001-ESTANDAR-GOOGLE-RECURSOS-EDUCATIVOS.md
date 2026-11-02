# MF-EDU-001 — Estándar de recursos educativos y visibilidad en Google

Fecha: 2026-11-02. Estado: norma propuesta para implementación gradual; **no equivale a habilitación de indexación ni a elegibilidad garantizada para resultados enriquecidos**.

## Alcance
- Lector documental de ambas partes de *Martín Fierro* (46 cantos).
- 46 guías de estudiantes, fichas de personajes, exégesis, revista e historia.
- No convertir artículos culturales en noticias ni declarar cursos inexistentes.

## Criterios editoriales obligatorios
1. Cada guía tendrá título descriptivo, propósito de aprendizaje, resumen específico del canto, pasajes y estrofas citados con enlaces al lector, personajes/acciones, glosario contextual, preguntas de comprensión y fuentes/edición base.
2. Separar claramente **texto literal de José Hernández**, paráfrasis, interpretación editorial y contexto histórico documentado. No inventar versos, fuentes, citas, autorías ni fechas.
3. Preguntas interpretativas abiertas seguirán siendo actividades de reflexión; no convertirlas artificialmente en respuestas únicas.
4. Identificar autoría/responsabilidad editorial, metodología, fuentes y política de correcciones. Asegurar navegación accesible en móvil.
5. Cada contenido debe aportar valor específico frente a los otros 45 cantos; no generar páginas repetitivas para capturar palabras clave.

## Marcado estructurado: uso responsable
- Base general: `WebPage`, `Article` cuando sea un artículo real, `BreadcrumbList` cuando corresponda; `LearningResource` como descripción semántica educativa cuando la página efectivamente sea material de aprendizaje.
- `Quiz` con `Question` y `Answer`: **solo** en tarjetas didácticas de preguntas y respuestas visibles, verificables y ajustadas a las especificaciones de Google para Education Q&A. Comprobar primero la elegibilidad y el soporte actual en la documentación oficial; no prometer que cualquier `Quiz` aparezca como resultado enriquecido.
- `Course`: no aplicar a las guías ni al conjunto de cantos salvo que se cree un curso real con estructura y requisitos propios.
- `NewsArticle`: únicamente para noticias genuinas; no usarlo en ensayos históricos para intentar aparecer en Google News.
- Los datos estructurados deben coincidir con el HTML visible, ser válidos, no engañosos y superar pruebas automatizadas. Un esquema válido no garantiza aparición destacada.

## SEO y descubrimiento
- Título, descripción, canonical, enlaces internos, mapa del sitio y señales de idioma coherentes; evitar duplicados y páginas vacías.
- Priorizar consultas reales de estudio: resumen, análisis, personajes, vocabulario, contexto y preguntas de cada canto; sin repetición forzada.
- No retirar `Disallow: /`, `X-Robots-Tag` ni otros bloqueos de indexación sin autorización expresa. El sitio puede seguir inaccesible a Google mientras estos controles permanezcan activos.
- La revisión de Search Console y de resultados enriquecidos se hará tras validación y apertura autorizada.

## Prueba piloto propuesta — canto I
1. Auditar texto visible, enlaces, preguntas y citas contra el corpus; identificar preguntas de respuesta verificable.
2. Diseñar sección de aprendizaje sin alterar versos ni confundir opinión con hechos.
3. Incorporar solo el JSON-LD que refleje fielmente esa sección.
4. Ejecutar build, comprobaciones de enlaces y validación del HTML/JSON-LD; revisar accesibilidad.
5. Revisar resultados y decidir si conviene extender a los 45 cantos restantes.

## Criterios de aceptación antes de despliegue
- Evidencia por archivo, commit, revisión y CI; ninguna afirmación de aprobación sin resultado.
- Verificación humana de exactitud histórica y literaria.
- Cambios por commits individuales y revisión antes de fusionar.
- No fusionar con `main`, publicar ni abrir buscadores sin autorización expresa.

## Documentación de referencia de Google
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/structured-data/education-qa
- https://developers.google.com/search/docs/appearance/structured-data/course
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers

**Advertencia:** verificar en cada implementación la vigencia de funciones y requisitos específicos; las funciones de resultados enriquecidos pueden cambiar por país, idioma y fecha.
