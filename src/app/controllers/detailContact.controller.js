(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("DetailContactController", 
    function($scope, $uibModalInstance, Contact) {
        console.log('Contacts', Contact);
        $scope.contact = Contact;
        
        $scope.close = function () {
           $uibModalInstance.close();
       };

       $scope.dismiss = function () {
           $uibModalInstance.dismiss('cancel');
       };
   })

})();