let excelData;
let filteredData = [];
let currentPage = 1;
const resultsPerPage = 18; // Cantidad de resultados por página
// const prevPageButton = document.getElementById('prev-page');
// const nextPageButton = document.getElementById('next-page');
const resultContainer = document.querySelector('.box-resultado');
const $toggleButton = $("#toggle-advanced-search");
const $advancedSearch = $("#advanced-search");
const $advancedSearchInputs = $("#advanced-search select");
const $prevPageButton = $("#prev-page");
const $nextPageButton = $("#next-page");

const distritosPorRegion = {
    AMAZONAS: [ "ARAMANGO","BAGUA","BAGUA GRANDE","BALSAS","CAJARURO","CAMPORREDONDO","CHACHAPOYAS","CHETO","CHILIQUIN","CHUQUIBAMBA","COCHAMAL","COLCAMAR","CONILA","COPALLIN","COROSHA","CUISPES","CUMBA","EL CENEPA","EL MILAGRO","FLORIDA","GRANADA","HUAMBO","HUANCAS","IMAZA","INGUILPATA","JAMALCA","JAZAN","JUMBILLA","LA JALCA","LA PECA","LAMUD","LEIMEBAMBA","LEVANTO","LONGAR","LONGUITA","LONYA CHICO","LONYA GRANDE","LUYA","MAGDALENA","MARÍA","MARISCAL BENAVIDES","MARISCAL CASTILLA","MOLINOPAMPA","MONTEVIDEO","NIEVA","OCALLI", "OCUMAL","OMIA","PISUQUIA","PROVIDENCIA","RÍO SANTIAGO","SAN FRANCISCO DE DAGUAS","SAN FRANCISCO DE YESO","SAN JERÓNIMO","SAN NICOLÁS","SANTA CATALINA","SANTA ROSA","SANTO TOMAS","SHIPASBAMBA","SOLOCO","TINGO","TRITA","VISTA ALEGRE","YAMBRASBAMBA","YAMON"],
    ÁNCASH: ["ABELARDO PARDO LEZAMETA","ACAS","ACO","ACOBAMBA","ACOCHACA","ACOPAMPA","ACZO","AIJA","AMASHCA","ANRA","ANTA","ANTONIO RAYMONDI","AQUIA","ATAQUERO","BOLOGNESI","BUENA VISTA ALTA","CABANA","CÁCERES DEL PERÚ","CAJACAY","CAJAY","CANIS","CARAZ","CARHUAZ","CASCA","CASHAPAMPA","CASMA","CATAC","CHACAS","CHACCHO","CHAVIN DE HUANTAR","CHIMBOTE","CHINGALPO","CHIQUIAN","COCHABAMBA","COCHAPETI","COCHAS","COISHCO","COLQUIOC","COMANDANTE NOEL","CONCHUCOS","CONGAS","CORIS","CORONGO","COTAPARACO","CULEBRAS","CUSCA","ELEAZAR GUZMÁN BARRON","FIDEL OLIVAS ESCUDERO","HUACACHI","HUACASCHUQUE","HUACCHIS","HUACHIS","HUACLLAN","HUALLANCA","HUANDOVAL","HUANTAR","HUARAZ","HUARI","HUARMEY","HUATA","HUAYAN","HUAYLAS","HUAYLLABAMBA","HUAYLLACAYAN","HUAYLLAN","INDEPENDENCIA","JANGAS","LA LIBERTAD","LA MERCED","LA PAMPA","LLACLLIN","LLAMA","LLAMELLIN","LLAPO","LLIPA","LLUMPA","LUCMA","MACATE","MANCOS","MANGAS","MARCARA","MASIN","MATO","MIRGAS","MORO","NEPEÑA","NUEVO CHIMBOTE","OCROS","OLLEROS","PACLLON","PALLASCA","PAMPAROMAS","PAMPAS","PAMPAS GRANDE","PARARIN","PARIACOTO","PARIAHUANCA","PAROBAMBA","PAUCAS","PIRA","PISCOBAMBA","POMABAMBA","PONTO","PUEBLO LIBRE","QUILLO","QUINUABAMBA","RAGASH","RAHUAPAMPA","RANRAHIRCA","RAPAYAN","RECUAY","SAMANCO","SAN CRISTÓBAL DE RAJAN","SAN JUAN","SAN JUAN DE RONTOY","SAN LUIS","SAN MARCOS","SAN NICOLÁS","SAN PEDRO","SAN PEDRO DE CHANA","SANTA","SANTA CRUZ","SANTA ROSA","SANTIAGO DE CHILCAS","SANTO TORIBIO","SHILLA","SICSIBAMBA","SIHUAS","TAPACOCHA","TARICA","TAUCA","TICAPAMPA","TICLLOS","TINCO","UCO","YANAC","YANAMA","YAUTAN","YAUYA","YUNGAR","YUNGAY","YUPAN","YURACMARCA"],
    APURÍMAC: ["ABANCAY","ANCO_HUALLO","ANDAHUAYLAS","ANDARAPA","ANTABAMBA","CAPAYA","CARAYBAMBA","CHACOCHE","CHALHUANCA","CHALLHUAHUACHO","CHAPIMARCA","CHINCHEROS","CHUQUIBAMBILLA","COCHARCAS","COTABAMBAS","COTARUSE","COYLLURQUI","CURAHUASI","CURPAHUASI","EL PORVENIR","GAMARRA","HAQUIRA","HUACCANA","HUANCARAMA","HUANCARAY","HUANIPACA","HUAQUIRCA","HUAYLLATI","JUAN ESPINOZA MEDRANO","KAQUIABAMBA","KISHUARA","LAMBRAMA","LOS CHANKAS","LUCRE","MARA","MICAELA BASTIDAS","OCOBAMBA","ONGOY","OROPESA","PACHACONAS","PACUCHA","PICHIRHUA","POCOHUANCA","PROGRESO","RANRACANCHA","ROCCHACC","SABAINO","SAN JERÓNIMO","SAN MIGUEL DE CHACCRAMPA","SAN PEDRO DE CACHORA","SANTA MARÍA DE CHICMO","SORAYA","TALAVERA","TAMBOBAMBA","TAMBURCO","TAPAIRIHUA","TINTAY","TORAYA","TUMAY HUARACA","TURPO","URANMARCA","VILCABAMBA"],
    AREQUIPA: ["ACARÍ","ACHOMA","ALCA","ALTO SELVA ALEGRE","ANDAGUA","ANDARAY","APLAO","AREQUIPA","ATICO","AYO","BELLA UNIÓN","CABANACONDE","CAHUACHO","CALLALLI","CAMANÁ","CARAVELÍ","CAYARANI","CAYLLOMA","CAYMA","CERRO COLORADO","CHACHAS","CHALA","CHAPARRA","CHARACATO","CHARCANA","CHIGUATA","CHILCAYMARCA","CHIVAY","CHOCO","CHUQUIBAMBA","COCACHACRA","COPORAQUE","COTAHUASI","DEAN VALDIVIA","HUAMBO","HUANCA","HUANCARQUI","HUANUHUANU","ICHUPAMPA","ISLAY","JACOBO HUNTER","JAQUI","JOSÉ LUIS BUSTAMANTE Y RIVERO","JOSÉ MARÍA QUIMPER","LA JOYA","LARI","LLUTA","LOMAS","MACA","MACHAGUAY","MAJES","MARIANO MELGAR","MARIANO NICOLÁS VALCÁRCEL","MARISCAL CÁCERES","MEJIA","MIRAFLORES","MOLLEBAYA","MOLLENDO","NICOLÁS DE PIEROLA","OCOÑA","ORCOPAMPA","PAMPACOLCA","PAUCARPATA","POLOBAYA","PUNTA DE BOMBÓN","PUYCA","QUICACHA","QUILCA","RÍO GRANDE","SABANDIA","SACHACA","SALAMANCA","SAMUEL PASTOR","SAN ANTONIO DE CHUCA","SAN JUAN DE SIGUAS","SAN JUAN DE TARUCANI","SANTA ISABEL DE SIGUAS","SANTA RITA DE SIGUAS","SAYLA","SOCABAYA","TIABAYA","TIPAN","TISCO","TOMEPAMPA","TORO","TUTI","UCHUMAYO","UÑON","URACA","VITOR","YANAHUARA","YANAQUIHUA","YANQUE","YARABAMBA","YAUCA","YURA"],
    AYACUCHO: ["ACCOMARCA","ACOCRO","ACOS VINCHOS","ALCAMENCA","ANCHIHUAY","ANCO","ANDRÉS AVELINO CÁCERES DORREGARAY","APONGO","AUCARA","AYACUCHO","AYAHUANCO","AYNA","BELÉN","CABANA","CANARIA","CANAYRE","CANGALLO","CARAPO","CARHUANCA","CARMEN ALTO","CARMEN SALCEDO","CHALCOS","CHAVIÑA","CHIARA","CHILCAS","CHILCAYOC","CHIPAO","CHUMPI","CHUNGUI","CHUSCHI","COLCA","COLTA","CONCEPCIÓN","CORACORA","CORCULLA","HUAC-HUAS","HUACAÑA","HUALLA","HUAMANGUILLA","HUAMANQUIQUIA","HUAMBALPA","HUANCAPI","HUANCARAYLLA","HUANTA","IGUAIN","INDEPENDENCIA","JESÚS NAZARENO","LAMPA","LARAMATE","LEONCIO PRADO","LLAUTA","LLOCHEGUA","LOS MOROCHUCOS","LURICOCHA","MARCABAMBA","MARÍA PARADO DE BELLIDO","MORCOLLA","NINABAMBA","OCAÑA","OCROS","PACAYCASA","PAICO","PARAS","PAUSA","PULLO","PUQUIO","PUYUSCA","QUEROBAMBA","QUINUA","RIO MAGDALENA","SACSAMARCA","SAISA","SAMUGARI","SAN CRISTÓBAL","SAN JOSÉ DE TICLLAS","SAN JOSÉ DE USHUA","SAN JUAN","SAN JUAN BAUTISTA","SAN MIGUEL","SAN PEDRO","SAN PEDRO DE LARCAY","SAN PEDRO DE PALCO","SAN SALVADOR DE QUIJE","SANCOS","SANTA ANA DE HUAYCAHUACHO","SANTA LUCIA","SANTA ROSA","SANTIAGO DE LUCANAMARCA","SANTIAGO DE PAUCARAY","SANTIAGO DE PISCHA","SANTILLANA","SARA SARA","SARHUA","SAURAMA","SIVIA","SOCOS","SORAS","TAMBILLO","TAMBO","TOTOS","UNION PROGRESO","VILCANCHOS","VILCAS HUAMAN","VINCHOS","VISCHONGO"],
    CAJAMARCA: ["ANDABAMBA","ANGUIA","ASUNCIÓN","BAMBAMARCA","BELLAVISTA","CACHACHI","CAJABAMBA","CAJAMARCA","CALLAYUC","CALQUIS","CATACHE","CATILLUC","CELENDÍN","CHALAMARCA","CHANCAY","CHANCAYBAÑOS","CHETILLA","CHIGUIRIP","CHILETE","CHIRINOS","CHONTALI","CHOROPAMPA","CHOROS","CHOTA","CHUGUR","CHUMUCH","COCHABAMBA","COLASAY","CONDEBAMBA","CONTUMAZA","CORTEGANA","COSPAN","CUPISNIQUE","CUTERVO","EDUARDO VILLANUEVA","EL PRADO","ENCAÑADA","GREGORIO PITA","HUABAL","HUALGAYOC","HUAMBOS","HUARANGO","HUASMIN","ICHOCAN","JAÉN","JESÚS","JOSÉ GÁLVEZ","JOSÉ MANUEL QUIROZ","JOSÉ SABOGAL","LA COIPA","LA ESPERANZA","LA FLORIDA","LA LIBERTAD DE PALLAN","LA RAMADA","LAJAS","LAS PIRIAS","LLACANORA","LLAMA","LLAPA","LOS BAÑOS DEL INCA","MAGDALENA","MATARA","MIGUEL IGLESIAS","MIRACOSTA","NAMBALLE","NAMORA","NANCHOC","NIEPOS","NINABAMBA","OXAMARCA","PACCHA","PEDRO GÁLVEZ","PIMPINGOS","PION","POMAHUACA","PUCARA","PULAN","QUEROCOTILLO","QUEROCOTO","SALLIQUE","SAN ANDRÉS DE CUTERVO","SAN BENITO","SAN BERNARDINO","SAN FELIPE","SAN IGNACIO","SAN JOSÉ DE LOURDES","SAN JOSÉ DEL ALTO","SAN JUAN","SAN JUAN DE CUTERVO","SAN JUAN DE LICUPIS","SAN LUIS","SAN MIGUEL","SAN PABLO","SAN SILVESTRE DE COCHAN","SANTA CRUZ","SANTA ROSA","SANTO DOMINGO DE LA CAPILLA","SANTO TOMAS","SAUCEPAMPA","SITACOCHA","SOCOTA","SOROCHUCO","SUCRE","TABACONAS","TACABAMBA","TANTARICA","TONGOD","TORIBIO CASANOVA","TUMBADEN","UNIÓN AGUA BLANCA","UTCO","YAUYUCAN","YONAN"],
    CALLAO: ["BELLAVISTA", "CALLAO", "CARMEN DE LA LEGUA REYNOSO","LA PERLA","LA PUNTA","MI PERÚ","VENTANILLA"],
    CUSCO: ["ACCHA","ACOMAYO","ACOS","ALTO PICHIGUA","ANCAHUASI","ANDAHUAYLILLAS","ANTA","CACHIMAYO","CAICAY","CALCA","CAMANTI","CAPACMARCA","CCAPI","CCARHUAYO","CCATCA","CCORCA","CHALLABAMBA","CHAMACA","CHECCA","CHINCHAYPUJIO","CHINCHERO","COLCHA","COLQUEMARCA","COLQUEPATA","COMBAPATA","CONDOROMA","COPORAQUE","COYA","CUSCO","CUSIPATA","ECHARATE","ESPINAR","HUANCARANI","HUANOQUITE","HUARO","HUAROCONDO","HUAYLLABAMBA","HUAYOPATA","INKAWASI","KIMBIRI","KOSÑIPATA","KUNTURKANKI","LAMAY","LANGUI","LARES","LAYO","LIMATAMBO","LIVITACA","LLUSCO","MACHUPICCHU","MARANGANI","MARANURA","MARAS","MARCAPATA","MEGANTONI","MOLLEPATA","MOSOC LLACTA","OCOBAMBA","OCONGATE","OCORURO","OLLANTAYTAMBO","OMACHA","OROPESA","PACCARITAMBO","PALLPATA","PARURO","PAUCARTAMBO","PICHARI","PICHIGUA","PILLPINTO","PISAC","PITUMARCA","POMACANCHI","POROY","PUCYURA","QUEHUE","QUELLOUNO","QUIÑOTA","QUIQUIJANA","RONDOCAN","SAN JERÓNIMO","SAN PABLO","SAN PEDRO","SAN SALVADOR","SAN SEBASTIAN","SANGARARA","SANTA ANA","SANTA TERESA","SANTIAGO","SANTO TOMAS","SAYLLA","SICUANI","SUYCKUTAMBO","TARAY","TINTA","URCOS","URUBAMBA","VELILLE","VILCABAMBA","VILLA KINTIARINA","VILLA VIRGEN","WANCHAQ","YANAOCA","YANATILE","YAURISQUE","YUCAY","ZURITE"],
    HUANCAVELICA: ["ACOBAMBA","ACORIA","ACOSTAMBO","ACRAQUIA","AHUAYCHA","ANCHONGA","ANCO","ANDABAMBA","ANDAYMARCA","ANTA","ARMA","ASCENSIÓN","AURAHUA","AYAVI","CAJA","CALLANMARCA","CASTROVIRREYNA","CCOCHACCASA","CHINCHIHUASI","CHINCHO","CHUPAMARCA","CHURCAMPA","COLCABAMBA","CONGALLA","CÓRDOVA","COSME","CUENCA","DANIEL HERNÁNDEZ","EL CARMEN","HUACHOCOLPA","HUACHOS","HUANCAVELICA","HUANDO","HUARIBAMBA","HUAYLLAHUARA","HUAYLLAY GRANDE","HUAYTARA","IZCUCHACA","JULCAMARCA","LA MERCED","LAMBRAS","LARAMARCA","LARIA","LIRCAY","LOCROJA","MANTA","MARCAS","MARISCAL CÁCERES","MOLLEPAMPA","MOYA","NUEVO OCCORO","ÑAHUIMPUQUIO","OCOYO","PALCA","PAMPAS","PAUCARA","PAUCARBAMBA","PAZOS","PICHOS","PILPICHACA","POMACOCHA","QUERCO","QUICHUAS","QUITO-ARMA","ROSARIO","SALCABAMBA","SALCAHUASI","SAN ANTONIO DE ANTAPARCO","SAN ANTONIO DE CUSICANCHA","SAN FRANCISCO DE SANGAYAICO","SAN ISIDRO","SAN JUAN","SAN MARCOS DE ROCCHAC","SAN PEDRO DE CORIS","SANTIAGO DE CHOCORVOS","SANTIAGO DE QUIRAHUARA","SANTIAGO DE TUCUMA","SANTO DOMINGO DE CAPILLAS","SECCLLA","SURCUBAMBA","TANTARA","TICRAPO","TINTAY PUNCU","VILCA","YAULI"],
    HUÁNUCO: ["AMARILIS","AMBO","APARICIO POMARES","ARANCAY","BAÑOS","CAHUAC","CANCHABAMBA","CASTILLO GRANDE","CAYNA","CHAGLLA","CHAVÍN DE PARIARCA","CHAVINILLO","CHINCHAO","CHOLON","CHORAS","CHUQUIS","CHURUBAMBA","COCHABAMBA","CODO DEL POZUZO","COLPAS","CONCHAMARCA","DANIEL ALOMÍA ROBLES","HERMÍLIO VALDIZAN","HONORIA","HUACAR","HUACAYBAMBA","HUACRACHUCO","HUANUCO","JACAS CHICO","JACAS GRANDE","JESÚS","JIRCAN","JIVIA","JOSÉ CRESPO Y CASTILLO","LA MORADA","LA UNIÓN","LLATA","LUYANDO","MARGOS","MARIANO DAMASO BERAUN","MARÍAS","MIRAFLORES","MOLINO","MONZÓN","OBAS","PACHAS","PAMPAMARCA","PANAO","PILLCO MARCA","PINRA","PUCAYACU","PUEBLO NUEVO","PUERTO INCA","PUNCHAO","PUÑOS","QUEROPALCA","QUISQUI (KICHKI)","QUIVILLA","RIPAN","RONDOS","RUPA-RUPA","SAN BUENAVENTURA","SAN FRANCISCO","SAN FRANCISCO DE ASÍS","SAN FRANCISCO DE CAYRAN","SAN MIGUEL DE CAURI","SAN PABLO DE PILLAO","SAN PEDRO DE CHAULAN","SAN RAFAEL","SANTA MARÍA DEL VALLE","SANTA ROSA DE ALTO YANAJANCA","SHUNQUI","SILLAPATA","SINGA","TANTAMAYO","TOMAY KICHWA","TOURNAVISTA","UMARI","YACUS","YANAS","YARUMAYO","YUYAPICHIS"],
    ICA: ["ALTO LARAN","CHANGUILLO","CHAVIN","CHINCHA ALTA","CHINCHA BAJA","EL CARMEN","EL INGENIO","GROCIO PRADO","HUANCANO","HUMAY","ICA","INDEPENDENCIA","LA TINGUIÑA","LLIPATA","LOS AQUIJES","MARCONA","NASCA","OCUCAJE","PACHACUTEC","PALPA","PARACAS","PARCONA","PISCO","PUEBLO NUEVO","RÍO GRANDE","SALAS","SAN ANDRÉS","SAN CLEMENTE","SAN JOSÉ DE LOS MOLINOS","SAN JUAN BAUTISTA","SAN JUAN DE YANAC","SAN PEDRO DE HUACARPANA","SANTA CRUZ","SANTIAGO","SUBTANJALLA","SUNAMPE","TAMBO DE MORA","TATE","TUPAC AMARU INCA","VISTA ALEGRE"],
    JUNÍN: ["ACO","ACOBAMBA","ACOLLA","AHUAC","ANDAMARCA","APATA","CANCHAYLLO","CARHUAMAYO","CHACAPALPA","CHACAPAMPA","CHAMBARA","CHANCHAMAYO","CHICCHE","CHILCA","CHONGOS ALTO","CHONGOS BAJO","CHUPACA","COCHAS","COMAS","CONCEPCIÓN","COVIRIALI","CULLHUAS","CURICACA","EL MANTARO","EL TAMBO","HEROÍNAS TOLEDO","HUACHAC","HUALHUAS","HUAMALI","HUAMANCACA CHICO","HUANCAN","HUANCAYO","HUARICOLCA","HUASAHUASI","HUASICANCHA","HUAY-HUAY","HUAYUCACHI","INGENIO","JANJAILLO","JAUJA","JULCÁN","JUNIN","LA OROYA","LA UNIÓN","LEONOR ORDÓÑEZ","LLAYLLA","LLOCLLAPAMPA","MARCAPOMACOCHA","MARCO","MASMA","MASMA CHICCHE","MATAHUASI","MAZAMARI","MITO","MOROCOCHA","MUQUIYAUYO","NUEVE DE JULIO","ONDORES","ORCOTUNA","PACCHA","PALCA","PALCAMAYO","PAMPA HERMOSA","PANCAN","PANGOA","PARCO","PARIAHUANCA","PERENE","PICHANAQUI","PILCOMAYO","POMACANCHA","PUCARA","QUILCAS","RICRAN","RÍO NEGRO","RÍO TAMBO","SAN AGUSTÍN","SAN JERÓNIMO DE TUNAN","SAN JOSÉ DE QUERO","SAN JUAN DE ISCOS","SAN JUAN DE JARPA","SAN LORENZO","SAN LUIS DE SHUARO","SAN PEDRO DE CAJAS","SAN RAMÓN","SANTA BÁRBARA DE CARHUACAYAN","SANTA ROSA DE OCOPA","SANTA ROSA DE SACCO","SANTO DOMINGO DE ACOBAMBA","SAÑO","SAPALLANGA","SATIPO","SAUSA","SICAYA","SINCOS","SUITUCANCHA","TAPO","TARMA","TRES DE DICIEMBRE","ULCUMAYO","VIQUES","VITOC","VIZCATAN DEL ENE","YANACANCHA","YAULI","YAUYOS"],
    "LA LIBERTAD": ["AGALLPAMPA","ANGASMARCA","ASCOPE","BAMBAMARCA","BOLÍVAR","BULDIBUYO","CACHICADAN","CALAMARCA","CARABAMBA","CASA GRANDE","CASCAS","CHAO","CHARAT","CHEPEN","CHICAMA","CHILLIA","CHOCOPE","CHUGAY","COCHORCO","CURGOS","EL PORVENIR","FLORENCIA DE MORA","GUADALUPE","GUADALUPITO","HUAMACHUCO","HUANCASPATA","HUANCHACO","HUARANCHAL","HUASO","HUAYO","JEQUETEPEQUE","JULCAN","LA ESPERANZA","LAREDO","LONGOTEA","LUCMA","MACHE","MAGDALENA DE CAO","MARCABAL","MARMOT","MOCHE","MOLLEBAMBA","MOLLEPATA","OTUZCO","PACANGA","PACASMAYO","PAIJAN","PARANDAY","PARCOY","PATAZ","PIAS","POROTO","PUEBLO NUEVO","QUIRUVILCA","RÁZURI","SALAVERRY","SALPO","SAN JOSÉ","SAN PEDRO DE LLOC","SANAGORAN","SANTA CRUZ DE CHUCA","SANTIAGO DE CAO","SANTIAGO DE CHALLAS","SANTIAGO DE CHUCO","SARIN","SARTIMBAMBA","SAYAPULLO","SIMBAL","SINSICAP","SITABAMBA","TAYABAMBA","TRUJILLO","URPAY","USQUIL","VICTOR LARCO HERRERA","VIRU"],
    LAMBAYEQUE: ["CAÑARIS", "CAYALTI", "CHICLAYO", "CHOCHOPE", "CHONGOYAPE", "ETEN", "ETEN PUERTO", "FERREÑAFE", "ILLIMO", "INCAHUASI", "JAYANCA", "JOSÉ LEONARDO ORTIZ", "LA VICTORIA", "LAGUNAS", "LAMBAYEQUE", "MOCHUMI", "MONSEFU", "MORROPE", "MOTUPE", "NUEVA ARICA", "OLMOS", "OYOTUN", "PACORA", "PATAPO", "PICSI", "PIMENTEL", "PITIPO", "POMALCA", "PUCALA", "PUEBLO NUEVO", "REQUE", "SALAS", "SAN JOSÉ", "SANTA ROSA", "SAÑA", "TUCUME", "TUMAN"],
    LIMA: ["ALIS", "ALLAUCA", "AMBAR", "ANCÓN", "ANDAJES", "ANTIOQUIA", "ARAHUAY", "ASIA", "ATAVILLOS ALTO", "ATAVILLOS BAJO", "ATE", "AUCALLAMA", "BARRANCA", "BARRANCO", "BREÑA", "CAJATAMBO", "CALANGO", "CALETA DE CARQUIN", "CALLAHUANCA", "CANTA", "CARABAYLLO", "CARAMPOMA", "CATAHUASI", "CAUJUL", "CERRO AZUL", "CHACLACAYO", "CHANCAY", "CHECRAS", "CHICLA", "CHILCA", "CHOCOS", "CHORRILLOS", "CIENEGUILLA", "COAYLLO", "COCHAMARCA", "COCHAS", "COLONIA", "COMAS", "EL AGUSTINO", "GORGOR", "HUACHO", "HUALMAY", "HUAMANTANGA", "HUAMPARA", "HUANCAPON", "HUANTAN", "HUAÑEC", "HUARAL", "HUAROCHIRI", "HUAROS", "HUAURA", "IMPERIAL", "INDEPENDENCIA", "JESÚS MARÍA", "LA MOLINA", "LA VICTORIA", "LACHAQUI", "LANGA", "LARAOS", "LEONCIO PRADO", "LIMA", "LINCE", "LOS OLIVOS", "LUNAHUANA", "LURIGANCHO", "LURIN", "MAGDALENA DEL MAR", "MALA", "MANAS", "MARIATANA", "MATUCANA", "MIRAFLORES", "NAVAN", "NUEVO IMPERIAL", "OYON", "PACARAN", "PACARAOS", "PACCHO", "PACHACAMAC", "PACHANGARA", "PARAMONGA", "PATIVILCA", "PUCUSANA", "PUEBLO LIBRE", "PUENTE PIEDRA", "PUNTA HERMOSA", "PUNTA NEGRA", "QUILMANA", "QUINOCAY", "RICARDO PALMA", "RÍMAC", "SAN ANDRÉS DE TUPICOCHA", "SAN ANTONIO", "SAN BARTOLO", "SAN BARTOLOMÉ", "SAN BORJA", "SAN DAMIAN", "SAN ISIDRO", "SAN JUAN DE LURIGANCHO", "SAN JUAN DE MIRAFLORES", "SAN JUAN DE TANTARANCHE", "SAN LORENZO DE QUINTI", "SAN LUIS", "SAN MARTÍN DE PORRES", "SAN MATEO", "SAN MATEO DE OTAO", "SAN MIGUEL", "SAN PEDRO DE CASTA", "SAN PEDRO DE HUANCAYRE", "SAN VICENTE DE CAÑETE", "SANTA ANITA", "SANTA CRUZ DE ANDAMARCA", "SANTA CRUZ DE COCACHACRA", "SANTA CRUZ DE FLORES", "SANTA EULALIA", "SANTA LEONOR", "SANTA MARÍA", "SANTA MARÍA DEL MAR", "SANTA ROSA", "SANTA ROSA DE QUIVES", "SANTIAGO DE ANCHUCAYA", "SANTIAGO DE SURCO", "SANTIAGO DE TUNA", "SANTO DOMINGO DE LOS OLLEROS", "SAYAN", "SUMBILCA", "SUPE", "SUPE PUERTO", "SURCO", "SURQUILLO", "TOMAS", "TUPE", "VEGUETA", "VILLA EL SALVADOR", "VILLA MARÍA DEL TRIUNFO", "ZÚÑIGA"],
    LORETO: ["ALTO TAPICHE", "ANDOAS", "BALSAPUERTO", "BARRANCA", "BELÉN", "CAHUAPANAS", "CAPELO", "CONTAMANA", "EMILIO SAN MARTÍN", "FERNANDO LORES", "INDIANA", "IQUITOS", "JEBEROS", "JENARO HERRERA", "LAGUNAS", "LAS AMAZONAS", "MANSERICHE", "MAQUIA", "MAZAN", "MORONA", "NAPO", "NAUTA", "PAMPA HERMOSA", "PARINARI", "PASTAZA", "PEBAS", "PUINAHUA", "PUNCHANA", "PUTUMAYO", "RAMÓN CASTILLA", "REQUENA", "SAN JUAN BAUTISTA", "SAN PABLO", "SANTA CRUZ", "SARAYACU", "TAPICHE", "TENIENTE CESAR LÓPEZ ROJAS", "TENIENTE MANUEL CLAVERO", "TIGRE", "TORRES CAUSANA", "TROMPETEROS", "URARINAS", "VARGAS GUERRA", "YAGUAS", "YAQUERANA", "YAVARI", "YURIMAGUAS"],
    "MADRE DE DIOS": ["FITZCARRALD", "HUEPETUHE", "IBERIA", "INAMBARI", "IÑAPARI", "LABERINTO", "LAS PIEDRAS", "MADRE DE DIOS", "MANU", "TAHUAMANU", "TAMBOPATA"],
    MOQUEGUA: ["CARUMAS", "CHOJATA", "COALAQUE", "CUCHUMBAYA", "ILO", "LA CAPILLA", "LLOQUE", "MATALAQUE", "MOQUEGUA", "OMATE", "PACOCHA", "PUQUINA", "QUINISTAQUILLAS", "SAMEGUA", "SAN ANTONIO", "SAN CRISTÓBAL", "TORATA", "UBINAS"],
    PASCO: ["CHACAYAN", "CHAUPIMARCA", "CHONTABAMBA", "CONSTITUCIÓN", "GOYLLARISQUIZGA", "HUACHON", "HUANCABAMBA", "HUARIACA", "HUAYLLAY", "NINACACA", "OXAPAMPA", "PALCAZU", "PAUCAR", "PAUCARTAMBO", "POZUZO", "PUERTO BERMÚDEZ", "SAN FRANCISCO DE ASÍS DE YARUSYACAN", "SAN PEDRO DE PILLAO", "SANTA ANA DE TUSI", "SIMON BOLÍVAR", "TAPUC", "TICLACAYAN", "TINYAHUARCO", "VICCO", "VILLA RICA", "YANACANCHA", "YANAHUANCA"],
    PIURA: ["AMOTAPE", "ARENAL", "AYABACA", "BELLAVISTA", "BELLAVISTA DE LA UNIÓN", "BERNAL", "BUENOS AIRES", "CANCHAQUE", "CASTILLA", "CATACAOS", "CHALACO", "CHULUCANAS", "COLAN", "CRISTO NOS VALGA", "CURA MORI", "EL ALTO", "EL CARMEN DE LA FRONTERA", "EL TALLAN", "FRIAS", "HUANCABAMBA", "HUARMACA", "IGNACIO ESCUDERO", "JILILI", "LA ARENA", "LA BREA", "LA HUACA", "LA MATANZA", "LA UNIÓN", "LAGUNAS", "LALAQUIZ", "LANCONES", "LAS LOMAS", "LOBITOS", "LOS ORGANOS", "MANCORA", "MARCAVELICA", "MIGUEL CHECA", "MONTERO", "MORROPON", "PACAIPAMPA", "PAIMAS", "PAITA", "PARIÑAS", "PIURA", "QUERECOTILLO", "RINCONADA LLICUAR", "SALITRAL", "SAN JUAN DE BIGOTE", "SAN MIGUEL DE EL FAIQUE", "SANTA CATALINA DE MOSSA", "SANTO DOMINGO", "SAPILLICA", "SECHURA", "SICCHEZ", "SONDOR", "SONDORILLO", "SULLANA", "SUYO", "TAMARINDO", "TAMBO GRANDE", "VEINTISEIS DE OCTUBRE", "VICE", "VICHAYAL", "YAMANGO"],
    PUNO: ["ACORA", "AJOYANI", "ALTO INAMBARI", "AMANTANI", "ANANEA", "ANAPIA", "ANTAUTA", "ARAPA", "ASILLO", "ATUNCOLLA", "AYAPATA", "AYAVIRI", "AZÁNGARO", "CABANA", "CABANILLA", "CABANILLAS", "CALAPUJA", "CAMINACA", "CAPACHICA", "CAPAZO", "CARACOTO", "CHUCUITO", "CHUPA", "COASA", "COATA", "COJATA", "CONIMA", "COPANI", "CORANI", "CRUCERO", "CUYOCUYO", "DESAGUADERO", "HUACULLANI", "HUANCANE", "HUATA", "HUATASANI", "ILAVE", "INCHUPALLA", "ITUATA", "JOSÉ DOMINGO CHOQUEHUANCA", "JULI", "JULIACA", "KELLUYO", "LAMPA", "LIMBANI", "LLALLI", "MACARI", "MACUSANI", "MAÑAZO", "MOHO", "MUÑANI", "NICASIO", "NUÑOA", "OCUVIRI", "OLLACHEA", "OLLARAYA", "ORURILLO", "PARATIA", "PATAMBUCO", "PAUCARCOLLA", "PEDRO VILCA APAZA", "PHARA", "PICHACANI", "PILCUYO", "PISACOMA", "PLATERIA", "POMATA", "PUCARA", "PUNO", "PUSI", "PUTINA", "QUILCAPUNCU", "ROSASPATA", "SAMAN", "SAN ANTON", "SAN GABAN", "SAN JOSÉ", "SAN JUAN DEL ORO", "SAN MIGUEL", "SAN PEDRO DE PUTINA PUNCO", "SANDIA", "SANTA LUCIA", "SANTA ROSA", "SANTIAGO DE PUPUJA", "SINA", "TARACO", "TILALI", "TIQUILLACA", "TIRAPATA", "UNICACHI", "USICAYOS", "VILQUE", "VILQUE CHICO", "YANAHUAYA", "YUNGUYO", "ZEPITA"],
    "SAN MARTÍN": ["AGUA BLANCA", "ALONSO DE ALVARADO", "ALTO BIAVO", "ALTO SAPOSOA", "AWAJUN", "BAJO BIAVO", "BARRANQUITA", "BELLAVISTA", "BUENOS AIRES", "CACATACHI", "CALZADA", "CAMPANILLA", "CASPISAPA", "CAYNARACHI", "CHAZUTA", "CUÑUMBUQUI", "EL ESLABÓN", "EL PORVENIR", "ELÍAS SOPLIN VARGAS", "HUALLAGA", "HUICUNGO", "HUIMBAYOC", "JEPELACIO", "JUAN GUERRA", "JUANJUÍ", "LA BANDA DE SHILCAYO", "LAMAS", "MORALES", "MOYOBAMBA", "NUEVA CAJAMARCA", "NUEVO PROGRESO", "PACHIZA", "PAJARILLO", "PARDO MIGUEL", "PICOTA", "PILLUANA", "PINTO RECODO", "PISCOYACU", "POLVORA", "POSIC", "RIOJA", "RUMISAPA", "SACANCHE", "SAN ANTONIO", "SAN CRISTÓBAL", "SAN FERNANDO", "SAN HILARIÓN", "SAN JOSÉ DE SISA", "SAN MARTÍN", "SAN PABLO", "SAN RAFAEL", "SAN ROQUE DE CUMBAZA", "SANTA LUCIA", "SANTA ROSA", "SAPOSOA", "SAUCE", "SHAMBOYACU", "SHAPAJA", "SHATOJA", "SORITOR", "TABALOSOS", "TARAPOTO", "TINGO DE SAPOSOA", "TOCACHE", "TRES UNIDOS", "UCHIZA", "YANTALO", "YORONGOS", "YURACYACU", "ZAPATERO"],
    TACNA: ["ALTO DE LA ALIANZA", "CALANA", "CAMILACA", "CANDARAVE", "CIUDAD NUEVA", "CORONEL GREGORIO ALBARRACÍN LANCHIPA", "CURIBAYA", "HÉROES ALBARRACÍN", "HUANUARA", "ILABAYA", "ITE", "LA YARADA LOS PALOS", "LOCUMBA", "PACHIA", "PALCA", "POCOLLAY", "QUILAHUANI", "SAMA", "SITAJARA", "SUSAPAYA", "TACNA", "TARATA", "TARUCACHI", "TICACO"],
    TUMBES: ["AGUAS VERDES", "CANOAS DE PUNTA SAL", "CASITAS", "CORRALES", "LA CRUZ", "PAMPAS DE HOSPITAL", "PAPAYAL", "SAN JACINTO", "SAN JUAN DE LA VIRGEN", "TUMBES", "ZARUMILLA", "ZORRITOS"],
    UCAYALI: ["ALEXANDER VON HUMBOLDT", "BOQUERON", "CALLERIA", "CAMPOVERDE", "CURIMANA", "HUIPOCA", "IPARIA", "IRAZOLA", "MANANTAY", "MASISEA", "NESHUYA", "NUEVA REQUENA", "PADRE ABAD", "PURUS", "RAYMONDI", "SEPAHUA", "TAHUANIA", "YARINACOCHA"]
}; 

