const express = require('express');

const app = express();

//create a route
app.get('/', (req, res) => {
	res.send('<h1>Hello Express</h1>');
})

const PORT = process.env.PORT || 5000; //normally this should be in a separate config file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

