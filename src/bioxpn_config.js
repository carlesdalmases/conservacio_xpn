/* ****************************************************************************/
//							Objecte BIOXPN_CONFIG
/* ****************************************************************************/
function BIOXPN_CONFIG()
{

	//Array d'objectes XPN amb informació dels Parcs
	this.xpn=[];
	this.xpn.push(new XPN('1431515072051','SLL','Parc Natural de Sant Llorenç del Munt i l\'Obac',[1.998922,41.669510],12));
	this.xpn.push(new XPN('1431514969375','MSY','Parc Natural del Montseny',[2.396995,41.773154],12));
	this.xpn.push(new XPN('1431514726479','GRF','Parc del Garraf',[1.873994,41.295448],10));
	this.xpn.push(new XPN('1431514847466','MAR','Parc de la Serralada de Marina',[2.241297,41.484169],10));
	this.xpn.push(new XPN('1431514809219','SLI','Parc de la Serralada Litoral',[2.338874,41.542325],10));
	this.xpn.push(new XPN('1431514928133','MOC','Parc del Montnegre i el Corredor',[2.543636,41.654674],12));
	this.xpn.push(new XPN('1431514772466','GUI','Espai Natural de les Guilleries-Savassona',[2.390846,41.951612],10));
	this.xpn.push(new XPN('1431514892717','MTQ','Parc del Castell de Montesquiu',[2.215392,42.123432],10));
	this.xpn.push(new XPN('1431515010335','OLE','Parc d\'Olèrdola',[1.774774,41.320471],10));
	this.xpn.push(new XPN('1431514693693','FOX','Parc del Foix',[1.661856,41.277090],10));
	this.xpn.push(new XPN('1431515045480','AGR','Parc Agrari del Baix Llobregat',[2.062676,41.332351],10));
	this.xpn.push(new XPN('1431514651345','COL','Parc Natural de la Serra de Collserola',[2.096404,41.431287],10));

	this.ALAserver = 'http://datos.gbif.es';


}; //Fi de BIOXPN_CONFIG()

/* ****************************************************************************/
//									METHODS
/* ****************************************************************************/
//Retorna un objecte XPN que coincideix amb acronim
BIOXPN_CONFIG.prototype.get_xpn = function(acronim) 
{
    return (_.find(this.xpn, function(d){return d.acronim == acronim;}));
};

//Retorna el qid d'un parc donat el seu acronim
BIOXPN_CONFIG.prototype.get_qid = function(acronim) 
{
    return (this.get_xpn(acronim)).get_qid();
};

//Retorna el nom oficial d'un parc donat el seu acronim
BIOXPN_CONFIG.prototype.get_nom_oficial = function(acronim) 
{
    return (this.get_xpn(acronim)).get_nomoficial();
};

//Retorna el centermap_lonlat d'un parc donat el seu acronim
BIOXPN_CONFIG.prototype.get_centermap_lonlat = function(acronim) 
{
    return this.get_xpn(acronim).get_centermaplonlat();
};

//Retorna el zoom_initial d'un parc donat el seu acronim
BIOXPN_CONFIG.prototype.get_zoom_initial = function(acronim) 
{
    return this.get_xpn(acronim).get_zoominitial();
};


//Retorna la URL per obtenir la llista de taxons per un acronim
BIOXPN_CONFIG.prototype.get_URL_taxonlist = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'taxon_name');
};

//Retorna la URL per obtenir la llista de fons de dades per un acronim
BIOXPN_CONFIG.prototype.get_URL_resourceslist = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'data_resource');
};

//Retorna la URL per obtenir les observacions per regnes i per un acronim
BIOXPN_CONFIG.prototype.get_URL_observacions_kingdom = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'kingdom');
};

//Retorna la URL per obtenir les observacions per formes de vida i per un acronim
BIOXPN_CONFIG.prototype.get_URL_observacions_lifeform = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'species_group');
};

//Retorna la URL per obtenir les observacions per tipus de registre i per un acronim
BIOXPN_CONFIG.prototype.get_URL_observacions_recordtype = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'record_type');
};

//Retorna la URL per obtenir les observacions per anys i per un acronim
BIOXPN_CONFIG.prototype.get_URL_observacions_occurrence_date = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'year');
};

//Retorna la URL per obtenir la qualitat de les dades per un acronim
BIOXPN_CONFIG.prototype.get_URL_observacions_assertions_missing = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'assertions_missing');
};


BIOXPN_CONFIG.prototype.get_URL_acronim_facet = function(acronim, facet) 
{
	return this.ALAserver+'/biocache-service/occurrences/search.json?q=qid:'+this.get_qid(acronim)+'&facets='+facet+'&foffset=0&pageSize=0&dir=asc&fsort=index&flimit=-1';
};

//Retorna la URL per descarregar una checklist
BIOXPN_CONFIG.prototype.get_URL_checlistkdownload = function(acronim) 
{
	return this.ALAserver+'/biocache-service/occurrences/facets/download?q=qid:'+this.get_qid(acronim)+'&facets=taxon_name&count=false&fsort=index&dir=asc';
};

//Retorna la URL per descarregar una checklist
BIOXPN_CONFIG.prototype.get_URL_WMS = function(acronim) 
{
	return this.ALAserver+'/biocache-service/mapping/wms/reflect?';
};


/* ************************************************************************** */
//							Objecte XPN, constructor
/* ************************************************************************** */
function XPN(qid,acronim,nom_oficial,centermap_lonlat,zoom_initial)
{
	//Codi del filtre espacials a SOLR
	this.qid = qid;
	
	//Acronim del Parc
	this.acronim = acronim;
	
	//Nom del Parc
	this.nom_oficial = nom_oficial;
	
	//Coordenades lon, lat del centre del parc
	this.centermap_lonlat = centermap_lonlat;
	
	//Zoom inicial al mapa
	this.zoom_initial = zoom_initial;

};// Fi de XPN()

XPN.prototype.get_qid = function(){return this.qid;};
XPN.prototype.get_acronim = function(){return this.acronim;};
XPN.prototype.get_nomoficial = function(){return this.nom_oficial;};
XPN.prototype.get_centermaplonlat = function(){return this.centermap_lonlat;};
XPN.prototype.get_zoominitial = function(){return this.zoom_initial;};

