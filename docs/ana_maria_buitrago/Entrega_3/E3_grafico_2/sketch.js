
let contexto = document.getElementById('canvas2').getContext('2d');
let opciones = {
    //intente hacer con polarArea pero no me dejo visualizar todos los label
  type: "bar",
  data: {
    labels: ["Bodegón VII", "El 9 de Octubre a las 11 a.m.", "África adiós", "Las cartas sobre la mesa", 
    "La muerte del justo", "Detalle de tarde de domingo en la isla de la Grande Jatte (señora)", "Turbay discurso", 
    "Bolivar rojo", "Belisario–Guayasamín", "Boceto de Galàn No 1", "Estudio 1/500", "Bocetos Ahogado 4", "Pescador pescado", 
    "Boceto séptima Piedad", "Lápida roja", "Cuaderno inundados", "Desplazamiento Individual 3", "Cañon del Chicamocha Telon del Teatro Santander"],

    datasets: [
      
      {
        
      label: "felicidad",
      data: [1, 8, 9, 1, 4, 9, 9, 7, 0, 9, 0, 0, 0, 1, 0, 9, 0, 8],
      backgroundColor: 'rgba(0, 0, 255)',
      },
      {  
      label: "irritación",
      data: [1, 1, 1, 9, 4, 2, 9, 7, 0, 2, 9, 9, 9, 7, 0, 2, 10, 1],
      backgroundColor: 'rgba(255, 0, 0)',
      },
      {

      label: "tristeza",
      data: [1, 1, 1, 9, 9, 3, 1, 7, 0, 8, 9, 7, 9, 8, 0, 2, 9, 2,],
      backgroundColor: 'rgba(0, 255, 0)',

      }
    ]    
       

    
  }



}
    
  


let grafica = new Chart(contexto, opciones); 