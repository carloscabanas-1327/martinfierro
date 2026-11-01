# MF-ARQ-ES-006 — Auditoría de navegación y arquitectura editorial
Fecha: 2026-11-01. Alcance: **solo rutas internas**, portada, cabecera, buscadores, directorio, lector y revista. Se excluyen expresamente dominios y referencias externas.

## Fuentes de código revisadas
Rama `feat/mf-es-navegacion-integrada-005-20261101`, PR #129: `src/layouts/Base.astro`, `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/leer/index.astro`, `src/pages/leer/[parte]/index.astro`, `src/pages/leer/[parte]/[canto].astro`, `src/pages/buscar/index.astro`, `src/pages/buscar-documentos/index.astro`, `src/pages/indice-general/index.astro`, `src/pages/revista/index.astro`, `src/pages/temas/index.astro`. GitHub CI del PR #129 (run 41339142055) aprobó seis tamaños, simulación de zoom y pruebas de navegación; eso NO reemplaza una revisión editorial de los recorridos.

## Arquitectura objetivo
1. **Portada /**: bienvenida y elección de cuatro intenciones principales: leer la obra, investigar el universo gauchesco, consultar revista, encontrar información. No reproducir el directorio entero ni menús duplicados.
2. **Lectura /leer/**: puerta única del corpus, con La ida, La vuelta; cada parte indexa cantos, cada canto presenta estrofas y versos con anclas; conservar anterior/siguiente, migas y fidelidad textual.
3. **Investigación**: /personajes/, /exegesis/, /biblioteca-critica/, /archivo/, /jose-hernandez/, /cultura-gauchesca/; cada página declara su naturaleza: biografía, ensayo, fuente o personaje.
4. **Revista /revista/**: artículos independientes publicados, con fuentes y pasajes relacionados; NO usar revista como catálogo duplicado de temas.
5. **Temas /temas/**: recorridos interpretativos hacia pasajes; NO presentarlos como cantos ni artículos independientes de revista.
6. **Encontrar contenido**: portal con dos modalidades diferenciadas, **Documentos** (/buscar-documentos/) y **Versos** (/buscar/); /indice-general/ queda como mapa exhaustivo accesible, no tercer buscador protagonista.
7. **Inglés /en/**: edición editorial independiente, no heredar menú ES ni presentar el lector español como traducción inglesa.

## Hallazgos concretos
**P1 · Búsqueda triple y ambigua:** /buscar/ trabaja sobre 7210 versos; /buscar-documentos/ filtra un catálogo curado por título, categoría y descripción (NO texto íntegro); /indice-general/ posee filtro propio sobre enlaces. Es viable mantener los tres motores internamente, pero solo anunciar dos intenciones públicas y explicar el alcance de cada una.

**P1 · Multiplicidad de navegación:** PR #129 muestra siete accesos principales y un desplegable «Lectura y herramientas» con siete accesos secundarios. Aunque responde a responsive y teclado, el lector tiene que aprender dos niveles sin taxonomía declarada. El menú inglés también es largo, por lo que no debe copiarse literalmente. No añadir una tercera barra.

**P1 · Descubrimiento vs exhaustividad:** /indice-general/ contiene seis grupos y un séptimo listado con 46 cantos; debe existir como directorio de consulta, no como ruta imprescindible desde todo artículo. Mantener como «Mapa del sitio» o «Índice completo», subordinado a navegación por intención.

**P2 · Revista mezcla formatos:** /revista/ separa investigaciones, biblioteca de consulta y panoramas temáticos con títulos de bloque diferentes: es una mejora existente; aun así repite caminos de /temas/ y /biblioteca-critica/ que la cabecera ya ofrece. Priorizar artículos propios; reducir enlaces duplicados a secciones permanentes.

**P2 · Portada:** el PR #125 reequilibra hero y tarjetas, pero NO está fusionado con #129. La portada de la rama UX sigue usando estructura anterior; combinar visualmente más tarde sin fusionar branches sin control.

**P2 · Buscador documentos incompleto como buscador global:** `src/data/es-reference.ts` es una lista curada, no un índice generado desde todas las páginas. Su filtrado es texto en metadatos; no prometer resultados exhaustivos. /indice-general/ tiene enlaces complementarios.

**P2 · Continuidad editorial:** artículos y temas ya enlazan a cantos mediante variables/funciones; evitar enlaces duplicados. Mejorar los enlaces en sentido inverso (desde el lector hacia análisis, personajes y contexto) mediante referencias curadas y comprobables, sin insertar recomendaciones masivas por palabra clave.

**P3 · Consistencia de etiquetas:** «Biblioteca» puede confundirse con corpus («biblioteca documental»); «Índice general» con índice de cantos; «Buscar» con la búsqueda de versos. Propuesta: «Leer el poema», «Explorar», «Revista», «José Hernández», «Personajes» y «Buscar», con utilidad «Mapa del sitio» en pie y herramientas.

## Rutas canónicas y funciones
| Intención del visitante | Ruta | Alcance real |
|---|---|---|
| Leer texto original | /leer/ | Dos partes; lector íntegro |
| Ir a canto | /leer/ida/N/; /leer/vuelta/N/ | Anclas de estrofa/verso |
| Buscar en texto original | /buscar/ | Versos |
| Encontrar artículo o personaje | /buscar-documentos/ | Catálogo de metadatos publicados |
| Navegar todo | /indice-general/ | Directorio exhaustivo; 46 cantos |
| Contexto literario | /exegesis/ | Interpretación |
| Temas de lectura | /temas/ | Selección editorial con pasajes |
| Investigación cultural | /revista/ | Artículos independientes |
| Archivo de fuentes | /archivo/ | Documentación |
| Edición EN | /en/ | Portal inglés autónomo |

## Criterios de aceptación para una futura integración
- Un encabezado conciso, con las dos búsquedas accesibles desde un único destino «Buscar» (selector claro de modo), y sin barra secundaria permanentemente abierta.
- Desde la portada, llegar a un canto en 2–3 decisiones explícitas (parte, canto), sin obligar a pasar por directorio.
- Desde un artículo con pasaje citado, un enlace verificable al canto o estrofa; desde lectura, enlaces contextuales solo si existe correspondencia editorial.
- Etiquetas uniformes en cabecera, tarjetas, migas, índices y pie.
- Sin nueva URL rival de /buscar/ o /indice-general/; preservar URL estables.
- Auditar navegación móvil, menú con teclado y zoom 200% con capturas, más cobertura de enlaces internos.
- Resolver el solapamiento de PR #124/#125/#126/#127/#128/#129 antes de fusionar; no publicar por esta auditoría.

## Dictamen
El grafo estático puede estar conectado y carecer de enlaces rotos, sin que el recorrido sea intuitivo. El problema es de **arquitectura de información**, no de integridad del corpus. La corrección debe empezar por clarificar qué pregunta resuelve cada sección, y no por añadir nuevos menús o más páginas.
