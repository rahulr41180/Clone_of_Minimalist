
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const CheckoutSchema = new mongoose.Schema({
    fullName : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    MobileNumber : {type : Number, required : true},
    HouseNo : {type : Number, required : true},
    ApartName : {type : String, required : true},
    Street : {type : String, required : true},
    LandMark : {type : String, required : true},
    CityName : {type : String, required : true},
    Area : {type : String, required : true},
    PinCode : {type : Number, required : true}
},  
{   
    timestamps : true,
    versionKey : false
});

const Checkout1 = mongoose.model("checout", CheckoutSchema);

module.exports = Checkout1;