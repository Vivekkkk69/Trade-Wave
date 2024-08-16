const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({

    filter:String,
    searchinput:String,
    description:String,
    price:String,
});

const Search = mongoose.model("search",searchSchema);

module.exports = Search;