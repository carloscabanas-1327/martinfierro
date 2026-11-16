# Aviso del proyecto ANUNCIANTES para los proyectos de los sitios

**Para:** los proyectos de martinfierro.org, carlosgardel.org y francis.bio (más adelante también townnamestories.com)
**De:** proyecto ANUNCIANTES (repositorio `carloscabanas-1327/anunciantes`)
**Fecha:** 16/11/2026 · **Estado:** todavía no está activo. Se avisará el día en que se active en cada sitio.

---

## 1. Qué es `/go/`

Todos los caminos que empiezan con **`/go/`** en el dominio del sitio, por ejemplo `https://martinfierro.org/go/vuelos-buenos-aires`, **no los sirve este sitio**. Los atiende un Worker de Cloudflare aparte, llamado `anunciantes`, mediante una ruta de Worker (`martinfierro.org/go/*` y `www.martinfierro.org/go/*`). Esa ruta se ejecuta antes que Cloudflare Pages.

El Worker decide a qué anunciante de afiliados enviar al visitante según su país, o lo envía a una página útil del propio sitio. Es el **único** lugar donde se guardan los enlaces de afiliados. Este sitio no guarda ninguno.

## 2. Qué NO hay que hacer

- **No crear nada bajo `/go/`**: ni páginas, ni carpetas `go/` en el contenido, ni `functions/go/`, ni reglas para `/go/` en `_redirects` o `_routes.json`. La única excepción es la línea de seguridad del punto 5, si Carlos la aprueba.
- **No escribir enlaces de afiliados directos** (`clk.tradedoubler.com`, `awin1.com`, `amazon.../?tag=`, etc.) en el contenido. Siempre se usa `/go/...`.
- **No tomar como error que `/go/...` dé 404 en `*.pages.dev`, en las vistas previas ni en el servidor local.** El Worker solo está en los dominios reales. Si el sitio tiene un revisor de enlaces rotos, hay que **excluir `/go/`** de esa revisión.
- **No "arreglar" ni borrar** enlaces `/go/` porque parezcan rotos.

## 3. Cómo se escribe un enlace de afiliado

```html
<a href="/go/<slug>?s=<pagina>" rel="sponsored nofollow">Texto del enlace</a>
```

- `<slug>`: el nombre fijo del enlace. Lo define el proyecto ANUNCIANTES; hay que pedirlo, no inventarlo.
- `?s=<pagina>`: un nombre corto de la página, en minúsculas y con guiones (por ejemplo `tango-en-boedo`). Sirve para saber desde qué página salió el clic.
- `rel="sponsored nofollow"` es **obligatorio** (regla R3).
- El enlace o su entorno debe identificarse como publicidad. Conviene crear un componente o atajo común en el sitio para no olvidarlo.

## 4. Lo que el sitio tiene que aportar (cuando lo coordinemos)

1. **Página de aviso de afiliación** en cada idioma del sitio (regla R3).
2. **Páginas de respaldo**: páginas útiles del propio sitio, sin afiliados, a donde va el visitante cuando no hay anunciante para su país, por ejemplo una guía de lugares de Buenos Aires.
3. **Aviso de cookies discreto, solo para visitantes europeos**, que recuerde la elección (decisión de Carlos del 16/11/2026). Si el visitante no acepta, el Worker lo manda a una página del sitio sin pasar por la red de afiliados. Más adelante se acordará el nombre de la cookie de consentimiento que el Worker va a leer.
4. **Recuadros por país (Fase 4, más adelante):** un contenedor vacío y un script común que pide el recuadro a `/go/_bloque/<id>`. Todavía no hace falta.

## 5. Línea de seguridad propuesta (necesita el visto bueno de Carlos)

Para que nunca haya un error si el Worker no corre, se propone agregar al archivo `_redirects` del sitio una sola línea:

```
/go/*  /<pagina-de-respaldo>/  302
```

Esa línea solo actúa si el Worker no atendió el pedido. No se agrega sin que Carlos lo apruebe.

## 6. Contacto

Cualquier duda sobre `/go/`, los slugs o los anunciantes se resuelve en el proyecto ANUNCIANTES, no en el sitio.

---

## 7. En este repositorio (martinfierro)

Revisado el 16/11/2026, sin cambiar nada:

- Los auditores de enlaces internos **van a marcar como rotos los enlaces `/go/...`**, porque en `dist/` no existe ninguna página `/go/`:
  - `scripts/auditar-enlaces.py`
  - `scripts/auditar-grafo-es.py`, cuyo campo `internal_links_unresolved` hace fallar el paso "Validar navegación española" de `validar-portal.yml`.

  **Antes de poner el primer enlace `/go/`**, este proyecto tiene que hacer que esos auditores ignoren los caminos que empiezan con `/go/`. Ese cambio lo hace este proyecto, no ANUNCIANTES.
- Hoy no hay nada bajo `/go/` en el sitio. Hay que mantenerlo así.
- martinfierro.org es el **sitio piloto**: la ruta `/go/*` se activará aquí primero, con una prueba en `/go/_prueba`.
