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
  let svg = d3.select("#grafica_1")
    .attr("width", svg_w)
    .attr("height", svg_h)

    let svg2 = d3.select("#grafica_2")
    .attr("width", svg_w)
    .attr("height", svg_h)

    let svg3 = d3.select("#grafica_3")
    .attr("width", svg_w)
    .attr("height", svg_h)

  console.log(data[0]);

  // descomenta alguna visualización para verla
  sexage_bars(data);
  age_histogram(data);
  agexheight_scatter(data);

});



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
  
  let svg = d3.select("#grafica_1")
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Conteo de Sexage (categorías de género/edad)")
  
  let x_scale = d3.scaleBand()
    .domain(new_data.map(d=>d.label))
    .range([0,viz_w])
    .padding(0.4)
  
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
    .attr("fill", "black")
}

function age_histogram(data) {
  let svg = d3.select("#grafica_2")
  
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
    .thresholds (80);
  
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
    .attr("fill", "red")
}

function agexheight_scatter(data) {
  let svg = d3.select("#grafica_3")
  
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