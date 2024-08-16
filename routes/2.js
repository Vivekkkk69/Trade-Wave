const express = require("express")
const router = express.Router()
const {get2 , post2} = require("../controllers/2")

router.get("/" , get2)
router.post("/" , post2)
module.exports=router