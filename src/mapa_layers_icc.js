//Retorna un array d'objectes de tipus ICC amb les capes WMTS
function CAPES_ICC()
{
	this.icc_layers = [];
	
	var projection = ol.proj.get('EPSG:3857');
	var projectionExtent = projection.getExtent();

	var size = ol.extent.getWidth(projectionExtent) / 256;
	var i = 21;
	var resolutions = new Array(i);
	var matrixIds = new Array(i);
	for (var z = 0; z < i; ++z) {
		// generate resolutions and matrixIds arrays for this WMTS
		resolutions[z] = size / Math.pow(2, z);
		matrixIds[z] = z;
	}
	
	this.icc_layers.push(new LAYER('topo', wmts('topogris')));
	this.icc_layers.push(new LAYER('topogris', wmts('topogris')));
	this.icc_layers.push(new LAYER('orto', wmts('orto')));
	this.icc_layers.push(new LAYER('ortogris', wmts('ortogris')));
	
	function wmts(layer_name)
	{
		return new ol.layer.Tile(
		{
			opacity: 0.7,
			extent: projectionExtent,
			source: new ol.source.WMTS(
			{
				//attributions: [attribution],
				url: 'http://geoserveis.icc.cat/icc_mapesmultibase/noutm/wmts/service?service=wmts',
				layer: layer_name,
				matrixSet: 'GRID3857',
				format: 'jpeg',
				projection: projection,
				tileGrid: new ol.tilegrid.WMTS(
				{
					origin: ol.extent.getTopLeft(projectionExtent),
					resolutions: resolutions,
					matrixIds: matrixIds
				}),
				style: 'default'
			})
		});
	};
};

//Mètode que retorna un objecte tile indicant el nom de la capa
CAPES_ICC.prototype.get_tilelayer = function(nom_layer)
{
	return _.find(this.icc_layers, function(d){return d.label==nom_layer;}).gettilelayer();
};
