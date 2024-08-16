const itemodel = require("../models/itemmodel");
async function search(req, res) {
  try {
    const { itemType, model } = req.query;
    const searchQuery = {};
    if (itemType) searchQuery.itemType = itemType; 
    if (model) searchQuery.Model = model;
    // Call the searchProducts function from the model to fetch filtered products
    const products = await itemodel.find(searchQuery);

    // Render the search results page with the filtered products
    res.render("searchResults", { products: products });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in search:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = search;
