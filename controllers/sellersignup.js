const sellermodel=require("../models/sellermodel")
function sellersignup(req, res) {
    console.log(req.body);
    const a = new sellermodel({
        email: req.body.email,
        password: req.body.pass
    });
    a.save();
    res.redirect("/login");
}

module.exports=sellersignup