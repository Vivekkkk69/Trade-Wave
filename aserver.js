const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://0.0.0.0:27017/project");
app.use(express.static("public"));
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const searchRoutes = require("./routes/searchRoutes");

const buyermodel =  require("./models/buyermodel")
const sellermodel =  require("./models/sellermodel")
const adminmodel = require("./models/adminmodel")
const itemmodel=require("./models/itemmodel")
const ordermodel = require("./models/ordermodel")
const auctionmodel =  require("./models/auctionmodel")

 
app.use('/search',require("./routes/search"));
app.use("/order" ,require("./routes/orderroute") );
app.get("/commission", function (req , res) {res.sendFile(__dirname+"/commission.html")})
app.get("/payment", function (req , res) {res.sendFile(__dirname+"/payment.html")})
app.use("/marketing", require("./routes/marketing"))
app.get("/", function (req , res) {res.render("main")})
app.get("/seller", function (req , res) {res.sendFile(__dirname+"/seller.html")})
app.get("/aboutus", function (req , res) {res.sendFile(__dirname+"/aboutus.html")})
app.get("/contact", function (req , res) {res.sendFile(__dirname+"/contact.html")})
app.get("/signup", function (req , res) {res.sendFile(__dirname+"/expermsignup.html")})
app.get("/sell", function (req , res) {res.sendFile(__dirname+"/sell.html")})
app.use("/login", require("./routes/login"))
app.use("/buyerlogin",require("./routes/buyerlogin"))
app.use("/sellerlogin",require("./routes/sellerlogin"))
app.use("/adminlogin",require("./routes/adminlogin") )
app.use("/adminpage",require("./routes/adminpageget") )
app.get("/searchResults", function (req , res) {
    res.sendFile(__dirname+"/searchResults.ejs")    
    })
app.use("/buyer",require("./routes/buyerroute"))
app.use("/auction", require("./routes/auctionroute"))
app.use("/auctionroom",require("./routes/auctionroom") )
app.use("/contact",require("./routes/contact") )
app.use("/aboutus",require("./routes/about"))
app.use("/2",require("./routes/2") )
app.use("/products", require("./routes/product"));
app.use("/signup", require("./routes/signup"));
app.use("/sellersignup", require("./routes/sellersignup"));
app.use("/item",require("./routes/itempage") );
app.use("/orders", require("./controllers/orderspage"));
app.use("/additems" ,require("./routes/additems"))

app.listen(3000, (req  , res)=>{
    console.log("Running on 3000")
})
// app.listen(5000, function (req  , res) {
// })

