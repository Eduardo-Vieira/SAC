angular.module('app.confRoute', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  // Criando a rota do app
  $routeProvider
  .when('/', {
    templateUrl: 'views/page/index.html'
  })
  .otherwise({ redirectTo: '/'});
});