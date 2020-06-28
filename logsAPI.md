### API
#Login
1. 
@url GET https://login.xero.com/identity/connect/authorize
@params: 
```
{
    response_type : 'code',
    client_id: 'ED7F340B3C6B47E9A53A92FA8E6F94E1',
    redirect_uri: `${rootUrl}/callback`,
    scope: 'openid profile email offline_access accounting.transactions accounting.contacts',
    state: '123',
    client_secret: 'Y2ypE5A_oS369fgkfeXd6sILdniInjUmg-IhPHeSgwgqtgoT'
}
```
@response : /callback
{ 
    code: xxx
    state: xxx
    ...
}

2. 
@url POST https://identity.xero.com/connect/token
@headers:
```
{
    Authorization: "Basic " + base64encode(client_id + ":" + client_secret)
    code: xxx
    redirect_uri: `${rootUrl}/callback`
}
```
#function btoa = base64encode;
@response : 
```
access_token: xxx
refresh_token: xxx
scope: openid profile email accounting.transactions accounting.contacts offline_access
id_token: xxx
token_type: Bearer
```

3. Get connections (tenantId/Orgs)
@url GET https://api.xero.com/connections
@headers:
```
{
    Authorization: Bearer + access_token
    Content-Type: application/json
}
```

@response error
- localhost doesn't allow origin from @host

3.1 Try Post man
@response
```
    {
        id: xxx
        tenantid: xxx
        ...
    }
```
4. Get contacts 
@url POST https://api.xero.com/api.xro/2.0/Contacts
@headers: 
```
{
    Authorization: "Bearer " + access_token
    Accept: application/json
    Xero-tenant-id: xxx (get Postman 3.1)
}

```
@response error
- localhost doesn't allow origin from @host

4.1 Try Postman

@response Contact's list
