var express = require("express");
var getRouter = express.Router();

getRouter.route("/")	
	.get(function (req,res, next){
	req.horse = true;
	res.send(req.horse);
})
.post(function(req,res){
	req.horse = true;
	res.send(req.horse);
	res.send("this worked as well!")
});

module.exports = getRouter;