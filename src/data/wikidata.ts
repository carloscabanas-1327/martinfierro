// Entidades de Wikidata para los datos estructurados (about/mentions con sameAs).
// Cada número Q se verificó en wikidata.org el 2026-11-20 (wbgetentities). Nunca se adivina un Q.
// wiki: título del artículo de Wikipedia en cada idioma, si existe.
export type Entidad={qid:string;tipo:string;nombre:string;wiki:Partial<Record<'es'|'en'|'it'|'pt'|'fr'|'de'|'ru'|'zh'|'ja',string>>};
export const entidades={
 'jose-hernandez':{"qid": "Q377623", "tipo": "Person", "nombre": "José Hernández", "wiki": {"es": "José Hernández", "en": "José Hernández (writer)", "it": "José Hernández (scrittore)", "pt": "José Hernández", "fr": "José Hernández (poète)", "de": "José Hernández (Dichter)", "ru": "Эрнандес, Хосе", "zh": "何塞·埃尔南德斯", "ja": "ホセ・エルナンデス"}},
 'el-gaucho-martin-fierro':{"qid": "Q832330", "tipo": "Book", "nombre": "El Gaucho Martín Fierro", "wiki": {"es": "El Gaucho Martín Fierro", "en": "Martín Fierro", "it": "Martín Fierro", "pt": "Martín Fierro", "fr": "Martín Fierro", "de": "Martín Fierro", "zh": "馬丁斐野樂"}},
 'la-vuelta-de-martin-fierro':{"qid": "Q5968530", "tipo": "Book", "nombre": "La vuelta de Martín Fierro", "wiki": {"es": "La vuelta de Martín Fierro"}},
 'chacra-pueyrredon':{"qid": "Q84502641", "tipo": "Museum", "nombre": "Museo Histórico José Hernández - Chacra Pueyrredón", "wiki": {"es": "Chacra Pueyrredón"}},
 'museo-jose-hernandez':{"qid": "Q21573456", "tipo": "Museum", "nombre": "Museo de Arte Popular José Hernández", "wiki": {"es": "Museo de Arte Popular José Hernández"}},
 'partido-general-san-martin':{"qid": "Q2157253", "tipo": "AdministrativeArea", "nombre": "Partido de San Martín", "wiki": {"es": "Partido de General San Martín", "en": "General San Martín Partido", "it": "Partido di General San Martín", "pt": "General San Martín (Buenos Aires)", "fr": "General San Martín (partido)", "de": "Partido General San Martín", "ru": "Хенераль-Сан-Мартин (муниципалитет)"}},
 'provincia-buenos-aires':{"qid": "Q44754", "tipo": "AdministrativeArea", "nombre": "Provincia de Buenos Aires", "wiki": {"es": "Provincia de Buenos Aires", "en": "Buenos Aires Province", "it": "Provincia di Buenos Aires", "pt": "Buenos Aires (província)", "fr": "Province de Buenos Aires", "de": "Provinz Buenos Aires", "ru": "Буэнос-Айрес (провинция)", "zh": "布宜诺斯艾利斯省", "ja": "ブエノスアイレス州"}},
 'buenos-aires':{"qid": "Q1486", "tipo": "City", "nombre": "Buenos Aires", "wiki": {"es": "Buenos Aires", "en": "Buenos Aires", "it": "Buenos Aires", "pt": "Buenos Aires", "fr": "Buenos Aires", "de": "Buenos Aires", "ru": "Буэнос-Айрес", "zh": "布宜諾斯艾利斯", "ja": "ブエノスアイレス"}},
 'belgrano':{"qid": "Q815569", "tipo": "Place", "nombre": "Belgrano", "wiki": {"es": "Belgrano (Buenos Aires)", "en": "Belgrano, Buenos Aires", "it": "Belgrano (Buenos Aires)", "pt": "Belgrano (Buenos Aires)", "fr": "Belgrano (Buenos Aires)", "de": "Belgrano (Buenos Aires)", "ru": "Бельграно (Буэнос-Айрес)", "ja": "ベルグラーノ (ブエノスアイレス)"}},
 'santana-do-livramento':{"qid": "Q917693", "tipo": "City", "nombre": "Santana do Livramento", "wiki": {"es": "Santana do Livramento", "en": "Santana do Livramento", "it": "Sant'Ana do Livramento", "pt": "Sant'Ana do Livramento", "fr": "Santana do Livramento", "de": "Santana do Livramento", "ru": "Сантана-ду-Ливраменту", "zh": "圣安娜-利弗拉门图", "ja": "サンタナ・ド・リヴラメント"}},
 'rio-grande-do-sul':{"qid": "Q40030", "tipo": "AdministrativeArea", "nombre": "Río Grande del Sur", "wiki": {"es": "Río Grande del Sur", "en": "Rio Grande do Sul", "it": "Rio Grande do Sul", "pt": "Rio Grande do Sul", "fr": "Rio Grande do Sul", "de": "Rio Grande do Sul", "ru": "Риу-Гранди-ду-Сул", "zh": "南里奥格兰德州", "ja": "リオグランデ・ド・スル州"}},
 'batalla-naembe':{"qid": "Q5723277", "tipo": "Event", "nombre": "Batalla de Ñaembé", "wiki": {"es": "Batalla de Ñaembé"}},
 'gaucho':{"qid": "Q210377", "tipo": "Thing", "nombre": "gaucho", "wiki": {"es": "Gaucho", "en": "Gaucho", "it": "Gaucho", "pt": "Gaúcho", "fr": "Gaucho", "de": "Gaucho", "ru": "Гаучо", "zh": "高喬人", "ja": "ガウチョ"}},
 'rio-de-la-plata':{"qid": "Q35827", "tipo": "Place", "nombre": "Río de la Plata", "wiki": {"es": "Río de la Plata", "en": "Río de la Plata", "it": "Río de la Plata", "pt": "Rio da Prata", "fr": "Río de la Plata", "de": "Río de la Plata", "ru": "Ла-Плата (эстуарий)", "zh": "拉普拉塔河", "ja": "ラプラタ川"}},
 'pampa':{"qid": "Q184382", "tipo": "Place", "nombre": "pampa", "wiki": {"es": "Pampa (geobotánica)", "en": "Pampas", "it": "Pampa", "pt": "Pampa", "fr": "Pampa", "de": "Pampa", "ru": "Пампа", "zh": "彭巴草原", "ja": "パンパ"}},
 'argentina':{"qid": "Q414", "tipo": "Country", "nombre": "Argentina", "wiki": {"es": "Argentina", "en": "Argentina", "it": "Argentina", "pt": "Argentina", "fr": "Argentine", "de": "Argentinien", "ru": "Аргентина", "zh": "阿根廷", "ja": "アルゼンチン"}},
 'uruguay':{"qid": "Q77", "tipo": "Country", "nombre": "Uruguay", "wiki": {"es": "Uruguay", "en": "Uruguay", "it": "Uruguay", "pt": "Uruguai", "fr": "Uruguay", "de": "Uruguay", "ru": "Уругвай", "zh": "乌拉圭", "ja": "ウルグアイ"}},
 'brasil':{"qid": "Q155", "tipo": "Country", "nombre": "Brasil", "wiki": {"es": "Brasil", "en": "Brazil", "it": "Brasile", "pt": "Brasil", "fr": "Brésil", "de": "Brasilien", "ru": "Бразилия", "zh": "巴西", "ja": "ブラジル"}},
 'payada':{"qid": "Q5955539", "tipo": "Thing", "nombre": "Payada", "wiki": {"es": "Payada", "en": "Payada", "pt": "Pajada"}},
} satisfies Record<string,Entidad>;
export type ClaveEntidad=keyof typeof entidades;
// Nombres que se escriben distinto de como titula Wikipedia (orden invertido, chino tradicional).
const nombresPropios:Partial<Record<ClaveEntidad,Partial<Record<string,string>>>>={
 'jose-hernandez':{ru:'Хосе Эрнандес'},
 'el-gaucho-martin-fierro':{zh:'马丁·菲耶罗'},
 'buenos-aires':{zh:'布宜诺斯艾利斯'},
 'provincia-buenos-aires':{ru:'Провинция Буэнос-Айрес'},
 'gaucho':{zh:'高乔人'},
 'payada':{ja:'パジャーダ'},
};
// Nodo schema.org de una entidad, con el nombre del artículo de Wikipedia del idioma de la página.
export function nodoEntidad(clave:ClaveEntidad,idioma:string){
 const e:Entidad=entidades[clave];
 const l=idioma.slice(0,2) as keyof Entidad['wiki'];
 const titulo=e.wiki[l];
 const nombre=nombresPropios[clave]?.[l]??(titulo?titulo.replace(/\s*\([^)]*\)$/,''):e.nombre);
 const sameAs=[`https://www.wikidata.org/wiki/${e.qid}`,...(titulo?[`https://${l}.wikipedia.org/wiki/${encodeURIComponent(titulo.replace(/ /g,'_'))}`]:[])];
 return {'@type':e.tipo,name:nombre,sameAs};
}
