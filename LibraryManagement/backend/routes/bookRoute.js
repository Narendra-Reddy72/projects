const express = require('express');
const router = express.Router();
const Books = require('../controller/bookController');

router.get('/books', Books.getAllBooks);
router.get('/books/:id', Books.getBookById);
router.post('/create', Books.createBook);
router.put('/update/:id', Books.updateBookById);
router.delete('/delete/:id', Books.deleteBookById);

module.exports = router;
