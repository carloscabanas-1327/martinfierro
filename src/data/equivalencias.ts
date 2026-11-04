// Páginas equivalentes entre idiomas, para hreflang y para el selector de idioma.
// Regla: solo se registran páginas que existen y son indexables en los tres (o dos) idiomas.
// scripts/generar-seo.mjs comprueba en el build que cada destino exista, sea indexable
// y devuelva el enlace (reciprocidad).
import {TESTO_COLLAZIONATO} from '../lib/testena';
export type Grupo = Partial<Record<'es'|'en'|'it'|'pt'|'fr', string>>;
export const hreflang = {es:'es-AR', en:'en-US', it:'it-IT', pt:'pt-BR', fr:'fr-FR'} as const;
const base: Grupo[] = [
 {es:'/', en:'/en/', it:'/it/', pt:'/pt/'},
 {es:'/leer/', en:'/en/reader/', it:'/it/lettore/', pt:'/pt/ler-o-poema/'},
 {es:'/leer/ida/', it:'/it/lettore/andata/'},
 {es:'/leer/vuelta/', it:'/it/lettore/ritorno/'},
 {es:'/jose-hernandez/', en:'/en/jose-hernandez/', it:'/it/jose-hernandez/', pt:'/pt/jose-hernandez/'},
 {es:'/estudiantes/', en:'/en/students/', it:'/it/studenti/', pt:'/pt/estudantes/'},
 {en:'/en/students/glossary/', it:'/it/studenti/glossario/', pt:'/pt/estudantes/glossario/'},
 {es:'/revista/', en:'/en/magazine/', it:'/it/rivista/', pt:'/pt/revista/'},
 {es:'/revista/dia-de-la-tradicion-10-de-noviembre/', en:'/en/magazine/day-of-tradition/', it:'/it/rivista/giorno-della-tradizione/'},
 {es:'/revista/pulperias-y-sociabilidad/', en:'/en/magazine/pulperias/', it:'/it/rivista/pulperie/'},
 {en:'/en/magazine/payadas/', it:'/it/rivista/payada/'},
 {es:'/biblioteca/', en:'/en/library/', it:'/it/biblioteca/'},
 {es:'/indice-general/', en:'/en/site-index/', it:'/it/indice/'},
 {es:'/buscar-documentos/', en:'/en/search/', it:'/it/cerca/'},
 {es:'/acerca/', en:'/en/editorial-method/', it:'/it/metodo-editoriale/'},
 {es:'/fuentes-y-derechos/', en:'/en/sources-and-rights/', it:'/it/fonti-e-diritti/', pt:'/pt/fontes-e-direitos/'},
 {en:'/en/what-is-martin-fierro/', it:'/it/che-cose-martin-fierro/'},
 {en:'/en/martin-fierro-summary/', it:'/it/le-due-parti/'},
 {es:'/revista/quienes-eran-los-gauchos/', en:'/en/what-is-a-gaucho/', it:'/it/il-gaucho/'},
 {es:'/consejos-martin-fierro/', en:'/en/martin-fierro-advice-to-his-sons/', pt:'/pt/conselhos-de-martin-fierro/'},
 {es:'/personajes/', en:'/en/characters/', pt:'/pt/personagens/'},
 {en:'/en/magazine/yerba-mate/', pt:'/pt/revista/chimarrao/'},
 ...Array.from({length:13},(_,i)=>({en:`/en/students/canto-${i+1}/`, pt:`/pt/estudantes/ida/${i+1}/`})),
 ...Array.from({length:33},(_,i)=>({en:`/en/students/vuelta-canto-${i+1}/`, pt:`/pt/estudantes/volta/${i+1}/`})),
];
const canti: Grupo[] = TESTO_COLLAZIONATO ? [
 ...Array.from({length:13},(_,i)=>({es:`/leer/ida/${i+1}/`, it:`/it/lettore/andata/${i+1}/`})),
 ...Array.from({length:33},(_,i)=>({es:`/leer/vuelta/${i+1}/`, it:`/it/lettore/ritorno/${i+1}/`}))
] : [];
export const gruppi: Grupo[] = [...base, ...canti];
export function equivalenti(path:string): Grupo | undefined {
 return gruppi.find(g=>Object.values(g).includes(path));
}
