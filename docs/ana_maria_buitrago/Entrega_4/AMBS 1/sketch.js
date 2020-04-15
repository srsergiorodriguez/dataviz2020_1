// Tráfico interamericano de esclavos
// Información tomada de la base de datos https://slavevoyages.org/

const svg_w = 850; // El ancho de los contenedores svg
const svg_h = 650; // El alto de los contenedores svg

// un objeto con información sobre las márgenes
const margin = {l:250,r:50,t:50,b:40}
const viz_w = svg_w - margin.l - margin.r; // el ancho de las gráficas
const viz_h = svg_h - margin.t - margin.b; // el alto de las gráficas

// Esta función carga los datos de nombres africanos
// La base de datos está en csv
d3.csv("interamerican_traffic.csv",(element)=> {
  // Esta parte del código ajusta los tipos de datos y filtra la info relevante
  let filtered = {
    voyageid: element.voyageid, // identificación del viaje
    bandera: nationals[element.national], // bandera nacional de la nave
    suerte_viaje: fate1[element.fate], // suerte del viaje
    suerte_esclavos: fate2[element.fate2], // suerte de los esclavos
    suerte_dueno: fate4[element.fate4], // suerte del dueño
    resistencia: resistance[element.resistance], // casos de resistencia de los esclavos
    puerto_salida: specificregions[element.portdep.substring(0,3)], // lugar de embarco
    puerto_llegada_est: specificregions[element.arrport.substring(0,3)], // lugar de desembarco estimado
    region_llegada: specificregions[element.regem1.substring(0,3)], // región de desembarco de los esclavos
    lugar_llegada_esclavos: specificregions[element.sla1port.substring(0,3)], // lugar de llegada de los esclavos
    lugar_compra: specificregions[element.plac1tra.substring(0,3)], // lugar de compra de esclavos
    fecha_partida: element.date_dep,
    fecha_compra: element.date_buy,
    fecha_llegada_esclavos: element.date_land1,
    fecha_regreso: element.date_depam,
    fecha_fin: element.date_end,
    esclavos_comprados: element.tslavesp,
    esclavos_llegan: element.slaarriv,
    rango_mortalidad: +element.vymrtrat == " " ? undefined: element.vymrtrat
  }
  return filtered
}).then(data => {
  // Esta parte del código carga todas las visualizaciones

  // La selección del svg que contendrá la gráfica
  // y ajustes de su ancho y alto
  let svg1 = d3.select("#graficamapa")
      .attr("width", svg_w)
      .attr("height", svg_h)

  let svg2 = d3.select("#graficaembarque")
      .attr("width", svg_w)
      .attr("height", svg_h)
  
  let svg = d3.select("#graficadesembarque")
      .attr("width", svg_w)
      .attr("height", svg_h)

  // descomenta alguna visualización para verla
  embark_bars(data);
  disembark_bars(data);
  // mortality_histogram(data);
  make_map(data,sell_map);
  //make_map(data,route_map);
  
});

function embark_bars(data) {
  let new_data = {};
  data.filter(d=>d.puerto_salida!=undefined).map(d => {
    if (new_data[d.puerto_salida]) {
      new_data[d.puerto_salida].count++;
    } else {
      new_data[d.puerto_salida] = {
        label: d.puerto_salida,
        count: 1
      }
    }
  });
  new_data = Object.values(new_data);
  let svg = d3.select("#graficaembarque")

  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Regiones de embarque`)
  
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
    .attr("fill", "steelred")
}

function disembark_bars(data) {
  let new_data = {};
  data.filter(d=>d.region_llegada!=undefined).map(d => {
    if (new_data[d.region_llegada]) {
      new_data[d.region_llegada].count++;
    } else {
      new_data[d.region_llegada] = {
        label: d.region_llegada,
        count: 10
      }
    }
  });
  new_data = Object.values(new_data);
  let num_casos = 100;
  new_data = new_data.filter(d=>d.count>num_casos);
  new_data.sort((a,b) => d3.ascending(a.count,b.count));
  let svg = d3.select("#graficadesembarque")

  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Regiones de desembarque. (Más de ${num_casos} barcos)`)
  
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
    .attr("fill", "red")
}



