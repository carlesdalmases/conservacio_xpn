// Obtenir la qualitat de les dades
function qualitat_dades(acronim)
{
	query_server(bioxpn_config.get_URL_observacions_assertions_missing(acronim)).then
	(
		function(df)
		{
			//Títol
			$('div#qualitatdades-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('qualitatdades')+'</h1>'+
											   bioxpn_config.translates.get_translate('qualitatdades_subtitle'));

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
			$('div#fontsdades-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('fontsdedades')+': '+df.facetResults[0].fieldResult.length+'</h1>'+
											bioxpn_config.translates.get_translate('fontsdedades_subtitle'));

			//Ordeno les dades per count, desc
			graph_bar_fontdades(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
		}
	);
};

// Obtenir i fer els gràfics de les observacions
function observacions_resum(acronim)
{
	$('div#observacions-header').html('<h1 class="panel-title">'+_.capitalize(bioxpn_config.translates.get_translate('occurrences'))+'</h1>'+
									   bioxpn_config.translates.get_translate('occurrences_subtitle'));

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
	$('div#taxonomy-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('jerarquiataxonomica')+'</h1>'+
								  bioxpn_config.translates.get_translate('jerarquiataxonomica_subtitle'));
	
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
		$('div#taxons-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('gransgrups')+'</h1>'+
									bioxpn_config.translates.get_translate('gransgrups_subtitle'));

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

