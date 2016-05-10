//Creo una escala ordinal de 10 colors
var scaleColor = d3.scale.category10();


// Grafic circular per observacions per tipus de registre
function graph_pie_observacions_recordtype(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	
	graph_pie_template('observacions-body-recordtype', 'per tipus de registre', dades);
};


// Grafic circular per observacions per formes de vida
function graph_pie_observacions_lifeform(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	
	graph_pie_template('observacions-body-lifeforms', 'per formes de vida', dades);
	
};


// Grafic circular per observacions per regnes
function graph_pie_observacions_kingdom(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	
	graph_pie_template('observacions-body-regnes', 'per Regnes', dades);

}; //Fi de graph_pie_observacions_regnes

function graph_pie_taxons_occurrences(dades)
{
	_.each(dades, function(d,i)
	{
		d.color = ColorLuminance(scaleColor(i), 0.2);
	});
	return graph_pie_template('taxons-body-obs', 'per observacions', dades);
};

function graph_pie_taxons_taxons(dades)
{
	_.each(dades, function(d,i)
	{
		d.color = ColorLuminance(scaleColor(i), 0.2);
	});
	return graph_pie_template('taxons-body-taxons', 'per número de tàxons', dades);
};

function graph_pie_sync_taxons(obs,sp)
{
	//obs i taxons són objectes TreeModel

	//Preparo les dades pel gràfic
	var obs_ = [];
	var sp_ = [];
	
	_.each(obs.children, function(o)
	{
		//Només els value > 0
		(o.model.value)?obs_.push(o.model):null;
	});
	
	_.each(sp.children, function(o)
	{
		//Només els value > 0
		(o.model.value)?sp_.push(o.model):null;
	});
	
	var gobs = graph_pie_taxons_occurrences(_.sortBy(obs_, 'value').reverse());
	var gtax = graph_pie_taxons_taxons(_.sortBy(sp_, 'value').reverse());

	//Add onclick function
	//gobs/gtax és un objecte de D3Pie que conté tota la informació del gràfic!
	gobs.options.callbacks.onClickSegment = (function(a, gobj1, obj1, gobj2, obj2){d3pie_onclick(a, gobs, obs, gtax, sp);});
	gtax.options.callbacks.onClickSegment = (function(a, gobj1, obj1, gobj2, obj2){d3pie_onclick(a, gobs, obs, gtax, sp);});

};

function d3pie_onclick(a, gobj1, obj1, gobj2, obj2)
{
	//Si no està agrupat
	if(!a.data.isGrouped)
	{
		//Si tenim childrens en aquest nivell
		if(a.data.children.length)
		{
			var o1_ = [];
			var o2_ = [];
			
			//Busco a obj1 el node igual al node que s'ha fet click.
			//Flatten
			_.each(obj1.first(function(node){return node.model.group_name == a.data.group_name;}).children, function(o){
				//Només els value > 0
				(o.model.value)?o1_.push(o.model):null;
			});
			
			_.each(obj2.first(function(node){return node.model.group_name == a.data.group_name;}).children, function(o){
				//Només els value > 0
				(o.model.value)?o2_.push(o.model):null;
			});

			gobj1.options.header.subtitle.text = a.data.group_text;
			gobj2.options.header.subtitle.text = a.data.group_text;
			
			gobj1.updateProp('data.content', o1_);
			gobj2.updateProp('data.content', o2_);
			
		}
		//else: No faig res, no hi ha més grups per representar.
	}
	//Segment agrupat
	else
	{
		var x_ = [];
		var y_ = [];
				
		//Busco al TreeModel els nodes agrupats
		_.each(a.data.groupedData, function(x){
			x_.push(obj1.first(function(y){return y.model.group_name == x.group_name}).model);
			y_.push(obj2.first(function(y){return y.model.group_name == x.group_name}).model);
		});
		
		gobj1.options.header.subtitle.text = a.data.label;
		gobj2.options.header.subtitle.text = a.data.label;
		
		gobj1.updateProp('data.content', x_);
		gobj2.updateProp('data.content', y_);
		
	}
	
	//Mostro un botó de reset
	if (!(document.getElementById('button_taxon_reset')))
	{
		$newbuttonreset = $('<button/>')
						.addClass('btn btn-default')
						.attr('id', 'button_taxon_reset')
						.attr('type', 'button')
						.attr('style', 'margin-left: 10px')
						.on('click', function()
									 {
									 	//Eliminar el botó
									 	$('#taxons_body_reset').empty();
									 	//Eliminar els gràfics
									 	gobj1.destroy();
									 	gobj2.destroy();
									 	//Tornar a generar els gràfics
									 	graph_pie_sync_taxons(obj1,obj2);
									 	
									 })
						.html('<span>Reset</span>');
		$('#taxons_body_reset').append($newbuttonreset);
	}
};




