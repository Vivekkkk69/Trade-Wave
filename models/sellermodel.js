const mongoose = require("mongoose");

const sellerschema = mongoose.Schema({
    email:String,
    password:String
})
const sellermodel = mongoose.model("sellers",sellerschema)
module.exports=sellermodel