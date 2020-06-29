(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("AddContactController", 
    function($scope, $uibModalInstance, Contact) {
        console.log('Contacts', Contact);
        $scope.contact = Contact;
        
        $scope.close = function () {
           $uibModalInstance.close({
               add: 1,
               contact: _.assign($scope.contact, {
                            Name: $scope.Name
                        })
           });
       };

       $scope.dismiss = function () {
           $uibModalInstance.dismiss('cancel');
       };
   })

})();