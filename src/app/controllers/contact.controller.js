
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
                  if(!data.edit) return;
                      
                  HelperAPI.updateContact({
                        method: 'PUT',
                        url: `${rootUrl}/contacts`,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8"
                          },
                        data: data.contact
                      })
                      .then(data => {
                        $rootScope.contacts[index] = data.contact;
                        ErrorService.error("Update contact successfully!", 2000, "SUCCESS");
                      })
                      .catch(error=>{
                        ErrorService.error("Failed! Can't edit contact", 2000);
                        return error;
                      });
                }
      );
    }

    $scope.add = addContact;
    function addContact(){
      ModalService.openModal('addContact.html', 'AddContactController', 'lg', {}, 
        function(data){
          console.log('add:', data);
          if(!data.add) return;
              
          HelperAPI.updateContact({
                method: 'PUT',
                url: `${rootUrl}/contacts`,
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                  },
                data: data.contact
              })
              .then(data => {
                $rootScope.contacts.push(data.contact);
                ErrorService.error("Add contact successfully!", 2000, "SUCCESS");
              })
              .catch(error=>{
                ErrorService.error("Failed! Can't add contact", 2000);
                return error;
              });

        }
      )
    }
    $scope._size = _size;
    function _size(data) {
      return _.size(data);
    }
  })
