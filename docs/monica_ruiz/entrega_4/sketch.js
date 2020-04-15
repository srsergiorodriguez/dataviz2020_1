// Tráfico interamericano de esclavos
// Información tomada de la base de datos https://slavevoyages.org/

const svg_w = 900; // El ancho de los contenedores svg
const svg_h = 700; // El alto de los contenedores svg

// un objeto con información sobre las márgenes
const margin = {l:50,r:50,t:50,b:40}
//const viz_w = svg_w - margin.l - margin.r; // el ancho de las gráficas
//const viz_h = svg_h - margin.t - margin.b; // el alto de las gráficas

// Esta función carga los datos de Viajes Esclavistas: Intraamericano
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
      esclavos_comprados: element.tslavesd,
      esclavos_llegan: element.slaarriv,
      rango_mortalidad: +element.vymrtrat == " " ? undefined: element.vymrtrat
    }
    return filtered
  }).then(data => {
    bubbles_chart(data);
    make_map(data,route_map);
  });

// Esta función carga los datos de los Nombres Africanos 
// La base de datos está en csv
d3.csv("AfricanNamesDatabase.csv",(element)=> {
  // Esta parte del código ajusta los tipos de datos y filtra la info relevante
  let nombres = {
    voyageid: element.VoyageID, // identificación del viaje
    nombre: element.Name, // nombre de la persona
    sexo: element.Sexage, // género/edad (joven o adulto)
    edad: element.Age, // edad de la persona
    altura: element.Height, // altura en pulgadas de la persona
    nombre_barco: element.Shipname, // nombre del barco
    ano_llegada: element.Arrival, // año de llegada
    lugar_desembarque: element.Disembarkation, // lugar de desembarque
    lugar_embarque: element.Embarkation, // lugar de embarque
    pais_origen: element.CountryofOrigin // país de origen
  }
  return nombres
}).then(data => {
    stacked_bar(data);
});

