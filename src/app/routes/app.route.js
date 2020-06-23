(function (){
  'use strict';

  angular
    .module("mainApp")
    .config(['$stateProvider', '$urlRouterProvider', '$routeProvider', 
      function($stateProvider, $urlRouterProvider, $routeProvider) {
      console.log('init ', $stateProvider);
      var states = [
        {
          name: 'index',
          url: '/',
          views: {
            templateUrl: 'templates/example.html',
            controller: 'ExampleController'
          }
        },
        {
          name: 'login',
          url: '/login',
          views: {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
          }
        }
      ];

      states.forEach((state) => $stateProvider.state(state));
      $urlRouterProvider.otherwise('/');
    }])
})();