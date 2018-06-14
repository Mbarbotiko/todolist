var express = require("express");
var bodyParser = require("body-parser");
var path= require ("path");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))//middleware
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require("./routing/apiroutes")(app);
// require("")(app);
// var routes = require("");
// app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  