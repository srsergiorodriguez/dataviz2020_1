// Declaración de variables
let anno= [];
var titulo = new Array(18);
var tristeza = new Array(18);
var felicidad = new Array(18);
var irritacion = new Array(18);
let contRetrato = 0;
let contPaisaje = 0;
let contBodegon = 0;
let etiqueta2 = ["Retrato","Paisaje","Bodegón"];

// Declaración del contexto para el primer canvas canvas
let contexto = document.getElementById('miCanvas').getContext('2d');

var data = []; 
$.getJSON( "Datos_2.json", function(json){
  data = JSON.parse(JSON.stringify(json.monica_ruiz));  
  console.log(data);
  console.log(data.length);
  for (i = 0; i < data.length; i++){
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
  console.log(data[0]);

  // Gráfica de sentimientos
  let sentimientos = {
    type: 'bar',
    data: {
        labels: titulo,
        datasets: [{
            label: 'Nivel de tristeza',
            fill: false,
            data: tristeza,
            backgroundColor: "#85C1E9",
            borderWidth: 2
        },
        {
          label: 'Nivel de felicidad',
          fill: false,
          data: felicidad,
          backgroundColor: "#E74C3C",
          borderWidth: 2
        },
        {
          label: 'Nivel de irritación',
          fill: false,
          data: irritacion,
          backgroundColor: "#8e5ea2",
          borderWidth: 2
        }
      ]
    },
    options: {
      hoverMode: 'index',
      title: {
        display: true,
        text: 'Cada una de las obras ',
        fontSize: 18,
        fontColor: "#333"
      },  
      scales: {
        xAxes: [{
          type: 'category',
          label: titulo
        }],
        yAxes: [{
          ticks: {
              max: 11,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  };
  let grafica = new Chart(contexto,sentimientos);

  // Segundo Canvas
  let contexto2 = document.getElementById('miCanvas2').getContext('2d');
  let sumGenero = {
    type: 'pie',
    data: {
      labels: etiqueta2,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: [contRetrato, contPaisaje, contBodegon],
          backgroundColor: [
            "#48C9B0",
            "#F4D03F",
            "#EC7063"
          ],
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      responsive: true,
      hoverMode: 'index',
      title: {
        display: true,
        position: "top",
        text: "Obras por Género",
        fontSize: 18,
        fontColor: "#333"
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#333"
          //fontSize: 16
        }
      }
    }
  };
  let grafica2 = new Chart(contexto2,sumGenero);

  // Tercer Canvas
  let contexto3 = document.getElementById('miCanvas3').getContext('2d');
  let color1,color2,color3,color4,color5,color6,color7,color8,color9,color10;
  let valorInicial = 0;
  // Capturar la paleta de colores
  for (i = 0; i < data.length; i++){
    switch (i) {
      case 0:
        var gradientFill = contexto3.createLinearGradient(500, 0, 100, 0);
        console.log(data[i].palette.length);
        let valorGradiente = 1 / (data[i].palette.length - 1);
        console.log(valorGradiente);
        for (j = 0 ; j < data[i].palette.length; j ++) {
          console.log(valorInicial);
          switch (j){
            case 0:
              color1= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color1 );
              console.log(color1);
            break;
            case 1:
              color2= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color2 );
              console.log(color2);
            break;
            case 2:
              color3= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color3 );
              console.log(color3);
            break;
            case 3:
              color4= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial,color4 );
              console.log(color4);
            break;
            case 4:
              color5= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color5 );
              console.log(color5);
            break;
            case 5:
              color6= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color6 );
              console.log(color6);
            break;
            case 6:
              color7= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color7 );
              console.log(color7);
            break;
            case 7:
              color8= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color8 );
              console.log(color8);
            break;
            case 8:
              color9= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(valorInicial, color9 );
              console.log(color9);
            break;
            case 9:
              color10= "rgba(" + data[i].palette[j][0] + ","+data[i].palette[j][1]+","+data[i].palette[j][2]+")";
              gradientFill.addColorStop(1, color10 );
              console.log(color10);
            break;
          }
          valorInicial += valorGradiente;
        }
        break;
        
    } 
  }

  var gradientStroke1 = contexto3.createLinearGradient(500, 0, 100, 0);
  gradientStroke1.addColorStop(0, "rgba(50, 182, 244");
  gradientStroke1.addColorStop(1, "#f49080");

  var gradientStroke = contexto3.createLinearGradient(500, 0, 100, 0);
  let color = "rgba(250, 182, 244)";
  gradientStroke.addColorStop(1, color);
  //gradientStroke.addColorStop(0.2, "#f49080");
  //gradientStroke.addColorStop(0.6, "#145A32");
  gradientStroke.addColorStop(0, "rgba(50, 182, 244");

  var gradientStroke2 = contexto3.createLinearGradient(500, 0, 100, 0);
  gradientStroke2.addColorStop(0, "rgba(128, 50, 244");
  gradientStroke2.addColorStop(1, "rgba(244, 144, 128, 0.6)");

  let colores = {
    type: 'bar',
    data: {
      labels: etiqueta2,
      datasets: [{
          //label: 'Nivel de tristeza',
          data: [5, 5, 5],
          //fill: true,
          backgroundColor: [gradientFill,
            gradientStroke1,
            gradientStroke2
          ],
          borderWidth: [1,1,1]
      }
    ]
    },
    options: {
      responsive: true,
      hoverMode: 'index',
      title: {
        display: true,
        position: "top",
        text: "Obras por Género",
        fontSize: 18,
        fontColor: "#333"
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#333"
          //fontSize: 16
        }
      }
    }
  } 

    let grafica3 = new Chart(contexto3,colores);
});