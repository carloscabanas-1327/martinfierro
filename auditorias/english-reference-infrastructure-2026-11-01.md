# English reference infrastructure — 2026-11-01

## Implemented
- `/en/site-index/` provides a categorized English directory of existing published content and all 46 English canto study guides.
- `/en/search/` provides client-side searching of registry titles, route names, subject keywords and descriptions, including an explicit "original Spanish" disclosure for the source reader. Search requires no indexing vendor, backend or network requests. With scripting disabled, the complete link listing remains visible.
- `src/data/en-reference.ts` is a **single documented metadata registry** for English discovery and a curated list of ES/EN subject relationships.
- Homepage and English shared navigation introduce links to the two reference tools.

## Cross-language relationships
- Each pair is marked `equivalent` only if broadly equivalent (currently the two home editions); all other entries are `related`, not assumed translations.
- No automatic hreflang links were emitted from "related" subject pairs: language alternates require page-by-page editorial equivalence verification.
- Links to `/leer/` intentionally open the original Spanish-language poem and explicitly announce this.

## Important limitations / next-stage development
- Search uses descriptive metadata and route names, **not a full-text index of article bodies or the 7,210 Spanish verses**. To add full-text search, generate a verified build-time index of titles, content, character names and stanza identifiers from structured source data, without changing the corpus.
- The literary analysis section currently links to existing English `/en/library/themes-and-analysis/`. Separate deeper English literary analysis essays are a future editorial task requiring verified sources.
- This change introduces **no English translation of the original poem**.
- This branch is based on `main` and is independent from open PR #115; merging concurrently should be preceded by integration tests and a conflict check.
- Current project policy is to retain blocking robots/noindex until explicit approval to index.

## Acceptance gates
1. Build Astro and validate generated routes.
2. Click/test English nav, index, search and source-language labels at desktop/mobile widths.
3. Verify every metadata registry destination resolves and has the expected language; verify relevant pair destinations.
4. Confirm exact unchanged verse records and identifiers.
5. Validate the Cloudflare preview before merging into `main`.
6. Back up only an identified, tested commit; do not report this branch as production or certified without verification.
