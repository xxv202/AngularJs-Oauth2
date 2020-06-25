
  angular
  .module("mainApp")
  .controller('LoginController', function(
    $rootScope,
    $scope,
    $state,
    HelperAPI,
    LocalStorage
  ) {
    console.log('hello world');
    console.log(LocalStorage.get('access_token'));
  })
