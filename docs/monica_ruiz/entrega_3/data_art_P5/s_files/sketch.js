// Declaración de variables
// Tamaño Canvas
let miCanvas;
let mousePosicionX;
let mousePosicionY;
let ancho = 900;
let alto = 600;
let margenIzq = 100;
let margenDer = 80;
let margenArr = 50;
let margenAbj = 50;
let annoInicial = 1998;
let annoFinal;
let largoLinea = ancho - (margenIzq + margenDer);
let anchoLinea = alto - (margenAbj + margenArr + 380);
let fuente = "Helvetica";
let imgGato;
let imgPerro;
/*let mascotaPos = {
  x1: Number(),
  y1: Number(),
  x2: Number(),
  y2: Number()
};*/


let anouk = {
  nombre: "Anouk", // String Categórico
  edad: "5", // Number Numérico
  ano_adopcion: 2015, // number Numérico
  tipo: "gato", // String Categórico
  mascotaPos: [0,0,0,0]   // Array Numérico
};

let liz = {
  nombre: "Liz", // String Categórico
  edad: "2", // Number Numérico
  ano_adopcion: 2019, // number Numérico
  tipo: "gato", // String Categórico
  mascotaPos: [0,0,0,0]   // Array Numérico
};

let tinka = {
  nombre: "Tinka", // String Categórico
  edad: "4", // Number Numérico
  ano_adopcion: 2017, // number Numérico
  tipo: "gato", // String Categórico
  mascotaPos: [0,0,0,0]   // Array Numérico
};

let samuel = {
  nombre: "Samuel", // String Categórico
  edad: "9", // Number Numérico
  ano_adopcion: 2005, // number Numérico
  tipo: "perro", // String Categórico
  mascotaPos: [0,0,0,0]   // Array Numérico
};

let mrm = {
  nombre: "Mónica", // String Categórico
  apellidos: "Ruiz Muñoz", // String Categórico
  mascotas: [anouk, liz, tinka, samuel], // Array Objeto
  deportes: [
    ["natación", 1998],  //Array Categórico y Numérico
    ["atletismo",2010]], //Array Categórico y Numérico
  es_colombiana: true, // Boolean Categórico
  anos_empresa: 10, // Number Numérico
  estilo_cabello: "corto", // String Categórico
  hermana: "Sonia", // String 
  sobrinos: 3, // Number Numérico
  posicion_familia: 1, //String Ordinal
  come_carne: false // Boolean Categórico
};

// Pintar la línea de tiempo
function lineaTiempo () {
  // Definición de tamaño
  let x1Linea = margenIzq;
  let x2Linea = ancho - margenDer;
  let y1Linea = alto / 3;
  let y2Linea = ancho - margenAbj;
  // Dibujo línea de tiempo
  noStroke();
  fill(164);
  rect(x1Linea,y1Linea,largoLinea,anchoLinea);
  triangle(x1Linea + largoLinea, y1Linea, x1Linea + largoLinea + 30, y1Linea + (anchoLinea/2), x1Linea + largoLinea, y1Linea + anchoLinea);
  fill(241,237,226);
  triangle(x1Linea, y1Linea, x1Linea + 30, y1Linea + (anchoLinea/2) , x1Linea, y1Linea + anchoLinea);
  inicioFin (margenIzq,y1Linea + (anchoLinea/2));
}

// Pintar el título de la visualización
function titulo () {
  let fuenteTamano = 35;
  fill(43);
  textAlign(CENTER);
  textFont(fuente);
  textSize(fuenteTamano);
  text(mrm.nombre + " "+ mrm.apellidos, ancho / 2, margenArr);
}

// Pintar las etiquetas de inicio y fin de la línea de tiempo
function inicioFin( x, y) {
  let fuenteTamano = 18;
  let inicioLinea;
  let anoActual = annoFinal;
  fill(43);
  textFont(fuente);
  textSize(fuenteTamano);
  if (mrm.es_colombiana){
    inicioLinea = "Colombiana";
  } else {
    inicioLinea = "No Colombiana";
  }
  text(inicioLinea, x, y);
  text(anoActual, ancho - margenDer +30, y);
}

