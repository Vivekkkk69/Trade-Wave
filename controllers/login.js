
const buyermodel = require("../models/buyermodel")
const sellermodel = require("../models/sellermodel")

function loginget (req , res) {
    res.render("expermlogin")
}

function buyerlogin(req , res) {
    var email = req.body.email;
    var pass = req.body.password;
    
    buyermodel.find().then((arr)=>{
        for (let i = 0; i < arr.length; i++) {
           if (arr[i].email==email) {
            if (arr[i].password==pass) {
                res.redirect("/buyer");
            } else{
                res.send("wrong pass")
            }
           }
        }
    })
}
function sellerlogin(req , res) {
    var email = req.body.email;
    var pass = req.body.pass;
    
    sellermodel.find().then((arr)=>{
        for (let i = 0; i < arr.length; i++) {
           if (arr[i].email==email) {
            if (arr[i].password==pass) {
                res.redirect("/seller");
            } else{
                res.send("wrong pass")
            }
           }
        }
    })
}
module.exports={loginget , buyerlogin , sellerlogin}