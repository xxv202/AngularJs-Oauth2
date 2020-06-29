(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("DetailContactController", 
    function($scope, $uibModalInstance, Contact) {
        console.log('Contacts', Contact);
        $scope.contact = Contact;
        $scope.Name = $scope.contact.Name;
        $scope.EmailAddress = $scope.contact.EmailAddress;
        $scope.Phones = (typeof $scope.contact.Phones === 'object')? '': $scope.contact.Phones;
        $scope.Addresses = (typeof $scope.contact.Addresses === 'object')? '': $scope.contact.Addresses;
        $scope.close = function () {
            console.log($scope.contact, $scope.EmailAddress, $scope.Phone, $scope.AddressLine);
            $uibModalInstance.close({
               edit: 1,
               contact:  _.assign($scope.contact, {
                                Name: $scope.Name,
                                EmailAddress: $scope.EmailAddress,
                                Phones: $scope.Phones,
                                Addresses: $scope.Addresses
                            })
           });
        };

       $scope.dismiss = function () {
           $uibModalInstance.dismiss('cancel');
       };
   })

})();