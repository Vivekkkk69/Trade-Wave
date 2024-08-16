const itemodel= require("../models/itemmodel")
async function product (req , res) {
    try {
        const items = await itemodel.find();
        res.render("products", { items: items }); // Assuming you're using a templating engine like EJS or Pug
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = product