# MF-ES-024 — Cotejo individual de La vuelta, cantos I–III

Fecha: 2026-11-02 · Rama: `feat/mf-es-plan-auditable-023-20261101`.

Se leyeron las **79 estrofas y 474 versos** de La vuelta I–III (396–474) y se confrontaron los hechos y análisis de `exegesis-vuelta.ts`, las preguntas de `preguntas-vuelta-estudiantes.ts`, los personajes, los pasajes comentados, el vocabulario y las alertas críticas. Los veredictos se refieren a la correspondencia con el corpus almacenado en este repositorio, no a una edición crítica externa.

| Guía | Evidencia examinada | Hallazgo y veredicto |
| --- | --- | --- |
| Vuelta I (396–422; 162 versos) | 396–402: regreso de la voz cantora, memoria, sufrimiento y continuidad; 403–417: función del canto y defensa de la propia voz; 418–422: voluntad de trabajar, atención a los oyentes y autodenominación de viejo. Personaje: Fierro; preguntas, estrofas 396/402, notas y glosario coherentes. | **Conforme** |
| Vuelta II (423–450; 168 versos) | 423–428: duelo por la familia; 429–436: llegada con Cruz, hostilidad y prudencia; 437–438: el cacique dispone cautiverio para intercambio; 439–450: parlamento y vigilancia. Las generalizaciones sobre indígenas son del narrador. Preguntas, notas y términos corresponden a los versos. | **Conforme** |
| Vuelta III (451–474; 144 versos) | 451–458: resistencia y sufrimiento; 459–461: prejuicios del narrador y separación; 462–463: dos años separados y reencuentro; 464–470: toldo y caza; 471–474: supervivencia mediante captura de animales. | **Corregido glosario** |

## Corrección demostrada en Vuelta III

El glosario atribuía a **«partida»** (estrofa 451) el significado literal de grupo policial, aunque aquí es una expresión figurada de lucha o trance. Asimismo, **«leva»** (estrofa 471) se explicaba únicamente como reclutamiento militar cuando en el contexto se aplica metafóricamente a la captura de animales para alimento. Se precisó también el uso comparativo de **«rancho»** en 456. Cambios exclusivos del registro `vuelta/3` de `src/data/vocabulario-cantos-estudiantes.ts`, sin modificar otras apariciones de las palabras.

Archivo corregido y leído nuevamente desde GitHub; commit `0325d8d79a9016a83d7417ad295794c05c0b38c1`.

## Estado global de la auditoría

**16/46 guías cotejadas individualmente** (Ida 13/13; Vuelta 3/33). **Pendientes: Vuelta IV–XXXIII (30 guías)**. Falta la confirmación final de CI para todos los cambios. No modificar el poema original, no fusionar `main`, no desplegar ni alterar indexación.
