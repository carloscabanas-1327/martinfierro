# MF-ES-REESTRUCTURACIÓN-001 — Fase 0 / auditoría de fuente
Fecha: 2026-11-01. Rama base auditada: main @ 3983404e2261ecebe4effe6529abf14164634ebd.

## Evidencia verificable
- Árbol Git recursivo sin truncamiento: 326 blobs; 133 archivos .astro en src/pages, de los cuales 94 en src/pages/en y 39 fuera de ese directorio (incluyen otros idiomas y 404).
- Dos layouts: Base.astro y StaticEditorial.astro; seis componentes en src/components; veinte estilos .css.
- La ruta dinámica /leer/[parte]/[canto] utiliza src/lib/corpus.ts, con datos procedentes de obra/ida y obra/vuelta. Los 46 cantos son la referencia documental, no páginas editoriales nuevas.
- /temas/[slug] se genera desde src/data/temas.ts; existe un listado de seis temas.
- La revista española tiene seis rutas individuales .astro y una portada.
- /buscar/ originalmente emplea indice-versos.json, coincidencia parcial por verso, filtro por parte y límite de visualización de 150 resultados sin paginación. La mejora está separada en la rama de auditoría.
- En inglés existen /en/search/, /en/verse-search/ y 46 recursos individuales de estudio; reutilizar arquitectura, no contenido traducido mecánicamente.
- public/_headers contiene X-Robots-Tag noindex,nofollow,noarchive. No autoriza retirar el bloqueo.
- main no presenta protección de rama activada según GitHub.
- Respaldo backup/2026-11-01-english-audited-3983404 confirmado en refs/heads y apunta a 3983404e2261ecebe4effe6529abf14164634ebd.
- Workflow Validar portal Astro run 41327991641 terminó success sobre 3983404e2261ecebe4effe6529abf14164634ebd. No equivale a auditoría editorial o comprobación Cloudflare.

## Límites de verificación
Los dominios martinfierro.org y martinfierro.pages.dev fueron reportados operativos por el propietario; además se proporcionó captura de la portada. Las herramientas web de esta sesión no permitieron leer sus páginas ni cabeceras: no se afirma haber comprobado todas las URL publicadas, la respuesta HTTP, los CSS renderizados o los enlaces en producción. La cifra de páginas generadas exige manifest/build real, no sumar archivos Astro.

## Matriz de arquitectura española (rutas identificadas en fuente)
| Sección | Fuente principal | Acción |
|---|---|---|
| Portada | src/pages/index.astro | Mejorar jerarquía y encuadre hero tras vista previa |
| Poema | src/pages/leer/**; src/lib/corpus.ts | Mantener texto; mejorar navegación separadamente |
| Buscador de versos | src/pages/buscar/index.astro | Corregir límite de 150 con paginación; filtros |
| Directorio | src/pages/indice-general/index.astro | Incorporar futuras guías solo al publicarlas |
| Personajes | src/pages/personajes/index.astro | Auditar y consolidar fichas |
| Exégesis | src/pages/exegesis/** | Diferenciar exégesis y guías didácticas |
| Temas | src/pages/temas/**; src/data/temas.ts | Mantener seis recorridos documentados |
| Revista | src/pages/revista/** | Organizar seis artículos y portada, no duplicar |
| Biblioteca | src/pages/biblioteca-critica/index.astro | Verificar estudios y fuentes |
| Archivo | src/pages/archivo/index.astro | Auditar procedencia/licencias |
| Autor | src/pages/jose-hernandez/index.astro | Verificar imagen documental |
| Cultura gauchesca | src/pages/cultura-gauchesca/index.astro | Relacionar temas y revista |
| Institucional | src/pages/{acerca,contacto,privacidad,terminos,fuentes-y-derechos,publicidad-y-afiliados}/** | Preservar rutas existentes |
| Inglés | src/pages/en/** | Pruebas de regresión y autonomía editorial |

## Propuesta visual de portada
Conservar masthead, tipografía serif, paleta marfil y terracota, hero fotográfico y accesos existentes. Priorizar: 1 Leer La ida / La vuelta, 2 Buscar versos, 3 Guías por canto (solo al publicarlas), 4 Personajes y exégesis, 5 revista ilustrada, 6 biblioteca y archivo. Comprobar posición focal del personaje de la fotografía en desktop y móvil, no alterar el archivo fuente solo para satisfacer un recorte. Usar pruebas visuales a 320/375/390/768/1024/1440 y zoom 200 %. Sin autorización de rediseño no sustituir portada.

## Matriz de diferencias
| Capacidades | ES | EN | Plan |
|---|---|---|---|
| Original 46 cantos | Sí | Remite a español | Una sola fuente |
| Guías educativas 46 | Sin colección sistemática equivalente | 46 guías | Redactar 13+33 guías originales ES, citas del corpus |
| Búsqueda de versos | Versos, parte, texto | Versos y opciones adicionales | Mejorar ES sin duplicar el índice |
| Buscador documental | Falta consolidación | /en/search/ | Crear índice ES desde rutas reales |
| Glosario | Definiciones de lector parciales | Glosarios educativos | Fuente compartida y presentaciones diferentes |
| Exégesis | General y vuelta | General y vuelta | Comprobar faltantes por canto |
| Revista | Seis artículos fuente | Diez archivos dentro del directorio magazine | Evitar artículos duplicados |

## Plan y dependencias
P0: generar inventario de URL finales desde build, revisar enlaces/anclas/imágenes/rutas/robots/canonicals y estado Cloudflare. Necesita acceso a preview verificable.
P1: buscador de versos paginado, selector de tildes, tests automáticos; PR sin integrar.
P1: definir guías didácticas ES con plantilla reutilizable, contenido fundamentado en cada canto, fuentes y metadatos; elaborar muestras y revisión literaria antes de producción masiva.
P2: mapa de CSS y componentes, resolver duplicados solo con pruebas y capturas. Conservar URLs históricas.
P2: índice de documentos ES y glosario contextual, enlazado recíproco a los cantos.
P3: revisión histórica y literaria individual, derechos de fotos, alt, responsive, accesibilidad y SEO.
P4: producción de imágenes nuevas cuando estén aprobadas, PR y vista previa Cloudflare; integración productiva con aprobación humana.

## Riesgos y controles
- La fotografía de portada presenta recorte lateral en la captura del propietario: validar object-position por breakpoint, no presumir error universal.
- Cambios en Base.astro afectan ambos idiomas: pruebas de regresión obligatorias.
- La ausencia de protección main aumenta riesgo de push directo: proponer activarla con autorización.
- Citas literarias nunca se transcriben manualmente; extraer de corpus estructurado.
- No publicar imágenes generadas como registros históricos ni incorporar obras protegidas.
- El respaldo en GitHub no equivale a almacenamiento externo independiente.
- Mantener actual bloqueo de indexación hasta orden expresa.
- Sin acceso al sitio desplegado desde el sistema, ninguna prueba de URL pública puede declararse completa.

## Acciones realizadas
1. Inspección del árbol de archivos y de buscadores ES/EN.
2. Verificación del HEAD, refs del respaldo y estado del workflow.
3. Creación de rama independiente.
4. Cambio no destructivo en src/pages/buscar/index.astro para quitar tope de 150 mediante paginación de 50, permitir activar/desactivar normalización de tildes y buscar varias palabras sin modificar el texto ni su índice.
5. Este documento de auditoría.
No se modificó el corpus ni se fusionó a main. No se publicaron cambios en producción.
