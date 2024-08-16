const mongoose =  require("mongoose")
const auctionschema=mongoose.Schema
({
    url:String,
    name:String,
    description:String,
    maxprice:String
})
const auctionmodel = mongoose.model("auctionitems",auctionschema)
module.exports=auctionmodel