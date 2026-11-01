// Índice documental de rutas españolas existentes. No incluye versos ni traducciones.
// Mantener únicamente rutas verificadas en src/pages y las seis rutas de temas.
import {temas} from './temas';
import {personajes} from './personajes';
import {enlacePersonaje,personajeSeo} from './personajes-seo';
export type DocumentoES={titulo:string;url:string;descripcion:string;categoria:string};
export const documentosES:DocumentoES[]=[
{titulo:'La obra completa',url:'/leer/',descripcion:'El gaucho Martín Fierro y La vuelta: los 46 cantos originales.',categoria:'Lectura'},
{titulo:'El gaucho Martín Fierro (1872)',url:'/leer/ida/',descripcion:'Primera parte del poema, trece cantos.',categoria:'Lectura'},
{titulo:'La vuelta de Martín Fierro (1879)',url:'/leer/vuelta/',descripcion:'Segunda parte del poema, treinta y tres cantos.',categoria:'Lectura'},
{titulo:'Consejos de Martín Fierro a sus hijos',url:'/consejos-martin-fierro/',descripcion:'Pasajes, contexto y lectura de los consejos.',categoria:'Lectura'},
{titulo:'José Hernández',url:'/jose-hernandez/',descripcion:'Vida, obra y contexto del autor.',categoria:'Autor'},
{titulo:'Personajes principales',url:'/personajes/',descripcion:'Personajes, vínculos y episodios de Martín Fierro.',categoria:'Personajes'},
{titulo:'Exégesis y análisis literario',url:'/exegesis/',descripcion:'Análisis e interpretación del poema.',categoria:'Análisis'},
{titulo:'Exégesis de La vuelta',url:'/exegesis/la-vuelta/',descripcion:'Estudios literarios de la segunda parte.',categoria:'Análisis'},
{titulo:'Revista cultural',url:'/revista/',descripcion:'Historia, literatura y cultura rural argentina.',categoria:'Revista'},
{titulo:'Pulperías y sociabilidad',url:'/revista/pulperias-y-sociabilidad/',descripcion:'La pulpería y los encuentros rurales.',categoria:'Revista'},
{titulo:'Vida en los fortines',url:'/revista/vida-en-los-fortines/',descripcion:'Vida cotidiana y condiciones de frontera.',categoria:'Revista'},
{titulo:'Mujeres fortineras',url:'/revista/mujeres-fortineras/',descripcion:'Experiencias femeninas en los fortines.',categoria:'Revista'},
{titulo:'Frontera y pueblos indígenas',url:'/revista/frontera-pueblos-indigenas/',descripcion:'Relaciones y conflictos históricos de frontera.',categoria:'Revista'},
{titulo:'Quiénes eran los gauchos',url:'/revista/quienes-eran-los-gauchos/',descripcion:'Historia y sociedad gauchesca.',categoria:'Revista'},
{titulo:'Día de la Tradición',url:'/revista/dia-de-la-tradicion-10-de-noviembre/',descripcion:'José Hernández y la conmemoración cultural.',categoria:'Revista'},
{titulo:'Cultura gauchesca',url:'/cultura-gauchesca/',descripcion:'Costumbres, objetos y tradiciones del mundo rural.',categoria:'Historia'},
{titulo:'Archivo histórico',url:'/archivo/',descripcion:'Documentos, ediciones y fuentes originales.',categoria:'Investigación'},
{titulo:'Viejo Vizcacha y Martín Fierro: consejos comparados',url:'/biblioteca/vizcacha-y-fierro-consejos/',descripcion:'Análisis de seis comparaciones entre los cantos XV y XXXII de La vuelta.',categoria:'Biblioteca popular'},
{titulo:'Biblioteca popular',url:'/biblioteca/',descripcion:'Guías, estudios, personajes y recursos culturales publicados.',categoria:'Investigación'},
{titulo:'Biblioteca crítica',url:'/biblioteca-critica/',descripcion:'Investigaciones, estudios y bibliografía.',categoria:'Investigación'},
{titulo:'Índice general',url:'/indice-general/',descripcion:'Directorio de páginas, temas y cantos.',categoria:'Herramientas'},
{titulo:'Buscar en los versos',url:'/buscar/',descripcion:'Buscar palabras y frases del poema original.',categoria:'Herramientas'},
{titulo:'Traducciones y otros idiomas',url:'/traducciones/',descripcion:'Traducciones documentadas e investigación bibliográfica.',categoria:'Herramientas'},
...personajes.map(p=>({titulo:personajeSeo[p.id].titulo,url:enlacePersonaje(p.id),descripcion:p.resumen,categoria:'Personajes'})),
...temas.map(t=>({titulo:t.titulo,url:`/temas/${t.slug}/`,descripcion:t.descripcion,categoria:'Temas'}))
];
