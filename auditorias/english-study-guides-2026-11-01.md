# Audit of the 46 English canto study guides — 2026-11-01

## Scope and primary sources
- José Hernández, *El gaucho Martín Fierro* (1872): 13 cantos, 395 structured stanzas, 2,316 verse records (`obra/ida/estrofas.json`).
- José Hernández, *La vuelta de Martín Fierro* (1879): 33 cantos, 798 structured stanzas, 4,894 verse records (`obra/vuelta/estrofas.json`).
- Combined: 46 cantos, 1,193 structured stanzas and **7,210 verse records**.

## Confirmed automated/content checks
1. All **46 English student-guide page files** exist under `src/pages/en/students/`: 13 `canto-N` pages and 33 `vuelta-canto-N` pages.
2. All 46 pages use the correct canto number in the `const canto` expression, display a corresponding H1 and link to the corresponding `/leer/{ida|vuelta}/N/` original reader route.
3. All 46 have four explicit `AdSlot` elements plus the shared `Base` layout configured with `adKind="article"` (five advertising reservations total per guide). This is a **structural** check, not a live ad-delivery test.
4. All **134 selected original-stanza references** (39 in Part One, 95 in Part Two) were validated for existence inside the **same part and same canto** of the original JSON corpus. The Astro guides dynamically render the corresponding verses using `estrofasDeCanto`; the verse text is not rewritten in the guide templates.
5. The English hub and Spanish general index include the final Canto XXXIII guide. The hub now lists the complete 46-guide series.
6. **Defect fixed during this audit:** Part One Canto XIII had a duplicated title and H1 copied from Canto XII, even though its synopsis, excerpts and source linked to Canto XIII. Corrected both title and heading, and updated description to reflect the actual ending of the 1872 poem.
7. Checked narrative boundaries for final Canto XXXIII: four people part, a promise remains undisclosed, names change, and the voice calls for gaucho homes, education, churches and rights. Do not invent the secret promise.

## Editorial caveats and remaining validation
- The 134 cited stanza numbers **exist and are in their correct canto**, but this is not a line-by-line independent scholarly collation of every interpretive paragraph against a second critical edition. Interpretations still require human editorial review.
- The presence and canto-specificity of original reader URLs have been verified in source, **not a comprehensive HTTP/404 crawl** of all internal and outbound URLs.
- Titles, descriptions and H1s were reviewed for chapter identity. This is **not a full SERP/metadata, canonical, hreflang, schema.org or accessibility audit**.
- CI build success establishes that the repository workflow passed, **not** that Cloudflare published these exact files or that the live website was visited.
- The existing robots/noindex restrictions must remain in place until explicitly authorized to change.
- Historic racialized language and narrator claims are preserved where quoted from the source, but critical framing is necessary in the English guides.

## Final inventory
- Part One: 13 / 13 guides.
- Part Two: 33 / 33 guides.
- Total: **46 / 46** (100% file coverage), subject to the additional live-site and editorial validation items above.
