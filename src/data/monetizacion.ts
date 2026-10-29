/** 
 * Registro de integración comercial futura. 
 * No activa, inserta ni reserva espacios de publicidad.
 * Las posiciones se definirán después de revisar visualmente el sitio.
 */
export type TipoPanel = 'adsense' | 'afiliacion' | 'patrocinio';
export type PanelComercial = {
 id:string;
 tipo:TipoPanel;
 ubicacion:string;
 habilitado:boolean;
 rotulo:'Publicidad'|'Enlace de afiliado'|'Contenido patrocinado';
};
export const panelesComerciales:readonly PanelComercial[] = [];
export const publicidadHabilitada = false;
/*
 Reglas para la activación futura:
 - Se requiere ubicación y autorización explícitas de la dirección humana.
 - Diferenciar los anuncios del contenido editorial.
 - Los enlaces de afiliación deben declarar su naturaleza y usar rel="sponsored nofollow".
 - No insertar paneles entre versos o estrofas ni sobre imágenes o botones de navegación.
 - Mantener dimensiones responsivas y minimizar cambios de diseño (CLS).
 - Contemplar consentimiento, privacidad y requisitos de la red publicitaria cuando correspondan.
*/
