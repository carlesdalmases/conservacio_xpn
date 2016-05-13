function query_numtaxa_by_ranks(acronim, rank, ranks_names)
{
	var deferred = $.Deferred();
	
	//Construir l'array de consultes asíncrones
	var async_func = [];
	
	_.each(ranks_names, function(x){async_func.push(function(callback){query_numtaxa_byrank(acronim, rank, x.label, callback)});});

	//Executo totes les sentències de cop
	async.parallel(async_func,function(err, results)
	{
		//Ja tenim totes les respostes. 
		deferred.resolve(results);
	});	
	
    deferred.done(function(value){return value;})
    return deferred.promise();
};

function query_numtaxa_byrank(acronim, rank, rank_name, callback)
{
	query_server(bioxpn_config.get_URL_breakdown_numtaxa(acronim, rank, rank_name)).then( 
		function(r)
		{
			var r_;
			if(!_.isUndefined(r))
			{
				r_ = {label:rank_name, value:r.facetResults[0].fieldResult.length};
			}
			else{r_ = null;}
				
			//callback(err,results)
			callback(null,r_);
		});	
};
