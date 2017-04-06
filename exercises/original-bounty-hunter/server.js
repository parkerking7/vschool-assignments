var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");
var path = require("path");
var app = express();

var port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

var bounties = []

app.get("/bounty", function (req, res) {
	res.send(bounties);
})

app.delete("/bounty/:_id", function (req, res) {

	var bountyId = req.params._id;

	for (var i = 0; i < bounties.length; i++) {

		if (bountyId === bounties[i]._id) {

			return res.send(bounties.splice(i, 1));

		}
	}
})

app.put("/bounty/:_id", function (req, res) {
	var editedBounty = req.body;
	var bountyId = req.params._id;
	for (var i = 0; i < bounties.length; i++) {
		if (bountyId === bounties[i]._id) {
			for (var key in editedBounty) {
				if (bounties[i][key] !== editedBounty[key]) {
					bounties[i][key] = editedBounty[key];
				}
				
			}
		}
	}
	return res.send(editedBounty);

})

app.post("/bounty", function (req, res) {
	var newBounty = req.body;
	newBounty._id = uuid();
	bounties.push(newBounty);
	res.send(`Bounty ${newBounty.firstName} has been sent!`)
})

app.listen(port, function () {
	console.log("you are listening on port: " + port);
});
