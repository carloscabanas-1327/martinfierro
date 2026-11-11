// Slugs editoriales estables de las once fichas. Los ID antiguos permanecen como anclas.
export const personajeSeo:Record<string,{slug:string;titulo:string;imagen:string;keyword:string}>={
'martin-fierro':{slug:'martin-fierro',titulo:'Martín Fierro: quién es el protagonista, historia y análisis',imagen:'martin-fierro-personaje.webp',keyword:'martin fierro personaje'},
'sargento-cruz':{slug:'sargento-cruz',titulo:'Sargento Cruz en Martín Fierro: historia, características y análisis',imagen:'sargento-cruz-personaje.webp',keyword:'sargento cruz martin fierro'},
'esposa-fierro':{slug:'esposa-de-martin-fierro',titulo:'La esposa de Martín Fierro: historia y significado',imagen:'esposa-de-martin-fierro-personaje.webp',keyword:'esposa de martin fierro'},
'primer-hijo':{slug:'hijo-mayor-de-martin-fierro',titulo:'El hijo mayor de Martín Fierro: resumen de su historia',imagen:'hijo-mayor-de-martin-fierro-personaje.webp',keyword:'hijo mayor martin fierro'},
'segundo-hijo':{slug:'hijo-menor-de-martin-fierro',titulo:'El hijo menor de Martín Fierro y el Viejo Vizcacha',imagen:'hijo-menor-de-martin-fierro-personaje.webp',keyword:'hijo menor martin fierro'},
'don-vizcacha':{slug:'viejo-vizcacha',titulo:'El Viejo Vizcacha: quién es y qué significan sus consejos',imagen:'viejo-vizcacha-personaje.webp',keyword:'viejo vizcacha'},
'picardia':{slug:'picardia',titulo:'Picardía en Martín Fierro: el hijo de Cruz y su historia',imagen:'picardia-personaje.webp',keyword:'picardia martin fierro'},
'la-cautiva':{slug:'la-cautiva-martin-fierro',titulo:'La cautiva en Martín Fierro: historia y análisis del personaje',imagen:'la-cautiva-martin-fierro-personaje.webp',keyword:'cautiva martin fierro'},
'el-moreno':{slug:'el-moreno-de-la-payada',titulo:'El Moreno de Martín Fierro: la payada y su significado',imagen:'el-moreno-de-la-payada-personaje.webp',keyword:'moreno martin fierro'},
'moreno-muerto':{slug:'hombre-muerto-en-la-pulperia',titulo:'El hombre muerto en la pulpería de Martín Fierro',imagen:'hombre-muerto-en-la-pulperia-personaje.webp',keyword:'pelea pulperia martin fierro'},
'juez-paz':{slug:'juez-de-paz-martin-fierro',titulo:'El juez de paz en Martín Fierro: autoridad y conflicto',imagen:'juez-de-paz-martin-fierro-personaje.webp',keyword:'juez de paz martin fierro'}
};
export const enlacePersonaje=(id:string)=>`/personajes/${personajeSeo[id]?.slug??''}/`;
