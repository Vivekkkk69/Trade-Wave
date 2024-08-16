const itemodel=require("../models/itemmodel") 
function get2(req , res) {
    res.render("2");
}
function post2(req , res) {
    const newItem = new itemodel({
        Brand: req.body.brand,
        Model: req.body.model,
        Price: req.body.price,
        Year_ofBuy: req.body.year,
        Description: req.body.description,
        url: req.body.photos, // Assuming you're storing URL of the photos
        itemType:req.body.itemType
    });

    newItem.save()
    res.redirect("/products")
}
module.exports={get2 , post2}