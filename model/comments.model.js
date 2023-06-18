const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name : {type : String , required : true},
    comments : {type : String , required : true},
    createdAt : {type : String}
})

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = {
    CommentModel
}