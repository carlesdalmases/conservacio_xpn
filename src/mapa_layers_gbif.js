//Retorna un array d'objectes de tipus GBIF amb les capes WMTS

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
					//'q': '*:*,qid:'+bioxpn_config.get_qid(this.a)
					'q': '*:*',
					'wkt':_.trimStart(bioxpn_config.get_qid(this.a), 'wkt=')
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
					'ENV': 'colormode:grid;opacity:1;',
					//'ENV': 'color:336b08;name:circle;size:3;opacity:1;',
					'q': '*:*',
					'wkt':_.trimStart(bioxpn_config.get_qid(this.a), 'wkt=')
				}
			})
		})
	));
	
		

};

//Mètode que retorna un objecte tile indicant el nom de la capa
CAPES_GBIF.prototype.get_tilelayer = function(nom_layer)
{
	x = _.find(this.gbif_layers, function(d){return d.label==nom_layer;});
	if(_.isUndefined(x)){return;} else {return x.layer_tile}; 
};

//Mètode que retorna un la URL amb el PNG de la llegenda del heatmap
CAPES_GBIF.prototype.get_heatmap_legend = function(acronim)
{
	//return bioxpn_config.get_ALAserver()+'/biocache-service/density/legend?'+'q:*:*,qid:'+bioxpn_config.get_qid(acronim)+'&facet:off'
	return bioxpn_config.get_ALAserver()+'/biocache-service/density/legend?'+'q:*:*&wkt:'+_.trimStart(bioxpn_config.get_qid(acronim), 'wkt=')+'&facet:off';
};


CAPES_GBIF.prototype.set_layer_selection_taxon = function(taxon_name)
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
					'ENV': 'color:ffd700;name:circle;size:4;opacity:1;',
					//'q': ',qid:'+bioxpn_config.get_qid(this.a),
					'q': '*:*',
					'wkt':_.trimStart(bioxpn_config.get_qid(this.a), 'wkt='),
					'fq': 'taxon_name:'+taxon_name
				}
			})
		})
	);
	
	
	//Si a l'array existeix la capa seleccio_taxon, l'elimino
	var i = _.findIndex(this.gbif_layers, function(d){return d.label=='seleccio_taxon'});
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
	
	//console.log(this.gbif_layers);
};

CAPES_GBIF.prototype.set_layer_selection_puntradi = function(coordenades, radi)
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
					'ENV': 'color:33ffff;name:circle;size:3;opacity:1;',
					//'q': '*:*,qid:'+bioxpn_config.get_qid(this.a),
					'q': '*:*',
					'wkt':_.trimStart(bioxpn_config.get_qid(this.a), 'wkt='),
					'lat':coordenades[1],
					'lon':coordenades[0],
					'radius': radi
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