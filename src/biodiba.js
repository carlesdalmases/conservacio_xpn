function TRANSLATES()
{
	this.language_list = ['ca','es','en'];
	this.lang_select;
	this.translate = [];
};//Fi de translate

TRANSLATES.prototype.set_lang = function(lang) 
{
    this.lang_select = lang;
};

TRANSLATES.prototype.get_translate = function(value)
{
	var langselect = this.lang_select;
	var t = _.find(this.translate, function(x){return x.value == value});
	if(_.isUndefined(t))
	{
		//No la trobat, retorno value
		return value;
	}
	else
	{
		var tt = _.find(t.chains, function(x){
			return x.lang == langselect});
		if(_.isUndefined(tt))
		{
			//No he trobat la cadena amb la llengua seleccionada
			return value;
		}
		else
		{
			//return utf8.encode(tt.text);
			return tt.text;
		} 
	}
};

function TRANSLATE(value)
{
	this.value = value;
	this.chains = [];
};

TRANSLATE.prototype.set_chain = function(lang,text)
{
	this.chains.push(new CHAIN(lang,text));
};

function CHAIN(lang, text)
{
	this.lang = lang;
	this.text = text;
};

TRANSLATES.prototype.set_translates = function(value, lang, text)
{
	var t = _.find(this.translate, function(x){return x.value == value});
	if(_.isUndefined(t))
	{
		t = new TRANSLATE(value);
		t.set_chain(lang,text);
		this.translate.push(t);
	}
	else
	{
		t.set_chain(lang,text);
	}
};

