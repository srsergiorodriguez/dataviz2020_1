const svg_w = 650; // El ancho de los contenedores svg
const svg_h = 650; // El alto de los contenedores svg

// un objeto con información sobre las márgenes
const margin = {l:150,r:50,t:50,b:40}
const viz_w = svg_w - margin.l - margin.r; // el ancho de las gráficas
const viz_h = svg_h - margin.t - margin.b; // el alto de las gráficas

// Esta función carga los datos de nombres africanos
// La base de datos está en csv
d3.csv("AfricanNamesDatabase.csv",(element)=> {
  // Esta parte del código ajusta los tipos de datos
  element["Voyage ID"] = +element["Voyage ID"];
  element["Height (in)"] = +element["Height (in)"];
  element["Height (cm)"] = element["Height (in)"]*2.54;
  element.ID = +element.ID;
  element.Age = +element.Age;
  element.Arrival = +element.Arrival;
  return element
}).then(data => {
  // Esta parte del código carga todas las visualizaciones

  // La selección del svg que contendrá la gráfica
  // y ajustes de su ancho y alto
  let svg = d3.select("#svg_graph")
    .attr("width", svg_w)
    .attr("height", svg_h)
    

  console.log(data[0]);

  // descomenta alguna visualización para verla
  //origin_bars(data);
  // ship_bars(data);
  //name_bars(data);
  //sexage_bars(data);
  // arrival_bars(data);
  age_histogram(data);
  // height_histogram(data);
  // agexheight_scatter(data);
  // disembarkxembark_parallel(data);
  
});
d3.csv("AfricanNamesDatabase.csv",(element)=> {
  // Esta parte del código ajusta los tipos de datos
  element["Voyage ID"] = +element["Voyage ID"];
  element["Height (in)"] = +element["Height (in)"];
  element["Height (cm)"] = element["Height (in)"]*2.54;
  element.ID = +element.ID;
  element.Age = +element.Age;
  element.Arrival = +element.Arrival;
  return element
}).then(data => {
  // Esta parte del código carga todas las visualizaciones

  // La selección del svg que contendrá la gráfica
  // y ajustes de su ancho y alto
  let svg = d3.select("#svg_graph1")
    .attr("width", svg_w)
    .attr("height", svg_h)

  console.log(data[0]);

  // descomenta alguna visualización para verla
  //origin_bars(data);
  // ship_bars(data);
  //name_bars(data);
  sexage_bars(data);
  // arrival_bars(data);
  //age_histogram(data);
  // height_histogram(data);
  // agexheight_scatter(data);
  // disembarkxembark_parallel(data);
  
});
d3.csv("AfricanNamesDatabase.csv",(element)=> {
  // Esta parte del código ajusta los tipos de datos
  element["Voyage ID"] = +element["Voyage ID"];
  element["Height (in)"] = +element["Height (in)"];
  element["Height (cm)"] = element["Height (in)"]*2.54;
  element.ID = +element.ID;
  element.Age = +element.Age;
  element.Arrival = +element.Arrival;
  return element
}).then(data => {
  // Esta parte del código carga todas las visualizaciones

  // La selección del svg que contendrá la gráfica
  // y ajustes de su ancho y alto
  let svg = d3.select("#svg_graph2")
    .attr("width", svg_w)
    .attr("height", svg_h)

  console.log(data[0]);

  // descomenta alguna visualización para verla
  //origin_bars(data);
  // ship_bars(data);
  name_bars(data);
  //sexage_bars(data);
  // arrival_bars(data);
  //age_histogram(data);
  // height_histogram(data);
  // agexheight_scatter(data);
  // disembarkxembark_parallel(data);
  
});
function origin_bars(data) {
  // Este código filtra la información y realiza un conteo de
  // cuántas personas esclavizadas eran provenientes de cada
  // país de origen
  let new_data = {};
  data.filter(d=>d["Country of Origin"].trim()!="").map(d => {
    if (new_data[d["Country of Origin"]]) {
      new_data[d["Country of Origin"]].count++;
    } else {
      new_data[d["Country of Origin"]] = {
        label: d["Country of Origin"],
        count: 1
      }
    }
  });

  // La variable new_data representa el conteo de cada país
  new_data = Object.values(new_data);

  // A continuación se aplica un filtro con el # de casos por país
  let num_casos = 100;
  new_data = new_data.filter(d=>d.count>num_casos);

  // Aquí se ordenan los datos por # casos
  new_data.sort((a,b) => d3.ascending(a.count,b.count));

  //La selección del svg que contendrá la gráfica
  let svg = d3.select("#svg_graph")
  
  // El título que tendrá la gráfica
  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Países de origen. (Más de ${num_casos} personas)`)
  
  // La definición del sistema de coordenas de la escala x
  let x_scale = d3.scaleLinear() // en este caso, una escala linear
    .domain([0,d3.max(new_data,d=>d.count)]) // los valores de entrada
    .range([0,viz_w]) // los valores de salida proyectados
    .nice() // un pequeño sobrante en la escala
  
  // Esto dibuja una línea de escala de acuerdo a x_scale
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  // La definición del sistema de coordenas de la escala y
  let y_scale = d3.scaleBand() // en este caso, una escala de bandas
    .domain(new_data.map(d=>d.label)) // los valores de entrada
    .range([0,viz_h]) // los valores de salida proyectados
    .padding(0.1) // un pequeño margen para las barras
  
  // Esto dibuja una línea de escala de acuerdo a x_scale
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))
  
  // Esto dibuja las barras del gráfico
  let bars = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`) // primero se traslada el sistema de coordenadas al lugar correcto del gráfico
    .selectAll("g")
    .data(new_data) // se especifican los datos
    .enter() // se hace el binding de los datos con las formas del DOM
    .append("g") // se crean grupos que contendrán las barras
    .attr("transform",d=>`translate(0,${y_scale(d.label)})`) // se ubica cada barra
    .append("rect") // se añaden rectángulos
    .attr("height",y_scale.bandwidth()) // se define el alto de los rectángulos de acuerdo a la escala y
    .attr("width",d=>x_scale(d.count)) // se define el largo de los rectángulos de acuerdo a su valor
    .attr("fill", "steelblue") // se define el color de los rectángulos
}

