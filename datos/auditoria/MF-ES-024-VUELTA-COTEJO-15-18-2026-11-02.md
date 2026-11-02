# MF-ES-024 — Cotejo filológico individual: La vuelta, cantos XV–XVIII

Fecha: 2 de noviembre de 2026. Rama: `feat/mf-es-plan-auditable-023-20261101`. **Resultado de esta tanda: 4 guías cotejadas y corregidas; acumulado 31/46.**

## Método y alcance

Lectura íntegra del corpus local `obra/vuelta/estrofas.json` para los cantos XV–XVIII, **estrofas 755–828, 74 estrofas y 444 versos**. Se confrontaron las secciones de hechos/análisis, contexto, voces, personajes, tres preguntas por guía, cinco glosas por guía, alertas críticas, pruebas y notas de pasajes. Se comprobó además el H1 y tema SEO del canto XVII, porque el título de la guía procede de `seo-cantos-estudiantes.ts`, no de `exegesis-vuelta.ts`.

No se alteraron versos ni numeración. Se preservó expresamente el slug existente de XVII para no romper enlaces. Las interpretaciones se registran como interpretaciones, no como citas del autor.

## Matriz de evidencia por canto

| Guía | Cotejo integral del canto | Hechos, interpretaciones y voces | Personajes | Preguntas (3) | Glosario (5) | Pruebas y notas |
| --- | --- | --- | --- | --- | --- | --- |
| **Vuelta XV** | 755–777, **23 estrofas/138 versos** | 755: Vizcacha aconseja cuando bebe; 757–776: máximas sobre provecho, autoridad, cautela y prejuicios; 777: el hijo recuerda la educación. Se conserva la distinción entre palabras de Vizcacha y perspectiva del hijo/autor. | Vizcacha aconseja; el hijo menor narra (755, 777). | Se reformuló la pregunta que presuponía una posición moral explícita del hijo: recordar los consejos no equivale a aprobarlos. | `palenque` 758 (uso figurado), `güeno` 758, `naides` 768, `poncho` 756, `hacienda` 760: presentes y contextualmente congruentes. | Estrofas 755, 758 y 777; sus tres notas se ajustan al pasaje. |
| **Vuelta XVI** | 778–790, **13 estrofas/78 versos** | 778–779: enfermedad y curandera; **780–784: interrupción del cantor por un oyente**, no reacciones de personas alrededor del enfermo; 785–789: temor, blasfemias y aislamiento; 790: muerte. Se eliminó la alusión a administración de bienes, que corresponde a XVII. | Vizcacha enferma y muere (778–790); el hijo menor busca ayuda y narra (778). | Preguntas sobre enfermedad, comicidad y muerte: corresponden al canto, distinguiendo interrupción pública y relato. | `güeno` 783, `tropa` 780 (refrán sobre animales, no tropa militar), `cencerro` 790 (atado a la mano del moribundo), `dende` 785, `ansí` 781. Se precisaron `tropa` y `cencerro`. | Estrofas 778 y 790; dos notas coherentes. |
| **Vuelta XVII** | 791–815, **25 estrofas/150 versos** | 791: llegan alcalde y vecinos; 792–804: recuerdan robos y otras faltas; 805–812: inventario; 813–815: el alcalde nombra heredero al hijo menor, sin entrega efectiva demostrada. **No hubo velorio:** el canto XVIII, estrofa 824, dice «ni lo velaron siquiera». Se corrigieron análisis, contexto, título visible y tema SEO. | El hijo menor presencia la requisa y recibe una promesa de herencia; Vizcacha aparece solo en recuerdos de terceros. Se corrigieron las dos actuaciones. | Se retiró la pregunta sobre el supuesto velorio; se preguntan hechos y relatos de vecinos. La tercera ya no afirma que el hijo haya recibido efectivamente la herencia. | `naides` 798, `juez` 810 (destinatario del informe del alcalde), `mate` 797 (bebida), `guascas` 805, `bagual` 794. Se contextualizó `juez`. | Estrofas 791 y 815; notas congruentes. Se corrigió la justificación de pruebas: hay inventario y nombramiento, no distribución efectiva. |
| **Vuelta XVIII** | 816–828, **13 estrofas/78 versos** | 816–821: soledad, oración y miedo; 822: superstición sobre perros; 823: abandono del rancho; 824–826: entierro posterior sin velorio y relato de la mano del muerto; 827–828: abandono, miseria y sueños. | El hijo menor narra miedo, soledad y pobreza. | Preguntas sobre duelo, precariedad y estrofa 816: congruentes. | `rancho` 827 (la vivienda es abandonada en 823; no se afirma que sea propiedad del joven), `gaucho` 825, `guascas` 828, `ansí` 820, `mesmo` 820. Se corrigió la falsa implicación de propiedad del rancho. | Estrofas 816 y 828; dos notas congruentes. |

## Hallazgos y correcciones verificadas en GitHub

1. **XVI: confusión entre escena del enfermo e interrupción del narrador**, y anticipo indebido del inventario del canto XVII. Corregidos análisis y contexto: `57147defffc645273ee1d2989557d3a74aa0c41e`.
2. **XVII: velorio inexistente**, que contaminaba título, análisis, contexto, preguntas, personajes y alerta crítica. Corregidos sin cambiar el slug de la ruta: `57147de`, `e2aeec0`, `1ccd756`, `1bf52a7`, `a0ddbf3`.
3. **XVII: herencia presentada como efectivamente recibida/distribuida**, cuando el alcalde solo nombra heredero al joven (813–815). Corregidos personaje, pregunta y justificación de pasajes: `1ccd756`, `634e6c0`, `75d0967`.
4. **XV: pregunta que presuponía adhesión del hijo a una posición moral opuesta**: reformulada como análisis crítico sin atribución no demostrada: `e2aeec0`.
5. **XVI: glosas genéricas descontextualizadas** de `tropa` y `cencerro`; **XVII: `juez`**; **XVIII: `rancho`**: corregidas según 780, 790, 810 y 823: `5e5e24c`, `e848c24`.

Cada archivo modificado se volvió a leer mediante GitHub y su contenido se comparó exactamente con el texto enviado; cada commit afecta un único archivo. No se borraron datos de las demás guías.

## Controles técnicos y límites

- Control independiente tras los cambios: **46 guías existentes; 1193 estrofas; 7210 versos; 138 preguntas; 225 entradas léxicas; 104 comentarios; 0 referencias a estrofas ausentes; 0 términos sin coincidencia exacta de palabra y tilde en su canto; 0 guías con menos de tres preguntas**.
- Se comprobó que el generador de rutas usa `seoCanto(parte,canto).slug`; el slug de XVII **no se modificó**. Se cambió solo el H1 y tema para no afirmar que hubo velorio.
- Los controles anteriores son **estáticos**. Los workflows de GitHub Actions del último commit se consultarán por separado; no declarar compilación exitosa hasta confirmar su conclusión.
- El bloqueo editorial preexistente de derechos/imágenes de revista no se alteró y no debe confundirse con errores de las guías.

## Estado y próxima tanda

**31/46 guías cotejadas individualmente: Ida I–XIII (13/13) y Vuelta I–XVIII (18/33). Pendientes: 15 guías, Vuelta XIX–XXXIII.**

Siguiente tanda: **Vuelta XIX–XXII** (final del relato del hijo menor, presentación de Picardía, su autobiografía y el juego). Aplicar el mismo cotejo de corpus completo, H1 SEO, glosario, preguntas, personajes, pasajes y voces. No declarar cierre hasta 46/46, pruebas y registro final.
