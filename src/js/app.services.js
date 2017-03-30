app.service('Request', function($http, $rootScope) {
    this.myFunc = function (x) {
        return x.toString(16);
    }

    this.call = function(object, type, controller) {
    	$rootScope.loader = true;

        if (type == 'POST') {
            controller += ('/post/?id=' + object);
        }

    	if (type == 'GETBYID') {
    		controller += ('/get/?id=' + object);
    		type = 'GET';
    	}

    	if (type == 'PUT') {
    		controller += ('/update/?id=' + object.Id);
    		object = object.data;
    		type = 'POST';
    	}

    	if (type == 'DELETE') {
    		controller += ('/delete/?id=' + object);
    		type = 'POST';
    	}       

		return $http({
		    method: type,
		    url: urlBase+controller,
		    data: object
		}).then(function successCallback(response) {
		    // Sucesso.
		    if (type != 'GET') {
		    	alert('Operação realizada com sucesso.');
		    }

		    $rootScope.loader = false;
		    return response;
		}, function errorCallback(response) {
		    // Erro.
		    alert('Servidor indisponível.');
            console.log(response);
		    $rootScope.loader = false;
		});
	};
});
