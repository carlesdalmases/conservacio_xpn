function downloads(acronim)
{
	//Actualitzo el títol
	$('div#downloads-header').html('<h1 class="panel-title">'+bioxpn_config.translates.get_translate('downloads')+'</h1>');

	$('div#downloads-body').append(
								
  								'<button id="btn_download_occurrences" type="button" class="btn btn-default">'+_.capitalize(bioxpn_config.translates.get_translate('occurrences'))+'<span class=\'glyphicon glyphicon-download\'></span></button>'+
  								'<button id="btn_download_taxons" type="button" class="btn btn-default">'+bioxpn_config.translates.get_translate('taxons')+'<span class=\'glyphicon glyphicon-download\'></span></button>'+
  								'<button id="btn_download_attribution" type="button" class="btn btn-default">'+bioxpn_config.translates.get_translate('fontsdedades')+'<span class=\'glyphicon glyphicon-download\'></span></button>'
							);

	//$('#btn_download_occurrences').on('click', function(){downloadfile(bioxpn_config.get_URL_occurrencesdownload_puntradi(coord_map,radius))});
	$('#btn_download_occurrences').on('click', function(){alert('HOLA')});

/*
		//Botó Observacions
		$newButton_obs = $('<button/>')
					.attr('type', 'button')
					.addClass('btn btn-primary btn-xs')
					.text(num_obs+' observacions ')
					.on('click', function(){downloadfile(bioxpn_config.get_URL_occurrencesdownload_puntradi(coord_map,radius))});
					
		$($newButton_obs).append('<span class=\'glyphicon glyphicon-download\'></span>');
*/

}; //Fi de downloads()