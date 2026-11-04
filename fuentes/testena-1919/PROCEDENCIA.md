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

## Estado: cotejo en curso

- **Ida (13 cantos): cotejada con el facsímil completo** (PDF del IAI, 189 imágenes, 4 de noviembre de 2026). 2.316 versos, igual que el original; cada canto tiene las mismas estrofas que el español (salvo el VIII, que Testena imprime en cuartetas donde Hernández tiene octavas). Método: segunda lectura OCR de la columna italiana de cada página, alineada verso por verso con el texto anterior; cada diferencia se revisó a ojo sobre la imagen. Se recuperaron 83 versos que el OCR había perdido (casi todos en saltos de página), se eliminaron 8 líneas basura (cabeceras, notas al pie, palabras españolas coladas) y se corrigieron letras y acentos. El facsímil usa acento agudo (piú, ció, perché, cosí); se sigue la grafía impresa.
- **Vuelta (33 cantos): pendiente**, salvo Vuelta XXX, estrofa 4, y Vuelta XXXII (los Consejos), cotejado sobre capturas de pantalla (palabras y versos verificados, acentos no).
- No se completó ni generó ningún verso: cada verso agregado está leído en el facsímil. Las correcciones quedan en `correzioni.json` (verso, texto del OCR, texto impreso e imagen consultada) y, en `strofe`, la partición en estrofas de cada canto cotejado; `importar-testena.py` las aplica y falla si el OCR no coincide o si la partición no suma los versos.
- Mientras tanto las 46 páginas `/it/lettore/…/N/` van en `noindex` y no se declaran como equivalentes `hreflang` de `/leer/…/N/`. Para habilitarlas: `TESTO_COLLAZIONATO = true` en `src/lib/testena.ts`.

## Fuentes bibliográficas

- Antonella Cancellier, «2019: a cent'anni dalla prima traduzione italiana di Martín Fierro», *Oltreoceano*, 16 (2020), pp. 163–173.
- Sara Jaquelina Iriarte, «Traducir el Martín Fierro, una credencial cultural para Folco Testena», *Cadernos de Tradução*, 40, 2 (2020), pp. 98–111.
