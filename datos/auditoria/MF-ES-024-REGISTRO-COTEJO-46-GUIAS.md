# MF-ES-024 — Registro de cotejo filológico de las 46 guías

Fecha: 2026-11-02. Estado: **AUDITORÍA ABIERTA; NO CERTIFICADA COMO COMPLETA**.

## Universo efectivamente inspeccionado
Se recuperaron desde la rama de trabajo los dos archivos del corpus (`obra/ida/estrofas.json`, `obra/vuelta/estrofas.json`), las lecturas de Ida y Vuelta, las preguntas de Vuelta, la selección de estrofas, las notas de pasajes, los personajes por canto y el vocabulario. Se recorrieron las 46 fichas (Ida 1–13; Vuelta 1–33) para revisar sus títulos, resúmenes, personajes declarados y números de estrofas seleccionadas.

## Resultados comprobados
- Corpus: 1193 estrofas, 7210 versos, distribuidos entre ambas partes.
- 46 guías localizadas; sus selecciones de estrofas remiten a cantos existentes.
- Cuatro supuestas discrepancias de cantidad de notas (Vuelta 11, 20, 29 y 31) son **falsos positivos** si se compara una nota por estrofa: cada canto contiene una estrofa larga subdividida en tres pasajes comentados por la plantilla.
- Comprobación puntual adicional: Vuelta 12 termina en la estrofa 718 con la despedida del hijo mayor; Vuelta 13 comienza en la 719 con la voz del otro hijo y la 730 anuncia al tutor; Vuelta 14 introduce a Vizcacha en la 731. La transición de voces y personajes de las guías concuerda con estos pasajes.
- Vuelta 20, estrofa 855, efectivamente presenta a Picardía; Vuelta 29, estrofa 1038, introduce al Moreno y el contrapunto.

## Límite de la evidencia
La inspección anterior **NO** acredita un cotejo semántico exhaustivo de todas las afirmaciones en las 46 guías contra cada verso del canto. Tampoco acredita el significado contextual de todas las voces del glosario, ni la exactitud de cada comentario y pregunta. Los controles automáticos de integridad no sustituyen una lectura crítica de cada canto. No corresponde certificar ausencia de errores ni declarar el encargo resuelto.

## Pendientes para cerrar
1. Elaborar por cada una de las 46 guías una matriz de afirmación → estrofa(s) justificativas → veredicto → corrección, incluyendo resumen, interpretación, personajes, preguntas, vocabulario y notas.
2. Revisar pasajes no seleccionados para detectar afirmaciones omitidas, exageradas o descontextualizadas.
3. Corregir errores probados, cada cambio en commit independiente y verificado.
4. Ejecutar las auditorías del repositorio y dejar evidencia de resultados.
5. Emitir informe final solo con 46/46 fichas cotejadas y sin incidencias abiertas, o consignar explícitamente las pendientes.

**Protecciones:** no modificar el corpus, no fusionar `main`, no desplegar, no abrir indexación.

## Avance verificable del 2 de noviembre de 2026

**16/46 guías cotejadas individualmente contra todos los versos de sus cantos (Ida 13/13, Vuelta 3/33); 30 pendientes (Vuelta IV–XXXIII).**

- [Informe de La ida, cantos I–XIII](MF-ES-024-IDA-COTEJO-13-GUIAS-2026-11-02.md): lectura de las estrofas 1–395 (2316 versos), evidencia por canto y correcciones documentadas de Ida V, VI, VII y XIII. Se conservó el slug histórico de Ida VII para no romper enlaces.
- [Informe de La vuelta, cantos I–III](MF-ES-024-VUELTA-COTEJO-01-03-2026-11-02.md): lectura de las estrofas 396–474 (474 versos) y corrección de usos figurados de «partida», «leva» y «rancho» en Vuelta III.
- Se corrigió además una atribución equivocada en la plantilla: Vuelta XIII presenta al hijo menor, no al mayor; **su guía completa todavía no está aprobada**.
- Control estático posterior a las correcciones de La ida: 46 guías, 104 notas de pasajes, 225 términos presentes literalmente en los cantos, 138 preguntas, 1193 estrofas y 7210 versos, sin incidencias estructurales. Este control no sustituye la compilación Astro ni la lectura literaria de las 30 guías restantes.
- Los workflows de GitHub Actions fueron activados por los commits; sus conclusiones deben verificarse y cualquier fallo debe resolverse antes del cierre.

**La auditoría continúa abierta.**

### Diagnóstico de CI (comparación con estado anterior a las correcciones)

