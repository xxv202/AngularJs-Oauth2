var express = require('express');
var http = require('http');
var path = require('path');
var _ = require('lodash');

const app = express();
app.use('/templates', express.static(__dirname + '/templates'))
app.use('/media', express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/src'));

app.listen(3000, () => {
    console.log('Started 3000');
});


app.get('/', function(request, response){
  response.redirect('/src/index.html');
});

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