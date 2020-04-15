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
  let svg = d3.select("#grafica1")
    .attr("width", svg_w)
    .attr("height", svg_h)

  let svg2 = d3.select("#grafica2")
    .attr("width", svg_w)
    .attr("height", svg_h)
  
  let svg3 = d3.select("#grafica3")
    .attr("width", svg_w)
    .attr("height", svg_h)

  // descomenta alguna visualización para verla

disembark_bars(data);
departxarrival_parallel(data);
make_map(data,route_map);
  
});

function disembark_bars(data) {
      let new_data = {};
      data.filter(d=>d.region_llegada!=undefined).map(d => {
        if (new_data[d.region_llegada]) {
          new_data[d.region_llegada].count++;
        } else {
          new_data[d.region_llegada] = {
            label: d.region_llegada,
            count: 1
          }
        }
      });
      new_data = Object.values(new_data);
      let num_casos = 100;
      new_data = new_data.filter(d=>d.count>num_casos);
      new_data.sort((a,b) => d3.ascending(a.count,b.count));
      let svg = d3.select("#grafica1")
    
      svg.append("g")
        //.attr("transform", `translate(${margin.l},${margin.t/2})`)
        .attr("transform", `translate(${margin.l},${margin.t/2})`)
        .append("text")
        .text(`Regiones de desembarque. (Más de ${num_casos} barcos)`)
        .attr("text-anchor",)
      
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
        .attr("fill", "	rgb(0, 139, 139)")
        d3.select("body").style("background-color", "rgb(230, 230, 250)")
    
}

function departxarrival_parallel(data) {
  let svg = d3.select("#grafica2")
  
  let x1 = 100;
  let x2 = 300;

  svg.append("g")
    .attr("transform",`translate(${margin.l},${margin.t/2})`)
    .append("text")
    .text(`Salida - Llegada`)
  
  let y1_scale = d3.scalePoint()
    .domain([... new Set(data.map(d=>d.puerto_salida))])
    .range([0,viz_h])
  
  svg.append("g")
    .attr("transform",`translate(${margin.l+x1},${margin.t})`)
    .call(d3.axisLeft(y1_scale))
  
  let y2_scale = d3.scalePoint()
    .domain([... new Set(data.map(d=>d.puerto_llegada_est))])
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
    .attr("y1",d=>y1_scale(d.puerto_salida))
    .attr("y2",d=>y2_scale(d.puerto_llegada_est))
    .attr("stroke", "darkorange");
}

function make_map(data,mapfunction) {
  d3.json("mapamundi.json").then(map=>{
    mapfunction(map,data)
  });
}

function route_map(mapdata,data) {
  const map_margin = {l:50,r:50,t:50,b:100}
  const map_w = svg_w - map_margin.l - map_margin.r;
  const map_h = svg_h - map_margin.t - map_margin.b;

  let svg = d3.select("#grafica3")

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

  let col = d3.color("magenta")
  col.opacity = 0.3;
  
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

