const adminmodel=require("../models/adminmodel")
function adminloginget (req , res) {
    res.render("adminlogin")
}
function adminloginpost (req , res) {
    var email = req.body.email;

    var pass = req.body.pass;
    adminmodel.find().then((arr)=>{
        for (let i = 0; i < arr.length; i++) {
           if (arr[i].email==email) {
            if (arr[i].password==pass) {
                res.redirect("/adminpage");
            } else{
                res.send("wrong pass")
            }
           }
        }
    })
}

module.exports = {adminloginget , adminloginpost}