En el commit inicial `90b64719c289d346d0529f4d0c6be699ff9d77f7`, **antes de esta tanda**, el workflow `Validar portal Astro` ya terminaba con éxito y `Auditoría de aprobación editorial (ES)` ya fallaba: [ejecución previa](https://github.com/carloscabanas-1327/martinfierro/actions/runs/41444681308). El log indica: «Auditoría de revista: 6 artículos; 0 imágenes inferiores a 1536 px; 1 duplicados binarios» y «NO APTO: resolución o derechos sin verificar». La misma causa aparece tras las correcciones en [run 41446548633](https://github.com/carloscabanas-1327/martinfierro/actions/runs/41446548633), mientras la compilación y el control SEO de ese job habían pasado. **Es un bloqueo editorial preexistente de derechos/resolución de imágenes de revista, no un fallo de cotejo filológico demostrado.** No se modificaron imágenes ni se debilitó el control bloqueante. Falta verificar los runs correspondientes al último commit.

### Segunda tanda de La vuelta (IV–VI)

- [Cotejo de Vuelta IV–VI](MF-ES-024-VUELTA-COTEJO-04-06-2026-11-02.md): lectura íntegra de las estrofas 475–550 (456 versos); corregida la interpretación de Vuelta V para eliminar una partida no narrada y recoger el matiz de reparto igualitario de la estrofa 502. Se corroboró que Cruz muere en Vuelta VI, estrofas 549–550.
- **Estado actualizado: 19/46 guías cotejadas individualmente; pendientes 27 (Vuelta VII–XXXIII).** La cifra anterior de 16/46 documenta el corte previo, no el estado actual.

### Tercera tanda de La vuelta (VII–X)

- [Cotejo individual de Vuelta VII–X](MF-ES-024-VUELTA-COTEJO-07-10-2026-11-02.md): lectura íntegra de las estrofas **551–654 (104 estrofas, 626 versos)**, con contraste de interpretaciones, personajes, preguntas, glosario y comentarios.
- Se corrigieron cuatro explicaciones de vocabulario: **«pampa»** en VII, IX y X significa aquí **persona indígena**, no extensión geográfica; **«rebenque»** en VII se usa para agredir a la cautiva, no para conducir un caballo. Commit `8110ea926025e92b8e6fb43fac18bf6264e34b6c`.
- Se precisó la primera pregunta de Vuelta VII para diferenciar la muerte de Cruz narrada en VI del recuerdo y entierro en VII. Commit `71f5da32ff9668e6b6de7628afd3607c5d6e1c7e`.
- Verificación de lectura posterior en GitHub: las cuatro definiciones y la pregunta quedaron actualizadas. Control estructural independiente sobre los datos de las **46 guías**: 1193 estrofas, 7210 versos, 138 preguntas, 225 términos, 104 notas, **0 incidencias de estructura/referencias/literalidad**. Este control no equivale a la compilación Astro.
- **Estado actualizado: 23/46 guías cotejadas; 23 pendientes (Vuelta XI–XXXIII)**. El dato anterior de 19/46 es histórico. El CI más reciente debe comprobarse al terminar; el bloqueo de imágenes de revista continúa separado de la auditoría literaria.

### Cuarta tanda de La vuelta (XI–XIV)

- [Cotejo individual de Vuelta XI–XIV](MF-ES-024-VUELTA-COTEJO-11-14-2026-11-02.md): lectura íntegra de las estrofas **655–754** (100 estrofas y 744 versos) y contraste de todas las secciones editoriales de las cuatro guías.
- Se corrigió una interpretación de Vuelta XII que sugería educación impuesta durante la prisión, pese a que el hijo mayor lamenta no haber aprendido a leer (estrofa 698): commit `9cb65dd81b2a870d0bbd9286a3b6385eb1f80640`.
- Se corrigieron preguntas de Vuelta XI (reencuentro solo con dos hijos, esposa fallecida) y Vuelta XIII (narrador: **hijo menor**, no mayor): commit `62e17e2ed2b029eadf6baf59535c641b5f8a2347`.
- Se contextualizaron seis glosas de Vuelta XII–XIV (`mate`, `juez`, `cimarrón`, `rancho`): commit `e96b5c9953cadcfff812cdf1b1501aeb3007e0cb`. Se precisó una nota sobre la estrofa 748 de Vuelta XIV: commit `73559c786f46995743ff312c0f47c8541bdeb0d4`.
- Lectura posterior a cada modificación directamente en GitHub: **verificada**. Control estático independiente: **46 guías, 1193 estrofas, 7210 versos, 138 preguntas, 225 términos, 104 notas; cero incidencias estructurales y de pertenencia de referencias**. En el commit `73559c7`, CI de Astro todavía estaba en cola y auditoría editorial en curso al consultarse: no se declara compilación exitosa hasta tener su conclusión.
- **Estado actualizado: 27/46 guías cotejadas individualmente; 19 pendientes (Vuelta XV–XXXIII).** Las cifras anteriores reflejan cortes históricos. No se alteró el corpus, ni `main`, ni despliegues, ni indexación.

**Control léxico reforzado de las 46 guías (posterior a la cuarta tanda):** el cotejo de palabras completas **sin eliminar tildes** detectó dos falsos positivos que el control normalizado anterior había pasado por alto: en Vuelta XI `mate` solo aparecía como verbo **«maté»** y se reemplazó por `garguero`; en Vuelta I el corpus escribe **«viguela»** (estrofa 398), no «vigüela». Correcciones verificadas en GitHub, commit `7824a2eab15a6d7fc5ac992f06439f7df5b7174a`. Nuevo control de las **225 entradas**: **cero términos sin correspondencia literal exacta por palabra y tilde**. Este hallazgo no altera la cifra 27/46 ni reemplaza las pruebas Astro.

### Quinta tanda de La vuelta (XV–XVIII)

- [Cotejo individual de Vuelta XV–XVIII](MF-ES-024-VUELTA-COTEJO-15-18-2026-11-02.md): lectura íntegra de las estrofas **755–828 (74 estrofas y 444 versos)**, contrastando hechos, interpretaciones, voces, personajes, preguntas, glosas, notas, referencias y título SEO.
- **Hallazgo central:** la guía XVII afirmaba que hubo un velorio de Vizcacha; el texto original niega expresamente el velorio en Vuelta XVIII, estrofa **824** («ni lo velaron siquiera»). Se corrigieron título visible, tema SEO, análisis, contexto, preguntas, personajes, alerta y justificación, conservando el slug histórico para no romper enlaces.
- Se corrigió la confusión en XVI entre la interrupción del público al cantor (780–784) y los hechos de la enfermedad; se eliminó una referencia anticipada al inventario de bienes, que ocurre en XVII. Se precisó que la herencia se anuncia pero no se acredita su entrega efectiva; se corrigieron cuatro glosas contextuales (`tropa`, `cencerro`, `juez`, `rancho`) y una pregunta de XV que presuponía adhesión moral del hijo.
- Commits de corrección verificados por lectura posterior: `57147de`, `e2aeec0`, `1ccd756`, `5e5e24c`, `1bf52a7`, `634e6c0`, `75d0967`, `e848c24`, `a0ddbf3`. Informe: `f953a86`.
- Control estático posterior: **46 guías, 1193 estrofas, 7210 versos, 138 preguntas, 225 términos, 104 notas, cero incidencias de pertenencia de estrofas, coincidencia léxica y preguntas mínimas**. Los workflows del último commit se consultan por separado; no se afirma que Astro haya pasado sin conclusión explícita.
- **Estado actualizado: 31/46 guías cotejadas; 15 pendientes (Vuelta XIX–XXXIII).** Las cifras anteriores son históricas. El corpus, `main`, los despliegues y la indexación no fueron alterados.

### Quinta tanda de La vuelta (XIX–XXII)

- [Cotejo individual de Vuelta XIX–XXII](MF-ES-024-VUELTA-COTEJO-19-22-2026-11-02.md): lectura íntegra de las estrofas **829–901 (73 estrofas, 472 versos)**, con cotejo de análisis, contexto, voces, personajes, tres preguntas por guía, glosas, notas y pruebas.
- Se corrigió en XIX una mención equívoca a «enfermedad» y la omisión del envío a la frontera, respaldado por 852–854; se precisó la nota del cierre. En XX se distinguió la presentación de Picardía (855) de la revelación de que es hijo de Cruz (957, canto XXVI). En XXII se documentaron las trampas y el juicio retrospectivo explícito (882–901).
- Commits de contenido verificados por lectura posterior: `3b4c11d`, `189aeeb`, `50e0747`. El informe de esta tanda quedó guardado en la rama.
- Control estructural posterior: **46 guías, 1193 estrofas, 7210 versos, 138 preguntas, 225 términos con coincidencia literal, 104 notas y 0 incidencias estructurales**. SHA de corpus conservados: Ida `5d0de1ee6f8ffe088cd2a79360017d95ab9b9e7d`, Vuelta `8034740ca956cf77daf2aa76a2ca5bfbf2199987`. La conclusión de CI se comprueba por separado.
- **Estado actualizado: 35/46 guías cotejadas; 11 pendientes (Vuelta XXIII–XXXIII).** El dato previo de 31/46 es histórico. No se modificó `main`, no se desplegó ni se alteró indexación.
