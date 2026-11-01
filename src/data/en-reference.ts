// Shared discovery registry for the English edition. Keep routes canonical and real.
// The Spanish poem is a source destination, NOT an English translation.
export type ReferenceItem={title:string;url:string;description:string;kind:string;lang:'en'|'es'};
export const englishSections:ReferenceItem[]=[
  {
    "title": "Study Guides",
    "url": "/en/students/",
    "description": "Canto-by-canto lessons, original Spanish excerpts and discussion questions",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Characters",
    "url": "/en/characters/",
    "description": "Eleven characters, their roles and original-canto references",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Literary Analysis",
    "url": "/en/exegesis/",
    "description": "Close reading, narrative voices and critical interpretation",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Gaucho Culture",
    "url": "/en/argentine-gauchos/",
    "description": "History, traditions and the people of the pampas",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "José Hernández",
    "url": "/en/jose-hernandez/",
    "description": "The writer's life, journalism and political context",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Cultural Magazine",
    "url": "/en/magazine/",
    "description": "Articles on rural life, the frontier, clothing and song",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Historical Archive",
    "url": "/en/archive/",
    "description": "Early editions, documents and manuscripts",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Reference Library",
    "url": "/en/library/",
    "description": "Literary essays and English reference material",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Glossary",
    "url": "/en/library/gaucho-glossary/",
    "description": "Gaucho vocabulary explained in English",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "Translation Studies",
    "url": "/en/martin-fierro-english-translation/",
    "description": "English translation history and rights-conscious resources",
    "kind": "section",
    "lang": "en"
  },
  {
    "title": "The Original Poem (Spanish)",
    "url": "/leer/",
    "description": "Complete original Spanish text; 46 cantos, 7,210 verse records",
    "kind": "section",
    "lang": "es"
  }
];
export const englishArticles:ReferenceItem[]=[
  {title:"Six English Reading Themes",url:"/en/themes/",description:"Gaucho life, frontier, justice, loyalty, family and advice",kind:"theme index",lang:"en"},
  {title:"Critical Library: Writers and Reception",url:"/en/library/critical-library/",description:"Hidalgo, Ascasubi, Mansilla, Lugones, Martínez Estrada and Borges",kind:"critical library",lang:"en"},
  ...[{slug:'gaucho-life',name:'Gaucho Life'},{slug:'the-frontier',name:'The Frontier'},{slug:'justice-and-authority',name:'Justice and Authority'},{slug:'friendship-and-loyalty',name:'Friendship and Loyalty'},{slug:'family-and-return',name:'Family and Return'},{slug:'advice-and-wisdom',name:'Advice and Wisdom'}].map(t=>({title:t.name,url:`/en/themes/${t.slug}/`,description:'English thematic reading with source-based passages and questions',kind:'reading theme',lang:'en' as const})),
  {title:"English Literary Exegesis",url:"/en/exegesis/",description:"Close reading of original Spanish stanzas and literary voices",kind:"critical analysis",lang:"en"},
  {title:"La vuelta: 33 Critical Canto Readings",url:"/en/exegesis/la-vuelta/",description:"Thirty-three English exegesis entries organized in four narrative movements",kind:"critical analysis",lang:"en"},
  {
    "title": "Introduction",
    "url": "/en/what-is-martin-fierro/",
    "description": "what is martin fierro history background meaning",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Story Summary",
    "url": "/en/martin-fierro-summary/",
    "description": "plot summary two parts 1872 1879",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Advice to His Sons",
    "url": "/en/martin-fierro-advice-to-his-sons/",
    "description": "sons advice thirty two virtues work",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Argentina's National Poem",
    "url": "/en/argentina-national-poem/",
    "description": "national poem Argentina identity",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Gaucho Pants Origin",
    "url": "/en/gaucho-pants-origin/",
    "description": "bombachas clothing history",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Argentine Literature",
    "url": "/en/library/argentine-literature/",
    "description": "literary tradition",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Brothers Stay United",
    "url": "/en/library/brothers-stay-united/",
    "description": "brotherhood advice",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "A Father as a Friend",
    "url": "/en/library/father-as-a-friend/",
    "description": "father son advice",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Learning From Mistakes",
    "url": "/en/library/learning-from-mistakes/",
    "description": "ethics mistakes",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Old Vizcacha vs. Martín Fierro",
    "url": "/en/library/old-vizcacha-vs-martin-fierro/",
    "description": "contrasting advice ethics",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Themes and Analysis",
    "url": "/en/library/themes-and-analysis/",
    "description": "literary themes",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Day of Tradition",
    "url": "/en/magazine/day-of-tradition/",
    "description": "holiday cultural history",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Frontier Forts",
    "url": "/en/magazine/frontier-forts/",
    "description": "fortin military frontier",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Gaucho Clothing",
    "url": "/en/magazine/gaucho-clothing/",
    "description": "poncho chiripa clothing",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Indigenous Peoples and the Frontier",
    "url": "/en/magazine/indigenous-peoples-frontier/",
    "description": "Indigenous history narrative",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Payadas",
    "url": "/en/magazine/payadas/",
    "description": "improvised poetic duel music",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Pulperías",
    "url": "/en/magazine/pulperias/",
    "description": "rural store social history",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Rural Traditions",
    "url": "/en/magazine/rural-traditions/",
    "description": "gaucho rural customs",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Women of the Frontier",
    "url": "/en/magazine/women-of-the-frontier/",
    "description": "women frontier history",
    "kind": "article",
    "lang": "en"
  },
  {
    "title": "Yerba Mate",
    "url": "/en/magazine/yerba-mate/",
    "description": "mate bombilla drink",
    "kind": "article",
    "lang": "en"
  }
];
export const cantoGuides:ReferenceItem[]=[
 ...Array.from({length:13},(_,i)=>({title:`Part One — Canto ${i+1}`,url:`/en/students/canto-${i+1}/`,description:`English reading guide for El gaucho Martín Fierro, canto ${i+1}; plot, characters, authentic Spanish excerpts and questions`,kind:"study guide",lang:"en" as const})),
 ...Array.from({length:33},(_,i)=>({title:`Part Two — Canto ${i+1}`,url:`/en/students/vuelta-canto-${i+1}/`,description:`English reading guide for La vuelta de Martín Fierro, canto ${i+1}; plot, characters, authentic Spanish excerpts and questions`,kind:"study guide",lang:"en" as const}))
];
export const englishReference:ReferenceItem[]=[...englishSections,...englishArticles,...cantoGuides];
export type EditorialPair={subject:string;spanish:string;english:string;relationship:'equivalent'|'related'};
export const editorialPairs:EditorialPair[]=[
  {
    "subject": "Home",
    "spanish": "/",
    "english": "/en/",
    "relationship": "equivalent"
  },
  {
    "subject": "José Hernández",
    "spanish": "/jose-hernandez/",
    "english": "/en/jose-hernandez/",
    "relationship": "related"
  },
  {
    "subject": "Characters",
    "spanish": "/personajes/",
    "english": "/en/characters/",
    "relationship": "related"
  },
  {
    "subject": "Gaucho Culture",
    "spanish": "/cultura-gauchesca/",
    "english": "/en/argentine-gauchos/",
    "relationship": "related"
  },
  {
    "subject": "Cultural Magazine",
    "spanish": "/revista/",
    "english": "/en/magazine/",
    "relationship": "related"
  },
  {
    "subject": "Historical Archive",
    "spanish": "/archivo/",
    "english": "/en/archive/",
    "relationship": "related"
  },
  {
    "subject": "Library",
    "spanish": "/biblioteca-critica/",
    "english": "/en/library/",
    "relationship": "related"
  },
  {
    "subject": "Advice to His Sons",
    "spanish": "/consejos-martin-fierro/",
    "english": "/en/martin-fierro-advice-to-his-sons/",
    "relationship": "related"
  },
  {
    "subject": "Translation Resources",
    "spanish": "/traducciones/",
    "english": "/en/martin-fierro-english-translation/",
    "relationship": "related"
  }
];
