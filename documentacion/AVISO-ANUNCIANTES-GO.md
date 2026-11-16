# ORDEN DE CARLOS PARA LOS PROYECTOS DE LOS SITIOS: ANUNCIANTES Y ENLACES `/go/`

**De:** Carlos, a través del proyecto ANUNCIANTES (repositorio `carloscabanas-1327/anunciantes`)
**Para:** el proyecto de cada sitio: martinfierro.org, carlosgardel.org, francis.bio, textosdelabiblia.org, lugares.ar, archivo.ar, chihuahuas.com.ar, yorkshiremini.com.ar, bulldogfrances.com, hypoallergenicliving.com, townnamestories.com, shopandspot.com y news.mypetsfamily.com
**Fecha:** 16/11/2026. Esta orden reemplaza al "Aviso del proyecto ANUNCIANTES" anterior.

---

## 0. En pocas palabras

Desde ahora, **todos los anunciantes y enlaces de afiliados de todos los sitios se manejan en un solo lugar: el proyecto ANUNCIANTES.** Los sitios no guardan enlaces de afiliados. Solo enlazan a `/go/<slug>`, y un Worker de Cloudflare decide a dónde va cada visitante según su país.

Cada proyecto tiene que hacer tres cosas:
1. Cumplir las reglas de `/go/` (sección 2) **desde hoy**.
2. Hacer el **inventario** de los enlaces de afiliados o anunciantes que ya tiene (sección 4) y avisarle a Carlos.
3. Cambiar esos enlaces por `/go/<slug>` **solo cuando ANUNCIANTES le pase los slugs y confirme que `/go/` está activo en su dominio** (sección 5).

## 1. Qué es `/go/`

Todos los caminos que empiezan con **`/go/`** en el dominio del sitio, por ejemplo `https://carlosgardel.org/go/vuelos-buenos-aires`, **no los sirve el sitio**. Los atiende el Worker `anunciantes` mediante una ruta de Worker de Cloudflare (`dominio/go/*` y `www.dominio/go/*`), que corre antes que Pages o que el Worker del sitio.

Si no hay anunciante para el país del visitante, el Worker lo manda a una página útil del propio sitio. Nunca muestra un error.

**Dónde está activo hoy (16/11/2026):** martinfierro.org, carlosgardel.org y francis.bio. En los demás sitios todavía **no**. ANUNCIANTES lo activa sitio por sitio, con el visto bueno de Carlos, y le avisa a cada proyecto.

## 2. Reglas (valen desde hoy)

1. **No crear nada bajo `/go/`**: ni páginas, ni carpetas `go/`, ni `functions/go/`, ni reglas para `/go/` en `_redirects`, `_routes.json` o en el Worker del sitio. Tampoco tocar ni sobreescribir lo que haya bajo `/go/`.
2. **Los revisores de enlaces tienen que ignorar `/go/`.** Si el sitio tiene un script de compilación o de auditoría que marca enlaces rotos (por ejemplo `build.py`, `auditar-enlaces.py`), hay que excluir los caminos que empiezan con `/go/` **antes** de poner el primer enlace `/go/`. Si no, la compilación puede frenar. En `*.pages.dev`, en las vistas previas y en local, `/go/...` da 404, y eso es normal.
3. **No "arreglar" ni borrar** enlaces `/go/` porque parezcan rotos.
4. **No agregar enlaces de afiliados nuevos directos** (`clk.tradedoubler.com`, `awin1.com`, `amazon...?tag=`, `?ref=`, etc.). Si hace falta un enlace nuevo, se pide un slug a ANUNCIANTES a través de Carlos.
5. **No borrar todavía los enlaces de afiliados que ya existen.** Siguen funcionando hasta que se migren (sección 5).

## 3. Cómo se escribe un enlace `/go/`

```html
<a href="/go/<slug>?s=<pagina>" rel="sponsored nofollow">Texto del enlace</a>
```

- `<slug>`: nombre fijo del enlace. **Lo define ANUNCIANTES**, no el sitio.
- `?s=<pagina>`: nombre corto de la página, en minúsculas y con guiones (por ejemplo `tango-en-boedo`). Sirve para saber de qué página salió el clic. No poner datos personales.
- `rel="sponsored nofollow"` es **obligatorio**.
- El enlace o lo que lo rodea tiene que identificarse como publicidad. Conviene un componente o atajo común en el sitio para no olvidarlo.

