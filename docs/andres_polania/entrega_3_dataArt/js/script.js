/*
apolan
20200310

Actividad de obejtos
*/

let ancho = 900;
let alto = 900;
let puntos = [];
var emocionLabel = "SIN VIBRACIÓN...";
var emocion = "E0";
var writeEmocion = true;
var amplitudeState  = false, xspacingState  = false, periodState  = false;
var amplitudeMax, xspacingMax, periodMax;



const dateInicial = 1940;
const coorXTimeline = 200;
const coorXChartline = 500;

var objectos = [];

function setup(){
	createCanvas (1200,900);
	
	textStyle(BOLDITALIC);
	textSize(15);
	text("VIBRACIONES META-FAMILIARES ", 500 , 60);
	objectos.push(personaA);
	objectos.push(personaB);
	objectos.push(personaC);
	objectos.push(personaD);
	objectos.push(personaE);
	objectos.push(personaF);
	objectos.push(personaG);
	objectos.push(personaH);
	objectos.push(personaI);
	
	// Crea la linea del tiempo
	createTimeLine();
	
	// Crea línea temporal de vibraciones
	setupWaves();
	
	// Crea la sección de relaciones
	createChart();
	
	createLines();
}


function createTimeLine(){
	
	 push();
	 textStyle(NORMAL);
	 textSize(12);
	 translate(coorXTimeline, 20);
	 text("LÍNEA DEL TIEMPO", 25 , 4);
	 textStyle(NORMAL);
	 textSize(10);
	 text("Selecciona la vibración\nque quieres explorar.", -140 , 4);
	 colorModeCustome ("timeline");
	 rect(2, 0, 6 , windowHeight - 50);
	 pop();
	 
	for (var i in objectos ){
		let fechaNacimiento = objectos[i]["fecha-nacimiento"];
		let edad = 2020 - fechaNacimiento;
		let tipoRelacion = objectos[i]["tipo-relacion"];
		// A1. time line

		
		// A2. OBJECT 
		if(tipoRelacion == "familiar"){
			colorModeCustome (tipoRelacion);
			push();
			translate(coorXTimeline, 20);
			let tmpY = ( windowHeight - 50) - ((fechaNacimiento - dateInicial)/80 * 100) * windowHeight / 100;
			
			 console.log (tmpY);
			circle( 
				4,
				tmpY,
				30
			);
			
			colorModeCustome ("timeText");
			textSize(12);
			text(objectos[i]["fecha-nacimiento"], 25 , tmpY + 4);
			colorModeCustome ("timeTextPeople");
			text(objectos[i]["nombre"], -30 , tmpY + 5);
			pop();
			
			objectos[i]["posX"] = coorXTimeline - 11;
			objectos[i]["posY"] =  tmpY + 5;
			objectos[i]["figure"] = "circle" ;
			objectos[i]["size"] = 29;
			
		} else if (tipoRelacion == "amigo") {
			colorModeCustome (tipoRelacion);
			push();
			translate(coorXTimeline, 20);
			let tmpY = ( windowHeight - 50) - ((fechaNacimiento - dateInicial)/80 * 100) * windowHeight / 100;

			console.log (tmpY);
			rect( 
				-8,
				tmpY,
				25,
				25
			);
			
			colorModeCustome ("timeText");
			textSize(12);
			text(objectos[i]["fecha-nacimiento"], 25 , tmpY + 16);
			colorModeCustome ("timeTextPeople");
			text(objectos[i]["nombre"], -30 , tmpY + 16);
			pop();
			
			objectos[i]["posX"] = coorXTimeline - 8;
			objectos[i]["posY"] = 20 + tmpY;
			objectos[i]["figure"] = "rect" ;
			objectos[i]["size"] = 25 ;
			
		}
	}
}



function colorModeCustome (action){
	if (action == "timeline"){
		fill('rgba(0,0,0, 0.1)');
		stroke('rgba(0,0,0,0.1)');
		strokeWeight(3);
	} else if (action == "familiar"){ 
		fill('rgba(207,41,67, 1)');
		stroke('rgba(207,41,67, 0.4)');
		strokeWeight(5);
	} else if (action == "amigo"){ 
		fill('rgba(111,182,196, 0.8)');
		stroke('rgba(111,182,196, 0.4)');
		strokeWeight(5);
	} else if (action == "timeText"){
		fill('rgba(0, 0, 0, 0.9)');
		stroke('rgba(0, 102, 153, 0.25)');
		strokeWeight(0);
	} else if (action == "timeTextPeople"){
		fill('rgba(150,150,150, 1)');
		stroke('rgba(0, 102, 153, 0.25)');
		strokeWeight(0);
		textAlign(RIGHT);
	} else if (action == "relationShip"){
		noStroke();
		fill('rgb(255, 255, 255)');
		rect(0,0,310,100);
	} else if (action == "relationShip-B"){
		noStroke();
		textSize(10);
		fill('rgb(150,150,200)');
		textAlign(LEFT);
		noStroke();
	} else if (action == "timeline-B"){
		fill('rgba(0,0,0, 0.3)');
		stroke('rgba(0,0,0,0.1)');
		strokeWeight(3);
	} else if (action == "chartEducacion"){
		let R=random(255),G=random(255),B=random(255);
		fill(R,G,B);
		stroke('rgba(0,0,0,0.1)');
		strokeWeight(1);
	} else if (action == "chartLines"){
		strokeWeight(1);
		stroke('rgba(0,0,0,0.2)');
		strokeWeight(1);
	}
}





