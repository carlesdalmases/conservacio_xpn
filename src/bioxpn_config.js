/* ****************************************************************************/
//							Objecte BIOXPN_CONFIG
/* ****************************************************************************/
function BIOXPN_CONFIG()
{

	//Array d'objectes XPN amb informació dels Parcs
	this.xpn=[];
	this.xpn.push(new XPN('1431515072051','SLL','Parc Natural de Sant Llorenç del Munt i l\'Obac',[1.998922,41.669510],12));
	this.xpn.push(new XPN('1431514969375','MSY','Parc Natural del Montseny',[2.396995,41.773154],11));
	this.xpn.push(new XPN('1431514726479','GRF','Parc del Garraf',[1.873994,41.295448],11));
	this.xpn.push(new XPN('1431514847466','MAR','Parc de la Serralada de Marina',[2.241297,41.484169],13));
	this.xpn.push(new XPN('1431514809219','SLI','Parc de la Serralada Litoral',[2.338874,41.542325],12));
	this.xpn.push(new XPN('1431514928133','MOC','Parc del Montnegre i el Corredor',[2.543636,41.654674],11));
	this.xpn.push(new XPN('1431514772466','GUI','Espai Natural de les Guilleries-Savassona',[2.390846,41.951612],12));
	this.xpn.push(new XPN('1431514892717','MTQ','Parc del Castell de Montesquiu',[2.215392,42.123432],14));
	this.xpn.push(new XPN('1431515010335','OLE','Parc d\'Olèrdola',[1.7147,41.2897],13));
	this.xpn.push(new XPN('1431514693693','FOX','Parc del Foix',[1.6552,41.2726],12));
	this.xpn.push(new XPN('1431515045480','AGR','Parc Agrari del Baix Llobregat',[2.0668,41.3706],11));
	this.xpn.push(new XPN('1431514651345','COL','Parc Natural de la Serra de Collserola',[2.096404,41.431287],12));

	this.ALAserver = 'http://datos.gbif.es';

	//Radi de la consulta per localització sobre el mapa segons el nivell de zoom
	this.zoomradius = new ZOOMRADIUS();

	this.translates = new TRANSLATES();
	this.translates.set_lang('ca');
	this.translates.load_translates();

}; //Fi de BIOXPN_CONFIG()

/* ****************************************************************************/
//									METHODS
/* ****************************************************************************/
BIOXPN_CONFIG.prototype.get_ALAserver = function() 
{
    return this.ALAserver;
};

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

//Retorna la URL per obtenir els mesos en què s'ha pres les observacions i per un acronim
BIOXPN_CONFIG.prototype.get_URL_observacions_month = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'month');
};