// Gràfic de barres horitzontals per a les fonts de dades
function graph_bar_fontdades(dades)
{
	//Màximes fonts de dades que es posaran al gràfic
	var max_categories = 10;
		
	var abs_width = 800;
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
				//.tickPadding(3)
	            .innerTickSize(0)
	            .outerTickSize(0)
	            ;

	//Objecte grafic
	var svg = d3.select("div#fontsdades-body").append("svg")
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
		//No dibuixo la línia de l'eix
		.style({'stroke-width': '0px'})
		.call(yAxis)
	.selectAll('.tick text')
		.call(wrap, 400)
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
		.style('fill-opacity', '0.7')
		.style('stroke', function(d,i){return scaleColor(i);})
		.style('stroke-opacity', '1')
		.style('stroke-width', '0.5')
		.attr('width',function(d){return scaleX(d.count)<2?2:scaleX(d.count);}) //Com a mínim farà 2px d'amplada
		.append("svg:title")
		.text(function(d) {return d.label+'\nObservacions: '+d.count;})
		;		

	//Afegeixo text amb el % a les barres
	//Format amb el % i un  decimal
	var percent = d3.format('.1%');
	var minim_weight_bar = 30;
	var padding_label = 3;
	var total_count = _.reduce(da, function(memo, d){ return memo + d.count; }, 0);
	svg.append('g')
		.attr('id','text_bars')
		.selectAll('text')
		.data(da)
		.enter()
		.append('text')
		//Posició del text
		.attr({'x':function(d){return scaleX(d.count)+(scaleX(d.count)<minim_weight_bar?padding_label:padding_label*-1);}, 'y':function(d){return scaleY(d.label)+(bar_height/2);}})
		//A dins o a fora de la barra
		.style('text-anchor', function(d){return scaleX(d.count)<minim_weight_bar?'start':'end';}) 
		.style("font-size", "10px")
		.style("font-family", "sans-serif")
		// Make it a little transparent to tone down the black
		.style("opacity", 0.8)
		// Format the number, calculo el tant per cent sumant tots els valors presents a da
		.text(function(d){return percent(d.count/total_count);})
		;
		
		//Afegeixo el títol de l'eix X
	svg.append('g')
		.attr('id','titol_x')
		.append("text")
		.attr("text-anchor", "end")  // this makes it easy to centre the text as the transform is applied to the anchor
		.attr("transform", "translate("+ (scaleX(scaleX.domain()[1])) +","+(height-(20/3))+")")  // centre below axis
		.text('Observacions');
		

}; //Fi de graph_bar_fontdades


function wrap(text, width) 
{
  text.each(function() {
    var leftpadd = -4;
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", leftpadd).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", leftpadd).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
};


function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
};

