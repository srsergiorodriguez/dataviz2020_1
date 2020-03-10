let datos = [1966, 1968, 1973, 1973, 1978, 1981, 1983, 1986, 1992, 1992, 1993, 2000, 2005, 2006, 2012, 2016, 2016 ]
let etiquetas = ["Bodegón VII", "El 9 de Octubre a las 11 a.m.", "África adiós", "Las cartas sobre la mesa", 
  "La muerte del justo", "Detalle de tarde de domingo en la isla de la Grande Jatte (señora)", "Turbay discurso", 
  "Bolivar rojo", "Belisario–Guayasamín", "Boceto de Galàn No 1", "Estudio 1/500", "Bocetos Ahogado 4", "Pescador pescado", 
  "Boceto séptima Piedad", "Lápida roja", "Cuaderno inundados", "Desplazamiento Individual 3", "Cañon del Chicamocha Telon del Teatro Santander"]

let contexto = document.getElementById('micanvas').getContext('2d');
let opciones = {
  type: "line",
    data: {
      labels: etiquetas,
      datasets: [{
        label: 'Selección obra Beatriz González',
        backgroundColor: 'rgb(0, 100, 255)',
        borderColor: 'rgb(255, 0, 0)',
        data: datos,
        
    }]
},
// Configuration options go here
options: {

  
  


}
}

let grafica = new Chart(contexto, opciones)
