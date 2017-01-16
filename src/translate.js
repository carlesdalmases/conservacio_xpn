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
	this.set_translates('occurrences_map','ca','Distribució espacial de les observacions'); 
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
	this.set_translates('taxons','ca','Tàxons');
	this.set_translates('credits','ca','Crèdits');
		
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
	this.set_translates('missingCoordinatePrecision','ca','sense precisió');
	this.set_translates('Not_missingCoordinatePrecision','ca','amb precisió');
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
	

	this.set_translates('downloads','ca','Descàrregues (<a href="https://ca.wikipedia.org/wiki/CSV">en format CSV</a>)');
	this.set_translates('colaborate','ca','Amb la col·laboració de:');
	this.set_translates('disclaimer','ca','Descarregant qualsevol contingut d\'aquesta pàgina s\'està acceptant la <a href=\'http://www.gbif.es/Recursos.php#tabs-5\'>normativa de GBIF Espanya i la del proveïdor de dades específic</a>.');
	this.set_translates('intro','ca',
		'<p>La informació referent a la biodiversitat que es presenta en aquesta pàgina es crea de forma automàtica '+
		'a partir de les fonts d\'informació indexades al servidor de <a href=\'http://www.gbif.es\'>GBIF.es</a>.</p>'+
		'<p>Cal tenir present que les dades inclouen observacions de camp, espècies fòssils, plecs d\'herbari, exemplars conservats en museus, etc. '+ 
		'També cal considerar la distribució espacial de les observacions, amb coordenades més o menys precises, i l\'escala dels límits de l\'espai natural utilitzats per a fer la consulta.</p>'+
		'<p>Periòdicament, s\'actualitzen i amplien les fonts d\'informació al servidor de <a href=\'http://www.gbif.es\'>GBIF.es</a> i, '+ 
		'automàticament, s\'actualitza aquesta pàgina. Si teniu coneixement d\'un conjunt d\'observacions en aquest Parc que podrien completar la informació, '+ 
		'ens ho podeu fer saber a <a href= \'mailto:xarxaparcs@diba.cat?subject=[BIODIBA]:\'>xarxaparcs@diba.cat</a>.</p>');
	this.set_translates('jerarquiataxonomica_subtitle','ca',
	'Totes les observacions i els tàxons ordenats per jerarquia taxonòmica. Interactiu.');

	this.set_translates('occurrences_subtitle','ca',
	'Es mostra el perfil altitudinal de distribució de les observacions (en el cas que tinguin documentada l\'altitud), '+
	'el tipus de registre (observació al camp, registre fòssil, plec d\'herbari, etc.), la distribució de les observacions al llarg de l\'any i, '+
	'finalment, la seva distribució temporal.');

	this.set_translates('qualitatdades_subtitle','ca',
	'Per a una correcta interpretació de les dades, cal tenir una indicació de la seva qualitat. '+
	'Es mostra les observacions que tenen documentada la data d\'observació, les que s\'ha '+
	'indicat la localitat (topònim), i, si és el cas, la incertesa (error) i la precisió de les coordenades.');

	this.set_translates('gransgrups_subtitle','ca',
	'Observacions i tàxons ordenats per grans grups, sempre que s\'hagin '+
	'documentat a les fonts d\'informació originals. Interactiu.');

	this.set_translates('fontsdedades_subtitle','ca',
	'Distribució de les observacions segons la font d\'informació original.');

	this.set_translates('occurrences_map_subtitle','ca',
	'Es pot consultar una localitat concreta i buscar per un determinat tàxon. '+
	'Per a una localitat concreta, es pot descarregar <a href="https://ca.wikipedia.org/wiki/CSV">en format CSV</a> la llista de d\'observacions i tàxons presents.');

	this.set_translates('occurrencesdensity_subtitle','ca',
	'Densitats d\'observacions per quadrícula (de mida variable segons el nivell de zoom).');

		
/*
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
												'indicat la localitat (topònim), i si s\'ha indicat la incertesa (error) i la precisió de les coordenades.</p>'+
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
*/

	//this.set_translates('value','ca','XXX');

}; //Fi de load_translates






