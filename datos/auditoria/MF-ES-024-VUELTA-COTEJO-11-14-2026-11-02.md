# MF-ES-024 — Cotejo filológico individual: La vuelta, cantos XI–XIV

**Fecha:** 2026-11-02. **Rama:** `feat/mf-es-plan-auditable-023-20261101`. **Alcance:** cotejo de cuatro guías contra el texto íntegro de los cantos respectivos de `obra/vuelta/estrofas.json`, más las fichas de lectura, preguntas, personajes, glosarios, pruebas y notas. **No se alteró el corpus.**

## Método y cobertura

Se leyó el texto completo de las **100 estrofas y 744 versos** de los cuatro cantos: XI (estrofa 655: 150 versos), XII (656–718: 63 estrofas, 378 versos), XIII (719–730: 12 estrofas, 72 versos) y XIV (731–754: 24 estrofas, 144 versos). Se cotejaron por separado títulos, análisis, contexto, personajes y actuaciones, preguntas, selección de evidencia, notas de pasajes y vocabulario contextual. Las estrofas 655 (XI) y 855 (XX, fuera de esta tanda) son unidades narrativas largas: no debe suponerse una sextilla por número.

## Canto XI — El reencuentro y la confesión de responsabilidad

- **Afirmaciones y acontecimientos:** la estrofa 655 cuenta cómo Fierro conoce la muerte del juez perseguidor, justifica retrospectivamente sus peleas, se entera de que el gobierno ya no lo busca, encuentra **solo a dos hijos** en una carrera y recibe la noticia de la muerte de su esposa en un hospital. El análisis y el contexto corresponden a esta evidencia; las justificaciones de Fierro deben seguir presentándose como su versión, no como absolución objetiva.
- **Personajes:** Martín Fierro narra y sus dos hijos se disponen a cantar; la esposa y el juez son evocados, no intervienen directamente. Sin discrepancias en la ficha de personajes.
- **Preguntas:** se precisó «volver a encontrarse con su familia» para **no insinuar** que también se reúne con su esposa; la nueva formulación identifica expresamente a los dos hijos y la muerte de la madre.
- **Glosario:** `matrero`, `pulpería`, `partida`, `gaucho` y `garguero` aparecen en el canto. La `pulpería` se menciona retrospectivamente; no es el lugar del reencuentro. La entrada anterior `mate` era un falso positivo por la forma verbal **«maté»**, no la bebida; se sustituyó por `garguero` («garganta», estrofa 655).
- **Pasaje y notas:** el único número de estrofa, 655, comprende el canto entero; las tres notas señalan su inicio, desarrollo y cierre. No constituyen tres estrofas distintas.

**Veredicto:** cotejada; una precisión de pregunta y una sustitución léxica.

## Canto XII — El hijo mayor y la prisión

- **Afirmaciones y acontecimientos:** el hijo mayor empieza a hablar en la estrofa 656, describe el desamparo (657–666), el caso del boyero y la justicia (667–672), y la prisión, su silencio y sufrimiento (673–718). La estrofa 698 expresa «no haber aprendido a leer»: **no hay evidencia de una educación impuesta en prisión**.
- **Corrección de análisis:** se reemplazó «educación impuesta desde la experiencia del joven» por un **aprendizaje doloroso de la injusticia**, citando la falta de alfabetización de la estrofa 698.
- **Personajes:** el hijo mayor es el narrador; el juez y funcionarios aparecen en su relato. La ficha no atribuye indebidamente su voz al hijo menor.
- **Preguntas y notas:** la referencia a los cerrojos en la estrofa 702 es correcta; las notas distinguen la presentación filial y el trauma del encierro.
- **Glosario:** `pampa` significa espacio abierto en la estrofa 691 («una pampa en que correr»), no persona; `poncho` es una prenda ausente en 657; `mate` aparece en 703 como **bebida prohibida en la cárcel**. Se contextualizó la última definición; `güeno` y `naides` conservan el uso popular.

**Veredicto:** cotejada; una corrección interpretativa y una precisión léxica.

## Canto XIII — El hijo menor, la tía y el juez

