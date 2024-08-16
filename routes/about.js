const express = require("express")
const router = express.Router()
const {about} = require("../controllers/about-contact")

router.get("/" , about)
module.exports=router