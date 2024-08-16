const express = require("express")
const router = express.Router()
const orders = require("../controllers/orderspage")

router.get("/" , orders)
module.exports=router