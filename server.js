const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
//const db             = require('./config/db');
const app            = express();


const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://test:123@127.0.0.1:27017/crudmdb', (err, client) => {
  var db = client.db('crudmdb');
  if (err) return console.log(err)
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
