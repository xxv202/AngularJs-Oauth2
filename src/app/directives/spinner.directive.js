(function (){
  'use strict';
  angular
    .module("mainApp")
    .directive("spinner", function() {
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