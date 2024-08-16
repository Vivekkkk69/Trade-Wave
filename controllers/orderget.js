const ordermodel = require("../models/ordermodel")
const itemodel = require("../models/itemmodel")
async function orderget(req , res) {
    try {
        const itemId = req.params.id;
        const item = await itemodel.findById(itemId);   
        
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        // Create a new order object
        const newOrder = new ordermodel({
            Brand: item.Brand,
            Model: item.Model,
            Price: item.Price,
            Year_ofBuy: item.Year_ofBuy,
            Description: item.Description,
            url: item.url
        });

        // Save the order
        await newOrder.save();

        res.redirect("/buyer");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports=orderget