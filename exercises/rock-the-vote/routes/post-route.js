var express = require("express");
var postRoute = express.Router();
var Post = require("../models/post-schema");


postRoute

    .get("/", function(req,res){
        Post.find(req.query, function(err, posts){
            res.send(posts)
        })

    })
    .post("/", function (req,res){
        newPost = new Post(req.body);
        newPost.save(function(err,savedPost){
            res.send(savedPost);
        })

    })
    .delete("/:id", function(req,res){
        Post.findByIdAndRemove(req.params.id,function(err,deletedPost){
            res.send(deletedPost);
        })
    })
    .put("/:id",function(req,res){
        Post.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err, editedPost){
            res.send(editedPost);
        })
    })

    module.exports = postRoute;