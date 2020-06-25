
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
    
    $rootScope.$broadcast('needLoadOrgs', {
      value: 2
    });
    /* require login */
    LocalStorage.get('access_token');
  })
