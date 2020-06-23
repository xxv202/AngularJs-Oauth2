
  angular
  .module("mainApp")
  .controller('LoginController', function(
    $scope,
    $state,
  ) {
    $scope.username = 'phongdeptrai@gmeochamcom';
    console.log($scope.username);
  })
