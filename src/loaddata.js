// Obtenir la qualitat de les dades
function qualitat_dades(acronim)
{
	query_server(bioxpn_config.get_URL_observacions_assertions_missing(acronim)).then
	(
		function(df)
		{
			//preparo les dades
			var dades=[];
			dades.push({
				'label': 'Sense dates', 
				'count': (_.findWhere(df.facetResults[0].fieldResult, {label: 'missingCollectionDate'})).count});
			
			dades.push({'label': 'Amb dates', 'count': (df.totalRecords - dades[0].count)});
			
			graph_pie_missingCollectionDate(dades);
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
			//Ordeno les dades per count, desc
			graph_bar_fontdades(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
		}
	);
};

// Obtenir i fer els gràfics de les observacions
function observacions_resum(acronim)
{
	query_server(bioxpn_config.get_URL_observacions_kingdom(acronim)).then
	(
		function(df)
		{
			//Faig servir aquesta consulta per mostrar el número d'observacions
			$('div#observacions-header').html('<h1 class="panel-title">Observacions: '+df.totalRecords+'</h1>');
			
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
		
	query_server(bioxpn_config.get_URL_observacions_recordtype(acronim)).then
	(
		function(df)
		{
			//Ordeno les dades per count, desc
			graph_pie_observacions_recordtype(_.sortBy(df.facetResults[0].fieldResult, 'count').reverse());
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