// GRÀFICO DE BURBUJAS
function bubbles_chart (data) {
  // Filtrar para seleccionar los datos con valores mayores a 0
  let new_data = {};
  let num_esclavos = 0;
  new_data = data.filter(d=>d.esclavos_llegan>num_esclavos);
  new_data = Object.values(new_data);

  // Agrupar los datos por lugar_llegada_esclavos (sla1port)
  let group_lugar_llegada = d3.nest()
    .key(function(d) { return d.lugar_llegada_esclavos;})
    .rollup(function(v) { return d3.sum(v, function(d) { return d.esclavos_llegan; }); })
    .entries(new_data);

  // Tamaño máximo de las burbujas
  let diameter = 700; 
  let minValue = d3.min(
      group_lugar_llegada,
      (esclavos) => esclavos.value)

  let maxValue = d3.max(
    group_lugar_llegada,
    (esclavos) => esclavos.value)

 // let format   = d3.format(",d");
  // Esquema de colores usado para presentar las burbujas
  let color    = d3.scaleOrdinal(d3.schemeTableau10);
 
  // Creación de las burbijas  
  let bubble = d3.pack()
    .size([diameter, diameter])
    .padding(1.5);

  // Para modificar la visualización
  let svg = d3.select("#svg_graph")
      .attr("width", diameter ) 
      .attr("height", diameter )
      .attr("class", "bubble");

  // Para dar formato al tooltip
  // -1- Crear un tooltip
  let tooltip = d3.select("body")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("font-family", "Hiragino Sans GB,arial")
    .style("background-color", "#F7EEC8")
    .style("border-radius", "5px")
    .style("padding", "2px")
    .style("color", "black")
    .style("font-size", "10px")

  // -2- Comportamiento del tooltip en el evento mouseover 
  let tipMouseover = function(d) {
    let html  = "Puerto de llegada: "+  d.data["key"] + "</br>" + 
        "# Esclavos que llegan: "+  "<span style='color:" + color(d.value) +
        ";'><b>" + d.value + "</b></span></br>"
    tooltip.html(html)
        .style("left", (d3.event.pageX + 15) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
        .transition()
        .duration(200) // ms
        .style("opacity", 0.9) // started as 0!

  };
  // -3- Comportamiento del tooltip en ele evento mouseout
  let tipMouseout = function(d) {
      tooltip.transition()
          .duration(300) // ms
          .style("opacity", 0); // don't care about position!
  };

  // Para configurar el rango de tamaño de las burbujas
  let tamanoBubble = d3.scaleSqrt()
    .domain([minValue, maxValue])
    .range([20, diameter/8])
  

  // Establecer el formato de la información como es requerida
  // Jerarquía de los datos
  let root = d3.hierarchy({children : group_lugar_llegada})
    .sum(function(d) { return d.value; });

  // Con la jerarquía de los dartos establecida, se generan las burbujas
  bubble(root);

  // Actualizar el chart
  let bubbles = svg.selectAll(".bubble")
    .data(root.children)
    .enter();

   // Crear las burbujas
  bubbles.append("circle")
    .attr("class", "circle")
    .attr("r", function(d){ return d.r; })
    .attr("cx", function(d){ return d.x; })
    .attr("cy", function(d){ return d.y; })
    .style("fill", function(d) { return color(d.value); })


   // Adicionar el texto y tooltip a las burbujas 
  bubbles.append("text")
    .attr("x", function(d){ return d.x; })
    .attr("y", function(d){ return d.y + 5; })
    .attr("text-anchor", "middle")
    .text(function(d){ return d.data["key"].substring(0, d.r / 3); })
    .style("fill","black")
    .style("font-family", "Hiragino Sans GB, Helvetica Neue, Helvetica, Arial, san-serif")
    .style("font-size", "11px")
    .on("mouseover", tipMouseover)
    .on("mouseleave", tipMouseout)
}

// GRÀFICO DE BARRAS
function stacked_bar(data){
  // Filtrar para seleccionar los datos con valores en el campo sexo
  let new_data = {};
  new_data = data.filter(d=>d.sexo!= " ");
  new_data = Object.values(new_data);
  
  // Valores para los años mínimo y máximo
  let minValue = d3.min(
    new_data,
    (annoLlegada) => annoLlegada.ano_llegada)

  let maxValue = d3.max(
    new_data,
    (annoLlegada) => annoLlegada.ano_llegada)
  
  let keys_data = ["Man", "Woman", "Girl", "Boy"];

  // Agrupación de la infomación por año y sexo
  let data_grouped = d3.nest()
    .key(function(d) { return d.ano_llegada;})
    .key(function(d) { return d.sexo;})
    .rollup(function(v) { return d3.sum(v, function(d) { return 1; }); })
    .entries(new_data);
  
  // Para formatear los datos y facilitar su manejo para la gráfica
  let total_datos = data_grouped.length;
  let data_formated_aux = [];
  let data_formated = [];
  let data_annos = [];
  
 for (i=0;i < total_datos;i++){
   let objeto = {}; 
    objeto.Anno = data_grouped[i].key;
    let general = data_grouped[i].values;
    data_annos.push(objeto.Anno);
    for(var n = 0; n < general.length; n++){
      let new_obj = Object.values(general[n]);
      if (new_obj[0] == "Man" ) {
        objeto.Man  = new_obj[1];
      } else if (new_obj[0] == "Woman") {
        objeto.Woman  = new_obj[1];
      } else if (new_obj[0] == "Girl"){
        objeto.Girl  = new_obj[1];
      } else {
        objeto.Boy = new_obj[1];
      }
    }
    data_formated_aux.push(objeto);
  };

  data_formated = data_formated_aux.sort( (a,b) => d3.ascending(a.Anno, b.Anno));

  // Esta función se usa para generar el gráfico stacked-bar
  let stack = d3.stack().keys(keys_data);
  let stack_values = stack(data_formated);
  let stacked_data = [];

  console.log(stack_values)

  stack_values.forEach((layer, index) => {
    let currentStack = [];
    layer.forEach((d, i) => {
      currentStack.push({
        values: d,
        anno: data_formated[i].Anno,
        key: layer.key
      });
    });
    stacked_data.push(currentStack);
  });
  
  console.log(stacked_data)

   // Para modificar la visualización
  let color = d3.scaleOrdinal()
      .range(["steelblue", "darkorange", "Bisque", "lightblue"])
      .domain(keys_data);

  let strokeWidth = 1.5;
  viz_w = 1100;
  viz_h = 600;

  let svg = d3.select("#svg_graph2")
    .attr("width", viz_w ) 
    .attr("height", viz_h )
    .append("g").attr("transform", `translate(${margin.l},0)`);
  
  // Crear las escalas
  let yScale = d3
    .scaleLinear()
    .domain([0, 5500])
    .rangeRound([viz_h - margin.b, margin.t])

  let xScale = d3
    .scaleBand()
    .domain(data_formated.map(d => d.Anno))
    .range([0, viz_w - margin.r])
    .padding(0.1);
  
  svg.append("g")
    .selectAll("g")
    .data(stacked_data)
    .enter().append("g")
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
    .attr("fill", d => color(d.key))
    .attr("x", d => xScale(d.anno))
    .attr("y", d => yScale(d.values[1]))
    .attr("height", d => yScale(d.values[0]) - yScale(d.values[1]))
    .attr("width", xScale.bandwidth());
  
  svg.append("g")
    .selectAll("g") 
    .data(stacked_data)
    .enter().append("g")
    .selectAll(".text")  
    .data(d => d)    
    .enter()
    .append("text")
    .attr("class","label")
    .attr("x", d => xScale(d.anno) + (xScale.bandwidth()/2))
    .attr("y", d => ((yScale(d.values[0]) - yScale(d.values[1]))/2) + yScale(d.values[1]) )
    .attr("dy", ".50em")
    .attr("font-size", "3px") 
    .attr("text-anchor", "middle")
    .text(function(d) { 
        if ( d.key == "Man" ){
          return d.values.data.Man; 
        } else if ( d.key == "Woman" ) {
          return d.values.data.Woman; 
        } else if (d.key == "Girl") {
          return d.values.data.Girl; 
        } else {
          return d.values.data.Boy; 
        }
    });       
  
  // Agregar el eje X
  svg
    .append("g")
    .attr("transform", `translate(0,${viz_h - margin.b})`)
    .call(d3.axisBottom(xScale).tickSizeOuter(0))
    .selectAll("text")  
      .attr("transform", "rotate(-65)" )
      .attr("dx", "-1.4em")
      .attr("dy", ".10em")
    .call(g => g.selectAll(".domain").remove())

  // Agregar el eje Y
  svg
    .append("g")
    .attr("transform", `translate(0, 0)`)
    .call(d3.axisLeft(yScale)); 

  // Agregar la leyenda del gráfico
  let padding = 40;
  let legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', 'translate(' + (padding + 12) + ','+ (viz_h - 100)  + ')');
  
  legend.selectAll('rect')
    .data(stacked_data)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', function(d,i){
        return (i * 20) - (viz_h - 150);
    })
    .attr('width', 12)
    .attr('height', 12)
    .attr('fill', function(d,i){
        return color(i);
    });

