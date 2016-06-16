function mapa_observacions(acronim)
{

	//Actualitzo el títol
	$('div#mapa-observacions-header').html('<h1 class="panel-title">'+_.capitalize(bioxpn_config.translates.get_translate('occurrences'))+'</h1>'+
											bioxpn_config.translates.get_translate('occurrences_map_subtitle'));
	
	//Instàncies dels objectes amb les capes WMS 
	var icc = new CAPES_ICC();
	var diba = new CAPES_DIBA();
	var gbif = new CAPES_GBIF(acronim);	

	//MAPA
	var map = new ol.Map(
	{
		target: 'mapobs',
		interactions: ol.interaction.defaults({mouseWheelZoom:false}),
		view: new ol.View({
			projection: 'EPSG:3857',
			center: ol.proj.fromLonLat(bioxpn_config.get_centermap_lonlat(acronim)),
			zoom: bioxpn_config.get_zoom_initial(acronim),
			minZoom: 10,
			maxZoom: 18
		})
	});

	//Calculo l'extent del mapa segons la vista inicial
	mapextent = map.getView().calculateExtent(map.getSize());

	//Instància de l'objecte amb la llista de controls del mapa
	var controls_list = new CONTROLS(mapextent);
	_.each(controls_list.getControls(), function(d){map.addControl(d)});

	//TODO fixar el PAN sobre el mapa a mapextent.
	

	//Consulta sobre el mapa
	map.on("click", function(evt){gbif_consulta_observacions(acronim, map, gbif, evt)}); 

	addLayer_check(map, icc.get_tilelayer('topogris'));
	addLayer_check(map, gbif.get_tilelayer('observacions'));
	addLayer_check(map, diba.get_tilelayer('limitsxpn'));
	
	//Afegeixo la cerca per taxon_name
	search_taxon_name(acronim, map, gbif);
	
};//Fi de mapa_observacions()

function CONTROLS(mapextent)
{
	this.c = [
	
	new ol.control.ScaleLine(
	{
		units: 'metric',
		minWidth: 100
	}),

	new ol.control.MousePosition(
	{
		undefinedHTML: '',
		projection: ol.proj.get('EPSG:4326'),
		units: 'degrees',
		coordinateFormat: function(coordinate) {return ol.coordinate.format(coordinate, '{y}, {x}', 4)},
	}),
	
	new ol.control.ZoomToExtent({extent: mapextent}),
	new ol.control.Zoom()
	];
};

CONTROLS.prototype.getControls = function()
{
	return this.c;	
};

function gbif_consulta_observacions(acronim, map, gbif, evt)
{
		//Si hi ha una capa overlay al mapa (resultat d'una consulta prèvia), no faig res
		if(map.getOverlays().getArray().length){console.log('No');return;};
		
		var coord = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
		var r = bioxpn_config.zoomradius.get_radius(map.getView().getZoom());
		
		//Elimino la capa de seleccions prèvies
		removeLayer_check(map, gbif.get_tilelayer('seleccio_puntradi'));
		
		//Determinar si el click a dins o a fora de 'acrònim'
		query_server(bioxpn_config.get_URL_puntradi_facet('id',coord,r)).then
		(
			function(df)
			{
				var num_obs = df.totalRecords;
				var num_taxa;
				
				//Si no ha trobat res, acabo.
				if(!num_obs){return false;}
				
				//Dels resultats, només 1 registre del facet, l'utilitzo per preguntar si està dins de l'àmbit 'acrònim'
				query_server(bioxpn_config.get_URL_acronim_obsID(acronim,df.facetResults[0].fieldResult[0].label)).then
				(
					function(df)
					{
						//Si no tornen registres, estic fòra de l'àmbit.
						if(!df.totalRecords){return false;}

						//a dins de l'àmbit
						else
						{
							//Mostrar la capa amb el punt(s) seleccionat(s)
							gbif.set_layer_selection_puntradi(coord, r);
							addLayer_check(map, gbif.get_tilelayer('seleccio_puntradi'));
							
							//Demanar el número de taxons en el punt latlon_radi
							query_server(bioxpn_config.get_URL_numtaxa_puntradi(coord,r)).then
							(
								function(df)
								{
									num_taxa = df[0].count;

									//Mostrar el popup
									mostrar_popup(map, gbif, evt.coordinate, coord, r, num_obs, num_taxa);
								}
							);
						};
					}
				);
			}
		);					
		
};

