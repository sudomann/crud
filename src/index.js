import 'dotenv/config';
import express from 'express';
import cors from 'cors'


// .env file usage sample
//console.log(process.env.MY_SECRET);

const app = express();

app.use(cors());

let courses = {
  1: {
    id: '1',
    courseName: 'Fundamentals of Computer Networking',
  },
  2: {
    id: '2',
    courseName: 'Software Engineering',
  },
};

let notes = {
  1: {
    id: '1',
    text: 'Hello World',
    courseId: '1',
  },
  2: {
    id: '2',
    text: 'Hello World Again',
    courseId: '2',
  },
};

app.get('/courses', (req, res) => {
  return res.send(Object.values(courses));
});

app.get('/courses/:courseId', (req, res) => {
  return res.send(courses[req.params.courseId]);
});

app.get('/notes', (req, res) => {
  return res.send(Object.values(notes));
});

app.get('/notes/:noteId', (req, res) => {
  return res.send(notes[req.params.noteId]);
});


app.listen(process.env.PORT, () =>
  console.log(`ExpressJS running at port ${process.env.PORT}`),
);