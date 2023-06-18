const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    author : {type : String, required : true},
    title : {type : String, required : true},
    truncatedTitle : {type : String, required : true},
    description : {type : String, required : true},
    rating : {type : Number, required : true},
    price : {type : Number, required : true},
    category : {type : String, required : true},
    image : {type : String,required : true},
    adminID : {type : String}
})

const BookModel = mongoose.model("book", bookSchema);

module.exports = {
    BookModel
}