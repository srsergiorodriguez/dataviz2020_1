//presento la serie la array categórica

let etiquetas = ["Apuntes para la historia extensa Tomo 1", "Manzana (II)", "Roda  y María como suicidas del Sisga", "In Fraganti", "Cuentos para citaniños II Las monerias de una mona", "¡Viva España!", "Zócalo de la Tragedia", "Retrato hablado I", "Boceto de Indianapolis", "Boceto de Tapen Tapen", "Entreguerras-boceto", "Las Delicias ", "Y.I como Peregrino II", "Domingo de Resurrección: Colorado", "Mascarilla verde", "Desplazamiento horizontal", "La carguera Boceto", "Inundados: Mujer con colchón"]

let contexto = document.getElementById('micanvas').getContext('2d');
let opciones = {
  type: 'radar',
  data: {
    labels: etiquetas,
    datasets: [
      {
        label: "Irritación",
        data: [7.5, 2, 2, 3, 2, 2, 1, 6, 2, 6, 2, 2, 6, 1, 2, 5, 6, 3],
        backgroundColor: 'rgb(255,165,0)',
        borderColor: 'rgb(255,140,0)'

      },
    { 
      label: "Felicidad",
      data: [5, 6, 3, 8, 3, 6, 7, 2, 7, 2, 2, 2, 3, 4, 3, 3, 1, 7],
      backgroundColor: 'rgb(0,139,139)',
      borderColor: 'rgb(0,128,128)'
    }
  ]
},



}
let grafica = new Chart(contexto, opciones)

