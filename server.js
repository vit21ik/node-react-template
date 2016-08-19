require("babel-register")({
	extensions: [".jsx"]
});
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOM = require('react-dom/server');
var mustache = require('mustache');

var CounterComponent = React.createFactory(require('./src/client/app/CounterComponent'));

var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('views', './views');
 

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	var template= fs.readFileSync("./views/index.html", "utf8");
	var html = mustache.to_html(template, {
		react: ReactDOM.renderToString(CounterComponent({}))
	}); 
	res.send( html );
	res.end();
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
