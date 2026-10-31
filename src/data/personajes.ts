// Archivo de investigación editable: identidades, roles y pasajes para la página Personajes.
// Texto interpretativo: NO sustituye el poema ni los nombres originales de los cantos.
export type ReferenciaPersonaje={parte:'ida'|'vuelta';canto:number};
export type Personaje={id:string;nombre:string;tipo:string;parte:string;resumen:string;interpretacion:string;referencias:ReferenciaPersonaje[];estrofa:{parte:'ida'|'vuelta';canto:number;numero:number}};
export const personajes:Personaje[]=[
  {
    "id": "martin-fierro",
    "nombre": "Martín Fierro",
    "tipo": "Protagonista y narrador",
    "parte": "Ambas partes",
    "resumen": "Gaucho cantor que recuerda el trabajo rural y la vida de familia antes de ser llevado al servicio de frontera. Sus pérdidas y su condición de perseguido vertebran La ida; en La vuelta reconstruye su historia, escucha a otros personajes y transmite consejos.",
    "interpretacion": "Su voz denuncia atropellos, pero también narra acciones violentas y se justifica. No debe confundirse al narrador con el autor José Hernández ni convertirlo en modelo moral infalible.",
    "referencias": [
      {
        "parte": "ida",
        "canto": 1
      },
      {
        "parte": "ida",
        "canto": 3
      },
      {
        "parte": "vuelta",
        "canto": 1
      },
      {
        "parte": "vuelta",
        "canto": 32
      }
    ],
    "estrofa": {
      "parte": "ida",
      "canto": 1,
      "numero": 1
    }
  },
  {
    "id": "sargento-cruz",
    "nombre": "Sargento Cruz",
    "tipo": "Amigo y compañero de Fierro",
    "parte": "La ida y La vuelta",
    "resumen": "Integrante de la partida que persigue a Fierro, decide intervenir en su favor y acaba compartiendo su destino. Durante la experiencia en el desierto enferma y muere; su pérdida es uno de los grandes golpes de La vuelta.",
    "interpretacion": "Su paso del lado de la autoridad al de Fierro plantea una elección ética y un conflicto de lealtades, no una absolución de toda violencia.",
    "referencias": [
      {
        "parte": "ida",
        "canto": 9
      },
      {
        "parte": "ida",
        "canto": 10
      },
      {
        "parte": "ida",
        "canto": 12
      },
      {
        "parte": "vuelta",
        "canto": 6
      },
      {
        "parte": "vuelta",
        "canto": 7
      }
    ],
    "estrofa": {
      "parte": "ida",
      "canto": 9,
      "numero": 280
    }
  },
  {
    "id": "esposa-fierro",
    "nombre": "La esposa de Martín Fierro",
    "tipo": "Familia y pérdida del hogar",
    "parte": "Ambas partes",
    "resumen": "Forma parte del hogar que el protagonista pierde con el reclutamiento. En La vuelta, Fierro recibe noticias de su muerte; su vida es reconstruida principalmente desde la voz del esposo y a través de informes indirectos.",
    "interpretacion": "El poema no le ofrece una voz narrativa independiente ni un nombre propio estable. Es una figura fundamental del desarraigo y también de los silencios de la obra.",
    "referencias": [
      {
        "parte": "ida",
        "canto": 2
      },
      {
        "parte": "ida",
        "canto": 3
      },
      {
        "parte": "ida",
        "canto": 6
      },
      {
        "parte": "vuelta",
        "canto": 11
      }
    ],
    "estrofa": {
      "parte": "ida",
      "canto": 3,
      "numero": 49
    }
  },
  {
    "id": "primer-hijo",
    "nombre": "El hijo mayor de Fierro",
    "tipo": "Narrador filial",
    "parte": "La vuelta",
    "resumen": "Uno de los dos hijos reencontrados por Fierro. Su relato introduce una experiencia propia de orfandad, desprotección y trato injusto, y amplía la historia familiar más allá de lo que sabe el padre.",
    "interpretacion": "No debe confundirse su voz con la de su hermano ni atribuir sus padecimientos automáticamente a cada joven de la campaña.",
    "referencias": [
      {
        "parte": "vuelta",
        "canto": 11
      },
      {
        "parte": "vuelta",
        "canto": 12
      },
      {
        "parte": "vuelta",
        "canto": 13
      }
    ],
    "estrofa": {
      "parte": "vuelta",
      "canto": 12,
      "numero": 656
    }
  },
  {
    "id": "segundo-hijo",
    "nombre": "El hijo menor de Fierro",
    "tipo": "Narrador filial y aprendiz de Vizcacha",
    "parte": "La vuelta",
    "resumen": "Su itinerario aparece ligado al tutor don Vizcacha y a una serie de situaciones de pobreza, educación interesada, miedo y búsqueda de amparo. Sus recuerdos mezclan humor y sufrimiento.",
    "interpretacion": "Es una voz diferente de la del hijo mayor; el contraste entre consejos de Vizcacha y los del padre es clave para comprender el cierre de la obra.",
    "referencias": [
      {
        "parte": "vuelta",
        "canto": 11
      },
      {
        "parte": "vuelta",
        "canto": 14
      },
      {
        "parte": "vuelta",
        "canto": 15
      },
      {
        "parte": "vuelta",
        "canto": 19
      }
    ],
    "estrofa": {
      "parte": "vuelta",
      "canto": 14,
      "numero": 731
    }
  },
  {
    "id": "don-vizcacha",
    "nombre": "Don Vizcacha",
    "tipo": "Tutor y figura satírica",
    "parte": "La vuelta",
    "resumen": "Viejo a cuyo cuidado queda el hijo menor. Su vida precaria, sus comportamientos grotescos y sus consejos oportunistas construyen uno de los personajes más memorables de la segunda parte.",
    "interpretacion": "No todos sus refranes expresan la moral del poema: sus máximas interesadas contrastan con el ideal de fraternidad que Fierro propone después.",
    "referencias": [
      {
        "parte": "vuelta",
        "canto": 14
      },
      {
        "parte": "vuelta",
        "canto": 15
      },
      {
        "parte": "vuelta",
        "canto": 16
      },
      {
        "parte": "vuelta",
        "canto": 17
      }
    ],
    "estrofa": {
      "parte": "vuelta",
      "canto": 15,
      "numero": 758
    }
  },
  {
    "id": "picardia",
    "nombre": "Picardía",
    "tipo": "Hijo de Cruz y narrador",
    "parte": "La vuelta",
    "resumen": "Joven que llega al encuentro y cuenta su propia historia de desamparo, juego, abuso de autoridad y servicio en la frontera. Su relato suma la experiencia del hijo de Cruz al conjunto de voces.",
    "interpretacion": "El nombre está cargado de ironía: su astucia no equivale sin más a virtud, y sus experiencias deben leerse junto con sus contradicciones.",
    "referencias": [
      {
        "parte": "vuelta",
        "canto": 20
      },
      {
        "parte": "vuelta",
        "canto": 21
      },
      {
        "parte": "vuelta",
        "canto": 22
      },
      {
        "parte": "vuelta",
        "canto": 27
      },
      {
        "parte": "vuelta",
        "canto": 28
      }
    ],
    "estrofa": {
      "parte": "vuelta",
      "canto": 21,
      "numero": 856
    }
  },
  {
    "id": "la-cautiva",
    "nombre": "La cautiva",
    "tipo": "Mujer que atraviesa la violencia del cautiverio",
    "parte": "La vuelta",
    "resumen": "Mujer cuya historia introduce otro tipo de sufrimiento en el desierto. Fierro narra su situación y el enfrentamiento que permite huir. Su experiencia permanece mediada por la mirada del protagonista.",
    "interpretacion": "No dispone de nombre propio en estos pasajes. La escena exige contextualizar las representaciones de género y las descripciones de los pueblos indígenas propias de la época.",
    "referencias": [
      {
        "parte": "vuelta",
        "canto": 7
      },
      {
        "parte": "vuelta",
        "canto": 8
      },
      {
        "parte": "vuelta",
        "canto": 9
      },
      {
        "parte": "vuelta",
        "canto": 10
      }
    ],
    "estrofa": {
      "parte": "vuelta",
      "canto": 8,
      "numero": 565
    }
  },
  {
    "id": "el-moreno",
    "nombre": "El Moreno de la payada",
    "tipo": "Contrapunto poético de Fierro",
    "parte": "La vuelta",
    "resumen": "Cantor afrodescendiente que desafía a Fierro en una payada de preguntas y respuestas. Su presencia reactiva la memoria de una muerte narrada en La ida y conduce el poema hacia una confrontación mediante la palabra.",
    "interpretacion": "No es la misma persona que el hombre muerto en La ida. Su voz no debe considerarse representación exhaustiva de la población afroargentina del siglo XIX.",
    "referencias": [
      {
        "parte": "vuelta",
        "canto": 29
      },
      {
        "parte": "vuelta",
        "canto": 30
      }
    ],
    "estrofa": {
      "parte": "vuelta",
      "canto": 29,
      "numero": 1038
    }
  },
  {
    "id": "moreno-muerto",
    "nombre": "El hombre muerto en la pulpería",
    "tipo": "Víctima de un enfrentamiento con Fierro",
    "parte": "La ida; recordado en La vuelta",
    "resumen": "Hombre afrodescendiente al que Fierro mata durante una pelea en la pulpería. La narración incluye provocación, agravios racistas y violencia; su muerte reaparece en la memoria del protagonista y en el desenlace.",
    "interpretacion": "No debe confundirse con el Moreno que interviene más tarde en la payada. El protagonista procura justificar sus acciones: su versión no equivale a una absolución.",
    "referencias": [
      {
        "parte": "ida",
        "canto": 7
      },
      {
        "parte": "vuelta",
        "canto": 11
      },
      {
        "parte": "vuelta",
        "canto": 29
      }
    ],
    "estrofa": {
      "parte": "ida",
      "canto": 7,
      "numero": 194
    }
  },
  {
    "id": "juez-paz",
    "nombre": "El juez de paz",
    "tipo": "Figura de autoridad institucional",
    "parte": "Principalmente La ida",
    "resumen": "Aparece en las quejas de Fierro sobre el reclutamiento, la persecución y el ejercicio desigual de autoridad. En La vuelta, Fierro recibe noticias sobre la muerte del juez que lo perseguía.",
    "interpretacion": "Se trata de una figura de la ficción que remite a instituciones históricas concretas; no corresponde identificarlo con una persona real sin pruebas documentales.",
    "referencias": [
      {
        "parte": "ida",
        "canto": 3
      },
      {
        "parte": "ida",
        "canto": 6
      },
      {
        "parte": "vuelta",
        "canto": 11
      }
    ],
    "estrofa": {
      "parte": "ida",
      "canto": 3,
      "numero": 58
    }
  }
];
