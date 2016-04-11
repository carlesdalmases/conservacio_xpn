

// Gràfic de barres horitzontals per a les fonts de dades
function graph_bar_fontdades(dades)
{
	//Màximes fonts de dades que es posaran al gràfic
	var max_categories = 10;
		
	var abs_width = 700;
	var abs_height = 400;

	//Creo una escala ordinal de 20 colors
	var scaleColor = d3.scale.category20();
	

	//Agafo les primeres "max_categories" categories
	var d_ = (_.partition(dades, function(d,i){return i<(max_categories-1)}));
	var da = d_[0]; // Les primeres max_categories-1 categories
	var db = d_[1]; // La resta de categories
	
	//Afegeixo a l'array anterior la suma de la resta de categories, amb el label 'Altres'.
	if(!_.isUndefined(db)){
		da.push({'label': 'Altres', 'count':_.reduce(db, function(memo, d){ return memo + d.count; }, 0)});
	}
	
    //Margins
	var margin = {top: 20, right: 20, bottom: 50, left: 400},
	width = abs_width - margin.left - margin.right,
	height = abs_height - margin.top - margin.bottom;

	//Escala X
	var scaleX = d3.scale.linear()
	          .range([0, width])
	          .domain(d3.extent(da, function(d) {return d.count;}));

	//Escala Y

	var scaleY = d3.scale.ordinal()
	          .rangeBands([0, height])
	          .domain(_.pluck(da, 'label'));

	//Calculo l'alçada de la barra del gràfic, com una unitat de l'escala
	var bar_height = scaleY.rangeBand();

	//Eix X
	var xAxis = d3.svg.axis()
	            .scale(scaleX)
	            .orient("bottom")
				.tickPadding(8)
				.tickFormat(d3.format(".0f"));
	//Eix Y
	var yAxis = d3.svg.axis()
	            .scale(scaleY)
	            .orient("left")
				.tickPadding(3)
	            .innerTickSize(0)
	            .outerTickSize(0)
	            ;

	//Objecte grafic
	var svg = d3.select("div#fontsdades").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
		.append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//DIBUIX
	//Afegir eix X
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
		.attr("y",10)
		.attr("x", 9)
		.attr("dy", ".35em")
		.attr("transform", "rotate(50)")
		.style("text-anchor", "start")
		;

	//Afegir eix Y				
	svg.append("g")
		.attr("class", "y axis")
		.style({'stroke-width': '0px'})
		.call(yAxis)
	.selectAll('.tick text')
		.call(wrap, 400)

		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")

		;	

	//Afegir barres
	svg.append('g')
		.attr('id','bars')
		.selectAll('rect')
		.data(da)
		.enter()
		.append('rect')
		.attr('height',bar_height)
		.attr({'x':0,'y':function(d){return scaleY(d.label);}})
		.style('fill', function(d,i){return scaleColor(i);})
		.style('fill-opacity', '0.3')
		.style('stroke', function(d,i){return scaleColor(i);})
		.style('stroke-opacity', '1')
		.style('stroke-width', '0.5')
		.attr('width',function(d){return scaleX(d.count)<2?2:scaleX(d.count);}) //Com a mínim farà 2px d'amplada
		.append("svg:title")
		.text(function(d) {return d.label+' Num: '+d.count;})

		;		
};


function wrap(text, width) 
{
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
};

