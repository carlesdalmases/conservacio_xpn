function mapa_observacions(acronim)
{
	//Inicialitzar el mapa:
	var center = [41.564786, 2.012173];

	// ***************************************************************
	var crs25831 = new L.Proj.CRS('EPSG:25831','+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
				   {resolutions: [1100, 550, 275, 100, 50, 25, 10, 5, 2, 1, 0.5, 0.25]});
	// ***************************************************************
	
	var serveiTopoCache = L.tileLayer.wms("http://mapcache.icc.cat/map/bases/service?", {
	    layers: 'topo',
	    format: 'image/jpeg',
	    //crs: crs25831,
	    continuousWorld: true,
	    maxZoom: crs25831.options.resolutions.length,
	    minZoom: 0,
	    attribution: 'Institut Cartogr&agrave;fic i Geol&oacute;gic de Catalunya -ICGC'
	});

	var serveiOrtoCache = L.tileLayer.wms("http://mapcache.icc.cat/map/bases/service?", {
		layers: 'orto',
		format: 'image/jpeg',
		//crs: crs25831,
		continuousWorld: true,
		maxZoom: crs25831.options.resolutions.length,
		minZoom: 0,	
		attribution: 'Institut Cartogr&agrave;fic i Geol&oacute;gic de Catalunya -ICGC'
	});

	var serveitopoGrisCache = L.tileLayer.wms("http://mapcache.icc.cat/map/bases/service?", {
		layers: 'topogris',
		format: 'image/jpeg',
		//crs: crs25831,
		continuousWorld: true,
		maxZoom: crs25831.options.resolutions.length,
		minZoom: 0,	
		attribution: 'Institut Cartogr&agrave;fic i Geol&oacute;gic de Catalunya -ICGC'
	});

	var diba_xpn_limits = L.tileLayer.wms("http://sitmun.diba.cat/wms/servlet/XPE50?", {
		layers: 'XPE50_111L',
		format: 'image/png32',
		//crs: crs25831,
		continuousWorld: true,
		maxZoom: 20,
		minZoom: 0,	
		attribution: 'Diputaci� de Barcelona',
		transparent: true,
	});

	var gbifwms = L.tileLayer.wms("http://datos.gbif.es/biocache-service/mapping/wms/reflect?", {
		layers: 'ALA:occurrences',
		format: 'image/png',
		//crs: crs25831,
		continuousWorld: true,
		maxZoom: 20,
		minZoom: 0,	
		attribution: 'GBIF.es',
		transparent: true,
	});
/*
	var gbifwms = new ol.layer.Tile({
	    source: new ol.source.TileWMS({
	        url: 'http://datos.gbif.es/biocache-service/mapping/wms/reflect?',
	        params: {
	            'LAYERS': 'ALA:occurrences',
	            'VERSION': '1.1.1',
	            'FORMAT': 'image/png',
	            'TILED': true,
	            'SERVICE': 'WMS',
	            'TRANSPARENT': true,
	            'BGCOLOR': 0x000000,
	            'OUTLINE': true,
	            'STYLE': 'opacity:0.8',
	            'SRS': 'EPSG:3857',
	            'ENV': 'colormode:basis_of_record;name:circle;size:4;opacity:1;',
	            'q': '*:*,qid:1437461258889'
	        }
	    })
	});
*/
	

	//Afegeixo les layers al map
	var map = L.map('map', {
	      layers: [serveitopoGrisCache, diba_xpn_limits, gbifwms],
	      //crs: crs25831,
	      continuousWorld: true,
	      worldCopyJump: false,
	      center: center,
	      zoom: 7,
	});
	
	//Llegenda
	var baseMaps = 
	{
		"Topogr&agrave;fic": serveiTopoCache,
		"Topogr&agrave;fic gris": serveitopoGrisCache,
		"Ortofoto": serveiOrtoCache
	};
	
	var overlayMaps = {"Parcs Naturals DIBA":diba_xpn_limits,
					   "GBIF.es": gbifwms};
	
	//Escala
	L.control.scale({imperial: false}).addTo(map);
	
	//Control de capes
	L.control.layers(baseMaps, overlayMaps).addTo(map);

	
	
}//Fi de mapa_observacions()



