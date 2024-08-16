const itemodel=require("../models/itemmodel")
async function itempage (req , res) {
    try {
        const itemId = req.params.id;
        const item = await itemodel.findById(itemId);
                    res.render('item', { item })   

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports=itempage