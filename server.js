const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

require('./routes/post.routes')(app);

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to database exiting now...');
    process.exit();
  });

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({"message": "Welcome to this application."});
});

app.listen(3010, () => {
  console.log('Server is listening on port 3010.');
});