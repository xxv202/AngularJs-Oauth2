(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("MainController", function(
    $scope,
    $state,
  ){

    /* check session login */
    $state.go('login');
    
    $scope.changeState = (state) => {
      $state.go(state);
    }
  })

})();