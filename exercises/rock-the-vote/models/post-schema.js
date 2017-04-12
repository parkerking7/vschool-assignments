var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title:String,
    description:String,
    votes:Number
})



var Post = mongoose.model("Post", postSchema);

module.exports = Post;