const express = require('express');
const path = require('path');
const moment = require('moment');
const members = require('./Members');

const app = express();

// creates a simple middleware function
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
}

// Initialize middleware
app.use(logger);

// gets all members
app.get('/api/members', (req, res) => {
	res.json(members);
})

//create a route
/*app.get('/', (req, res) => {
	// res.send('<h1>Hello Express.js</h1>');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

// Set static folder for static files
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000; //normally this should be in a separate config file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

