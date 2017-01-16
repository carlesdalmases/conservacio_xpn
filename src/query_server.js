function query_server(url_query) 
{
	var deferred = $.Deferred();
	
	$.ajaxSetup({type: 'POST',
				 dataType: 'jsonp',
				 data:url_query[1],
				 url:url_query[0]});

    //var qs = $.ajax();
    var qs = $.post();

    $.when(qs).done(function(data){deferred.resolve(data)});
    return deferred.promise();
}