$(function () {
    ui();
    events();
});

let ui = function () {
    $('#colegio').select2({
        placeholder: "Buscar colegio",
    });

    $('#region').select2({
        placeholder: "Todos", // Texto de placeholder en el campo de búsqueda
    });

    $('#distrito').select2({
        placeholder: "Todos", // Texto de placeholder en el campo de búsqueda
    });

    $('#ugel').select2({
        placeholder: "Buscar UGEL", // Texto de placeholder en el campo de búsqueda
    });
};

let events = function () {
    cargarDataExcel();

    $("#colegio").on("change", function () {
        const selectedColegio = $("#colegio").val();
        //console.log(selectedColegio);

        let colegioExiste = false;

        if (selectedColegio === "todos") {
            $("#region").val("todos");
            $("#region").change();
            loadDistritoOptionsBasedOnRegion();
            $("#distrito").val("todos");
            $("#distrito").change();
        }else{
            for (const objetoColegio of excelData) {
                if (objetoColegio.Colegio === selectedColegio) {
                    colegioExiste = true;
                    //console.log('Existe!');
                    break; // Si se encuentra una coincidencia, puedes salir del bucle.
                }
            };
    
            if (colegioExiste) {
                const colegiosFiltrados = excelData.filter((objetoColegio) => objetoColegio.Colegio === selectedColegio);
                //console.log(colegiosFiltrados);
                $("#region").val(colegiosFiltrados[0].Region);
                $("#region").change();
                loadDistritoOptionsBasedOnRegion();
                $("#distrito").val(colegiosFiltrados[0].Distrito);
                $("#distrito").change();
              } else {
                //console.log("El colegio no existe en la lista de objetos.");
              }
        };

        // Aplica automáticamente los filtros
        applyFilters();
    });

    $("#region").on("change", function () {
        loadDistritoOptionsBasedOnRegion();
    });

    $toggleButton.on("click", function () {
        if ($advancedSearch.hasClass("hidden")) {
            $advancedSearch.removeClass("hidden");
        } else {
            $advancedSearch.addClass("hidden");
        }
    });

    $advancedSearchInputs.on("change", applyFilters);

    $(document).on('click', '#prev-page', function () {
        displayResults(currentPage - 1);
    });

    $(document).on('click', '#next-page', function () {
        displayResults(currentPage + 1);
    });

    $('#buscar').on('click', applyFilters);
};

