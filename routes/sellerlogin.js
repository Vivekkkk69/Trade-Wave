const express = require("express")
const router = express.Router()
const {sellerlogin} = require("../controllers/login")

router.post("/" , sellerlogin)
module.exports=router