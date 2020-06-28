(function (){
  'use strict';
  angular
  .module("mainApp")
  .factory("Contacts", function($resource, $rootScope, $q, $http, HelperAPI) {
    var self = {
      listContacts: [],
      listAll: function() {
        return HelperAPI.getContacts({
                  method: 'GET',
                  url: `${rootUrl}/contacts`,
                })
                .then(data => {
                  this.listContacts = data;
                  return data;
                })
                .catch(error => {
                  console.log('error');
                  return [];
                })
      }
    }

    return self;
  });
})();