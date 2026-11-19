# Search Console todos los días · martinfierro.org

Orden de Carlos (19/11/2026), entregada por ANUNCIANTES. Es la Directiva 5 de README_FIRST (v1.01), bajada a pasos concretos para este sitio.

## Por qué cambia

Desde la nube este proyecto no puede abrir https://martinfierro.org/sc/ (da 403) y no tiene la clave KP_CLAVE. Por eso ANUNCIANTES ahora deja **todos los días** el informe de Search Console de martinfierro.org en GitLab, ya con la lista de tareas. Se lee **sin clave**. No hace falta entrar a Google ni pedirle nada a Carlos para leerlo.

## Dónde está

- Repositorio GitLab: `carlos-proyectos/search-console` (https://gitlab.com/carlos-proyectos/search-console). Es privado: se lee con el conector de GitLab (por ejemplo `get_repository_file` con `project_id` = `carlos-proyectos/search-console`, `ref` = `main`) o con git.
- `martinfierro.org/ULTIMO.md`: el informe de hoy. Se actualiza cada mañana (hora UTC).
- `martinfierro.org/ultimo.json`: los mismos datos, para scripts.
- `martinfierro.org/historial/AAAA-MM-DD.md`: los días anteriores.
- `martinfierro.org/PEDIDOS.txt`: lo escribe este proyecto (ver paso 5).

## Paso a paso, todos los días, antes de cualquier otro trabajo

1. **Leer** `martinfierro.org/ULTIMO.md`. La fecha del título tiene que ser de hoy o de ayer. Si es más vieja, o si el archivo no existe, avisale a Carlos y seguí con lo demás.
2. **Corregir**: hacé cada punto de "Tareas de hoy", en orden. Cada tarea dice la URL, el problema y qué hacer. Los arreglos van en este repositorio como cualquier cambio, respetando las Directivas 1 y 3. Si una tarea no aplica (por ejemplo, una URL que ya se borró a propósito), anotá por qué.
3. **Mirar el rendimiento**: clics e impresiones contra los 28 días anteriores, las páginas y las búsquedas. Si una búsqueda trae impresiones y la página no tiene un H ni una sección que la conteste, pedí la lista KP y evaluá sumar un H2 (Directiva 1).
4. **Anotar** en la memoria del proyecto: la fecha, qué encontraste, qué corregiste y qué queda pendiente.
5. **Pedir la revisión de lo que cambiaste**: después de publicar, agregá a `martinfierro.org/PEDIDOS.txt` (en el repo de GitLab) las URLs nuevas o corregidas, una por línea. El informe de mañana las inspecciona y dice si Google las indexó. Para enviar un sitemap que no está en la lista, agregá una línea `sitemap: https://martinfierro.org/sitemap.xml` (con la URL real). Es el único archivo de ese repo que podés tocar.
6. **Avisarle a Carlos solo lo que únicamente él puede hacer**, con la lista concreta de URLs:
   - pedir indexación a mano de una página importante que sigue sin indexar después de corregirla (Google no lo permite por API);
   - ver el detalle de las advertencias de un sitemap (la API solo da la cantidad);
   - borrar de la lista un sitemap viejo;
   - Acciones manuales o Problemas de seguridad, o una caída fuerte de clics;
   - un informe que no llega.

## Lo que ya hace ANUNCIANTES (no lo repitas)

- Inspecciona cada día hasta 25 páginas: las de PEDIDOS.txt, la portada, las de más impresiones y una tanda nueva del sitemap (va rotando hasta pasar por todas).
- Reenvía el sitemap si Google no lo lee hace más de 7 días.
- Guarda el historial para comparar.

Si este proyecto ya tiene su propia revisión diaria que funciona (por ejemplo desde la PC de Carlos con `/sc/`), puede seguir con ella: el informe de GitLab tiene los mismos datos y sirve para cuando no hay acceso al dominio.

## Si podés abrir tu dominio

Con acceso web completo, también están https://martinfierro.org/sc/README y https://martinfierro.org/sc/este/informe (piden la clave KP_CLAVE, que se guarda como secreto y nunca en el repositorio). Desde la nube lo normal es que den 403: usá GitLab.

## Directivas

README_FIRST ya tiene la Directiva 5 v1.01 con este mismo paso a paso. Si este proyecto tenía la v1.00, copiá la nueva completa.
