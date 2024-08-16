const express = require("express")
const router = express.Router()
const {buyerlogin} = require("../controllers/login")



router.post("/" , buyerlogin)
module.exports=router