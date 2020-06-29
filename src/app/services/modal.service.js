(function (){
    'use strict';
    angular
    .module("mainApp")
    .factory("ModalService", function($rootScope, $uibModal) {

        return new ModalService();
        function ModalService(){
            
            function openModal(templateName, controllerName, size, params, callback){
                var template = `templates/${templateName}`;
                var modal = $uibModal.open({
                    animation: true,
                    templateUrl:  template,
                    size: size,
                    controllerAs: '$ctrl',
                    controller: controllerName,
                    resolve: {
                        Contact: function () {
                            return _.get(params, 'contact', false);
                        },
                        error: function() {
                            return _.get(params, 'error', false);
                        }
                    }
                });
                modal.result.then(
                    // callback close
                    (result)=>{
                        if(callback) callback(result);
                    },  
                    // callback dismiss
                    (result)=>{
                        console.log('dismiss:', result);
                    }
                )
            }
            return {
                 openModal: openModal
             };
         }
    });
  })();
  