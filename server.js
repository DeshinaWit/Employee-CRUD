const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EmployeeRoutes = require('./routes/employee-routes')
const port = 4200;
const mongoString = "mongodb+srv://codeprac:codeprac@codepracclus1.fleayoe.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(EmployeeRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




