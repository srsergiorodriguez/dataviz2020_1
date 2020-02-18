let datos = {
  nombre: "Sergio",
  hermanas: ["Paula", "Pilar", "Camila", "Adriana", "Laura"],
  edad_hermanas: [22, 34, 37, 35, 41],
  gafas: true,
  nacimiento: 1990,
  edad: 29,
  lugar: "Tunja",
  estatura: 179,
  colores: [[50, 128, 237],[141, 45, 224]],
  estatura_mama: 155,
  estatura_papa: 173,
  graduaciones: [2007, 2012, 2015]
}

// Descomenta esto para probar con otros datos
// datos = {
//   nombre: "Leonardo",
//   hermanas: ["María", "Juan"],
//   edad_hermanas: [40, 20],
//   gafas: false,
//   nacimiento: 1970,
//   edad: 35,
//   lugar: "Barrancabermeja",
//   estatura: 190,
//   colores: [[100, 100, 45],[156, 87, 200]],
//   estatura_mama: 160,
//   estatura_papa: 180,
//   graduaciones: [2002, 2010]
// }

function setup() {
  createCanvas(600, 400);
  background(datos.colores[0][0], datos.colores[0][1], datos.colores[0][2]);
  
  angleMode(DEGREES);
  textAlign(CENTER);
  noStroke();

  // Triángulo de gafas
  // es un condicional que muestra si el dato gafas es verdadero
  if (datos.gafas) {
    push();
    // Color basado en el primero de los colores preferidos
    fill(datos.colores[1][0], datos.colores[1][1], datos.colores[1][2]);
    // el triángulo tiene un tamaño y posición arbitrarios
    let tam = 100;
    translate(width/2,height-tam);
    triangle(0, 0, -tam/2, tam, tam/2, tam);
    pop();
  }

  // Flor de hermanas
  // Muestra el número de hermanas 
  // y asigna un tono de amarillo a blanco
  // dependiendo de la edad
  push();
  translate(width/2, height/2);
  textSize(17);
  fill(150, 255, 150);
  ellipse(0, 0, datos.edad)
  fill(0)
  text(datos.nombre, 0, 0);
  let contador = 0;
  let lugares = 360/datos.hermanas.length;
  for (let i = 0; i < 360; i+= lugares) {
    // Se utilizan coordenadas polares
    let radio = 70;
    let x = cos(i) * radio;
    let y = sin(i) * radio;
    fill(255, 255, map(datos.edad_hermanas[contador],0,41,0,255));
    ellipse(x, y, datos.edad_hermanas[contador]);
    fill(0);
    text(datos.hermanas[contador], x, y);
    contador++;
  }
  pop();

  // barras de estatura
  // la altura de carra modifica la estatura de la persona
  // y la estatura de los padres
  fill(0);
  let ancho_barra = 40;
  let mia = map(datos.estatura, 0, 300, 0, height);
  let mama = map(datos.estatura_mama, 0, 300, 0, height);
  let papa = map(datos.estatura_papa, 0, 300, 0, height);
  rect(ancho_barra*1, height - mia, ancho_barra-3, mia);
  rect(ancho_barra*2, height - mama, ancho_barra-3, mama);
  rect(ancho_barra*3, height - papa, ancho_barra-3, papa);

  // línea del tiempo de graduaciones
  // muestra los años de graduación en una línea vertical
  stroke(0);
  strokeWeight(4);
  let xlinea = width*0.80;
  let margen_linea = 50;
  line(xlinea, margen_linea, xlinea, height - margen_linea);
  for (let i = 0; i < datos.graduaciones.length; i++) {
    let mapeo = map(datos.graduaciones[i], 1990, 2020, height - margen_linea, margen_linea);
    line(xlinea-20, mapeo, xlinea+20, mapeo);
  }
  // además muestra con círculos el año de nacimiento y el presente
  fill(255, 0, 0);
  ellipse(xlinea, margen_linea, 10);
  fill(0, 0, 255);
  ellipse(xlinea, height - margen_linea, 10);

  // Contador de letras del lugar de nacimiento
  noStroke();
  fill(255);
  for (let i = 0; i < datos.lugar.length; i++) {
    ellipse(40 + i * 10, 40, 10, 10);
  }
}