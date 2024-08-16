const express = require("express")
const router = express.Router()
const itempage = require("../controllers/itemid")
const itemodel=require("../models/itemmodel")

router.get("/:id" , itempage)
module.exports=router