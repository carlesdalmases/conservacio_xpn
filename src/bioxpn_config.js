/* ****************************************************************************/
//							Objecte BIOXPN_CONFIG
/* ****************************************************************************/
function BIOXPN_CONFIG()
{

	//Array d'objectes XPN amb informació dels Parcs
	this.xpn=[];
	this.xpn.push(new XPN('1431515072051','SLL','Parc Natural de Sant Llorenç del Munt i l\'Obac'));
	this.xpn.push(new XPN('1431514969375','MSY','Parc Natural del Montseny'));
	this.xpn.push(new XPN('1431514726479','GRF','Parc del Garraf'));
	this.xpn.push(new XPN('1431514847466','MAR','Parc de la Serralada de Marina'));
	this.xpn.push(new XPN('1431514809219','SLI','Parc de la Serralada Litoral'));
	this.xpn.push(new XPN('1431514928133','MOC','Parc del Montnegre i el Corredor'));
	this.xpn.push(new XPN('1431514772466','GUI','Espai Natural de les Guilleries-Savassona'));
	this.xpn.push(new XPN('1431514892717','MTQ','Parc del Castell de Montesquiu'));
	this.xpn.push(new XPN('1431515010335','OLE','Parc d\'Olèrdola'));
	this.xpn.push(new XPN('1431514693693','FOX','Parc del Foix'));
	this.xpn.push(new XPN('1431515045480','AGR','Parc Agrari del Baix Llobregat'));
	this.xpn.push(new XPN('1431514651345','COL','Parc Natural de la Serra de Collserola'));

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
    return (_.find(this.xpn, function(d){return d.acronim == acronim;})).qid;
};

//Retorna el nom oficial d'un parc donat el seu acronim
BIOXPN_CONFIG.prototype.get_nom_oficial = function(acronim) 
{
    return (_.find(this.xpn, function(d){return d.acronim == acronim;})).nom_oficial;
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

/* ************************************************************************** */
//							Objecte XPN, constructor
/* ************************************************************************** */
function XPN(qid,acronim,nom_oficial)
{
	//Codi del filtre espacials a SOLR
	this.qid = qid;
	
	//Acronim del Parc
	this.acronim = acronim;
	
	//Nom del Parc
	this.nom_oficial = nom_oficial;
	
};// Fi de XPN()

XPN.prototype.get_qid = function(){return this.qid;};
XPN.prototype.get_acronim = function(){return this.acronim;};
XPN.prototype.get_nomoficial = function(){return this.nom_oficial;};
