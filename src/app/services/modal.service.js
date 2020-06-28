(function (){
    'use strict';
    angular
    .module("mainApp")
    .factory("ModalService", function($rootScope, $uibModal) {

        return new ModalService();
        function ModalService(){
            
            function openModal(templateName, controllerName, size, contact){
                var template = `templates/${templateName}`;
                var modal = $uibModal.open({
                    animation: true,
                    templateUrl:  template,
                    size: size,
                    controllerAs: '$ctrl',
                    controller: controllerName,
                    resolve: {
                        Contact: function () {
                            return contact;
                        }
                    }
                });
                console.log(modal);
                modal.result.then(
                    // callback close
                    (result)=>{
                        console.log('close:', result);
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
  