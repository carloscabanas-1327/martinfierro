# MF-ES-024 — Segunda lectura filológica: La vuelta V y VI

Fecha: 2026-11-03. Rama: `feat/mf-es-plan-auditable-023-20261101`. **Auditoría integral abierta.**

## Método y alcance

Se recuperaron directamente de GitHub `obra/vuelta/estrofas.json` y `src/data/exegesis-vuelta.ts` en la rama de auditoría. Se cotejó la totalidad de las **54 estrofas y 324 versos** de los cantos V (497–524; 28 estrofas, 168 versos) y VI (525–550; 26 estrofas, 156 versos) con las afirmaciones del análisis y contexto editorial. Se contrastaron también las transiciones de voz, los personajes mencionados y las afirmaciones históricas o médicas que podrían confundirse con hechos demostrados. Este informe **no acredita** una segunda validación exhaustiva de cada pregunta, glosa y nota: esos componentes permanecen respaldados por el cotejo inicial documentado y deberán volver a revisarse individualmente.

## Matriz de evidencia por canto

| Canto | Afirmación o interpretación cotejada | Evidencia literal del corpus | Veredicto |
| --- | --- | --- | --- |
| V | El regreso de una incursión y el reparto del botín articulan la primera parte del canto. | 497–503: regreso, ganado, reparto y matanza. | Conforme. |
| V | El narrador reconoce una regla de igualdad en el reparto, pese al tono hostil. | 502: «con igualdad, sin malicia» y «regla de justicia». | Conforme; se mantiene la precisión introducida en el cotejo anterior. |
| V | El trato a las mujeres y la danza forman parte del relato. | 509–518: comentarios sobre las mujeres; 519–524: descripción de la danza. | Conforme como **representación del narrador**, no constatación etnográfica neutral. |
| V | El discurso no debe tomarse como descripción histórica completa de la frontera. | 500, 506–508, 514–518: generalizaciones y descalificaciones explícitas de la voz de Fierro. | Conforme como advertencia editorial; el corpus no basta por sí solo para probar la totalidad del contexto historiográfico externo. |
| VI | Un hombre que había protegido a Fierro y Cruz enferma y muere. | 525–528: reconocimiento y gratitud; 541–544: enfermedad, cuidados y muerte. | Conforme. |
| VI | El relato representa una epidemia sin permitir fijar diagnósticos y causas con certeza médica moderna. | 529–540: «virgüela», «peste», fiebre, remedios y atribuciones supersticiosas; 537: conjetura de los personajes sobre la dieta. | Conforme: el texto **nombra viruela**, pero no prueba etiología ni mecanismos de contagio. |
| VI | Cruz enferma y muere dentro de este canto. | 545–550: enfermedad, recomendación del hijo (547–548), muerte (549) y desmayo de Fierro (550). | Conforme. |
| VI | El hijo de Cruz queda encomendado a Fierro, pero no aparece todavía en escena. | 547–548: pedido de buscar al hijo; 549–550: fallecimiento y duelo. | Conforme. |

## Resultado y límites

**Guías con cotejo inicial documentado: 46/46. Guías nuevas: 0.** Segunda lectura focalizada: **2 guías, 54 estrofas, 324 versos**. **Errores demostrados: 0; correcciones de contenido: 0.** No se alteró el corpus, la exégesis, `main`, despliegues ni indexación. Se conserva el texto original incluso cuando contiene grafías históricas o anomalías de transcripción, porque el corpus está protegido por la orden de trabajo.

**Pruebas:** lectura y recuento de las 54 estrofas/324 versos desde el JSON y cotejo directo de las dos entradas de exégesis; pendiente certificación automatizada del HEAD (Astro, cobertura de índice, derechos e imágenes). No se interpreta una ausencia de estados como aprobación.

**Próxima ejecución:** cotejar en detalle preguntas, glosario, personajes, pruebas y notas de V y VI contra las estrofas ya examinadas; revisar los estados efectivos de CI de la rama. No declarar auditoría integral finalizada sin evidencia completa y pruebas satisfactorias.
