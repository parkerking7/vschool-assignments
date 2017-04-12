var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title:String,
    description:String,
    votes:{
        type:Number,
        default:0
    },
    comments:{
        type:[String],
        default: []
    }

})



var Post = mongoose.model("Post", postSchema);

module.exports = Post;