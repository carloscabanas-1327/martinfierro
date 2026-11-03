// Registro de la edición italiana: alimenta /it/indice/, /it/cerca/ y el índice general español.
// Solo rutas reales; el build falla si alguna no existe (scripts/auditar-enlaces.py).
export type VoceIt = {titolo:string; url:string; descrizione:string; sezione:string};
export const pagineIt: VoceIt[] = [
 {sezione:'Il poema', titolo:'Edizione italiana: home', url:'/it/', descrizione:'Porta d’ingresso all’edizione italiana di MARTINFIERRO.ORG.'},
 {sezione:'Il poema', titolo:'Il lettore', url:'/it/lettore/', descrizione:'Le due parti del poema nella traduzione di Folco Testena (1919).'},
 {sezione:'Il poema', titolo:'Il gaucho Martín Fierro (1872)', url:'/it/lettore/andata/', descrizione:'Prima parte: indice dei 13 canti in italiano.'},
 {sezione:'Il poema', titolo:'Il ritorno di Martín Fierro (1879)', url:'/it/lettore/ritorno/', descrizione:'Seconda parte: indice dei 33 canti in italiano.'},
 {sezione:'Conoscere l’opera', titolo:'Che cos’è Martín Fierro?', url:'/it/che-cose-martin-fierro/', descrizione:'Presentazione del poema: genere, storia, significato e come cominciare.'},
 {sezione:'Conoscere l’opera', titolo:'Le due parti del poema', url:'/it/le-due-parti/', descrizione:'La trama dell’andata e del ritorno, i personaggi e i temi.'},
 {sezione:'Conoscere l’opera', titolo:'Il contesto storico argentino', url:'/it/contesto-storico/', descrizione:'Frontiera, leva militare, Buenos Aires e province nell’Ottocento.'},
 {sezione:'Conoscere l’opera', titolo:'Chi era il gaucho?', url:'/it/il-gaucho/', descrizione:'Storia, lavoro e mito del cavaliere della pampa.'},
 {sezione:'Conoscere l’opera', titolo:'José Hernández', url:'/it/jose-hernandez/', descrizione:'Biografia documentata dell’autore (1834–1886).'},
 {sezione:'Per gli studenti', titolo:'Per gli studenti', url:'/it/studenti/', descrizione:'I 46 canti in breve, con domande e collegamenti al testo.'},
 {sezione:'Per gli studenti', titolo:'Glossario gauchesco', url:'/it/studenti/glossario/', descrizione:'Parole del poema spiegate in italiano: payada, pulpería, fortín, facón…'},
 {sezione:'Biblioteca', titolo:'Biblioteca e fonti', url:'/it/biblioteca/', descrizione:'Edizioni, traduzioni italiane, studi e archivi consultabili.'},
 {sezione:'Biblioteca', titolo:'La traduzione di Folco Testena (1919)', url:'/it/biblioteca/traduzione-testena/', descrizione:'Scheda bibliografica, diritti, trascrizione e corrispondenza dei canti.'},
 {sezione:'Rivista', titolo:'Rivista culturale', url:'/it/rivista/', descrizione:'Articoli sulla cultura rurale del Río de la Plata.'},
 {sezione:'Rivista', titolo:'Il Giorno della Tradizione (10 novembre)', url:'/it/rivista/giorno-della-tradizione/', descrizione:'Perché l’Argentina celebra la tradizione nel giorno della nascita di Hernández.'},
 {sezione:'Rivista', titolo:'La payada: poesia cantata e improvvisata', url:'/it/rivista/payada/', descrizione:'Payadores, chitarra e contrappunto, dal canto I alla sfida con il Moreno.'},
 {sezione:'Rivista', titolo:'La pulpería', url:'/it/rivista/pulperie/', descrizione:'Emporio e luogo d’incontro della campagna rioplatense.'},
 {sezione:'Strumenti', titolo:'Indice del sito', url:'/it/indice/', descrizione:'Tutte le pagine dell’edizione italiana.'},
 {sezione:'Strumenti', titolo:'Cerca', url:'/it/cerca/', descrizione:'Ricerca nelle pagine e nei 7.106 versi della traduzione.'},
 {sezione:'Il progetto', titolo:'Fonti e metodo editoriale', url:'/it/metodo-editoriale/', descrizione:'Da dove vengono i testi e come sono stati controllati.'},
 {sezione:'Il progetto', titolo:'Fonti e diritti', url:'/it/fonti-e-diritti/', descrizione:'Diritti del poema, della traduzione, delle immagini e dei materiali di terzi.'}
];
export const sezioniIt = [...new Set(pagineIt.map(p=>p.sezione))];
