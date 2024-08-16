const express = require("express")
const router = express.Router()
const auctionroom = require("../controllers/auctionroom")

router.get("/:id" ,auctionroom )
module.exports=router