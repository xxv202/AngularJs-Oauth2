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
        $scope.Phone = _.first($scope.contact.Phones);
        $scope.AddressLine = _.first($scope.contact.Addresses);
        $scope.close = function () {
            console.log($scope.contact, $scope.EmailAddress, $scope.Phone, $scope.AddressLine);
            $uibModalInstance.close({
               edit: 1,
               contact:  _.assign($scope.contact, {
                                Name: $scope.Name
                            })
           });
        };

       $scope.dismiss = function () {
           $uibModalInstance.dismiss('cancel');
       };
   })

})();