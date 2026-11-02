# MF-ES-024 — Segunda lectura filológica: La ida III–VI, VIII, XII–XIII y glosa de Vuelta XIV

Fecha: 2026-11-02. Rama: `feat/mf-es-plan-auditable-023-20261101`.
Corte inicial: `04acb76f9d1cd997925140388ea30841f861b6b8`.
**Cobertura histórica de primera lectura: 46/46. Nuevas guías incorporadas: 0.**
Esta revisión añade una lectura contextual de siete cantos de La ida y un cotejo focalizado de dos estrofas de Vuelta XIV. No equivale a una nueva certificación editorial integral.

## Matriz de contraste (afirmación, pasaje y veredicto)

| Guía | Corpus revisado | Comprobación de hechos, interpretación, voces, preguntas, glosas y notas | Veredicto |
| --- | --- | --- | --- |
| Ida III | 49–103 | Leva en el baile (52–59), servicio y tareas agrícolas en el fortín (65–78), combate (89–103); el hogar se anticipa como tapera (49), y «rancho» recuerda la vida previa (50). | Sin error nuevo demostrado. |
| Ida IV | 104–133 | Privaciones (105–111), comercio del pulpero (114–121), reclamo de haberes y exclusión de la lista (122–131). «Matrero» en 104 alude a la situación de Fierro tras el combate. | Sin error nuevo demostrado. |
| Ida V | 134–155 | Deseo de fuga (134–139), centinela y castigo de estaqueada (140–148), descalificaciones de reclutas extranjeros expresadas por Fierro (149–155). | Sin error nuevo demostrado. |
| Ida VI | 156–187 | Deserción (165–168), tapera y rancho perdido (169–171), bienes y noticias familiares (172–179), conjeturas explícitas sobre los hijos (180–182). | Sin error nuevo demostrado. |
| Ida VIII | 222–241 | Pelea en el boliche (222–228), huida por el palenque (228–229), reflexión sobre el gaucho perseguido (230–241). | Sin error nuevo demostrado. |
| Ida XII | 347–366 | Recuerdo de las privaciones (347–350), incorporación de Cruz a la partida policial (351–353), diálogo y crítica al poder (354–366). | Sin error nuevo demostrado. |
| Ida XIII | 367–395 | Discurso de Fierro (367–387), rotura de guitarra (388–389), voz narrativa externa y partida de ambos (390–395). | Sin error nuevo demostrado. |
| Vuelta XIV — glosa «rancho» | 738 y 749 | **Error:** la glosa anterior asociaba ambas estrofas al rancho deteriorado de Vizcacha. En **738** se habla del **rancho de unas vascas** donde el muchacho lastima a un cachorro; en **749** se describe **otro rancho**, medio deshecho, que servía de guarida a Vizcacha. Son dos referentes distintos. | **Corregido** en `src/data/vocabulario-cantos-estudiantes.ts`, commit `c1154763045df32a3252ad6c53350ceef1b57804`. |

## Prueba de la corrección

- Se releyó el archivo de vocabulario en GitHub después del commit y se comprobó que la glosa nueva diferencia las estrofas 738 y 749.
- Comparación de commits `04acb76...c115476`: **un único archivo modificado**, `src/data/vocabulario-cantos-estudiantes.ts` (1 línea sustituida).
- Comprobación independiente de datos: **13 guías de Ida + 33 de Vuelta; 46 grupos de glosario y 225 entradas; 138 preguntas; 104 notas; 1193 estrofas y 7210 versos**. Todas las entradas del glosario tienen correspondencia literal de palabra completa con tilde en el canto respectivo (**0 ausentes**). Esta prueba no acredita por sí sola la corrección semántica de cada glosa.
- SHA de corpus **sin cambios**: Ida `5d0de1ee6f8ffe088cd2a79360017d95ab9b9e7d`; Vuelta `8034740ca956cf77daf2aa76a2ca5bfbf2199987`.
- Consulta de GitHub Actions para `c115476`: **sin ejecuciones devueltas**. No se certifica Astro ni la auditoría editorial de imágenes/derechos; los bloqueos técnicos documentados siguen pendientes de verificación.

## Pendientes

Consultar los resultados de CI del estado de rama más reciente y continuar la revisión contextual de glosas y afirmaciones sin corregir nada que no sea un error demostrado. No tocar el corpus, `main`, despliegues ni indexación. El 46/46 es cobertura documentada, **no certificación integral**.
