var express = require("express");
var app = express();
var port = 3000;

app.use("/new", require("./getReq"));



app.listen(port, function () {
	console.log("you are listening on port: " + port);
});

