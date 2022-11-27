var express = require("express"); //using the express framework
;
var movieController = require('./controllers/movieController'); // set movieController to
var app = express(); // set variable app to be an instance of express framework. From now on we can use app

app.use(express.static("./public")); // static files are to be served from the public folder
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming json object
// In time to come we will need to accept new or edited comments from user

app.route('/movies').get(movieController.getAllMovies); // activate the getAllMovies method

app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console
