//Retorna un array d'objectes de tipus ICC amb les capes WMTS

function CAPES_GBIF(acronim)
{
	this.gbif_layers = [];
	this.a=acronim;
	
	//Observacions	
	this.gbif_layers.push(new LAYER(
		'observacions', 
		new ol.layer.Tile(
		{
			source: new ol.source.TileWMS(
			{
				url: bioxpn_config.get_URL_WMS(),
				params: 
				{
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
					//'ENV': 'colormode:basis_of_record;name:circle;size:4;opacity:1;',
					'ENV': 'color:ff0000;name:circle;size:3;opacity:1;',
					'q': '*:*,qid:'+bioxpn_config.get_qid(this.a)
				}
			})
		})
	));
	
	//Heatmap
	this.gbif_layers.push(new LAYER(
		'heatmap', 
		new ol.layer.Tile(
		{
			source: new ol.source.TileWMS(
			{
				url: bioxpn_config.get_URL_WMS(),
				params: 
				{
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
					//'ENV': 'colormode:basis_of_record;name:circle;size:4;opacity:1;',
					'ENV': 'color:336b08;name:circle;size:3;opacity:1;',
					'q': '*:*,qid:'+bioxpn_config.get_qid(this.a)
				}
			})
		})
	));
	
		

};

//Mètode que retorna un objecte tile indicant el nom de la capa
CAPES_GBIF.prototype.get_tilelayer = function(nom_layer)
{
	return _.find(this.gbif_layers, function(d){return d.label==nom_layer;}).gettilelayer();
};


CAPES_GBIF.prototype.set_layer_selection_taxon	= function(taxon)
{
	var la = new LAYER(
		'seleccio_taxon', 
		new ol.layer.Tile(
		{
			source: new ol.source.TileWMS(
			{
				url: bioxpn_config.get_URL_WMS(),
				params: 
				{
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
					'ENV': 'color:336b08;name:circle;size:3;opacity:1;',
					'q': 'taxon_name:'+taxon+',qid:'+bioxpn_config.get_qid(this.a)
				}
			})
		})
	);
	
	
	//Si a l'array existeix la capa seleccio_taxon, l'elimino
	var i = _.findIndex(this.gbif_layers, function(d){return d.label=='seleccio_taxon'});
	if(i>-1)
	{
		//Existeix, poso la LAYER en el mateix index de l'array
		console.log('Existeix');
		this.gbif_layers[i] = la;
	}
	else
	{
		//No existeix, faig un push
		console.log('NO existeix');
		this.gbif_layers.push(la);
	}
	
	console.log(this.gbif_layers);

};

CAPES_GBIF.prototype.set_layer_selection_puntradi	= function(coordenades, radi)
{
	var la = new LAYER(
		'seleccio_puntradi', 
		new ol.layer.Tile(
		{
			source: new ol.source.TileWMS(
			{
				url: bioxpn_config.get_URL_WMS(),
				params: 
				{
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
					'ENV': 'color:336b08;name:circle;size:3;opacity:1;',
					'q': '*:*,qid:'+bioxpn_config.get_qid(this.a)
					//TODO --> afegir la consulta espacial per punt/radi
				}
			})
		})
	);
	
	
	//Si a l'array existeix la capa seleccio_taxon, l'elimino
	var i = _.findIndex(this.gbif_layers, function(d){return d.label=='seleccio_puntradi'});
	if(i>-1)
	{
		//Existeix, poso la LAYER en el mateix index de l'array
		this.gbif_layers[i] = la;
	}
	else
	{
		//No existeix, faig un push
		this.gbif_layers.push(la);
	}
};