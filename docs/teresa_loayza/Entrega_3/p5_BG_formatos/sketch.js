let contexto = document.getElementById('micanvas').getContext('2d');

let opciones = {
  type: 'doughnut',
  data: {
    labels: ['Retrato', 'Paisaje', 'Bodegón'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['rgb(84, 192, 207)','rgb(173, 185, 16)','rgb(167, 58, 115)'],
        borderColor: 'rgb(64, 76, 77)',
        data: [10, 5, 2]
    }]
  },

    // Configuration options go here
    options: {}
}

let grafica = new Chart (contexto, opciones);