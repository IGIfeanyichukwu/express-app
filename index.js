const express = require('express');
const path = require('path');

const app = express();

//create a route
/*app.get('/', (req, res) => {
	// res.send('<h1>Hello Express.js</h1>');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

// Set static folder for static files
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000; //normally this should be in a separate config file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

