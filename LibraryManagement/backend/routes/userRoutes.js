const express = require('express');
const router = express.Router();
const Users = require('../controller/userController');

router.get('/fetch', Users.getAllUsers);
router.get('/single/:id', Users.getUserById);
router.put('/update/:id', Users.updateUserById);
router.delete('/delete/:id', Users.deleteUserById);

module.exports = router;
