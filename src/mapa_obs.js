function mapa_observacions(acronim)
{

	//Instàncies dels objectes amb les capes WMS 
	var icc = new CAPES_ICC();
	var diba = new CAPES_DIBA();
	var gbif = new CAPES_GBIF(acronim);	

	//MAPA
	var map = new ol.Map(
	{
		target: 'map',
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
	map.on("click", function(evt){gbif_consulta_observacions(map, gbif, evt)}); 


	map.addLayer(icc.get_tilelayer('topogris'));
	//map.addLayer(gbif.get_tilelayer('observacions'));
	map.addLayer(diba.get_tilelayer('limitsxpn'));
	
	
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
		projection: ol.proj.get('EPSG:4326'),
		units: 'degrees',
		coordinateFormat: function(coordinate) {return ol.coordinate.format(coordinate, '{y}, {x}', 4)},
	}),
	
	new ol.control.ZoomToExtent({extent: mapextent}),
	new ol.control.Zoom()

	//new ol.control.ZoomSlider()
	];
};

CONTROLS.prototype.getControls = function()
{
	return this.c;	
};

function gbif_consulta_observacions(map, gbif, evt)
{
		var coord = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
		console.log('Click on: '+coord[0]+' ,'+coord[1]);
		
		//Preguntar al servidor quines observacions hi ha en el click
		
		//Consulta asíncrona, si torna resultats, fer:
		
		//Mostrar la capa amb el punt(s) seleccionat(s)
		set layer seleccio_punt_radi
		map.addLayer(gbif.get_tilelayer('seleccio_puntradi'));

		//Mostrar el popup
		mostrar_popup(map, evt.coordinate);
};

function mostrar_popup(map, coordenades)
{
	//Exemple: http://jsfiddle.net/ro1ptr0k/26/
	
	//Demano els identificadors del POPUP del DOM
	var container = document.getElementById('popup');
	var content = document.getElementById('popup-content');
	var closer = document.getElementById('popup-closer');
		
	/**
	* Add a click handler to hide the popup.
	* @return {boolean} Don't follow the href.
	*/
	closer.onclick = function() 
	{
		map.removeLayer(gbif.get_tilelayer('seleccio_puntradi'));
		overlay.setPosition(undefined);
		closer.blur();
		return false;
	};

	//Contigunt
	content.innerHTML = '<p>HOLA:</p><code>';

	/*Contingut:
		* Posició lat/lon del click
		* Número d'observacions
		* Número de tàxons
		* Botó Descarregar llista tàxons
		* Botó Descarregar llista observacions
	*/
	
	/**
	* Create an overlay to anchor the popup to the map.
	*/
	var overlay = new ol.Overlay({element: container});
	map.addOverlay(overlay);
	overlay.setPosition(coordenades);
	
}; //Fi de mostrar_popup