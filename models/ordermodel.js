const mongoose = require("mongoose");

const orderschema = mongoose.Schema({
    Brand:String,
    Model:String,
    Type:String,
    Price:Number,
    Year_ofBuy:String,
    Description:String,
    url:String,
    itemType:String,
})
const ordermodel = mongoose.model("orders" , orderschema)

module.exports=ordermodel