# MARTINFIERRO.ORG — Plan operativo de transformación en revista cultural
**Versión:** 1.0 — PROPUESTA · 29/10/2026  
**Repositorio base:** https://github.com/carloscabanas-1327/martinfierro  
**Dependencia normativa:** Directiva Maestra de Arquitectura Digital y Directiva editorial/visual v1.0 propuesta.

## 0. Línea base comprobada
Portal Astro desplegado desde `main` en Cloudflare Pages. Ya existen portada, lectura por dos partes, 46 cantos, anclas de 7210 versos, buscador, temas editoriales iniciales y página de fuentes. Mantener sus URL públicas. La integridad es técnica, no certificación filológica independiente.

## 1. Estrategia de implementación por entregables

### Etapa A — cimientos de revista sin alterar el corpus
**A1. Arquitectura de información:** rutas propuestas `/revista/`, `/revista/[slug]/`, `/personajes/`, `/glosario/`, `/cronologia/`, `/multimedia/`. Páginas futuras sin contenido aprobado no aparecen en navegación de producción.  
**A2. Modelos Astro Content Collections:** esquemas de Zod y Markdown/MDX para artículos, temas, personajes, glosario y multimedia; metadatos de investigación; ID de verso como relación.  
**A3. Componentes compartidos:** `SiteHeader`, `EditorialHero`, `StoryCard`, `SectionRail`, `QuoteCard`, `CitationList`, `ReadingControls`, `SiteFooter`.  
**A4. Portada modular:** trasladar el hero actual a una composición editorial; conservar CTA Leer y Buscar prominentes. Destacados mostrados solo si hay entradas publicadas.

**Aceptación:** `npm run build` sin errores, enlaces antiguos válidos, 46 cantos y 7210 versos intactos; pruebas de teclado y móvil; sin contenido inventado.

### Etapa B — producción visual y editorial piloto
**B1. Archivo de imágenes:** política de nombres `id-tema-rol-v1.webp`; fuente, licencia, autor, fecha, ALT, descripción, hash y registro de edición. Evitar imágenes históricas falsas.  
**B2. Primer paquete editorial (propuestas de títulos, no publicaciones aprobadas):**
- José Hernández: biografía contextual con referencias bibliográficas.
- La vida del gaucho en el siglo XIX: hechos, usos y cautelas sobre generalizaciones.
- La frontera en la obra: relato literario frente a contexto histórico.
- Guía de lectura: cómo están organizadas La ida y La vuelta.
- Glosario inicial de términos gauchescos documentados.
**B3. Fichas de personajes:** Martín Fierro, Cruz, el Viejo Vizcacha; distinguir personaje literario, interpretaciones y citas.
**B4. Control editorial:** verificación de fuentes, citas, licencias, metadatos y aprobación.

**Aceptación:** cada pieza posee ficha documental, referencias comprobables, licencia visual y revisión antes de publicarse.

### Etapa C — herramienta de lectura avanzada
- Ajustes de tipografía, ancho de columna, tema oscuro opcional y controles sin molestar al lector.
- Navegación por estrofa y verso, enlaces permanentes, «continuar leyendo» cuando el usuario lo solicita; no depender de seguimiento personal.
- Buscador de texto con filtros por parte/canto, resultados resaltados accesibles y posible índice por lema más adelante.
- Temas basados en pasajes documentados, no solo cantos enteros; explicar que son una clasificación editorial.

**Aceptación:** preservar orden exacto, identificadores y hashes; evitar contenido editorial dentro de los versos.

### Etapa D — expansión audiovisual
- Crear ficha de producción unida a artículo/canto/versos, con guion, fuentes, permisos, locución, subtítulos y enlaces.
- Publicar primero una lectura original o pieza piloto con derechos aclarados.
- Mantener carpetas de guiones, metadatos y transcripciones en formatos abiertos para YouTube, Shorts, Reels y otras plataformas.
- No presentar bloques multimedia vacíos mientras no haya material listo.

