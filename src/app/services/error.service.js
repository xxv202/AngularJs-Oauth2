(function (){
    'use strict';
    angular
    .module("mainApp")
    .factory("ErrorService", function($window, ModalService) {
        var self = {
            error: function (content, time, title) {
                ModalService.openModal('error.html', 'ErrorController', 'lg',
                {
                    error: {
                        content: content, 
                        time: time,
                        title: title
                    }
                });   
          
            }
        }
        return self;
    })
  })();