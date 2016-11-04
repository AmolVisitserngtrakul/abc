var express = require('express');
var router = express.Router();
var db = require('./db.js');

router.get('/:quote', function (req, res, next) {
	db.select('Date', 'Close').table(req.params.quote).then(function (data) {
		res.json(data);
	}, function (error) {
		res.status(401).send('Something\'s wrong!');
	});
});

module.exports = router;