var missions_fi = [
	{
		slug: 'intro',
		size: 7,
		desc: "Taulukon himmeät ruudut muodostavan hymiön. Värjää kuvio valkoiseksi ruutu(x,y)-funktioilla.",
		hints: ["Kokeile vaikka piirtää toinen silmä ruutu(4,1)-funktiokutsulla!", "Ensimmäinen numero (argumentti) aaltosulkujen sisällä siis kertoo X:n ja toinen Y:n. Muista erotella ne pilkulla."],
		func: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			ruutu(2,3);
			ruutu(3,3);
			ruutu(4,3);
		},
		example: function() {
			ruutu(2,1);
		}
	},
	{
		slug: 'while_intro',
		desc: "Sehän oli työlästä! Monta peräkkäistä ruutua piirtäessä on helpompi käyttää while-silmukkaa. Kokeile muuttaa koodin numeroita hahmottaaksesi koodin paremmin, sen jälkeen voit vapaasti siirtyä seuraavaan tehtävään.",
		func: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			var x = 2;
			while(x <= 4) {
				ruutu(x, 3);
				x += 1;
			}
		},
		example: function() {
			// piirretään silmät
			ruutu(2,1);
			ruutu(4,1);
			
			// aloitetaan suun piirtäminen x:n kordinaatista 2
			var x = 2;
			while(x <= 4) { // niin kauan kuin x on pienempi tai yhtäsuuri kuin 4 -->
				ruutu(x, 3); //...niin piirretään ruutu x:n kohdalle
				x += 1; 	//...ja siirrytään yksi ruutu oikealle (plussataan yksi)
			}
		}
	},
	{
		slug: 'mouth_wider',
		size: 7,
		desc: "Hymiön suu leveni. Muuta suun (while-silmukan) aloitus- ja lopetuskoordinaatteja niin että suusta tulee oikean pituinen!",
		hints: [
			'Suun ensimmäinen ruutu alkaa X:n koordinaatista 1, joten alussa on asetettava "var x = 1".',
			'Suu loppuu X:n koordinaatissa 5, joten haluamme piirtää ruutuja niin kauan kuin x on pienempi tai yhtäsuuri kuin 5 eli "while(x <= 5)"',
			''
			],
		func: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			var x = 1;
			while(x <= 5) {
				ruutu(x, 3);
				x += 1;
			}
		},
		example: "prev_example"
	},
	{
		slug: 'mouth_lower',
		size: 7,
		desc: "Muuta suun korkeutta!",
		func: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			ruutu(3,3);
			
			var x = 1;
			while(x <= 5) {
				ruutu(x, 5);
				x += 1;
			}
		},
		example: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			var x = 1;
			while(x <= 5) {
				ruutu(x, 3); //ruutu(x,y)
				x += 1;
			}
		}
	},
	{
		slug: 'for_intro',
		size: 7,
		desc: 'Tässä äskeinen while-silmukka on korvattu for-silmukalla, joka toimii täsmälleen samalla tavalla,mutta on nopeampi kirjoittaa. Molemmat määrittävät muuttujan (var x = 1;) ja  plussaavat sitä (x += 1;) niin kauan kuin ehto (x <= 5) on tosi. Muokkaa koodia hahmottaaksesi paremmin.',
		func: 'func_prev',
		example: function() {
			ruutu(2,1);
			ruutu(4,1);
			ruutu(3,3);
			
			// Uusi, helpommin kirjoitettava silmukka (joka tosin näyttää hämmentävältä):
			for(var x = 1; x <= 5; x+=1) {
				ruutu(x, 5);
			}
			/*
			Vanha, toiminnallisesti identtinen silmukka:
			var x = 1;
			while(x <= 5) {
				ruutu(x, 5); //ruutu(x,y)
				x += 1;
			}
			*/
		}
	},
	{
		slug: 'nose_thing',
		size: 7,
		desc: "Hymiön nenä kasvoi ja vei tilaa suulta. Tee suusta kapeampi ja liikuta sitä alemmas!",
		func: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			ruutu(3,3);
			ruutu(3,4);
			
			for(var x = 2; x <= 4; x+=1) {
				ruutu(x,6);
			}
		},
		example: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			ruutu(3,3);
			ruutu(3,4);
			
			// muokkaa suun koordinaatteja!
			for(var x = 1; x <= 5; x+=1) {
				ruutu(x,5); //ruutu(x,y);
			}
		}
	},
	{
		slug: 'equals',
		size: 7,
		desc: "Koitetaan tälla kertaa piirtää yhtä suuri kuin -merkki. Tarvitset kaksi ruutu(x,y)-funktiota, mutta pystyisiköhän tämän piirtämään vain yhdellä for-silmukalla?",
		func: function() {
			for(var x = 1; x <= 5; x+=1) {
				ruutu(x,2);
				ruutu(x,4);
			}
		},
		example: function() {
			for(var x = 2; x <= 4; x+=1) {
				ruutu(x,4);
			}
		}
	},
	{
		slug: 'plus',
		size: 7,
		desc: "Piirretään plus-merkki. Liikuta vaakasuora viiva paikoilleen. Mieti sen jälkeen miten pystyisit toteuttamaan pystysuoran viivan. Pystyisiköhän tämänkin suorittamaan vain yhdellä for-silmukalla?",
		func: function() {
			for(var x = 2; x <= 4; x+=1) {
				ruutu(x,3);
				ruutu(3,x);
			}
		},
		example: function() {
			for(var x = 1; x <= 5; x+=1) {
				ruutu(x,5);
			}
		}
		
	},
	{
		slug: 'box',
		size: 7,
		desc: "Piirretään laatikko. Koita suorittaa tehtävä korkeintaan kahdella for-silmukalla. Yhdelläkin on mahdollista (; <br>Huomaa että ruutu(x,y)-funktioista on tehty kommentteja, jotta näkisit kuvion paremmin. Ota kauttamerkit ( // ) pois, jotta ne muuttuvat taas koodiksi.",
		func: function() {
			for(var x = 1; x <= 5; x++) {
				ruutu(x, 1)
				ruutu(x, 5);
				
				ruutu(1, x);
				ruutu(5, x);
			}
		},
		example: function() {
			for(var k = 2; k <= 4; k+=1) {
				//ruutu(k,3);
				//ruutu(3,k);
			}
		}
	},
	{
		slug: 'line',
		size: 7,
		desc: "Hmmmm",
		hints: ['Eli x:n ja y:n pitäisi kasvaa samanaikaisesti O___o', 'Eli x on aina yhtäsuuri kuin y?', 'Mutta jos k on x niin mikä on y?'],
		func: function() {
			for(var k = 0; k <= 6; k+=1) {
				ruutu(k,k);
			}
		},
		example: function() {
			for(var k = 2; k <= 4; k+=1) {
				//ruutu(k,0);
			}
		}
	},
	{
		slug: 'char-x',
		size: 7,
		desc: 'Voit käyttää argumentissa laskusuoritusta esim. ruutu(x+3, 4), ruutu(x, 4-y), ruutu(k+3, k). Mikäköhän lasku tähän sopisi? <br> Varo kuitenkin piirtämästä ruudukon ulkopuolelle',
		func: function() {
			for(var k = 0; k <= 6; k+=1) {
				ruutu(k,k);
				ruutu(k, 6-k);
			} 
		},
		example: function() {
			for(var k = 0; k <= 6; k+=1) {
				ruutu(k,k);
			}
		}
	},
	{
		slug: 'happy',
		size: 7,
		desc: 'Voit käyttää argumentissa laskusuoritusta esim. ruutu(x+3, 4), ruutu(x, 4-y), ruutu(k+3, k). Tarvitset 4 ruutu(x,y)-funktiota.',
		func: function() {
			ruutu(2,1);
			ruutu(4,1);
			
			for(var k = 0; k <= 2; k+=1) {
				ruutu(3+k,5-k);
				ruutu(3-k,5-k);
			} 
		},
		example: function() {
			//ruutu(4,1);
			
			for(var k = 0; k <= 1; k+=1) {
				//ruutu(3+k,5-k);
			} 
		}
	},
	{
		slug: 'solid_box',
		size: 7,
		desc: "Silmukkaception?",
		func: function() {
			for(var x = 1; x <= 5; x+=1) {
				for(var y = 1; y <= 5; y+=1) {
					ruutu(x,y);
				}
			}
		},
		example: function() {
			for(var x = 1; x <= 5; x+=1) {
				//ruutu(x,1);
			}
		},
		hints: [
			"Jos jokaiseen x:n koordinaattiin piirtäisi pystysuoran viivan ruudun sijasta?",
			"For-silmukka for-silmukan sisällä? O___o"
		]
	},
	{
		slug: 'marble_flooring',
		size: 7,
		desc: "Marmorilattia",
		func: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=1) {
					ruutu(x,y);
				}
			}
		},
		example: function() {
			for(var x = 1; x <= 5; x+=1) {
				for(var y = 1; y <= 5; y+=1) {
					//ruutu(x,y);
				}
			}
		}
	},
	{
		slug: 'block_of_flats',
		size: 7,
		desc: "Kerrostalo",
		func: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=2) {
					ruutu(x,y);
				}
			}
		},
		example: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=1) {
					//ruutu(x,y);
				}
			}
		}
	},
	{
		slug: 'pillars',
		size: 7,
		desc: "Pylvässali",
		func: function() {
			for(var x = 0; x <= 6; x+=2) {
				for(var y = 0; y <= 6; y+=2) {
					ruutu(x,y);
				}
			}
		},
		example: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=2) {
					//ruutu(x,y);
				}
			}
		}
	},
	{
		slug: 'wire_basket',
		size: 7,
		desc: "Lankakori",
		func: function() {
			for(var a = 0; a <= 6; a+=2) {
				for(var b = 0; b <= 6; b+=1) {
					ruutu(a,b);
					ruutu(b,a);
				}
			}
		},
		example: function() {
			for(var a = 0; a <= 6; a+=1) {
				for(var b = 0; b <= 6; b+=2) {
					//ruutu(a,b);
				}
			}
		}
	},
	{
		slug: 'stairs',
		size: 7,
		desc: "Portaat.",
		func: function() {
			for(var y = 0; y <= 6; y+=1) {
				for(var x = 0; x <= y; x+=1) {
					ruutu(x,y);
				}
			}
		},
		example: function() {
			for(var y = 0; y <= 6; y+=1) {
				for(var x = 0; x <= 6; x+=1) {
					//ruutu(x,y);
				}
			}
		}
	},
	{
		slug: 'pyramid',
		size: 7,
		desc: "Pyramidi",
		func: function() {
			for(var y = 0; y <= 3; y+=1) {
				for(var x = -y; x <= y; x+=1) {
					ruutu(3+x,y);
				}
			}
		},
		example: function() {
			for(var y = 0; y <= 6; y+=1) {
				for(var x = 0; x <= y; x+=1) {
					//ruutu(x,y);
				}
			}
		}
	},
	{
		slug: 'tiles',
		size: 7,
		desc: "Vinoneliö",
		func: function() {
			for(var y = 0; y <= 3; y+=1) {
				for(var x = -y; x <= y; x+=1) {
					ruutu(3+x,y);
					ruutu(3+x,6-y);
				}
			}
		},
		example: function() {
			for(var y = 0; y <= 3; y+=1) {
				for(var x = -y; x <= y; x+=1) {
					//ruutu(3+x,y);
				}
			}
		},
	}
]

/*
	1. Käyttäjän koodi
	2. Esimerkkikoodi
	3. Haamukoodi (piirtää ruudukon)
	4. Tarkistajakoodi (etsii eroja)
	
	Haamukoodille kaksi tilaa
	 - Piirto: piirtää ruudulle
	 - Tarkastus: testaa jos ruutu(x,y) == true tai false
*/
/*
user_mode = "shadow" | "user" | "verification"

- shadow: func: piirtää taustalle
- user: piirtää näytölle
- verification: user_func: tarkistaa lopputuloksen

kirjasto.js initoi moodin ja gridin

ruutu():
- targetGrid
- drawMode: shadow, normal, none

vertaa gridejä

*/