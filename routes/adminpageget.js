const express = require("express")
const router = express.Router()
const  adminpageget= require("../controllers/adminpage")

router.get("/" , adminpageget)
module.exports=router