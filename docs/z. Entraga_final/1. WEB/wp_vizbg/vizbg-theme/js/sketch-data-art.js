// Declaración de variables
let anno= [];
var titulo = new Array(18);
var tristeza = new Array(18);
var felicidad = new Array(18);
var irritacion = new Array(18);
var decada60 = []; // Década de los 60
var titulo60 = [];
var decada60n = [];
var decada60_color = [];
var decada70 = []; // Década de los 70s
var titulo70 = [];
var decada70n = [];
var decada70_color = [];
var decada80 = []; // Década de los 80s
var titulo80 = [];
var decada80n = [];
var decada80_color = [];
var decada90 = []; // Década de los 90s
var titulo90 = [];
var decada90n = [];
var decada90_color = [];
var decada00 = []; // Década del 2000 - 2009
var titulo00 = [];
var decada00n = [];
var decada00_color = [];
var decada01 = []; // Década del 2010 - 2019
var titulo01 = [];
var decada01n = [];
var decada01_color = [];

let contRetrato = 0;
let contPaisaje = 0;
let contBodegon = 0;
let etiqueta2 = ["Retrato","Paisaje","Bodegón"];

var si60 = true;
var si70 = true;
var si80 = true;
var si90 = true;
var si00 = true;
var si01 = true;

var mostrarlabely = false;
var mostrarsincolor = false;

// Declaración del contexto para el primer canvas canvas
//let contexto = document.getElementById('miCanvas').getContext('2d');

