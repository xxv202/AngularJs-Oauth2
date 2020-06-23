var express = require('express');
var http = require('http');
var path = require('path');
var serveStatic = require('serve-static');

const app = express();
console.log(path.join(__dirname, 'src'));

app.use('/templates', express.static(__dirname + '/templates'))
app.use('/media', express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/src'));

app.listen(3000, () => {
    console.log('Started 3000');
});


app.get('/', function(request, response){
  response.redirect('/src/index.html');
});
