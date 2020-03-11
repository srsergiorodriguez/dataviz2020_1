let anamago = {
  color_favorito: [0,0,255], 
  edad: 39, // Number 
  cabello_largo: true, // Boolean
  edad_hermanos: [46, 41, 34], // Array
  pareja: true, //Boolean
  edad_hijos: [8, 2], // Array
  sobrinos: [22, 19, 19], // Array
  mascota: true, // Boolean
  peliculas_favoritas: ["Rashomon", "Amores perros", "El dictador", "Dracula", "La tumba de las luciernagas"], // Array
  libros: ["La historia interminable", "La insoportable levedad del ser", "Persepolis", "Cronica de una muerte anunciada"], // Array 
  deportes: false, // Boolean

}

let persona = anamago;


function setup() {
  // put setup code here
  
  createCanvas(600, 400);
  background(255,100,0);

  push();
  translate(width / 2, height / 2);
  
    //persona
    fill(persona.color_favorito);
    circle(persona.edad,-150, 40); 
     if(persona > 300){
       persona=300;
     }

  //cabello largo
 if (persona.cabello_largo) {
    strokeWeight(6);
    line(10, -160, -100, -60);
    line(100, -60, -10, -160);
  
  }
  
// pareja
  
   if (persona.pareja) {
     fill(persona.color_favorito);
     rect(-persona.edad *2, -170, 40, 40);
   
  }
  
 //hijos
  
  fill(255,0,0);
  ellipse(60, -60, 50);
  ellipse(-60, -60, 50);
  fill(0,255,0);
  ellipse(60, -60, 20);
  ellipse(-60, -60, 20);
  
  //hermanos
  
let inverseX = width-mouseX;
let inverseY = height-mouseY;
    fill(-persona.edad_hermano);
    rect(-200, 20, 90, 60);
    fill(persona.edad_hermanos+0);
    rect(200, 20, 90, 60);
    fill(persona.edad_hermanos);
    rect(10, 20, 90, 60);
    
 //mascota
  if (persona.mascota) {
     fill(random(persona.sobrinos));
     ellipse(0, 150, 70);
   

  }
   
  pop();
}

