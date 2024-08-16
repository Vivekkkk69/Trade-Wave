
const mongoose = require("mongoose");

const itemschema = mongoose.Schema({
    Brand:String,
    Model:String,
    Price:Number,
    Year_ofBuy:String,
    Description:String,
    url:String,
    itemType:String,
})
const itemodel = mongoose.model("items" , itemschema)

module.exports=itemodel