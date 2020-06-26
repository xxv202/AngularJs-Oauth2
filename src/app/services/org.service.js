(function (){
  'use strict';
  angular
  .module("mainApp")
  .factory("Org", function($rootScope, HelperAPI, LocalStorage) {
    return {
      current: null,
      listOrgs: [
        {id:'1', name: 'ABC'},
        {id:'2', name: 'Demo'}
      ],
      loadOrg: function() {
        var self = this;
        HelperAPI.getOrgs({
          method: 'GET',
          url: 'https://api.xero.com/connections',
          headers: {
            'Content-Type' : 'application/json',
            'authorization': "Bear " + LocalStorage.get('access_token'),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET OPTIONS',
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
      selectOrg: function(id) {
        var self = this;
        if(!_.size(self.listOrgs)) return self.current;
        // this.current = _.filter(self.listOrgs, (org) => {
        //   return _.isEqual(org.id, id);
        // })
      }
    }
  });
})();