let xspacing = 10; // Distance between each horizontal location
let w = 300; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 0.0; // Height of wave
let period = 100.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setupWaves() {
  //createCanvas(710, 400);

  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
	
	push();
	translate(500,100);
	colorModeCustome ("relationShip");
	

  if(amplitudeMax == amplitude){
		amplitudeState = false;
	}else if(amplitudeMax > amplitude){
		amplitude++;
	}else if(amplitudeMax < amplitude){
		amplitude--;
	}

  

  calcWave();
  renderWave();

  pop();
  
  //console.log(writeEmocion);
  
  if(writeEmocion){
		noStroke();
		fill('rgb(255, 255, 2550)');
		rect(520,70,400,100);
		colorModeCustome ("relationShip-B");
		text(emocionLabel, 520 , 90);
		writeEmocion = false;
		console.log("se" + emocionLabel);
  }
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(0);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing + 5, 100 / 2 + yvalues[x], 8, 8);
  }
}


function mouseClicked() {
	for  (var i in objectos ){
		var xTemp = objectos[i]["posX"];
		var yTemp = objectos[i]["posY"];
		var sizeTemp = objectos[i]["size"];
		
		//colorModeCustome ("familiar");
		//rect(xTemp,yTemp,sizeTemp,sizeTemp);
		
		if( xTemp <= mouseX && xTemp + sizeTemp >= mouseX ){
			 if( yTemp <= mouseY &&  yTemp + sizeTemp >= mouseY ){
				//console.log("adentro");
				if(objectos[i]["relacion-poder"] == "simétrica" ){
					amplitudeMax = 40;
					xspacingMax = 1;
					periodMax = 60;
					w = 300;
					setupWaves();
					writeEmocion=true;
					amplitudeState  = true;
					xspacingState  = true;
					periodState  = true;
					emocionLabel = "VIBRACIÓN: " + objectos[i]["tipo-relacion"].toUpperCase() + " + TIPO DE RELACIÓN: " + objectos[i]["relacion-poder"].toUpperCase() + " - " + objectos[i]["nombre"];
				}else if(objectos[i]["relacion-poder"] == "asimétrica" ){
					amplitudeMax = 10;
					xspacingMax = 20;
					periodMax = 100;
					w = 300;
					//theta = 0.6;
					setupWaves();
					fill(255);
					noStroke();
					rect(80,80,100,20);
					writeEmocion = true;
					amplitudeState  = true;
					xspacingState  = true;
					periodState  = true;
					emocionLabel = "VIBRACIÓN: " + objectos[i]["tipo-relacion"].toUpperCase() + " + TIPO DE RELACIÓN: " + objectos[i]["relacion-poder"].toUpperCase() + " - " + objectos[i]["nombre"];
				}
			}
		}
	}
  if (mouseX === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function createChart(){
	
	push();
	translate(coorXChartline, 335);
	colorModeCustome("timeline-B");
	//rect(0,0,6,300);
	let posXChar = 8;
	let posYChar = 6;
	
	
	textStyle(NORMAL);
	textSize(12);
	noStroke();
	text("TIEMPO DE EDUCACIÓN", 0 , -20);

	for (var i in objectos ){
	var eduTemp = objectos[i]["formacion"];
		let time=0;
		for(var j in eduTemp){
			var dateI = eduTemp[j]["fecha-inicio"];
			var dateF = eduTemp[j]["fecha-fin"];
			time += (dateF - dateI);
			let sizeTempChart = (dateF - dateI) * 10;
			
			console.log("eduTemp: " + (dateF - dateI) + " - " +eduTemp[j]["titulo"] + "|" + sizeTempChart);

			colorModeCustome ("chartEducacion");
			rect(posXChar, posYChar, sizeTempChart , 30);
			objectos[i]["chartX"] = coorXChartline + 8;
			objectos[i]["chartY"] = 335 + posYChar + 15;
			posXChar += ((dateF - dateI) * 10 ) + 2;
		}
		
		text(time + " / " + objectos[i]["edad"] , posXChar + 5 , posYChar + 17);
		posXChar = 8;
		posYChar+= 33;
	}
	pop();
}


function createLines(){
	for (var i in objectos){
		
		colorModeCustome ("chartLines");
		if (objectos[i]["figure"] == "circle") {
			line(objectos[i]["posX"] + 15,objectos[i]["posY"] + 15,objectos[i]["chartX"],objectos[i]["chartY"]);
		}else {
			line(objectos[i]["posX"] + 15,objectos[i]["posY"] + 15,objectos[i]["chartX"],objectos[i]["chartY"]);
		}
	}

}