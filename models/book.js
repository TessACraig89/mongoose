const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
     title: String,
     author: String,
     image: String,
     releaseDate: String
    // you should fill the rest of this in
 });

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
