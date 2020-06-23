(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("MainController", function(
    $scope,
    $state,
    LocalStorage
  ){

    /* check session login */
    $state.go('login');
    console.log(LocalStorage.get('token'));
    $scope.changeState = (state) => {
      $state.go(state);
    }
  })

})();