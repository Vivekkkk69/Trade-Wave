const buyermodel=require("../models/buyermodel")
function signup (req, res) {
    console.log(req.body);
    const a = new buyermodel({
        email: req.body.email,
        password: req.body.password
    });
    console.log(a);
    a.save();
    res.redirect("/login");
}

module.exports=signup