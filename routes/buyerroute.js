const express = require("express")
const router = express.Router()
const buyer = require("../controllers/buyerget")

router.get("/" , buyer)
module.exports=router