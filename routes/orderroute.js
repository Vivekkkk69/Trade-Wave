const express = require("express")
const router = express.Router()
const order = require("../controllers/orderget")

router.get("/:id" ,order )
module.exports=router