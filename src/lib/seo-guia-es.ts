// Presentación SEO de las guías. El H1 conserva el título editorial completo.
export function seoTitleGuia(titulo:string,parte:'ida'|'vuelta',canto:number){
 const tema=titulo.replace(/\s*(?:\| Canto \d+|— La (?:ida|vuelta), canto \d+)\s*$/i,'').trim();
 const encabezado=`Canto ${canto} (${parte==='ida'?'Ida':'Vuelta'}): `;
 let corto=tema;
 const conMarca=(valor:string)=>valor.toLocaleLowerCase('es').includes('martín fierro')?'':' | Martín Fierro';
 while(encabezado.length+corto.length+conMarca(corto).length>60&&corto.includes(' ')){
  corto=corto.slice(0,corto.lastIndexOf(' ')).trim();
 }
 return encabezado+corto;
}
export function descriptionGuia(tema:string,obra:string,canto:number,hechos:string){
 const inicio=`Canto ${canto} de ${obra}: `;
 const frase=hechos.replace(/\s+/g,' ').trim();
 const cierre=' Leé el análisis, los versos originales y las preguntas para estudiantes.';
 let base=inicio+frase;
 const max=155-cierre.length;
 if(base.length>max)base=base.slice(0,max+1).replace(/\s+\S*$/,'').replace(/[,:;.]$/,'').trim()+'.';
 let texto=base+cierre;
 if(texto.length<140)texto+=' Descubrí el contexto literario.';
 return texto.slice(0,155);
}
