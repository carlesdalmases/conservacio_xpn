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
		
	this.children.push(new GROUP('Animals', 'Animals'));
	this.children.push(new GROUP('Plants', 'Plantes'));
	this.children.push(new GROUP('Fungi', 'Funga'));
	this.children.push(new GROUP('Chromista', 'Cromistes'));
	this.children.push(new GROUP('Protozoa', 'Protozous'));
	this.children.push(new GROUP('Bacteria', 'Bacteris'));
	this.children.push(new GROUP('Algae', 'Algues'));
	
	//Animals
	this.children[0].children.push(new GROUP('Mammals', 'Mamífers'));
	this.children[0].children.push(new GROUP('Birds', 'Ocells'));
	this.children[0].children.push(new GROUP('Reptiles', 'Rèptils'));
	this.children[0].children.push(new GROUP('Amphibians', 'Amfibis'));
	this.children[0].children.push(new GROUP('Fish', 'Peixos'));
	this.children[0].children.push(new GROUP('Molluscs', 'Mol·luscs'));
	this.children[0].children.push(new GROUP('Arthropods', 'Artòpodes'));
	
	//Animals / Arthropods
	this.children[0].children[6].children.push(new GROUP('Crustaceans', 'Crustacis'));
	this.children[0].children[6].children.push(new GROUP('Insects', 'Insectes'));

	//Plants
	this.children[1].children.push(new GROUP('Bryophytes', 'Briòfits'));
	this.children[1].children.push(new GROUP('Gymnosperms', 'Gimnospermes'));
	this.children[1].children.push(new GROUP('FernsAndAllies', 'Falgueres i molses'));
	this.children[1].children.push(new GROUP('Angiosperms', 'Angiospermes'));

	//Plants / Angiosperms	
	this.children[1].children[3].children.push(new GROUP('Monocots','Monocotiledònies'));
	this.children[1].children[3].children.push(new GROUP('Dicots','Dicotiledònies'));

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
*/