(function (){
  'use strict';
  
  angular.module("mainApp").filter("exampleFilter", function() {
    return function(input, conditions) {
      return _.filter(input, field => {
          return field === conditions;
      });
    };
  });
})();