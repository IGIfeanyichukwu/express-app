const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

/*>>> MIDDLEWARE <<<*/
// Initialize middleware
// app.use(logger);

// HANDLEBARS MIDDLEWARE (TEMPLATE ENGINE)
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Initialize Body Parser Middleware (for parsing application/json)
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// Homepage Route (FOR HANDLEBARS TEMPLATE ENGINES)
app.get('/', (req, res) => res.render('index', {
	title: 'Member App',
	members
}));



//CREATE A ROUTE
/*app.get('/', (req, res) => {
	// res.send('<h1>Hello Express.js</h1>');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

// SET STATIC FOLDER for static files
// app.use(express.static(path.join(__dirname, 'public')));

// MEMBERS API ROUTES
app.use('/api/members', require('./routes/api/member'));

const PORT = process.env.PORT || 5000; //normally this should be in a separate config file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

