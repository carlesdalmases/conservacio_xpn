
//Configuració
var bioxpn_config = new BIOXPN_CONFIG();
	
function main_()
{
	var acronim = 'SLL';
	console.log(bioxpn_config.get_qid(acronim));
	console.log(bioxpn_config.get_nom_oficial(acronim));
	console.log(bioxpn_config.get_URL_taxonlist(acronim));

} // Fi de main_()

