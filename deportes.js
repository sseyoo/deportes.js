(function() {

// Ejemplo de plugin con lista estática

var init = {
	head : 'DEPORTES',	// Nombre que aparecera en la lista de plugins
	name : 'inicio',					// No modificar. Indica que es la cabecera del plugin
	type : 'lista',					// Indica el estilo a aplicar. En este caso es una lista de nombres sencilla
	max_screen : 8,					// Numero de elementos que se muestran
	data : null,						// No modificar
	play : false,					// Indica si la lista contiene objetos reproducibles
	options: {						// No modificar 
		base_url : '',
	},
	objects :  [					// Lista de objetos que se mostraran
		{									
			name : 'DEPORTES con ACESTREAM 8-)',	// Nombre que se muestra para este objeto - OJO: No es el identificador (vease linea 23)
			image : null,			// Imagen que se muestra para este objeto (si fuese necesario)
			info : null,	// Info que se muestra para este objeto (si fuese necesario)
			navigation : {
				play : false,			// Indican los parametros de actuacion para este elemento. 
				next : 'seccion1',		// Parametro de actuacion para este elemento. Es una clave de debe
								// ser exactamente igual al objeto que define el siguiente paso (véase 'var seccion1')
				prev : null,			// Indica de donde viene para poder volver a la pantalla anterior. 
			},
		},
	
	],
	navigation : {
		play : false,
		next : false,
		prev : false,
	},
};

var seccion1 = {						// Objeto que define la lista
	name : 'seccion1',					// Clave unica que identifica al elemento
	type : 'list_cover_matrix',				// Indica el estilo a aplicar. En este caso es una lista de los carteles de las peliculas
	max_screen : 14,					// Numero maximo de elementos (NO MODIFICAR PARA ESTE CASO)
	data : null,							// No modificar
	play : false,							// No modificar
	options: {							// No modificar
		base_url : '',
	},
	objects :  [
		

{
			name : 'La liga Tv',
			image : 'http://i.ytimg.com/vi/OfyLSV1wnwo/maxresdefault.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor 1',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=8ace6284a9a43951cc5ffd8d212cdde3bd233e9a'],
				},
				
				
			],
		},
		


{
			name : 'La Liga 1080',
			image : 'http://files.laliga.es/seccion_logos/laliga-v-1200x1200.png',
			description : undefined,
			links : [
				
				{
					name: 'Servidor 1',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=167e3b44a520cd76d4372f6d30fe6d7ccd524175'],
				},
				
				
			],
		},
	


{
			name : 'La Liga 720',
			image : 'http://www.movistar.es/estaticos/imagenes/tv-ocio/imagenes/logos-tv/140x114/movistar-futbol.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=df139bbcd7ae6825b46d5955c52d639f1215346a'],
				},
			],
		},
{
			name : 'Eurosport 1',
			image : 'http://allfootballvideo.com/images/channel-logo/eurosp1.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=40da37534656efcc6179c1b7693335d5e8212e43'],
				},
			],
		},

{
			name : 'Eurosport 2',
			image : 'http://www.movistar.es/estaticos/imagenes/tv-ocio/imagenes/logos-tv/140x114/eurosport2.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=1954779c721fc7d87eb6d7df7ab11bf751cebb3b'],
				},
			],
		},

{
			name : 'Gol Tv',
			image : 'http://estaticos.elperiodico.com/resources/jpg/5/5/logo-gol-television-canal-mediapro-deportes-1464801898055.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=49c35606668ebf7a895434ec4c9243a163d87718'],
				},
			],
		},

{
			name : 'Movistar Deportes',
			image : 'http://vignette3.wikia.nocookie.net/logopedia/images/c/c3/MovistarDeportes1.png/revision/latest?cb=20160818140254',
			description : undefined,
			links : [
				{
					name: 'Servidor 1',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=49acacbbbcf33be6e843958ceedc7da8dd4f1486'],
				},
				{
					name: 'Servidor 2',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=c47f756750190e4b2a9eefe8afdac48a2203b8d6'],
				},
			],
		},

{
			name : 'Movistar Campeones',
			image : 'http://vignette1.wikia.nocookie.net/logopedia/images/6/63/MovistarDeportes2.png/revision/latest?cb=20160818140550',
			description : undefined,
			links : [
				{
					name: 'Servidor 1',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=aedf221240a0f8513d90b555bf1b6e5306ac1e76'],
				},
				{
					name: 'Servidor 2',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=9b76d0739f87555ccd3f42fc8e548762a0b94c28'],
				},
			],
		},


{
			name : 'DAZN 1',
			image : 'http://www.movistar.es/estaticos/imagenes/tv-ocio/imagenes/logos-tv/140x114/movistar-formula1.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=ad7973215880d12940a75699aa7044839a13a6f1'],
				},
			],
		},
		
{
			name : 'DAZN 2',
			image : 'http://www.movistar.es/estaticos/imagenes/tv-ocio/imagenes/logos-tv/140x114/movistar-motogp.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=b402c07f2e8bfe253815e08df0b7e0a6b0fad8e3'],
				},
			],
        },
		
{
			name : 'Movistar Golf',
			image : 'http://vignette2.wikia.nocookie.net/logopedia/images/e/ef/MovistarGolf.png/revision/latest?cb=20160818141050',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=4f945b0ba4206fa2676b61e9eaa465ac3dcc8122'],
				},
			],
		},
		

	
		
		{
			name : 'VAMOS',
			image : 'http://upload.wikimedia.org/wikipedia/commons/f/f3/Realmadridtv.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=069431a1199eb2545a14c0a724095e57bdc58e9c'],
				},
			],
		},

{
			name : 'EVENTO 1',
			image : 'http://www.chefuri.com/v4/fotos/chefuritv/c-BarcaTV.jpg',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=a78e3ac4f4ff5c2d98bd47dc67d8c854a69937bf'],
				},
			],
		},
		

{
			name : 'EVENTO 2',
			image : 'http://todocanales.net/wp-content/uploads/2014/05/Win-sports.png',
			description : undefined,
			links : [
				{
					name: 'Servidor',
					url: ['http://192.168.1.22:6878/ace/manifest.m3u8?id=04bcc0f6bf3f88e208d5dedd314c24f9566c9430'],
				},
			],
		},
		



	],
	navigation : {
		play : false,
		next : undefined,	// Hace que procese los contenidos como lista estática
		prev : 'inicio',
	},
};




var final_node = { 			// No modificar. Necesario para almacenar informacion temporal
	name : 'final_node',
	data : null,
	max_screen : 12,
	type : 'final',
	options : {
    base_url : '',
    direct_play : true,  // No queremos browser. Queremos que los enlaces se reproduzcan directamente
    stream : false,    // No necesitamos descarga progresiva, al ser vídeos no alojados en servidores de descarga
  },
	navigation : {
		play : true,
		next : 'play',
		prev : '',
	},
};
					// MUY IMPORTANTE
var blusens = new Array();		// Es necesario definir un array con el nombre que sea para almacenar todos los objetos			
blusens.push(init);			// que describen el funcionamiento de nuestro plugin 
blusens.push(seccion1);
blusens.push(final_node);
main_list.push(blusens);		// Una vez que lo tenemos hay que meterlo en la variable main_list
internal_ready();			// Avisamos a la aplicacion de que nuestro plugin esta listo

})();