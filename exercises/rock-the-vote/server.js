var express = require("express");
var app = express();
var postRoute = require("./routes/post-route.js")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost/posts", function(err){
    if(err) throw err;
    console.log("Connected to DB")
})

app.use("/posts", postRoute);

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})