/*
apolan
20200310

Actividad de obejtos
*/

var ctx = document.getElementById('chart-radar').getContext('2d');

//1. 
let dataSetRadar = [];
var dataSetGeneroLabels = [];

let countPaisaje = 0;
let countRetraro = 0;
let countOtro = 0;

var andres;

function main () {
	
	andres = dataJson["andres_polania"];
	
	for(var j in andres ){
		let obra = andres[j]["title"];
		let date = andres[j]["date"];
		
		let newItem = {
		label: andres[j]["title"],
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
		 data: [andres[j]["tristeza"], andres[j]["felicidad"], andres[j]["irritacion"]]
		};
		
		dataSetRadar.push(newItem);
		let se = true;
		
		for (var k in dataSetGeneroLabels){
			
			let generoTMP =  andres[j]["genero"];
			
			if(generoTMP == dataSetGeneroLabels[k]){
				se = false;
				continue;
			}
		}
		console.log("tipo: " + andres[j]["genero"]);
		if(se && typeof andres[j]["genero"] !== 'undefined'){
			dataSetGeneroLabels.push(andres[j]["genero"]);
			se = false;
			
		}
		
		
	}
	
	
	for (var k in andres){
		if(andres[k]["genero"] == "paisaje"){
				countPaisaje++;
			} else if(andres[k]["genero"] == "retrato"){
				countRetraro++;
			}else {
				countOtro++;
			}
		}
	
		
}





main ();

var myChart = new Chart(document.getElementById("chart-radar"), {
    type: 'radar',
    data: {
      labels: ["TRISTEZA","FELICIDAD","IRRITACIÓN"],
      datasets: dataSetRadar
    },
    options: {
      title: {
        display: true,
        text: 'EMOCIONES GENERADAS: OBRAS'
      }
    }
});




var cx2 = new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: dataSetGeneroLabels,
      datasets: [
        {
          label: "Conteo de tipos de obras",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [countRetraro, countPaisaje,,countOtro]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Tipos de obra encontradas"
      }
    }
});



var cx3 = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["SI", "NO"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [11,6]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Obras firmadas por el autor'
      }
    }
});