function cargarDataExcel(){
    fetch('https://d1ts5g4ys243sh.cloudfront.net/proyectos_especiales_prod/especiales-multimedia/filtro-busqueda/data-denuncias-5.xlsx?v5')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            excelData = XLSX.utils.sheet_to_json(worksheet);
            // Llama a la función para cargar las opciones del campo "Colegio"
            loadColegioOptions(excelData);
            //console.log(excelData);
        });
};

function loadColegioOptions(data) {
    // Crea un conjunto para almacenar nombres de colegios únicos
    const uniqueColleges = new Set();

    // Recorre los datos de Excel y agrega nombres de colegios al conjunto
    data.forEach(row => {
        uniqueColleges.add(row['Colegio']);
    });

    // Elimina las opciones actuales (excepto "Todos")
    $("#colegio option:not(:first-child)").remove();

    // Agrega las opciones basadas en los nombres de colegios únicos
    uniqueColleges.forEach(colegioName => {
        const option = new Option(colegioName, colegioName);
        $("#colegio").append(option);
    });

};

function loadDistritoOptionsBasedOnRegion() {
    const regionSeleccionada = $("#region").val();

    // Limpia las opciones actuales
    $("#distrito option:not(:first-child)").remove();

    if (regionSeleccionada === "todos") {
        // Si se selecciona "todos" en la región, muestra todos los distritos disponibles
        const todosLosDistritos = Object.values(distritosPorRegion).flat();
        todosLosDistritos.forEach(distrito => {
            const option = new Option(distrito, distrito);
            $("#distrito").append(option);
        });
    } else {
        // Filtra los distritos basados en la región seleccionada y cárgalos
        const distritosFiltrados = distritosPorRegion[regionSeleccionada];
        distritosFiltrados.forEach(distrito => {
            const option = new Option(distrito, distrito);
            $("#distrito").append(option);
        });
    }
};

