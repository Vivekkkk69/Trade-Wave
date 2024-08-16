const express = require("express")
const router = express.Router()
const auction = require("../controllers/auctionget")

router.get("/" , auction)
module.exports=router