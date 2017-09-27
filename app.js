var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

// tell express to accept JSON values
app.use(bodyParser.json());
// tell express to accept url encoded values
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function() {
    console.log("app running on port.", server.address().port);
});