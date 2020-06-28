
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
      ModalService.openModal('detailContact.html', 'DetailContactController', 'lg', { contact : contact } );
    }
    $scope.delete = deleteContact;
    function deleteContact(contact){
      ModalService.openModal('deleteContact.html', 'DeleteContactController', 'lg', { contact : contact });
    }
    $scope._size = _size;
    function _size(data) {
      return _.size(data);
    }
  })
