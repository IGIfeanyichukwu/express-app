const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

/*>>> MIDDLEWARE <<<*/
// Initialize middleware
// app.use(logger);

// Initialize Body Parser Middleware (for parsing application/json)
app.use(express.json());
app.use(express.urlencoded({ extended: false}))


//create a route
/*app.get('/', (req, res) => {
	// res.send('<h1>Hello Express.js</h1>');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

// Set static folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// MEMBERS API ROUTES
app.use('/api/members', require('./routes/api/member'));

const PORT = process.env.PORT || 5000; //normally this should be in a separate config file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

