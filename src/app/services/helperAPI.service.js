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
          data: `grant_type=${data.params.grant_type}&` +
            `code=${data.params.code}&` +
            `redirect_uri=${data.params.redirect_uri}`,
          headers: _.get(data, 'headers', {}),
        });
      },
      getContacts: function(data){
        return $http(data)
                .then( result =>{
                  return result.data;
                })
      },
      getOrgs: function(data){
        return $http(data)
                .then( result =>{
                  return result.data;
                })
      },
      updateContact: function(data){
        return $http(data)
                .then(result => {
                  return result.data;
                })
      },
      createContact: function(data){
        return $http(data)
                .then(result => {
                  return result.data;
                })
      }
    }
  })
})();
