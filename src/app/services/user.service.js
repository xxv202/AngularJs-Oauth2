(function (){
    'use strict';
    angular
    .module("mainApp")
    .factory("UserService", function() {
      return { 
        checkLogin: function(){
            return false;
        }
      }
    })
  })();