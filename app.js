
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
// var dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
var dev_db_url = 'mongodb://abdelrhmanakram:abdelrhmanakram1@ds125211.mlab.com:25211/netflix';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/products', product);
var port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
