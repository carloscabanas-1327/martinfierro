# MF-ES-024 — Cotejo individual de La vuelta, cantos VII–X

**Fecha:** 2026-11-02. **Rama:** `feat/mf-es-plan-auditable-023-20261101`. **Estado:** tanda revisada, no implica cierre global.

## Método y alcance

Lectura íntegra de **104 estrofas / 626 versos** del corpus almacenado en `obra/vuelta/estrofas.json` (estrofas **551–654**). Se contrastaron los títulos, los hechos y análisis, los contextos interpretativos, la identidad y acciones de personajes, las tres preguntas de cada canto, la selección y justificación de estrofas, las notas de pasajes, las cinco entradas de vocabulario por canto y las alertas críticas de `src/data/`. Se distinguen las afirmaciones del narrador de la evidencia histórica externa. No se certifica el corpus frente a una edición crítica externa.

| Guía | Cotejo contra el texto completo | Hallazgo y resultado |
| --- | --- | --- |
| **Vuelta VII** (551–564, **14 estrofas, 84 versos**) | **551** recuerda la muerte de Cruz, narrada previamente; **552–553** entierro y cruz sobre la tumba; **554–557** duelo y recuerdos de familia, pago y amigo; **558–564** Fierro oye los lamentos, encuentra a la mujer golpeada y ve un rebenque ensangrentado. Se contrastaron preguntas, actuaciones de Fierro, notas de 551/554, glosario y alerta crítica. | **Corregidos** el glosario de «pampa» (564: persona indígena, no región), el uso contextual de «rebenque» (564: arma del maltrato, no utensilio empleado con el caballo) y la primera pregunta para distinguir recuerdo/entierro de la muerte relatada en VI. |
| **Vuelta VIII** (565–581, **17 estrofas, 102 versos**) | **565–566** la cautiva relata muerte del marido, captura y situación con su hijo; **568–575** opresión y acusación de brujería; **576–581** tortura y muerte del niño. En **571** y **580–581** Fierro reproduce palabras de la mujer, pero la narración principal sigue mediada por él. Las notas 565/581, preguntas, personajes, cinco voces del glosario y alerta crítica corresponden al canto. | **Conforme**. La caracterización de indígenas y mujeres indígenas se presenta como perspectiva del narrador, no como descripción histórica imparcial. |
| **Vuelta IX** (582–623, **42 estrofas, 254 versos**) | **582–585** la mirada y los lamentos motivan la intervención; **586–603** combate y caída de Fierro; **604–606** la cautiva lo salva al apartar al agresor; **607–620** lucha y muerte del agresor; **621–623** agradecimiento religioso y recogida de los restos del niño con ayuda de Fierro. Las preguntas sobre colaboración y suspenso, personajes, notas de 582/623 y alerta son compatibles. | **Corregido** «pampa»: en **597** designa al combatiente indígena, no la llanura. Se comprobó que el auxilio es recíproco, sin atribuir todo el rescate a una sola persona. |
| **Vuelta X** (624–654, **31 estrofas, 186 versos**) | **624** Fierro teme represalias; **625–638** caballos y métodos de doma; **639–649** huida, ocultamiento, orientación y hambre; **650–653** llegada a estancia y despedida de la cautiva; **654** anuncia a sus hijos presentes y les cede la palabra. Se cotejaron las preguntas, la actuación de ambos personajes, notas 624/654, glosario y alerta. | **Corregido** «pampa»: en **626, 628 y 630** designa al hombre indígena dueño/domador de un caballo, no la región. El relato sí atribuye a ese domador un trato paciente con el animal (**632–637**), sin extrapolarlo a una afirmación etnográfica universal. |

## Correcciones materiales verificadas

1. `src/data/vocabulario-cantos-estudiantes.ts`, entradas `vuelta/7/pampa`, `vuelta/7/rebenque`, `vuelta/9/pampa` y `vuelta/10/pampa`: se reemplazaron definiciones genéricas o incorrectas por el sentido que tienen en las estrofas respectivas. **Commit `8110ea926025e92b8e6fb43fac18bf6264e34b6c`**. Se recuperó el archivo desde GitHub y se verificaron las cuatro definiciones.
2. `src/data/preguntas-vuelta-estudiantes.ts`, `vuelta/7`: se reformuló «¿Cómo se narra la muerte de Cruz?» por «¿Cómo recuerda Fierro la muerte de Cruz y qué hace con su cuerpo en las estrofas 551–553?», para no confundir el recuerdo y entierro de VII con la muerte narrada en VI. **Commit `71f5da32ff9668e6b6de7628afd3607c5d6e1c7e`**. Se verificó el texto recuperado desde GitHub.

## Comprobación estructural independiente posterior a los cambios

Lectura directa de los archivos de datos y corpus de la rama: **46 guías, 1193 estrofas, 7210 versos, 138 preguntas, 225 voces de glosario, 104 notas de pasajes**. Se verificó para cada guía la existencia de su lectura, preguntas, personajes, estrofas citadas, notas correspondientes y presencia literal de cada término del glosario en el canto. **Cero incidencias en estas comprobaciones**. Esto no equivale a una compilación Astro ni valida derechos de imágenes.

## Límites y siguiente tanda

**23/46 guías cotejadas** (Ida I–XIII y Vuelta I–X); **23 pendientes** (Vuelta XI–XXXIII). Falta revisar el estado definitivo de CI para los commits de esta tanda y el bloqueo editorial preexistente por derechos de imágenes de revista. La próxima tanda empieza por **Vuelta XI–XIV**. No se alteraron los versos, ni `main`, ni despliegues, ni indexación.
