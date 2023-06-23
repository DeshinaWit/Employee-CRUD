const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const port = 4200;
const mongoString = "mongodb+srv://codeprac:codeprac@codepracclus1.fleayoe.mongodb.net/?retryWrites=true&w=majority"
const router = require('./routes/employee-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




