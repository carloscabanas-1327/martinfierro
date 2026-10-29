# Certificación técnica interna de integridad — MARTINFIERRO.ORG
**Fecha:** 2026-10-29  
**Ámbito:** corpus documental derivado de las transcripciones digitales Project Gutenberg n.º 14765 y 15066; identificadores de estrofas 1–1193.  
**Resultado:** **APROBADA la integridad técnica respecto de la edición base y las enmiendas documentadas.**  
**No equivale a certificación filológica por una entidad independiente.**

## Resultado cuantitativo verificado

| Parte | Cantos | Estrofas numeradas | Versos |
|---|---:|---:|---:|
| El gaucho Martín Fierro | 13 | 395 | 2316 |
| La vuelta de Martín Fierro | 33 | 798 | 4894 |
| Total | 46 | 1193 | 7210 |

## Evidencia automatizada

Se ejecutaron exitosamente en GitHub Actions:
1. Descarga desde la fuente original e identificación del hash SHA-256.
2. Segmentación a cantos, estrofas y versos numerados.
3. Auditoría de numeración, orden, vacíos y duplicaciones.
4. Cotejo literal y **estrofa por estrofa** de la versión estructurada contra la transcripción base, exceptuando exactamente dos versos restaurados con evidencia externa.
5. Validación de continuidad 1–1193, 7210 identificadores sin colisiones, 13+33 cantos, TXT y JSON con idéntica secuencia de versos.
6. Exportación de informe de verificación y hashes para reproducibilidad.
7. Incorporación de corpus validado a la rama `main`.

**Ejecución que incorporó el corpus:** [GitHub Actions 40815140999](https://github.com/carloscabanas-1327/martinfierro/actions/runs/40815140999).
**Ejecución con cotejo independiente de bloques fuente/JSON añadido y aprobado:** [GitHub Actions 40815323652](https://github.com/carloscabanas-1327/martinfierro/actions/runs/40815323652).

## Huellas de versos estructurados

- Ida: `0b27c0326532fe7cf9925dff0ef908b21be44e2ea726b537f4183253a96c2ce2`
- Vuelta: `42d47c6c9a6b5060970d08ce16020196a8a364abcdc0a403ac703a836d53045a`

Los hashes corresponden al texto de los versos concatenado con saltos de línea LF, **no** al archivo JSON completo ni a la edición impresa. El archivo `datos/auditoria/verificacion-tecnica.json` conserva los recuentos y hashes.

## Erratas documentadas y procedencia

| Caso | Fuente Gutenberg | Intervención documentada | Contraste independiente |
|---|---|---|---|
| Ida, estrofa 295 | 5 versos | Restituido el quinto verso «Si este mundo es un infierno» | Biblioteca del Congreso de la Nación; Wikisource 1894 |
| Vuelta, estrofa 421 | 5 versos | Restituido el tercero «escúchenme cuando canto» | Cervantes Virtual; Biblioteca del Congreso |
| Vuelta, estrofa 638 | Rótulo «538» tras «637» | Normalizado a «638» **solo en la edición derivada** | Edición Electroneurobiología 1995 y otra reproducción |
| Ida, 359–363 | Orden de origen 362–363, 359–361 | Reordenadas las estrofas en la edición estructurada | Numeración de la fuente y secuencia de referencias |

Fuentes y alcance de cada intervención: [enmiendas-documentadas.json](fuentes/enmiendas-documentadas.json). Los archivos Gutenberg originales **no se editaron**.

## Límites de la conclusión

- Es una **certificación técnica interna**, de reproducibilidad e integridad **respecto de una transcripción base específica**.
- Los recuentos 2316 y 4894 están respaldados por la ficha bibliográfica de la Universidad Nacional del Sur; los 46 cantos son un criterio compartido por estudios y ediciones.
- No se completó un cotejo filológico independiente de los 7210 versos frente a un facsímil original o una edición crítica autorizada. Diferencias entre primeras ediciones, segundas ediciones y reimpresiones no deben resolverse automáticamente.
- Para usar la denominación «edición crítica certificada por especialistas», se necesita dictamen externo y comparación bibliográfica sistemática.

## Versionado y protección

El corpus fue incorporado a GitHub `main` tras pasar pruebas técnicas; toda edición posterior deberá regenerar y superar los controles. Recomendada aprobación humana para cambios de texto base y respaldo en almacenamiento independiente antes del despliegue productivo.

**Dictamen:** Es apto como **corpus digital estructurado técnicamente íntegro** para desarrollar Astro, índices, búsquedas y anotaciones, con atribución y advertencia filológica. No atribuirle homologación académica externa.
