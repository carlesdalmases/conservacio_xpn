
//Configuració
var bioxpn_config = new BIOXPN_CONFIG();
	
function main_()
{
	var acronim = 'SLL';

	$('#intro').append('<h1>'+bioxpn_config.get_nom_oficial(acronim)+'</h1>');

	mapa_observacions(acronim);
	mapa_densitat_observacions(acronim);
	
	fonts_de_dades(acronim);
	observacions_resum(acronim);
	qualitat_dades(acronim);

//	console.log(xpn.get_qid());
//	console.log(xpn.get_nomoficial());
//	console.log(xpn.get_acronim());

} // Fi de main_()

