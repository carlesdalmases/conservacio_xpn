


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