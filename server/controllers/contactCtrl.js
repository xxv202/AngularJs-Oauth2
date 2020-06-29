const _ = require('lodash');
var templateContact = require('../../data/templateContact');
module.exports = function ContactCtrl(app, Contacts){
    
    function update(contact){
        var result = false;
        console.log(contact);
        var index = _.findIndex(Contacts, Contact => Contact.ContactID === contact.ContactID);
        if(index < 0) return false;
        Contacts[index] = contact;
        console.log('update: ', result);
        return result;
    }
    function add(contact){
        var icontact = _.assign(templateContact, contact);
        Contacts.unshift(icontact);
        console.log('add: ', !!_.first(Contacts));
        return _.first(Contacts);
    }
    return {
        update,
        add
    }
}