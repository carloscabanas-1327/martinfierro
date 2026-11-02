# MF-ES-024 — Registro de cotejo filológico de las 46 guías

Fecha: 2026-11-02. Estado: **AUDITORÍA ABIERTA; NO CERTIFICADA COMO COMPLETA**.

## Universo efectivamente inspeccionado
Se recuperaron desde la rama de trabajo los dos archivos del corpus (`obra/ida/estrofas.json`, `obra/vuelta/estrofas.json`), las lecturas de Ida y Vuelta, las preguntas de Vuelta, la selección de estrofas, las notas de pasajes, los personajes por canto y el vocabulario. Se recorrieron las 46 fichas (Ida 1–13; Vuelta 1–33) para revisar sus títulos, resúmenes, personajes declarados y números de estrofas seleccionadas.

## Resultados comprobados
- Corpus: 1193 estrofas, 7210 versos, distribuidos entre ambas partes.
- 46 guías localizadas; sus selecciones de estrofas remiten a cantos existentes.
- Cuatro supuestas discrepancias de cantidad de notas (Vuelta 11, 20, 29 y 31) son **falsos positivos** si se compara una nota por estrofa: cada canto contiene una estrofa larga subdividida en tres pasajes comentados por la plantilla.
- Comprobación puntual adicional: Vuelta 12 termina en la estrofa 718 con la despedida del hijo mayor; Vuelta 13 comienza en la 719 con la voz del otro hijo y la 730 anuncia al tutor; Vuelta 14 introduce a Vizcacha en la 731. La transición de voces y personajes de las guías concuerda con estos pasajes.
- Vuelta 20, estrofa 855, efectivamente presenta a Picardía; Vuelta 29, estrofa 1038, introduce al Moreno y el contrapunto.

## Límite de la evidencia
La inspección anterior **NO** acredita un cotejo semántico exhaustivo de todas las afirmaciones en las 46 guías contra cada verso del canto. Tampoco acredita el significado contextual de todas las voces del glosario, ni la exactitud de cada comentario y pregunta. Los controles automáticos de integridad no sustituyen una lectura crítica de cada canto. No corresponde certificar ausencia de errores ni declarar el encargo resuelto.

## Pendientes para cerrar
1. Elaborar por cada una de las 46 guías una matriz de afirmación → estrofa(s) justificativas → veredicto → corrección, incluyendo resumen, interpretación, personajes, preguntas, vocabulario y notas.
2. Revisar pasajes no seleccionados para detectar afirmaciones omitidas, exageradas o descontextualizadas.
3. Corregir errores probados, cada cambio en commit independiente y verificado.
4. Ejecutar las auditorías del repositorio y dejar evidencia de resultados.
5. Emitir informe final solo con 46/46 fichas cotejadas y sin incidencias abiertas, o consignar explícitamente las pendientes.

**Protecciones:** no modificar el corpus, no fusionar `main`, no desplegar, no abrir indexación.

## Avance verificable del 2 de noviembre de 2026

**16/46 guías cotejadas individualmente contra todos los versos de sus cantos (Ida 13/13, Vuelta 3/33); 30 pendientes (Vuelta IV–XXXIII).**

- [Informe de La ida, cantos I–XIII](MF-ES-024-IDA-COTEJO-13-GUIAS-2026-11-02.md): lectura de las estrofas 1–395 (2316 versos), evidencia por canto y correcciones documentadas de Ida V, VI, VII y XIII. Se conservó el slug histórico de Ida VII para no romper enlaces.
- [Informe de La vuelta, cantos I–III](MF-ES-024-VUELTA-COTEJO-01-03-2026-11-02.md): lectura de las estrofas 396–474 (474 versos) y corrección de usos figurados de «partida», «leva» y «rancho» en Vuelta III.
- Se corrigió además una atribución equivocada en la plantilla: Vuelta XIII presenta al hijo menor, no al mayor; **su guía completa todavía no está aprobada**.
- Control estático posterior a las correcciones de La ida: 46 guías, 104 notas de pasajes, 225 términos presentes literalmente en los cantos, 138 preguntas, 1193 estrofas y 7210 versos, sin incidencias estructurales. Este control no sustituye la compilación Astro ni la lectura literaria de las 30 guías restantes.
- Los workflows de GitHub Actions fueron activados por los commits; sus conclusiones deben verificarse y cualquier fallo debe resolverse antes del cierre.

**La auditoría continúa abierta.**
