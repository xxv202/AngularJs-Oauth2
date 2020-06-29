const _ = require('lodash');
var templateContact = require('../../data/templateContact');
module.exports = function ContactCtrl(app, Contacts){
    
    function update(contact){
        var result = false;
        _.map(Contacts, icontact => {
            if(_.isEqual(_.get(icontact, 'ContactID', false), _.get(contact, 'ContactID', true)))
                {
                    result = true; 
                    return contact;
                }
            return icontact;
        });
        console.log('update: ', result);
        return result;
    }
    function add(contact){
        var icontact = _.assign(templateContact, contact);
        Contacts.unshift(icontact);
        console.log('add: ', !!_.first(Contacts));
        return true;
    }
    return {
        update,
        add
    }
}