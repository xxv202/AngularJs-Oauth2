function generateID(value) {
    return new Date().getTime();
}
var tem = {
    "ContactID": generateID("83a6b7cf-654f-4099-aa15-ddb1e2ad032a"),
    "ContactNumber": "",
    "ContactStatus": "ACTIVE",
    "Name": "",
    "FirstName": "",
    "LastName": "",
    "EmailAddress": "",
    "Addresses": [
        {
            "AddressType": "POBOX"
        },
        {
            "AddressType": "STREET"
        }
    ],
    "Phones": [
        {
            "PhoneType": "DDI"
        },
        {
            "PhoneType": "DEFAULT"
        },
        {
            "PhoneType": "FAX"
        },
        {
            "PhoneType": "MOBILE"
        }
    ],
    "UpdatedDateUTC": "/Date(1592988434017+0000)/",
    "ContactGroups": [],
    "IsSupplier": false,
    "IsCustomer": false,
    "ContactPersons": [],
    "HasAttachments": false,
    "HasValidationErrors": false
};

module.exports = tem;