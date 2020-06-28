(function (){
  'use strict';
  angular
  .module("mainApp")
  .factory("Contacts", function($resource, $rootScope, $q, $http, HelperAPI, LocalStorage, ErrorService) {
    var self = {
      listContacts: [],
      listAll: function(orgCurrent) {
        console.log(orgCurrent);
        return  HelperAPI.getContacts({
                  method: 'GET',
                  url: `${rootUrl}/contacts`,
                })
        // return  HelperAPI.getContacts({
        //           method: 'GET',
        //           url: `https://api.xero.com/api.xro/2.0/Contacts`,
        //           headers: {
        //             'Accept': 'application/json',
        //             'Xero-tenant-id': '1b36a064-5a25-4c9c-9c21-8913c8c4f987',
        //             'Authorization': 'Bearer ' + LocalStorage.get('access_token')
        //           }
        //         })     
                .then(data => {
                  this.listContacts = data;
                  return data;
                })
                .catch(error => {
                  console.log('error');
                  ErrorService.error('Can not get data!', 1000);
                  return [];
                })
      }
    }

    return self;
  });
})();