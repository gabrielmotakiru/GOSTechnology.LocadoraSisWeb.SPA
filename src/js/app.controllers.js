/***************************************************************/
/****************** TRABALHO SISTEMAS WEB **********************/
/***************************************************************/
/***************** Author: Gabriel Oliveira ********************/
/***************************************************************/

/***************************************************************/
/***************************************************************/
// Home
/***************************************************************/
/***************************************************************/
app.controller('HomeCtrl', function($rootScope, $scope, $location)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Locadora XPTZ";
});

/***************************************************************/
/***************************************************************/
// Veiculo
/***************************************************************/
/***************************************************************/
app.controller('ListarVeiculoCtrl', function($rootScope, $scope, $location, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Veículos";

	$scope.init = function() {
		Request.call(null, 'GET', 'Veiculos').then(function(response) {
			$scope.lista = response.data;
		});
	};

	$scope.excluir = function(id) {
		var confirmarExclusao = confirm("Deseja excluir esse item?");

		if (confirmarExclusao) {
			Request.call(id, 'DELETE', 'Veiculos').then(function(response) {
				$scope.init();
			});
		}		
	};

	$scope.init();
});
app.controller('CadastrarVeiculoCtrl', function($rootScope, $scope, $location, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Cadastrar Veículo";
	$scope.acao = "Cadastrar";
	$scope.model = {};

	Request.call($scope.model, 'GET', 'Marcas').then(function(response) {
		$scope.listaMarca = response.data;
	});

	$scope.cadastrarAlterar = function () {
		Request.call($scope.model, 'POST', 'Veiculos').then(function() {
			$location.path('/listarVeiculo');
		});
	}
});
app.controller('AlterarVeiculoCtrl', function($rootScope, $scope, $location, $routeParams, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Alterar Veículo";
	$scope.acao = "Alterar";
	$scope.model = {};

	Request.call($routeParams.id, 'GETBYID', 'Veiculos').then(function(response) {
		$scope.model = response.data;
	})

	$scope.cadastrarAlterar = function () {
		var modelPut = { Id : $scope.model.Id, data : $scope.model };
		Request.call(modelPut, 'PUT', 'Veiculos').then(function() {
			$location.path('/listarVeiculo');
		});
	}
});

/***************************************************************/
/***************************************************************/
// Marca
/***************************************************************/
/***************************************************************/
app.controller('ListarMarcaCtrl', function($rootScope, $scope, $location, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Marcas";

	$scope.init = function() {
		Request.call(null, 'GET', 'Marcas').then(function(response) {
			$scope.lista = response.data;
		});
	};

	$scope.excluir = function(id) {
		var confirmarExclusao = confirm("Deseja excluir esse item?");

		if (confirmarExclusao) {
			Request.call(id, 'DELETE', 'Marcas').then(function(response) {
				$scope.init();
			});
		}		
	};

	$scope.init();
});
app.controller('CadastrarMarcaCtrl', function($rootScope, $scope, $location, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Cadastrar Marcas";
	$scope.acao = "Cadastrar";
	$scope.model = {};

	$scope.cadastrarAlterar = function () {
		Request.call($scope.model, 'POST', 'Marcas').then(function() {
			$location.path('/listarMarca');
		});
	}
});
app.controller('AlterarMarcaCtrl', function($rootScope, $scope, $location, $routeParams, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Alterar Marcas";
	$scope.acao = "Alterar";
	$scope.model = {};

	Request.call($routeParams.id, 'GETBYID', 'Marcas').then(function(response) {
		$scope.model = response.data;
	})

	$scope.cadastrarAlterar = function () {
		var modelPut = { Id : $scope.model.Id, data : $scope.model };
		Request.call(modelPut, 'PUT', 'Marcas').then(function() {
			$location.path('/listarMarca');
		});
	}
});

/***************************************************************/
/***************************************************************/
// Opcional
/***************************************************************/
/***************************************************************/
app.controller('ListarOpcionalCtrl', function($rootScope, $scope, $location, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Opcionais";

	$scope.init = function() {
		Request.call(null, 'GET', 'Opcionais').then(function(response) {
			$scope.lista = response.data;
		});
	};

	$scope.excluir = function(id) {
		var confirmarExclusao = confirm("Deseja excluir esse item?");

		if (confirmarExclusao) {
			Request.call(id, 'DELETE', 'Opcionais').then(function(response) {
				$scope.init();
			});
		}		
	};

	$scope.init();
});
app.controller('CadastrarOpcionalCtrl', function($rootScope, $scope, $location, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Cadastrar Opcional";
	$scope.acao = "Cadastrar";
	$scope.model = {};

	$scope.cadastrarAlterar = function () {
		Request.call($scope.model, 'POST', 'Opcionais').then(function() {
			$location.path('/listarOpcional');
		});
	}
});
app.controller('AlterarOpcionalCtrl', function($rootScope, $scope, $location, $routeParams, Request)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Alterar Opcionais";
	$scope.acao = "Alterar";
	$scope.model = {};

	Request.call($routeParams.id, 'GETBYID', 'Opcionais').then(function(response) {
		$scope.model = response.data;
	})

	$scope.cadastrarAlterar = function () {
		var modelPut = { Id : $scope.model.Id, data : $scope.model };
		Request.call(modelPut, 'PUT', 'Opcionais').then(function() {
			$location.path('/listarOpcional');
		});
	}
});

/***************************************************************/
/***************************************************************/
// Locação
/***************************************************************/
/***************************************************************/
app.controller('ListarLocacaoCtrl', function($rootScope, $scope, $location)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Locações";
});

/***************************************************************/
/***************************************************************/
// Sobre
/***************************************************************/
/***************************************************************/
app.controller('SobreCtrl', function($rootScope, $scope, $location)
{
	$rootScope.activetab = $location.path();
	$scope.titulo = "Sobre";
});