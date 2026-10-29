# MARTINFIERRO.ORG — Directiva editorial y visual
**Versión:** 1.0 — PROPUESTA, pendiente de aprobación humana  
**Fecha:** 29 de octubre de 2026  
**Autoridad subordinada:** Directiva Maestra de Arquitectura Digital (12 secciones). En caso de conflicto, prevalece la Directiva Maestra.

## 1. Naturaleza del proyecto
MARTINFIERRO.ORG será simultáneamente **biblioteca documental de la obra de José Hernández y revista digital cultural**. La biblioteca conserva el poema íntegro, su procedencia y las decisiones editoriales; la revista propone interpretación, historia, divulgación, recursos educativos y nuevas narrativas.

**Regla de separación:** ningún artículo, ilustración o edición audiovisual modifica el corpus literario fuente. La sección «Leer» conserva navegación clara y bajo ruido visual; la portada y la revista pueden utilizar una estética rica en imágenes.

## 2. Niveles y responsabilidad
- **Patrimonio documental:** transcripciones originales, facsímiles autorizados, corpus estructurado, variantes, hashes, auditorías y bibliografía. Mantener originales inmutables.
- **Edición de lectura:** páginas estáticas para ambas partes, cantos, estrofas y versos, con identificadores persistentes. Hacer evidente toda enmienda.
- **Revista cultural:** artículos y dossiers firmados, fechados y citados; distinguir texto histórico, hechos, interpretación y material creativo.
- **Multimedia:** audio, videos largos, Shorts, Reels, TikTok, ilustraciones y materiales didácticos como derivados trazables de contenidos documentales.

## 3. Secciones de navegación
1. **Leer la obra:** La ida; La vuelta; índices por canto y verso; accesibilidad y ayudas para lectura.
2. **Explorar:** Temas; Personajes; Lugares; Glosario; Cronología; mapas, cuando existan fuentes suficientes.
3. **Revista:** Historia y contexto; Artículos; Interpretaciones; Curiosidades; Efemérides; Dossiers.
4. **Multimedia:** Videos; Audiolibro; Podcasts; Clips; Galería. Mostrar únicamente materiales realmente publicados; no presentar enlaces vacíos.
5. **El proyecto:** Fuentes y edición; Método; Integridad; Créditos; Contacto cuando exista un canal habilitado.

La portada no sustituye el índice de lectura. La biblioteca es siempre accesible desde la navegación principal.

## 4. Principios visuales
**Orientación:** revista literaria argentina tradicional, sobria en tipografía y colorida en fotografías e ilustraciones. No copiar marcas visuales de medios existentes.

**Paleta de trabajo, no identidad final aprobada:**
- Verde oscuro #18362A (autoridad editorial).
- Marfil #FBFAF6 (fondo de lectura).
- Dorado ocre #C79538 (detalles).
- Bordó #843C3F (destacados).
- Azul petróleo #315E68 (secciones).
- Gris tinta #202C25 (texto).

**Tipografía:** serif legible en títulos y versos; sans serif de alta legibilidad en navegación y metadatos. Cuidar interlineado, contraste WCAG AA y lectura móvil. No depender exclusivamente del color para distinguir elementos.

**Imagen editorial:** portada hero con texto alternativo y atribución; tarjetas horizontales/verticales responsivas; imágenes optimizadas (AVIF/WebP) con anchos adaptativos y carga diferida fuera del hero. Mantener rostros y hechos históricos diferenciados de ilustraciones recreadas. Nunca presentar una imagen generada como foto histórica.

**Lectura del poema:** ancho de columna 60–75 caracteres aproximados, tamaño regulable, referencias de canto y estrofa, enlaces de verso, anterior/siguiente, opción de reducir distractores. No interpolar banners o tarjetas publicitarias dentro de estrofas.

## 5. Portada editorial por módulos
1. Cabecera/marca, navegación principal y búsqueda visible.
2. Destacado visual principal: acceso a lectura + imagen documental o recreación rotulada.
3. Dos o tres noticias/ensayos destacados secundarios.
4. Accesos rápidos a La ida, La vuelta, buscador, glosario y temas.
5. Banda «De la obra al contexto»: historia, José Hernández, vida gaucha.
6. Tarjetas de personajes y dossiers.
7. Verso comentado con vínculo al identificador original.
8. Últimos artículos (solo contenido realmente existente).
9. Multimedia (solo cuando haya piezas publicadas).
10. Pie de página: método, créditos, procedencia, integridad y accesibilidad.

No usar títulos ficticios como si fueran publicaciones reales.

## 6. Ficha de contenido y reservorio
Cada artículo o dossier mantendrá:
`id`, `slug`, `titulo`, `resumen`, `fecha_publicacion`, `fecha_actualizacion`, `autor`, `revisor`, `estado`, `categoria`, `tags`, `fuentes`, `citas_corpus`, `imagen_destacada`, `licencia_imagen`, `alt`, `version`, `derivados`, `revisiones`.
Las referencias a versos utilizarán IDs permanentes de `datos/versos.json`. Cuando un hecho o atribución no esté confirmado, indicarlo expresamente.

Las piezas audiovisual/sonora y sus guiones se vincularán con el artículo, fuentes y versión del texto originario, preservando exportaciones abiertas (Markdown, JSON, TXT, WebVTT/SRT, guion y metadatos).

## 7. Política de fuentes y derechos
Prioridad: ediciones documentadas, archivos institucionales, bibliografía especializada y evidencia verificable. Registrar fecha y URL. Atribuir derechos y licencias de todas las imágenes y grabaciones. Una obra en dominio público no libera automáticamente los derechos sobre fotografías de facsímiles, ilustraciones recientes, grabaciones o marcas.

La transcripción base ya pasó controles técnicos. El cotejo filológico independiente no está concluido; los contenidos deben evitar anunciar una homologación académica inexistente.

## 8. Marco de publicación
GitHub alojará contenido y configuraciones. Astro generará páginas estáticas. Cloudflare Pages publicará versiones aprobadas. Las propuestas se harán en ramas y pull requests, con CI de compilación, enlaces, calidad editorial y ausencia de alteración del corpus. La aprobación para publicaciones productivas corresponde al responsable humano conforme a la Directiva Maestra.

**No introducir contenido editorial sin revisión humana.** Construir componentes y borradores no constituye autorización de publicación.

## 9. Rendimiento y accesibilidad
Objetivos orientativos: imágenes optimizadas, no depender de JS para leer el libro, buscador mejorado progresivamente, navegación por teclado, etiquetas semánticas, foco visible, encabezados consistentes, contraste suficiente, mapas de sitio, canonical y OG correctos. Validar rutas y enlaces antes de desplegar.

## 10. Continuidad y audiovisuales
El material escrito verificable será la fuente de episodios, audiovisuales y nuevos formatos. Cada derivado enlazará a las fuentes/documentos de origen, llevará licencia y fecha, y podrá regenerarse sin rehacer toda la investigación.

## 11. Estados de aprobación
`propuesta` → `investigado` → `redactado` → `revisado` → `aprobado` → `publicado`.
La automatización puede avanzar etapas técnicas, pero no concederse aprobación editorial.

## 12. Pendientes de decisión
Identidad visual definitiva; primer dossier; selección y licencias de imágenes; autores y responsables editoriales; ritmo de publicación; política multimedia y selección de voces. No bloquear la base técnica por esos pendientes.