const applyFilters = () => {
    currentPage = 1;
    const colegio = $('#colegio').val();
    const distrito = $('#distrito').val();
    const region = $('#region').val(); // Usamos el valor seleccionado de la región

    const fechaDelCaso = $('#fecha-del-caso').val();
    const ugel = $('#ugel').val();
    const gestion = $('#gestion').val();
    const nivel = $('#nivel').val();
    const tipoAgresor = $('#tipo-de-agresor').val();

    filteredData = excelData.filter(row =>
        (colegio === "todos" || row['Colegio'] === colegio) &&
        (distrito === "todos" || row['Distrito'] === distrito) &&
        (region === "todos" || row['Region'] === region) &&
        (fechaDelCaso === "todos" || row['Fecha del caso'] === fechaDelCaso) &&
        (ugel === "todos" || row['Ugel'] === ugel) &&
        (gestion === "todos" || row['Gestión'] === gestion) &&
        (nivel === "todos" || row['Nivel'] === nivel) &&
        (tipoAgresor === "todos" || row['Tipo de agresor'] === tipoAgresor)
    );
    //console.log(filteredData);
    // Muestra los resultados en la interfaz
    displayResults(currentPage);
};

function displayResults(page) {
    const resultContainer = $('.box-resultado');
    const paginationInfo = $('.page-info');
    const totalCasosElement = $('#total-casos');

    clearResults(resultContainer);

    if (filteredData.length > 0) {
        const maxPage = Math.ceil(filteredData.length / resultsPerPage);

        if (page < 1) {
            page = 1;
        } else if (page > maxPage) {
            page = maxPage;
        }

        const startIndex = (page - 1) * resultsPerPage;
        const endIndex = startIndex + resultsPerPage;
        const paginatedResults = filteredData.slice(startIndex, endIndex);

        paginatedResults.forEach((result, index) => {
            const resultContainer = createResultContainer(result, index + 1 + (page - 1) * resultsPerPage);
            $('.box-resultado').append(resultContainer);
        });

        currentPage = page;

        $prevPageButton.prop('disabled', currentPage === 1);
        $nextPageButton.prop('disabled', currentPage === maxPage);

        $('.pagination').css('display', 'block');

        paginationInfo.text(`Página ${currentPage} de ${maxPage}`);

        totalCasosElement.css('display', 'block');

        if (filteredData.length === 1) {
            totalCasosElement.html(`<p><span>Hay:</span> ${filteredData.length} resultado</p>`);
        } else {
            totalCasosElement.html(`<p><span>Hay:</span> ${filteredData.length} resultados</p>`);
        }
        totalCasosElement.addClass('total-casos');
    } else {
        const noResultsMessage = $('<div>No se encontraron resultados</div>');
        resultContainer.append(noResultsMessage);

        $('.pagination').css('display', 'none');

        paginationInfo.text('');

        totalCasosElement.css('display', 'none');
    }
};

