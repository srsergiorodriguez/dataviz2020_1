// Declaración de variables
// Tamaño Canvas
let miCanvas;
let mousePosicionX;
let mousePosicionY;
let ancho = 900;
let alto = 700;
let margenIzq = 100;
let margenDer = 80;
let margenArr = 50;
let margenAbj = 50;
let annoInicial = 1998;
let annoFinal;
let largoLinea = ancho - (margenIzq + margenDer);
let anchoLinea = alto - (margenAbj + margenArr + 380);
let tamanoInt = largoLinea * 0.6;
let parteInt = tamanoInt / 22;
let fuente = "Helvetica";
let imgGato;
let imgPerro;
let imgMujer;
let imgHombre;
let imgCarne;
let imgCabello;
let imgPosicion;


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
  datos_sobrinos: [
    [1999,"H"],
    [2003,"H"],
    [2013,"M"]], // Array Numérico y Categórico
  posicion_familia: 1, //String Ordinal
  come_carne: false // Boolean Categórico
};

// Pintar la línea de tiempo
function lineaTiempo () {
  // Definición de tamaño
  let x1Linea = margenIzq;
  let x2Linea = ancho - margenDer;
  let y1Linea = alto / 2.5;
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
  text(inicioLinea, x + 80, y - 30);
  text(anoActual, ancho - margenDer +30, y);
  textSize(fuenteTamano - 9);
  text("By Mónica Ruiz", ancho - 40, alto - 5);
}

// Pintar mis intereses
function interes (x,y) {
  let fuenteTamano = 18;
  let xInicial = margenIzq + (largoLinea * 0.4);
  let posicionX = xInicial;
  let y1Linea = alto / 2.5;
  fill(11,91,118);
  textAlign(LEFT);
  textFont(fuente);
  textSize(fuenteTamano);
  text("Mis intereses... cuándo comencé?", x - 70, y - 50);
  textAlign(CENTER);
  for (let i = 0; i < mrm.deportes.length; i++) {
    let deporte = mrm.deportes[i][0];
    let annoDeporte = mrm.deportes[i][1];
    posicionX = posicionX + parteInt * (annoDeporte - annoInicial);
    stroke(126);
    line(posicionX, y - 60, posicionX, y1Linea + (anchoLinea/2));
    fill(11,91,118);
    stroke(11,91,118);
    star(posicionX, y - 60, 5, 15, 5);
    circle(posicionX, y1Linea + (anchoLinea/2), 8);
    textSize(fuenteTamano-3);
    text(deporte,posicionX,y - 80);
    textSize(fuenteTamano-6);
    text(annoDeporte,posicionX + 3,y1Linea + (anchoLinea/2) + 20);
  }
}

// Pintar mis mascostas en mi vida
function mascotas (x,y) {
  let fuenteTamano = 18;
  let xInicial = margenIzq + (largoLinea * 0.4);
  let posicionX = xInicial;
  let y1Linea = alto / 2.5;
  fill(150,16,75);
  textAlign(LEFT);
  textFont(fuente);
  textSize(fuenteTamano);
  text("Mis mascotas... cuándo las adopté?", x - 70, y - 50);
  textAlign(CENTER);
  for (let i = 0; i < mrm.mascotas.length; i++) {
    let nombre = mrm.mascotas[i].nombre;
    let edad = mrm.mascotas[i].edad;
    let annoAdopcion = mrm.mascotas[i].ano_adopcion;
    let tipo = mrm.mascotas[i].tipo;
    posicionX = xInicial + parteInt * (annoAdopcion - annoInicial);
    console.log(tipo);
    stroke(126);
    line(posicionX, y - 60, posicionX, y1Linea + (anchoLinea/2));
    fill(150,16,75);
    stroke(150,16,75);
    if (tipo == 'perro'){
      image(imgPerro, posicionX - 15, y - 65,30,30);
    } else {
      image(imgGato, posicionX - 15, y - 65,30,30);
    }
    circle(posicionX, y1Linea + (anchoLinea/2), 8);
    textSize(fuenteTamano -3);
    text(nombre,posicionX,y - 20);
    textSize(fuenteTamano -6);
    text(annoAdopcion,posicionX,y1Linea + (anchoLinea/2) + 20);
    mrm.mascotas[i].mascotaPos[0] = posicionX - 15;
    mrm.mascotas[i].mascotaPos[1] = y - 65;
    mrm.mascotas[i].mascotaPos[2] = posicionX + 15;
    mrm.mascotas[i].mascotaPos[3] = y - 20;
  }
}

// Pintar mi Inicio en la empresa actual
function empresa (x,y) {
  let fuenteTamano = 18;
  let xInicial = margenIzq + (largoLinea * 0.4);
  let posicionX = xInicial;
  let y1Linea = alto / 2.5;
  stroke(230,92,22);
  fill(230,92,22);
  textAlign(LEFT);
  textFont(fuente);
  textSize(fuenteTamano);
  text("En mi trabajo... cuándo comencé?", x - 70, y - 40);
  posicionX = posicionX + (parteInt * (mrm.anos_empresa + 1));
  stroke(126);
  line(posicionX, y1Linea + (anchoLinea/2), posicionX,y-40);
  stroke(230,92,22);
  circle(posicionX, y1Linea + (anchoLinea/2), 8);
  triangle(posicionX,y - 55,posicionX,y-35, posicionX+20, y-45);
  textSize(fuenteTamano-6);
  text(annoInicial+mrm.anos_empresa+1,posicionX-20,y1Linea + (anchoLinea/2) + 20);
  textSize(fuenteTamano -3);
  text("Banrep",posicionX-10,y-25);
}