**Aceptación:** cada contenido audiovisual es trazable a la documentación y se puede actualizar o rehacer.

### Etapa E — lanzamiento y medición
- Validación GitHub Actions: compilación, pruebas de rutas, integridad documental, accesibilidad básica, imágenes y metadatos.
- Previsualización Cloudflare, revisión humana del resultado y autorización de producción.
- Confirmar `martinfierro.org` y HTTPS, redirecciones y sitemap.
- Auditoría de rendimiento móvil, indexación y enlaces rotos; corregir antes de difundir.

## 2. Arquitectura de carpetas objetivo

```text
martinfierro/
├── fuentes/                         # originales, documentación, ediciones y auditoría
├── datos/                           # versos, JSON documental y relaciones
├── obra/                            # corpus estable: NO MODIFICAR por rediseño
├── src/
│   ├── content/                     # revista, personajes, glosario, multimedia
│   ├── content.config.ts            # esquemas de validación Astro
│   ├── components/                  # sistema modular visual/editorial
│   ├── layouts/                     # revista, lectura, documentación
│   ├── pages/                       # rutas públicas
│   ├── styles/                      # tokens, tipografía, responsive
│   └── lib/                         # consultas tipadas al corpus
├── public/
│   └── media/                       # imágenes autorizadas, adaptadas a web
├── documentacion/                   # directivas, decisiones y listas de control
└── .github/workflows/               # CI de contenido y despliegue
```

## 3. Modelo de dato de artículo propuesto

```yaml
id: articulo-jose-hernandez-001
slug: jose-hernandez-y-su-epoca
titulo: José Hernández y su época
resumen: Contexto bibliográfico de la vida del autor.
estado: propuesta
autor: pendiente
fecha_publicacion: null
categoria: historia
tags: [jose-hernandez, siglo-xix]
fuentes: []
citas_corpus: []
imagen_destacada: null
licencia_imagen: null
derivados: []
version: 0.1
```

Los ejemplos son campos de esquema, no afirmaciones biográficas ni artículos aprobados.

## 4. Riesgos y mitigación
- **Mezcla de ediciones:** jamás sobrescribir transcripciones originales o restauraciones documentadas; CI de hashes.
- **Afirmaciones históricas inexactas:** exigir fuentes y contraste, señalización de interpretación.
- **Licencias de imágenes:** inventario obligatorio, bloqueo de imágenes sin procedencia.
- **Portada vacía:** renderizar secciones condicionalmente, sin contenido de muestra ficticio.
- **Regresiones de Cloudflare:** PR + preview antes de `main`; conservar mecanismos de recuperación.
- **Riesgo de dependencia local:** ejecutar compilación y gestión en GitHub y Cloudflare, nunca requerir PC.
- **Lentitud:** carga diferida, tamaños adaptativos, límites de peso e imágenes modernas.

## 5. Orden recomendado de implementación
1. Guardar directiva y plan como propuestas versionadas.
2. Levantar Content Collections y diseño de componentes en rama separada.
3. Producir preview visual con imágenes de derechos claros; validar accesibilidad y rendimiento.
4. Aprobar identidad y el primer paquete editorial.
5. Incorporar módulos al sitio público con pruebas automatizadas.
6. Desarrollar sistema de recursos audiovisuales conectado a las fichas y fuentes.

## 6. Definición de terminado para la primera revista
Existe una portada editorial visual; navegación principal consistente; módulos que no inventan artículos; un artículo piloto aprobado, con fuentes e imágenes autorizadas; lectura completa conservada; buscador funcional; CI verde; preview revisada y autorización para publicar. La apariencia definitiva y audiovisuales completos no son requisitos de esta primera entrega.

## 7. Autoridad y control
Esta propuesta **no modifica la Directiva Maestra** y **no autoriza por sí misma cambios de producción**. La conformidad humana sobre identidad y contenido precede a la publicación. Se admite desarrollo técnico y generación de previews sin aprobación adicional cuando no se altere el corpus ni se publique contenido editorial nuevo.
