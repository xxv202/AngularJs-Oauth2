(function (){
  'use strict';
  angular
  .module("mainApp")
  .factory("HelperAPI", function($resource, $http) {
    return { 
      call: function(data) {
        return $http({
          method: _.get(data, 'method', 'GET'),
          url: _.get(data, 'url'),
          headers: _.get(data, 'headers', {}),
          params: _.get(data, 'params', {})
        })
      }
    }
    $resource(
      "http://localhost:3000/contacts/:id",
      {id: "@id"},
      {
        update: {
          method: "PUT"
        }
      }
    ); 
  })
})();