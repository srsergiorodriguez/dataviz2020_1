let cr = {
  nombre: "Cristian",  // String Categorial Nominal
  apellido: "Baquero", // String Categorical Nominal
  año_de_nacimiento: 1992, // Number Numerical Discrete
  edad: 28, // Number Numerical Continual
  gafas: true, // Boolean Categorical Binomial
  hermanos: ["Iván", "Sebastián"], // Array Categorical Nominal
  her_edad: [30, 20]
}

let it = {
  periodo: 'Ciudades Estado Italianas',// String Categorial Nominal
  inicio: 1000,// Number Numerical Discrete
  fin: 1500,// Number Numerical Discrete
}

let mex = {
  periodo: 'Imperio Azteca', // String Categorial Nominal
  inicio: 1325, // Number Numerical Discrete
  fin: 1521,// Number Numerical Discrete
}

let dut = {
  periodo: 'Revuelta Holandesa',// String Categorial Nominal
  inicio: 1568,// Number Numerical Discrete
  fin: 1648,// Number Numerical Discrete
}

let jap = {
  periodo: 'Edo',// String Categorial Nominal
  inicio: 1603,// Number Numerical Discrete
  fin: 1868,// Number Numerical Discrete
}

let can = {
  periodo: 'Confederación del XIX',// String Categorial Nominal
  inicio: 1867,// Number Numerical Discrete
  fin:2020,// Number Numerical Discrete
}

let ancho = cr.año_de_nacimiento+cr.edad;
let itcol = it.fin-it.inicio;
let mexcol = mex.fin-mex.inicio;
let dutcol = dut.fin-dut.inicio;
let japcol = jap.fin-jap.inicio;
let cancol = can.fin-can.inicio;

function setup() {
  createCanvas (ancho, 1000);
  background (56, 87, 140);
}

function draw (){
  fill(31, 115, 0);
  rect(0, 600, cr.año_de_nacimiento, 90);

  fill(31, 200, 40);
  rect(cr.año_de_nacimiento, 600, cr.edad, 90);


  //Temporalización periodos favoritos
  fill(itcol, 200, 40);
  rect(it.inicio, 460, itcol, 90, 20, 20, 20, 20);

  fill(mexcol, 120, 140);
  rect(mex.inicio, 360, mexcol, 90, 20, 20, 20, 20);

  fill(dutcol, 110, 50);
  rect(dut.inicio, 260, dutcol, 90, 20, 20, 20, 20);

  fill(japcol, 160, 60);
  rect(jap.inicio, 160, japcol, 90, 20, 20, 20, 20);

  fill(cancol, 59, 200);
  rect(can.inicio, 60, cancol, 90, 20, 20, 20, 20);

  // Edades Hermanos
  fill(cr.her_edad[0]*6, 90, 140);
  text(cr.hermanos[0], 0, 0);
  circle(400, 400, cr.her_edad[0]*8);
  

  fill(cr.edad, 40, 80);
  circle(400, 400, cr.edad*5);

  fill(cr.her_edad[1]*4, 120, 100);
  circle(400, 400, cr.her_edad[1]*2);
  
  // Gafas
  if (cr.gafas) {
    push();
    fill(cr.edad, cancol, mexcol);
    let dia = 100;
    circle(1800, 850, dia);
    fill(cr.edad, cancol, mexcol);
    circle(1690, 850, dia);
    pop();
  }
}