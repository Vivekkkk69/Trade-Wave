const express = require("express")
const router = express.Router()
const additems = require("../controllers/additems")

router.post("/" , additems)
module.exports=router