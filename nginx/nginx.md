### Setup nginx

# rootCA and add cer into browers 
https://techtalk.vn/tao-ssl-certificate-authority-cho-https-tren-local.html

# Generate xuanvu.com ssl
$openssl genrsa -out xuanvu.com.key 2048
$openssl req -new -key xuanvu.com.key -out xuanvu.com.csr
$mkdir ssl;cd ssl/ 
$vi xuanvu.com.ext
- [ ] Paste content into

``` 
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
 
[alt_names]
DNS.1 = xuanvu.com
```

$openssl x509 -req -in xuanvu.com.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out xuanvu.com.crt -days 1825 -sha256 -extfile xuanvu.com.ext

# Edit /etc/hosts
```
127.0.0.1 xuanvu.com
```