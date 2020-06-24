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
    // setTimeout(() => {
    //   $state.go('callback');
    // }, 5000);
    console.log(LocalStorage.get('token'));
    $scope.changeState = (state) => {
      $state.go(state);
    }
  })

})();