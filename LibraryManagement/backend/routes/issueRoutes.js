const express = require('express');
const router = express.Router();
const Books = require('../controller/issueController');

router.post('/issueBook/:id', Books.issueBook);
router.post('/returnBook/:id', Books.returnBook);
router.get('/getAllissues', Books.getAllissues)
router.get('/search/:query',Books.searchBook)

module.exports = router;
