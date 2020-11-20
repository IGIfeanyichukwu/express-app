const moment = require('moment');

// creates a simple middleware logger function
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
	next();
}



module.exports = logger;