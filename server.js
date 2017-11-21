var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

var hbs = require("express-handlebars");

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller");

app.use("/", routes);

app.listen(port);