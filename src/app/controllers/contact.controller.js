
  angular
  .module("mainApp")
  .controller('ContactController', function(
    $rootScope,
    $scope,
    $state,
    HelperAPI,
    LocalStorage,
    Org
  ) {
    
    $rootScope.$broadcast('needLoadOrgs', true);
    // $rootScope.$broadcast('needLoadContacts', true);
    /* require login */
    LocalStorage.get('access_token');
  })