legend.selectAll('text')
    .data(keys_data)
    .enter()
    .append('text')
    .text(d => d)
    .attr('x', 15)
    .attr('y', function(d, i){
      return (i * 20) - (viz_h - 150);
    })
    .attr('text-anchor', 'start')
    .attr('alignment-baseline', 'hanging');
}

function make_map(data,mapfunction) {
  d3.json("mapamundi.json").then(map=>{
    mapfunction(map,data)
  });
}

function sell_map(mapdata,data) {
  let map_margin = {l:40,r:20,t:20,b:130}
  let viz_w = 900;
  let viz_h = 600;
  let map_w = svg_w - map_margin.l - map_margin.r;
  let map_h = svg_h - map_margin.t - map_margin.b;

  console.log(map_w, map_h)
  let svg = d3.select("#svg_graph3")
    .attr("width", viz_w ) 
    .attr("height", viz_h )

  let mapa = svg.append("g")
    .attr("transform",`translate(${map_margin.l},${map_margin.t})`)
      
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

  let landmarks = data
    .map(d=> coordinates[d.lugar_compra])
    .filter(d=>d!=undefined)

  let col = d3.color("steelblue")
    col.opacity = 0.6;


  mapa.append("g")
    .selectAll("circle")
    .data(landmarks)
    .enter().append("circle")
    .attr("cx",d=>projection([d[1],d[0]])[0])
    .attr("cy",d=>projection([d[1],d[0]])[1])
    .attr("r",3)
    .attr("fill",col)

  // Se agrega esta función para acercar, alejar y mover el mapa
  let zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', function() {
        mapa.selectAll('path')
         .attr('transform', d3.event.transform);
        mapa.selectAll("circle")
         .attr('transform', d3.event.transform);
  });
  svg.call(zoom);
};

