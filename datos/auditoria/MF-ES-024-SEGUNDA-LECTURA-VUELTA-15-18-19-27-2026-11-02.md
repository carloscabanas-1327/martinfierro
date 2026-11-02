# MF-ES-024 — Segunda lectura contextual de La vuelta XV, XVIII, XIX y XXVII

Fecha: 2026-11-02. Rama: `feat/mf-es-plan-auditable-023-20261101`.

**Estado:** 46/46 guías con cotejo individual previo documentado; **0 guías nuevas** en esta ejecución. Se revisaron nuevamente cuatro guías (XV, XVIII, XIX y XXVII), sus **96 estrofas y 510 versos** del corpus, y las secciones de análisis/contexto, personajes, preguntas, glosario, alertas, selección de pruebas, notas y metadatos SEO. Esta segunda lectura focalizada no sustituye una certificación editorial integral de las 46 guías.

## Matriz de cotejo y evidencia

| Guía | Corpus íntegro y evidencia | Cotejo de las demás secciones | Hallazgo y corrección de glosario |
| --- | --- | --- | --- |
| Vuelta XV | 755–777 (23 estrofas, 138 versos); 755 sitúa el consejo en la embriaguez, 758 recomienda amistad con el juez, 777 recuerda la educación. | Análisis: moral de conveniencia de Vizcacha, no opinión de Hernández; personajes: Vizcacha y el hijo menor; preguntas: sin atribuir adhesión al joven; notas/pruebas: 755, 758, 777; alerta y título: coherentes. | `palenque` en 758 es metáfora de apoyo o protección interesada del juez («palenque ande ir a rascarse»), no el poste material de amarre en ese verso. Se contextualizó. |
| Vuelta XVIII | 816–828 (13 estrofas, 78 versos); 816 llanto al quedar solo; 823 abandona «aquella cueva»; 824 niega el velorio; 827 el rancho queda invadido por alimañas; 828 pobreza y sueños. | Análisis y personaje: orfandad del hijo menor; preguntas: soledad, precariedad y 816; notas/pruebas: 816 y 828; alerta/título: congruentes. | `rancho`: se separó la salida de «aquella cueva» (823) de la mención explícita del rancho convertido en guarida (827); no se infiere propiedad del joven. |
| Vuelta XIX | 829–854 (26 estrofas, 158 versos); 829 temor a otro tutor; 833–847 episodio amoroso y remedios; 837 el supuesto curandero habla de daño «en un mate» y 838 de «embrujar»; 852–853 envío a la frontera. | Análisis: desengaño y superstición, no enfermedad probada; personajes: hijo menor; preguntas: vínculos, comicidad y juez; notas/pruebas: 829 y 854; alerta y título: congruentes. | `mate` en 837 no es una simple bebida en una reunión: el personaje atribuye a un supuesto embrujo el padecimiento del joven. Se aclara que el relato no prueba ese maleficio. |
| Vuelta XXVII | 964–997 (34 estrofas, 136 versos); 974–980 servicio militar, ausencia de paga y maltrato; 981 «cuando echan tropa» describe soldados con ropa hecha jirones; 982–986 continúan las privaciones; 997 patriotismo. | Análisis: denuncia del servicio; personaje: Picardía; preguntas: privaciones, paralelismo con La ida y patriotismo; notas/pruebas: 964 y 997; alerta y título: congruentes. | `tropa` en 981 es militar en el contexto de Picardía, no ganado; se retiró la ambigüedad de la definición genérica. |

**Resultado:** cuatro imprecisiones contextuales comprobadas y corregidas en `src/data/vocabulario-cantos-estudiantes.ts`; no se identificaron otros errores demostrables en las secciones editoriales inspeccionadas de estas cuatro guías. No se alteraron citas del poema, voces narrativas ni identificadores de rutas.

## Commits y verificaciones

- Commit de contenido: `5b006adbed9fe39222d1903e5c444961df5293da` (cuatro glosas; un solo archivo). Se recuperó el archivo tras la escritura y se verificaron igualdad exacta del contenido y SHA de blob.
- Comparación con el corte previo `3f589ac`: **un archivo modificado, cuatro líneas añadidas y cuatro retiradas**, sin alteración del corpus ni otros módulos.
- Prueba estática independiente con datos recuperados de GitHub tras el commit: **46 fichas de vocabulario, 225 glosas, 0 términos ausentes literalmente de su canto, 1193 estrofas y 7210 versos**. Los seis pasajes específicos citados (758, 823, 827, 837, 838, 981) pertenecen a los cantos indicados y contienen las palabras contrastadas.
- Corpus sin cambios: `obra/ida/estrofas.json` SHA `5d0de1ee6f8ffe088cd2a79360017d95ab9b9e7d`; `obra/vuelta/estrofas.json` SHA `8034740ca956cf77daf2aa76a2ca5bfbf2199987`.
- Consulta de GitHub Actions por SHA del commit de contenido: **0 ejecuciones devueltas**; el estado combinado también devolvió **0 estados**. Esto **no** equivale a éxito ni a ejecución de pruebas Astro. El último CI visible para la rama en el listado de runs consultado corresponde a `1dd44ae`, con fallos de cobertura del índice y auditoría editorial de imágenes. No se alteraron esos controles.

## Pendientes

La primera lectura individual de las 46 guías está documentada, pero la revisión semántica y la certificación técnica integral siguen abiertas. En la próxima ejecución: comprobar si GitHub Actions generó runs para los commits nuevos; revisar posibles usos figurados aún no examinados y eventuales regresiones. No modificar corpus, `main`, despliegues, indexación ni controles de calidad para forzar un aprobado.
