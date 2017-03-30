/***************************************************************/
/****************** TRABALHO SISTEMAS WEB **********************/
/***************************************************************/
/***************** Author: Gabriel Oliveira ********************/
/***************************************************************/

var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // Provider HTML5 para remover o # da url. Comentado por incompatibilidade em certos browsers.
   /* $locationProvider.html5Mode({enabled: true, requireBase: true, rewriteLinks: true}); */
 
   $routeProvider
 
   // Home.
   .when('/', {
      templateUrl : 'views/home.html',
      controller : 'HomeCtrl',
   })

   // Clientes
   .when('/listarCliente', {
      templateUrl : 'views/listarCliente.html',
      controller : 'ListarClienteCtrl',
   })
   .when('/cadastrarCliente', {
      templateUrl : 'views/cadastrarAlterarCliente.html',
      controller : 'CadastrarClienteCtrl',
   })
   .when('/alterarCliente/:id', {
      templateUrl : 'views/cadastrarAlterarCliente.html',
      controller : 'AlterarClienteCtrl',
   })
    .when('/detalharCliente/:id', {
      templateUrl : 'views/cadastrarAlterarCliente.html',
      controller : 'DetalharClienteCtrl',
   })

   // Veiculos
   .when('/listarVeiculo', {
      templateUrl : 'views/listarVeiculo.html',
      controller : 'ListarVeiculoCtrl',
   })
   .when('/cadastrarVeiculo', {
      templateUrl : 'views/cadastrarAlterarVeiculo.html',
      controller : 'CadastrarVeiculoCtrl',
   })
   .when('/alterarVeiculo/:id', {
      templateUrl : 'views/cadastrarAlterarVeiculo.html',
      controller : 'AlterarVeiculoCtrl',
   })
   .when('/detalharVeiculo/:id', {
      templateUrl : 'views/cadastrarAlterarVeiculo.html',
      controller : 'DetalharVeiculoCtrl',
   })

   // Marcas
   .when('/listarMarca', {
      templateUrl : 'views/listarMarca.html',
      controller : 'ListarMarcaCtrl',
   })
   .when('/cadastrarMarca', {
      templateUrl : 'views/cadastrarAlterarMarca.html',
      controller : 'CadastrarMarcaCtrl',
   })
   .when('/alterarMarca/:id', {
      templateUrl : 'views/cadastrarAlterarMarca.html',
      controller : 'AlterarMarcaCtrl',
   })

   // Opcionais
   .when('/listarOpcional', {
      templateUrl : 'views/listarOpcional.html',
      controller : 'ListarOpcionalCtrl',
   })
   .when('/cadastrarOpcional', {
      templateUrl : 'views/cadastrarAlterarOpcional.html',
      controller : 'CadastrarOpcionalCtrl',
   })
   .when('/alterarOpcional/:id', {
      templateUrl : 'views/cadastrarAlterarOpcional.html',
      controller : 'AlterarOpcionalCtrl',
   })

   // Locações
   .when('/listarLocacao', {
      templateUrl : 'views/listarLocacao.html',
      controller : 'ListarLocacaoCtrl',
   })
 
   // Sobre.
   .when('/sobre', {
      templateUrl : 'views/sobre.html',
      controller : 'SobreCtrl',
   })
 
   // Url Default.
   .otherwise ({ redirectTo: '/' });
});
