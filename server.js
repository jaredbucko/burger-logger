var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// serve content for the app from the "public" directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

// start server
app.listen(PORT, function() {
  // log when server has started
  console.log("Server listening on: http://localhost:" + PORT);
});