# MF-ES-024 — Segunda lectura filológica de La vuelta VII–X y XXIII–XXVI

Fecha: 2026-11-02. Rama: `feat/mf-es-plan-auditable-023-20261101`. Estado: **cotejo focalizado concluido; auditoría integral abierta**.

## Alcance y método

Se releyeron los **166 textos de estrofa y 998 versos** de ocho cantos completos de `obra/vuelta/estrofas.json`: VII–X (551–654, 104 estrofas, 626 versos) y XXIII–XXVI (902–963, 62 estrofas, 372 versos). Se contrastaron, por canto, las lecturas editoriales (`src/data/exegesis-vuelta.ts`), las 24 preguntas (`preguntas-vuelta-estudiantes.ts`), las 39 glosas (`vocabulario-cantos-estudiantes.ts`), las 16 notas (`notas-pasajes-estudiantes.ts`), las 11 actuaciones de personajes (`personajes-por-canto-estudiantes.ts`), las 16 referencias probatorias (`pruebas-literarias-cantos.ts`) y los títulos y temas de `seo-cantos-estudiantes.ts`. Los archivos se leyeron desde la rama, no desde `main`.

**Resultado:** no se demostró error nuevo que requiera corrección. Se mantienen las correcciones previas; no se altera el corpus ni los archivos editoriales. Esta segunda lectura no constituye una certificación de ausencia universal de errores.

## Matriz de evidencia por canto

| Canto | Estrofas | Evidencia del corpus y contraste de hechos, interpretación, voces y personajes | Preguntas, glosario, notas y pruebas | Veredicto |
|---|---|---|---|---|
| VII | 551–564 | Cruz muere en el canto anterior y aquí Fierro recuerda su muerte (551), relata el entierro (552–553), el duelo (554–557) y el hallazgo de la cautiva (558–564). | Preguntas y notas distinguen muerte y entierro. `pampa` y `rebenque` refieren al hombre y al látigo ensangrentado (564); `toldo` aparece en 554; pruebas 551/554. | Conforme; sin cambios. |
| VIII | 565–581 | La historia de la cautiva es referida por Fierro: captura y muerte del marido (565), servidumbre y separación del hijo (566–574), acusación de brujería y asesinato del niño (575–581). | La pregunta de 565 y las notas de 565/581 respetan la mediación narrativa; `china` aparece en 566/568, `cautiva` en 565; pruebas 565/581. | Conforme; sin cambios. |
| IX | 582–623 | Fierro interviene tras los lamentos (582–585), combate al agresor (586–620); la mujer le salva al apartar al adversario (605–606) y recoge con su ayuda los restos del niño (623). | Pregunta y nota de 623 corresponden a la acción; `pampa` en 597 nombra al adversario, `pingo` en 587 es caballo; pruebas 582/623. | Conforme; sin cambios. |
| X | 624–654 | Temor de represalias (624), cesión de caballo y doma (625–638), marcha difícil (639–652), despedida de la cautiva (653) y anuncio de la voz de los hijos (654). | Pregunta 654 y nota final coinciden; `pampa` nombra al domador o dueño (626, 628, 630), `toldo` en 633, `pingo` en 625; pruebas 624/654. | Conforme; sin cambios. |
| XXIII | 902–921 | Picardía engaña al mercachifle (902–905); un oficial de partida le exige una multa (906–908); se denuncian abusos de autoridad (909–911), luego rivalidad y amenazas (912–921). | Pregunta y nota sobre el «diezmo» se apoyan en 911; `partida` es fuerza de autoridad (906), `juez` aparece en 909, `matrero` en 921; pruebas 906/911. | Conforme; sin cambios. |
| XXIV | 922–931 | Detención electoral (922), presión para votar una lista (923–925), defensa de la elección propia (926–927), violencia policial y cepo (928–930). | Pregunta y nota 926 ajustadas; `mandao` en 925, `naides` en 927, `juez` en 923; pruebas 922/926. | Conforme; sin cambios. |
| XXV | 932–952 | Convocatoria del contingente (932), captura por la partida (933), incorporación forzada (935–945), retención de la papeleta (943), desamparo de familias (946–952). | Pregunta 932 y notas 932/952 se apoyan en versos; `partida` es patrulla armada (933), `pago` en 936, `pulpería` en 940; pruebas 932/952. | Conforme; sin cambios. |
| XXVI | 953–963 | Acusaciones contra Picardía (953–956); descubre que Cruz es su padre (957), recuerda su defensa de Fierro (958), lo bendice (959), afirma haberse enmendado (960–963). | La pregunta distingue revelación 957 de recuerdo 958; `partida` es grupo armado en 958, `sargento` en 957; notas 958/960 y pruebas 958/960. | Conforme; sin cambios. |

## Verificaciones reproducibles

1. Recuento de los objetos del corpus filtrados por canto: **8 cantos, 166 estrofas, 998 versos**.
2. Recuento de objetos editoriales correspondientes: **24 preguntas, 39 glosas, 16 notas, 11 actuaciones y 16 referencias de estrofa**.
3. Búsqueda exacta de cada una de las 39 voces del glosario en los versos del canto respectivo, respetando tildes y límites de palabra: **0 términos sin correspondencia literal**. Esto comprueba presencia, no significado; el sentido se revisó en los pasajes indicados.
4. Verificación de que las 16 estrofas de prueba pertenecen a sus cantos: **0 referencias ajenas**.
5. SHA del corpus leídos desde la rama: Ida `5d0de1ee6f8ffe088cd2a79360017d95ab9b9e7d`; Vuelta `8034740ca956cf77daf2aa76a2ca5bfbf2199987`. No se escribieron estos archivos.

## CI y límites del cierre

Al comenzar esta revisión, el HEAD era `27767d686231d36f4fce9259bbe6f2b1030468b7`. La consulta de checks de ese commit mostraba un check **Cloudflare Pages: success**, que **no sustituye** los dos workflows editoriales. La última pareja de GitHub Actions visible para la rama era del commit `1dd44aef` (2026-11-02 18:51 UTC): **Validar portal Astro: failure** (run 41504455816) y **Auditoría de aprobación editorial (ES): failure** (run 41504455790). El registro anterior documenta los bloqueos de cobertura del índice y de derechos/imágenes; se requiere CI concluyente del HEAD actual para certificar el estado técnico.

**Acumulado:** primera lectura individual documentada **46/46**; en esta ejecución **0 guías nuevas, 8 guías en segunda lectura, 0 errores nuevos probados, 0 correcciones de contenido**. La auditoría permanece abierta. Próxima ejecución: revisar checks del HEAD y profundizar en otras guías con posibles ambigüedades contextuales. No modificar corpus, `main`, despliegues ni indexación.
