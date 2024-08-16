const express = require("express")
const router = express.Router()
const product = require("../controllers/products")

router.get("/" ,product )
module.exports=router