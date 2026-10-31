# MARTINFIERRO.ORG — Cronograma de recuperación editorial y documental

**Inicio:** 2026-10-31. **Responsable editorial:** MARTINFIERRO.ORG.  
**Regla de seguimiento:** solo se marca `[x]` cuando la corrección está incorporada en `main` y pasó la compilación Astro. La compilación no demuestra por sí sola que todos los enlaces externos respondan ni que el desplegado esté visible en Cloudflare. Los hitos completados se identifican con su PR.

## Etapa 1 — Riesgos críticos de integridad y contenido

- [x] **ARCH-01 (PR #40):** retirar la miniatura externa inestable de la carta a Carolina; mantener consulta del manuscrito de 1865 mediante ficha y PDF originales de Biblioteca Pública de las Misiones; señalar el uso educativo y no redistribuir el escaneo.
- [x] **ARCH-02 (PR #40):** eliminar atributo duplicado de la ficha del ejemplar corregido de 1872 y preservar su referencia a Academia Argentina de Letras / Wikimedia Commons.
- [x] **EXEG-01 (PR #40):** sustituir la introducción superficial por siete lecturas documentadas de estrofas íntegras, con referencias al corpus, voz narrativa, frontera, memoria, injusticia y bibliografía institucional.
- [ ] **ARCH-03:** auditoría exhaustiva de enlaces externos mediante solicitudes GET reales y su comportamiento desde navegador; registrar respuestas, accesibilidad y alternativas oficiales.
- [ ] **ARCH-04:** sumar nuevas piezas primarias con signatura, custodia, fecha, licencia y reproducción permitida. Prioridad: prensa de Hernández, cartas, ediciones de 1879.
- [ ] **EXEG-02:** ampliar el análisis al arco de *La vuelta* y extender gradualmente el estudio a los 46 cantos, con referencias por estrofa y problemas de recepción.

## Etapa 2 — Desarrollo de secciones insuficientes

- [x] **HERN-00 (PR #41):** ampliar biografía de Hernández con diez hitos comentados, periodismo, política, trayectoria editorial y cuatro documentos patrimoniales accesibles.
- [x] **REV-00 (PR #41):** publicar un artículo independiente sobre pulperías y reorganizar Revista para destacar artículos reales, además de las guías temáticas.
- [x] **CULT-01 (PR #41):** publicar una guía específica para lectores extranjeros sobre mate, bombilla, cebar, pulpería, fogón, payada, vestimenta, aperos y tradiciones del Río de la Plata, con fuentes oficiales y términos en inglés.


- [ ] **TEMAS-01:** agregar investigaciones, imágenes patrimoniales y fuentes originales a *La frontera*.
- [ ] **TEMAS-02:** extender *Justicia y autoridad*, *Amistad y lealtad*, *Familia y regreso* y *Consejos y sabiduría* con documentación real; no repetir automáticamente el mismo esquema de tarjetas.
- [ ] **HERN-01:** continuar biografía documental de Hernández: identificación de actas originales, catálogo completo de prensa y discursos, correspondencia fechada, familia y permisos de reproducción. La síntesis y cuatro fuentes fueron implementadas en HERN-00.
- [ ] **REV-01:** continuar serie de artículos independientes y documentados (oficios, fortineras, cultura material, música y vida cotidiana). El primer artículo de pulperías ya está en REV-00.

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

**Observación:** ARCH-01/02 y EXEG-01 fueron implementados en PR #40. La marcación de completados presupone su integración y validación, que deben comprobarse antes del cierre de esta misma PR.

**Nota de etapa 2:** HERN-00, REV-00 y CULT-01 abarcan implementación editorial y compilación. Siguen pendientes una auditoría integral de enlaces de salida, reproducciones adicionales de fuentes primarias y verificación visual del despliegue.
