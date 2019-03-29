import 'dotenv/config';
import express from 'express';



// .env file usage sample
//console.log(process.env.MY_SECRET);

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () =>
  console.log('ExpressJS running at port 3000'),
);