// Tráfico interamericano de esclavos
// Información tomada de la base de datos https://slavevoyages.org/

const svg_w = 850; // El ancho de los contenedores svg
const svg_h = 650; // El alto de los contenedores svg

// un objeto con información sobre las márgenes
const margin = {l:250,r:50,t:50,b:40}
const viz_w = svg_w - margin.l - margin.r; // el ancho de las gráficas
const viz_h = svg_h - margin.t - margin.b; // el alto de las gráficas

var nodesT = [];
var linkT = [];

var width = 800;
var height = 600;
// Esta función carga los datos de nombres africanos
// La base de datos está en csv
d3.csv("interamerican_traffic.csv",(element)=> {
  // Esta parte del código ajusta los tipos de datos y filtra la info relevante
  //console.log(puertos[element.arrport]);
  let filtered = {
    voyageid: element.voyageid, // identificación del viaje
    bandera: nationals[element.national], // bandera nacional de la nave
    suerte_viaje: fate1[element.fate], // suerte del viaje
    suerte_esclavos: fate2[element.fate2], // suerte de los esclavos
    suerte_dueno: fate4[element.fate4], // suerte del dueño
    //resistencia: resistance[element.resistance], // casos de resistencia de los esclavos
    //puerto_salida: specificregions[element.portdep.substring(0,3)], // lugar de embarco
    //puerto_llegada: puertos[element.arrport], // lugar de embarco
    puerto_llegada: puertosTemp[element.arrport], // lugar de embarco
    region_salida: specificregions[element.arrport.substring(0,3)], // lugar de desembarco estimado
    //region_llegada: specificregions[element.regem1.substring(0,3)], // región de desembarco de los esclavos
    link: specificregions[element.regem1.substring(0,3)], // región de desembarco de los esclavos
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
  
  let seSalida = false;
  let seLlegada = false;
  
  for (var i in nodesT){
	  if(nodesT[i]['id'] == filtered['region_salida']  ){
		  seSalida = true;
	  }
	  if(nodesT[i]['id'] == filtered['puerto_llegada']  ){
		  seLlegada = true;
	  }
  }
  if(!seSalida){
	  let tmp = {
		  id: filtered['region_salida'],
		  group: 3,
	  };

	  
  nodesT.push(tmp);
  }
  
  if(!seLlegada){
	  let tmp1 = {
		  id: filtered['puerto_llegada'],
		  group: 1,
	  };

	  
  nodesT.push(tmp1);
  }
  
  // Definir link
  

  let linkTemp = {
		  source: filtered['region_salida'],
		  target: filtered['puerto_llegada'],
		  value: 1,
	};
  
  linkT.push(linkTemp);
  
  
  
  
  
  return filtered
}).then(data => {
  // Esta parte del código carga todas las visualizaciones

  // La selección del svg que contendrá la gráfica
  // y ajustes de su ancho y alto
  let svg = d3.select("#svg_graph")
    .attr("width", svg_w)
    .attr("height", svg_h)

  makeNode();
  
});


var color = d3.scaleOrdinal(d3.schemeCategory10);

function makeNode() {

var label = {
    'nodes': [],
    'links': []
};

nodesT.forEach(function(d, i) {
    label.nodes.push({node: d});
    label.nodes.push({node: d});
    label.links.push({
        source: i * 2,
        target: i * 2 + 1
    });
});

var labelLayout = d3.forceSimulation(label.nodes)
    .force("charge", d3.forceManyBody().strength(-50))
    .force("link", d3.forceLink(label.links).distance(0).strength(2));

var graphLayout = d3.forceSimulation(nodesT)
    .force("charge", d3.forceManyBody().strength(-2000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX(width / 2).strength(1))
    .force("y", d3.forceY(height / 2).strength(1))
    .force("link", d3.forceLink(linkT).id(function(d) {return d.id; }).distance(50).strength(1))
    .on("tick", ticked);

var adjlist = [];

linkT.forEach(function(d) {
    adjlist[d.source.index + "-" + d.target.index] = true;
    adjlist[d.target.index + "-" + d.source.index] = true;
});

function neigh(a, b) {
    return a == b || adjlist[a + "-" + b];
}


var svg = d3.select("#svg_graph").attr("width", width).attr("height", height);
var container = svg.append("g");

svg.call(
    d3.zoom()
        .scaleExtent([.1, 4])
        .on("zoom", function() { container.attr("transform", d3.event.transform); })
);

var link = container.append("g").attr("class", "links")
    .selectAll("line")
    .data(linkT)
    .enter()
    .append("line")
    .attr("stroke", "#aaa")
    .attr("stroke-width", "1px");

var node = container.append("g").attr("class", "nodes")
    .selectAll("g")
    .data(nodesT)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", function(d) { return color(d.group); })

node.on("mouseover", focus).on("mouseout", unfocus);

node.call(
    d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
);

var labelNode = container.append("g").attr("class", "labelNodes")
    .selectAll("text")
    .data(label.nodes)
    .enter()
    .append("text")
    .text(function(d, i) { return i % 2 == 0 ? "" : d.node.id; })
    .style("fill", "#555")
    .style("font-family", "Arial")
    .style("font-size", 12)
    .style("pointer-events", "none"); // to prevent mouseover/drag capture

node.on("mouseover", focus).on("mouseout", unfocus);

node.on("click", function(d){
	
	
});

function ticked() {

    node.call(updateNode);
    link.call(updateLink);

    labelLayout.alphaTarget(0.3).restart();
    labelNode.each(function(d, i) {
        if(i % 2 == 0) {
            d.x = d.node.x;
            d.y = d.node.y;
        } else {
            var b = this.getBBox();

            var diffX = d.x - d.node.x;
            var diffY = d.y - d.node.y;

            var dist = Math.sqrt(diffX * diffX + diffY * diffY);

            var shiftX = b.width * (diffX - dist) / (dist * 2);
            shiftX = Math.max(-b.width, Math.min(0, shiftX));
            var shiftY = 16;
            this.setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
        }
    });
    labelNode.call(updateNode);

}

function fixna(x) {
    if (isFinite(x)) return x;
    return 0;
}

function focus(d) {
    var index = d3.select(d3.event.target).datum().index;
	
	
	node.attr("transform", function(d) {
					return "translate(" + d.x + "," + d.y + ")";
				});
	
    node.style("opacity", function(o) {
        return neigh(index, o.index) ? 1 : 0.1;
    });
    labelNode.attr("display", function(o) {
      return neigh(index, o.node.index) ? "block": "none";
    });
    link.style("opacity", function(o) {
        return o.source.index == index || o.target.index == index ? 1 : 0.1;
    });
}

function unfocus() {
   labelNode.attr("display", "block");
   node.style("opacity", 1);
   link.style("opacity", 1);
}

function updateLink(link) {
    link.attr("x1", function(d) { return fixna(d.source.x); })
        .attr("y1", function(d) { return fixna(d.source.y); })
        .attr("x2", function(d) { return fixna(d.target.x); })
        .attr("y2", function(d) { return fixna(d.target.y); });
}

function updateNode(node) {
    node.attr("transform", function(d) {
        return "translate(" + fixna(d.x) + "," + fixna(d.y) + ")";
    });
}

function dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
    if (!d3.event.active) graphLayout.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) graphLayout.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
}