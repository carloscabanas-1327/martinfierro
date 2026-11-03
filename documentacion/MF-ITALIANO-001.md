# Informe MF-ITALIANO-001: edición italiana de martinfierro.org

Fecha: 3 de noviembre de 2026
Rama: `feat/mf-italiano-001-20261102`, creada desde `main` (f284bc2).
PR: [#152](https://github.com/carloscabanas-1327/martinfierro/pull/152), hacia `main`. **No está fusionado ni desplegado a producción.**
El PR #149 apunta a otra rama (`feat/mf-es-plan-auditable-023-20261101`) y este trabajo no depende de él. Los dos tocan archivos distintos, salvo que el #149 rehace portadas de otros idiomas; si se fusionan ambos, no se esperan conflictos de contenido.

## 1. Arquitectura inglesa auditada

- `/en/` tiene unas 95 páginas: portada, lector-guía (`/en/reader/`, que remite al texto español), 46 guías por canto en `/en/students/`, glosario y personajes, revista (10 artículos), biblioteca (8 páginas), índice, búsqueda, exégesis, temas, biografía y páginas institucionales y legales.
- Todo usa el layout común `src/layouts/Base.astro`, que antes solo distinguía entre inglés y español. Los estilos van incrustados en cada página.
- La única fuente del texto es `obra/` (que lee `src/lib/corpus.ts`), compartida por el lector, el buscador y las guías.
- SEO: canonical y `lang` salen del layout. `scripts/generar-seo.mjs` genera el sitemap y valida canonical y `en-US`. **No había hreflang en ninguna página.** `robots.txt` está en `Disallow: /`.
- `/it/` era una ficha `noindex` del catálogo de idiomas, sin texto.

## 2. Traducción usada

**Folco Testena** (Comunardo Braccialarghe, Macerata 1875 – Buenos Aires, 26/03/1951).

- Edición: *Martín Fierro y La vuelta de Martín Fierro. Poemi creoli tradotti in versi italiani*, Buenos Aires, Edición de la revista «Nosotros», 1919. Es bilingüe y completa, en verso.
- Ejemplar digitalizado: Ibero-Amerikanisches Institut de Berlín, PPN 835991172.
- Fuentes de la ficha:
  - A. Cancellier, *Oltreoceano* 16 (2020);
  - S. J. Iriarte, *Cadernos de Tradução* 40/2 (2020).
- El título lleva «El gaucho» en una de las fuentes y no en la otra. Está anotado; hay que confirmarlo contra la portada del facsímil.

**Derechos.** La traducción es de dominio público en Argentina e Italia desde el 1/1/2022 (vida + 70 años). En EE. UU. también, porque se publicó antes de 1931. Las imágenes del facsímil son del IAI: se enlazan y no se copian.

**Estado del texto.** Es OCR sin cotejar.

- Tiene 7.106 versos contra los 7.210 del original.
- Quedan erratas. El canto XIII de la Ida está desordenado al principio.
- No se corrigió ni se generó ningún verso.
- Los 46 cantos están en `noindex`, con aviso y enlace al facsímil y al original.

## 3. Arquitectura italiana implementada (67 páginas)

| Sección | Ruta |
|---|---|
| Portada | `/it/` |
| Lector | `/it/lettore/`, `/it/lettore/andata/`, `/it/lettore/ritorno/` y 46 cantos `/it/lettore/{andata,ritorno}/N/` |
| Presentación, partes, contexto | `/it/che-cose-martin-fierro/`, `/it/le-due-parti/`, `/it/contesto-storico/`, `/it/il-gaucho/` |
| Autor | `/it/jose-hernandez/` |
| Estudiantes | `/it/studenti/` (46 síntesis), `/it/studenti/glossario/` |
| Biblioteca | `/it/biblioteca/`, `/it/biblioteca/traduzione-testena/` (ficha, derechos y tabla de correspondencia por canto) |
| Revista | `/it/rivista/`, `/it/rivista/giorno-della-tradizione/`, `/it/rivista/payada/`, `/it/rivista/pulperie/` |
| Herramientas | `/it/indice/`, `/it/cerca/` (páginas y versos), `/it/indice-versi.json` |
| Proyecto | `/it/metodo-editoriale/`, `/it/fonti-e-diritti/` |

Usé rutas en italiano. Las equivalencias están en `src/data/equivalencias.ts` y se listan en `/it/indice/`.

## 4. Archivos

**Nuevos**
- `fuentes/testena-1919/` con estos archivos:
  - `ficha.json`, `andata.json`, `ritorno.json`, `corrispondenza.json`;
  - `fuente-ocr-archivo-ar.json` (con su SHA-256);
  - `PROCEDENCIA.md`.
- `scripts/importar-testena.py`.
- `src/lib/testena.ts`.
- En `src/data/`: `equivalencias.ts`, `it-edizione.ts` e `it-canti.ts`.
- En `src/components/`: `ArticoloIt.astro` y `StrofaIt.astro`.
- En `src/styles/`: `edizione-italiana.css` y `portale-edizione.css`. Este último es una copia de los estilos de la portada inglesa, para no tocarla.
- `src/pages/it/**`.

**Modificados**
- `src/layouts/Base.astro`: cabecera y pie en italiano, hreflang y selector de idioma.
- `src/styles/editorial-shell.css`: estilos del selector.
- `scripts/generar-seo.mjs`: validación de hreflang, de `it-IT` y del sitemap con alternativas.
- `src/components/EditorialSection.astro`: textos configurables, con los mismos valores en español por defecto.
- `src/pages/indice-general/index.astro`: se suman las páginas italianas.
- `src/pages/traducciones/index.astro`: se actualiza la ficha italiana.
- `src/data/idiomas.ts`: texto de la ficha `it`.

**Sin cambios:** `obra/`, `datos/`, `auditorias/`, `src/pages/en/`, `src/pages/estudiantes/` y `src/pages/leer/`.

## 5. Pruebas

- `npm run build`: 307 páginas. Resultado: «SEO OK: 255 indexable URLs … 192 hreflang links reciprocal».
- Página por página del hreflang: cada destino existe, es indexable, tiene el idioma declarado y devuelve el enlace.
- Comprobación de los 7.210 versos y los 46 cantos: OK. `test-indice-search.mjs`: OK.
- `auditar-enlaces.py` y `auditar-grafo-es.py` dan resultados idénticos a `main`:
  - 115 enlaces a `/en/argentine-gauchos/`;
  - 3 páginas fuera del índice.

  Es la incidencia previa del check «Validar portal Astro», que sigue en rojo por eso. No hay errores nuevos.
- Playwright a 320, 390 y 1440 px sobre las 22 rutas italianas, `/` y `/en/`: sin desborde, sin imágenes rotas y sin errores de JS. El buscador funciona.
- Cloudflare Pages:
  - el deploy de la vista previa salió bien;
  - URL de la rama: https://feat-mf-italiano-001-2026110.martinfierro.pages.dev/it/
  - URL del commit: https://840f5073.martinfierro.pages.dev/it/

  No pude abrirlas desde aquí porque el `robots.txt` del sitio bloquea los lectores automáticos, y eso es intencional.

## 6. Commits

- 32c1d44: datos de Testena.
- 76acfa0: hreflang, selector de idioma y validación.
- 5895858: páginas `/it/`.
- Un commit más con este informe en `documentacion/MF-ITALIANO-001.md`.

## 7. Pendientes reales

1. **Cotejar el texto italiano contra el facsímil**, canto por canto. Prioridad: el canto XIII de la Ida y los cantos con diferencia de más de 6 versos: Ida VI, XI, XII y XIII; Vuelta XXV y XXX. Después, poner `TESTO_COLLAZIONATO = true` (o hacerlo por canto) para indexarlos y declararlos equivalentes de `/leer/…`.
2. Confirmar el título exacto y el año de la portada (1919 o 1920) en el facsímil.
3. La revista italiana tiene 3 artículos; la inglesa tiene 10. Se pueden sumar fortines, mujeres de la frontera, mate y vestimenta.
4. No hay versión italiana de personajes, exégesis ni temas. Las guías de estudio remiten a las inglesas.
5. Contacto, privacidad y términos siguen solo en español.
