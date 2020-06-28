
  angular
  .module("mainApp")
  .controller('ContactController', function(
    $rootScope,
    $scope,
    $state,
    HelperAPI,
    LocalStorage,
    Org,
    Contacts
  ) {
    /* require login */
    if(!LocalStorage.get('access_token')) $state.go('login');
    /* require contacts */
    if(!_.size(Contacts.listContacts))
      $rootScope.$broadcast('needLoadOrgs', true);
    
    $scope.edit = edit;
    function edit(){
    }
  })
