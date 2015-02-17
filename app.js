
//Include the necessary packages
// Express to create the web server and use HTTP protocol
// body-parser to parse JSON
// method-override to develop  and customize HTTP method
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");


// Configure the application
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

// To configure the routes we create the instance
var router = express.Router();

router.get('/', function(req, res){
	res.send("Hello World!");
    });


app.use(router);
app.listen(8000, function(){	
	console.log("Config-Tequila API server running on http://localhost:8000");
    });