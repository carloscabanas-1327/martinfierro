# MF-ES-024 — Cotejo complementario de componentes: Vuelta V y VI

Fecha: 2026-11-03. Rama: `feat/mf-es-plan-auditable-023-20261101`. Auditoría integral abierta.

## Alcance y método
Se leyeron directamente en GitHub los 54 textos de las estrofas 497–550 de `obra/vuelta/estrofas.json` y las entradas de los cantos V y VI en `preguntas-vuelta-estudiantes.ts`, `vocabulario-cantos-estudiantes.ts`, `notas-pasajes-estudiantes.ts`, `personajes-por-canto-estudiantes.ts` y `pruebas-literarias-cantos.ts`. Esta ejecución completa el cotejo individual de los componentes que el informe anterior dejó pendientes: seis preguntas, diez glosas, cuatro notas, tres actuaciones y dos selecciones de pasajes probatorios.

## Matriz de evidencia

| Canto y componente | Evidencia del poema | Dictamen |
| --- | --- | --- |
| V, pregunta sobre regreso y ganado | 497: «miles de cabezas / de vacuno y yeguarizo»; 498–503: botín, reparto y matanza | Conforme; la pregunta solicita cantidad aproximada y tipo, sin inventar cifra exacta. |
| V, dos preguntas interpretativas | 497–508: incursión y violencia; 509–524: comentarios del narrador y danza | Conforme si se atribuye al narrador y no se universaliza. |
| V, glosario: naides, indio, china, hacienda, lanza | 509 «naides», 502 «indio», 499 «chinas», 498 «hacienda», 508 y 520 «lanza(s)» | Cinco correspondencias y sentidos contextuales compatibles; «lanza» es arma o conjunto de lanzas, no verbo en estos pasajes. |
| V, dos notas | 497–503: ganado; 510–518: opiniones del cantor sobre las mujeres | Conforme. |
| V, personaje Fierro y prueba 497/510 | 497: regreso de incursión; 510: juicio de Fierro sobre trato a las mujeres | Conforme. |
| VI, preguntas sobre enfermedad y duelo | 529–540: epidemia, atribuciones de los personajes y muerte del cautivo; 541–550: enfermedad del protector, de Cruz y duelo | Conforme en las dos primeras preguntas. |
| VI, tercera pregunta | 549: Cruz «entrego su alma al Criador»; 550: Fierro «tuve un terrible desmayo» | **Error de referencia temporal corregido**: la pregunta anterior situaba lo que le ocurre a Cruz «al final de la estrofa 550». La nueva distingue muerte en 549 y desmayo de Fierro en 550. |
| VI, glosario: pago, indio, china, lanza, pa | 540 «pagos»; 525 «indios»; 531 «chinas»; 536 «lanza»; 546 «pa» | Cinco sentidos compatibles; «lanza» en 536 designa el arma de la agresión. |
| VI, dos notas | 542–544: defensa del enfermo; 549–550: muerte y desmayo | Conforme. La segunda nota dice «última estrofa relata explícitamente la muerte», lectura retrospectiva desde 550; la muerte ocurre en 549 y se confirma en 550. No se cambia por no ser error inequívoco. |
| VI, Cruz y Fierro; prueba 543/550 | 543: ambos defienden al enfermo; 545–550: Cruz enferma y muere, Fierro lo asiste y se desmaya | Conforme. |

## Corrección y verificación
- Commit de contenido: `9945b53ea3445e72d426b6876ae8b2679d9607ae`; solo cambia la tercera pregunta del canto VI en `src/data/preguntas-vuelta-estudiantes.ts`.
- Verificación posterior: pregunta corregida recuperada desde GitHub; cotejadas literalmente las estrofas 549–550. SHA del corpus de Vuelta conservado: `8034740ca956cf77daf2aa76a2ca5bfbf2199987`.
- Resultado: 46/46 guías con primera lectura documentada; 0 guías nuevas; 2 guías con cotejo complementario de componentes; 1 error probado y 1 corrección.
- Pruebas: comprobación manual de la corrección y correspondencia con el JSON; compilación Astro, cobertura de índice y auditoría editorial de imágenes/derechos **no certificadas** en este informe.
- No se modificaron el corpus, `main`, despliegues ni indexación.

## Próxima ejecución
Revisar el estado concluyente de CI del HEAD, continuar segundas lecturas en otros cantos y registrar solo nuevos errores demostrados. No declarar cierre integral hasta que los controles sean satisfactorios.
