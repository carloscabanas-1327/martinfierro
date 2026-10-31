# Imágenes SEO de la guía Cultura gauchesca

**Estado:** preparado para publicar. Archivos binarios WebP todavía no incorporados a GitHub. **No marcar publicado hasta comprobarlos.**

Destino exacto en repositorio: `public/media/cultura-gauchesca/`.

Listado en el orden de las 12 tarjetas:

1. `mate-tradicional-con-bombilla-rio-de-la-plata.webp`
2. `yerba-mate-hojas-secas-paquete.webp`
3. `cebar-mate-pava-agua-caliente.webp`
4. `bombilla-metalica-mate-tradicional.webp`
5. `pulperia-gaucha-campana-rioplatense.webp`
6. `fogon-gaucho-pampa-argentina.webp`
7. `payada-gauchos-guitarra-criolla.webp`
8. `poncho-chiripa-vestimenta-gaucha.webp`
9. `facon-criollo-vaina-cuero.webp`
10. `pingo-caballo-recado-apero-gaucho.webp`
11. `asado-criollo-carne-parrilla-brasas.webp`
12. `rio-de-la-plata-estuario-paisaje.webp`

## Funcionamiento del sitio

`src/pages/cultura-gauchesca/index.astro` contiene el inventario exacto, los ALT y la verificación local de cada archivo durante el build Astro. Si falta una imagen, se presenta un recuadro editorial de respaldo, sin rutas rotas. Cuando los doce WebP se carguen a la carpeta, un nuevo build Astro los mostrará automáticamente en la tarjeta correspondiente.

**Imagen principal pendiente de subida:** `public/media/fotografias-v3/mate-pava-yerba.webp`, con mate, pava y paquete de yerba mate. También tiene respaldo si el archivo no está presente.

## Créditos y límites

Las 12 imágenes son recreaciones digitales contemporáneas: no son fotografías históricas, ni prueba documental de indumentarias exactas de 1872. Las primeras diez son 1448×1086 px; Asado y Río de la Plata son recortes provisionales de baja resolución, deben sustituirse por maestros de al menos 1600 px de ancho según la Directiva Visual. Las imágenes no llevan textos superpuestos y las tarjetas incorporan la rotulación.

**Auditoría pendiente:** confirmar subida de archivos, respuesta HTTP 200 de cada imagen, tamaño, representación y recortes en móvil y escritorio. Luego actualizar este documento y el checklist.
