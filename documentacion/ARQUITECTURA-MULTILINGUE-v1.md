# MARTINFIERRO.ORG — Arquitectura multilingüe v1 (implementación inicial)
Fecha: 2026-10-29
Estado: infraestructura inicial, no traducciones completas.

## Principios
- Corpus español original inalterable; no traducir automáticamente ni presentar adaptaciones como traducciones históricas.
- La raíz / y las rutas históricas /leer/, /temas/, /buscar/ permanecen activas. No se ejecuta una migración destructiva.
- /es/ es la entrada editorial española a la futura arquitectura por idiomas. La migración de las páginas internas a /es/ queda pendiente de un mapa de redirecciones y comprobación de indexación.
- /en/, /pt/, /fr/, /it/ y /de/ son páginas introductorias reales, pero **no** contienen traducciones del poema ni artículos completos localizados. Se marcan noindex,follow hasta que exista contenido sustancial revisado.
- No se añaden hreflang entre páginas que no son traducciones equivalentes. Se incorporarán cuando las versiones tengan contenido equivalente real.
- Cada página tiene canonical propio, lang correcto, title, description, Open Graph básico y JSON-LD WebPage/CollectionPage; no declarar Book, Person ni Article sin datos y contenido específico.
- No crear sitemaps ficticios ni anunciar una edición traducida antes de disponer de ella.
- Cada imagen futura requiere nombre descriptivo en minúsculas y guiones, alt factual, créditos y licencias. El nombre del archivo no sustituye la calidad editorial.

## Locales iniciales
es: español (base)
en: inglés (prioridad internacional)
pt: portugués
fr: francés
it: italiano
de: alemán

## Idiomas candidatos a investigar y activar cuando exista contenido
ca catalán; gl gallego; eu euskera; nl neerlandés; pl polaco; ro rumano; hu húngaro; el griego; ru ruso; sl esloveno; zh chino; ja japonés; ar árabe; ko coreano; tr turco; uk ucraniano; sv sueco; fi finés; he hebreo; hi hindi.

## Rutas objetivo, no implementadas aún
/es/leer/ida/1/
/en/read/part-one/canto-1/
/pt/ler/ida/canto-1/
Las rutas de canto traducido solo se crearán cuando haya texto, traducción y derechos verificados.

## Próximos controles obligatorios
1. Ejecutar build de Astro y revisar enlaces, robots, canonical, HTML lang, JSON-LD y metas.
2. Verificar Cloudflare Pages y dominio principal.
3. Investigar Keyword Planner por idioma y país; priorizar consultas reales.
4. Obtener traducciones con procedencia y matriz de derechos por jurisdicción.
5. Publicar contenido sustancial y original por idioma; quitar noindex al superar control editorial.
6. Implementar sitemap y hreflang recíproco para equivalencias reales.
7. Antes de migrar URLs existentes: auditar Search Console, mapear 301, probar anclas de versos y comprobar que no haya cadenas de redirección.

## Responsabilidad
Este documento registra implementación técnica inicial, no aprueba automáticamente traducciones, licencias ni decisiones de cambio de URLs existentes.
