(function (){
  'use strict';
  angular
    .module("mainApp")
    .directive("example", function() {
      return {
        restrict: "AE",
        templateUrl: "templates/example.html",
        scope: {
          user: "="
        },
        controller: function($scope, ContactService) {
          $scope.isDeleting = false;
          $scope.deleteUser = function() {
            $scope.isDeleting = true;
            ContactService.removeContact($scope.user).then(function() {
              $scope.isDeleting = false;
            });
          };
        }
      };
    })
    .directive("ccSpinner", function() {
      return {
        restrict: "AE",
        templateUrl: "templates/spinner.html",
        scope: {
          isLoading: "=",
          message: "@"
        }
      };
    });

})();