const express = require("express")
const router = express.Router()
const {adminloginget  ,adminloginpost} = require("../controllers/adminlogin")

router.get("/",adminloginget)
router.post("/" , adminloginpost)
module.exports=router