const express =require('express');
const router = express.Router();

const Users = require('../controllers/userController');
const {secure,access} = require('../middleware/auth')
// const { createValidationSchema,loginValidationSchema} = require('../middleware/validationSchema');
// const { validate } = require('../models/usermodel');


router.post('/create',Users.createUser);
router.get('/read',Users.getAllUsers);
router.put('/update/:id',secure,access('user'),Users.updateUserById);
router.delete('/delete/:id',Users.softDeleteUserById);
router.post('/login',Users.loginUser);


module.exports = router;