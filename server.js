var express = require('express');
var bodyParser = require('body-parser');

// Create Inistance of Express
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//Middleware that parses json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Handle Get Products
app.get('/products', function(req, res) {

	//Allow url parameter for paging
	//if no parameter then load the first page
	var page = (req.query.page) ? req.query.page : 1;

	//Send four products with Product number based on page
	res.send([
		 {"name": "Product "+(page*4-3)},
		 {"name": "Product "+(page*4-2)},
		 {"name": "Product "+(page*4-1)},
		 {"name": "Product "+(page*4)}
	 ]);

});

//Server Lives on http://localhost:6060
app.listen(6060);