// Pintar mis intereses
function interes (x,y) {
  let tamanoInt = largoLinea * 0.6;
  let parteInt = tamanoInt / 22;
  let fuenteTamano = 18;
  let xInicial = margenIzq + (largoLinea * 0.4);
  let posicionX = xInicial;
  let y1Linea = alto / 3;
  fill(11,91,118);
  textFont(fuente);
  textSize(fuenteTamano);
  text("Mis intereses", 50 + x, y - 50);
  for (let i = 0; i < mrm.deportes.length; i++) {
    let deporte = mrm.deportes[i][0];
    let annoDeporte = mrm.deportes[i][1];
    posicionX = posicionX + parteInt * (annoDeporte - annoInicial);
    star(posicionX, y - 60, 5, 15, 5);
    circle(posicionX, y1Linea + (anchoLinea/2), 8);
    stroke(126);
    line(posicionX, y - 60, posicionX, y1Linea + (anchoLinea/2));
    textSize(fuenteTamano);
    text(deporte,posicionX,y - 80);
    textSize(fuenteTamano-5);
    text(annoDeporte,posicionX,y1Linea + (anchoLinea/2) + 20);
  }
}

// Pintar mis mascostas en mi vida
function mascotas (x,y) {
  let tamanoInt = largoLinea * 0.6;
  let parteInt = tamanoInt / 22;
  let fuenteTamano = 18;
  let xInicial = margenIzq + (largoLinea * 0.4);
  let posicionX = xInicial;
  let y1Linea = alto / 3;
  fill(150,16,75);
  textFont(fuente);
  textSize(fuenteTamano);
  text("Mis mascotas", 50 + x, y - 50) - margenArr;
  for (let i = 0; i < mrm.mascotas.length; i++) {
    let nombre = mrm.mascotas[i].nombre;
    let edad = mrm.mascotas[i].edad;
    let annoAdopcion = mrm.mascotas[i].ano_adopcion;
    let tipo = mrm.mascotas[i].tipo;
    posicionX = xInicial + parteInt * (annoAdopcion - annoInicial);
    console.log(tipo);
    if (tipo == 'perro'){
      image(imgPerro, posicionX - 15, y - 65,30,30);
    } else {
      image(imgGato, posicionX - 15, y - 65,30,30);
    }
    circle(posicionX, y1Linea + (anchoLinea/2), 8);
    stroke(126);
    line(posicionX, y - 60, posicionX, y1Linea + (anchoLinea/2));
    textSize(fuenteTamano -3);
    text(nombre,posicionX,y - 20);
    textSize(fuenteTamano-5);
    text(annoAdopcion,posicionX,y1Linea + (anchoLinea/2) + 20);
    mrm.mascotas[i].mascotaPos[0] = posicionX - 15;
    mrm.mascotas[i].mascotaPos[1] = y - 65;
    mrm.mascotas[i].mascotaPos[2] = posicionX + 15;
    mrm.mascotas[i].mascotaPos[3] = y - 20;
     
  }
}

// Pintar una estrella
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function preload() {
  imgGato = loadImage('gato.png');
  imgPerro = loadImage('perro.png');
}

function setup() {
  miCanvas= createCanvas (ancho, alto);
  background(241,237,226);
  annoFinal = year();
  
  // Ejecución de las funciones
  titulo();
  lineaTiempo();
  interes(100,alto/3);
  mascotas(100, alto - anchoLinea - margenAbj);
  //star(50, 50, 5, 15, 5);
  console.log(mrm.mascotas);
  
  // put setup code here
}

function toolTip(){
  
  
}

function draw() {
  mousePosicionX = 100;  
  mousePosicionY = 100;
  
  let mascotaX1;
  let mascotaY1;
  let mascotaX2;
  let mascotaY2;
  

  for (let i = 0; i < mrm.mascotas.length; i++) {
    mascotaX1 = mrm.mascotas[i].mascotaPos[0];
    mascotaY1 = mrm.mascotas[i].mascotaPos[1];
    mascotaX2 = mrm.mascotas[i].mascotaPos[2];
    mascotaY2 = mrm.mascotas[i].mascotaPos[3];
    textSize(15);
    if (mouseX >= mascotaX1 && mouseX <= mascotaX2 && mouseY >= mascotaY1 && mouseY <= mascotaY2) {
      //noStroke();
      fill(70,70,70);
      text("Edad de " + mrm.mascotas[i].nombre + " es: " + mrm.mascotas[i].edad, mascotaX1, mascotaY1 + 100);
    } else {
      //noStroke();
      fill(0,237,226);
      //rect(0,alto - 150,ancho,150);
      //fill(241,237,226);
      text("Edad de " + mrm.mascotas[i].nombre + " es: " + mrm.mascotas[i].edad, mascotaX1, mascotaY1 + 100);
    } 
  }

  // put drawing code here
}