//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

// call express to set up server
var app = express();
var PORT = process.env.PORT || 3000;

//Serve static content for the app from the "public" directory in the application directory.
app.use (express.static("public"));

//setting up middleware to parse json 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//call handlebars to set up template
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// calls on the routes from the controllers page
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});