/*
	var gbifwms = new ol.layer.Tile({
	    source: new ol.source.TileWMS({
	        url: 'http://datos.gbif.es/biocache-service/mapping/wms/reflect?',
	        params: {
	            'LAYERS': 'ALA:occurrences',
	            'VERSION': '1.1.1',
	            'FORMAT': 'image/png',
	            'TILED': true,
	            'SERVICE': 'WMS',
	            'TRANSPARENT': true,
	            'BGCOLOR': 0x000000,
	            'OUTLINE': true,
	            'STYLE': 'opacity:0.8',
	            'SRS': 'EPSG:3857',
	            'ENV': 'colormode:basis_of_record;name:circle;size:4;opacity:1;',
	            'q': '*:*,qid:1437461258889'
	        }
	    })
	});





	//Inicialitzar el mapa:
	var center = [41.564786, 2.012173];

	// ***************************************************************
	var crs25831 = new L.Proj.CRS('EPSG:25831','+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
				   {resolutions: [1100, 550, 275, 100, 50, 25, 10, 5, 2, 1, 0.5, 0.25]});
	// ***************************************************************

	var serveiTopoCache = L.tileLayer.wms("http://mapcache.icc.cat/map/bases/service?", {
	    layers: 'topo',
	    format: 'image/jpeg',
	    crs: crs25831,
	    continuousWorld: true,
	    maxZoom: crs25831.options.resolutions.length,
	    minZoom: 0,
	    attribution: 'Institut Cartogr&agrave;fic i Geol&oacute;gic de Catalunya -ICGC',
	});

	var serveiOrtoCache = L.tileLayer.wms("http://mapcache.icc.cat/map/bases/service?", {
		layers: 'orto',
		format: 'image/jpeg',
		crs: crs25831,
		continuousWorld: true,
		maxZoom: crs25831.options.resolutions.length,
		minZoom: 0,	
		attribution: 'Institut Cartogr&agrave;fic i Geol&oacute;gic de Catalunya -ICGC',
	});

	var serveitopoGrisCache = L.tileLayer.wms("http://mapcache.icc.cat/map/bases/service?", {
		layers: 'topogris',
		format: 'image/jpeg',
		crs: crs25831,
		continuousWorld: true,
		maxZoom: crs25831.options.resolutions.length,
		minZoom: 0,	
		attribution: 'Institut Cartogr&agrave;fic i Geol&oacute;gic de Catalunya -ICGC',
	});
	

	//Afegeixo les layers al map
	var map = L.map('map', {
	      layers: [serveitopoGrisCache],
	      crs: crs25831,
	      continuousWorld: true,
	      worldCopyJump: false,
	      center: center,
	      zoom: 7,
	});

	//Llegenda
	var baseMaps = 
	{
		"Topogr&agrave;fic": serveiTopoCache,
		"Topogr&agrave;fic gris": serveitopoGrisCache,
		"Ortofoto": serveiOrtoCache
	};
	
	//var overlayMaps = {"Punts LIDAR":geojsonLayer};
	
	//Escala
	L.control.scale({imperial: false}).addTo(map);
	
	//Control de capes
	//L.control.layers(baseMaps, overlayMaps).addTo(map);
	L.control.layers(baseMaps).addTo(map);

	//Consulta al SOLR
	var URL_query = 'http://dalmases.ddns.net:8983/solr/lidar/select?q=*:*&wt=json&json.wrf=?&fl=xy,z,class&sort=random_1234%20desc&rows=1000';
	
	console.time("Query_SOLR");
	query_server(URL_query).then
	(
			function(df)
			{
				console.timeEnd("Query_SOLR");
				//CANVAS
				// http://bl.ocks.org/sumbera/11114288
				
				console.time("Canvas_Layer");
				var puntsLIDAR = L.canvasOverlay()
						.params({data: df})
			            .drawing(drawingOnCanvas)
			            .addTo(map);
			    
				console.timeEnd("Canvas_Layer");
				
				//Afegeixo la capa a la llegenda
				//TODO
			}
	);
	

	// **************************
	// drawingOnCanvas()
	// **************************
	function drawingOnCanvas(canvasOverlay, params) 
	{
		wkt = new Wkt.Wkt();
	    var ctx = params.canvas.getContext('2d');
	    ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
	    ctx.fillStyle = "rgba(255,0,0, 1)";
	    
	    //Defineixo la projecci� ETRS89-UTM31N segons el ICC
	    proj4.defs('EPSG:25831','+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
		
		console.time("Generacio_CANVAS");
		$.each(params.options.data.response.docs, function(index, value)
		{
			wkt.read(value.xy);
			
			//Converteixo les coordenades a LAT/LONG
			latlong = proj4('EPSG:25831','WGS84',[wkt.components[0].x, wkt.components[0].y]);
			
			//Creo el punt amb coordenades de pantalla
			dot = canvasOverlay._map.latLngToContainerPoint([latlong[1], latlong[0]]);
			ctx.beginPath();
			//Dibuixo el punt
			ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
			//Omplo de color
			ctx.fill();
			ctx.closePath();			
		});
		console.timeEnd("Generacio_CANVAS");
				
	}; //Fi de drawingOnCanvas()
*/