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
	
	//Tipus de registre
	this.set_translates('PreservedSpecimen','ca','espècimen preservat');
	this.set_translates('HumanObservation','ca','observació humana');

	//Jerarquia taxonòmica
	this.set_translates('jerarquiataxonomica','ca','Jerarquia taxonòmica');

	//Qualitat de les dades
	this.set_translates('sensedates','ca','sense dates');
	this.set_translates('ambdates','ca','amb dates');
	this.set_translates('datesobservacio','ca','dates d\'observació');
	this.set_translates('qualitatdades','ca','Qualitat de les dades');	

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
	

	//this.set_translates('value','ca','XXX');

}; //Fi de load_translates
