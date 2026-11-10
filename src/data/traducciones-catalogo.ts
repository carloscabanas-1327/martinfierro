/**
 * Catálogo compartido de traducciones con registro bibliográfico localizado.
 * Fuente común para todas las rutas de idioma: no se duplican fichas por página.
 * Relevamiento del 2 de noviembre de 2026 (HathiTrust hathifile, Internet Archive,
 * Wikisource, Europeana, Gallica). Un registro localizado NO acredita dominio público
 * ni autoriza reproducir el texto: `derechos` resume la situación conocida.
 */
export type EstadoDerechos = 'protegida' | 'verificar' | 'libre-ar-verificar-otras';
export type RegistroTraduccion = {
  idioma: string;          // código ISO 639 (it, en, fr, de, pt, ca, cs, ro, lad)
  traductor: string;
  anio: string;            // año de la edición registrada
  titulo: string;          // título tal como figura en el registro
  alcance: string;         // qué partes del poema incluye, si se sabe
  derechos: EstadoDerechos;
  notaDerechos: string;
  fuentes: { url: string; texto: string }[];
};
const hathi = (id: string) => `https://babel.hathitrust.org/cgi/pt?id=${encodeURIComponent(id)}`;

export const catalogoTraducciones: RegistroTraduccion[] = [
  { idioma: 'it', traductor: 'Folco Testena (Comunardo Braccialarghe)', anio: '1919 (ed. registrada 1930)', titulo: 'Martin Fierro; versione italiana di Folco Testena', alcance: 'Por verificar',
    derechos: 'libre-ar-verificar-otras', notaDerechos: 'Traductor fallecido en 1951: dominio público en Argentina e Italia desde 2022. HathiTrust la clasifica como dominio público solo en EE. UU. (pdus).',
    fuentes: [{ url: hathi('uc1.$b65884'), texto: 'HathiTrust uc1.$b65884' }, { url: hathi('txu.059173024486466'), texto: 'HathiTrust txu.059173024486466' }] },
  { idioma: 'en', traductor: 'Walter Owen', anio: '1935; ed. EE. UU. 1936', titulo: 'The gaucho Martin Fierro; adapted from the Spanish and rendered into English verse by Walter Owen', alcance: 'Ver auditoría del facsímil 1935',
    derechos: 'libre-ar-verificar-otras', notaDerechos: 'Traductor fallecido en 1953: dominio público en Argentina desde 2024. Reino Unido y EE. UU. pendientes de verificación; no distribuir íntegra.',
    fuentes: [{ url: 'https://commons.wikimedia.org/wiki/File:The_Gaucho_Martin_Fierro_-_Jose_Hernandez.pdf', texto: 'Wikimedia Commons (facsímil)' }, { url: hathi('txu.059173028056979'), texto: 'HathiTrust (1936, sin vista)' }] },
  { idioma: 'en', traductor: 'Henry Alfred Holmes', anio: '1923', titulo: 'Martín Fierro; an epic of the Argentine', alcance: 'Estudio con pasajes traducidos, no el poema íntegro',
    derechos: 'verificar', notaDerechos: 'HathiTrust: dominio público (pd).', fuentes: [{ url: hathi('mdp.39015004815257'), texto: 'HathiTrust, vista completa' }] },
  { idioma: 'en', traductor: 'Henry Alfred Holmes', anio: '1948', titulo: 'Martín Fierro, the Argentine gaucho epic (prosa)', alcance: 'Ambas partes, en prosa',
    derechos: 'protegida', notaDerechos: 'HathiTrust: con derechos (ic).', fuentes: [{ url: hathi('mdp.39015008294954'), texto: 'HathiTrust (sin vista)' }] },
  { idioma: 'fr', traductor: 'Paul Verdevoye (1912–2001)', anio: '1955', titulo: 'Martin Fierro. Traduction, introd. et notes de Paul Verdevoye', alcance: 'Por verificar',
    derechos: 'protegida', notaDerechos: 'Protegida hasta 2071.', fuentes: [{ url: hathi('txu.059173027985702'), texto: 'HathiTrust (sin vista)' }] },
  { idioma: 'de', traductor: 'Adolf Borstendoerfer', anio: '1945', titulo: 'Martin Fierro. Ins Deutsche übertragen von Adolf Borstendoerfer', alcance: 'Por verificar',
    derechos: 'verificar', notaDerechos: 'Fecha de muerte del traductor sin confirmar; sin copia digital pública localizada.', fuentes: [] },
  { idioma: 'de', traductor: 'Alfredo Bauer; comentario de Gerhard Giesa', anio: '1995', titulo: 'Der gaucho Martín Fierro', alcance: 'Por verificar',
    derechos: 'protegida', notaDerechos: 'Traductor fallecido en 2016.', fuentes: [{ url: hathi('mdp.39015034409857'), texto: 'HathiTrust (sin vista)' }] },
  { idioma: 'cs', traductor: 'Karel Svoboda', anio: '1953', titulo: 'Martín Fierro; překlad do češtiny Karla Svobody', alcance: 'Por verificar',
    derechos: 'protegida', notaDerechos: 'HathiTrust: con derechos (ic).', fuentes: [{ url: hathi('uiug.30112093070438'), texto: 'HathiTrust (sin vista)' }] },
  { idioma: 'it', traductor: 'Francesco F. y Giuseppe R. Crocitto Cuonzo', anio: '1972', titulo: 'Martín Fierro e Il ritorno di Martín Fierro', alcance: 'Ambas partes',
    derechos: 'protegida', notaDerechos: 'HathiTrust: con derechos (ic).', fuentes: [{ url: hathi('txu.059173027985735'), texto: 'HathiTrust (sin vista)' }] },
  { idioma: 'pt', traductor: 'J. O. Nogueira Leiria', anio: '1972', titulo: 'Martín Fierro', alcance: 'Por verificar',
    derechos: 'protegida', notaDerechos: 'HathiTrust: con derechos (ic).', fuentes: [{ url: hathi('txu.059173025120878'), texto: 'HathiTrust (sin vista)' }] },
  { idioma: 'ro', traductor: 'Sin dato del traductor', anio: '1972', titulo: 'Martin Fierro (Biblioteca pentru toți, 715)', alcance: 'Por verificar',
    derechos: 'protegida', notaDerechos: 'Copia subida por un usuario a Internet Archive; la traducción probablemente tiene derechos.', fuentes: [{ url: 'https://archive.org/details/715-jose-hernandez-martin-fierro-1972', texto: 'Internet Archive' }] },
  { idioma: 'ca', traductor: 'Enric Martí i Muntaner', anio: '1977', titulo: 'Martín Fierro; traducció catalana d\'Enric Martí i Muntaner; pròleg de J. Torrendell; estampes de Lluís Macaya', alcance: 'Por verificar',
    derechos: 'protegida', notaDerechos: 'HathiTrust: con derechos (ic).', fuentes: [{ url: hathi('txu.059173027985757'), texto: 'HathiTrust (sin vista)' }] },
  { idioma: 'lad', traductor: 'Carlos Levy', anio: '2005', titulo: 'El gaucho Martín Fierro, tresladado al djudeo-espanyol', alcance: 'Por verificar',
    derechos: 'protegida', notaDerechos: 'HathiTrust: con derechos (ic).', fuentes: [{ url: hathi('txu.059173016920556'), texto: 'HathiTrust (sin vista)' }] },
];

export const traduccionesDe = (codigo: string) => catalogoTraducciones.filter((t) => t.idioma === codigo);
