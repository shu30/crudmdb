var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {

  app.post('/notes', (req, res) => {
  // Здесь будем создавать заметку.
  console.log(req.body)
//  res.send('Hello') 
  //res.send(req.body)
  const note = { text: req.body.body, title: req.body.title };
    db.collection('notes2').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
//        res.send(result.ops[0]);
        res.redirect('/notes')
      }
    });
  });

  app.get('/notes', (req, res) =>{
    db.collection('notes2').find().toArray(function(err, results){
      res.render('index', {title: 'MongoDB collection', results: results });
    });
  });

  app.get('/notes/delete/:id', (req, res) =>{
    const id = req.params.id;

    const details = { '_id': new ObjectID(id) };
    db.collection('notes2').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.redirect('/notes')
      }
    });

  });

};
