# Auditoría documental — 2026-10-29

**Dictamen: NO CERTIFICADO.** Auditoría reproducible ejecutada satisfactoriamente en GitHub Actions, ejecución [40814464380](https://github.com/carloscabanas-1327/martinfierro/actions/runs/40814464380). El informe pormenorizado `datos/auditoria/reporte.json` está en el artefacto de esa ejecución; no está aún incorporado a main.

## Recuentos

| Parte | Cantos esperados | Cantos detectados | Versos de referencia | Registros de verso | Diferencia |
|---|---:|---:|---:|---:|---:|
| Ida | 13 | 12 | 2316 | 2297 | -19 |
| Vuelta | 33 | 33 | 4894 | 4887 | -7 |
| Total | 46 | 45 | 7210 | 7184 | -26 |

Los recuentos de referencia corresponden a una convención editorial de versos; no implican identidad textual con Gutenberg ni verifican estrofas.

## Ausencias y pistas exactas

- **Ida**: números de estrofa **359, 360 y 361** omitidos del JSON; aparecen en el texto fuente descargado en líneas **2983, 2991 y 2999**. Los 395 números del rango de Ida se detectaron en el original por la auditoría; solo 392 se incorporaron a la estructura.
- **Vuelta**: el número **638** no figura en el JSON ni aparece como encabezado reconocible en el original por la expresión regular usada. El original permite detectar **797** números del rango 396–1193. Esto no demuestra ausencia material de sus versos.
- **Cantos de Ida**: 12 detectados frente a 13 esperados. Revisar manualmente el encabezado omitido.
- **Integridad de ID**: sin duplicados en las dos partes.
- **Cotejo literal interno**: los 7184 registros contienen texto presente como línea literal en el archivo fuente correspondiente. Es una condición necesaria, no suficiente: no prueba alineación exacta, integridad ni independencia de fuente.

## Método y límites

Se ejecutó `python scripts/construir.py` y a continuación `python scripts/auditar.py` sobre archivos Gutenberg 14765 y 15066. La segunda rutina inspecciona numeración, duplicación, orden y coincidencia literal de líneas, y publica el JSON del informe en el artefacto del workflow. **No se realizó aún un cotejo verso por verso con una segunda transcripción independiente**. Una ejecución correcta del workflow no significa aprobación editorial.

## Fuentes de referencia

- Project Gutenberg, [El Gaucho Martín Fierro, 14765](https://www.gutenberg.org/ebooks/14765)
- Project Gutenberg, [La Vuelta de Martín Fierro, 15066](https://www.gutenberg.org/ebooks/15066)
- [Biblioteca Virtual Miguel de Cervantes, Martín Fierro: cien años de crítica](https://www.cervantesvirtual.com/descargaPdf/martin-fierro-cien-anos-de-critica/) (13 y 33 cantos).
- [Alero Quichua Santiagueño, cierre de La Vuelta](https://www.aleroquichua.org.ar/sitio/fierro_vuelta.php?id=33) (numeración acumulada hasta 7210; la referencia debe cotejarse con la convención adoptada).

## Condiciones para aprobar

1. Recuperar 359–361 desde la transcripción fuente sin alterar sus versos; reparar correspondencia a cantos.
2. Resolver el 638 de Vuelta con control de numeración en ediciones independientes.
3. Identificar los 46 cantos y fijar una edición normativa.
4. Cotejar línea por línea con una edición independiente; registrar divergencias de puntuación y ortografía sin modernizarlas automáticamente.
5. Publicar hash, informe de cotejo, validaciones y versión del corpus en GitHub main.

**No completar artificialmente los 26 registros faltantes para alcanzar una cifra.**
