// Deutsche Ausgabe (/de/): Studienübersetzungen in Prosa, verfasst von der Redaktion von
// MARTINFIERRO.ORG. Sie sind keine Verse und ersetzen das Original nicht: Sie helfen
// deutschsprachigen Lesern, den Sinn jeder Strophe zu prüfen. Die zitierten Verse stammen
// immer aus src/lib/corpus (Originaltext von José Hernández, gemeinfrei).

/** Eröffnung des Gedichts: Ida, Gesang I, Strophen 1 bis 3. */
export const eroeffnungDe: Record<number,string> = {
 1:'Hier fange ich an zu singen, zum Takt der Gitarre, denn wen ein ungewöhnlicher Kummer nicht schlafen lässt, der tröstet sich mit Singen wie der einsame Vogel.',
 2:'Ich bitte die Heiligen im Himmel, meinen Gedanken beizustehen; ich bitte sie in diesem Augenblick, da ich meine Geschichte singen will, mein Gedächtnis aufzufrischen und meinen Verstand zu erhellen.',
 3:'Kommt, wundertätige Heilige, kommt alle mir zu Hilfe, denn die Zunge verknotet sich mir und der Blick trübt sich mir; ich bitte Gott, mir in einer so harten Prüfung beizustehen.',
};

/** Gauchesker Wortschatz der Eröffnungsstrophen. */
export const eroeffnungWoerter: Record<number,[string,string][]> = {
 1:[['vigüela','Gitarre (von vihuela, dem Vorläufer der Gitarre)'],['desvela','lässt nicht schlafen'],['estraordinaria','außergewöhnlich (extraordinaria)']],
 3:[['se me añuda','verknotet sich mir (se me anuda)'],['ruda','hart, schwer']],
};