function ship_bars(data) {
  let new_data = {};
  data.filter(d=>d["Ship name"].trim()!="").map(d => {
    if (new_data[d["Ship name"]]) {
      new_data[d["Ship name"]].count++;
    } else {
      new_data[d["Ship name"]] = {
        label: d["Ship name"],
        count: 1
      }
    }
  });

  new_data = Object.values(new_data);
  let num_casos = 500;
  new_data = new_data.filter(d=>d.count>num_casos)
  
  let svg = d3.select("#svg_graph")
  
  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Embarcaciones. (Más de ${num_casos} personas esclavizadas)`)
  
  let x_scale = d3.scaleLinear()
    .domain([0,d3.max(new_data,d=>d.count)])
    .range([0,viz_w])
    .nice()
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  let y_scale = d3.scaleBand()
    .domain(new_data.map(d=>d.label))
    .range([0,viz_h])
    .padding(0.1)
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))
  
  let bars = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .selectAll("g")
    .data(new_data)
    .enter()
    .append("g")
    .attr("transform",d=>`translate(0,${y_scale(d.label)})`)
    .append("rect")
    .attr("height",y_scale.bandwidth())
    .attr("width",d=>x_scale(d.count))
    .attr("fill", "steelblue")
}

function name_bars(data) {
  let new_data = {};
  data.filter(d=>d.Name.trim()!="").map(d => {
    if (new_data[d.Name]) {
      new_data[d.Name].count++;
    } else {
      new_data[d.Name] = {
        label: d.Name,
        count: 1
      }
    }
  });

  new_data = Object.values(new_data);
  let num_casos = 55;
  new_data = new_data.filter(d=>d.count>num_casos);
  new_data.sort((a,b) => d3.ascending(a.count,b.count));
  
  let svg = d3.select("#svg_graph2")
  
  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Nombres. (Frecuencia mayor a ${num_casos} casos)`)
  
  let x_scale = d3.scaleLinear()
    .domain([0,d3.max(new_data,d=>d.count)])
    .range([0,viz_w])
    .nice()
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  let y_scale = d3.scaleBand()
    .domain(new_data.map(d=>d.label))
    .range([0,viz_h])
    .padding(0.1)
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))
  
  let bars = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .selectAll("g")
    .data(new_data)
    .enter()
    .append("g")
    .attr("transform",d=>`translate(0,${y_scale(d.label)})`)
    .append("rect")
    .attr("height",y_scale.bandwidth())
    .attr("width",d=>x_scale(d.count))
    .attr("fill", "steelblue")
}

function sexage_bars(data) {
  let new_data = {};
  data.filter(d=>d.Sexage.trim()!="").map(d => {
    if (new_data[d.Sexage]) {
      new_data[d.Sexage].count++;
    } else {
      new_data[d.Sexage] = {
        label: d.Sexage,
        count: 1
      }
    }
  });
  new_data = Object.values(new_data);
  
  let svg = d3.select("#svg_graph1")
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Conteo de Sexage (categorías de género/edad)")
  
  let x_scale = d3.scaleBand()
    .domain(new_data.map(d=>d.label))
    .range([0,viz_w])
    .padding(0.1)
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  let y_scale = d3.scaleLinear()
    .domain([0, d3.max(new_data,d=>d.count)])
    .range([viz_h, 0])
    .nice()
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))
  
  let bars = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .selectAll("g")
    .data(new_data)
    .enter()
    .append("g")
    .attr("transform",d=>`translate(${x_scale(d.label)},${y_scale(d.count)})`)
    .append("rect")
    .attr("width",x_scale.bandwidth())
    .attr("height", d=>viz_h-y_scale(d.count))
    .attr("fill", "steelblue")
}

