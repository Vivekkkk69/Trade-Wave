const express = require("express")
const router = express.Router()
const {loginget} = require("../controllers/login")

router.get("/" , loginget)
module.exports=router