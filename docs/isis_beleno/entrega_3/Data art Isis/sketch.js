//descripción humana
let isis= {
  genero: "mujer", // String Categorial Nominal
  edad: 40, // number numerical discrete
  identificacion: 22493628, // number
  profesion: "comunicadora", // String Categorical Nominal
  codigo_postal: 111211, // number nuemerical discrete
  protesis: false, // boolean categorial binomial
  peso: "68 kilogramos", // string 
  declara_renta: true, // boolean
  licencia_conducir: true,// boolean
  mascota: true, //boolean
  Publicaciones:["Colombia: crónicas de la sin razpón pura", "Firmas de abogados en Colombia"],// String Array
  viajes:["Malasia", "Alemania", "Singapur", "Hong Kong", "Tailandia", "Ecuador", "Venezuela"], // String Array

}
//base de datos viajes
let lista =  [
  {id: 0, pais: "Malasia", año: 2012, visa: true },
  {id: 1, pais: "Singapur", año: 2011, visa: false},
  {id: 2, pais: "Hong Kong", año: 2013, visa: false},
  {id: 3, pais: "Tailandia", año: 2013, visa:  true},
  {id: 4, pais: "Ecuador", año: 2008, visa: false}
]
//base de datos de mascotas
let perros = [
  {id: 0, nombre: "Amadeus", edad: 7, vivo: true},
  {id: 1, nombre: "Júpiter", edad: 12, vivo: false},
  {id: 2, nombre: "Lalo", edad: 15, vivo: false},
  {id: 3, nombre: "Toto", edad: 20, vivo:  false},
  {id: 4, nombre: "Yanky", edad: 2, vivo: true}
]
  
let mujer = true; 


// creo el canvas y defino el color del fondo

function setup() {
  createCanvas (720,400);
  background (0)
}

// empieza la obra de arte con los condicionales

function draw(){

  if (mujer) {
    background(128,0,128);
    } 
      else if(!mujer){
    background (255,215,0);
    }

  
  if ("68 kilogramos") // las figuras según mi peso
  {
  background(128,0,128);
  noStroke();

  fill(0);
  triangle(100, 100, 100, 460, 143, 460);

  fill(0);
  rect(81, 81, 63, 63);

  fill(0);
  quad(189, 18, 216, 18, 216, 360, 144, 360);


// un condicional que crea un triángulo a partir de un boolean de la base de datos de viajes

  if (lista[3].visa){
    fill(0,255,0)
    triangle(600, 300, 520, 300, 510, 240);
  }
  else if(!lista[3].visa){
    background (0);
  }
 // creo un ramdon a partir de la lista de mis perros
  
    let i;
    let r, g, b, tamano, ubicacionx, ubicaciony;
    for (i=0;i<perros.length; i++) {
    r = random(255);
    g = random(255);
    b = random(255);
    tamano= random(100);
    ubicacionx= random(250)
    ubicaciony= random(250)
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127);
    ellipse(ubicacionx, ubicaciony, tamano, tamano)
    
    } 
    
      
      
       
    
      



}

}