TRANSLATES.prototype.load_translates = function()
{
	//this.set_translates(value,lang,text);
	
	//General
	this.set_translates('occurrences','ca','observacions');
	this.set_translates('altres','ca','Altres');
	this.set_translates('desconegut','ca','Desconegut');
	this.set_translates('acumulat','ca','Acumulat');
	this.set_translates('tipusobservacions','ca','per tipus d\'observacions');
	this.set_translates('fontsdedades','ca','Fonts de dades');
	this.set_translates('tipusderegistre','ca','per tipus de registre');
	this.set_translates('gransgrups','ca','Grans grups');
	this.set_translates('numerotaxons','ca','per número de tàxons');	
	this.set_translates('reset','ca','Reset');	
	this.set_translates('permesos','ca','per mesos de l\'any');
	this.set_translates('occurrencesdensity','ca','Densitat d\'observacions');
	
	//Tipus de registre
	this.set_translates('PreservedSpecimen','ca','espècimen preservat');
	this.set_translates('HumanObservation','ca','observació humana');
	this.set_translates('Occurrence','ca','observació');
	this.set_translates('FossilSpecimen','ca','fòssil');

	//Jerarquia taxonòmica
	this.set_translates('jerarquiataxonomica','ca','Jerarquia taxonòmica');

	//Qualitat de les dades
	this.set_translates('sensedates','ca','sense dates');
	this.set_translates('ambdates','ca','amb dates');
	this.set_translates('datesobservacio','ca','dates d\'observació');
	this.set_translates('qualitatdades','ca','Qualitat de les dades');	
	this.set_translates('locationNotSupplied','ca','sense localitat');
	this.set_translates('locationSupplied','ca','amb localitat');
	this.set_translates('localitzacio','ca','localitats');
	this.set_translates('precissio','ca','coordenades');
	this.set_translates('missingCoordinatePrecision','ca','sense precissió');
	this.set_translates('Not_missingCoordinatePrecision','ca','amb precissió');
	this.set_translates('uncertaintyNotSpecified','ca','sense incertesa');
	this.set_translates('Not_uncertaintyNotSpecified','ca','amb incertesa');
	this.set_translates('incertesa','ca','coordenades');

	//GROUPS
	this.set_translates('kingdom','ca','Regne');
	this.set_translates('Animals','ca','Animals');
	this.set_translates('Plants','ca','Plantes');
	this.set_translates('Fungi','ca','Funga');
	this.set_translates('Chromista','ca','Cromistes');
	this.set_translates('Protozoa','ca','Protozous');
	this.set_translates('Bacteria','ca','Bacteris');
	this.set_translates('Algae','ca','Algues');
	this.set_translates('Mammals','ca','Mamífers');
	this.set_translates('Birds','ca','Ocells');
	this.set_translates('Reptiles','ca','Rèptils');
	this.set_translates('Amphibians','ca','Amfibis');
	this.set_translates('Fish','ca','Peixos');
	this.set_translates('Molluscs','ca','Mol·luscs');
	this.set_translates('Arthropods','ca','Artòpodes');
	this.set_translates('Crustaceans','ca','Crustacis');
	this.set_translates('Insects','ca','Insectes');
	this.set_translates('Bryophytes','ca','Briòfits');
	this.set_translates('Gymnosperms','ca','Gimnospermes');
	this.set_translates('FernsAndAllies','ca','Falgueres i molses');
	this.set_translates('Angiosperms','ca','Angiospermes');
	this.set_translates('Monocots','ca','Monocotiledònies');
	this.set_translates('Dicots','ca','Dicotiledònies');
	
	//Taxonomy
	this.set_translates('phylum','ca','Fílum');
	this.set_translates('class','ca','Classe');
	this.set_translates('order','ca','Ordre');
	this.set_translates('family','ca','Família');
	this.set_translates('genus','ca','Gènere');
	this.set_translates('species','ca','Espècies');
	
	//Observacions per mesos
	this.set_translates('permesos_01','ca','gener');
	this.set_translates('permesos_02','ca','febrer');
	this.set_translates('permesos_03','ca','març');
	this.set_translates('permesos_04','ca','abril');
	this.set_translates('permesos_05','ca','maig');
	this.set_translates('permesos_06','ca','juny');
	this.set_translates('permesos_07','ca','juliol');
	this.set_translates('permesos_08','ca','agost');
	this.set_translates('permesos_09','ca','setembre');
	this.set_translates('permesos_10','ca','octubre');
	this.set_translates('permesos_11','ca','novembre');
	this.set_translates('permesos_12','ca','desembre');
		
	this.set_translates('peraltitud','ca','per altitud');
	this.set_translates('metres','ca','metres');
	this.set_translates('perdates','ca','per dates');
	


	this.set_translates('colaborate','ca','Amb la col·laboració de:');
	this.set_translates('disclaimer','ca','Descarregant qualsevol contingut d\'aquesta pàgina està acceptant la <a href=\'http://www.gbif.es/Recursos.php#tabs-5\'>normativa de GBIF España i la del proveïdor de dades específic</a>.');
	this.set_translates('intro','ca',
	
		'<p>La informació referent a la biodiversitat que es presenta en aquesta pàgina es crea de forma automàtica,'+
		'a partir de les fonts d\'informació indexades al servidor de <a href=\'http://www.gbif.es\'>GBIF.es</a>.</p>'+
		'<p>Cal tenir present que les dades inclouen observacions de camps, espècies fòssils, plecs d\'herbari, exemplars conservats en museus, etc. '+ 
		'També cal considerar la distribució espacial de les observacions, amb coordenades més o menys precises, i l\'escala dels límits de l\'espai natural utilitzats per a fer la consulta.</p>'+
		'<p>Periòdicament s\'actualitzen i amplien les fonts d\'informació al servidor de <a href=\'http://www.gbif.es\'>GBIF.es</a> i, '+ 
		'automàticament, s\'actualitza aquesta pàgina. Si teniu coneixement d\'un conjunt d\'observacions en aquest Parc Natural que podria completar aquesta informació, '+ 
		'en ho podeu fer saber a: <a href= \'mailto:xarxaparcs@diba.cat?subject=[BIODIBA]:\'>xarxaparcs@diba.cat</a></p>'+

		'<ul class="list-group">'+
			'<span class="nav-header disabled">Les observacions de biodiversitat en aquest parc natural es presenten com:</span>'+
			'<span class="list-group-item">'+
			    '<p class="list-group-item-heading">Per jerarquia taxonòmica (interactiu)</p>'+
			    '<p class="list-group-item-text">Totes les observacions i els tàxons ordenats per jerarquia taxònomica.</p>'+
			'</span>'+
	
			'<span class="list-group-item">'+
			    '<p class="list-group-item-heading">Descripció de les observacions</p>'+
			    '<p class="list-group-item-text">Es mostra el perfil altitudinal de distribució de les observacions (en el cas que tinguin documentada l\'altitud), '+
												'el tipus d\'observació (observació al camp, registre fòssil, plec d\'herbari, etc.), la distribució de les observacions al llarg de l\'any i, '+
												'finalment, la seva distribució temporal.</p>'+
			'</span>'+
	
			'<span class="list-group-item">'+
			    '<p class="list-group-item-heading">Qualitat de les dades</p>'+
			    '<p class="list-group-item-text">Per una correcta interpretació de les dades, cal tenir una indicació de la seva qualitat. '+
												'En aquest apartat es mostra el tant per cent de les observacions que tenen documentada la data d\'observació, de si s\'ha '+
												'indicat la localitat (topònim), i si s\'ha indicat la incertesa (error) i la precissió de les coordenades.</p>'+
			'</span>'+
	
			'<span class="list-group-item">'+
			    '<p class="list-group-item-heading">Per grans grups (interactiu)</p>'+
			    '<p class="list-group-item-text">Es presenten les observacions i els tàxons ordenats per grans grups, sempre que s\'hagi '+
												 'documentat a les fonts d\'informació originals.</p>'+
			'</span>'+
	
			'<span class="list-group-item">'+
			    '<p class="list-group-item-heading">Fonts de dades</p>'+
			    '<p class="list-group-item-text">Es mostra la distribució de les observacions segons la font d\'informació original.</p>'+
			'</span>'+
	
			'<span class="list-group-item">'+
			    '<p class="list-group-item-heading">Mapa d\'observacions</p>'+
			    '<p class="list-group-item-text">Distribució espacial de les observacions. Es pot consultar una localitat concreta i buscar per un determinat.'+
			    								'Per una localitat concreta, es poden descarregar (CSV) la llista de d\'observacions i tàxons presents.</p>'+
			'</span>'+
	
			'<span class="list-group-item">'+
			    '<p class="list-group-item-heading">Mapa de densitats d\'observacions</p>'+
			    '<p class="list-group-item-text">Densitats d\'observacions en una quadrícula arbritària.</p>'+
			'</span>'+
		'</ul>'
	);

	//this.set_translates('value','ca','XXX');

}; //Fi de load_translates






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
function create_page()
{
	$('#body').append(
		"<div class='container-fluid'>"+
			"<div id='park_name'></div>"+
			"<div id='intro'></div>"+
			"<div id='disclaimer'></div>"+

			"<div id='taxonomy' class='panel panel-default'>"+
				"<div id='taxonomy-header' class='panel-heading'></div>"+
				"<div id='taxonomy-body' class='panel-body'>"+
					"<div class='row'>"+
						"<div id='taxonomy-body-obs' class='col-md-6'></div>"+
						"<div id='taxonomy-body-taxons' class='col-md-6'></div>"+
					"</div>"+
					"<div class='row' id='taxonomy_body_reset'></div>"+
				"</div>"+
			"</div>"+	

			"<div id='observacions' class='panel panel-default'>"+
				"<div id='observacions-header' class='panel-heading'></div>"+

				"<div id='observacions-body' class='panel-body'>"+
					"<div class='row' id='observacions-body-elevation'></div>"+
					"<div class='row'>"+
						"<div id='observacions-body-recordtype' class='col-md-6'></div>"+
						"<div id='observacions-body-month' class='col-md-6'></div>"+	
					"</div>"+
					"<div class='row' id='observacions_ocurrence_date'></div>"+
				"</div>"+
			"</div>"+

			"<div id='qualitatdades' class='panel panel-default'>"+
				"<div id='qualitatdades-header' class='panel-heading'></div>"+
				"<div id='qualitatdades-body' class='panel-body'>"+
					"<div class='row'>"+
						"<div id='qualitatdades-body-missingCollectionDate' class='col-md-6'></div>"+
						"<div id='qualitatdades-body-locationNotSupplied' class='col-md-6'></div>"+
					"</div>"+
					"<div class='row'>"+
						"<div id='qualitatdades-body-uncertaintyNotSpecified' class='col-md-6'></div>"+
						"<div id='qualitatdades-body-missingCoordinatePrecision' class='col-md-6'></div>"+
					"</div>"+
				"</div>"+
			"</div>"+
			
			"<div id='taxons' class='panel panel-default'>"+
				"<div id='taxons-header' class='panel-heading'></div>"+
				"<div id='taxons-body' class='panel-body'>"+
					"<div class='row'>"+
						"<div id='taxons-body-obs' class='col-md-6'></div>"+
						"<div id='taxons-body-taxons' class='col-md-6'></div>"+
					"</div>"+
					"<div class='row' id='taxons_body_reset'></div>"+
				"</div>"+
			"</div>"+
			
			"<div id='fontsdades' class='panel panel-default'>"+
				"<div id='fontsdades-header' class='panel-heading'></div>"+	
				"<div id='fontsdades-body' class='panel-body'></div>"+
			"</div>"+
			
			"<div id='mapa_observacions' class='panel panel-default'>"+
				"<div id='mapa-observacions-header' class='panel-heading'></div>"+
				"<div id='mapa-observacions-body' class='panel-body'>"+
					"<div id='mapobs' class='map'></div>"+
				"</div>"+
			"</div>"+
			
			"<div id='mapa_densitat_observacions' class='panel panel-default'>"+
				"<div id='mapa-densitat-header' class='panel-heading'></div>"+
				"<div id='mapa-densitat-body' class='panel-body'>"+
					"<div id='mapdens' class='map'>"+
						"<div id='mapa-densitat-legend' class='heatmap_legend'></div>"+
					"</div>"+
				"</div>"+
			"</div>"+


			"<div id='downloads'></div>"+

			"<div id='footer' class='panel panel-default panel-body'>"+
				"<div id='footer_header' class='row' style='padding:10px'></div>"+
				"<div class='row'>"+
					"<div class='col-md-3'><a href='http://datos.gbif.es' title='GBIF.es' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/logo-gbif300pp-verde.jpg' alt='GBIF.es' style='margin-top:5px;width:auto;height:50px'></a></div>"+
					"<div class='col-md-3'><a href='http://www.ala.org.au' title='Atlas of Living Australia' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/ala-white.png' alt='Atlas of Living Australia' style='margin-top:5px;width:auto;height:50px'></a></div>"+
					"<div class='col-md-3'><a href='http://www.mineco.gob.es/' title='Ministerio de Economia y Competitividad' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/logo-mineco.jpg' alt='Ministerio de Economia y Competitividad' style='margin-top:5px;width:auto;height:50px'></a></div>"+
					"<div class='col-md-3'><a href='http://www.csic.es/' title='Consejo Superior de Investigaciones Científicas' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/logoCsic.png' alt='Consejo Superior de Investigaciones Científicas' style='margin-top:5px;width:auto;height:50px'></a></div>"+
				"</div>"+
			"</div>"+

		"</div>"
);
}
// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
var colorbrewer = {YlGn: {
3: ["#f7fcb9","#addd8e","#31a354"],
4: ["#ffffcc","#c2e699","#78c679","#238443"],
5: ["#ffffcc","#c2e699","#78c679","#31a354","#006837"],
6: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],
7: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
8: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
9: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]
},YlGnBu: {
3: ["#edf8b1","#7fcdbb","#2c7fb8"],
4: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
5: ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
6: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
7: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
8: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
9: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
},GnBu: {
3: ["#e0f3db","#a8ddb5","#43a2ca"],
4: ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],
5: ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],
6: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],
7: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
8: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
9: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]
},BuGn: {
3: ["#e5f5f9","#99d8c9","#2ca25f"],
4: ["#edf8fb","#b2e2e2","#66c2a4","#238b45"],
5: ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],
6: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
7: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
8: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
9: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]
},PuBuGn: {
3: ["#ece2f0","#a6bddb","#1c9099"],
4: ["#f6eff7","#bdc9e1","#67a9cf","#02818a"],
5: ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],
6: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],
7: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
8: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
9: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]
},PuBu: {
3: ["#ece7f2","#a6bddb","#2b8cbe"],
4: ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],
5: ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],
6: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],
7: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
8: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
9: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]
},BuPu: {
3: ["#e0ecf4","#9ebcda","#8856a7"],
4: ["#edf8fb","#b3cde3","#8c96c6","#88419d"],
5: ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],
6: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],
7: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
8: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
9: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]
},RdPu: {
3: ["#fde0dd","#fa9fb5","#c51b8a"],
4: ["#feebe2","#fbb4b9","#f768a1","#ae017e"],
5: ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],
6: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],
7: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
8: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
9: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]
},PuRd: {
3: ["#e7e1ef","#c994c7","#dd1c77"],
4: ["#f1eef6","#d7b5d8","#df65b0","#ce1256"],
5: ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],
6: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],
7: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
8: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
9: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]
},OrRd: {
3: ["#fee8c8","#fdbb84","#e34a33"],
4: ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],
5: ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],
6: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],
7: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
8: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
9: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]
},YlOrRd: {
3: ["#ffeda0","#feb24c","#f03b20"],
4: ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],
5: ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],
6: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],
7: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
8: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
9: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
},YlOrBr: {
3: ["#fff7bc","#fec44f","#d95f0e"],
4: ["#ffffd4","#fed98e","#fe9929","#cc4c02"],
5: ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],
6: ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],
7: ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
8: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
9: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]
},Purples: {
3: ["#efedf5","#bcbddc","#756bb1"],
4: ["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],
5: ["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],
6: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],
7: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
8: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
9: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]
},Blues: {
3: ["#deebf7","#9ecae1","#3182bd"],
4: ["#eff3ff","#bdd7e7","#6baed6","#2171b5"],
5: ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],
6: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],
7: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
8: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
9: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]
},Greens: {
3: ["#e5f5e0","#a1d99b","#31a354"],
4: ["#edf8e9","#bae4b3","#74c476","#238b45"],
5: ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],
6: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],
7: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
8: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
9: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]
},Oranges: {
3: ["#fee6ce","#fdae6b","#e6550d"],
4: ["#feedde","#fdbe85","#fd8d3c","#d94701"],
5: ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],
6: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],
7: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
8: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
9: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]
},Reds: {
3: ["#fee0d2","#fc9272","#de2d26"],
4: ["#fee5d9","#fcae91","#fb6a4a","#cb181d"],
5: ["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],
6: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],
7: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
8: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
9: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]
},Greys: {
3: ["#f0f0f0","#bdbdbd","#636363"],
4: ["#f7f7f7","#cccccc","#969696","#525252"],
5: ["#f7f7f7","#cccccc","#969696","#636363","#252525"],
6: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],
7: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
8: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
9: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]
},PuOr: {
3: ["#f1a340","#f7f7f7","#998ec3"],
4: ["#e66101","#fdb863","#b2abd2","#5e3c99"],
5: ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],
6: ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],
7: ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],
8: ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],
9: ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],
10: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
11: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]
},BrBG: {
3: ["#d8b365","#f5f5f5","#5ab4ac"],
4: ["#a6611a","#dfc27d","#80cdc1","#018571"],
5: ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],
6: ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],
7: ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],
8: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],
9: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],
10: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
11: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]
},PRGn: {
3: ["#af8dc3","#f7f7f7","#7fbf7b"],
4: ["#7b3294","#c2a5cf","#a6dba0","#008837"],
5: ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],
6: ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],
7: ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],
8: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
9: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
10: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
11: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]
},PiYG: {
3: ["#e9a3c9","#f7f7f7","#a1d76a"],
4: ["#d01c8b","#f1b6da","#b8e186","#4dac26"],
5: ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],
6: ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],
7: ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],
8: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
9: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
10: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
11: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]
},RdBu: {
3: ["#ef8a62","#f7f7f7","#67a9cf"],
4: ["#ca0020","#f4a582","#92c5de","#0571b0"],
5: ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],
6: ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],
7: ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
},RdGy: {
3: ["#ef8a62","#ffffff","#999999"],
4: ["#ca0020","#f4a582","#bababa","#404040"],
5: ["#ca0020","#f4a582","#ffffff","#bababa","#404040"],
6: ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],
7: ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]
},RdYlBu: {
3: ["#fc8d59","#ffffbf","#91bfdb"],
4: ["#d7191c","#fdae61","#abd9e9","#2c7bb6"],
5: ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],
6: ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],
7: ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],
8: ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],
9: ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
},Spectral: {
3: ["#fc8d59","#ffffbf","#99d594"],
4: ["#d7191c","#fdae61","#abdda4","#2b83ba"],
5: ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],
6: ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],
7: ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],
8: ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],
9: ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
10: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
11: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]
},RdYlGn: {
3: ["#fc8d59","#ffffbf","#91cf60"],
4: ["#d7191c","#fdae61","#a6d96a","#1a9641"],
5: ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],
6: ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],
7: ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],
8: ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
9: ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
},Accent: {
3: ["#7fc97f","#beaed4","#fdc086"],
4: ["#7fc97f","#beaed4","#fdc086","#ffff99"],
5: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],
6: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],
7: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],
8: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]
},Dark2: {
3: ["#1b9e77","#d95f02","#7570b3"],
4: ["#1b9e77","#d95f02","#7570b3","#e7298a"],
5: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],
6: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],
7: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],
8: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]
},Paired: {
3: ["#a6cee3","#1f78b4","#b2df8a"],
4: ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
5: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
6: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
7: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
8: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
9: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
10: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],
11: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],
12: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]
},Pastel1: {
3: ["#fbb4ae","#b3cde3","#ccebc5"],
4: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],
5: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],
6: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],
7: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],
8: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],
9: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]
},Pastel2: {
3: ["#b3e2cd","#fdcdac","#cbd5e8"],
4: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],
5: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],
6: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],
7: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],
8: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]
},Set1: {
3: ["#e41a1c","#377eb8","#4daf4a"],
4: ["#e41a1c","#377eb8","#4daf4a","#984ea3"],
5: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],
6: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],
7: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],
8: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],
9: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]
},Set2: {
3: ["#66c2a5","#fc8d62","#8da0cb"],
4: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],
5: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],
6: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],
7: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],
8: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]
},Set3: {
3: ["#8dd3c7","#ffffb3","#bebada"],
4: ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
5: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
6: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
7: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
8: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
9: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],
10: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],
11: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],
12: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
}};function query_server(url_query) 
{
	var deferred = $.Deferred();
	
	$.ajaxSetup({type: 'GET',
				 dataType: 'jsonp'});
    
    var qs = $.ajax({url: url_query,});

    $.when(qs).done(function(data){deferred.resolve(data)});
    return deferred.promise();
}
function LAYER(label, layer_tile)
{
	this.label = label;
	this.layer_tile = layer_tile;
};
LAYER.prototype.gettilelayer = function()
{
	return this.layer_tile;
};
//Retorna un array d'objectes de tipus ICC amb les capes WMTS
function CAPES_DIBA()
{
	this.diba_layers = [];
	
	this.diba_layers.push(new LAYER(
	'limitsxpn', 
	new ol.layer.Tile(
	{
		source: new ol.source.TileWMS(
		{
			url: 'http://sitmun.diba.cat/wms/servlet/XPE50?',
			params: 
			{
				'LAYERS': 'XPE50_111L',
				'VERSION': '1.1.1',
				'FORMAT': 'image/png',
				'TILED': true,
				'SERVICE': 'WMS',
				'TRANSPARENT': true,
				'BGCOLOR': 0x000000,
				'OUTLINE': true,
				'STYLE': 'opacity:0.8',
				'SRS': 'EPSG:3857',
			}
		})
	})
	));
}; //Fi de CAPES_DIBA()

