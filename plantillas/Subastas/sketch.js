data = d3.csv("obras.csv",d=>d).then(data=>{
    //console.log(data);
    //price_point(data)
    genre_bar(data);
    price_bar(data)
    price_histogram(data)
    scatter(data)
})

// width and height of #graph svg
let w = 700;
let h = 500;

// margins of #bars group inside #graph svg
let leftmargin = 100;
let downmargin = 40;
let topmargin = 100;
let rightmargin = 40;

// width and height of bars
let barsw = w-leftmargin-rightmargin;
let barsh = h-downmargin-topmargin;

function price_point(data) {
    let yscale = d3.scaleLinear()
        .domain(d3.extent(data,d=>+d.Precio))
        .range([barsh,0])
        .nice()
    
    let xscale = d3.scalePoint()
        .domain(data.map(d=>+d.Posicion))
        .range([0,barsw])
        .padding(0.3)
    
    let posscale = d3.scaleLinear()
        .domain(d3.extent(data,d=>+d.Posicion))
        .range([0,barsw])

    let graph = d3.select("#graph1")
        .attr("width",w)
        .attr("height",h)

    let title = graph.select("#title")
        .text("Las obras con mayor precio en subastas del 2019")
        .attr("x",w/2)
        .attr("y",topmargin/2)
        .attr("text-anchor","middle")
        .style("font-size",18)
    
    let bars = graph.select("#bars")
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform",d=>`translate(${xscale(+d.Posicion)},${yscale(+d.Precio)})`)
    
    bars.append("circle")
        .attr("r",2)
        .attr("height",d=>barsh-yscale(d.Precio))
        .style("fill",'#34b4eb')
    
    let yaxis = d3.axisLeft(yscale).ticks(15).tickFormat(d3.format(".3s"))
    let yaxisg = graph.select('#ya')
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .call(yaxis)
    
    let xaxis = d3.axisBottom(posscale).ticks(2)
    let xaxisg = graph.select('#xa')
        .attr("transform",()=>`translate(${leftmargin},${h-downmargin})`)
        .call(xaxis)

    bars.exit().remove()
}

function price_bar(data) {
    let yscale = d3.scaleLinear()
        .domain([0,d3.max(data,d=>+d.Precio)])
        .range([barsh,0])
        .nice()
    
    let xscale = d3.scaleBand()
        .domain(data.map(d=>+d.Posicion))
        .range([0,barsw])
        .padding(0.3)

    let posscale = d3.scaleLinear()
        .domain(d3.extent(data,d=>+d.Posicion))
        .range([0,barsw])

    let graph = d3.select("#graph1")
        .attr("width",w)
        .attr("height",h)

    let title = graph.select("#title")
        .text("Las obras con mayor precio en subastas del 2019")
        .attr("x",w/2)
        .attr("y",topmargin/2)
        .attr("text-anchor","middle")
        .style("font-size",18)
    
    let bars = graph.select("#bars")
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform",d=>`translate(${xscale(+d.Posicion)},${yscale(+d.Precio)})`)
    
    bars.append("rect")
        .attr("width",xscale.bandwidth())
        .attr("height",d=>barsh-yscale(d.Precio))
        .attr("rx",0)
        .style("fill",'#34b4eb')
    
    let yaxis = d3.axisLeft(yscale).ticks(15).tickFormat(d3.format(".3s"))
    let yaxisg = graph.select('#ya')
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .call(yaxis)
    
    let xaxis = d3.axisBottom(posscale).ticks(2)
    let xaxisg = graph.select('#xa')
        .attr("transform",()=>`translate(${leftmargin},${h-downmargin})`)
        .call(xaxis)

    bars.exit().remove()
}

function genre_bar(data) {
    let genre_count = [
        {genero:"Hombres",conteo:0},
        {genero:"Mujeres",conteo:0}
    ]
    data.map(d=>{
        if (d["Género"] == 'H') {
            genre_count[0].conteo++
        } else if (d["Género"] == 'M') {
            genre_count[1].conteo++
        }
    })

    let yscale = d3.scaleLinear()
        .domain([0,d3.max(genre_count,d=>d.conteo)])
        .range([barsh,0])
        .nice()
    
    let xscale = d3.scaleBand()
        .domain(genre_count.map(d=>d.genero))
        .range([0,barsw])
        .padding(0.3)

    let graph = d3.select("#graph4")
        .attr("width",w)
        .attr("height",h)

    let title = graph.select("#title")
        .text("Venta de obras por género")
        .attr("x",w/2)
        .attr("y",topmargin/2)
        .attr("text-anchor","middle")
        .style("font-size",18)
    
    let bars = graph.select("#bars")
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .selectAll("g")
        .data(genre_count)
        .enter().append("g")
        .attr("transform",d=>`translate(${xscale(d.genero)},${yscale(d.conteo)})`)
    
    bars.append("rect")
        .attr("width",xscale.bandwidth())
        .attr("height",d=>barsh-yscale(d.conteo))
        .attr("rx",0)
        .style("fill",'#34b4eb')
    
    let yaxis = d3.axisLeft(yscale).ticks(10).tickFormat(d3.format(".3s"))
    let yaxisg = graph.select('#ya')
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .call(yaxis)
    
    let xaxis = d3.axisBottom(xscale).ticks(2)
    let xaxisg = graph.select('#xa')
        .attr("transform",()=>`translate(${leftmargin},${h-downmargin})`)
        .call(xaxis)

    bars.exit().remove()
}

