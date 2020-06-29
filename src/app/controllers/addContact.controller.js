(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("AddContactController", 
    function($scope, $uibModalInstance) {
        $scope.contact = {};
        $scope.Name = $scope.contact.Name;
        $scope.EmailAddress = $scope.contact.EmailAddress;
        $scope.Phones = $scope.contact.Phones;
        $scope.Addresses = $scope.contact.Addresses;
        $scope.close = function () {
            console.log($scope.contact, $scope.EmailAddress, $scope.Phone, $scope.AddressLine);
            $uibModalInstance.close({
               add: 1,
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