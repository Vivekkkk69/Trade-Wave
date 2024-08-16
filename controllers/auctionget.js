const auctionmodel = require("../models/auctionmodel")
function auctionget (req , res) {
    auctionmodel.find().then((arr)=>{
        res.render("auction",{items:arr})
    })
    }

module.exports = auctionget