//Retorna la URL per obtenir les altituds en què s'ha pres les observacions i per un acronim
BIOXPN_CONFIG.prototype.get_URL_observacions_elevation = function(acronim) 
{
	return this.get_URL_acronim_facet(acronim, 'elevation_d');
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

//Retorna la URL per obtenir un facet determinat dins de l'acronim
//La llista de facets disponibles: http://datos.gbif.es/biocache-service/index/fields
BIOXPN_CONFIG.prototype.get_URL_acronim_facet = function(acronim, facet) 
{
	return this.ALAserver+'/biocache-service/occurrences/search.json?q=qid:'+this.get_qid(acronim)+'&facets='+facet+'&foffset=0&pageSize=0&dir=asc&fsort=index&flimit=-1';
};

//Retorna la URL per obtenir un facet determinat en el punt  LAT/LON amb un radi determinat
//La llista de facets disponibles: http://datos.gbif.es/biocache-service/index/fields
BIOXPN_CONFIG.prototype.get_URL_puntradi_facet = function(facet, coordenades, radi) 
{
	return this.ALAserver+'/biocache-service/occurrences/search.json?q=*:*&facets='+facet+'&lat='+coordenades[1]+'&lon='+coordenades[0]+'&radius='+radi+'&foffset=0&pageSize=0&dir=asc&fsort=index&flimit=1';
};

//Retorna la URL per saber si una observació concreta (id) es troba dins de l'àmbit de 'acrònim'
BIOXPN_CONFIG.prototype.get_URL_acronim_obsID = function(acronim, obs_id) 
{
	return this.ALAserver+'/biocache-service/occurrences/search.json?fq=id:'+obs_id+'&q=qid:'+this.get_qid(acronim)+'&facet=off&pageSize=0';
};

//Retorna la URL per saber el número de taxons en un latlon_radi
BIOXPN_CONFIG.prototype.get_URL_numtaxa_puntradi = function(coordenades, radi) 
{
	return this.ALAserver+'/biocache-service/occurrence/facets.json?q=*:*&qc='+'&lat='+coordenades[1]+'&lon='+coordenades[0]+'&radius='+radi+'&facets=taxon_name&flimit=0';
};

//Retorna la URL per saber el d'observacions en un latlon_radi i per un taxon_name concret
BIOXPN_CONFIG.prototype.get_URL_numobs_taxonname_puntradi = function(taxon_name,coordenades,radi) 
{
	return this.ALAserver+'/biocache-service/occurrences/search.json?q=*:*&fq=taxon_name:'+taxon_name+'&lat='+coordenades[1]+'&lon='+coordenades[0]+'&radius='+radi+'&facet=off&pageSize=0';
};

//Retorna la URL per descarregar una checklist d'un acronim
BIOXPN_CONFIG.prototype.get_URL_checlistkdownload = function(acronim) 
{
	return this.ALAserver+'/biocache-service/occurrences/facets/download?q=qid:'+this.get_qid(acronim)+'&facets=taxon_name&count=false&fsort=index&dir=asc';
};

//Retorna la URL per descarregar una checklist d'una consulta en el punt LAT/LON amb un radi determinat
BIOXPN_CONFIG.prototype.get_URL_checlistkdownload_puntradi = function(coordenades,radi) 
{
	return this.ALAserver+'/biocache-service/occurrences/facets/download?q=*:*&facets=taxon_name&count=false&fsort=index&dir=asc&lat='+coordenades[1]+'&lon='+coordenades[0]+'&radius='+radi;
};

//Retorna la URL per descarregar una checklist d'una consulta en el punt LAT/LON amb un radi determinat
BIOXPN_CONFIG.prototype.get_URL_occurrencesdownload_puntradi = function(coordenades,radi) 
{
	return this.ALAserver+'/biocache-service/occurrences/index/download?q=*:*&lat='+coordenades[1]+'&lon='+coordenades[0]+'&radius='+radi+'&reasonTypeId=0&extra=dataResourceUid,dataResourceName.p';
};

//Retorna la URL per descarregar una checklist d'una consulta en el punt LAT/LON amb un radi determinat
BIOXPN_CONFIG.prototype.get_URL_occurrencesdownload_taxonname_puntradi = function(taxon_name,coordenades,radi) 
{
	return this.ALAserver+'/biocache-service/occurrences/index/download?fq=taxon_name:'+taxon_name+'&lat='+coordenades[1]+'&lon='+coordenades[0]+'&radius='+radi+'&reasonTypeId=0&extra=dataResourceUid,dataResourceName.p';
};


//Retorna la URL del servidor de mapes WMS
BIOXPN_CONFIG.prototype.get_URL_WMS = function(acronim) 
{
	return this.ALAserver+'/biocache-service/mapping/wms/reflect?';
};

//Retorna la URL per obtenir la llista de taxon_name present a acronim
BIOXPN_CONFIG.prototype.get_URL_taxonnamelist = function(acronim) 
{
	return this.ALAserver+'/biocache-service/occurrences/search.json?q=qid:'+this.get_qid(acronim)+'&facets=taxon_name&flimit=-1&foffset=0&pageSize=0&sort=taxon_name&dir=asc&fsort=index'
};

//Retorna la URL per obtenir els taxons i observacions concrets per un grup i acronim
BIOXPN_CONFIG.prototype.get_URL_group = function(acronim, group) 
{
	//return this.ALAserver+'/biocache-service/explore/counts/group/'+group+'?fq=qid:'+this.get_qid(acronim) --> NO funciona
	return this.ALAserver+'/biocache-service/occurrences/search.json?q=qid:'+this.get_qid(acronim)+'&facets=taxon_name&flimit=-1&foffset=0&pageSize=0&sort=taxon_name&dir=asc&fsort=index&fq=species_group:'+group;

};

//Retorna la URL per obtenir la jerarquia taxònomica donat un rank, name i acronim (retorna el número d'observacions)
BIOXPN_CONFIG.prototype.get_URL_breakdown_observacions = function(acronim, rank, r_name) 
{
	return this.ALAserver+'/biocache-service/breakdown.json?q=qid:'+this.get_qid(acronim)+'&rank='+rank+(_.isUndefined(r_name)?'':'&name='+r_name);
};

//Retorna la URL per obtenir la jerarquia taxònomica donat un rank, name i acronim (retorna el número d'observacions)
BIOXPN_CONFIG.prototype.get_URL_breakdown_numtaxa = function(acronim, rank, r_name) 
{
	return this.ALAserver+'/biocache-service/occurrences/search.json?fq='+rank+':'+r_name+'&q=qid:'+this.get_qid(acronim)+'&facets=taxon_name&foffset=0&pageSize=0&dir=asc&fsort=index&flimit=-1';
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



function ZR(zoom, radius)
{
	this.zoom = zoom;
	this.radius = radius;
};//Fi de ZR
ZR.prototype.get_zoom = function (){return this.zoom;};
ZR.prototype.get_radius = function (){return this.radius;};


function ZOOMRADIUS()
{
	this.zoom_radius=[];
	//Copiat del codi original del 'generic-hub'
	this.zoom_radius.push(new ZR(0,800));
	this.zoom_radius.push(new ZR(1,400));
	this.zoom_radius.push(new ZR(2,200));
	this.zoom_radius.push(new ZR(3,100));
	this.zoom_radius.push(new ZR(4,50));
	this.zoom_radius.push(new ZR(5,25));
	this.zoom_radius.push(new ZR(6,20));
	this.zoom_radius.push(new ZR(7,7.5));
	this.zoom_radius.push(new ZR(8,3));
	this.zoom_radius.push(new ZR(9,1.5));
	this.zoom_radius.push(new ZR(10,.75));
	this.zoom_radius.push(new ZR(11,.25));
	this.zoom_radius.push(new ZR(12,.15));
	this.zoom_radius.push(new ZR(13,.1));
	this.zoom_radius.push(new ZR(14,.05));
	this.zoom_radius.push(new ZR(15,.025));
	this.zoom_radius.push(new ZR(16,.015));
	this.zoom_radius.push(new ZR(17,0.0075));
	this.zoom_radius.push(new ZR(18,0.004));
	this.zoom_radius.push(new ZR(19,0.002));
	this.zoom_radius.push(new ZR(20,0.001));
};
ZOOMRADIUS.prototype.get_radius = function(zoom)
{
	return _.find(this.zoom_radius, function(d){return d.zoom == zoom}).get_radius();	
}

ZOOMRADIUS.prototype.get_zoom = function(radius)
{
	return _.find(this.zoom_radius, function(d){return d.radius == radius}).get_zoom();	
}
