const express = require("express")
const router = express.Router()
const sellersignup = require("../controllers/sellersignup")
router.post("/" , sellersignup)
module.exports=router