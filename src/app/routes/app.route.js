(function (){
  'use strict';

  angular
    .module("mainApp")
    .config(['$stateProvider', '$urlRouterProvider', '$routeProvider', 
      function($stateProvider, $urlRouterProvider, $routeProvider) {
      var states = [
        {
          name: 'login',
          url: '/login',
          templateUrl: 'templates/login.html',
        },
        { name: 'contact',
          url: '/contact',
          templateUrl: 'templates/contact.html'
        },
        {
          name: 'contact.detail',
          url: '/contact/:contactId',
          templateUrl: 'templates/defail.html'
        }
      ];

      states.forEach((state) => $stateProvider.state(state));
      $urlRouterProvider.otherwise('/');
    }])
})();