# Cotejo filológico: primera revisión individual documentada (3 de 55)

**Estado:** revisión comparativa preliminar; no se han modificado los 7.210 versos del corpus. La clasificación no constituye todavía resolución de TEXT-01.

## Alcance y método
Se partió del archivo `datos/auditoria/cotejo-bcn-2022.json`. Sus `coincidencia` son resultados de similitud de texto calculados contra el PDF entero y no garantizan alineación por página, canto ni estrofa. Se verificaron los pasajes en la extracción textual de la **Biblioteca del Congreso de la Nación, edición 2022**, ISBN 978-950-691-129-4, fuente: https://digitales.bcn.gob.ar/files/textos/publicacion-martin-fierro.pdf. Nota editorial de esa edición: La ida reproduce texto de 1878, y La vuelta de 1879. Las páginas citadas a continuación son **índices del PDF comenzando por 1**, no necesariamente números impresos. El servicio de captura de páginas del PDF devolvió error de caché, por lo cual la comprobación visual de los facsímiles sigue pendiente.

### 1. `mf-ida-e0033-v01`
- **Corpus actual:** «Y verlos al cair la tarde».
- **BCN 2022, PDF página 14 (índice 13, numeración inicial 0):** «Y verlos al cair la noche».
- **Dictamen preliminar:** DIFERENCIA_SUSTANTIVA_ENTRE_TESTIMONIOS. El cambio tarde/noche no es puntuación ni grafía, y requiere cotejar impresos de 1872 y 1878 por página y contexto. No corregir por semejanza.
- **Estado:** abierto, evidencia textual BCN verificada; facsímil histórico no cotejado.

### 2–3. `mf-ida-e0039-v01` y `mf-ida-e0039-v02`
- **Corpus actual:** «Pues vivía la mamajuana» / «siempre bajo la carreta,».
- **BCN 2022, PDF página 15 (índice 14, numeración inicial 0):** «Pues siempre la mamajuana» / «vivía bajo la carreta».
- **Testimonio independiente:** Giovanni Meo-Zilio, «Metodología y técnica de una traducción literaria. Los juegos de palabras en Martín Fierro», *Thesaurus* XLIII, 1988, reproduce «Pues vivía la mamajuana / siempre bajo la carreta» (https://cvc.cervantes.es/lengua/thesaurus/pdf/43/TH_43_023_045_0.pdf). También figura en edición de UNIPE: https://editorial.unipe.edu.ar/images/phocadownload/colecciones/intervenciones/martin_fierro.pdf.
- **Dictamen preliminar:** VARIANTE_DE_ORDEN_ENTRE_TESTIMONIOS, no necesariamente dos errores independientes. La secuencia conservada en el corpus tiene respaldo editorial independiente. El alineador reporta dos alertas contiguas como si no estuvieran vinculadas; conviene tratarlas como **un mismo fenómeno textual** pero conservar ambos IDs en el inventario.
- **Estado:** testimonios digitales contrastados; falta decidir edición base tras facsímiles.

## Observación adicional no contabilizada entre estos tres dictámenes
`mf-ida-e0108-v05`: corpus «ya me tenían medio loco», BCN 2022 PDF página 29 (índice 28) «ya nos tenían medio loco». La diferencia pronominal está localizada en el PDF; se conserva como alerta abierta para análisis contextual y variantes.

## Decisiones de integridad
1. **Ningún verso editado.** No se modifica el texto original, el corpus estructurado ni sus IDs.
2. Quedan **55 alertas administrativas** mientras no se cierre formalmente cada dictamen con facsímil y regla editorial de edición base.
3. Tres IDs se estudiaron de manera preliminar y uno adicional fue localizado; no se declara ninguno definitivamente resuelto.
4. La actualización del indicador TEXT-01 exige cotejo visual, página exacta, testimonio bibliográfico y conclusión independiente por caso.
