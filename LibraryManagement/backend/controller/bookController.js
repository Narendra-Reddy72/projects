const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ success: true, data: books });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        res.status(200).json({ success: true, data: book });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.createBook = async (req, res) => {
    const { title, author, isbn, publicationDate, genre, coverImage, copiesAvailable } = req.body;

    try {
        const newBook = new Book({ title, author, isbn, publicationDate, genre, coverImage, copiesAvailable });
        await newBook.save();
        res.status(201).json({ success: true, data: newBook });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.updateBookById = async (req, res) => {
    const { id } = req.params;
    const { title, author, isbn, publicationDate, genre, coverImage, copiesAvailable } = req.body;

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, isbn, publicationDate, genre, coverImage, copiesAvailable },
            { new: true, runValidators: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        res.status(200).json({ success: true, data: updatedBook });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.deleteBookById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        res.status(200).json({ success: true, data: deletedBook });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
