# Cotejo filológico — La vuelta, XXVII–XXXIII

Fecha: 2026-11-02. Rama: feat/mf-es-plan-auditable-023-20261101.

Se cotejaron los siete cantos completos (estrofas 964–1193, 230 estrofas y 1306 versos) con las guías: análisis, preguntas, personajes, glosarios, pruebas y notas. No se alteró el corpus.

| Canto | Estrofas | Evidencia y hallazgo |
|---|---|---|
| XXVII | 964–997 | Servicio de frontera, impago y defensa del compatriota (997). Sin corrección. |
| XXVIII | 998–1037 | Asistente «La Bruja» (1002–1013) y raciones menguantes (1014–1027). Sin corrección. |
| XXIX | 1038 | Una estrofa de 30 versos: desafío del Moreno. Sin corrección. |
| XXX | 1039–1142 | Payada, color de piel (1064), ley (1091–1095), hermano muerto (1127–1133). Sin corrección. |
| XXXI | 1143 | Intervención para evitar pelea y preparación de consejos. Sin corrección. |
| XXXII | 1144–1174 | Consejos sobre amistad, trabajo, unión, robo y violencia. Sin corrección. |
| XXXIII | 1175–1193 | Promesa secreta (1175), cambio de nombres (1176), derechos (1182), memoria (1191–1193). Se corrigió la omisión del cambio de nombres y derechos en el análisis, commit a4951dca7e6405d822fe144f490526faa08aac89. Verificado por lectura posterior. |

**Acumulado: 46/46 guías cotejadas.** Pendiente de certificación final: comprobar los informes, las pruebas de CI y la aprobación editorial de imágenes. No se fusionó ni desplegó.


## Revisión de regresión posterior al 46/46 (2 de noviembre de 2026)

La cobertura **46/46** acredita el recorrido individual de los cantos, pero no significa ausencia de errores. Una segunda comprobación del glosario contra los versos completos de Vuelta XXVII–XXXIII reveló **cinco definiciones contextuales equivocadas** que habían superado la prueba de presencia literal. Se corrigieron sin tocar el poema:

| Canto | Voz | Evidencia del corpus | Error anterior y corrección |
|---|---|---|---|
| XXX | `partida` | 1083, 1096, 1100 | No es una patrulla armada: se refiere a la contienda o desafío de la payada. |
| XXX | `lanza` | 1086 | Es verbo («lanzar» bramidos), no arma de asta. La explicación evita reproducir una cita no literal. |
| XXXII | `partida` | 1171 | Es una mala jugada contra una mujer, no una patrulla armada. |
| XXXII | `mate` | 1167, «El hombre no mate al hombre» | Es verbo «matar» en una exhortación; no la bebida. |
| XXXIII | `cuero` | 1186, «el gaucho es el cuero flaco» | Se emplea como metáfora del gaucho explotado, no solo como material de uso rural. |

Commits de corrección, aplicados de uno en uno y comprobados con lectura posterior: `48d607c40a7c42df37d0d6a895f14d23e4cbd4ec` y `44d53f5b3aca8b60d98ed1314ebf833d50dc3c75`. La segunda corrección retiró una paráfrasis entrecomillada que no coincidía literalmente con el corpus.

**Prueba independiente posterior a la primera corrección:** 395 estrofas de Ida + 798 de Vuelta = 1193; 7210 versos; 225 entradas de vocabulario, **0 sin presencia literal** en su canto; 104 notas; 46 guías (13 Ida, 33 Vuelta). Se cotejaron explícitamente los cinco usos citados. Los SHA del corpus siguen siendo Ida `5d0de1ee6f8ffe088cd2a79360017d95ab9b9e7d` y Vuelta `8034740ca956cf77daf2aa76a2ca5bfbf2199987`. La prueba léxica automática solo detecta presencia, **no sentido**: estos cinco errores demuestran ese límite.

**Pendiente técnico:** obtener la conclusión de los workflows del nuevo commit. En un commit anterior de esta rama, el build Astro terminaba pero el control de enlaces fallaba por siete rutas de idiomas reservadas fuera del índice; la auditoría editorial de imágenes también fallaba. Ninguno de esos bloqueos se corrige aquí, por estar fuera del alcance filológico y de las protecciones de indexación.
