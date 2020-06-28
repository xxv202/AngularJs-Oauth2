(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("DeleteContactController", 
    function($scope, $uibModalInstance, Contact) {
        console.log('Contacts', Contact);
        $scope.contact = Contact;
        
        $scope.close = function () {
           $uibModalInstance.close({
               delete: 1
           });
       };

       $scope.dismiss = function () {
           $uibModalInstance.dismiss('cancel');
       };
   })

})();