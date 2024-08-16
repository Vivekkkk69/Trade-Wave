const mongoose = require("mongoose");

const buyerschema = mongoose.Schema({
    email:String,
    password:String
   
})

const buyermodel = mongoose.model("buyers",buyerschema)
module.exports = buyermodel