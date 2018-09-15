const express = require('express');
const bodyParser = require('body-parser');
const company = require('./routes/company.route');
const customer = require('./routes/customer.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:p123456@ds157762.mlab.com:57762/poob', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/customer', customer);
app.use('/company', company);

port = process.env.PORT || 5000;
   app.listen(port, () => console.log(`Listening on port ${port}`));