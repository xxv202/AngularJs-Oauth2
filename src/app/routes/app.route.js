(function (){
  'use strict';

  angular
    .module("mainApp")
    .config(['$stateProvider', '$urlRouterProvider', '$routeProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
      // $locationProvider.html5Mode(true);
      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });
      var states = [
        {
          name: 'login',
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginController'
        },
        { name: 'contact',
          url: '/contact',
          templateUrl: 'templates/contact.html'
        },
        {
          name: 'contact.detail',
          url: '/contact/:contactId',
          templateUrl: 'templates/defail.html'
        },
        {
          name: 'callback',
          url: '/callback',
          templateUrl: 'templates/callback.html'
        }
      ];
      states.forEach((state) => $stateProvider.state(state));
      $urlRouterProvider.otherwise('/');
    }])
})();