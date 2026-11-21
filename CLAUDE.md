# Instrucciones para Claude

## Search Console todos los días (Directiva 5, orden de Carlos 19/11/2026)

Antes de cualquier otro trabajo, cada día: leé el informe de hoy en GitLab `carlos-proyectos/search-console`, archivo `martinfierro.org/ULTIMO.md` (sin clave), hacé sus "Tareas de hoy", anotá en la memoria qué corregiste y, después de publicar, sumá las URLs cambiadas a `martinfierro.org/PEDIDOS.txt` de ese repo. Paso a paso completo: [docs/SEARCH-CONSOLE-DIARIO.md](docs/SEARCH-CONSOLE-DIARIO.md). Desde la nube https://martinfierro.org/sc/ da 403: es normal, usá GitLab.


## Clave privada para leer /go/, /kp/ y /sc/ (aviso D-43, 20/11/2026)

Las direcciones internas de martinfierro.org (`/go/README`, `/go/README_FIRST`, `/go/_mapa.json`, `_cupones.json`, `_novedades.json`, `_convertir.mjs`, `_ver/<slug>`, `_prueba`, `/kp/README` y `/sc/README`) se leen con la clave del sitio en la cabecera `x-go-clave` (o `?clave=`). Sin clave, cuando ANUNCIANTES las cierre, responden "No encontrado". Los enlaces `/go/<slug>` no cambian.

**La clave NO está en este repositorio**, porque el repositorio es público: está en los archivos del proyecto, `/mnt/project-files/.anunciantes/clave-go` (una línea). `.anunciantes/` está en `.gitignore` para que nunca se suba. Nunca la copies a un archivo del repo, HTML, script, memoria ni mensaje.

```sh
curl -H "x-go-clave: $(cat /mnt/project-files/.anunciantes/clave-go)" https://martinfierro.org/go/README_FIRST
```

El paso del build con `convertirHTML` / `_convertir.mjs` no aplica a este sitio (Carlos, 20/11/2026: es solo para sitios de venta).