- **Afirmaciones y acontecimientos:** el **hijo menor**, no el mayor, narra desde la estrofa 719. Una tía lo recoge (722), lo nombra heredero (724) y muere; un juez interviene sobre sus bienes (725–729) y el joven acaba bajo la tutela de otro hombre (730). Las explicaciones, la ficha de personajes y los comentarios de pasajes son congruentes.
- **Pregunta corregida:** «¿Qué experiencias muestran la dependencia del hijo mayor?» identificaba equivocadamente al narrador. Ahora pregunta por el **hijo menor tras la muerte de su tía**.
- **Glosario:** `juez` se definió en función de su actuación concreta en la sucesión y designación del tutor (725–730); `güeno`, `poncho`, `pa` y `ansí` aparecen en el canto.
- **Evidencia:** las estrofas seleccionadas 719 y 730 representan correctamente la nueva voz y el paso a la tutela.

**Veredicto:** cotejada; una corrección de atribución y una precisión léxica.

## Canto XIV — Vizcacha, conducta y tutela

- **Afirmaciones y acontecimientos:** Vizcacha es presentado en 731, el juez y la tutela se mencionan en 732 y 747; se narran robos, castigos y el deterioro del rancho (734–751). La muerte de la esposa de Vizcacha por un «mate frío» aparece como **relato de un amigo del narrador** en 752, no como hecho constatado; las estrofas 753–754 continúan esa versión. El análisis literario de caricatura y sátira es compatible con el canto, pero no debe transformarse en afirmación histórica.
- **Personajes y preguntas:** el hijo menor narra y Vizcacha es el tutor. Las preguntas sobre sus rasgos y la estrofa 731 son pertinentes.
- **Glosario corregido:** `cimarrón` en 731 califica a Vizcacha como arisco/montaraz, no indica que huya; `juez` designa la autoridad que lo nombra tutor; `rancho` en 738/749 es la vivienda precaria de Vizcacha y **no se pierde en este canto**; `mate` en 752 debe tratarse como parte de una acusación indirecta, no como muerte verificada. `pago` designa la zona rural en 735.
- **Pasajes y notas:** las estrofas 731 y 748 son válidas. Se sustituyó la expresión ambigua «evaluación final» por una nota anclada explícitamente en **748**, pues el canto continúa hasta 754.

**Veredicto:** cotejada; cuatro precisiones de vocabulario y una de comentario.

## Cambios y pruebas

Se hicieron cambios **secuenciales, un archivo y un commit por operación**, con lectura posterior de cada archivo directamente en GitHub:

1. `9cb65dd81b2a870d0bbd9286a3b6385eb1f80640`: `src/data/exegesis-vuelta.ts` (Vuelta XII).
2. `62e17e2ed2b029eadf6baf59535c641b5f8a2347`: `src/data/preguntas-vuelta-estudiantes.ts` (Vuelta XI y XIII).
3. `e96b5c9953cadcfff812cdf1b1501aeb3007e0cb`: `src/data/vocabulario-cantos-estudiantes.ts` (seis entradas en XII–XIV).
4. `73559c786f46995743ff312c0f47c8541bdeb0d4`: `src/data/notas-pasajes-estudiantes.ts` (Vuelta XIV).
5. `7824a2eab15a6d7fc5ac992f06439f7df5b7174a`: glosario de Vuelta XI (`maté` no es `mate`) y corrección retrospectiva de Vuelta I (`viguela`, grafía exacta del corpus en la estrofa 398).

**Control estructural independiente** tras las correcciones: 46 guías, 1193 estrofas, 7210 versos, 138 preguntas, 225 términos de glosario y 104 notas; **cero incidencias** en existencia de datos, pertenencia de las estrofas al canto y presencia literal de los términos con límites de palabra y distinción de tildes (para no confundir `mate` con `maté`). Este control no reemplaza la compilación Astro. En el último commit consultado, `Validar portal Astro` estaba **queued** y `Auditoría de aprobación editorial (ES)` estaba **in_progress** (no se anticipan resultados).

## Estado y límites

**27/46 guías cotejadas individualmente** (Ida I–XIII; Vuelta I–XIV). **19 pendientes:** Vuelta XV–XXXIII. El fallo editorial de imágenes de revista identificado antes de esta tanda sigue separado de la verificación filológica; no se debilitaron controles, no se alteraron versos, no se fusionó `main`, no se desplegó ni se modificó indexación.

**Próxima tanda:** Vuelta XV–XVIII; distinguir las máximas atribuidas a Vizcacha de la postura del poema y comprobar el orden de su enfermedad, muerte y velorio.
