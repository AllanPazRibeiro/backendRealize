const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
	useUnifiedTopology: true
});

const db = mongoose.connection;
  
db.on('connected', () => {
	console.log('Mongoose default connection is open');
});

db.on('error', err => {
	console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
	console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
	db.close(() => {
		console.log(
		'Mongoose default connection is disconnected due to application termination'
		);
		process.exit(0);
	});
});

// Load models
const Clients = require('./models/clients');

app.use(bodyParser.json())
// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const clientsRoutes = require('./routes/clients-routes');
app.use('/clients', clientsRoutes);

module.exports = app;