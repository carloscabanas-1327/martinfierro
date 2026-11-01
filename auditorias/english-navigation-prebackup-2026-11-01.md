# English edition: pre-backup navigation and localization review — 2026-11-01

## Coverage and scope
- GitHub repository: `carloscabanas-1327/martinfierro`.
- The current `main` tree lists **76 Astro pages** under `src/pages/en/`, including 46 canto study guides. The draft branch also adds `/en/students/characters/` and `/en/students/glossary/`.
- This review is **not** an exhaustive 78-page HTTP crawl and must not be described as complete certification. A connector call-budget limit prevented collecting all per-page link inventories. No independent production-domain status code or Cloudflare release is certified here.

## Confirmed corrections on PR #115 branch
1. Remove a **duplicated 'Advice to His Sons' feature section** and the duplicate HTML id `en-advice-feature` on `/en/`.
2. Change English homepage editorial links that previously directed users to Spanish translation and sources pages, to existing English translation and archive pages. Intentional links to the **original Spanish poem** remain clearly marked.
3. Shared `Base.astro`: English masthead primary action now points to the English 46-canto student hub with label **STUDY THE POEM**, rather than silently opening Spanish canto 1. Keep explicitly labeled links to the original Spanish poem.
4. Shared English navigation/footer: translation items now link to `/en/martin-fierro-english-translation/` instead of the Spanish translations route.
5. Preserve the preexisting `/en/library/gaucho-glossary/` (rural material culture) and contextualize the complementary `/en/students/glossary/` (poetic language and characters); each links to the other.
6. Student index includes character profiles and contextual glossary; the character guide reuses Spanish WebP portraits and preserved corpus excerpts.

## Cross-language link policy
- An English navigation or information label should resolve to an English page **when a suitable English counterpart exists**.
- Spanish-original verse reader routes `/leer/...` are allowed only with clear disclosure: *original poem*, *Spanish*, or equivalent.
- Some legal/institutional destinations in the shared English footer still lead to Spanish pages **explicitly labeled '(Spanish)'** because English equivalents have not been established. Do not silently redirect them or invent empty EN pages.
- Book titles, gaucho vocabulary, original quotes, character names, and historical institution names legitimately remain in Spanish within otherwise English explanations.

## Further gates BEFORE declaring backup-ready
- Full Astro build and CI checks for the PR head.
- Generated-site exhaustive internal-link validation (all /en/ routes, fragments and resources), including all 46 canto pages.
- Language and accessible navigation inspection of every generated English HTML page.
- Live checks against the deployment-specific preview and production Cloudflare domains.
- Human approval before merging/publishing; backup must identify exact Git commit, deploy ID and corpus integrity checks.
- Maintain robots/noindex blocking until separately authorized to change.

## Corpus preservation
This PR does not modify `obra/ida/estrofas.json`, `obra/vuelta/estrofas.json` or source verse identifiers. No text of the poem was rewritten.
