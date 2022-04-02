
const mongoose = require("mongoose");

const OurProductSchema = mongoose.Schema({
    OurProductId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "minimalistalldatas",
        required : true
    }
});



const OurProduct1 = mongoose.model("minimalistalldata", OurProductSchema);

module.exports = OurProduct1;