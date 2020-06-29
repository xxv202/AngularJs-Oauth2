/* load data MOCK */
// const fs = require('fs');

// var rawdata = fs.readFileSync('data/contact.json');
// var Contacts = JSON.parse(rawdata);
// console.log(Contacts);
var Contacts = require('./data/contact');
var Orgs = require('./data/org');
/* --------------- */
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var _ = require('lodash');
const app = express();
app.use('/templates', express.static(__dirname + '/templates'))
app.use('/media', express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json({limit: '50mb'}));

app.listen(3000, () => {
    console.log('Started 3000');
});


app.get('/', function(request, response){
  response.redirect('/src/index.html');
});
/* step 1 */
app.get('/callback', (req, res) => {
  console.log(req);
  console.log('result:');
  _.forOwn(req.query, (item, key) => {
    console.log(key + ' : ' + item);
  })
  console.log(new Date());
  var code = _.get(req.query, 'code');
  
  if(code) {
    res.cookie('code', code, { 
      maxAge: 5*60*1000, httpOnly: false, expires: new Date(new Date().getTime()+5*60*1000)
    });
  }
  res.redirect('/');
})
var ContactCtrl = require('./server/controllers/contactCtrl')(app, Contacts);

app.get('/contacts', (req, res) => {
  console.log('GET /contacts');
  res.status(200).send(Contacts);
})
app.post('/contacts', (req, res) => {
  console.log('POST /contacts');
  var contact = req.body;
  var result = ContactCtrl.add(contact);
  res.status(200).send(result);
})

app.put('/contacts', (req, res) => {
  console.log('PUT /contacts');
  var contact
  var contact = req.body;
  var result = ContactCtrl.update(contact);
  res.status(200).send(result);
})


app.get('/orgs', (req, res) => {
  console.log('GET /orgs');
  console.log(req.query);
  res.status(200).send(Orgs);
})