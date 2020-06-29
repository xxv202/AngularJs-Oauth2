
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
    ModalService,
    ErrorService
  ) {

    /* require login */
    if(!LocalStorage.get('access_token')) $state.go('login');
    /* require contacts */
    if(!_.size(Contacts.listContacts))
      $rootScope.$broadcast('needLoadOrgs', true);
    $scope.edit = edit;

    function edit(contact, index){
      console.log(contact, index);
      ModalService.openModal('detailContact.html', 'DetailContactController', 'lg', { contact : contact }, 
                function(data){
                  console.log('edit:', data);
                  if(data.edit){
                    $rootScope.contacts[index] = data.contact;
                    // $rootScope.$apply();
                    ErrorService.error("Update contact successfully!", 2000, "SUCCESS");
                  }
                }
      );
    }

    $scope.add = addContact;
    function addContact(){
      ModalService.openModal('addContact.html', 'AddContactController', 'lg', {}, 
        function(data){
          console.log('add:', data);
          if(data.add){
            $rootScope.contacts.push(data.contact);
            // $rootScope.$apply();
            ErrorService.error("Add contact successfully!", 2000, "SUCCESS");
          }
        }
      )
    }
    $scope._size = _size;
    function _size(data) {
      return _.size(data);
    }
  })
