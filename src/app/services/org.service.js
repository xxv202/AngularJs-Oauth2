(function (){
  'use strict';
  angular
  .module("mainApp")
  .factory("Org", function($rootScope, HelperAPI, LocalStorage) {
    return { 
      current: null,
      listOrgs: [{
          "id": "1fd329eb-b798-449b-8fb0-853ad6c8d489",
          "authEventId": "95d308d1-1b34-422d-82e6-22a465cf2b51",
          "tenantId": "1b36a064-5a25-4c9c-9c21-8913c8c4f987",
          "tenantType": "ORGANISATION",
          "tenantName": "Demo Company (Global)",
          "createdDateUtc": "2020-06-24T16:15:36.4526720",
          "updatedDateUtc": "2020-06-27T15:39:23.4657000"
      },
      {
          "id": "bccba0bd-7378-4851-a3ec-8eabfd9e24b3",
          "authEventId": "9f670327-5f73-4468-8244-93705beab86d",
          "tenantId": "84d377df-c3aa-4e24-a7b3-e3717349ec07",
          "tenantType": "ORGANISATION",
          "tenantName": "ABC",
          "createdDateUtc": "2020-06-24T10:39:12.1779350",
          "updatedDateUtc": "2020-06-26T15:10:24.2264120"
      }],
      loadOrg: function() {
        var self = this;
        return;
        HelperAPI.getOrgs({
          method: 'GET',
          url: 'https://api.xero.com/connections',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': "Bear " + LocalStorage.get('access_token'),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET POST PUT DELETE OPTIONS',
            'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
          },
        })
          .then(data => {
            console.log('get orgs');
            self.listOrgs = data;
            self.current = _.get(self.listOrgs, 0);
          })
          .catch(error => {
            console.error(error);
            self.listOrgs = [];
          });
      },
      selectOrg: function(id = 0) {
        var self = this;
        if(!_.size(self.listOrgs)) return self.current;
        self.current = _.first(self.listOrgs);
      },
      listAll: () => {
        var self = this;
        return self.listOrgs;
      }
    }
  });
})();
