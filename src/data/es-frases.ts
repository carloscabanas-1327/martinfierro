// Frases célebres de Martín Fierro (página /martin-fierro-frases/).
// Cada frase apunta a una estrofa del corpus: el texto se toma de obra/*/estrofas.json al compilar,
// así que nunca se copia a mano. «versos» indica qué versos de la estrofa se destacan (desde, hasta); «explicacion» es texto propio.

export type Frase = {parte:'ida'|'vuelta'; estrofa:number; versos:[number,number]; quien:string; explicacion:string};
export type GrupoFrases = {id:string; titulo:string; intro:string; frases:Frase[]};

export const gruposFrases: GrupoFrases[] = [
 {id:'consejos',titulo:'Los consejos de Martín Fierro a sus hijos',intro:'Las frases más citadas del poema están en el canto XXXII de La vuelta, cuando Fierro se despide de sus hijos y del hijo de Cruz. Se leen en escuelas, actos y casamientos.',frases:[
  {parte:'vuelta',estrofa:1160,versos:[1,2],quien:'Martín Fierro a sus hijos',explicacion:'La más famosa de todas. La unión entre hermanos es la primera ley porque, divididos, quedan a merced de «los de ajuera», los que vienen de afuera a aprovecharse. Se usa también para hablar de la unión de un pueblo.'},
  {parte:'vuelta',estrofa:1159,versos:[5,6],quien:'Martín Fierro a sus hijos',explicacion:'El hombre puede perder y recuperar casi todo, menos la vergüenza, entendida como honra y respeto por uno mismo.'},
  {parte:'vuelta',estrofa:1154,versos:[1,2],quien:'Martín Fierro a sus hijos',explicacion:'El trabajo como deber y como protección: la miseria golpea todas las puertas, pero entra en la del haragán.'},
  {parte:'vuelta',estrofa:1150,versos:[1,2],quien:'Martín Fierro a sus hijos',explicacion:'Lealtad con el amigo, sin pedirle ni esperarlo todo de él: el amigo más fiel es la propia conducta honrada.'},
  {parte:'vuelta',estrofa:1167,versos:[1,2],quien:'Martín Fierro a sus hijos',explicacion:'Fierro, que mató en peleas, pone su propia desgracia como espejo. Es uno de los momentos en que el poema revisa la violencia del protagonista.'},
  {parte:'vuelta',estrofa:1157,versos:[1,2],quien:'Martín Fierro a sus hijos',explicacion:'La astucia es la misma en todos; lo que cambia es el uso: en unos se vuelve prudencia y en otros picardía.'},
  {parte:'vuelta',estrofa:1161,versos:[1,2],quien:'Martín Fierro a sus hijos',explicacion:'Respeto por los mayores y cuidado con las compañías: a cada uno lo juzgan por la gente con la que anda.'},
  {parte:'vuelta',estrofa:1146,versos:[5,6],quien:'Martín Fierro a sus hijos',explicacion:'Más vale saber pocas cosas buenas que acumular conocimientos sin provecho.'},
 ]},
 {id:'vizcacha',titulo:'Los consejos del Viejo Vizcacha',intro:'El Viejo Vizcacha, tutor del hijo segundo de Fierro, también da consejos (canto XV de La vuelta). Son famosos por su picardía: enseñan a sobrevivir con egoísmo y desconfianza, lo contrario de los consejos de Fierro.',frases:[
  {parte:'vuelta',estrofa:757,versos:[5,6],quien:'El Viejo Vizcacha',explicacion:'La experiencia enseña más que la astucia. Es uno de los refranes del poema que más se repiten en la Argentina.'},
  {parte:'vuelta',estrofa:758,versos:[1,2],quien:'El Viejo Vizcacha',explicacion:'Consejo cínico: arrimarse al poderoso para tener amparo. Hoy se cita para criticar el acomodo y el favoritismo.'},
  {parte:'vuelta',estrofa:761,versos:[5,6],quien:'El Viejo Vizcacha',explicacion:'Quedarse en el lugar conocido: el que cambia de lugar pierde terreno. Imagen tomada de la vida del campo.'},
  {parte:'vuelta',estrofa:773,versos:[1,2],quien:'El Viejo Vizcacha',explicacion:'Andar siempre preparado para pelear: un mundo de desconfianza donde el cuchillo es parte de la vida diaria.'},
 ]},
 {id:'justicia',titulo:'Frases sobre la justicia y el gaucho',intro:'El poema nació como una denuncia de los abusos que sufría el gaucho. Estas frases resumen esa queja.',frases:[
  {parte:'vuelta',estrofa:1092,versos:[1,1],quien:'El Moreno, en la payada con Fierro',explicacion:'Fierro le pregunta qué entiende por la ley y el Moreno responde: la ley atrapa a los débiles y la rompen los poderosos, como el bicho grande rompe la tela de araña. Es la frase sobre la justicia más citada del poema, y no la dice Fierro sino su rival en la payada.'},
  {parte:'ida',estrofa:238,versos:[5,6],quien:'Martín Fierro',explicacion:'El gaucho no gana nada en la paz, es el primero en la guerra y solo cuenta en las elecciones. Una crítica directa a la política de su tiempo.'},
  {parte:'vuelta',estrofa:1182,versos:[5,6],quien:'La voz que cierra el poema',explicacion:'El programa de Hernández en dos versos: el gaucho necesita hogar, educación y derechos, no persecución.'},
  {parte:'ida',estrofa:18,versos:[3,4],quien:'Martín Fierro',explicacion:'Fierro se presenta como alguien empujado a la violencia por el maltrato. El poema después muestra que no siempre es así.'},
 ]},
 {id:'libertad',titulo:'Frases sobre el canto y la libertad',intro:'El poema empieza con un gaucho que se presenta como cantor y celebra su libertad. Son los versos que muchos argentinos saben de memoria.',frases:[
  {parte:'ida',estrofa:1,versos:[1,2],quien:'Martín Fierro',explicacion:'El comienzo del poema: el cantor que se consuela de una pena extraordinaria cantando, como el ave solitaria.'},
  {parte:'ida',estrofa:16,versos:[1,2],quien:'Martín Fierro',explicacion:'La libertad como el bien más alto del gaucho, que no hace nido donde hay tanto que sufrir.'},
  {parte:'ida',estrofa:14,versos:[1,2],quien:'Martín Fierro',explicacion:'Orgullo de ser gaucho y de hablar a su manera: la tierra le queda chica.'},
  {parte:'ida',estrofa:17,versos:[5,6],quien:'Martín Fierro',explicacion:'Una de las frases de amor y de libertad más bellas del poema: nadie le reclama nada y duerme a cielo abierto.'},
  {parte:'vuelta',estrofa:406,versos:[5,6],quien:'Martín Fierro',explicacion:'Fierro no canta solo para divertir: canta para decir lo que piensa. Así define el propio poema.'},
 ]},
 {id:'vida',titulo:'Frases sobre la vida gaucha, el mate y la amistad',intro:'Entre la queja y el consejo, el poema guarda imágenes de la vida en el campo y de la amistad con Cruz.',frases:[
  {parte:'ida',estrofa:25,versos:[3,4],quien:'Martín Fierro, recordando su vida en el pago',explicacion:'La frase del mate más conocida del poema: el gaucho tomando mate amargo («cimarrón») junto al fogón, antes del amanecer.'},
  {parte:'ida',estrofa:291,versos:[1,2],quien:'El sargento Cruz',explicacion:'Cruz consuela a Fierro: la vida trae sufrimiento y hay que mostrarse fuerte hasta el final.'},
  {parte:'vuelta',estrofa:1184,versos:[5,6],quien:'La voz que cierra el poema',explicacion:'Para mejorar las cosas hay que empezar por los de abajo, como el fuego («juego», en la grafía del poema) que calienta desde la base.'},
  {parte:'vuelta',estrofa:1191,versos:[5,6],quien:'La voz que cierra el poema, en la última estrofa',explicacion:'El final del poema: las desdichas del cantor son las de todos sus hermanos, y por eso su historia quedará en la memoria.'},
 ]},
];
