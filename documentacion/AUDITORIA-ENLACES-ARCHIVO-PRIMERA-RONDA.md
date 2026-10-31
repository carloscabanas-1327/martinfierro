# Auditoría de enlaces del Archivo histórico — primera ronda

Fecha: 31 de octubre de 2026. Procedimiento: consulta web GET de páginas institucionales y acceso a imagen. No equivale a un ensayo de iframe desde navegador real.

| Recurso | URL | Veredicto |
|---|---|---|
| Libreta manuscrita (noticia de museo) | https://www.argentina.gob.ar/noticias/maraton-de-lectura-del-martin-fierro-en-el-museo-historico-nacional | Página institucional accesible. La existencia del enlace no acredita que la miniatura externa permanezca estable. |
| Carta a Carolina 1865 | https://repositorio.bpm.parquedelconocimiento.com/handle/bpm/386 | Ficha institucional accesible. Confirma autor, fecha 1865 y origen convenio SADE/Biblioteca Pública de las Misiones. PDF y visor en navegador: comprobación pendiente. |
| Facsímil de 1872 | https://commons.wikimedia.org/wiki/File:El_gaucho_Martin_Fierro_-_Jose_Hernandez.pdf | Ficha Wikimedia Commons accesible; informa PDF de 84 páginas. |
| Portada primera edición 1879 | https://upload.wikimedia.org/wikipedia/commons/5/53/La_vuelta_de_Mart%C3%ADn_Fierro_cover_-_1879.jpg | Imagen accesible; el ejemplar lleva la leyenda 'primera edición adornada con diez láminas'. |
| Catálogo Museo de Arte Popular José Hernández | https://buenosaires.gob.ar/gcaba_historico/publicaciones-0 | Página accesible; es un listado de publicaciones, NO el documento exacto de 1882. |
| Colección Bartolomé Ronco | https://www.bn.gov.ar/resources/conferences/pdfs/parada-rodriguez-martinfierro.pdf | PDF académico disponible; corresponde a un estudio de la colección y NO a un manuscrito original. |
| Biblioteca del Congreso: edición crítica | https://bcn.gob.ar/literatura-y-narrativa/publicacion-martin-fierro | Página editorial y descarga accesibles. El sitio menciona años '1978/1979' en su texto de presentación: verificar contra los propios facsímiles antes de decidir qué edición se reprodujo. |

## Observaciones editoriales

- El archivo mezcla correctamente fuentes primarias, fichas de catálogo, imágenes de originales y estudios académicos; debe etiquetarlos explícitamente en cada ficha.
- Un enlace a una página institucional no demuestra por sí solo la estabilidad de la imagen remota usada como miniatura.
- No se ha probado desde navegadores reales que el PDF de 1865 permita iframe; la ficha de repositorio sí abrió.
- No se han comprobado de forma exhaustiva TODOS los enlaces de TODAS las páginas del sitio. ARCH-03 **permanece abierto** para validación HTTP desde GitHub Actions y prueba visual de iframe.
- Recomendación: al publicar documentos nuevos, elegir un identificador estable y preservar el nombre de la institución custodia.

