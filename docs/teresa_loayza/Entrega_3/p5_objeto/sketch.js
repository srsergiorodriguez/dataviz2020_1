
let Objeto_Teresa = {
  nombre: "Teresa", // String
  apellidos: "Loayza Sánchez", // String
  gafas: true, // Boolean
  hijos: true, // Boolean
  edad_hija: 8,
  nombre_hija: "Luciana",
  color_favorito_hija: [115, 6, 251],
  altura: 1.66,
  color_ojos: (128, 128, 0),
  directores_cine: ["Bergman", "Wenders", "Allen", "Gondry", "Miyazaki", "Almodóvar"], // String Array - lista de directores más vistos
  animales_horoscopo: ["dragón", "león"],
  tolerancia_picante: 8.7, // Number - En escala de 0.0 a 10.0
  lugar_nacimiento_lat: 0.60,
  lugar_nacimiento_long: -74.08, // Number array - Coordenadas latitud y longitud 
  lugar_favorito_lat: 52.51,
  lugar_favorito_long: 13.32, // Number array - Coordenadas latitud y longitud 
  condimentos: ["mostaza", "pimienta", "páprika", "panka", "merquén"], // String array - condimentos favoritos
  mascotas_en_el_cielo: [["perros", 2], ["gatos", 1]["pájaros", 3], ["tortugas", 1], ["conejos", 2], ["peces", 3]], // String array / number - Tipo de mascota y cantidad
  paleta_ropa: [
    [
      0,
      0,
      0
    ],
    [
      255,
      255,
      255
    ],
    [
      220,
      214,
      213
    ],
    [
      231,
      222,
      25
    ],
    [
      25,
      219,
      198
    ],
    [
      249,
      182,
      3
    ],
    [
      44,
      129,
      21
    ],
    [
      180,
      156,
      76
    ],
    [
      188,
      35,
      222
    ],
    [
      185,
      16,
      98
    ]
  ]
}

let personaje = Objeto_Teresa;

function setup() {
  createCanvas(500, 700);
  background(0);
  push();
  translate(width / 2, height / 2);
  fill(211, 84, 0);
  ellipse(20, 0, 10);
  fill(200, 200, 200);
  ellipse(50, 70, 60);
  fill(251, 101, 6);
  rect(personaje.lugar_favorito_lat * 3, personaje.lugar_nacimiento_lat * 3, personaje.lugar_favorito_long * 3, personaje.lugar_nacimiento_long * 3); //Rectángulo con coordenadas lugar nacimiento y favorito
  line(width / 2, height / 2, 0, 0);

  if (personaje.gafas) {
    fill (256);
    line (60, -60, -60, -60);
    ellipse (60, -60, 90);
    ellipse (-60, -60, 90);
    ellipse (60, -60, 80);
    ellipse (-60, -60, 80);
    ellipse (60, -60, 70);
    ellipse (-60, -60, 70);
    ellipse (60, -60, 60);
    ellipse (-60, -60, 60);
    ellipse (60, -60, 50);
    ellipse (-60, -60, 50);
    ellipse (60, -60, 40);
    ellipse (-60, -60, 40);
    ellipse (60, -60, 30);
    ellipse (-60, -60, 30);
  }
  pop();

  // Aqui no quiere dibujar
  push ();
  fill (personaje.color_ojos);
  ellipse (60, -60, 30);
  ellipse (-60, -60, 30);
  pop ();

  // hija
  push();
  if (personaje.hijos) {
    fill(personaje.color_favorito_hija); //Relleno con color favorito hija
    triangle(personaje.edad_hija*2, personaje.edad_hija, -personaje.edad_hija*13, personaje.edad_hija*40, personaje.edad_hija*10, personaje.edad_hija*11); //Triéngulo con edad hija
  }
  // Aquì no quiere dibujar
    fill (250, 250, 0);
    triangle (0, 0, personaje.edad_hija*4, personaje.tolerancia_picante*4, personaje.estatura*5);
  pop();

  //Paleta de ropa
  push();
  fill(personaje.paleta_ropa [3]);
  ellipse (200, 140, 30, 40);
  fill(personaje.paleta_ropa [4]);
  ellipse (150, 200, 30, 40);
  fill(personaje.paleta_ropa [5]);
  ellipse (110, 260, 30, 40);
  fill(personaje.paleta_ropa [6]);
  ellipse (90, 320, 30, 40);
  fill(personaje.paleta_ropa [7]);
  ellipse (110, 380, 30, 40);
  fill(personaje.paleta_ropa [8]);
  ellipse (150, 440, 30, 40);
  fill(personaje.paleta_ropa [9]);
  ellipse (200, 500, 30, 40);
  pop();
}


function draw() {
    
}