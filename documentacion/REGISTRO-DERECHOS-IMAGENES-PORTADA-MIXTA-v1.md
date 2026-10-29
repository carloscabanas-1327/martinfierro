# Registro de arte visual — Portada mixta v1

Fecha: 2026-10-29. Estado: propuesta de diseño, **no publicada en producción**.

## `public/media/pampa-gaucho-editorial.svg`
- **Título:** La pampa y el gaucho (composición de portada).
- **Autoría:** ilustración vectorial original producida expresamente para el proyecto MARTINFIERRO.ORG mediante código SVG redactado en esta implementación. No deriva de reproducción digital de un cuadro de tercero.
- **Tipo:** recreación gráfica contemporánea y simbólica, no testimonio histórico.
- **Fuente:** archivo maestro SVG ubicado en el mismo repositorio.
- **Derechos:** material de nueva creación para esta maqueta. La titularidad formal y condiciones de reutilización pública deben asentarse antes de conceder una licencia abierta a terceros.
- **Uso previsto:** hero de portada web de MARTINFIERRO.ORG; no se afirma que represente un personaje o episodio concreto con fidelidad histórica.
- **Texto alternativo:** «Ilustración editorial original de un gaucho a caballo, con horizonte de la pampa y sol dorado».
- **Crédito visible:** «La pampa · Ilustración editorial original del proyecto, no documento histórico».

## Arte secundario
Las seis bandas de color y símbolos temáticos son formas CSS originales (`topic-art`) sin imágenes externas, vinculadas a seis temas ya presentes en el índice de lectura.

## Exclusiones expresas
No se incorporan obras de Florencio Molina Campos ni imágenes externas de procedencia o licencia no documentada. Ninguna imagen obtenida mediante búsqueda visual o de terceros se añadió al sitio.

## Revisión antes de publicar
- Verificar en Cloudflare preview que el SVG se renderiza en PC y móviles.
- Revisar contraste, orden de foco, tamaño del texto y accesibilidad.
- Comprobar que `/leer/`, `/buscar/`, `/temas/` y `/acerca/` siguen disponibles.
- Obtener aprobación humana de la portada de producción según directivas del proyecto.

## Viñetas editoriales originales añadidas
Se incorporan los siguientes archivos vectoriales SVG de diseño nuevo, creados expresamente para esta portada mediante instrucciones gráficas y formas geométricas, sin copiar pinturas o fotografías ajenas:
- `public/media/tema-vida-gaucha.svg`
- `public/media/tema-frontera.svg`
- `public/media/tema-justicia-y-autoridad.svg`
- `public/media/tema-amistad-y-lealtad.svg`
- `public/media/tema-familia-y-regreso.svg`
- `public/media/tema-consejos-y-sabiduria.svg`

Las seis imágenes son interpretaciones editoriales contemporáneas y no fuentes históricas. Su atributo ALT es vacío porque ilustran tarjetas cuyo texto ya identifica inequívocamente el tema; se evita duplicar la descripción para lectores de pantalla.

## Monetización futura sin bloques vacíos
`src/data/monetizacion.ts` contiene un registro tipado, inicialmente vacío y desactivado. No instala AdSense, no inserta publicidad, no reserva espacios visuales y no recopila datos de publicidad. Ubicaciones, dimensiones y proveedores se definirán con aprobación humana posterior. Se deberá indicar contenido comercial y cumplir las normas de Google y de los programas de afiliados.
