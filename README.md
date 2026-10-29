# MARTINFIERRO.ORG — Repositorio documental

Archivo digital reproducible de **El gaucho Martín Fierro** (1872) y **La vuelta de Martín Fierro** (1879), de José Hernández.

## Estado actual (29 de octubre de 2026)

**INTEGRIDAD TÉCNICA VERIFICADA — 7.210 versos.** Es una edición estructurada derivada de Project Gutenberg, con intervenciones explícitas documentadas y corroboradas por otras transcripciones. **No se reivindica una certificación filológica independiente de toda la edición.**

| Parte | Cantos | Estrofas numeradas | Versos |
|---|---:|---:|---:|
| La ida | 13 | 395 | 2316 |
| La vuelta | 33 | 798 | 4894 |
| **TOTAL** | **46** | **1193** | **7210** |

La numeración continua de las estrofas (1 a 1193) es la utilizada por esta edición fuente. La cantidad puede diferir de otros criterios de división editorial.

## Edición y documentación

- [Informe técnico verificable](datos/auditoria/verificacion-tecnica.json)
- [Enmiendas respaldadas por ediciones externas](fuentes/enmiendas-documentadas.json)
- [Auditoría histórica inicial, ya superada en sus diferencias de conteo](AUDITORIA-2026-10-29.md)
- [Texto original Gutenberg, La ida](fuentes/gutenberg-14765-original.txt)
- [Texto original Gutenberg, La vuelta](fuentes/gutenberg-15066-original.txt)

Las fuentes Gutenberg se preservan sin modificación. La **edición estructurada** restaura documentalmente dos líneas omitidas, normaliza el número de estrofa 638 (transcrito como 538 en Gutenberg) y recupera el orden numérico 359-363 sin borrar la anomalía histórica.

## Archivos utilizables por proyectos y agentes

- [La ida: JSON de estrofas](obra/ida/estrofas.json) · [TXT de lectura](obra/ida/completo-estructurado.txt) · [HTML](obra/ida/poema.html) · [cantos](obra/ida/cantos/)
- [La vuelta: JSON de estrofas](obra/vuelta/estrofas.json) · [TXT de lectura](obra/vuelta/completo-estructurado.txt) · [HTML](obra/vuelta/poema.html) · [cantos](obra/vuelta/cantos/)
- [Todos los versos con identificadores estables](datos/versos.json)

Identificador de ejemplo: `mf-ida-e0295-v05` (parte, estrofa y posición del verso).

## Reproducir todo sin PC local

En **GitHub Actions → Generar corpus documental**, iniciar `Run workflow` o modificar los scripts. El proceso descarga, genera, audita, verifica de modo estricto y, si todas las pruebas pasan, incorpora automáticamente los archivos a `main`.

```text
python scripts/construir.py
python scripts/auditar.py
python scripts/verificar_integridad.py
```

Para el sitio MARTINFIERRO.ORG, el siguiente módulo será Astro con despliegue Cloudflare Pages. Los datos estructurados permanecerán separados de su presentación.

**Alcance de la verificación:** secuencia 1–1193, 46 cantos, 7210 versos, identificadores únicos, correspondencia estrofa por estrofa con la transcripción fuente, dos emendaciones respaldadas por fuentes secundarias, TXT/JSON sincronizados y huellas SHA-256. Una certificación filológica independiente exige un cotejo completo por edición y revisión externa.
