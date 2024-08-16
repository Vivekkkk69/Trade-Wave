const auctionmodel = require("../models/auctionmodel")

function auctionroom(req , res) {
    auctionmodel.findOne({_id:req.params.id}).then((item)=>{
     res.render("auctionroom",{item:item})
    })
    }

module.exports=auctionroom