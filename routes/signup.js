const express = require("express")
const router = express.Router()
const signup = require("../controllers/signup")
const buyermodel=require("../models/buyermodel")
router.all("/" ,signup )
module.exports=router