# :wavy_dash: Visualización de datos 2020-1 :wavy_dash:
## Maestría en humanidades digitales Uniandes

Este es el Repositorio de la clase Visualización de Datos 2020-1 de la Maestría en Humanidades Digitales Uniandes

## :triangular_flag_on_post: Información general

Cronograma de la clase: ([enlace](https://docs.google.com/spreadsheets/d/1DwswmpAYTe26Tsgoxev0eM73QhUNXzxUuQHZH8BhRUI/edit?usp=sharing))

Notas de la clase: ([enlace](https://docs.google.com/spreadsheets/d/1K_rnWf3lV4N5knn7pLpzE9ClJoxl-ljuVs3BCbWUAt0/edit?usp=sharing))

Presentaciones de diapositivas: ([enlace](https://drive.google.com/drive/folders/1k00X_IFDQPX-b1W0ml1fMsVRXyf5wN_W?usp=sharing))

Retroalimentación a comentarios: ([enlace](https://drive.google.com/drive/folders/1Ji4qvDFIf8nAookTMyWtz7AHGA62kT1W?usp=sharing))

Y aquí pueden leer los comentarios que han escrito todos los de la clase: ([enlace](https://drive.google.com/file/d/1LFLGCjz4p2R8tFoQhxpx6zqcALecAwUX/view?usp=sharing))

### :v: Rúbricas para la evaluación de comentarios críticos
Los comentarios críticos son escritos de aproximadamente mil palabras que deben poner en cuestión, extender o defender una postura con respecto a algún tema discutido en clase o planteado en una lectura. Las rúbricas de evaluación para los comentarios son las siguientes:

<table>
  <tr>
    <th>Rúbrica</th>
    <th>Redacción</th>
    <th>Síntesis</th>
    <th>Investigación</th>
    <th>Argumentación</th>
  </tr>
  <tr>
    <td>Descripción</td>
    <td>El texto es claro, está bien redactado, está bien estructurado, es coherente la forma con el contenido argumentativo, está bien referenciado</td>
    <td>El texto sintetiza y define adecuadamente un problema pertinente para la clase, demuestra una lectura atenta e informada</td>
    <td>El texto demuestra investigación adicional con respecto al tema: presenta datos, ejemplos, nuevas posturas teóricas, conexiones inesperadas con otros textos</td>
    <td>El texto presenta argumentos críticos de manera convincente, lo que permite poner en cuestión, extender, o defender una postura o un punto de vista</td>
  </tr>
  <tr>
    <td>Puntos</td>
    <td>10</td>
    <td>10</td>
    <td>15</td>
    <td>15</td>
  </tr>
</table>

*<i>Los puntos suman 50, y son equivalentes a una nota en escala 0.0 a 5.0</i>

### Entrega 1
La entrega 1 consiste en crear un documento HTML en el que se codifique o anote el contenido de una página de un libro.
El documento HTML debe usar varias etiquetas para definir los tipos de elementos que serían equivalentes a la página del libro dentro de un sitio web: encabezados y sub-encabezados, párrafos, imágenes, enlaces...etc. Adicionalmente deben incluir algunos elementos de estilo CSS que modifiquen la apariencia del documento y lo hagan más interesante.

La idea es que experimenten y prueben con distintas formas de marcar el contenido, y que encuentren estrategias que les funcionen a su gusto y sus propósitos. Si tienen dudas, no olviden consultar los [relámpagos](https://github.com/srsergiorodriguez/relampagos) o las referencias de HTML y CSS que se encuentran en internet. Es imposible memorizarlo todo, así que es una buena práctica aprender a buscar de acuerdo a las necesidades de cada proyecto.
Para este ejercicio es particularmente adecuada la página de un libro de historia del arte, el cine o el diseño, pues contiene elementos distintivos que anotarse usando varias etiquetas diferentes.

Deben subir la entrega a la carpeta de este repositorio con su nombre. Creen una subcarpeta llamada "entrega_1" y ahí suban un archivo "index.html" con su documento anotado.

Aquí pueden ver los trabajos entregados:

[Cristian](https://srsergiorodriguez.github.io/dataviz2020_1/cristian_baquero/entrega_1/), [Camila](https://srsergiorodriguez.github.io/dataviz2020_1/camila_barajas/entrega_1/), [Mónica](https://srsergiorodriguez.github.io/dataviz2020_1/monica_ruiz/entrega_1/), [Andrés](https://srsergiorodriguez.github.io/dataviz2020_1/andres_polania/entrega_1/), [Teresa](https://srsergiorodriguez.github.io/dataviz2020_1/teresa_loayza/entrega_1/), [Isis](https://srsergiorodriguez.github.io/dataviz2020_1/isis_beleno/entrega_1/), [Ana María](https://srsergiorodriguez.github.io/dataviz2020_1/ana_maria_buitrago/entrega_1/)

### Entrega 2
Esta entrega está compuesta por dos partes:

—Objeto biográfico: primero, deben crear un objeto en JavaScript que contenga al menos diez (10) datos sobre ustedes. Los datos pueden ser cualquier cosa que se les ocurra, justamente la idea está en que piensen cómo podrían convertir esos datos biográficos a datos computacionales; procuren usar la cantidad más diversa de datatypes de JavaScript. Además, justo adelante de cada elemento del objeto, pongan un comentario que muestre qué tipo de dato de JavaScript es y qué tipo de dato "estadístico" es. Por ejemplo:

```javascript
let objeto = {
  dato1: 15, // Number Numérico
  dato2: "mueble" // String Categórico
}
```
Deben subir la entrega a la carpeta de este repositorio con su nombre a la carpeta "entrega_2"

—Anotación base de datos: segundo, deben anotar tres datos adicionales a los ítems registrados en el archivo JSON que tienen en su carpeta "entrega_2". Recuerden que ese archivo JSON contiene datos sobre el "Catálogo Razonado de Beatriz González". Simplemente deben seguir el [protocolo](https://github.com/srsergiorodriguez/dataviz2020_1/blob/master/plantillas/protocolo_anotacion_bg.txt) establecido en clase y deben añadir los datos extra a cada uno de los ítems.

### Entrega 3
Esta entrega está compuesta por dos partes:

—Data driven art: deben usar el objeto biográfico de JavaScript que crearon en la entrega anterior para crear una "obra de arte basada en datos", es decir, una obra que utilice los datos abstractos para codificar marcas y canales en una imagen. Deben hacer la obra en un canvas de p5. La idea es que usen y exploren varias de las posibilidades de la librería creativa: procuren usar distintas formas (elipses, rectángulos, triángulos, líneas) y codifiquen distintos canales de esas formas (el color, la longitud, el área, la inclinación, la posición...). Además, procuren usar condicionales y loops. Recuerden que siempre pueden consultar la referencia oficial de p5, los relámpagos y los video tutoriales. Entre más exploren y más ingeniosos sean con las soluciones, mejor.

Deben subir la entrega a la carpeta de este repositorio con su nombre a la carpeta "entrega_3" y a la subcarpeta "data_art"

—Gráfica convencional en chart.js: deben crear dos (2) gráficas convencionales con chart.js utilizando los datos que anotaron y añadieron al archivo json de las obras de Beatriz González, o los datos que ya estaban previamente anotados. Piensen cómo podrían visualizar alguno de esos datos y qué gráfica convencional sería la más adecuada (¿una de barras, de línea, de radar, una de dispersión, un histograma, una torta...?). De nuevo, entre más exploren y sean ingeniosos con las soluciones, mejor.

Trabajos de la entrega:

Mónica: [Chart](https://srsergiorodriguez.github.io/dataviz2020_1/monica_ruiz/entrega_3/data_art_Chart/), [P5](https://srsergiorodriguez.github.io/dataviz2020_1/monica_ruiz/entrega_3/data_art_P5/)

Ana María: [Chart 1](https://srsergiorodriguez.github.io/dataviz2020_1/ana_maria_buitrago/Entrega_3/E3_grafico_1/), [Chart 2](https://srsergiorodriguez.github.io/dataviz2020_1/ana_maria_buitrago/Entrega_3/E3_grafico_2), [P5](https://srsergiorodriguez.github.io/dataviz2020_1/ana_maria_buitrago/Entrega_3/art_AMBS/)

Cristian: [Chart 1](https://srsergiorodriguez.github.io/dataviz2020_1/cristian_baquero/entrega_3/beatriz_gonzalez/grafica_1/), [Chart 2](https://srsergiorodriguez.github.io/dataviz2020_1/cristian_baquero/entrega_3/beatriz_gonzalez/grafica_2/), [P5](https://srsergiorodriguez.github.io/dataviz2020_1/cristian_baquero/entrega_3/data_art/)

Teresa: [Chart 1](https://srsergiorodriguez.github.io/dataviz2020_1/teresa_loayza/Entrega_3/p5_BG_emociones/), [Chart 2](https://srsergiorodriguez.github.io/dataviz2020_1/teresa_loayza/Entrega_3/p5_BG_formatos/), [P5](https://srsergiorodriguez.github.io/dataviz2020_1/teresa_loayza/Entrega_3/p5_objeto/)

Andrés: [Chart](https://srsergiorodriguez.github.io/dataviz2020_1/andres_polania/entrega_3/chart/), [P5](https://srsergiorodriguez.github.io/dataviz2020_1/andres_polania/entrega_3/dataArt/)

Isis: [Chart 1](https://srsergiorodriguez.github.io/dataviz2020_1/isis_beleno/entrega_3/Beatriz%20Gonzalez/Grafico1/chart1/), [Chart 2](https://srsergiorodriguez.github.io/dataviz2020_1/isis_beleno/entrega_3/Beatriz%20Gonzalez/Grafico2/chart2/), [P5](https://srsergiorodriguez.github.io/dataviz2020_1/isis_beleno/entrega_3/Data%20art%20Isis/)

Camila: [Chart y P5](https://editor.p5js.org/ssergiorodriguezz/sketches/hmiXFKg5)

### Entrega 4
La *Base de datos del tráfico trasatlántico de esclavos* es un proyecto muy interesante y muy completo de recolección de datos históricos. La base, principalmente amparada por la Emory University, ha sido recopilada a lo largo de más de dos décadas, y podemos considerarla un ejemplo de trabajo riguroso con datos en ciencias sociales. En general, la base de datos recopila tres grupos de información generales: datos sobre el tráfico trasatlántico de esclavos, sobre el tráfico intra-americano, y datos sobre nombres de esclavos en barcas capturadas desde 1808.

Para desarrollar la entrega, lo primero que deben hacer es consular el sitio web de la base de datos: [https://slavevoyages.org/about/about#](https://slavevoyages.org/about/about#), leer acerca del proyecto y su historia, y ojear los métodos investigativos que han usado. Especialmente las secciones llamadas **"Para entender la base de datos"**.

Luego, deben buscar en este repositorio los sets de visualizaciónes básicas de las bases de datos de [tráfico intra-americano](https://github.com/srsergiorodriguez/dataviz2020_1/blob/master/datos/Slave_trade_interamerican.zip) y [nombres de esclavos](https://github.com/srsergiorodriguez/dataviz2020_1/blob/master/datos/Slave_trade_names.zip). Una vez hacen clic en los enlaces, deben cliquear "download". **Esos sets están escritos en d3** y contienen varias visualizaciones básicas de los datos (histogramas, gráficos de barras, de líneas, de área, de coordenadas paralelas, mapas). Si descomentan el código de las funciones que producen las gráficas pueden ver cada una de ellas (:eyes: *ojo: ¡todas se dibujan en el mismo svg!*).

Para la entrega deben **escoger tres (3) visualizaciones de los datos (puede ser de cualquiera de las dos bases de datos, o de ambas) y deben crear un documento HTML en el que hagan un pequeño análisis del tráfico de esclavos en América a partir de las visualizaciones escogidas**. Para hacer el documento deben echar mano de las cosas que hemos practicado en clase (crear encabezados, párrafos, insertar las gráficas en svg).
Recuerden que hay una [serie de videos](https://www.youtube.com/watch?v=GG6tINU_yfs&list=PLifoFTjT9GippEjpuwGFxnB2jnoo3fXmA) que explican el funcionamiento de d3.

Con respecto a la evaluación, hay **tres niveles de complejidad** de este ejercicio, ustedes deciden en cuál se sienten más cómodos: 1) Escoger entre las gráficas que ya están para hacer el análisis. 2) Modificar las gráficas que ya están para que expresen mejor el contenido de los datos (algunas gráficas no son apropiadas para dar cuenta de los datos, pero con algunas mejoras, pueden potenciar el resultado por defecto). 3) Crear sus propias gráficas en d3, e incluso investigar cómo producir gráficos menos convencionales (treemaps, sankeys, coxcombs, grafos, etc.).

***Suban en análisis en su carpeta del repositorio en una subcarpeta con el nombre entrega_4 (sin mayúscula), la fecha máxima de entrega es el 13 de abril***.

Trabajos de la entrega:

[Ana María](https://srsergiorodriguez.github.io/dataviz2020_1/ana_maria_buitrago/Entrega_4/AMBS%201/),
[Andrés](https://srsergiorodriguez.github.io/dataviz2020_1/andres_polania/entrega_4/),
[Camila](https://srsergiorodriguez.github.io/dataviz2020_1/camila_barajas/Entrega_4/),
[Isis](https://srsergiorodriguez.github.io/dataviz2020_1/isis_beleno/entrega_4corregido/),
[Mónica](https://srsergiorodriguez.github.io/dataviz2020_1/monica_ruiz/entrega_4/),
[Teresa](https://srsergiorodriguez.github.io/dataviz2020_1/teresa_loayza/entrega_4/)

### Entrega 5
Esta entrega consiste en hacer una *visualización simbólica* como las que hemos discutido en clase. Les propongo tres opciones diferentes, ustedes pueden escoger la que más les interese:

* *Crear el panel de un atlas cultural*. Inspirados en el Atlas Mnemosyne de Aby Warburg pueden crear un panel en el que muestren varias relaciones entre objetos culturales. Esos objetos pueden ser de cualquier tipo (obras de arte, piezas literarias, objetos de diseño, canciones, películas, lenguajes, diseño popular, arquitectura, eventos históricos... etc). Pueden hacer el panel a mano o a computador, y deben acompañar las imágenes con un texto corto (max 400 palabras) que sirva como guía para leer el panel; junten todo en un pdf.

* *Crear un árbol genealógico cultural*. Inspirados en la teoría memética pueden crear un árbol genealógico en el que muestren cómo distintos objetos culturales son derivaciones de objetos previos. Pueden hacer el árbol a mano o a computador, y deben acompañar las imágenes con un texto corto (max 400 palabras) que sirva como guía para leer el árbol; junten todo en un pdf.

* *Crear un entorno de visualización en Palladio*. Pueden recopilar una o varias tablas con datos que estén interesados en analizar y que estén formateados adecuadamente para que Palladio los lea adecuadamente. Lo que tendrían que enviarme en este caso es un pdf con visualizaciones concretas producidas en Palladio a partir de los datos y un texto corto (max 400 palabras) que explique los descubrimientos que tuvieron en la exploración o un análisis concreto de los datos.

***Deben enviarme el ejercicio por correo antes del 4 de mayo***
