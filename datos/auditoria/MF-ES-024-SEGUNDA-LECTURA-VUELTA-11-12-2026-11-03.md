# MF-ES-024 — Segunda lectura focalizada: Vuelta XI y XII

Fecha: 2026-11-03. Rama: `feat/mf-es-plan-auditable-023-20261101`. Auditoría integral abierta.

## Alcance
Se recuperaron directamente de GitHub el corpus `obra/vuelta/estrofas.json` y las secciones correspondientes de `exegesis-vuelta.ts`, `preguntas-vuelta-estudiantes.ts`, `vocabulario-cantos-estudiantes.ts` y `notas-pasajes-estudiantes.ts`. Esta pasada es **focalizada**, no certificación exhaustiva de todas las líneas de ambos cantos.

## Evidencia y dictamen por canto

| Canto | Evidencia literal y editorial | Dictamen |
| --- | --- | --- |
| XI (estrofa 655, 150 versos) | 655:1–6: Fierro bebe para refrescar el «garguero» y presenta el encuentro; 655:25–36: muerte del juez y balance de diez años (3 frontera + 2 matrero + 5 entre indígenas); 655:37–82: justificaciones de las muertes y del enfrentamiento con la partida; 655:87–112: reencuentro con dos hijos; 655:121–134: noticia de la muerte de su esposa; 655:135–150: invitación a cantar. | Análisis, contexto, tres preguntas y notas examinados compatibles. La explicación de «garguero», «matrero», «pulpería» y «partida» concuerda con sus usos; la exégesis no debe convertir la defensa retrospectiva de Fierro en sentencia imparcial. |
| XII (estrofas 656 en adelante) | 656:1–6: el hijo distingue autoridad paterna de voz filial; 657–665: desamparo, pobreza y aprendizaje por sufrimiento; 666:1–6: trabajo de peón; 667:1–6: denuncia de imputación en la muerte de un boyero. | El análisis y las preguntas sobre la voz filial y la injusticia son compatibles con estos pasajes. La nota sobre la relación padre-hijo tiene respaldo en 656. Se revisó la presencia y la explicación editorial de «poncho» (657:6); no se afirma validación integral de todas las glosas del canto XII en esta pasada. |

## Resultados
- Cobertura histórica de primera lectura: **46/46**. Guías nuevas: **0**.
- Dos guías con revisión contextual **parcial** en esta ejecución (XI y XII).
- Errores nuevos demostrados: **0**. Correcciones de contenido: **0**.
- Pruebas realizadas: lectura de archivos fuente desde GitHub y contraste manual de los pasajes enumerados; no se ejecutaron tests de compilación ni se certificó CI.
- Restricciones: no alterar el corpus, `main`, despliegues o indexación.

## Pendiente
Completar lectura integral de XII (especialmente 668–703), contrastar sus restantes glosas y notas; verificar CI concluyente del HEAD y controles editoriales de imágenes/derechos. No declarar cierre hasta disponer de pruebas satisfactorias.
