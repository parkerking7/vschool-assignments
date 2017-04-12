var express = require("express");
var app = express();
var postRoute = require("./routes/post-route.js")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/posts", function(err){
    if(err) throw err;
    console.log("Connected to DB")
})

app.use("/posts", postRoute);

app.listen(3000, function(){
    console.log("server is running on 3000");
})