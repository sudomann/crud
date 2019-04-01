const express = require('express');  
const bodyParser = require('body-parser');
const app = express();
const db = require('./models'); 

app.use(bodyParser.json());  
app.use(express.static(__dirname + '/static'));

app.get('/api/notes', (req, res) => {  
  // TODO: retreive notes and send to requester
});

app.get('/api/notes', (req, res) => {  
  return db.Note.findAll()
    .then((notes) => res.send(notes))
    .catch((err) => {
      console.log('There was an error querying notes', JSON.stringify(err))
      return res.send(err)
    });
});

app.post('/api/notes', (req, res) => {
  const { author, date, text } = req.body
  return db.Note.create({ author, date, text })
    .then((note) => res.send(note))
    .catch((err) => {
      console.log('***There was an error creating a note', JSON.stringify(note))
      return res.status(400).send(err)
    })
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Note.findById(id)
    .then((note) => note.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting note', JSON.stringify(err))
      res.status(400).send(err)
    })
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Note.findById(id)
  .then((note) => {
    const { author, date, text } = req.body
    return note.update({ author, date, text })
      .then(() => res.send(note))
      .catch((err) => {
        console.log('***Error updating note', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
});

app.listen(3000, () => {  
  console.log('Server is up on port 3000');
});