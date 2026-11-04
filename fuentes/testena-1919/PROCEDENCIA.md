# Traducción italiana de Folco Testena (1919): procedencia y estado

- **Obra:** José Hernández, *El gaucho Martín Fierro* (1872) y *La vuelta de Martín Fierro* (1879).
- **Traducción:** Folco Testena (Comunardo Braccialarghe, Macerata 1875 – Buenos Aires, 26/03/1951), en verso, completa.
- **Edición:** Buenos Aires, Edición de la revista «Nosotros», 1919. Bilingüe (español e italiano en columnas). Según la transcripción de archivo.ar, la portada del ejemplar digitalizado dice 1920.
- **Ejemplar:** Ibero-Amerikanisches Institut, Preußischer Kulturbesitz (Berlín), PPN 835991172. Visor: https://digital.iai.spk-berlin.de/viewer/image/835991172/1/
- **Derechos:** dominio público en Argentina e Italia desde el 1/1/2022 (vida + 70 años); en EE. UU., por publicación anterior a 1931. Las imágenes del facsímil son del IAI y no se incluyen.

## Archivos

| Archivo | Contenido |
|---|---|
| `fuente-ocr-archivo-ar.json` | OCR por cantos, copia exacta de `src/data/testena-1919.json` del repo `carloscabanas-1327/archivo` (commit 143cca7). SHA-256 `074aa97bfe5b9f1f24e2cf2f1f26a77c22ec40775cfea746181fde319c7e6412`. |
| `andata.json`, `ritorno.json` | Texto estructurado: cantos, estrofas y versos con identificadores permanentes (`it-andata-c01-e001-v01`). |
| `corrispondenza.json` | Por canto: estrofas y versos del original (`obra/`) y de la traducción, diferencia, página del libro e imagen del facsímil. |
| `ficha.json` | Ficha bibliográfica, derechos, método, límites y bibliografía. |
| `correzioni.json` | Correcciones del OCR cotejadas con el facsímil. |

Se regeneran con `python3 scripts/importar-testena.py`.

## Estado: cotejada

- **Todo el poema cotejado con el facsímil completo** (PDF del IAI, 189 imágenes, 4 de noviembre de 2026). Método: segunda lectura OCR de la columna italiana de cada página, alineada verso por verso con el texto anterior; cada diferencia se revisó a ojo sobre la imagen, y al final se repasaron sobre la imagen todas las líneas con signos sospechosos (puntos sueltos, comillas por apóstrofo, «AI» por «Al», «lo» por «Io», «È» por «E»). El facsímil usa acento agudo (piú, ció, perché, cosí); se sigue la grafía impresa, erratas incluidas.
- **Ida (13 cantos):** 2.316 versos, igual que el original; mismas estrofas que el español (salvo el VIII, que Testena imprime en cuartetas donde Hernández tiene octavas). Se recuperaron 83 versos que el OCR había perdido (casi todos en saltos de página) y se eliminaron 8 líneas basura.
- **Vuelta (33 cantos):** 4.889 versos (el original tiene 4.894). Se recuperaron 75 versos y se eliminaron 51 líneas basura (cabeceras, notas, rótulos de interlocutor como «Il Nero» o «A un altro», fragmentos de verso partidos por el salto de línea). Diferencias con el original que vienen de la impresión: Vuelta III tiene un verso omitido en la propia edición (línea de puntos); XXVII y XXVIII siguen la disposición italiana (135 y 159 versos, con algún terceto); XXX (la payada) agrupa los versos como Testena (99 estrofas). Los dos versos «Martín Fierro e i suoi due figli / Entro tutta quella gente» abren el XX, como en el impreso.
- No se completó ni generó ningún verso: cada verso agregado está leído en el facsímil. Las correcciones quedan en `correzioni.json` (verso, texto del OCR, texto impreso e imagen consultada) y, en `strofe`, la partición en estrofas de cada canto cotejado; `importar-testena.py` las aplica y falla si el OCR no coincide o si la partición no suma los versos.
- Las 46 páginas `/it/lettore/…/N/` siguen en `noindex` hasta que se apruebe este cotejo. Para habilitarlas: `TESTO_COLLAZIONATO = true` en `src/lib/testena.ts`.

## Fuentes bibliográficas

- Antonella Cancellier, «2019: a cent'anni dalla prima traduzione italiana di Martín Fierro», *Oltreoceano*, 16 (2020), pp. 163–173.
- Sara Jaquelina Iriarte, «Traducir el Martín Fierro, una credencial cultural para Folco Testena», *Cadernos de Tradução*, 40, 2 (2020), pp. 98–111.
