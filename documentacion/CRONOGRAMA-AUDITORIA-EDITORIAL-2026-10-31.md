# MARTINFIERRO.ORG — Cronograma de recuperación editorial y documental

**Inicio:** 2026-10-31. **Responsable editorial:** MARTINFIERRO.ORG.  
**Regla de seguimiento:** solo se marca `[x]` cuando la corrección está incorporada en `main` y pasó la compilación Astro. La compilación no demuestra por sí sola que todos los enlaces externos respondan ni que el desplegado esté visible en Cloudflare. Los hitos completados se identifican con su PR.

## Etapa 1 — Riesgos críticos de integridad y contenido

- [x] **ARCH-01 (PR #40):** retirar la miniatura externa inestable de la carta a Carolina; mantener consulta del manuscrito de 1865 mediante ficha y PDF originales de Biblioteca Pública de las Misiones; señalar el uso educativo y no redistribuir el escaneo.
- [x] **ARCH-02 (PR #40):** eliminar atributo duplicado de la ficha del ejemplar corregido de 1872 y preservar su referencia a Academia Argentina de Letras / Wikimedia Commons.
- [x] **EXEG-01 (PR #40):** sustituir la introducción superficial por siete lecturas documentadas de estrofas íntegras, con referencias al corpus, voz narrativa, frontera, memoria, injusticia y bibliografía institucional.
- [ ] **ARCH-03:** auditoría exhaustiva de enlaces externos mediante solicitudes GET reales y su comportamiento desde navegador; registrar respuestas, accesibilidad y alternativas oficiales.
- [ ] **ARCH-04:** sumar nuevas piezas primarias con signatura, custodia, fecha, licencia y reproducción permitida. Prioridad: prensa de Hernández, cartas, ediciones de 1879.
- [x] **EXEG-02-VUELTA (PR #49):** estudio literario y contextual de los **33 cantos de La vuelta**, cada uno con cita extraída del corpus y enlace al canto completo; estudio autónomo en `/exegesis/la-vuelta/`. **No implica comentario de cada verso ni certificación filológica.**
- [ ] **EXEG-02-IDA:** ampliar el análisis integral de los 13 cantos de La ida y completar la revisión verso por verso y bibliografía crítica de ambas partes.

## Avances documentales de esta ronda (sin declarar cerrados los hitos extensos)

- [x] **EXEG-02A (PR #44):** añadir siete lecturas de La vuelta, con identificación precisa de estrofas; quedan pendientes los cantos no estudiados.
- [x] **TEMAS-01A (PR #44):** incorporar dossier con fuentes académicas y versos de La frontera.
- [x] **TEMAS-02A (PR #44):** incorporar dossier documental a Justicia y autoridad; las otras tres guías siguen pendientes.
- [x] **ARCH-03A (PR #44):** registrar primera ronda de comprobación y sus límites; la auditoría exhaustiva sigue abierta.
- [x] **ARCH-04A (PR #44):** agregar registros institucionales de otras obras históricas de Hernández, diferenciando 1882 y la edición digitalizada de 1884; no equivale aún a ampliar la colección de manuscritos reproducidos.
- [x] **TEXT-01A (PR #44):** clasificar el conjunto de alertas (27 de coincidencia 75–90 %, 28 menores de 75 %) y advertir sobre problemas de alineación; los dictámenes individuales siguen pendientes.

## Etapa 2 — Desarrollo de secciones insuficientes

- [x] **EXEG-02B (PR #49):** interpretar cada canto de La vuelta con foco en voces narrativas, el desierto, Cruz, la cautiva, Vizcacha, Picardía, el Moreno, la payada y las máximas del cierre; cotejar presencia de 33 cantos en el corpus. Las citas no modifican los textos fuente.


- [x] **HERN-00 (PR #41):** ampliar biografía de Hernández con diez hitos comentados, periodismo, política, trayectoria editorial y cuatro documentos patrimoniales accesibles.
- [x] **REV-00 (PR #41):** publicar un artículo independiente sobre pulperías y reorganizar Revista para destacar artículos reales, además de las guías temáticas.
- [x] **CULT-01 (PR #41):** publicar una guía específica para lectores extranjeros sobre mate, bombilla, cebar, pulpería, fogón, payada, vestimenta, aperos y tradiciones del Río de la Plata, con fuentes oficiales y términos en inglés.


- [ ] **TEMAS-01:** agregar investigaciones, imágenes patrimoniales y fuentes originales a *La frontera*.
- [ ] **TEMAS-02:** extender *Justicia y autoridad*, *Amistad y lealtad*, *Familia y regreso* y *Consejos y sabiduría* con documentación real; no repetir automáticamente el mismo esquema de tarjetas.
- [ ] **HERN-01:** continuar biografía documental de Hernández: identificación de actas originales, catálogo completo de prensa y discursos, correspondencia fechada, familia y permisos de reproducción. La síntesis y cuatro fuentes fueron implementadas en HERN-00.
- [ ] **REV-01:** continuar serie de artículos independientes y documentados (oficios, fortineras, cultura material, música y vida cotidiana). El primer artículo de pulperías ya está en REV-00.

## Nueva ronda: fotografías SEO y tres guías críticas

- [x] **CULT-02A (PR #46):** preparar la lógica de doce tarjetas con imágenes WebP, nombres SEO, textos ALT, crédito de recreación digital y respaldo sin enlace roto, responsive. **Pendiente aparte:** subir los doce binarios para ver las fotografías publicadas.
- [x] **TEMAS-02B (PR #46):** ampliar Amistad y lealtad, Familia y regreso, Consejos y sabiduría con interpretación diferenciada, estrofas exactas del corpus y referencias académicas enlazadas. Requieren todavía revisión filológica externa.
- [ ] **CULT-02B:** los doce WebP y `mate-pava-yerba.webp` **ya están subidos a las carpetas correctas de `main` y sus nombres y cantidades fueron comprobados**. Quedan pendientes la comprobación HTTP 200 en Cloudflare, el diseño en PC/móvil y sustituir los dos recortes de menor resolución por maestros.

## Etapa 3 — Integridad de la edición y metodología

- [ ] **TEXT-01:** investigar los 55 casos con coincidencia inferior al 90 % frente a la edición comparada; clasificar variantes y justificar cada resolución sin alterar los fuentes Gutenberg originales.
- [ ] **META-01:** índice institucional unificado para todas las fuentes primarias, con procedencia, derechos y estado de verificación.
- [ ] **MULTI-01:** mantener como preliminares las fichas de traducciones mientras no exista transcripción completa autorizada.
- [ ] **CONT-01:** habilitar canal privado de consultas editoriales verificable, con política de privacidad adecuada.

## Criterios de finalización de cada tarea

1. Fuente identificada, enlace a pieza exacta y naturaleza del objeto (original, facsímil, transcripción, recreación o crítica).
2. Derechos y custodia declarados. No copiar material restringido desde un repositorio sin licencia suficiente.
3. Texto contrastado con versos/cantos cuando corresponda; interpretaciones claramente separadas del original.
4. Prueba de construcción Astro concluida y cambios fusionados con trazabilidad.
5. Prueba de acceso público y de enlaces externos anotada explícitamente, sin confundirla con la prueba de compilación.

**Observación:** ARCH-01/02 y EXEG-01 se integraron en PR #40 con Astro validado. Las tareas de fotos y temas requieren integración del PR indicado para contabilizarse como cerradas.

**Nota de etapa 2:** HERN-00, REV-00 y CULT-01 abarcan implementación editorial y compilación. Siguen pendientes una auditoría integral de enlaces de salida, reproducciones adicionales de fuentes primarias y verificación visual del despliegue.
