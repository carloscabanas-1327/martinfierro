import ida from '../../obra/ida/estrofas.json';
import vuelta from '../../obra/vuelta/estrofas.json';
import cantosIda from '../../obra/ida/cantos.json';
import cantosVuelta from '../../obra/vuelta/cantos.json';
export type Verso = {id:string; linea:number; texto:string};
export type Estrofa = {numero:number; canto:number; id:string; versos:Verso[]};
export type Canto = {numero:number; titulo:string};
export type Parte = 'ida' | 'vuelta';
export const partes: Record<Parte,{nombre:string;descripcion:string;anio:number;estrofas:Estrofa[];cantos:Canto[]}> = {
 ida:{nombre:'El gaucho Martín Fierro',descripcion:'La ida',anio:1872,estrofas:ida as Estrofa[],cantos:cantosIda as Canto[]},
 vuelta:{nombre:'La vuelta de Martín Fierro',descripcion:'La vuelta',anio:1879,estrofas:vuelta as Estrofa[],cantos:cantosVuelta as Canto[]}
};
export const numeroDeVersos=(parte:Parte)=>partes[parte].estrofas.reduce((n,e)=>n+e.versos.length,0);
export const estrofasDeCanto=(parte:Parte,canto:number)=>partes[parte].estrofas.filter(e=>e.canto===canto);
export const enlaceCanto=(parte:Parte,canto:number)=>`/leer/${parte}/${canto}/`;
export const todasLasEstrofas = (Object.keys(partes) as Parte[]).flatMap(p=>partes[p].estrofas.map(e=>({...e,parte:p})));
