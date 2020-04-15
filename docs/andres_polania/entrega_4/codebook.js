

const nationals = {1:"España",2:"Uruguay",4:"Portugal",5:"Brasil",7:"Gran Bretaña",8:"Países Bajos",9:"Estados Unidos",10:"Francia",11:"Dinamarca",12:"Liga Hanseática, Brandenburgo",13:"Suecia",14:"Noruega",16:"Argentina",17:"Rusia",18:"Sardinia",19:"México",24:"Génova",25:"Ducado de Curlandia y Semigalia",26:"Prusia",27:"Bremen"," ": undefined}
// outcome of voyage
const fate1 = {1:"Voyage completed as intended",2:"Shipwrecked or destroyed, before slaves embarked",3:"Shipwrecked or destroyed, after embarkation of slaves or during slaving",4:"Shipwrecked or destroyed, after disembarkation",5:"Shipwrecked or destroyed - unspecified",6:"Captured by pirates or privateers - before slaves embarked",7:"Captured by pirates or privateers - after embarkation of slaves",8:"Captured by pirates or privateers - after disembarkation",9:"Captured by pirates or privateers - unspecified",10:"Captured by British - before slaves embarked",11:"Captured by British - after embarkation of slaves",12:"Captured by British - after disembarkation",13:"Captured by British - unspecified",14:"Captured by Spanish - before slaves embarked",15:"Captured by Spanish - after embarkation of slaves",16:"Captured by Spanish - after disembarkation",17:"Captured by Spanish - unspecified",18:"Captured by Dutch - before slaves embarked",19:"Captured by Dutch - after embarkation of slaves",20:"Captured by Dutch - after disembarkation",21:"Captured by Dutch - unspecified",22:"Captured by Portuguese - before slaves embarked",23:"Captured by Portuguese - after embarkation of slaves",24:"Captured by Portuguese - Americas after disembarkation",25:"Captured by Portuguese - unspecified",26:"Captured - unspecified",27:"Condemned - before slaves embarked",28:"Condemned - after embarkation of slaves",29:"Condemned - Americas after disembarkation",30:"Condemned - unspecified",31:"Captured by the Barbary Powers before embarking slaves",39:"Destroyed - unspecified",40:"Sold",41:"Left coast with trading cargo intact",42:"Taken by Africans",43:"Captured by Cie du Senegal",44:"Abandoned and/or sold off Africa",45:"Captured unspecified before slaves embarked",46:"Captured unspecified after embarkation of slaves",47:"Captured unspecified after slaves disembarked",48:"Captured by pirates - slaves sold in Americas from another ship",49:"Sold slaves in Americas - subsequent fate unknown",50:"Captured by the French - before slaves embarked",51:"Captured by the French - after embarkation of slaves",52:"Captured by the French - after slaves disembarked",53:"Captured by the French - unspecified",54:"Condemned in the Americas by British after slaves disembarked",55:"Pressed into government service",56:"Captured by slaves: ship did not reach the Americas",57:"Captured by crew: fate unknown",58:"Condemned in the Americas by British before slaves disembarked",59:"Bought at least one slave in Africa - subsequent fate unknown",66:"Destroyed, lost or sold as result of slave rebellion",67:"Taken, retaken and salvaged before reaching African trade site",68:"Sold in the Americas after disembarking slaves",69:"Cut off by Africans from shore, ship did not reach the Americas",70:"Sold in the Americas - not known whether ship brought slaves",71:"Captured before disembarking slaves; vessel recaptured or released subsequently",72:"Driven off the African Coast with slaves on board",73:"Captured by slaves, unknown outcome",74:"Captured by crew, did not land slaves in the Americas",75:"Lost before reaching Americas: slaves reached port in other ships",76:"Some slaves removed by pirates/privateers",77:"Arrived in Africa, subsequent fate unknown",78:"Captured and recaptured after disembarking slaves",79:"Crew mutiny; slaves landed in the Americas",80:"Cut off by Africans from shore. Recaptured and landed slaves in Americas",81:"Captured by slaves, recaptured and landed slaves in the Americas",82:"Captured by slaves, recaptured and landed slaves in the Americas, lost",85:"Completed voyage after slaves removed for salvage",86:"Ship returned direct to home port after selling slaves to another vessel",87:"Taken by slaves, vessel recaptured, unknown outcome",88:"Sold prematurely in Europe after disembarking slaves in the Americas",89:"Captured by the crew, slaves sold in Africa",90:"Captured by the crew, no slaves taken, crew sold gold in Europe",91:"Condemned in Africa with slaves, slaves transshipped/sold",92:"Returned direct to Africa after bringing slaves to the Americas",93:"Returned to Europe or Americas without obtaining slaves",94:"Laid up (disarmed) or broken up in Africa",95:"Laid up (disarmed) or broken up in the Americas",96:"Either shipwrecked or captured by pirates before slaves taken on board",97:"Abandoned or condemned for un-seaworthiness in the Americas",98:"Ship and slaves sold in Africa",99:"Taken by slaves, recaptured, then ship lost",102:"Vice-Admiralty Court, St. Helena, condemned",103:"Vice-Admiralty Court, St. Helena, restored",104:"Vice-Admiralty Court, British Guiana, condemned",105:"Vice-Admiralty Court, British Guiana, restored",106:"Vice-Admiralty Court, Cape of Good Hope, condemned",107:"Vice-Admiralty Court, Cape of Good Hope, restored",108:"Vice-Admiralty Court, Jamaica, condemned",109:"Vice-Admiralty Court, Jamaica, restored",110:"Vice-Admiralty Court, Sierra Leone, condemned",111:"Vice-Admiralty Court, Sierra Leone, restored",112:"Vice-Admiralty Court, Barbados, condemned",113:"Vice-Admiralty Court, Barbados, restored",114:"Vice-Admiralty Court, Mauritius, condemned",115:"Vice-Admiralty Court, Mauritius, restored",118:"High Court of Admiralty, condemned",119:"High Court of Admiralty, restored",120:"Court of Mixed Commission, Sierra Leone, condemned",121:"Court of Mixed Commission, Sierra Leone, restored",122:"Court of Mixed Commission, Havana, condemned",123:"Court of Mixed Commission, Havana, restored",124:"Court of Mixed Commission, Rio de Janeiro, condemned",125:"Court of Mixed Commission, Rio de Janeiro, restored",126:"Court of Mixed Commission, Luanda, condemned",127:"Court of Mixed Commission, Luanda, restored",128:"Court of Mixed Commission, Cape of Good Hope, condemned",129:"Court of Mixed Commission, Cape of Good Hope, restored",130:"Lagos, Vice-Admiralty Court, condemned",132:"Vice-Admiralty Court, Antigua, condemned",134:"Vice-Admiralty Court, Tortola, condemned",135:"Vice-Admiralty Court, Tortola, restored",136:"Vice-Admiralty Court, Halifax, condemned",138:"Vice-Admiralty Court, unspecified, condemned",139:"Vice-Admiralty Court, unspecified, restored",141:"Given up to the United States government",142:"Arrested by Brazil or given up to the Brazilian government",144:"Vice Admiralty Court, Dominica, condemned",148:"Vice-Admiralty Court, Bahamas, condemned",149:"Vice-Admiralty Court, Bahamas, restored",153:"Captured and released without court proceedings",154:"Driven or run on shore in the Americas: no court proceedings",155:"Given up to the Mexican Government, Veracruz",156:"Taken to Genoa and given up to Sardinian authorities",157:"Abandoned in Europe after completing voyage",159:"Captured by Argentinian privateers after embarkation of slaves",160:"Captured by United States before slaves embarked",161:"Captured by United States with slaves",162:"Captured by United States after slaves disembarked",163:"Captured by United States, slave presence unspecified",164:"French proceedings initiated in Africa, acquittal",165:"French proceedings initiated in Africa, condemned",166:"French proceedings initiated in Africa, unknown outcome",170:"French proceedings, initiated in unknown location, acquittal",171:"French proceedings, initiated in unknown location, condemned",172:"French proceedings, initiated in unknown location, unknown outcome",173:"French proceedings initiated in Guadeloupe, acquittal",174:"French proceedings initiated in Guadeloupe, condemned",175:"French proceedings initiated in Guadeloupe, unknown outcome",176:"French proceedings initiated in Martinique, acquittal",177:"French proceedings initiated in Martinique, condemned",178:"French proceedings initiated in Martinique, unknown outcome",179:"French proceedings initiated in Cayenne, acquittal",180:"French proceedings initiated in Cayenne, condemned",181:"French proceedings initiated in Cayenne, unknown outcome",182:"French proceedings initiated in France, acquittal",183:"French proceedings initiated in France, condemned",184:"French proceedings initiated in France, unknown outcome",185:"Detained and condemned in the United States after slaves disembarked",186:"Captured by Dutch, slaves turned loose in Africa",187:"Captured by Dutch, slaves turned loose in Brazil",188:"Temporarily detained by the Dutch: Voyage allowed to continue with slaves",189:"Slaves removed by Dutch and vessel allowed to continue, subsequent fate unknown",191:"Captured by Portuguese and Dutch",192:"Captured by Algerian pirates",193:"Captured by Turks",194:"Captured by British, released",195:"Looted by Dutch at Elmina",196:"Captured first by the British and then by the Dutch after slaves embarked",198:"Vessel driven back into port of departure by British and voyage aborted",199:"Arrived in Brazil and refused permission to disembark",200:"Ship and cargo captured by Africans and ship released",201:"Ship captured by Haitian navy and slaves released in Haiti",202:"Condemned at Gorée by the British",203:"Captured by the British, retaken by original crew, completed voyage",204:"Captured by pirates after slaves embarked, ship and slaves burned",205:"Captured by English, slaves turned loose on Spanish Main",206:"Sold slaves in Africa",207:"Sold slaves in Europe, subsequent fate unknown",208:"Left home port, no further record",209:"Captured by pirates and burned",210:"Looted by pirates, voyage continued",211:"Captured by Venezuelans before disembarkation of slaves",212:"Captured by the Swedes",213:"Captured by the Dominican Republic",304:"Departed an American port with slaves, subsequent fate unknown",305:"Returned to port of embarkation without having sold slaves",306:"Privateer captured slaves at sea and delivered for sale in America",307:"Prisoners of war stole slaves during escape and carried to port of sale",308:"Contracted to carry slaves within the Americas, subsequent fate unknown",309:"Captives seized from vessel by Spanish officials and sold",310:"Captured by slaves, slaves returned to Africa as free people",311:"Shipwrecked, slaves salvaged",312:"Captured by slaves, slaves freed by British authorities",313:"Shipwrecked, slaves freed by British authorities"}
// Outcome of slaves
const fate2 = {1:"Los esclavos desembarcan en América",2:"No hay esclavos embarcados",3:"Los esclavos desembarcan en África o Europa",4:"Los esclavos perecen con la nave",5:"Los esclavos embarcan, cambian de nave o no hay registro posterior",6:"No hay datos de los esclavos",7:"Los esclavos embarcan pero no desembarcan ni en Europa ni en América",
" ": undefined
}
// Outcome for owner
const fate4 = {1:"Esclavos entregados a los dueños orginales",2:"Meta orginal frustrada (catástrofe natural)",3:"Meta orginal frustrada (agencia humana)",4:"Resultado desconocido",
" ": undefined
}
const resistance = {1:"Insurrección de los esclavos",2:"Nave atacada desde la bahía",3:"Botes de la nave atacados desde la bahía",4:"'Cut-off' (Significado desconocido)",5:"Tres o más esclavos saltan fuera de la borda, desaparecen o escapan",6:"Insurrección planeada, pero frustrada",
" ": undefined
}
const broadregions = {10000:"Europe",20000:"Norte América",30000:"Caribe",40000:"Tierra española en América",50000:"Brasil",60000:"África",80000:"Otro"}
const specificregions = {101:"España",102:"Portugal",103:"Gran Bretaña",104:"Inglaterra",105:"Escocia",106:"Irlanda",107:"Francia",108:"Países Bajos",109:"Dinamarca",110:"Alemania del norte",111:"Bélgica",112:"Noruega",113:"Suecia",114:"Italia",115:"Rusia",116:"Mediterráneo",117:"Latvia",201:"Rhode Island",202:"Maine",203:"New Hampshire",204:"Massachusetts",205:"Connecticut",206:"New York",207:"Delaware",208:"New Jersey",209:"Pennsylvania",210:"Maryland",211:"Virginia",212:"North Carolina",213:"South Carolina",214:"Georgia",215:"Florida",216:"Gulf coast",217:"Canada",218:"Kentucky",219:"Other North America",220:"Tennessee",221:"Texas",311:"Española",312:"Puerto Rico",313:"Cuba",314:"Otros del Caribe español",321:"Caribe Holandés",322:"Guyana Holandesa",323:"Otros de la América Holandesa",332:"Tortola",333:"Anguilla",334:"Antigua",335:"St. Kitts",336:"Nevis",337:"Montserrat",338:"Dominica",341:"St. Lucia",342:"Barbados",343:"St. Vincent",344:"Granada",345:"Trinidad",346:"Tobago",351:"Jamaica",352:"Bahamas",353:"Guyana británica",354:"Honduras británicas",355:"Otros del Caribe británico",361:"Martinique",362:"Guadeloupe",363:"Guyana francesa",364:"Saint-Domingue",365:"Otros del Caribe francés",370:"Indias occidentales danesas",381:"St. Barthélemy (suecia)",390:"Otros del Caribe",412:"Circum-Caribe español",420:"Río de la Plata",430:"Perú",440:"Chile",450:"Ecuador",501:"Amazonía",502:"Bahía",503:"Pernambuco",504:"Sudeste brasilero",505:"Otro en Brasil",601:"Senegambia y Atlantico fuera de costa",602:"Sierra Leona",603:"Windward Coast",604:"Gold Coast",605:"Golfo de Benin",606:"Golfo de Biafra y Golfo de Guinea",607:"África central occidental y St. Helena",608:"Sudeste Africano y Indian Ocean islands",609:"Otros en África",801:"Indias occidentales",802:"Américas",803:"Asia y África",804:"Américas españolas",805:"Américas británicas",806:"India",807:"Non-geographical"};

