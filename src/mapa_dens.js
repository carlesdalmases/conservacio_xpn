function mapa_densitat_observacions(acronim)
{

	//Actualitzo el títol
	$('div#mapa-densitat-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('occurrencesdensity')+'</h1>');

	//Instàncies dels objectes amb les capes WMS 
	var icc = new CAPES_ICC();
	var diba = new CAPES_DIBA();
	var gbif = new CAPES_GBIF(acronim);	

	//MAPA
	var mapdens = new ol.Map(
	{
		target: 'mapdens',
		renderer: 'canvas',
        controls: [],
        interactions: [],
		view: new ol.View({
			projection: 'EPSG:3857',
			center: ol.proj.fromLonLat(bioxpn_config.get_centermap_lonlat(acronim)),
			zoom: bioxpn_config.get_zoom_initial(acronim),
			minZoom: 10,
			maxZoom: 18
		})
	});

	//Calculo l'extent del mapa segons la vista inicial
	mapextent = mapdens.getView().calculateExtent(mapdens.getSize());

	//Instància de l'objecte amb la llista de controls del mapa
	/*
	var controls_list = new CONTROLS(mapextent);
	_.each(controls_list.getControls(), function(d){mapdens.addControl(d)});
	*/

	addLayer_check(mapdens, icc.get_tilelayer('topogris'));
	addLayer_check(mapdens, gbif.get_tilelayer('heatmap'));
	addLayer_check(mapdens, diba.get_tilelayer('limitsxpn'));
	
	//Llegenda del heatmap
	$newpng = $('<img/>')
				.attr('src', gbif.get_heatmap_legend(acronim));
				
	$('#mapa-densitat-legend').append($newpng);	

};//Fi de mapa_observacions()



