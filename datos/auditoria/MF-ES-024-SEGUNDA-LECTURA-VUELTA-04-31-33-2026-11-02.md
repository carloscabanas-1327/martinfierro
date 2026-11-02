# MF-ES-024 — Segunda lectura contextual de Vuelta IV, XXXI y XXXIII

Fecha: 2026-11-02. Rama: `feat/mf-es-plan-auditable-023-20261101`. **Auditoría filológica abierta; cobertura individual previa 46/46.**

## Alcance y método

Segunda revisión de las afirmaciones editoriales de tres guías ya cotejadas: análisis y contexto, preguntas, actuaciones de personajes, comentarios de pasajes, pruebas literarias y glosario. Se contrastaron directamente con los versos del corpus de `obra/vuelta/estrofas.json`, sin modificarlo. El objetivo de esta revisión fue detectar definiciones que coincidían literalmente con los versos, pero trasladaban a un canto un sentido equivocado o una situación ajena. Se inspeccionaron además las glosas de Vuelta XXIII–XXVI para identificar posibles confusiones de `partida`, `juez` y otras voces polisémicas; no se justificó cambiar esas cuatro guías en esta pasada.

## Matriz por canto

| Guía | Evidencia del corpus | Hallazgo probado | Corrección |
| --- | --- | --- | --- |
| **Vuelta IV** | **475:** «la pampa con su rugir» designa el espacio geográfico; **481:** «todo pampa valiente / anda siempre bien montao» designa a un hombre indígena. | La entrada `pampa` la definía solo como extensión geográfica, pese a que el canto utiliza también la acepción personal. | Se explicitan ambos sentidos y sus estrofas. |
| **Vuelta XXXI** | **1143**, versos 29–46 de la estrofa extensa: el gaucho se cubre para dormir al aire libre, conserva freno y rebenque a mano y duerme «mas siguro que en su rancho». | La glosa `rancho` decía que la pérdida de la vivienda es decisiva, pero aquí se **compara** la seguridad del descanso al aire libre con la del rancho: no se narra ninguna pérdida. | Se define la vivienda y se explica la comparación concreta. |
| **Vuelta XXXIII** | **1187:** «no se ha de llover el rancho / en donde este libro esté». Relacionar con la declaración editorial de 1186 y el cierre de 1191–1193. | La glosa `rancho` repetía la pérdida de la casa, ajena a este canto, y omitía el uso figurado de protección asociada al libro. | Se documenta la expresión figurada sin convertirla en un hecho literal de la trama. |

### Comprobaciones de otras secciones

- **IV:** el análisis atribuye al narrador sus generalizaciones sobre los pueblos indígenas; la pregunta sobre el prejuicio de la estrofa 490, la actuación de Fierro, las notas y la prueba literaria se mantienen compatibles con el canto. No se encontraron otros errores demostrados en esas secciones.
- **XXXI:** la estrofa 1143 muestra a los presentes impidiendo la pelea y luego el descanso rural; análisis, preguntas, actuaciones, tres notas y prueba literaria reflejan la transición. La glosa `rebenque` se refiere correctamente al objeto que el gaucho conserva a mano.
- **XXXIII:** 1175 contiene la promesa no revelada, 1176 el cambio de nombres y 1182 la reivindicación de casa, escuela, iglesia y derechos; las secciones de análisis, preguntas, personajes, notas y prueba literaria no requieren correcciones en esta lectura. El uso metafórico de `cuero` en 1186 ya estaba corregido.

## Cambios y verificaciones

- **Commit de contenido:** `1124a72348d15762b8722183f2455185ea30ea3c`. Único archivo modificado: `src/data/vocabulario-cantos-estudiantes.ts`. Tres glosas corregidas en una modificación atómica, sin cambios de API ni de formato.
- **Lectura posterior en GitHub:** verificadas las tres explicaciones y la integridad del JSON que contiene las entradas del glosario.
- **Control estático posterior:** 46 guías, 225 términos presentes como palabras completas y con grafía exacta en sus respectivos cantos (**0 faltantes**), 104 notas, 138 preguntas, 1193 estrofas y 7210 versos.
- **Corpus sin cambios:** Ida blob SHA `5d0de1ee6f8ffe088cd2a79360017d95ab9b9e7d`; Vuelta blob SHA `8034740ca956cf77daf2aa76a2ca5bfbf2199987`.

## CI y límites

Antes de esta corrección, el commit `1dd44ae` de la rama presentaba **failure** en `Validar portal Astro` (paso de cobertura del índice general) y en `Auditoría de aprobación editorial (ES)` (bloqueo de imágenes/derechos de revista). Se debe consultar el resultado de los workflows del nuevo commit; los controles estáticos anteriores **no** equivalen a un CI aprobado. No se alteraron el índice, los idiomas reservados, las imágenes, `main` ni los despliegues.

**Estado acumulado: 46/46 guías con primer cotejo documentado; 0 guías nuevas; 3 errores de glosa corregidos en segunda lectura.** El hallazgo confirma que la presencia literal de una palabra no garantiza el significado contextual. La certificación integral sigue abierta mientras existan pruebas fallidas y sin pretender que una segunda lectura parcial prueba ausencia total de errores.
