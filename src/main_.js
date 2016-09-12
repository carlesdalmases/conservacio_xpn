
//Configuració
var bioxpn_config = new BIOXPN_CONFIG();
	
function main_(acr)
{
	var acronim = acr;

	create_page();
	
	//$('#park_name').append('<h6>'+bioxpn_config.get_nom_oficial(acronim)+'</h6>');
	$('#park_name').append('<h1 class="section_cab tam_h1">'+bioxpn_config.get_nom_oficial(acronim)+'</h1><hr class="line_xarxa_parcs_full">');
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
	downloads(acronim);
} // Fi de main_()

