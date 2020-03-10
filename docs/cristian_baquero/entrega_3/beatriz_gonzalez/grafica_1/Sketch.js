let datos = [3.0, 7.5, 1.0, 8.0, 2.0, 3.0, 5.0, 2.0, 7.5, 7.0, 7.0, 8.5, 3.0, 1.0, 0.0, 7.5, 7.0]
let obra = ["Encajera Almanaque Pielroja","Bodegón (I)","Un peso", "Cuentos para citaniños VIII La vida en el cuartel", "Los reveses de la realeza (boceto)","Señor presidente, qué honor estar con usted en este momento histórico","Exlibris Benoit Junot Smallpoxes","Turbay, Nidia, Bienestar Familiar,","Rectángulo negro","Diálogo institucional","Boceto Las Delicias","Cargueros (#7) Serie Vistahermosa","Mis días son como sombra que se alarga (Salmos/102,12)","Y.I para Bienal de Porto Alegre","Un millón de hectáreas bajo el agua. Particulares.  Modelo B","Boceto Tierra en Barranca ","Ceremonia de la caja proceso"]

let contexto = document.getElementById('mycanvas').getContext('2d');

let opciones = {
    type: 'bar',
    data: {
        labels: obra,
    datasets: [{
        label: 'Tristeza',
            borderWidth: 4,
            borderColor: 'rgb(90,28,29)',
            backgroundColor: 'rgba(90,28,29,0.5)',
            data: datos
        }]
    },

    options: {
        title: {
            display: true,
            defaultFontFamily: 'Helvetica',
            text: 'Beatriz González - Perpceción'
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
