var express = require("express");
var app = express();
var port = 3000;
var fruit = [
	{
		"type": "banana",
		"color": "yellow",
		"brand": "chiquita",
		"price": 0.5
	},
	{
		"type": "apple",
		"color": "yellow",
		"brand": "gala",
		"price": 0.5
	},
	{
		"type": "orange",
		"brand": "nava",
		"price": 0.5
	},

]

app.get("/fruit", function (req, res) {

	foundItems = [];

	for (var i = 0; i < fruit.length; i++) {

		var haveFoundMatch = true;

		for (var key in req.query) {
			if (req.query[key] != fruit[i][key]) {
				haveFoundMatch = false;
			}
		}
		
		if (haveFoundMatch === true) {
			foundItems.push(fruit[i]);
		}
	}
	
	res.send(foundItems);
	
})



app.listen(port, function () {
	console.log(`Listening on port ${port}`)
})