var data = []; 
$.getJSON( urlcanonical+ "/files/" + "datos_beatriz_gonzalez.json", function(json){
  data = JSON.parse(JSON.stringify(json.monica_ruiz));  
  //console.log(data);
  //console.log(data.length);
  for (i = 0; i < data.length; i++){
    // Década de los 60s
    if ( data[i].date >= 1930 && data[i].date < 1970 ) {
        decada60.push(data[i]);
        titulo60.push(i + "." + data[i].title.substring(0,17));
        decada60n.push(5);
    }
    // Década de los 70s
    if ( data[i].date >= 1970 && data[i].date < 1980 ) {
      decada70.push(data[i]);
      titulo70.push(i + "." + data[i].title.substring(0,17));
      decada70n.push(5);
    }
    // Década de los 80s
    if ( data[i].date >= 1980 && data[i].date < 1990 ) {
      decada80.push(data[i]);
      titulo80.push(i + "." + data[i].title.substring(0,17));
      decada80n.push(5);
    }
    // Década de los 90s
    if ( data[i].date >= 1990 && data[i].date < 2000 ) {
      decada90.push(data[i]);
      titulo90.push(i + "." + data[i].title.substring(0,17));
      decada90n.push(5);
    }
    // Década del 2000 - 2009
    if ( data[i].date >= 2000 && data[i].date < 2010 ) {
      decada00.push(data[i]);
      titulo00.push(i + "." + data[i].title.substring(0,17));
      decada00n.push(5);
    }
    // Década del 2010 - 2019
    if ( data[i].date >= 2010 && data[i].date < 2019 ) {
      decada01.push(data[i]);
      titulo01.push(i + "." + data[i].title.substring(0,17));
      decada01n.push(5);
    }

    tristeza[i] = data[i].tristeza;
    if (i==0) {
      titulo[i] = data[i].title.substring(0,17);  
    } else {
      titulo[i] = data[i].title;
    }
    felicidad[i] = data[i].felicidad;
    irritacion[i] = data[i].irritacion;
    // Cálculo promedio por género del nivel de felicidad, irritación y tristeza
    if (data[i].genero =="retrato"){
      contRetrato += 1;
    }
    else if (data[i].genero == "bodegón"){
      contBodegon += 1;
    }
    else {
      contPaisaje += 1;
    }
  }
  //console.log(decada60);
  //console.log(titulo60);
  //console.log(decada70);
  //console.log(decada80);
  //console.log(decada90);
  //console.log(decada00);
  //console.log(decada01);
  
  //console.log(data[0]);


  // Canvas general
  let color1,color2,color3,color4,color5,color6,color7,color8,color9,color10;

  // Década de los 60s
  let contexto1 = document.getElementById('miCanvas60').getContext('2d');
  // Década de los 70s
  let contexto2 = document.getElementById('miCanvas70').getContext('2d');
  // Década de los 80s
  let contexto3 = document.getElementById('miCanvas80').getContext('2d');
  // Década de los 90s
  let contexto4 = document.getElementById('miCanvas90').getContext('2d');
  // Década del 2000 - 2009
  let contexto5 = document.getElementById('miCanvas00').getContext('2d');
  // Década del 2010 - 2019
  let contexto6 = document.getElementById('miCanvas01').getContext('2d');

  // Capturar la paleta de colores 60s
  for ( let k = 0; k < decada60.length; k++){
    decada60_color.push( generarMezcla (k, decada60) );
  }

  // Capturar la paleta de colores 70s
   for ( let k = 0; k < decada70.length; k++){
    decada70_color.push( generarMezcla (k, decada70) );
  }

  // Capturar la paleta de colores 80s
  for ( let k = 0; k < decada80.length; k++){
    decada80_color.push( generarMezcla (k, decada80) );
  }
  
  // Capturar la paleta de colores 90s
  for ( let k = 0; k < decada90.length; k++){
    decada90_color.push( generarMezcla (k, decada90) );
  }

  // Capturar la paleta de colores 00s
  for ( let k = 0; k < decada00.length; k++){
    decada00_color.push( generarMezcla (k, decada00) );
  }

  // Capturar la paleta de colores 01s
  for ( let k = 0; k < decada01.length; k++){
    decada01_color.push( generarMezcla (k, decada01) );
  }

  // Función para las mezclas de colores de cada uno de los gradientes
  function generarMezcla(i, datos){
    let valorInicial = 0;
    var gradientFill = contexto1.createLinearGradient(1000, 0, 100, 0);

    // Validando que el objeto pallete exista
    if ('palette' in datos[i]) {
      let valorGradiente = 1 / (datos[i].palette.length - 1);
      for (let j = 0 ; j < datos[i].palette.length; j ++) {
        //console.log(valorInicial);
        switch (j){
          case 0:
            color1= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color1 );
            //console.log(color1);
          break;
          case 1:
            color2= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color2 );
            //console.log(color2);
          break;
          case 2:
            color3= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color3 );
            //console.log(color3);
          break;
          case 3:
            color4= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial,color4 );
            //console.log(color4);
          break;
          case 4:
            color5= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color5 );
            //console.log(color5);
          break;
          case 5:
            color6= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color6 );
            //console.log(color6);
          break;
          case 6:
            color7= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color7 );
            //console.log(color7);
          break;
          case 7:
            color8= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color8 );
            //console.log(color8);
          break;
          case 8:
            color9= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(valorInicial, color9 );
            //console.log(color9);
          break;
          case 9:
            color10= "rgba(" + datos[i].palette[j][0] + ","+datos[i].palette[j][1]+","+datos[i].palette[j][2]+")";
            gradientFill.addColorStop(1, color10 );
            //console.log(color10);
          break;
          }
          valorInicial += valorGradiente;
        } 
      } 
      return gradientFill; 
  } // Fin función

  // Gráfica 60s
  let colores1 = {
    type: 'horizontalBar',
    data: {
      labels: titulo60,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: decada60n,
          //barThickness: 30,
          //fill: true,
          backgroundColor: decada60_color,
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      hoverMode: 'index',
      /*gridLines: {
        display: false
      },*/
      title: {
        display: true,
        // text: 'Paleta de colores 60s',
        fontSize: 16,
        fontColor: "#333"
      },  
      layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 30
      }},
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          type: 'category',
          label: titulo60,
          ticks: {
            fontSize: 8
          },
          display: mostrarlabely
        }],
        xAxes: [{
          display: false,
          ticks: {
              max: 5.1,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  } 
  let grafica1 = new Chart(contexto1,colores1);

  // Gráfica 70s
  let colores2 = {
    type: 'horizontalBar',
    data: {
      labels: titulo70,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: decada70n,
          //barThickness: 30,
          //fill: true,
          backgroundColor: decada70_color,
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      hoverMode: 'index',
      /*gridLines: {
        display: false
      },*/
      title: {
        display: true,
        //text: 'Paleta de colores 70s',
        fontSize: 16,
        fontColor: "#333"
      },  
      layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 30
      }},
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          type: 'category',
          label: titulo70,
          ticks: {
            fontSize: 8
          },
          display: mostrarlabely
        }],
        xAxes: [{
          display: false,
          ticks: {
              max: 5.1,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  } 
  let grafica2 = new Chart(contexto2,colores2);

  // Gráfica 80s
  let colores3 = {
    type: 'horizontalBar',
    data: {
      labels: titulo80,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: decada80n,
          //barThickness: 30,
          //fill: true,
          backgroundColor: decada80_color,
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      hoverMode: 'index',
      /*gridLines: {
        display: false
      },*/
      title: {
        display: true,
        //text: 'Paleta de colores 80s',
        fontSize: 16,
        fontColor: "#333"
      },  
      layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 30
      }},
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          type: 'category',
          label: titulo80,
          ticks: {
            fontSize: 8
          },
          display: mostrarlabely
        }],
        xAxes: [{
          display: false,
          ticks: {
              max: 5.1,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  } 
  let grafica3 = new Chart(contexto3,colores3);

  // Gráfica 90s
  let colores4 = {
    type: 'horizontalBar',
    data: {
      labels: titulo90,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: decada90n,
          //barThickness: 30,
          //fill: true,
          backgroundColor: decada90_color,
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      hoverMode: 'index',
      /*gridLines: {
        display: false
      },*/
      title: {
        display: true,
        //text: 'Paleta de colores 90s',
        fontSize: 16,
        fontColor: "#333"
      },  
      layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 30
      }},
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          type: 'category',
          label: titulo90,
          ticks: {
            fontSize: 8
          },
          display: mostrarlabely
        }],
        xAxes: [{
          display: false,
          ticks: {
              max: 5.1,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  } 
  let grafica4 = new Chart(contexto4,colores4);

  // Gráfica 00s
  let colores5 = {
    type: 'horizontalBar',
    data: {
      labels: titulo00,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: decada00n,
          //barThickness: 30,
          //fill: true,
          backgroundColor: decada00_color,
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      hoverMode: 'index',
      /*gridLines: {
        display: false
      },*/
      title: {
        display: true,
        //text: 'Paleta de colores 2000 - 2009',
        fontSize: 16,
        fontColor: "#333"
      },  
      layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 30
      }},
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          type: 'category',
          label: titulo00,
          ticks: {
            fontSize: 8
          },
          display: mostrarlabely
        }],
        xAxes: [{
          display: false,
          ticks: {
              max: 5.1,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  } 
  let grafica5 = new Chart(contexto5,colores5);

   // Gráfica 01s
   let colores6 = {
    type: 'horizontalBar',
    data: {
      labels: titulo01,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: decada01n,
          //barThickness: 30,
          //fill: true,
          backgroundColor: decada01_color,
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      hoverMode: 'index',
      /*gridLines: {
        display: false
      },*/
      title: {
        display: true,
        //Paleta de colorestext: 'Paleta de colores 2010 - 2019',
        fontSize: 16,
        fontColor: "#333"
      },  
      layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 30
      }},
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          type: 'category',
          label: titulo01,
          ticks: {
            fontSize: 8
          },
          display: mostrarlabely
        }],
        xAxes: [{
          display: false,
          ticks: {
              max: 5.1,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  } 
  let grafica6 = new Chart(contexto6,colores6);
});