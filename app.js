// app.js 

// require node modules & load controllers
var express = require ('express'),

		app = express();

//require js methods

// set view engine to ejs
app.set('view engine', 'ejs');

app.get("/", function(req,res) {
	res.render('index');
})

app.get("/searchMap", function(req,res) {
	res.render('showLocation');
})

app.get("/directions", function(req,res) {
	res.render('directions');
})

app.listen(3000, function (){
	console.log("Visit localhost:3000")
});