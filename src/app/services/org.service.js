(function (){
  'use strict';
  angular
  .module("mainApp")
  .factory("Org", function($rootScope, HelperAPI, LocalStorage) {
    var self = { 
      current: null,
      listOrgs: [],
      listAll: function() {
        return  HelperAPI.getOrgs({
                  method: 'GET',
                  url: `${rootUrl}/orgs`,
                })
                .then(data => {
                  self.listOrgs = data;
                  self.current = _.get(self.listOrgs, 0);
                  return data;
                })
                .catch(error => {
                  console.error(error);
                  self.listOrgs = [];
                  return [];
                });
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
        if(!_.size(self.listOrgs)) return self.current;
        self.current = _.first(self.listOrgs);
      }
    }

    return self;
  });
})();