function clearResults() {
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
};

function createResultContainer(result, index) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');

    const heading = document.createElement('h2');
    heading.textContent = `Resultado ${index}`;
    resultContainer.appendChild(heading);

    // Crea elementos para mostrar los detalles del resultado y agrégalos al contenedor
    const colegioElement = createResultElement('Colegio', result['Colegio'], 'label-especial');
    resultContainer.appendChild(colegioElement);

    // Resultado: Distrito
    const distritoElement = createResultElement('Distrito', result['Distrito'], 'label-especial');
    resultContainer.appendChild(distritoElement);

    // Resultado: Región
    const regionElement = createResultElement('Region', result['Region'], 'label-especial');
    resultContainer.appendChild(regionElement);

    // Resultado: Ugel
    const ugelElement = createResultElement('Ugel', result['Ugel'], 'label-especial');
    resultContainer.appendChild(ugelElement);

    // Resultado: Gestión
    const gestionElement = createResultElement('Gestión', result['Gestión'], 'label-especial');
    resultContainer.appendChild(gestionElement);

    // Resultado: Nivel
    const nivelElement = createResultElement('Nivel', result['Nivel'], 'label-especial');
    resultContainer.appendChild(nivelElement);

    // Resultado: Número de casos por colegio
    //const numeroDeCasosElement = createResultElement('Número de casos', result['Número de casos']);
    //resultContainer.appendChild(numeroDeCasosElement);

    // Resultado: Tipo de agresor
    const tipoDeAgresorElement = createResultElement('Tipo de agresor', result['Tipo de agresor'], 'label-especial');
    resultContainer.appendChild(tipoDeAgresorElement);

    // Resultado: Número de casos de violencia psicológica
    const numeroDeCasosViolenciaPsicologicaElement = createResultElement('Nº de casos de violencia Psicológica', result['Casos de violencia psicologica'], 'label-especial');
    resultContainer.appendChild(numeroDeCasosViolenciaPsicologicaElement);

    // Resultado: Número de casos de violencia física
    const numeroDeCasosViolenciaFisicaElement = createResultElement('Nº de casos de violencia Física', result['Casos de violencia fisica'], 'label-especial');
    resultContainer.appendChild(numeroDeCasosViolenciaFisicaElement);

    // Resultado: Número de casos de violencia sexual
    const numeroDeCasosViolenciaSexualElement = createResultElement('Nº de casos de violencia Sexual', result['Casos de violencia sexual'], 'label-especial');
    resultContainer.appendChild(numeroDeCasosViolenciaSexualElement);

    // Resultado: Atención en proceso
    const atencionEnProcesolElement = createResultElement('Atención en proceso', result['Atención en proceso'], 'label-especial');
    resultContainer.appendChild(atencionEnProcesolElement);

    // Resultado: Atención finalizada
    const atencionFinalizadalElement = createResultElement('Atención finalizada', result['Atención finalizada'], 'label-especial');
    resultContainer.appendChild(atencionFinalizadalElement);

    // Resultado: Observado por Ugel
    const ObservadoPorUgelElement = createResultElement('Observado por UGEL', result['Observado por UGEL'], 'label-especial');
    resultContainer.appendChild(ObservadoPorUgelElement);

    // Resultado: Pendiente de atención por la IE
    const PendienteDeAtencionlElement = createResultElement('Pendiente de atención por la IE', result['Pendiente de atención por la IE'], 'label-especial');
    resultContainer.appendChild(PendienteDeAtencionlElement);

    return resultContainer;
};

// Esta función crea un elemento para mostrar un detalle del resultado
function createResultElement(label, value, labelClass) {
    const element = document.createElement('div');

    const labelElement = document.createElement('span');
    labelElement.textContent = label + ': ';
    
    if (labelClass) {
        labelElement.classList.add(labelClass);
    }

    element.appendChild(labelElement);

    const valueElement = document.createElement('span');
    valueElement.textContent = value;
    element.appendChild(valueElement);
    
    return element;
};