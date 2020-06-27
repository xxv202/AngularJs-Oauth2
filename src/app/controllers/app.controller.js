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
    /* check login */
    $rootScope.isLogged = LocalStorage.get('access_token');
    if(!$rootScope.isLogged)
      $state.go('login'); 
    else
      $state.go('contact');
    /* ------------------ */
    $rootScope.$on('needLoadOrgs', async function (event, data) {
      console.log('needLoadOrgs:', data);
      if(data.value) {
        // var result = await Org.loadOrg();
        var result = Org.listOrgs; 
        if(_.size(result)) console.log('ket qua: ', Org.current, Org.listOrgs, result);
      }
    });
    $scope.changeState = (state) => {
      $state.go(state);
    };
    $scope.logout = function (){
      LocalStorage.clear();
      $rootScope.isLogged = false;
      // $state.go('login');
    }
  })

})();