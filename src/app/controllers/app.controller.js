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
    Org,
    Contacts
  ){
    /* check login */
    $rootScope.isLogged = LocalStorage.get('access_token');
    if(!$rootScope.isLogged)
      $state.go('login'); 
    else
      $state.go('contact');
    /* ------------------ */
    /* Load org*/
    $rootScope.$on('needLoadOrgs', async function (event, data) {
      console.log('needLoadOrgs:', data);
      if(data) {
        $rootScope.loadingOrg = true;
        var listOrgs = await Org.listAll();
        $rootScope.orgs = listOrgs;
        console.log('listContacts:', listOrgs);
        $rootScope.loadingOrg = false; 
        $rootScope.$apply();
        $rootScope.$broadcast('needLoadContacts', true);
      }
    });
    /* Load Contact */
    $rootScope.$on('needLoadContacts', async function (event, data) {
      console.log('needLoadContact:', data);
      if(data) {
        $rootScope.loadingContact = true;
        var listContacts = await Contacts.listAll(Org.current.tenantId);
        $rootScope.contacts = listContacts;
        console.log('listContacts:', listContacts);
        $rootScope.loadingContact = false; 
        $rootScope.$apply();
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