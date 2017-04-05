var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");
var app = express();

var port = 3000;

app.use(bodyParser.json());

var bounties = []

app.get("/bounty", function (req, res){
	res.send(bounties);
})

app.post("/bounty", function (req,res){
	var newBounty = req.body;
	newBounty._id = uuid();
	bounties.push(newBounty);
	res.send(`Bounty ${newBounty.firstName} has been sent!`)
})
app.listen(port, function(){
	console.log("you are listening on port: " + port);
});

//var bounty = {
//	firstName:"@",
//	lastName:"@",
//	living: "@",
//	bountyAmount: "@",
//	type: "@",
//	id: uuidV4()
//}