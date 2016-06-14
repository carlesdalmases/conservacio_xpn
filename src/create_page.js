function create_page()
{
	$('#body').append(
		"<div class='container-fluid'>"+
			"<div id='park_name'></div>"+
			"<div id='intro'></div>"+
			"<div id='disclaimer'></div>"+

			"<div id='taxonomy' class='panel panel-default'>"+
				"<div id='taxonomy-header' class='panel-heading'></div>"+
				"<div id='taxonomy-body' class='panel-body'>"+
					"<div class='row'>"+
						"<div id='taxonomy-body-obs' class='col-md-6'></div>"+
						"<div id='taxonomy-body-taxons' class='col-md-6'></div>"+
					"</div>"+
					"<div class='row' id='taxonomy_body_reset'></div>"+
				"</div>"+
			"</div>"+	

			"<div id='observacions' class='panel panel-default'>"+
				"<div id='observacions-header' class='panel-heading'></div>"+

				"<div id='observacions-body' class='panel-body'>"+
					"<div class='row' id='observacions-body-elevation'></div>"+
					"<div class='row'>"+
						"<div id='observacions-body-recordtype' class='col-md-6'></div>"+
						"<div id='observacions-body-month' class='col-md-6'></div>"+	
					"</div>"+
					"<div class='row' id='observacions_ocurrence_date'></div>"+
				"</div>"+
			"</div>"+

			"<div id='qualitatdades' class='panel panel-default'>"+
				"<div id='qualitatdades-header' class='panel-heading'></div>"+
				"<div id='qualitatdades-body' class='panel-body'>"+
					"<div class='row'>"+
						"<div id='qualitatdades-body-missingCollectionDate' class='col-md-6'></div>"+
						"<div id='qualitatdades-body-locationNotSupplied' class='col-md-6'></div>"+
					"</div>"+
					"<div class='row'>"+
						"<div id='qualitatdades-body-uncertaintyNotSpecified' class='col-md-6'></div>"+
						"<div id='qualitatdades-body-missingCoordinatePrecision' class='col-md-6'></div>"+
					"</div>"+
				"</div>"+
			"</div>"+
			
			"<div id='taxons' class='panel panel-default'>"+
				"<div id='taxons-header' class='panel-heading'></div>"+
				"<div id='taxons-body' class='panel-body'>"+
					"<div class='row'>"+
						"<div id='taxons-body-obs' class='col-md-6'></div>"+
						"<div id='taxons-body-taxons' class='col-md-6'></div>"+
					"</div>"+
					"<div class='row' id='taxons_body_reset'></div>"+
				"</div>"+
			"</div>"+
			
			"<div id='fontsdades' class='panel panel-default'>"+
				"<div id='fontsdades-header' class='panel-heading'></div>"+	
				"<div id='fontsdades-body' class='panel-body'></div>"+
			"</div>"+
			
			"<div id='mapa_observacions' class='panel panel-default'>"+
				"<div id='mapa-observacions-header' class='panel-heading'></div>"+
				"<div id='mapa-observacions-body' class='panel-body'>"+
					"<div id='mapobs' class='map'></div>"+
				"</div>"+
			"</div>"+
			
			"<div id='mapa_densitat_observacions' class='panel panel-default'>"+
				"<div id='mapa-densitat-header' class='panel-heading'></div>"+
				"<div id='mapa-densitat-body' class='panel-body'>"+
					"<div id='mapdens' class='map'>"+
						"<div id='mapa-densitat-legend' class='heatmap_legend'></div>"+
					"</div>"+
				"</div>"+
			"</div>"+

			"<div id='downloads' class='panel panel-default'>"+
				"<div id='downloads-header' class='panel-heading'></div>"+
				"<div id='downloads-body' class='panel-body'></div>"+
			"</div>"+

			"<div id='footer' class='panel panel-default panel-body'>"+
				"<div id='footer_header' class='row' style='padding:10px'></div>"+
				"<div class='row'>"+
					"<div class='col-md-3'><a href='http://datos.gbif.es' title='GBIF.es' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/logo-gbif300pp-verde.jpg' alt='GBIF.es' style='margin-top:5px;width:auto;height:50px'></a></div>"+
					"<div class='col-md-3'><a href='http://www.ala.org.au' title='Atlas of Living Australia' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/ala-white.png' alt='Atlas of Living Australia' style='margin-top:5px;width:auto;height:50px'></a></div>"+
					"<div class='col-md-3'><a href='http://www.mineco.gob.es/' title='Ministerio de Economia y Competitividad' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/logo-mineco.jpg' alt='Ministerio de Economia y Competitividad' style='margin-top:5px;width:auto;height:50px'></a></div>"+
					"<div class='col-md-3'><a href='http://www.csic.es/' title='Consejo Superior de Investigaciones Científicas' target='_blank' style='border-bottom:0px'><img src='http://parcs.diba.cat/documents/43788175/75144491/logoCsic.png' alt='Consejo Superior de Investigaciones Científicas' style='margin-top:5px;width:auto;height:50px'></a></div>"+
				"</div>"+
			"</div>"+

		"</div>"
);
}
