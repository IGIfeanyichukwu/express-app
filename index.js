const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// Initialize middleware
// app.use(logger);

// GET ALL MEMBERS
app.get('/api/members', (req, res) => {
	res.json(members);
})


// GET A SINGLE MEMBER
app.get('/api/members/:id', (req, res) => {
	/*NB: req.params.id holds the id passed to the url*/
	const found = members.some(member => member.id === parseInt(req.params.id));

	if(found) {
		res.json(members.filter(member => member.id === parseInt(req.params.id)));
	} else {
		res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
	}

});


//create a route
/*app.get('/', (req, res) => {
	// res.send('<h1>Hello Express.js</h1>');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

// Set static folder for static files
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000; //normally this should be in a separate config file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

