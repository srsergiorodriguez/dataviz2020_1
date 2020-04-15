//presento la serie de datos numéricos y la array categórica

let datos = [7.5, 2, 2, 3, 2, 2, 1, 6, 2, 6, 2, 2, 6, 1, 2, 5, 6, 3]
let etiquetas = ["Apuntes para la historia extensa Tomo 1", "Manzana (II)", "Roda  y María como suicidas del Sisga", "In Fraganti", "Cuentos para citaniños II Las monerias de una mona", "¡Viva España!", "Zócalo de la Tragedia", "Retrato hablado I", "Boceto de Indianapolis", "Boceto de Tapen Tapen", "Entreguerras-boceto", "Las Delicias ", "Y.I como Peregrino II", "Domingo de Resurrección: Colorado", "Mascarilla verde", "Desplazamiento horizontal", "La carguera Boceto", "Inundados: Mujer con colchón"]

let contexto = document.getElementById('micanvas').getContext('2d');
let opciones = {
  type: 'line',
  data: {
    labels: etiquetas,
    datasets: [
      {
        label: "Nivel de irritación",
        backgroundColor: 'rgb(255,69,0)',
        borderColor: 'rgb(255,99,71)',
        data: datos,
    }]
},

// Unos detallitos más o configuraciones
options: {
  title: {
    display: true,
            defaultFontFamily: 'Arial',
            text: 'Irritanción en la obra de Beatriz González'
        },
    
  }

}
  
let grafica = new Chart(contexto, opciones)