function arrival_bars(data) {
  let new_data = {};
  data.filter(d=>d.Arrival).map(d => {
    if (new_data[d.Arrival]) {
      new_data[d.Arrival].count++;
    } else {
      new_data[d.Arrival] = {
        year: d.Arrival,
        count: 1
      }
    }
  });

  new_data = Object.values(new_data);
  let num_casos = 500;
  new_data = new_data.filter(d=>d.count>num_casos)
  
  let svg = d3.select("#svg_graph")
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Llegadas a puertos de liberación`)
  
  let x_scale = d3.scaleLinear()
    .domain(d3.extent(new_data,d=>d.year))
    .range([0,viz_w])
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale).ticks(10,"d"))
  
  let y_scale = d3.scaleLinear()
    .domain([0,d3.max(new_data.map(d=>d.count))])
    .range([viz_h,0])
    .nice()
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))

  let area = d3.area()
    .curve(d3.curveNatural)
    .x(d=>x_scale(d.year))
    .y1(d=>y_scale(d.count))
    .y0(viz_h)

  let graph = svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t})`)
    .datum(new_data)
    .append("path")
    .attr("d",area)
    .attr("fill", "steelblue")
}

function age_histogram(data) {
  let svg = d3.select("#svg_graph")
  
  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Histograma de las edades de los esclavos")
  
  let x_scale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Age)])
    .range([0, viz_w])
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  let histogram = d3.histogram()
    .value(d => d.Age)
    .domain(x_scale.domain())
  
  let bins = histogram(data);
  
  let y_scale = d3.scaleLinear()
    .domain([0, d3.max(bins,d=> d.length)])
    .range([viz_h, 0])
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))
  
  let bars = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .selectAll("g")
    .data(bins)
    .enter()
    .append("g")
    .attr("transform",d=>`translate(${x_scale(d.x0)+2},${y_scale(d.length)})`)
    .append("rect")
    .attr("width",d=>x_scale(d.x1 - d.x0)-2)
    .attr("height",d=>viz_h-y_scale(d.length))
    .attr("fill", "steelblue")
}

function height_histogram(data) {
  let svg = d3.select("#svg_graph")
  
  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Histograma de las estaturas de los esclavos")
  
  let x_scale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d["Height (cm)"])])
    .range([0, viz_w])
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  let histogram = d3.histogram()
    .value(d => d["Height (cm)"])
    .domain(x_scale.domain())
  
  let bins = histogram(data);
  
  let y_scale = d3.scaleLinear()
    .domain([0, d3.max(bins,d=> d.length)])
    .range([viz_h, 0])
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))
  
  let bars = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .selectAll("g")
    .data(bins)
    .enter()
    .append("g")
    .attr("transform",d=>`translate(${x_scale(d.x0)+2},${y_scale(d.length)})`)
    .append("rect")
    .attr("width",d=>x_scale(d.x1 - d.x0)-2)
    .attr("height",d=>viz_h-y_scale(d.length))
    .attr("fill", "steelblue")
}

function agexheight_scatter(data) {
  let svg = d3.select("#svg_graph")
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Dispersión edad x altura")
  
  let x_scale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Age)])
    .range([0, viz_w])

  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  let y_scale = d3.scaleLinear()
    .domain([0, d3.max(data,d=> d["Height (cm)"])])
    .range([viz_h, 0])

  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .call(d3.axisLeft(y_scale))
  
  let point_color = d3.color("steelblue")
  point_color.opacity = 0.5;
  
  let points = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform",d=>`translate(${x_scale(d.Age)},${y_scale(d['Height (cm)'])})`)
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",2)
    .attr("fill", point_color)
}

function disembarkxembark_parallel(data) {
  let svg = d3.select("#svg_graph")
  
  let x1 = 100;
  let x2 = 300;

  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Embarcos - Desembarcos`)
  
  let y1_scale = d3.scalePoint()
    .domain([... new Set(data.map(d=>d.Embarkation))])
    .range([0,viz_h])
  
  svg.append("g")
    .attr("transform",`translate(${margin.l+x1},${margin.t})`)
    .call(d3.axisLeft(y1_scale))
  
  let y2_scale = d3.scalePoint()
    .domain([... new Set(data.map(d=>d.Disembarkation))])
    .range([0,viz_h])
  
  svg.append("g")
    .attr("transform",`translate(${margin.l+x2},${margin.t})`)
    .call(d3.axisRight(y2_scale))
  
  let lines = svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t})`)
    .selectAll("line")
    .data(data)
    .enter()
    .append("line")
    .attr("x1",x1)
    .attr("x2",x2)
    .attr("y1",d=>y1_scale(d.Embarkation))
    .attr("y2",d=>y2_scale(d.Disembarkation))
    .attr("stroke", "steelblue");
}