const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    copiesAvailable: {
        type: Number,
        required: true,
        min: 0
    },
    genre: {
        type: String,
        required: false
    },
    coverImage: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Book', bookSchema);
