let tristeza = [3.0, 7.5, 1.0, 8.0, 2.0, 3.0, 5.0, 2.0, 7.5, 7.0, 7.0, 8.5, 3.0, 1.0, 0.0, 7.5, 7.0]
let felicidad = [7.0, 2.0, 2.5, 1.0, 6.0, 0.0, 1.0, 5.0, 1.0, 2.0, 1.0, 1.0, 5.0, 6.0, 1.0, 2.0, 2.0]
let irritacion = [6.5, 3.0, 8.5, 5.0, 2.0, 9.5, 3.0, 4.5, 2.5, 7.5, 3.5, 1.5, 2.5, 1.5, 9.5, 6.5, 5.5]
let obra = ["Encajera Almanaque Pielroja", "Bodegón (I)", "Un peso", "Cuentos para citaniños VIII La vida en el cuartel", "Los reveses de la realeza (boceto)","Señor presidente, qué honor estar con usted en este momento histórico","Exlibris Benoit Junot Smallpoxes","Turbay, Nidia, Bienestar Familiar,","Rectángulo negro","Diálogo institucional","Boceto Las Delicias","Cargueros (#7) Serie Vistahermosa","Mis días son como sombra que se alarga (Salmos/102,12)","Y.I para Bienal de Porto Alegre","Un millón de hectáreas bajo el agua. Particulares.  Modelo B","Boceto Tierra en Barranca ","Ceremonia de la caja proceso"]

let contexto = document.getElementById('mycanvas').getContext('2d');

let opciones = {
    type: 'radar',
    data: {
        labels: obra,
    datasets: [{
        label: 'Tristeza',
            borderWidth: 2,
            borderColor: 'rgb(60, 28, 30)',
            backgroundColor: 'rgba(60, 28, 30,0.2)',
            data: tristeza
        },
            {
        label: 'Felicidad',
            borderWidth: 2,
            borderColor: 'rgb(48, 57, 27)',
            backgroundColor: 'rgba(48, 57, 27,0.2)',
            data: felicidad
        },
            {
        label: 'Irritación',
            borderWidth: 2,
            borderColor: 'rgb(18, 38, 36)',
            backgroundColor: 'rgba(18, 38, 36,0.2)',
            data: irritacion
        }]
    },

    options: {
        title: {
            display: true,
            defaultFontFamily: 'Helvetica',
            text: 'Beatriz González - Perpceción Comparativa'
        },

        animation: {
            duration: 1000
        },
        
        hover: {
            animationDuration: 1000
        },
        
        responsiveAnimationDuration: 1000,
    }
};

let grafica = new Chart (contexto, opciones);