/** Die Ratschläge Martín Fierros an seine Söhne: La vuelta, Gesang XXXII (Strophen 1144 bis 1174). */
export const ratschlaegeDe: Record<number,string> = {
 1144:'Ein Vater, der Rat gibt, ist mehr als ein Vater: Er ist ein Freund. Und als Freund sage ich euch: Lebt mit Vorsicht, denn niemand weiß, in welchem Winkel sein Feind lauert.',
 1145:'Ich hatte nie eine andere Schule als ein Leben voller Unglück. Wundert euch also nicht, wenn ich mich mitten im Spiel einmal irre. Wer nichts gelernt hat, kann nicht viel wissen.',
 1146:'Es gibt Männer, deren Kopf voller Wissenschaft ist; es gibt Gelehrte jeder Sorte. Ich aber sage euch, ohne sehr gelehrt zu sein: Besser Gutes lernen als vieles lernen.',
 1147:'Die Mühsal nützt nichts, wenn sie uns nichts lehrt. Der Mensch muss alles mit einem Blick erfassen, und das erste Wissen ist, zu wissen, wann man stört.',
 1148:'Setzt eure Hoffnung niemals auf irgendein Herz. Im größten Unglück vertraut auf Gott; unter den Menschen auf einen einzigen, und auf zwei nur mit großer Vorsicht.',
 1149:'Fehler haben keine Grenzen, wie sie Grundstücke haben; man findet sie sogar bei den Besten, und es ist recht, dass ich euch warne: Wer Fehler hat, soll über die der anderen hinwegsehen.',
 1150:'Lasst einen Freund nie im Stich, aber bittet ihn um nichts und erwartet nicht alles von ihm: Der treueste Freund ist immer ein ehrliches Verhalten.',
 1151:'Es ist nicht gut, sich von Angst oder Habgier leiten zu lassen; quält euch also nicht um vergängliche Güter. Dem Reichen bietet nie etwas an; dem Armen versagt euch nie.',
 1152:'Gut lebt sogar bei den Indigenen der Pampa, wer die Menschen achtet. Der Mensch muss klug sein, um sich Ärger zu ersparen: misstrauisch unter Feiglingen, maßvoll unter Tapferen.',
 1153:'Arbeiten ist das Gesetz, denn man muss sich sein Brot verdienen; setzt euch nicht der Not einer traurigen Lage aus: Es blutet sehr, das Herz dessen, der betteln muss.',
 1154:'Der Mensch muss arbeiten, um sein Brot zu verdienen, denn das Elend, das auf tausend Arten hartnäckig verfolgt, klopft an jede Tür und tritt beim Faulen ein.',
 1155:'Droht niemandem, denn niemand lässt sich einschüchtern; wer ohne Vorsicht droht, lernt schnell, dass es eine Gefahr gibt, die da ist, und eine andere, die auf ihn wartet.',
 1156:'Um eine Gefahr zu bezwingen und jedem Abgrund zu entkommen (das sage ich aus Erfahrung), hilft mehr als Säbel und Lanze das Vertrauen, das der Mensch in sich selbst hat.',
 1157:'Der Mensch wird mit der List geboren, die ihm als Führer dienen soll; ohne sie ginge er zugrunde. Doch nach meiner Erfahrung wird sie bei den einen zur Klugheit und bei den anderen zur Gaunerei.',
 1158:'Der fleißige Mensch ergreift die Gelegenheit. Und merkt euch, ob mein Vergleich nicht stimmt: Die Gelegenheit ist wie das Eisen, man muss sie schmieden, solange sie heiß ist.',
 1159:'Der Mensch verliert vieles, das er manchmal wiederfindet. Doch das muss ich euch lehren, und es ist gut, wenn ihr daran denkt: Die Scham, einmal verloren, findet man nie wieder.',
 1160:'Die Brüder sollen einig sein, denn das ist das erste Gesetz. Seid wahrhaft einig, zu jeder Zeit, denn wenn sie untereinander streiten, verschlingen sie die von draußen.',
 1161:'Achtet die Alten: Sich über sie lustig zu machen, ist keine Heldentat. Wenn ihr unter Fremde geht, seid sehr vorsichtig, denn wer mit Schlechten verkehrt, gilt als ihresgleichen.',
 1162:'Der Storch verliert, wenn er alt wird, das Augenlicht, und alle seine Jungen bemühen sich, ihn im Alter zu pflegen. Lernt von den Störchen dieses Beispiel der Zärtlichkeit.',
 1163:'Wenn man euch kränkt, bleibt immer auf der Hut, auch wenn ihr es vergesst, denn sicher wird der, der euch gekränkt hat, viel Schlechtes über euch reden.',
 1164:'Wer im Gehorsam lebt, hat nie ein leichtes Los, doch sein Stolz verschärft nur die Härte, die er erträgt. Er gehorche dem, der gehorcht, und wer befiehlt, wird gut sein.',
 1165:'Seht zu, dass ihr weder eure Zeit noch eure Ehre verliert; handelt wie jeder nachdenkliche Mensch stets mit Verstand und wisst, dass kein Laster dort stehen bleibt, wo es beginnt.',
 1166:'Der Vogel mit dem krummen Schnabel hat eine Vorliebe fürs Stehlen; aber der vernünftige Mensch stiehlt nie einen Pfennig, denn arm zu sein ist keine Schande, und ein Dieb zu sein ist eine.',
 1167:'Der Mensch töte den Menschen nicht und kämpfe nicht aus Prahlerei. In meinem Unglück hat er einen Spiegel, in dem er sich betrachten kann: Sich zurückzuhalten, das ist die große Weisheit.',
 1168:'Vergossenes Blut vergisst man bis zum Tod nicht; es zeichnet so sehr, dass ich es gegen meinen Willen nicht leugne: Es fällt wie Feuertropfen in die Seele dessen, der es vergießt.',
 1169:'Bei jeder Gelegenheit ist der Trunk immer der schlimmste Feind. Ich sage es euch mit Liebe, behaltet es gut: Wer im Rausch beleidigt, verdient doppelte Strafe.',
 1170:'Bricht eine Schlägerei aus, zahlt immer ihr als Erste. Seid nicht überheblich, auch wenn ihr tausendmal recht habt: An den Bärten der Armen lernen die Barbiere ihr Handwerk.',
 1171:'Wenn ihr euer Herz einer geliebten Frau schenkt, tut ihr keine Kränkung an, die sie verletzt: Eine gekränkte Frau wird euch am Ende immer ins Verderben stürzen.',
 1172:'Wenn ihr Sänger seid, bemüht euch, mit Gefühl zu singen; stimmt das Instrument nicht nur, um reden zu hören, und gewöhnt euch an, Dinge zu singen, die Gehalt haben.',
 1173:'Diese Ratschläge, die mich viel gekostet haben, gebe ich euch, weil ich euch führen will; aber mein Wissen reicht nicht so weit, euch die Weisheit zu geben, die man braucht, um sie zu befolgen.',
 1174:'Diese Dinge und viele andere habe ich in meiner Einsamkeit bedacht. Wisst, dass in diesen Ratschlägen weder Lüge noch Irrtum steckt: Aus dem Mund des Alten kommen die Wahrheiten.',
};

