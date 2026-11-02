# MF-ES-024 — Segunda lectura contextual de La ida (II, VII, IX, X y XI)

Fecha: 2026-11-02. Rama: `feat/mf-es-plan-auditable-023-20261101`.

**Alcance:** segunda pasada focalizada en seis entradas del glosario, cotejadas con las estrofas del corpus de `obra/ida/estrofas.json`. Se contrastaron también los hechos, interpretaciones, preguntas, notas y pasajes probatorios de las cinco guías. No se afirma que esta ejecución haya vuelto a leer todos los versos de las 46 guías; el cotejo individual inicial sigue documentado en las tandas anteriores.

| Guía | Estrofa(s) del corpus | Hallazgo probado | Corrección aplicada |
|---|---|---|---|
| Ida II | 44 | «Si usté pisa en su rancho» expresa el riesgo de persecución aun en el hogar, no la destrucción de esa vivienda en el canto. | Glosa `rancho` contextualizada. |
| Ida VII | 190 | «No tenía mujer ni rancho» describe desamparo; no narra la destrucción de una casa. | Glosa `rancho` contextualizada. |
| Ida IX | 242, 285 | Fierro vigila a la policía junto a un rancho y después se retira a otro tras la pelea; no se relata aquí pérdida del hogar. | Glosa `rancho` contextualizada. |
| Ida X | 296 | «El zorro más matrero» es una comparación sobre la astucia falible; el referente inmediato es un zorro, no literalmente un gaucho prófugo. | Glosa `matrero` contextualizada. |
| Ida X | 307, 322 | El jefe frecuenta el rancho de Cruz; Cruz luego se despide de él por el conflicto afectivo. No se narra su destrucción. | Glosa `rancho` contextualizada. |
| Ida XI | 331, 344 | «Rancho» designa el local de un baile y, en «ni rancho ni asiento», la falta de residencia estable. | Glosa `rancho` contextualizada. |

Las seis entradas anteriores repetían explicaciones generales que trasladaban a cantos diferentes la pérdida material del hogar o, en `matrero`, reducían un uso figurado a una persona. **No se modificaron las estrofas ni se alteraron citas del poema.** No se identificó en esta pasada focalizada otro error demostrable en los apartados de lectura, preguntas, notas y pruebas de estas cinco guías.

## Cambios y pruebas verificadas

- Corrección de seis glosas en `src/data/vocabulario-cantos-estudiantes.ts`: commit `0f6bb6b75bdf77ee07e12a0a3e72ac85ad4cb543`. Se volvió a leer el archivo en GitHub y se comprobó la igualdad exacta del contenido y de su blob SHA con la escritura.
- Comparación `5599f8f...0f6bb6b`: **solo cambió** `src/data/vocabulario-cantos-estudiantes.ts` (6 líneas reemplazadas); ningún archivo del corpus ni de otras funcionalidades.
- Comprobación estática independiente sobre ambos JSON y el glosario: **46 fichas de vocabulario, 225 términos, 0 términos sin coincidencia literal por palabra y tilde**; 1193 estrofas, 7210 versos, 104 notas y 46 selecciones de pruebas literarias.
- SHA de corpus conservados: Ida `5d0de1ee6f8ffe088cd2a79360017d95ab9b9e7d`; Vuelta `8034740ca956cf77daf2aa76a2ca5bfbf2199987`.
- El endpoint de estados combinados de GitHub para el commit de corrección devolvió **cero estados**: no se considera aprobado CI, compilación Astro ni auditoría editorial de este commit. Sigue sin resolverse el bloqueo editorial preexistente de imágenes y el control de cobertura del índice de idiomas.

## Estado y siguiente pasada

**Cobertura acumulada de primera lectura: 46/46; nuevas guías: 0; seis glosas corregidas en cinco guías.** El 46/46 no certifica que todas las interpretaciones carezcan de errores. Próxima ejecución: comprobar el estado efectivo de los workflows y continuar buscando usos contextuales dudosos, sin alterar corpus, rama `main`, despliegues ni indexación. No declarar cierre integral mientras existan controles pendientes o fallidos.
