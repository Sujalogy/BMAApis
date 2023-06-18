const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    address : {type : String, required : true},
    district : {type : String, required : true},
    pincode : {type : Number, required : true},
    country : {type : String, required : true},
    userID : {type : String}
})

const AddressModel = mongoose.model("address", addressSchema);

module.exports = {
    AddressModel
}