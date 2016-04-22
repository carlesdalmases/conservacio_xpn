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
					//Omplir el value de search_grey
					value_regexp = new RegExp('^'+this.value+'.*$', 'i');
					value_search = _.find(taxonnamelist, function(d){return value_regexp.test(d.label);});
					if(!_.isUndefined(value_search))
					{
						//La primera lletra en majúscules
						this.value = this.value.CapitalizeFirstLetter();
						$('#search_grey').val(value_search.label);
					}
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
		//Construir el control de tipus input
		$newbutton = $('<button/>')
					.addClass('btn btn-default')
					.attr('type', 'button')
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
