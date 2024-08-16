const itemodel = require("../models/itemmodel")
// const buyerlogin = require("../models/buyermodel")
async function buyerget(req , res) {
    const items = await itemodel.find();
    // Render the 'items' view with the 'items' data
    res.render('index', { items: items });
}

module.exports=buyerget