function price_histogram(data) {
    let precio = data.map(d=>+d.Precio)
    let graph = d3.select("#graph2")
        .attr("width",w)
        .attr("height",h)

    let title = graph.select("#title")
        .text("Histograma de precios")
        .attr("x",w/2)
        .attr("y",topmargin/2)
        .attr("text-anchor","middle")
        .style("font-size",18)

    let xscale = d3.scaleLinear()
        .domain([0,d3.max(precio)])
        .range([0,barsw])

    let histogram = d3.histogram()
        .value(d=>d.Precio)
        .domain(xscale.domain())
        .thresholds(xscale.ticks(20))

    let bins = histogram(data)
    //console.log(bins)

    let yscale = d3.scaleLinear()
        .domain([0,d3.max(bins,d=>d.length)])
        .range([barsh,0])
        .nice()
    
    let yaxis = d3.axisLeft(yscale).ticks(10).tickSize(-barsw)
    let yaxisg = graph.select('#ya')
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .call(yaxis)
        
    let xaxis = d3.axisBottom(xscale).ticks(20,".0s").tickSizeOuter(-barsh)
    let xaxisg = graph.select('#xa')
        .attr("transform",()=>`translate(${leftmargin},${h-downmargin})`)
        .call(xaxis)
    
    let bars = graph.select("#bars")
        .attr("transform",()=>`translate(${1+leftmargin},${topmargin})`)
        .selectAll("g")
        .data(bins)
        .enter().append("g")
        .attr("transform",d=>`translate(${xscale(+d.x0)},${yscale(+d.length)})`)
        
    bars.append("rect")
        .attr("width",d=>xscale(d.x1)-xscale(d.x0)-2)
        .attr("height",d=>barsh-yscale(d.length))
        .attr("rx",0)
        .style("fill",'#34b4eb')
    

    let mean = d3.mean(precio)
    let median = d3.median(precio)
    let cuatriles = [d3.quantile(precio,0.25),d3.quantile(precio,0.50),d3.quantile(precio,0.75)]
    let sdev = d3.deviation(precio)
    //draw_line("#graph2","#bars",xscale(mean)-2,"red","Promedio: "+mean)
    //draw_line("#graph2","#bars",xscale(median)-2,"green","Mediana: "+median)
    // for (let e in cuatriles) {
    //     draw_line("#graph2","#bars",xscale(cuatriles[e])-2,"pink","")
    // }
    // for (let i=0;i<10;i++) {
    //     draw_line("#graph2","#bars",xscale(mean)+(xscale(sdev)*i)-2,"blue",i)
    // }
    bars.exit().remove()
}

function scatter(data) {
    let graph = d3.select("#graph3")
        .attr("width",w)
        .attr("height",h)

    let title = graph.select("#title")
        .text("Nacimiento vs obra")
        .attr("x",w/2)
        .attr("y",topmargin/2)
        .attr("text-anchor","middle")
        .style("font-size",18)

    let xscale = d3.scaleLinear()
        .domain([1940,d3.max(data,d=>+d.Nacimiento)])
        .range([0,barsw])
        .nice()

    let yscale = d3.scaleLinear()
        .domain([1970,d3.max(data,d=>d.Fecha)])
        .range([barsh,0])
        .nice()
    
    let yaxis = d3.axisLeft(yscale).ticks(10).tickSizeOuter(-barsw)
    let yaxisg = graph.select('#ya')
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .call(yaxis)
        
    let xaxis = d3.axisBottom(xscale).ticks(10).tickSizeOuter(-barsh)
    let xaxisg = graph.select('#xa')
        .attr("transform",()=>`translate(${leftmargin},${h-downmargin})`)
        .call(xaxis)
    
    let bars = graph.select("#bars")
        .attr("transform",()=>`translate(${leftmargin},${topmargin})`)
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform",d=>`translate(${xscale(+d.Nacimiento)},${yscale(+d.Fecha)})`)
        
    bars.append("circle")
        .attr("r",3)
        .style("fill",'#34b4eb')

    bars.exit().remove()
}

function draw_line(graph_name,svg_name,x,color,label) {
    let linesvg = d3.select(graph_name)
        .select(svg_name)

    linesvg.append("line")
        .attr("x1",x).attr("y1",0).attr("x2",x).attr("y2",barsh)
        .attr("stroke",color)
    
    linesvg.append("text")
        .text(label)
        .attr("x",x)
        .attr("y",-4)
        .attr("text-anchor","middle")
        .style("font-size",8)
}
