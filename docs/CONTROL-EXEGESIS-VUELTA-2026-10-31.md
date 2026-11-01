# Control editorial — Exégesis de La vuelta de Martín Fierro

**Fecha:** 31 de octubre de 2026  
**Estado:** cobertura por cantos implementada; profundización crítica pendiente.  
**Alcance:** revisión no destructiva de archivos existentes en `main`, sin intervenir el corpus.

## Evidencia comprobada en GitHub

- `src/data/exegesis-vuelta.ts` contiene **33 objetos de lectura**, con `canto` de 1 a 33, sin números faltantes ni repetidos. Cada objeto dispone de `titulo`, `analisis` y `contexto`.
- `src/pages/exegesis/la-vuelta/index.astro` importa las 33 lecturas, extrae versos del corpus mediante `estrofasDeCanto('vuelta',p.canto)` y presenta cuatro bloques de cantos: I–XI, XII–XIX, XX–XXVIII y XXIX–XXXIII.
- `src/pages/exegesis/index.astro` enlaza el estudio independiente en `/exegesis/la-vuelta/`.

Esta inspección **no equivale** a una compilación Astro superada, una auditoría de enlaces ni a una verificación pública de Cloudflare.

## Precisión sobre el estado

La tarea «completar los cantos» está cubierta **a nivel de un comentario introductorio por cada uno de los 33 cantos**. No es todavía una exégesis integral estrofa por estrofa ni una certificación filológica.

## Trabajo editorial que sigue pendiente

1. Escoger para cada canto una estrofa representativa del tema efectivamente analizado; la plantilla actual cita automáticamente la **primera estrofa** del canto, que puede no ilustrar la interpretación principal.
2. Registrar los identificadores de las estrofas elegidas y comprobar cada referencia contra el corpus, sin reescribir versos ni sustituir archivos originales.
3. Profundizar el comentario con atención a cambios de narrador, forma poética, contexto histórico y distinción entre hechos narrados e interpretación.
4. Documentar fuentes secundarias concretas para las afirmaciones de contexto, diferenciando variantes editoriales y desacuerdos críticos.
5. Antes de solicitar publicación: verificar referencias y enlaces internos, compilación Astro, accesibilidad, pantalla móvil y vista previa en Cloudflare Pages.
6. Conservar las **55 alertas textuales** en su flujo independiente: ninguna intervención de exégesis deberá darlas por resueltas sin dictamen.

## Reglas de seguridad

- No modificar `obra/`, `datos/versos.json`, `fuentes/` ni identificadores permanentes.
- Trabajar en rama y PR, sin fusionar automáticamente con `main`.
- No declarar completada la revisión filológica ni publicado un cambio por el solo hecho de guardar este documento.
- Obtener aprobación humana expresa antes del despliegue productivo.
