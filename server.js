var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');

var routes = require('./routes/index');
var quote = require('./routes/api/quote');

var app = express();
var done = false;

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/app'));

app.use('/', routes);
app.use('/api/quote', quote);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
});