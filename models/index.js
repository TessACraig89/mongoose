const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

//export Book model
module.exports.Book = require("./book.js");