function route_map(mapdata,data) {
  const map_margin = {l:40,r:20,t:20,b:130}
  let viz_w = 900;
  let viz_h = 600;
  const map_w = svg_w - map_margin.l - map_margin.r;
  const map_h = svg_h - map_margin.t - map_margin.b;

  let svg = d3.select("#svg_graph3")
    .attr("width", viz_w ) 
    .attr("height", viz_h )

  let mapa = svg.append("g")
    .attr("transform",`translate(${map_margin.l},${map_margin.t})`)
  
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

  let col = d3.color("darkorange")
  col.opacity = 0.6;
  
  filtered_data = data.map(d=>{
    return {
      puerto_salida: coordinates[d.puerto_salida],
      region_llegada: coordinates[d.region_llegada],
      nombre_salida: d.puerto_salida,
      nombre_llegada: d.region_llegada
    }
  })
  filtered_data = filtered_data.filter(d=>d.puerto_salida!=undefined&&d.region_llegada!=undefined);

// Para dar formato al tooltip
  // -1- Crear un tooltip
  let tooltip = d3.select("body")
    .append("g")
    .style("opacity", 0)
    .attr("transform",`translate(${map_margin.l},${map_margin.t})`)
    .attr("class", "tooltip")
    .style("font-family", "Hiragino Sans GB,arial")
    .style("background-color", "#F7EEC8")
    .style("border-radius", "5px")
    .style("padding", "2px")
    .style("color", "black")
    .style("font-size", "10px")

  // -2- Comportamiento del tooltip en el evento mouseover 
  let tipMouseover_salida = function(d) {
    console.log("salida"+d.nombre_salida)
    let html  = "Puerto de llegada: "+  d.nombre_salida
    tooltip.html(html)
        .style("left", (d3.mouse(this)[0]+ 15) + "px")
        .style("top", (d3.mouse(this)[1]+ 15) + "px")
        .transition()
        .duration(200) // ms
        .style("opacity", 0.9) // started as 0!

  };

  let tipMouseover_llegada = function(d) {
    console.log("llegada"+d.nombre_llegada)
    let html  = "Puerto de llegada: "+  d.nombre_llegada 
    tooltip.html(html)
        .style("left", (d3.mouse(this)[0]+ 15) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
        .transition()
        .duration(200) // ms
        .style("opacity", 0.9) // started as 0!
  };
  
  // -3- Comportamiento del tooltip en ele evento mouseout
  let tipMouseout = function(d) {
      tooltip.transition()
          .duration(300) // ms
          .style("opacity", 0); // don't care about position!
  };

  // Mapa con las rutas de llegada
  mapa.append("g")
    .selectAll("line")
    .data(filtered_data)
    .enter().append("line")
    .attr("x1",d=>projection([d.puerto_salida[1],d.puerto_salida[0]])[0])
    .attr("y1",d=>projection([d.puerto_salida[1],d.puerto_salida[0]])[1])
    .attr("x2",d=>projection([d.region_llegada[1],d.region_llegada[0]])[0])
    .attr("y2",d=>projection([d.region_llegada[1],d.region_llegada[0]])[1])
    .attr("stroke",col)
    .attr("stroke-width",2)
  
  // Mapa con los puntos de salida
  mapa.append("g")
    .selectAll("circle")
    .data(filtered_data)
    .enter().append("circle")
    .attr("cx",d=>projection([d.puerto_salida[1],d.puerto_salida[0]])[0])
    .attr("cy",d=>projection([d.puerto_salida[1],d.puerto_salida[0]])[1])
    .attr("r",3)
    .attr("fill","steelblue")
    .on("mouseover", tipMouseover_salida)
    .on("mouseleave", tipMouseout)

  // Mapa con los puntos de llegada
  mapa.append("g")
    .selectAll("circle")
    .data(filtered_data)
    .enter().append("circle")
    .attr("cx",d=>projection([d.region_llegada[1],d.region_llegada[0]])[0])
    .attr("cy",d=>projection([d.region_llegada[1],d.region_llegada[0]])[1])
    .attr("r",3)
    .attr("fill","none")
    .attr("stroke", "black")
    .on("mouseover", tipMouseover_llegada)
    .on("mouseleave", tipMouseout)
  
  //Adicionar la leyenda
  let keys1 = ["Puerto de Salida"]
  svg.selectAll("mydots")
    .data(keys1)
    .enter()
    .append("circle")
      .attr("cx", 40)
      .attr("cy", 40) // 100 is where the first dot appears. 25 is the distance between dots
      .attr("r", 5)
      .style("fill", "steelblue")
  
  let keys2 = ["Puerto de Llegada"]
  svg.selectAll("mydots")
    .data(keys2)
    .enter()
    .append("circle")
      .attr("cx", 40)
      .attr("cy", 60) // 100 is where the first dot appears. 25 is the distance between dots
      .attr("r", 5)
      .style("fill", "none")
      .attr("stroke", "black")

  svg.selectAll("mylabels")
    .data(keys1)
    .enter()
    .append("text")
      .attr("x", 50)
      .attr("y", 40) // 100 is where the first dot appears. 25 is the distance between dots
      .style("fill", "black")
      .text(function(d){ return d})
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")

  svg.selectAll("mylabels")
    .data(keys2)
    .enter()
    .append("text")
      .attr("x", 50)
      .attr("y", 60) // 100 is where the first dot appears. 25 is the distance between dots
      .style("fill", "black")
      .text(function(d){ return d})
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")
                            
  /*let legend = svg.selectAll('rect')
    .data(keys2)
    .enter()
    .append('rect')
    .attr("x", 35)
    .attr("y", 35)
   .attr("width", 10)
   .attr("height", 10)
   .style("fill", "none")
   .attr("stroke", "black")*/
  

  // Se agrega esta función para acercar, alejar y mover el mapa
  let zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', function() {
        mapa.selectAll('path')
         .attr('transform', d3.event.transform);
        mapa.selectAll("line")
         .attr('transform', d3.event.transform);
        mapa.selectAll("circle")
         .attr('transform', d3.event.transform);
  });
  svg.call(zoom);

};
