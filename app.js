const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(port, function(req, res){
  console.log("Listening on port 3000");
})

app.get('/', function(req, res){
  res.render('home');
})
