# MF-ES-024 — Cotejo individual de las 13 guías de La ida

Fecha: 2026-11-02 · Rama: `feat/mf-es-plan-auditable-023-20261101` · Estado: **13 guías de La ida cotejadas y corregidas donde correspondía; 33 guías de La vuelta pendientes de lectura exhaustiva**.

## Método y alcance

Se leyó íntegramente el texto de las estrofas 1–395 (2316 versos) en `obra/ida/estrofas.json` y se confrontó por canto con los apartados `hechos`, `interpretacion`, `preguntas` de `lecturas-ida-estudiantes.ts`, las actuaciones de `personajes-por-canto-estudiantes.ts`, las pruebas de `pruebas-literarias-cantos.ts`, las notas de `notas-pasajes-estudiantes.ts` y los términos de `vocabulario-cantos-estudiantes.ts`. Se comprobó además la atribución de voces de la plantilla Astro y la coherencia del título visible. «Conforme» significa coherente con **este corpus de la edición** tras las correcciones; no constituye cotejo de variantes con ediciones históricas externas ni certificación de historia social.

| Canto | Estrofas (versos) | Evidencia para resumen, interpretación, personajes, preguntas, glosario y notas | Veredicto |
| --- | --- | --- | --- |
| Ida I | 1–19 (114) | 1–3: canto como consuelo y memoria; 9–11: cantor, guitarra y bravata; 18–19: defensa del perseguido, padre y marido. Voz: Fierro. Glosario y notas se ajustan a las estrofas. | Conforme |
| Ida II | 20–48 (174) | 23–36: pasado doméstico y trabajo; 27–32: aperos y domas; 37–42: yerra y sociabilidad; 43–47: persecución y leva; 48: anuncio de males. Voz: Fierro. | Conforme |
| Ida III | 49–103 (330) | 49: pérdida familiar anticipada; 52–60: leva y juez; 64–78: fortín, tareas y carencias; 80–103: combates narrados desde una mirada sesgada. Pruebas 49 y 76 correctas. | Conforme, sin presentar estereotipos como historia neutral |
| Ida IV | 104–133 (180) | 105–112: miseria; 113–121: explotación comercial y pagos; 122–131: reclamo de salario y autoridades; 132–133: cierre. Pruebas 111 y 125 correctas. | Conforme |
| Ida V | 134–155 (132) | 134–139: deseo de fuga; 140–148: disparo del centinela y estaqueada; 149–155: prejuicios sobre reclutas extranjeros. El resumen anterior aludía de modo equívoco a ataques y persecuciones de frontera no narrados aquí. | **Corregidos hechos e interpretación** |
| Ida VI | 156–187 (192) | 165–168: deserción y regreso; 169–171: tapera y gato refugiado **en una vizcachera cercana**, no instalado en el rancho; 172–182: destino familiar; 183–187: declaración de matrero. | **Corregida nota del gato** |
| Ida VII | 188–221 (142) | 192–194: encuentro **en un baile**, no en una pulpería; 195–204: provocaciones racistas y respuesta del hombre; 209–217: pelea y muerte; 219–221: entierro y huesos. La víctima **sí habla** en 202 y 206, aunque la versión de los hechos es de Fierro. | **Corregidos escenario y falsa afirmación de silencio de la víctima** |
| Ida VIII | 222–241 (126) | 222–228: otra pelea, esta vez sí en un boliche; 229–240: persecución, indefensión y desigualdad; 241: cuchillo como salida. | Conforme |
| Ida IX | 242–290 (296) | 242–254: soledad; 255–266: partida policial; 267–279: combate; 280–283: Cruz cambia de bando; 284–290: muertos y alianza. | Conforme |
| Ida X | 291–323 (198) | 291–299: discurso de Cruz; 300–318: conflicto con jefe y ruptura; 321–323: generalizaciones misóginas atribuibles a Cruz, no al autor. | Conforme |
| Ida XI | 324–346 (138) | 324–327: Cruz cantor; 328–344: baile en una pulpería, nueva violencia y fuga; 345–346: desigualdad ante la autoridad. | Conforme |
| Ida XII | 347–366 (120) | 347–350: penurias y arreglo con juez; 351–354: nombramiento como sargento y amistad; 359–366: denuncia de desigualdad y política de frontera. | Conforme |
| Ida XIII | 367–395 (174) | 367–387: Fierro decide irse; 388: **narrador externo** refiere el fin del canto; 389: intervención citada de Fierro; 390–395: voz externa relata la partida y despide la relación. Antes se atribuía indebidamente el cierre entero a Fierro. | **Corregidos hechos, interpretación, pregunta, nota, alerta y atribución de voz** |

## Correcciones aplicadas y verificadas por lectura de vuelta de GitHub

1. `src/data/lecturas-ida-estudiantes.ts`: escenas de Ida V, VII y cambio de narrador en XIII.
2. `src/data/seo-cantos-estudiantes.ts`: título visible de Ida VII corregido a «durante el baile». **Se conservó el slug histórico** `canto-7-pelea-en-la-pulperia` para no romper enlaces, canónicas ni redirecciones.
3. `src/data/notas-pasajes-estudiantes.ts`: ubicación del gato (VI), baile y voz de la víctima (VII), cierre externo (XIII).
4. `src/data/personajes-por-canto-estudiantes.ts`: escena del hombre muerto situada en el baile.
5. `src/data/pruebas-literarias-cantos.ts`: justificación del pasaje 194, baile.
6. `src/data/alertas-criticas-cantos.ts`: advertencia sobre voz externa en XIII.
7. `src/pages/estudiantes/[parte]/[canto].astro`: voz externa en Ida XIII; se corrigió además un error independiente ya comprobado en **Vuelta XIII**, que etiquetaba al hijo menor como hijo mayor (la Vuelta XII corresponde al mayor y XIII al menor).

Cada archivo se actualizó por separado con SHA de contenido y se volvió a leer para comprobar la escritura.

## Validaciones posteriores

Control estructural ejecutado sobre el contenido actual de GitHub mediante código de verificación: **46 guías localizadas, 104 comentarios de pasajes, 225 términos de glosario presentes literalmente en sus cantos, 138 preguntas, 1193 estrofas y 7210 versos; 0 incidencias estructurales**. También se comprobó la conservación del slug de Ida VII y las dos nuevas condiciones de voz de la plantilla. **Este control no es un `astro build` ni una ejecución de los tests del repositorio.** Las acciones de GitHub quedaron iniciadas y su resultado debe verificarse antes de dar por aprobada la compilación.

## Pendientes y criterios de cierre

- **Vuelta I–XXXIII (33/46)**: lectura y cotejo literario exhaustivos de resúmenes, contexto, preguntas, personajes, vocabulario, notas y voces. La corrección puntual de Vuelta XIII **no** equivale a aprobar esa guía completa.
- Confirmar resultados de CI en el último SHA y reparar cualquier fallo relacionado con estas modificaciones.
- Conservar el slug antiguo de Ida VII por compatibilidad; estudiar una migración con 301 solo en un cambio separado y autorizado.
- No modificar el corpus, fusionar `main`, desplegar ni cambiar la indexación.

**Estado global: 13/46 cotejadas en detalle; NO CERRADO.**
