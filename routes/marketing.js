const express = require("express")
const router = express.Router()
const marketing = require("../controllers/marketing")

router.get("/",marketing)
module.exports=router