## 4. Migración, paso 1: inventario de lo que ya existe

Cada proyecto revisa su sitio y su repositorio, y anota **todos** los enlaces de afiliados y de anunciantes que tiene hoy: enlaces de Tradedoubler, Awin, Amazon, Booking, cualquier programa con `ref`, `tag`, `aff` o similares, banners, códigos de anunciantes, y acuerdos directos con marcas.

Lo guarda en su propio repositorio, en **`docs/anunciantes-inventario.csv`** (o en la carpeta de documentación que use el repo), con estas columnas:

```
pagina,texto_o_lugar,red_o_programa,anunciante,url_destino_actual,pais_o_idioma_objetivo,tipo,notas
```

- `pagina`: URL completa de la página donde está el enlace.
- `texto_o_lugar`: el texto del enlace, o dónde está (barra lateral, pie, banner).
- `red_o_programa`: Tradedoubler, Awin, Amazon Afiliados, directo, etc.
- `anunciante`: la marca o la tienda.
- `url_destino_actual`: el enlace tal como está hoy, completo.
- `pais_o_idioma_objetivo`: para quién está pensado, si se sabe (por ejemplo `AR`, `ES`, `en`). Si no se sabe, vacío.
- `tipo`: `enlace`, `banner`, `codigo` o `script`.
- `notas`: cualquier cosa útil (por ejemplo "se repite en 40 páginas", "programa dado de baja").

Si un enlace se repite en muchas páginas, una fila con una nota alcanza. Si el sitio **no tiene** enlaces de afiliados, se crea el archivo con solo la fila de títulos y la nota "sin enlaces de afiliados".

**No hace falta cambiar nada del sitio para el inventario.** Al terminar, el proyecto le avisa a Carlos: "inventario listo en `<ruta>`". Si además conoce datos de las cuentas (ID de publisher, programas aprobados, mercados), los anota en `notas`, **nunca contraseñas ni claves**.

## 5. Migración, paso 2: cambio a `/go/` (más adelante)

1. ANUNCIANTES lee el inventario, carga cada anunciante en sus tablas y le asigna a cada enlace un **slug fijo**.
2. ANUNCIANTES deja en el repositorio del sitio el archivo **`docs/anunciantes-slugs.csv`**, con columnas `url_destino_actual,slug,enlace_nuevo`. También le confirma a Carlos que `/go/` está activo en ese dominio y que el Worker ya responde con esos slugs.
3. Recién entonces el proyecto del sitio, con el visto bueno de Carlos:
   - confirma que su revisor de enlaces ignora `/go/` (regla 2);
   - reemplaza cada enlace viejo por su `enlace_nuevo`, con `rel="sponsored nofollow"`;
   - le avisa a Carlos qué páginas cambió.
4. ANUNCIANTES prueba los enlaces en vivo.

Si un enlace del inventario no se puede pasar a `/go/` (por ejemplo, un script o un banner que la red exige tal cual), ANUNCIANTES lo dice y se decide con Carlos.

## 6. Lo que cada sitio va a tener que aportar (se coordina después)

1. **Página de aviso de afiliación** en cada idioma del sitio.
2. **Páginas de respaldo**: páginas útiles del propio sitio, sin afiliados, a donde va el visitante cuando no hay anunciante para su país.
3. **Aviso de cookies discreto, solo para visitantes europeos**, que recuerde la elección (decisión de Carlos del 16/11/2026). Si el visitante acepta la publicidad y la afiliación, el sitio guarda la cookie `consentimiento_afiliados=si` en su propio dominio. El Worker la lee, y sin ella el visitante europeo va a una página del sitio sin pasar por la red de afiliados.
4. Más adelante, recuadros de anunciantes por país, que se piden a `/go/_bloque/<id>`. Todavía no hace falta.

## 7. Línea de seguridad (solo si Carlos la aprueba)

Para que nunca haya un error si el Worker no corre, se propone agregar una línea al archivo `_redirects` del sitio: `/go/*  /<pagina-de-respaldo>/  302`. **No se agrega sin la aprobación de Carlos.**

## 8. Dudas

Las dudas sobre `/go/`, slugs, anunciantes o cookies las resuelve el proyecto ANUNCIANTES, a través de Carlos. Las dudas legales las decide Carlos.
