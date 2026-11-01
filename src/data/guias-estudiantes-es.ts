export type GuiaVerificada={titulo:string;resumen:string;analisis:string;voces:string;temas:string[];vocabulario:{voz:string;sentido:string}[];estrofas:number[];preguntas:string[]};
export const guiasVerificadas:Partial<Record<string,GuiaVerificada>>={
'ida-1':{
 titulo:'El gaucho cantor se presenta: voz, memoria y reputación',
 resumen:'Martín Fierro abre su relato mediante el canto: invoca ayuda, reivindica su habilidad como cantor y se dirige a quienes escuchan. Antes de narrar cronológicamente sus pérdidas, define la identidad desde la que contará su historia y deja entrever el conflicto entre su propia imagen y la reputación que otros le atribuyen.',
 analisis:'El canto no es un prólogo neutral: la primera persona busca ganar la atención y la confianza del público. La invocación, las referencias al instrumento y la afirmación de la propia destreza construyen una voz gauchesca literaria. El estudiante debe distinguir al personaje que canta de José Hernández, el autor, y preguntarse qué puede comprobarse de lo que el narrador dice sobre sí mismo.',
 voces:'Martín Fierro habla como narrador protagonista. Sus oyentes están presentes como destinatarios de la canción, no como narradores independientes.',
 temas:['La poesía como expresión del sufrimiento','La voz narrativa en primera persona','Identidad y fama del perseguido','Diferencia entre autor y personaje'],
 vocabulario:[{voz:'Vigüela',sentido:'Grafía popular vinculada con la vihuela, instrumento de cuerda; aparece en la apertura del poema.'},{voz:'Gaucho',sentido:'Figura rural e identidad literaria; no equivale a todos los habitantes del campo.'}],
 estrofas:[1,2,19],
 preguntas:['¿Por qué Fierro comienza cantando en lugar de explicar primero los acontecimientos?','¿Qué recursos utiliza para pedir que lo escuchen y crean su versión?','¿Qué sabemos de Fierro por sus palabras y qué todavía no podemos comprobar?','¿Por qué sería incorrecto identificar automáticamente al narrador con José Hernández?']
},
'vuelta-32':{
 titulo:'Los consejos de Martín Fierro: fraternidad, trabajo y violencia',
 resumen:'Fierro dirige enseñanzas a los jóvenes antes de la separación. Les habla de amistad, unión entre hermanos, trabajo, prudencia, respeto y responsabilidad. Sus recomendaciones deben leerse teniendo presente la vida difícil y las acciones violentas que el propio protagonista narró anteriormente.',
 analisis:'La fuerza del canto procede del contraste entre la voz de un padre que aconseja y el pasado de quien da esos consejos. La defensa de la solidaridad y la advertencia contra matar no borran los homicidios de La ida. También es útil comparar estas máximas con las enseñanzas del Viejo Vizcacha al hijo menor: ambas voces hablan desde la experiencia, pero sostienen orientaciones éticas diferentes.',
 voces:'Habla Martín Fierro como padre y consejero. Sus dos hijos y Picardía son destinatarios de la escena; el Viejo Vizcacha pertenece a otro relato y aquí funciona como contrapunto de lectura.',
 temas:['Unión y solidaridad entre hermanos','Trabajo y autonomía','Consejos morales frente a conductas pasadas','Diferencias entre la ética de Fierro y la de Vizcacha'],
 vocabulario:[{voz:'Estacada',sentido:'En la expresión dejar en la estacada, abandonar a alguien ante una dificultad.'},{voz:'Consejo',sentido:'Enunciado de enseñanza práctica o moral; no es una garantía de que quien aconseja haya obrado siempre de acuerdo con sus palabras.'}],
 estrofas:[1150,1160,1166,1167],
 preguntas:['¿Qué exige Fierro a los hermanos y por qué considera necesaria su unión?','¿Cómo se relaciona la exhortación a no matar con los episodios violentos anteriores?','¿Qué consejos sobre el trabajo y la honradez se pueden sostener con estrofas concretas?','¿En qué difieren sus máximas de las del Viejo Vizcacha?']
}
};