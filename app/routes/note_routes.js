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
        res.send(result.ops[0]);
      }
    });
  });
};
