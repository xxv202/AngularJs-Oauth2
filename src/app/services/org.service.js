(function (){
  'use strict';
  angular
  .module("mainApp")
  .factory("Org", function($rootScope) {
    return {
      id: null,
      pid: 0,
      listOrgs: [
        {id:'1', name: 'ABC'},
        {id:'2', name: 'Demo'}
      ],
      loadOrg: function() {
        var self = this;
        return new Promise((res, rej) => {
          self.id = 'co roi ne';         
          res(true);
        });
      },
      current: function() {
        var self = this;
        return self.id;
      }
    }
  });
})();