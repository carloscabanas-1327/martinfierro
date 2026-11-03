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

Se regeneran con `python3 scripts/importar-testena.py`.

## Estado: transcripción NO cotejada

- 7.106 versos en 46 cantos (original: 7.210). La Ida tiene 2.241 contra 2.316; el canto XIII de la Ida, 28 menos.
- Quedan errores de OCR («woglio», «M°han», restos de notas al pie, alguna palabra española colada) y estrofas mal cortadas en los saltos de página. El canto XIII de la Ida tiene el orden alterado en sus primeras estrofas.
- No se corrigió, completó ni generó ningún verso. Cada corrección futura debe hacerse contra el facsímil y quedar anotada.
- Mientras tanto las 46 páginas `/it/lettore/…/N/` van en `noindex` y no se declaran como equivalentes `hreflang` de `/leer/…/N/`. Para habilitarlas: `TESTO_COLLAZIONATO = true` en `src/lib/testena.ts`.

## Fuentes bibliográficas

- Antonella Cancellier, «2019: a cent'anni dalla prima traduzione italiana di Martín Fierro», *Oltreoceano*, 16 (2020), pp. 163–173.
- Sara Jaquelina Iriarte, «Traducir el Martín Fierro, una credencial cultural para Folco Testena», *Cadernos de Tradução*, 40, 2 (2020), pp. 98–111.