/** Wörter des gauchesken Spanisch, denen deutschsprachige Leser in Gesang XXXII begegnen. */
export const ratschlaegeWoerter: Record<number,[string,string][]> = {
 1144:[['ansí','so (así)'],['naides','niemand (nadie)'],['rincón','Winkel, Ecke']],
 1145:[['no estrañen','wundert euch nicht (no extrañen)']],
 1146:[['cencia','Wissenschaft (ciencia)'],['menas','Sorten, Arten'],['ducho','erfahren, gewandt'],['gúenas','gute (buenas)']],
 1147:[['trabajos','hier Mühsal und Prüfungen, nicht »Arbeitsstellen«'],['enfada','lästig fallen, stören']],
 1149:[['güenos','gute (buenos)'],['defetos','Fehler (defectos)']],
 1150:[['dejar en la estacada','im Stich lassen, in der Gefahr allein lassen']],
 1152:[['pampas','die indigenen Völker der Pampa'],['flojos','schwach, feige']],
 1153:[['alquirir','erwerben, verdienen (adquirir)']],
 1154:[['haragán','faul, Faulpelz']],
 1156:[['esperencia','Erfahrung (experiencia)']],
 1157:[['sigún','nach, gemäß (según)'],['picardía','Gaunerei, Schlitzohrigkeit (kein »Pikanterie«)']],
 1158:[['fierro','Eisen (hierro) und zugleich der Name des Helden'],['machacar','schmieden, hämmern']],
 1160:[['ajuera','draußen (afuera)']],
 1161:[['estraña','fremd, unbekannt (extraña)'],['precavidos','vorsichtig, auf der Hut']],
 1162:[['edá','Alter (edad)'],['apriendan','lernt (aprendan)']],
 1166:[['cobre','Kupfermünze, Pfennig']],
 1167:[['pelé','kämpfe (pelee)'],['por fantasía','aus Prahlerei, um sich aufzuspielen']],
 1168:[['redama','vergießt (derrama)'],['juego','Feuer (fuego)'],['dei','von (de)']],
 1169:[['trago','alkoholisches Getränk, Schluck'],['ofiende','beleidigt (ofende)']],
 1170:[['revolutis','Schlägerei, Tumult'],['aungue','auch wenn (aunque)']],
 1171:[['entriegan','schenkt, übergebt (entregan)'],['partida','hier böser Streich, Kränkung']],
 1172:[['tiemplen','stimmt (templen)'],['estrumento','Instrument'],['jundamento','Gehalt, Grundlage (fundamento)']],
 1173:[['alquirirlos','sie zu erwerben'],['precisan','ihr braucht']],
 1174:[['ande','wo (donde)']],
};

/** Lesehinweise (redaktioneller Kommentar, keine Übersetzung). */
export const ratschlaegeNotizen: Record<number,{titel:string;text:string}> = {
 1144:{titel:'Ein Vater, der als Freund spricht',text:'Fierro tritt nicht als unfehlbarer Lehrer auf. Der Leser hat seine Fehler, seine Raufereien und seine Morde verfolgt. Seine Ratschläge zählen, weil sie aus Erfahrung kommen, nicht weil der Sprecher über jede Kritik erhaben wäre.'},
 1146:{titel:'Viel wissen oder das Gute wissen',text:'Die gaucheske Schreibung (»cencia«, »gúenas«) gibt die Sprache des Landes wieder, doch der Gedanke ist zeitlos: Bildung ist nur etwas wert, wenn sie mit moralischem Urteil einhergeht.'},
 1150:{titel:'Freundschaft und Ehrlichkeit',text:'Denken Sie an Cruz, den Sergeanten, der die Seite wechselte, um an Fierros Seite zu kämpfen. Im Gedicht hat die Freundschaft schon gezeigt, wie solidarisch und wie riskant sie sein kann.'},
 1153:{titel:'Die Würde der Arbeit',text:'Das Lob der Arbeit wiegt besonders schwer im Mund eines Mannes, der durch den Zwangsdienst an der Grenze seine Hütte, seine Frau und seine Kinder verloren hat. Man muss die freie Arbeit von der Arbeit unterscheiden, die die Obrigkeit erzwingt.'},
 1158:{titel:'Das Eisen schmieden',text:'Das Sprichwort gibt es auch im Deutschen (»Man muss das Eisen schmieden, solange es heiß ist«), doch hier kommt ein Wortspiel hinzu: Der Sprecher heißt Fierro, also »Eisen«. Hernández versteckt solche Ironien gern in seinen bekanntesten Versen.'},
 1160:{titel:'»Los hermanos sean unidos«',text:'Das ist die in Argentinien meistzitierte Strophe des Gedichts, wiederholt in Schulen, Reden und Feiern. Der Aufruf richtet sich wörtlich an Brüder, wurde aber als Ruf nach nationaler Einheit und nach Solidarität unter denen gelesen, die unten stehen.'},
 1164:{titel:'Ein Vers mit mehreren Lesarten',text:'Die beiden letzten Verse lassen verschiedene Deutungen zu: »Wer gehorchen muss, gehorche, und wer befiehlt, wird gut sein« oder »Gehorcht dem Vorgesetzten, der selbst dem Gesetz gehorcht«. Die Studienübersetzung bewahrt die Mehrdeutigkeit des Originals.'},
 1167:{titel:'Die Gewalt zurückweisen',text:'Der Rat gegen die Gewalt wirkt umso stärker, als er von einem Erzähler kommt, der getötet hat. Fierro bietet sein eigenes Unglück als Spiegel an: Die Spannung zwischen dem, was er getan hat, und dem, was er empfiehlt, gehört zur moralischen Größe des Gedichts.'},
 1174:{titel:'Ein Rat zur Stunde des Abschieds',text:'Die Ratschläge schließen die Szene des Wiedersehens ab, kurz bevor Vater und Söhne sich trennen und ihre Namen ändern. Das Gedicht verspricht nicht, dass das gute Wort erlittenen Schmerz auslöscht; es verwandelt Erfahrung in ein Erbe.'},
};
