const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

// serve content for the app from the "public" directory
app.use(express.static(__dirname + '/public'));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgersController.js");

app.use(routes);

// start server
app.listen(PORT, function() {
  // log when server has started
  console.log("Server listening on PORT: " + PORT);
});