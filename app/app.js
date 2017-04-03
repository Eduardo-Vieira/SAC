angular.module('app', ['ngRoute',
                       'app.confRoute',
                       'app.pageController',
                       ])
.run(function ($rootScope, $location) {
  
  //iremos chamar essa função sempre que o endereço for alterado
  $rootScope.$on('$locationChangeStart', function () { 

  });
  
});
