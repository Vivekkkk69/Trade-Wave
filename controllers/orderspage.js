const ordermodel= require("../models/ordermodel")
async function orderspage (req , res) {
    try {
        // Retrieve all orders from the database
        const orders = await ordermodel.find({});
        
        // Render the orders.html file and pass orders data to it
        res.render('orders', { orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports=orderspage