function graph_pie_template(div, titol, dades)
{	
	return pie = new d3pie(div, 
	{
		"header": {
			"title": {
				"text": titol,
				"fontSize": 12,
				"font": "open sans"
			},
			"subtitle": {
				"text":"",
				"color":    "#666666",
				"fontSize": 10,
				"font":     "open sans"
			},
			"location": "top-left"
		},
		"size": {
			"canvasWidth": 300,
			"canvasHeight": 300,
			"pieInnerRadius": "50%",
			"pieOuterRadius": "80%"
		},
		"data": {
			"sortOrder": "value-desc",
			"smallSegmentGrouping": {
				"enabled": true,
				"label": "Altres"
			},
			"content": dades
		},
		"labels": {
			"outer": {
				"pieDistance": 32
			},
			"inner": {
				"hideWhenLessThanPercentage": 3
			},
			"mainLabel": {
				"fontSize": 9
			},
			"percentage": {
				"color": "#ffffff",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#adadad",
				"fontSize": 10
			},
			"lines": {
				"enabled": true
			},
			"truncation": {
				"enabled": true
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}, {percentage}%"
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "none",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"gradient": {
				"enabled": false,
				"percentage": 100
			}
		}
	});
};

//Gràfic de les dates de l'observacions
function graph_bar_observacions_ocurrence_date(dades)
{

	//Les dades arriben ordenades per any, ascendent
	//Calculo els acumulats
	_.each(dades, function(d,i)
	{
		if(i)
		{
			d.total = dades[i-1].total + d.count;	
		}
		else
		{
			d.total = d.count;
		}
	});


	var abs_width = 900;
	var abs_height = 200;
	
    //Margins
	var margin = {top: 20, right: 50, bottom: 50, left: 50},
	width = abs_width - margin.left - margin.right,
	height = abs_height - margin.top - margin.bottom;

	//Calculo els min i max dels anys
	var year_max = _.max(dades, function(d){return d.label;});
	var year_min = _.min(dades, function(d){return d.label;});

	//Escala X --> Ordinal !
	var scaleX = d3.scale.ordinal()
	          .rangeBands([0, width])
	          .domain(_.range(parseInt(year_min.label), parseInt(year_max.label)+1, 1))
	          ;

	//Escala Y
	var scaleY = d3.scale.linear()
	          .range([height, 0])
	          .domain([0, d3.max(dades, function(d) { return d.count; })])
	          .nice()
	          ;
	          

	//Escala Y Total
	var scaleYTotal = d3.scale.linear()
	          .range([height, 0])
	          .domain([0, d3.max(dades, function(d) { return d.total; })])
	          .nice()
	          ;

	//Eix X
	var xAxis = d3.svg.axis()
	            .scale(scaleX)
	            .orient("bottom")
				.tickPadding(8)
				.tickValues(scaleX.domain().filter(function(d, i) { return !(d % 10); }))

	//Eix Y
	var yAxis = d3.svg.axis()
	            .scale(scaleY)
	            .orient("left")
	            ;

	//Eix YTotal
	var yAxisTotal = d3.svg.axis()
	            .scale(scaleYTotal)
	            .orient("right")
	            ;

	var line = d3.svg.line()
	    .x(function(d) {return scaleX(d.label);})
	    .y(function(d) {return scaleYTotal(d.total);});


	//Objecte grafic
	var svg = d3.select("div#observacions_ocurrence_date").append("svg")
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
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Observacions");
		;	

	//Afegir eix Y Total
	svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + width + " ,0)")	
		.attr("fill", "red")
		.call(yAxisTotal)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -10)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Acumulat");
		;	

	svg.selectAll(".bar")
		.data(dades)
		.enter().append("rect")
		  .attr("class", "bar")
		  .attr("x", function(d) {return scaleX(d.label); })
		  .attr("width", scaleX.rangeBand())
		  .attr("y", function(d) { return scaleY(d.count); })
		  .attr("height", function(d) { return height - scaleY(d.count); })
		;
	
	svg.append("path")
      .datum(dades)
      .attr("class", "line")
      .attr("d", line)
	  .attr("stroke", "red")
      .attr("stroke-width", 1)
      .attr("fill", "none");
      ;

};

function graph_pie_missingCollectionDate(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	
	graph_pie_template('qualitatdades-body', 'dates d\'observació', dades);	
	
};