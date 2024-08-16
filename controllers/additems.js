const auctionmodel = require("../models/auctionmodel")

async function additems (req , res) {
    const items = [];

    for (let i = 1; i <= 5; i++) {
        const item = {
            url: req.body['url' + i],
            name:req.body['name' + i],
            description: req.body['description' + i],
            maxprice: req.body['maxprice' + i]
        };
        items.push(item);
    }

    // Save items to the database
    await auctionmodel.insertMany(items);
    res.redirect("/adminpage")
}

module.exports=additems