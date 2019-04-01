const express = require('express');  
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());  
app.use(express.static(__dirname + '/static'));

app.get('/api/notes', (req, res) => {  
  // TODO: retreive notes and send to requester
});

app.post('/api/notes', (req, res) => {  
  const { author, date, text } = req.body
  // TODO: create note
});

app.delete('/api/notes/:id', (req, res) => {  
  const id = parseInt(req.params.id)
  // TODO: find and delete note by id
});

app.put('/api/notes/:id', (req, res) => {  
  const id = parseInt(req.params.id)
  const { author, date, text } = req.body
  // TODO: find and update note by id
});

app.listen(3000, () => {  
  console.log('Server is up on port 3000');
});