const coordinates = {
  "España":[39.3262345,-4.8380649],
  "Portugal":[40.0332629,-7.8896263],
  "Gran Bretaña":[55.367,-3.9614184],
  "Inglaterra":[52.7954791,-0.5402403],
  "Escocia":[56.7861112,-4.1140518],
  "Irlanda":[52.865196,-7.9794599],
  "Francia":[46.603354,1.8883335],
  "Países Bajos":[52.5001698,5.7480821],
  "Dinamarca":[55.670249,10.3333283],
  "Alemania del norte":[51.0834196,10.4234469],
  "Bélgica":[50.6402809,4.6667145],
  "Noruega":[60.5000209,9.0999715],
  "Suecia":[59.6749712,14.5208584],
  "Italia":[42.6384261,12.674297],
  "Rusia":[64.6863136,97.7453061],
  "Mediterráneo":[39.3262345,-4.8380649],
  "Latvia":[56.8406494,24.7537645],
  "Rhode Island":[41.7962409,-71.5992372],
  "Maine":[45.709097,-68.8590201],
  "New Hampshire":[43.4849133,-71.6553992],
  "Massachusetts":[42.3788774,-72.032366],
  "Connecticut":[41.6500201,-72.7342163],
  "New York":[40.7127281,-74.0060152],
  "Delaware":[38.6920451,-75.4013315],
  "New Jersey":[40.0757384,-74.4041622],
  "Pennsylvania":[40.9699889,-77.7278831],
  "Maryland":[40.9699889,-77.7278831],
  "Virginia":[37.1232245,-78.4927721],
  "North Carolina":[35.6729639,-79.0392919],
  "South Carolina":[33.6874388,-80.4363743],
  "Georgia":[32.3293809,-83.1137366],
  "Florida":[27.7567667,-81.4639835],
  "Gulf coast":[26.301135,-81.797742],
  "Canada":[61.0666922,-107.9917071],
  "Kentucky":[37.5726028,-85.1551411],
  "Other North America":[39.7837304,-100.4458825],
  "Tennessee":[35.7730076,-86.2820081],
  "Texas":[31.8160381,-99.5120986],
  "Española":[19.1399952,-72.3570972],
  "Puerto Rico":[18.2214149,-66.4132818],
  "Cuba":[23.0131338,-80.8328748],
  "Otros del Caribe español":[15.0000001,-75.0000001],
  "Caribe Holandés":[4.1413025,-56.0771187],
  "Guyana Holandesa":[4.1413025,-56.0771187],
  "Otros de la América Holandesa":[4.1413025,-56.0771187],
  "Tortola":[18.4210568,-64.6388325],
  "Anguila":[18.1954947,-63.0750234],
  "Antigua":[17.2234721,-61.9554608],
  "St. Kitts":[17.3156929,-62.7446806],
  "Nevis":[17.3156929,-62.7446806],
  "Montserrat":[16.7417041,-62.1916844],
  "Dominica":[15.3,-61.383333],
  "St. Lucia":[13.8250489,-60.975036],
  "Barbados":[13.1500331,-59.5250305],
  "St. Vincent":[13.166667,-61.233333],
  "Granada":[13.166667,-61.233333],
  "Trinidad":[10.4430243,-61.2613054],
  "Tobago":[10.4430243,-61.2613054],
  "Jamaica":[18.1152958,-77.1598455],
  "Bahamas":[24.7736546,-78.0000547],
  "Guyana británica":[4.8417097,-58.6416891],
  "Honduras británicas":[16.8259793,-88.7600927],
  "Otros del Caribe británico":[4.8417097,-58.6416891],
  "Martinique":[14.666667,-61],
  "Guadeloupe":[16.25,-61.583333],
  "Guyana francesa":[4.0039882,-52.999998],
  "Saint-Domingue":[19.1,-72.333333],
  "Otros del Caribe francés":[4.0039882,-52.999998],
  "Indias occidentales danesas":[18.093611,-64.830278],
  "St. Barthélemy (suecia)":[17.897728,-62.834244],
  "Otros del Caribe":[4.8417097,-58.6416891],
  "Circum-Caribe español":[11.2780115,-72.6135766],
  "Río de la Plata":[-35.13352,-56.2744904],
  "Perú":[-6.8699697,-75.0458515],
  "Chile":[-31.7613365,-71.3187697],
  "Ecuador":[-1.3397668,-79.3666965],
  "Amazonía":[-3,-62],
  "Bahía":[-12.285251,-41.9294776],
  "Pernambuco":[-8.4116316,-37.5919699],
  "Sudeste brasilero":[-20.5,-46.6],
  "Otro en Brasil":[-10.3333333,-53.2],
  "Senegambia y Atlantico fuera de costa":[14.4750607,-14.4529612],
  "Sierra Leona":[8.6400349,-11.8400269],
  "Windward Coast":[6.129503,-7.890292],
  "Gold Coast":[7.125289,-2.235177],
  "Golfo de Benin":[7.201802,4.936535],
  "Golfo de Biafra y Golfo de Guinea":[6.001698,8.873895],
  "África central occidental y St. Helena":[-7.868882,16.713939],
  "Sudeste Africano y Indian Ocean islands":[17.878367,36.249788],
  "Otros en África":[5.771572,20.209828],
  "Indias occidentales":[24.7736546,-78.0000547],
  "Américas":[10.526968,-83.248915],
  "Asia y África":[26.493174,31.331409],
  "Américas españolas":[-1.884291,-71.892],
  "Américas británicas":[34.990109,-99.447828],
  "India":[22.767474,78.197809],
  "Non-geographical": undefined //[-81.652022,46.864887]
};



// ([0-9]+)
// $1:
// (?![0-9:])([a-z \-},/:;().éáíóúñ]+)
// "$1"
// ("[a-z },-:/;().éáíóúñ]+")
// $1},