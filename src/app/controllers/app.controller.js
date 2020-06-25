(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("MainController", function(
    $rootScope,
    $scope,
    $state,
    LocalStorage,
    HelperAPI,
    Org
  ){
    /* need require login */
    $state.go('login');
    /* ------------------ */
    $rootScope.$on('needLoadOrgs', async function (event, data) {
      console.log('needLoadOrgs:', data);
      if(data.value) {
        var result = await Org.loadOrg();
        if(result) console.log('ket qua: ', Org.current());
      }
    });
    $scope.changeState = (state) => {
      $state.go(state);
    };
  })

})();