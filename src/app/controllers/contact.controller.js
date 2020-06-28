
  angular
  .module("mainApp")
  .controller('ContactController', function(
    $rootScope,
    $scope,
    $state,
    HelperAPI,
    LocalStorage,
    Org,
    Contacts,
    ModalService
  ) {

    /* require login */
    if(!LocalStorage.get('access_token')) $state.go('login');
    /* require contacts */
    if(!_.size(Contacts.listContacts))
      $rootScope.$broadcast('needLoadOrgs', true);
    $scope.edit = edit;

    function edit(contact, ithis){
      console.log(contact, ithis);
      ModalService.openModal('detailContact.html', 'DetailContactController', 'lg', $scope, contact);
    }
  })
