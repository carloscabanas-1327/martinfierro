// Traducción italiana de Folco Testena (1919): datos en fuentes/testena-1919/.
// El texto procede del OCR, cotejado con el facsímil; las correcciones viven en fuentes/testena-1919/correzioni.json.
import andata from '../../fuentes/testena-1919/andata.json';
import ritorno from '../../fuentes/testena-1919/ritorno.json';
import corrispondenza from '../../fuentes/testena-1919/corrispondenza.json';
import ficha from '../../fuentes/testena-1919/ficha.json';

export type VersoIt = {id:string; linea:number; testo:string};
export type StrofaIt = {numero:number; id:string; versi:VersoIt[]};
export type CantoIt = {numero:number; pagina_libro:number|null; immagine_facsimile:number; url_facsimile:string; estrofe:StrofaIt[]};
export type ParteIt = 'andata'|'ritorno';
type DatiParte = {parte:ParteIt; parte_originale:'ida'|'vuelta'; titolo:string; titolo_originale:string; avvertenza:string; canti:CantoIt[]};

/** Transcripción cotejada con el facsímil (noviembre de 2026): los 46 cantos se indexan. */
export const TESTO_COLLAZIONATO = true;

export const partiIt: Record<ParteIt, DatiParte & {anno:number; etichetta:string; descrizione:string}> = {
 andata:{...(andata as DatiParte), anno:1872, etichetta:'Prima parte', descrizione:'Fierro perde la casa, serve alla frontiera, diventa fuggiasco e trova in Cruz un amico.'},
 ritorno:{...(ritorno as DatiParte), anno:1879, etichetta:'Seconda parte', descrizione:'La morte di Cruz, la fuga, l’incontro con i figli, la payada con il Moreno e i consigli.'}
};
export const parteOriginale = (p:ParteIt) => partiIt[p].parte_originale;
export const urlCantoIt = (p:ParteIt, n:number) => `/it/lettore/${p}/${n}/`;
export const urlCantoOriginale = (p:ParteIt, n:number) => `/leer/${parteOriginale(p)}/${n}/`;
export const versiDiCanto = (c:CantoIt) => c.estrofe.reduce((n,e)=>n+e.versi.length,0);
export const versiDiParte = (p:ParteIt) => partiIt[p].canti.reduce((n,c)=>n+versiDiCanto(c),0);
export const corrispondenzaCanto = (p:ParteIt, n:number) => corrispondenza.canti.find(c=>c.parte===p && c.canto===n)!;
export const tuttaLaCorrispondenza = corrispondenza.canti;
export const fichaTestena = ficha;
export const VISORE_IAI = ficha.esemplare_digitalizzato.visore;
export function romano(n:number){
 const t:[number,string][]=[[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
 let s='';for(const [v,r] of t) while(n>=v){s+=r;n-=v;} return s;
}
