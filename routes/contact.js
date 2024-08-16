const express = require("express")
const router = express.Router()
const {contact} = require("../controllers/about-contact")

router.get("/" , contact)
module.exports=router