function mostrar_popup(map, gbif, coord_view, coord_map, radius, num_obs, num_taxa)
{
	//Exemple: http://jsfiddle.net/ro1ptr0k/26/

	var overlay;
	
	//Creo l'element DIV id=popup
	$('#mapobs').append('<div id="popup" class="ol-popup"></div>');
	
	//$('#popup').empty();
	
	$newpopupcloser = $('<a/>')
					 .attr('href', '#')
					 .attr('id', 'popup-closer')
					 .addClass('ol-popup-closer')
					 .on('click', function(){
										removeLayer_check(map, gbif.get_tilelayer('seleccio_puntradi'));
										map.removeOverlay(overlay);
										//overlay.setPosition(undefined);
										$('#popup-closer').blur();
										return false;		
										});
	$('#popup').append($newpopupcloser);

	//Afegeixo el contingut
	$newpopupcontent = $('<div/>');
	$('#popup').append($newpopupcontent);

	//Si NO s'ha buscat un taxon_name concret
	if(!map_layer_check(map, gbif.get_tilelayer('seleccio_taxon')))
	{
		//Botó Observacions
		$newButton_obs = $('<button/>')
					.attr('type', 'button')
					.addClass('btn btn-primary btn-xs')
					.text(num_obs+' observacions ')
					.on('click', function(){downloadfile(bioxpn_config.get_URL_occurrencesdownload_puntradi(coord_map,radius))});
					
		$($newButton_obs).append('<span class=\'glyphicon glyphicon-download\'></span>');
		$($newpopupcontent).append($($('<div/>').addClass('row').attr('style', 'padding:3px;margin:auto')).append($newButton_obs));
		
		//Botó taxa
		$newButton_taxa = $('<button/>')
					.attr('type', 'button')
					.addClass('btn btn-primary btn-xs')
					.text(num_taxa+' taxons ')
					.on('click', function(){downloadfile(bioxpn_config.get_URL_checlistkdownload_puntradi(coord_map,radius))});
		
		$($newButton_taxa).append('<span class=\'glyphicon glyphicon-download\'></span>');
		$($newpopupcontent).append($($('<div/>').addClass('row').attr('style', 'padding:3px;margin:auto')).append($newButton_taxa));

		/**
		* Create an overlay to anchor the popup to the map.
		*/
		overlay = new ol.Overlay({element: $('#popup')[0]});
		map.addOverlay(overlay);
		overlay.setPosition(coord_view);
	}
	//Hi ha una cerca de taxon concret, mostro un POPUP diferent
	else
	{
		var tx = $('#search_black').val();
		var no;
		
		query_server(bioxpn_config.get_URL_numobs_taxonname_puntradi(tx,coord_map,radius)).then
		(
			function(df)
			{
				no=df.totalRecords;
				
				//Botó Observacions
				$newButton_obs = $('<button/>')
							.attr('type', 'button')
							.addClass('btn btn-primary btn-xs')
							.text(no+' observacions ')
							.on('click', function(){downloadfile(bioxpn_config.get_URL_occurrencesdownload_taxonname_puntradi(tx,coord_map,radius))});
		
				$($newButton_obs).append('<span class=\'glyphicon glyphicon-download\'></span>');
				$($newpopupcontent).append($($('<div/>').addClass('row').attr('style', 'padding:3px;margin:auto')).append($newButton_obs));

				/**
				* Create an overlay to anchor the popup to the map.
				*/
				overlay = new ol.Overlay({element: $('#popup')[0]});
				map.addOverlay(overlay);
				overlay.setPosition(coord_view);
			}
		);
	}



	
}; //Fi de mostrar_popup


//Check if layer exist in map, return true/false
function map_layer_check(map, layer)
{
		if(!_.isUndefined(_.find(map.getLayers().getArray(), function(d){return d == layer;})))
		{return true;}
		else{return false;}
}; //Fi de map_layer_check

function addLayer_check(map, layer)
{
	if(!map_layer_check(map, layer))
	{map.addLayer(layer);}
}; //Fi de addLayer_check(map, layer)

function removeLayer_check(map, layer)
{
	if(map_layer_check(map, layer))
	{map.removeLayer(layer);}
}; //Fi de removeLayer_check

function downloadfile(url)
{
	$df = $('<a/>')
		  .attr('href', url);
	$($df)[0].click();
}; //Fi de downloadfile(url)