//Mètode que retorna un objecte tile indicant el nom de la capa
CAPES_DIBA.prototype.get_tilelayer = function(nom_layer)
{
	return _.find(this.diba_layers, function(d){return d.label==nom_layer;}).gettilelayer();
};

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
					'ENV': 'colormode:grid;opacity:1;',
					//'ENV': 'color:336b08;name:circle;size:3;opacity:1;',
					'q': '*:*,qid:'+bioxpn_config.get_qid(this.a)
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
	return bioxpn_config.get_ALAserver()+'/biocache-service/density/legend?'+'q:*:*,qid:'+bioxpn_config.get_qid(acronim)+'&facet:off'
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
					'q': ',qid:'+bioxpn_config.get_qid(this.a),
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
					'q': '*:*,qid:'+bioxpn_config.get_qid(this.a),
					//'q': '*:*',
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
};//Retorna un array d'objectes de tipus ICC amb les capes WMTS
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



function mapa_observacions(acronim)
{

	//Actualitzo el títol
	$('div#mapa-observacions-header').html('<h1 class="panel-title">'+_.capitalize(bioxpn_config.translates.get_translate('occurrences'))+'</h1>');
	
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
//Creo una escala ordinal de 10 colors
var scaleColor = d3.scale.category10();


// Grafic circular per observacions per tipus de registre
function graph_pie_observacions_recordtype(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.label = bioxpn_config.translates.get_translate(d.label);	
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	
	graph_pie_template('observacions-body-recordtype', bioxpn_config.translates.get_translate('tipusderegistre'), dades);
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

function graph_pie_observacions_month(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		d.label = bioxpn_config.translates.get_translate('permesos_'+d.label);
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	
	graph_pie_template('observacions-body-month', bioxpn_config.translates.get_translate('permesos'), dades);



}; //Fi de graph_pie_observacions_month

function graph_pie_taxons_occurrences(dades)
{
	var total=0;
	_.each(dades, function(d,i)
	{
		total+=d.value;
		d.color = ColorLuminance(scaleColor(i), 0.2);
	});
	return graph_pie_template('taxons-body-obs', bioxpn_config.translates.get_translate('occurrences')+': '+total, dades);
};

function graph_pie_taxons_taxons(dades)
{
	var total=0;
	_.each(dades, function(d,i)
	{
		total += d.value;
		d.color = ColorLuminance(scaleColor(i), 0.2);
	});
	return graph_pie_template('taxons-body-taxons', bioxpn_config.translates.get_translate('numerotaxons')+': '+total, dades);
};

function graph_pie_taxonomy(acronim,dades,gtaxonomy_numtaxon)
{
	
	var taxa = _.sortBy(dades.taxa, 'count').reverse();

	var total=0;
	_.each(taxa, function(d,i)
	{
		total += d.count;
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
	});

	var params = pie_defaults();
	params.header.title.text = bioxpn_config.translates.get_translate('occurrences')+': '+total;
	params.data.content = taxa;
	params.size.canvasWidth = 400;
	var gtaxonomy_obs = graph_pie_params('taxonomy-body-obs', params);
	
	//Add onclick function --> query_server al següent nivell de la jerarquia
	gtaxonomy_obs.options.callbacks.onClickSegment = (function(a){d3pie_taxonomy_onclick(acronim,gtaxonomy_obs,a,dades,gtaxonomy_numtaxon);});
	gtaxonomy_obs.options.callbacks.onMouseoverSegment = function(d){d3.select('body').style("cursor", "pointer");};
	gtaxonomy_obs.options.callbacks.onMouseoutSegment = function(d){d3.select('body').style("cursor", "default");};
};

function graph_pie_taxonomy_numtaxa(dades)
{
	var numtaxa = _.sortBy(dades, 'value').reverse();

	var total=0;
	_.each(numtaxa, function(d,i)
	{
		total += d.value;
		d.color = ColorLuminance(scaleColor(i), 0.2);
	});

	var params = pie_defaults();
	params.header.title.text = bioxpn_config.translates.get_translate('numerotaxons')+': '+total;
	params.data.content = numtaxa;
	params.size.canvasWidth = 400;
	var g = graph_pie_params('taxonomy-body-taxons', params);
	//g.options.callbacks.onClickSegment = function(a){};
	g.options.callbacks.onMouseoverSegment = function(d){d3.select('body').style("cursor", "not-allowed");};
	g.options.callbacks.onMouseoutSegment = function(d){d3.select('body').style("cursor", "default");};
	return g;
	
};//Fi de graph_pie_taxonomy_numtaxa

function d3pie_taxonomy_onclick(acronim,g,a,dades,gtaxonomy_numtaxon)
{
	//Segment NO agrupat
	if(!a.data.isGrouped)
	{
		//Si dades.rank <> species
		if(dades.rank != 'species')
		{
			query_server(bioxpn_config.get_URL_breakdown_observacions(acronim,dades.rank,a.data.label)).then
			(
				function(df)
				{
					//En alguna ocasió, el biocache-service pot contestar, però l'Array taxa és buit!
					if(df.taxa.length)
					{
						//Deso el rank
						dades.rank = df.rank;
						dades.taxa = [];
						
						var taxa = _.sortBy(df.taxa, 'count').reverse();
					
						var total=0;
						_.each(taxa, function(d,i)
						{
							total += d.count;
							d.value = d.count;
							d.color = ColorLuminance(scaleColor(i), 0.2);
						});
						
						g.options.header.subtitle.text = bioxpn_config.translates.get_translate(df.rank)+': '+total;
						g.updateProp('data.content', taxa);
						
						/********************************************************************************************/
						//Consulto i dibuixo el gràfic de taxonomy_numtaxa_by_rank
						$.when(query_numtaxa_by_ranks(acronim, dades.rank, taxa)).done(function (r) 
				 		{
							var numtaxa = _.sortBy(r, 'value').reverse();
							
							var total=0;
							_.each(numtaxa, function(d,i)
							{
								total += d.value;
								d.color = ColorLuminance(scaleColor(i), 0.2);
							});
							
							gtaxonomy_numtaxon.options.header.subtitle.text = bioxpn_config.translates.get_translate(df.rank)+': '+total;
							gtaxonomy_numtaxon.updateProp('data.content', numtaxa);
				 		});
						/********************************************************************************************/						
					}
					else //--> l'Array és buit, no faig res.
					{
						g.options.callbacks.onMouseoverSegment = function(d){d3.select('body').style("cursor", "not-allowed");};
					}
				}
			);
		}//Si ja estem al rank species no faig res més
		else
		{
			g.options.callbacks.onMouseoverSegment = function(d){d3.select('body').style("cursor", "not-allowed");};
		}
	}
	else //Segment agrupat
	{
		//No modifico el rank
		var taxa = _.sortBy(a.data.groupedData, 'count').reverse();
	
		var total=0;
		_.each(taxa, function(d,i)
		{
			total += d.count;
		});
		
		g.options.header.subtitle.text = bioxpn_config.translates.get_translate(dades.rank)+': '+total;
		g.updateProp('data.content', taxa);		
		
		//Gràfic de taxonomy_numtaxa_by_rank
		/********************************************************************************************/
		//Consulto i dibuixo el gràfic de taxonomy_numtaxa_by_rank
		$.when(query_numtaxa_by_ranks(acronim, dades.rank, taxa)).done(function (r) 
 		{
			var numtaxa = _.sortBy(r, 'value').reverse();
			
			var total=0;
			_.each(numtaxa, function(d,i)
			{
				total += d.value;
				d.color = ColorLuminance(scaleColor(i), 0.2);
			});
			
			gtaxonomy_numtaxon.options.header.subtitle.text = bioxpn_config.translates.get_translate(dades.rank)+': '+total;
			gtaxonomy_numtaxon.updateProp('data.content', numtaxa);
 		});
		/********************************************************************************************/		
	}
	//Mostro un botó de reset
	if (!(document.getElementById('button_taxonomy_reset')))
	{
		$newbuttonreset = $('<button/>')
						.addClass('btn btn-default')
						.attr('id', 'button_taxonomy_reset')
						.attr('type', 'button')
						.attr('style', 'margin-left: 10px')
						.on('click', function()
									 {
									 	//Eliminar el botó
									 	$('#taxonomy_body_reset').empty();
									 	//Eliminar els gràfics
									 	g.destroy();
									 	gtaxonomy_numtaxon.destroy();
									 	//Tornar a generar els gràfics
									 	taxonomy(acronim)
									 })
						.html('<span>'+bioxpn_config.translates.get_translate('reset')+'</span>');
		$('#taxonomy_body_reset').append($newbuttonreset);
	}
};//Fi de d3pie_taxonomy_onclick


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

	

	gobs.options.callbacks.onMouseoverSegment = function(d){(d.data.isGrouped?d.data.groupedData.length:d.data.children.length)?d3.select('body').style("cursor", "pointer"):d3.select('body').style("cursor", "not-allowed");};
	gobs.options.callbacks.onMouseoutSegment = function(d){d3.select('body').style("cursor", "default");};
	gtax.options.callbacks.onMouseoverSegment = function(d){(d.data.isGrouped?d.data.groupedData.length:d.data.children.length)?d3.select('body').style("cursor", "pointer"):d3.select('body').style("cursor", "not-allowed");};
	gtax.options.callbacks.onMouseoutSegment = function(d){d3.select('body').style("cursor", "default");};


};

function d3pie_onclick(a, gobj1, obj1, gobj2, obj2)
{
	//Si no està agrupat
	if(!a.data.isGrouped)
	{
		//Si tenim childrens en aquest nivell
		if(a.data.children.length)
		{
			var t1=0;
			var t2=0;

			var o1_ = [];
			var o2_ = [];
			
			//Busco a obj1 el node igual al node que s'ha fet click.
			//Flatten
			_.each(obj1.first(function(node){return node.model.group_name == a.data.group_name;}).children, function(o){
				
				t1 += o.model.value;
				//Només els value > 0
				(o.model.value)?o1_.push(o.model):null;
			});
			
			_.each(obj2.first(function(node){return node.model.group_name == a.data.group_name;}).children, function(o){
				t2 += o.model.value;

				//Només els value > 0
				(o.model.value)?o2_.push(o.model):null;
			});


			gobj1.options.header.subtitle.text = a.data.group_text+': '+t1;
			gobj2.options.header.subtitle.text = a.data.group_text+': '+t2;
			
			gobj1.updateProp('data.content', o1_);
			gobj2.updateProp('data.content', o2_);
			
		}
		//else: No faig res, no hi ha més grups per representar.
	}
	//Segment agrupat
	else
	{
		var t1 = 0;
		var t2 = 0;
		
		var x_ = [];
		var y_ = [];
				
		//Busco al TreeModel els nodes agrupats
		_.each(a.data.groupedData, function(x){
			x_.push(obj1.first(function(y){return y.model.group_name == x.group_name}).model);
			y_.push(obj2.first(function(y){return y.model.group_name == x.group_name}).model);
		});
		
		//Sumo totals
		_.each(x_, function(a){t1+=a.value});
		_.each(y_, function(a){t2+=a.value});

		gobj1.options.header.subtitle.text = a.data.label+': '+t1;
		gobj2.options.header.subtitle.text = a.data.label+': '+t2;
		
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
						.html('<span>'+bioxpn_config.translates.get_translate('reset')+'</span>');
		$('#taxons_body_reset').append($newbuttonreset);
	}
};

// Gràfic de barres horitzontals per a les fonts de dades
function graph_bar_fontdades(dades)
{
	//Màximes fonts de dades que es posaran al gràfic
	var max_categories = 10;
		
	var abs_width = 750;
	var abs_height = 400;

	//Creo una escala ordinal de 20 colors
	var scaleColor = d3.scale.category20();
	
	//Agafo les primeres "max_categories" categories. Les dades venen ordenades per count, desc.
	var d_ = _.partition(dades, function(d){return _.findIndex(dades, function(x){return x.label == d.label;})<max_categories});

	var da = d_[0]; // Les primeres max_categories-1 categories
	var db = d_[1]; // La resta de categories
	
	//Afegeixo a l'array anterior la suma de la resta de categories, amb el label 'Altres'.
	if(!_.isUndefined(db)){
		da.push({'label': bioxpn_config.translates.get_translate('altres'), 'count':_.reduce(db, function(memo, d){ return memo + d.count; }, 0)});
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
			  .domain(_.map(da, function(n){return n.label;}));

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
	    .attr("class", "img-responsive")
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
		.call(wrap, 450)
		.style("font-size", "10px")
		.style("font-family", "sans-serif")
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
		.text(function(d) {return d.label+'\n'+bioxpn_config.translates.get_translate('occurrences')+': '+d.count;})
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
		.style('alignment-baseline', 'middle') 
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
		.text(bioxpn_config.translates.get_translate('occurrences'));
		

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
	var defaults = pie_defaults();
	defaults.header.title.text = titol;
	defaults.data.content = dades;

	var pie = new d3pie(div, defaults);
	$('div#'+div+' svg').attr('class', 'img-responsive');
	return pie;
};

function graph_pie_params(div, params)
{
	var pie = new d3pie(div, params);
	$('div#'+div+' svg').attr('class', 'img-responsive');
	return pie;
};

function pie_defaults()
{
return	{
		"header": {
			"title": {
				"text": '',
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
			"canvasWidth": 400,
			"canvasHeight": 300,
			"pieInnerRadius": "50%",
			"pieOuterRadius": "75%"
		},
		"data": {
			"sortOrder": "value-desc",
			"smallSegmentGrouping": {
				"enabled": true,
				"label": bioxpn_config.translates.get_translate('altres'),
			},
			"content": ''
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
	};
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


	var abs_width = 800;
	var abs_height = 250;
	
    //Margins
	var margin = {top: 50, right: 50, bottom: 50, left: 50},
	width = abs_width - margin.left - margin.right,
	height = abs_height - margin.top - margin.bottom;

	//Calculo els min i max dels anys
	var year_max = _.maxBy(dades, function(d){return parseInt(d.label);});
	var year_min = _.minBy(dades, function(d){return parseInt(d.label);});

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
	    .attr("class", "img-responsive")
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
		.text(bioxpn_config.translates.get_translate('occurrences'));


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
		.text(bioxpn_config.translates.get_translate('acumulat'));
		;	

	svg.selectAll(".bar")
		.data(dades)
		.enter().append("rect")
		  .attr("class", "bar")
		  .attr("x", function(d) {return scaleX(d.label); })
		  .attr("width", scaleX.rangeBand())
		  .attr("y", function(d) { return scaleY(d.count); })
		  .attr("height", function(d) { return height - scaleY(d.count); })
		.style('fill', '#525252')
		.style('fill-opacity', '1')
		;
	
	svg.append("path")
      .datum(dades)
      .attr("class", "line")
      .attr("d", line)
	  .attr("stroke", "red")
      .attr("stroke-width", 1)
      .attr("fill", "none");
      ;
      
	//Afegeixo el títol del gràfic
	svg.append('g')
		.attr('id','titol_g')
        .append('text')
        .attr("text-anchor", "start")  
		.attr("transform", "translate("+ ((scaleX(scaleX.domain()[0]))-margin.left/2) +","+((scaleY(scaleY.domain()[1]))-20)+")")
        .style("font-size", "12px")
        .style("font-family", "open sans")
        .text(bioxpn_config.translates.get_translate('perdates'));

};


function graph_bar_observacions_elevation(dades)
{
	//Amplada, en metres, del rang d'altituds
	var delta = 100;
	
	//Calculo l'altitud màxima
	var max = _.floor((parseFloat((_.maxBy(dades, function(o){return parseFloat(o.label);})).label)+delta)/delta)*delta;
	
	//Creo una escala de tipus Quantile
	var scale_rangs = d3.scale.quantile()
								.domain([0,max])
								.range(_.range(0, max, delta));
	
	//Per a cada valor, calculo a quin rang correspon
	_.each(dades, function(x){x.rank = scale_rangs(parseFloat(x.label));});
	
	//Faig el groupBy (sumatori) per rank, utilitzo d3.nest()
	var data = d3.nest()
				.key(function(d){return d.rank;})
				.rollup(function(d){return d3.sum(d, function(g){return g.count;});})
				.entries(dades);
				
	_.each(data, function(x){x.label=parseFloat(x.key);x.value=x.values});

	/*****************************/
	//Rampa de colors
	/*****************************/
	var colorRamp = d3.scale.quantize()
							.domain([0,data.length])
							.range(colorbrewer.OrRd[9]);

	/*****************************/
	//Començo a dibuixar el gràfic
	/*****************************/
	var abs_width = 500;
	var abs_height = 400;

    //Margins
	var margin = {top: 20, right: 20, bottom: 50, left: 70},
	width = abs_width - margin.left - margin.right,
	height = abs_height - margin.top - margin.bottom;

	//Escala X
	var scaleX = d3.scale.linear()
	          .range([0, width])
	          .domain(d3.extent(data, function(d) {return d.value;}));

	//Escala Y
	var scaleY = d3.scale.ordinal()
	          .rangeBands([0,height],0.1)
			  .domain(_.map(_.orderBy(data,'label','desc'), function(n){return n.label;}));

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
				//.tickPadding(500)
	            .innerTickSize(0)
	            .outerTickSize(0);


	//Objecte grafic
	var svg = d3.select("div#observacions-body-elevation").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .attr("class", "img-responsive")
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
		.style("text-anchor", "end")
		//Poso la label a la base de la barra.
		.attr("transform", "translate(0,"+(bar_height/2)+")")
		;	

	//Afegir barres
	svg.append('g')
		.attr('id','bars')
		.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('height',bar_height)
		.attr({'x':0,'y':function(d){return scaleY(d.label);}})
		.style('fill', function(d,i){return colorRamp(i);})
		.style('fill-opacity', '1')
		.style('stroke', function(d,i){return d3.rgb(colorRamp(i)).darker()})
		.style('stroke-opacity', '1')
		.style('stroke-width', '0.3')
		.attr('width',function(d){return scaleX(d.value)<2?2:scaleX(d.value);}) //Com a mínim farà 2px d'amplada
		.append("svg:title")
		.text(function(d) {return bioxpn_config.translates.get_translate('occurrences')+': '+d.value;})
		;		

	//Afegeixo text amb el % a les barres
	//Format amb el % i un  decimal
	var percent = d3.format('.1%');
	var minim_weight_bar = 30;
	var padding_label = 3;
	var total_count = _.reduce(data, function(memo, d){ return memo + d.value; }, 0);
	svg.append('g')
		.attr('id','text_bars')
		.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		//Posició del text
		.attr({'x':function(d){return scaleX(d.value)+(scaleX(d.value)<minim_weight_bar?padding_label:padding_label*-1);}, 'y':function(d){return scaleY(d.label)+(bar_height/2);}})
		//A dins o a fora de la barra
		.style('text-anchor', function(d){return scaleX(d.value)<minim_weight_bar?'start':'end';}) 
		.style('alignment-baseline', 'middle')
		.style("font-size", "10px")
		.style("font-family", "sans-serif")
		// Make it a little transparent to tone down the black
		.style("opacity", 0.8)
		// Format the number, calculo el tant per cent sumant tots els valors presents a da
		.text(function(d){return (d.value/total_count)< 0.005 ?'':percent(d.value/total_count);})
		;
		
	//Afegeixo el títol de l'eix X
	svg.append('g')
		.attr('id','titol_x')
		.append("text")
		.attr("text-anchor", "end")  // this makes it easy to centre the text as the transform is applied to the anchor
		.attr("transform", "translate("+ (scaleX(scaleX.domain()[1])) +","+(height-(20/3))+")")  // centre below axis
		.text(bioxpn_config.translates.get_translate('occurrences'));

	//Afegeixo el títol de l'eix Y
	svg.append('g')
		.attr('id','titol_y')
		.append("text")
		.attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
		.attr("transform", "translate("+(scaleX(scaleX.domain()[0])-30) +","+(height/2)+") rotate(-90)")  
		.text(bioxpn_config.translates.get_translate('metres'));



	//Afegeixo el títol del gràfic
	svg.append('g')
		.attr('id','titol_g')
        .append('text')
        .attr("text-anchor", "start")  
		.attr("transform", "translate("+ ((scaleX(scaleX.domain()[0]))-margin.left/2) +","+((scaleY(scaleY.domain()[0]))-10)+")")
        .style("font-size", "12px")
        .style("font-family", "open sans")
        .text(bioxpn_config.translates.get_translate('peraltitud'));
	/*****************************/
	

};


/* Missing */
function graph_pie_missingCollectionDate(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	var params = pie_defaults();
	params.header.title.text = bioxpn_config.translates.get_translate('datesobservacio');
	params.data.content = dades;
	params.data.smallSegmentGrouping.enabled=false;
	graph_pie_params('qualitatdades-body-missingCollectionDate', params);
};


function graph_pie_locationNotSupplied(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	var params = pie_defaults();
	params.header.title.text = bioxpn_config.translates.get_translate('localitzacio');
	params.data.content = dades;
	params.data.smallSegmentGrouping.enabled=false;
	graph_pie_params('qualitatdades-body-locationNotSupplied', params);
};

function graph_pie_missingCoordinatePrecision(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	var params = pie_defaults();
	params.header.title.text = bioxpn_config.translates.get_translate('precissio');
	params.data.content = dades;
	params.data.smallSegmentGrouping.enabled=false;
	graph_pie_params('qualitatdades-body-missingCoordinatePrecision', params);
};

function graph_pie_uncertaintyNotSpecified(dades)
{
	//Preparo les dades:
	_.each(dades, function(d,i){
		
		d.value = d.count;
		d.color = ColorLuminance(scaleColor(i), 0.2);
		});
	var params = pie_defaults();
	params.header.title.text = bioxpn_config.translates.get_translate('incertesa');
	params.data.content = dades;
	params.data.smallSegmentGrouping.enabled=false;
	graph_pie_params('qualitatdades-body-uncertaintyNotSpecified', params);

};
// TREE amb la jerarquia dels GROUPS que es poden consultar a biocache-service
// Extret de https://github.com/AtlasOfLivingAustralia/biocache-store/blob/master/src/main/scala/au/org/ala/biocache/vocab/SpeciesGroups.scala
//Utilitzo 
//	http://jnuno.com/tree-model-js/  
//	https://github.com/joaonuno/tree-model-js

/*
http://datos.gbif.es/biocache-service/explore/counts/group/<<group>> --> NO FUNCIONA
Cal fer totes les consultes amb /biocache-service/occurrences/search.json

Animals
	Mammals
	Birds
	Reptiles
	Amphibians
	Fish
	Molluscs
	Arthropods
		Crustaceans
		Insects

Plants
	Bryophytes
	Gymnosperms
	FernsAndAllies
	Angiosperms
		Monocots
		Dicots
Fungi
Chromista
Protozoa
Bacteria
Algae

*/


function load_groups(acronim)
{
	var deferred = $.Deferred();
	
	var tree = new TreeModel();
	var groups = new GROUPS();
		
	var root = tree.parse(groups);

	//Recorre tot l'arbre, fer les consultes al servidor i omplir l'objecte amb els resultats.
	
	//Construir l'array de consultes asíncrones
	var async_func = [];
	
	//Recorre l'arbre. Evito fer la consulta per Biota
	root.all(function(node){return node.getPath().length > 1;}).forEach(function(node){async_func.push(function(callback){query_group(acronim, node, callback)});});

	//Executo totes les sentències de cop
	async.parallel(async_func,function(err, results)
	{
		//Ja tenim totes les respostes. 

		//Faig el SUMATORI del primer nivell per obtenir num_occurrences i num_species de biota
		//Node BIOTA
		b = root.first(function(node){return node.model.group_name == 'Biota';});
		
		//Per tots els nodes de nivell 2 (directament per sota BIOTA)
		b.all(function(node){return node.getPath().length == 2;}).forEach(function(node){b.model.num_occurrences  += node.model.num_occurrences;b.model.num_species += node.model.num_species;});

		deferred.resolve(root);
	});	
	
    deferred.done(function(value){return value;})
    return deferred.promise();

}; //Fi de load_groups()

function query_group(acronim, node, callback)
{
		//Preguntar al servidor per un grup concret
		query_server(bioxpn_config.get_URL_group(acronim, node.model.group_name)).then(
			function(r)
			{
				if(!_.isUndefined(r))
				{
					node.model.num_occurrences = r.totalRecords;
					node.model.num_species = _.isUndefined(r.facetResults[0])?0:r.facetResults[0].fieldResult.length; 
				}
				//callback(err,results)
				callback(null,null);
			});
};



function GROUPS()
{
	//No puc fer una instància de l'objecte GROUP. Llavors TREE no funciona
	this.group_name = 'Biota';
	this.group_text = 'Biota';
	this.num_occurrences = 0;
	this.num_species = 0;
	this.value;
	this.label = this.group_text;
	this.color;
	this.children=[];
	this.percent = 100;
		
	this.children.push(new GROUP('Animals', bioxpn_config.translates.get_translate('Animals')));
	this.children.push(new GROUP('Plants', bioxpn_config.translates.get_translate('Plants')));
	this.children.push(new GROUP('Fungi', bioxpn_config.translates.get_translate('Fungi')));
	this.children.push(new GROUP('Chromista', bioxpn_config.translates.get_translate('Chromista')));
	this.children.push(new GROUP('Protozoa', bioxpn_config.translates.get_translate('Protozoa')));
	this.children.push(new GROUP('Bacteria', bioxpn_config.translates.get_translate('Bacteria')));
	this.children.push(new GROUP('Algae', bioxpn_config.translates.get_translate('Algae')));
	
	//Animals
	this.children[0].children.push(new GROUP('Mammals', bioxpn_config.translates.get_translate('Mammals')));
	this.children[0].children.push(new GROUP('Birds', bioxpn_config.translates.get_translate('Birds')));
	this.children[0].children.push(new GROUP('Reptiles', bioxpn_config.translates.get_translate('Reptiles')));
	this.children[0].children.push(new GROUP('Amphibians', bioxpn_config.translates.get_translate('Amphibians')));
	this.children[0].children.push(new GROUP('Fish', bioxpn_config.translates.get_translate('Fish')));
	this.children[0].children.push(new GROUP('Molluscs', bioxpn_config.translates.get_translate('Molluscs')));
	this.children[0].children.push(new GROUP('Arthropods', bioxpn_config.translates.get_translate('Arthropods')));
	
	//Animals / Arthropods
	this.children[0].children[6].children.push(new GROUP('Crustaceans', bioxpn_config.translates.get_translate('Crustaceans')));
	this.children[0].children[6].children.push(new GROUP('Insects', bioxpn_config.translates.get_translate('Insects')));

	//Plants
	this.children[1].children.push(new GROUP('Bryophytes', bioxpn_config.translates.get_translate('Bryophytes')));
	this.children[1].children.push(new GROUP('Gymnosperms', bioxpn_config.translates.get_translate('Gymnosperms')));
	this.children[1].children.push(new GROUP('FernsAndAllies', bioxpn_config.translates.get_translate('FernsAndAllies')));
	this.children[1].children.push(new GROUP('Angiosperms', bioxpn_config.translates.get_translate('Angiosperms')));

	//Plants / Angiosperms	
	this.children[1].children[3].children.push(new GROUP('Monocots',bioxpn_config.translates.get_translate('Monocots')));
	this.children[1].children[3].children.push(new GROUP('Dicots',bioxpn_config.translates.get_translate('Dicots')));

};


function GROUP(groupname, grouptext)
{
	this.group_name = groupname;
	this.group_text = grouptext;
	this.num_occurrences;
	this.num_species;
	this.value;
	this.label  = this.group_text;
	this.color;
	this.children = [];
	this.percent;
};

/*
GROUP.prototype.get_num_occurrences = function() 
{
    return this.num_occurrences;
};

GROUP.prototype.get_num_species = function() 
{
    return this.num_species;
};

GROUP.prototype.get_group_name = function() 
{
    return this.group_name;
};

GROUP.prototype.get_group_text = function() 
{
    return this.group_text;
};

GROUP.prototype.set_value = function(val) 
{
    this.value = val;
};

GROUP.prototype.set_label = function(lab) 
{
    this.label = lab;
};

GROUP.prototype.set_color = function(col) 
{
    this.color = col;
};

GROUP.prototype.set_group_name = function(gn) 
{
    this.group_name = gn;
};

GROUP.prototype.set_num_occurrences = function(val) 
{
    this.num_occurrences = val;
};

GROUP.prototype.set_num_species = function(val) 
{
    this.num_species = val;
};
*/// Obtenir la qualitat de les dades
function qualitat_dades(acronim)
{
	query_server(bioxpn_config.get_URL_observacions_assertions_missing(acronim)).then
	(
		function(df)
		{
			//Títol
			$('div#qualitatdades-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('qualitatdades')+'</h1>');

			//preparo les dades
			var missingCollectionDate=[];
			missingCollectionDate.push({
				'label': bioxpn_config.translates.get_translate('sensedates'), 
				'count': (_.find(df.facetResults[0].fieldResult, function(o){ return o.label == 'missingCollectionDate';})).count});

			if(df.totalRecords - missingCollectionDate[0].count){
			missingCollectionDate.push({'label': bioxpn_config.translates.get_translate('ambdates'), 'count': (df.totalRecords - missingCollectionDate[0].count)});
			}
			graph_pie_missingCollectionDate(_.sortBy(missingCollectionDate, 'count').reverse());
			
			
			var locationNotSupplied=[];
			locationNotSupplied.push({
				'label': bioxpn_config.translates.get_translate('locationNotSupplied'), 
				'count': (_.find(df.facetResults[0].fieldResult, function(o){ return o.label == 'locationNotSupplied';})).count});

			if(df.totalRecords - locationNotSupplied[0].count){
				locationNotSupplied.push({'label': bioxpn_config.translates.get_translate('locationSupplied'), 'count': (df.totalRecords - locationNotSupplied[0].count)});
			}
			graph_pie_locationNotSupplied(_.sortBy(locationNotSupplied, 'count').reverse());
			
			missingCoordinatePrecision=[];
			missingCoordinatePrecision.push({
				'label': bioxpn_config.translates.get_translate('missingCoordinatePrecision'), 
				'count': (_.find(df.facetResults[0].fieldResult, function(o){ return o.label == 'missingCoordinatePrecision';})).count});

			if(df.totalRecords - missingCoordinatePrecision[0].count){
				missingCoordinatePrecision.push({'label': bioxpn_config.translates.get_translate('Not_missingCoordinatePrecision'), 'count': (df.totalRecords - missingCoordinatePrecision[0].count)});
			}
			graph_pie_missingCoordinatePrecision(_.sortBy(missingCoordinatePrecision, 'count').reverse());
			
			
			uncertaintyNotSpecified=[];
			uncertaintyNotSpecified.push({
				'label': bioxpn_config.translates.get_translate('uncertaintyNotSpecified'), 
				'count': (_.find(df.facetResults[0].fieldResult, function(o){ return o.label == 'uncertaintyNotSpecified';})).count});

			if(df.totalRecords - uncertaintyNotSpecified[0].count){
				uncertaintyNotSpecified.push({'label': bioxpn_config.translates.get_translate('Not_uncertaintyNotSpecified'), 'count': (df.totalRecords - uncertaintyNotSpecified[0].count)});
			}
			graph_pie_uncertaintyNotSpecified(_.sortBy(uncertaintyNotSpecified, 'count').reverse());
			
			
		}
	);
};
// Obtenir i fer el gràfic de les fonts d'informació
function fonts_de_dades(acronim)
{
	query_server(bioxpn_config.get_URL_resourceslist(acronim)).then
	(
		function(df)
		{
			//Actualitzo el title
			$('div#fontsdades-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('fontsdedades')+': '+df.facetResults[0].fieldResult.length+'</h1>');

			//Ordeno les dades per count, desc
			graph_bar_fontdades(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
		}
	);
};

// Obtenir i fer els gràfics de les observacions
function observacions_resum(acronim)
{
	$('div#observacions-header').html('<h1 class="panel-title">'+_.capitalize(bioxpn_config.translates.get_translate('occurrences'))+'</h1>');

/*
	query_server(bioxpn_config.get_URL_observacions_kingdom(acronim)).then
	(
		function(df)
		{
			
			//Ordeno les dades per count, desc
			graph_pie_observacions_kingdom(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
		}
	);
	
	query_server(bioxpn_config.get_URL_observacions_lifeform(acronim)).then
	(
		function(df)
		{
			//Ordeno les dades per count, desc
			graph_pie_observacions_lifeform(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
		}
	);
*/		
	query_server(bioxpn_config.get_URL_observacions_recordtype(acronim)).then
	(
		function(df)
		{
			//Ordeno les dades per count, desc
			graph_pie_observacions_recordtype(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
		}
	);

	query_server(bioxpn_config.get_URL_observacions_month(acronim)).then
	(
		function(df)
		{
			//Ordeno les dades per count, desc
			graph_pie_observacions_month(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
		}
	);

	query_server(bioxpn_config.get_URL_observacions_elevation(acronim)).then
	(
		function(df)
		{
			graph_bar_observacions_elevation(df.facetResults[0].fieldResult);
		}
	);

	query_server(bioxpn_config.get_URL_observacions_occurrence_date(acronim)).then
	(
		function(df)
		{
			//Ordeno les dades per count, desc
			graph_bar_observacions_ocurrence_date(_.sortBy(df.facetResults[0].fieldResult, 'label'));
		}
	);	

};

//Obtenir i fer el gràfic per jeraquia taxonòmica
function taxonomy(acronim)
{
	$('div#taxonomy-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('jerarquiataxonomica')+'</h1>');
	
	query_server(bioxpn_config.get_URL_breakdown_observacions(acronim, 'kingdom')).then
	(
		function(df)
		{
			
			//Un cop tenim la llista de kingdoms, pregunto per a cada uns d'ells quants taxon_name contenen
			$.when(query_numtaxa_by_ranks(acronim, 'kingdom', df.taxa)).done(function (r) 
	 		{
	 			graph_pie_taxonomy(acronim,df,graph_pie_taxonomy_numtaxa(r));
	 		});

			//graph_pie_taxonomy(acronim,df);
		}
	);	
	
}//Fi de taxonomy

//Obtenir i fer els gràfics per grans grups taxonòmics
function taxons(acronim)
{
	 $.when(load_groups(acronim)).done(function (root) 
	 {
		//Actualitzo el title
		$('div#taxons-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('gransgrups')+'</h1>');

		//Gràfics dels taxons per grans grups i observacions

		//OBSERVACIONS
		var obs = _.cloneDeep(root);

		//Elimino els nodes sense observacions
		obs.all(function(node){return !node.model.num_occurrences;}).forEach(function(node){node.drop();});

		//Calculo el value a partir de num_occurrences
		obs.all().forEach(function(node){node.model.value = node.model.num_occurrences;});
		
		//Afegeixo el node DESCONEGUT per completar el 100% a cada nivell
		add_unknown_node(obs);
		
		//Gràfic dels tàxons per grans grups i número de tàxons
		//NÚMERO DE TAXONS
		var sp = _.cloneDeep(root);

		//Elimino els nodes sense observacions
		sp.all(function(node){return !node.model.num_species;}).forEach(function(node){node.drop();});
		
		//Calculo el value a partir de num_occurrences
		sp.all().forEach(function(node){node.model.value = node.model.num_species;});

		//Afegeixo el node DESCONEGUT per completar el 100% a cada nivell
		add_unknown_node(sp);
		graph_pie_sync_taxons(obs, sp);
	 });
};

function debug_tree(tree)
{
			//DEBUG
		tree.walk(function(node)
		{
			tab ='';
			_.each(node.getPath(), function(){tab += '\t';});
			tab += '-> ';
			
			console.log(tab+node.model.group_name+'('+node.getPath().length+') --> Observacions:  '+node.model.num_occurrences+' Espècies: '+node.model.num_species+' Value: '+node.model.value+' %:'+node.model.percent);
		});
		//DEBUG
};

function add_unknown_node(root)
{
		var tree = new TreeModel();
		root.walk({strategy: 'breadth'}, function(node)
		{
			if(node.hasChildren())
			{
				var x = 0;
				_.forEach(node.children, function(n){x += n.model.value;n.model.percent=(n.model.value/node.model.value)*100;});
				
				if(x!=node.model.value)
				{
					var n = node.addChild(tree.parse(new GROUP('desconegut', bioxpn_config.translates.get_translate('desconegut'))));
					n.model.value = node.model.value-x;
					n.model.percent = ((n.model.value/node.model.value)*100);
				}				
			}
		});
};

function query_numtaxa_by_ranks(acronim, rank, ranks_names)
{
	var deferred = $.Deferred();
	
	//Construir l'array de consultes asíncrones
	var async_func = [];
	
	_.each(ranks_names, function(x){async_func.push(function(callback){query_numtaxa_byrank(acronim, rank, x.label, callback)});});

	//Executo totes les sentències de cop
	async.parallel(async_func,function(err, results)
	{
		//Ja tenim totes les respostes. 
		deferred.resolve(results);
	});	
	
    deferred.done(function(value){return value;})
    return deferred.promise();
};

function query_numtaxa_byrank(acronim, rank, rank_name, callback)
{
	query_server(bioxpn_config.get_URL_breakdown_numtaxa(acronim, rank, rank_name)).then( 
		function(r)
		{
			var r_;
			if(!_.isUndefined(r))
			{
				r_ = {label:rank_name, value:r.facetResults[0].fieldResult.length};
			}
			else{r_ = null;}
				
			//callback(err,results)
			callback(null,r_);
		});	
};
function search_taxon_name(acronim, map, gbif)
{
	
	//Quan arribi la llista amb tàxons:
	query_server(bioxpn_config.get_URL_taxonnamelist(acronim)).then
	(
		function(df)
		{
			if(!df.totalRecords){return;};
			
			taxonnamelist = df.facetResults[0].fieldResult;
			construir_search_button();

			//Afegeixo les funcions als inputs
			$('#search_black').on('keydown', function(event)
			{
				//Si el camp de cerca està buit
				if(this.value =='')
				{
					$('#search_black').trigger('input');
					return;
				}
				
				//ENTER KEY
				if (event.which == 13)
				{
					event.preventDefault();
					
					//Comprovar si el taxon_name està a la llista
					value_taxonname = _.find(taxonnamelist, function(d){return d.label == $('#search_black').val();});
					if(!_.isUndefined(value_taxonname))
					{
						//Executar la consulta
						removeLayer_check(map, gbif.get_tilelayer('observacions'));
						removeLayer_check(map, gbif.get_tilelayer('seleccio_taxon'));

						gbif.set_layer_selection_taxon(value_taxonname.label);
						addLayer_check(map, gbif.get_tilelayer('seleccio_taxon'));
					}
					else
					{
						//No existeix el taxon_name, 
						// no cal buscar res i eliminar la capa d'observacions
						removeLayer_check(map, gbif.get_tilelayer('observacions'));	
						removeLayer_check(map, gbif.get_tilelayer('seleccio_taxon'));
					}
				}
				//TAB Key
				else if (event.which == 9)
				{
					event.preventDefault();
					$('#search_black').val($('#search_grey').val());
				}
				else
				{
					$('#search_black').trigger('input');
				}
			});

			//Cerca de taxon_name coincidents
			$('#search_black').on('input', function()
			{
				if(!this.value =='')
				{
					//Si hi ha seleccions anteriors, les elimino
					removeLayer_check(map, gbif.get_tilelayer('seleccio_taxon'));
					
					//Omplir el value de search_grey
					value_regexp = new RegExp('^'+this.value+'.*$', 'i');
					value_search = _.find(taxonnamelist, function(d){return value_regexp.test(d.label);});
					//S'ha trobat una coincidència
					if(!_.isUndefined(value_search))
					{
						//La primera lletra en majúscules
						this.value = this.value.CapitalizeFirstLetter();
						$('#search_grey').val(value_search.label);
					}
					//No s'ha trobat cap coincidència
					else
					{
						$('#search_grey').val('');
					}
				}
				else
				{
					$('#search_grey').val('');
					removeLayer_check(map, gbif.get_tilelayer('seleccio_taxon'));
					addLayer_check(map, gbif.get_tilelayer('observacions'));
				}
			});
		}
	);
}; //Fi de search_taxon_name(acronim)

String.prototype.CapitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function construir_search_button()
{	
		//Resposta al click al butó 'lupa'
		e = $.Event('keydown');
		e.which= 13; // enter
		
		//Construir el control de tipus input
		$newbutton = $('<button/>')
					.addClass('btn btn-default')
					.attr('type', 'button')
					.on('click', function(){$('#search_black').trigger(e)})
					.html('<span class="glyphicon glyphicon-search aria-hidden="true"></span>');
					
		$newspan = $('<span />')
					.addClass('input-group-btn');
				
		$($newspan).append($newbutton);

		$newInputGrey = $('<input/>')
						.attr('id', 'search_grey')
						.addClass('form-control')
						.attr('type', 'text')
						.attr('spellcheck', 'false');

		$newInputBlack = $('<input/>')
						.attr('id', 'search_black')
						.addClass('form-control')
						.attr('type', 'text')
						.attr('spellcheck', 'false')
						.attr('placeholder', 'Cerca per nom científic');

		$newInputGroup = $("<div>")
						 .addClass('input-group');


		$($newInputGroup).append($newInputBlack);
		$($newInputGroup).append($newInputGrey);
		$($newInputGroup).append($newspan);

		$newCol = $("<div>")
				 .addClass('col-lg-6')
				 .attr('style', 'padding-top:5px');

		$($newCol).append($newInputGroup);
		
		$newrow = $('<div/>')
					.addClass('row');

		$($newrow).append($newCol);
		$('#mapobs').append($newrow);
};

//Configuració
var bioxpn_config = new BIOXPN_CONFIG();
	
function main_(acr)
{
	var acronim = acr;

	create_page();
	
	$('#park_name').append('<h6>'+bioxpn_config.get_nom_oficial(acronim)+'</h6>');
	$('#intro').append(bioxpn_config.translates.get_translate('intro'));
	$('#disclaimer').append('<p>'+bioxpn_config.translates.get_translate('disclaimer')+'</p>');
	$('#footer_header').append(bioxpn_config.translates.get_translate('colaborate'));

	mapa_observacions(acronim);
	mapa_densitat_observacions(acronim);
	fonts_de_dades(acronim);
	observacions_resum(acronim);
	qualitat_dades(acronim);
	taxons(acronim);
	taxonomy(acronim);

} // Fi de main_()