function mortality_histogram(data) {
  let svg = d3.select("#svg_graph")
  
  svg.append("g")
    .attr("transform", `translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Histograma de rango de mortalidad de los esclavos durante el transporte")
  
  let x_scale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.rango_mortalidad)])
    .range([0, viz_w])
  
  svg.append("g")
    .attr("transform",`translate(${margin.l},${viz_h+margin.t})`)
    .call(d3.axisBottom(x_scale))
  
  let histogram = d3.histogram()
    .value(d => d.rango_mortalidad)
    .domain(x_scale.domain())
    .thresholds(5)
  
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


function make_map(data,mapfunction) {
  d3.json("mapamundi.json").then(map=>{
    mapfunction(map,data)
  });
}

function sell_map(mapdata,data) {
  const map_margin = {l:70,r:70,t:150,b:150}
  const map_w = svg_w - map_margin.l - map_margin.r;
  const map_h = svg_h - map_margin.t - map_margin.b;

  let svg = d3.select("#graficamapa")

  let mapa = svg.append("g")
    .attr("transform",`translate(${map_margin.l},${map_margin.t})`)
    .attr("width",map_w)
    .attr("height",map_h)
  
  let projection = d3.geoMercator()
    .scale(map_w/(2*Math.PI))
    .translate([map_w/2,map_h/2])
    .postclip(d3.geoClipRectangle(0,0,map_w,map_h))

  let geoPath = d3.geoPath().projection(projection)

  mapa.selectAll("path")
    .data(mapdata.features)
    .enter().append("path")
    .attr("d",(d)=>geoPath(d))
    .attr("fill","grey")
    .attr("stroke","blue")

  let landmarks = data
    .map(d=>coordinates[d.lugar_compra])
    .filter(d=>d!=undefined)

  let col = d3.color("red")
  col.opacity = 10;

  mapa.append("g")
    .selectAll("circle")
    .data(landmarks)
    .enter().append("circle")
    .attr("cx",d=>projection([d[1],d[0]])[0])
    .attr("cy",d=>projection([d[1],d[0]])[1])
    .attr("r",2)
    .attr("fill",col)

  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Lugares de venta de esclavos en el tráfico interamericano")
    .attr("fill","black")
}

function route_map(mapdata,data) {
  const map_margin = {l:50,r:50,t:150,b:150}
  const map_w = svg_w - map_margin.l - map_margin.r;
  const map_h = svg_h - map_margin.t - map_margin.b;

  let svg = d3.select("#svg_graph")

  let mapa = svg.append("g")
    .attr("transform",`translate(${map_margin.l},${map_margin.t})`)
    .attr("width",map_w)
    .attr("height",map_h)
  
  let projection = d3.geoMercator()
    .scale(map_w/(2*Math.PI))
    .translate([map_w/2,map_h/2])
    .postclip(d3.geoClipRectangle(0,0,map_w,map_h))

  let geoPath = d3.geoPath().projection(projection)

  mapa.selectAll("path")
    .data(mapdata.features)
    .enter().append("path")
    .attr("d",(d)=>geoPath(d))
    .attr("fill","lightgrey")
    .attr("stroke","grey")

  let col = d3.color("steelblue")
  col.opacity = 0.6;
  
  filtered_data = data.map(d=>{
    return {
      puerto_salida: coordinates[d.puerto_salida],
      region_llegada: coordinates[d.region_llegada]
    }
  })
  filtered_data = filtered_data.filter(d=>d.puerto_salida!=undefined&&d.region_llegada!=undefined);

  mapa.append("g")
    .selectAll("line")
    .data(filtered_data)
    .enter().append("line")
    .attr("x1",d=>projection([d.puerto_salida[1],d.puerto_salida[0]])[0])
    .attr("y1",d=>projection([d.puerto_salida[1],d.puerto_salida[0]])[1])
    .attr("x2",d=>projection([d.region_llegada[1],d.region_llegada[0]])[0])
    .attr("y2",d=>projection([d.region_llegada[1],d.region_llegada[0]])[1])
    .attr("stroke",col)
    .attr("stroke-width",4)

  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text("Mapa de rutas del tráfico de esclavos. Salidas-Llegadas")
    .attr("fill","black")
}

