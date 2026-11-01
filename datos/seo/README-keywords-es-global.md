# Keyword Planner — cinco exportaciones en español (octubre 2025 a septiembre 2026)

**Estado: incorporadas físicamente a GitHub en la rama `data/mf-seo-es-keywords-012-20261101` (pendiente de fusión).**

Las cinco exportaciones entregadas por el propietario el 1 de noviembre de 2026 se guardaron en `datos/seo/es/`, en UTF-8, con **todas las columnas y todos los registros** de las tablas originales. El origen adjuntado estaba en UTF-16 con tabulaciones, aunque el archivo terminaba en .csv. Las dos líneas iniciales de metadatos permanecen, seguidas del encabezado original y los registros separados por tabuladores. **No se trata de CSV tradicional con comas**: se conservó el separador original para evitar alteraciones de datos.

| Archivo | Filas de datos |
| --- | ---: |
| 01_martin_fierro_busquedas_centrales.csv | 759 |
| 02_jose_hernandez_y_literatura.csv | 277 |
| 03_personajes_episodios_y_consejos.csv | 100 |
| 04_gauchos_historia_y_tradiciones.csv | 569 |
| 05_lectura_educacion_y_documentos.csv | 264 |
| **Total sin deduplicar** | **1.969** |

Las cinco tablas tienen 26 columnas. Se mantienen los registros repetidos y las variantes originales, sin filtrar.

## Interpretación

- Son promedios estimados por Google Keyword Planner; no son visitas ni garantizan posiciones orgánicas.
- La exportación no demuestra por sí sola la segmentación geográfica aplicada al informe.
- Competencia de Google Ads no es dificultad SEO orgánica.
- Los valores vacíos NO equivalen a cero búsquedas.
- El texto de los 7.210 versos del poema nunca se modifica para SEO.
- Para usos programáticos, omitir las dos primeras líneas y leer como TSV UTF-8. Los campos pueden estar vacíos.
- El archivo `datos/seo/es/06_candidatos-investigacion.tsv` contiene **hipótesis futuras sin volumen reportado**; no mezclarlo con las mediciones.

## Historial de procedencia
Archivos de origen: `ESPANIOL-1-(1).csv` a `ESPANIOL-5-(1).csv`. Período declarado: 2025-10-01 a 2026-09-30. Importación documental: 2026-11-01.