// Pintar mi familia
function familia (x,y) {
  let fuenteTamano = 18;
  let xInicial = margenIzq + (largoLinea * 0.4);
  let posicionX = xInicial;
  let y1Linea = alto / 2.5;
  let nombre;
  let tipo;
  let anno;
  fill(24,80,172);
  stroke(24,80,172);
  textAlign(LEFT);
  textFont(fuente);
  textSize(fuenteTamano);
  text("Mi familia...", x - 70, y - 50);
  textAlign(CENTER);
  for (let i = 0; i < mrm.sobrinos + 1 ; i++) {
    if (i == 0) {
      nombre = mrm.hermana;
      tipo = "hermana";
      posicionX = margenIzq + 35;
      anno = 1981;
    } else {
      nombre = "Sobrino " + i;
      tipo = "sobrino";
      posicionX = xInicial + parteInt * (mrm.datos_sobrinos[i-1][0] - annoInicial)
      anno = mrm.datos_sobrinos[i-1][0];
    }
    stroke(126);
    line(posicionX + 10, y - 60, posicionX + 10, y1Linea + (anchoLinea/2));
    fill(24,80,172);
    stroke(24,80,172);
    circle(posicionX + 10, y1Linea + (anchoLinea/2), 8);
    if (tipo == 'hermana' || mrm.datos_sobrinos[i-1][1]=="M"){
      image(imgMujer, posicionX - 5, y - 75,30,30);
    } else {
      image(imgHombre, posicionX - 5, y - 75,30,30);
    }
    textSize(fuenteTamano -5);
    text(nombre,posicionX + 5,y - 30);
    textSize(fuenteTamano-6);
    text(anno,posicionX + 10,y1Linea + (anchoLinea/2) + 20);
  }
}

// Pintar mis carcateristicas
function caracteristicas (x,y){
  let anchoRect = 200;
  let fuenteTamano = 18;
  fill(43);
  stroke(43);
  textSize (fuenteTamano-3);
  textAlign (LEFT);
  text("Mis características...",margenIzq - 70, alto - margenDer + 20);
  // Cabello
  fill(43);
  stroke(43);
  text("Estilo de cabello: ",x + 75, y + 35);
  text(mrm.estilo_cabello,x + 75, y + 60);
  stroke(43);
  noFill();
  rect(x,y,anchoRect,80,20);
  image(imgCabello, x + 5, y + 10,60,60);
  // Carne
  fill(43);
  stroke(43);
  text("Como carne? ",x + anchoRect + 30 + 75, y + 35);
  if (!mrm.come_carne){
    text("No",x + anchoRect + 30 + 75, y + 60);
  } else {
    text("Si",x + anchoRect + 30 + 75, y + 60);
  }
  stroke(43);
  noFill();
  rect(x + anchoRect + 30,y,anchoRect,80,20);
  image(imgCarne, x + anchoRect + 30 + 5, y + 10,60,60);
  // Posición en mi familia
  fill(43);
  stroke(43);
  text("En mi familia, soy: ",x + (anchoRect*2) + 60 + 75, y + 35);
  if (mrm.posicion_familia == 1) {
    text("La hija mayor",x + (anchoRect*2) + 60 + 75, y + 60);
  } else {
    text("La hija menor",x + (anchoRect*2) + 60 + 75, y + 60);
  }
  stroke(43);
  noFill();
  rect(x + (anchoRect*2) + 60,y,anchoRect,80,20);
  image(imgPosicion, x + (anchoRect*2) + 60 + 5, y + 10,60,60);
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

// Función de la librería para cargar imágenes
function preload() {
  imgGato = loadImage('gato.png');
  imgPerro = loadImage('perro.png');
  imgMujer = loadImage('mujer.png');
  imgHombre = loadImage('hombre.jpg');
  imgCarne = loadImage('noCarne.jpg');
  imgCabello = loadImage('cabelloCorto.jpg');
  imgPosicion = loadImage('hermanas.png');
}

// Función para la ejecución de la visualización
function setup() {
  miCanvas = createCanvas (ancho, alto);
  miCanvas.background(234,236,238);
  annoFinal = year();
  // Ejecución de las funciones
  titulo();
  lineaTiempo();
  interes(100,alto/2.5);
  mascotas(100, alto - anchoLinea - margenAbj + 30);
  empresa(100, alto - anchoLinea + 25);
  familia (100, margenArr + 120);
  caracteristicas(margenIzq + 80, alto - (margenAbj + 45));
  console.log(mrm.mascotas);
}

function draw() {
  mousePosicionX = 100;  
  mousePosicionY = 100;
  
  let mascotaX1;
  let mascotaY1;
  let mascotaX2;
  let mascotaY2;
  let textEdad;
  let myDiv;
      
  for (let i = 0; i < mrm.mascotas.length; i++) {
    mascotaX1 = mrm.mascotas[i].mascotaPos[0];
    mascotaY1 = mrm.mascotas[i].mascotaPos[1];
    mascotaX2 = mrm.mascotas[i].mascotaPos[2];
    mascotaY2 = mrm.mascotas[i].mascotaPos[3];
    if (pmouseX >= mascotaX1 && pmouseX <= mascotaX2 && pmouseY >= mascotaY1 && pmouseY <= mascotaY2) {
      removeElements();
      myDiv = createDiv("Edad de " + mrm.mascotas[i].nombre + " es: " + mrm.mascotas[i].edad); 
      myDiv.position(mascotaX1 - 50, mascotaY1 + 60);   
      myDiv.size(160, 20); 
      myDiv.style('font-size', '14px'); 
      myDiv.style('border', '1px solid black'); 
      myDiv.style('text-align', 'center'); 
      myDiv.style('color', '#96104B'); 
      //myDiv.hide(); 
      //myDiv.show(); 
    } 
  }

  // put drawing code here
}