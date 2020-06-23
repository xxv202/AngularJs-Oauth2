(function (){
    'use strict';
    angular
    .module("mainApp")
    .factory("LocalStorage", function($window) {
        console.log($window);
        var LocalStorage = {
            get : (key = 'token') => {
                return $window.localStorage.getItem(key);
            },
            set : (key, value) => {
                return $window.localStorage.setItem(key, value);
            }
        }
        return LocalStorage;
    })
  })();