const express =require('express');
const router = express.router();

const Users = require('../../controllers/userController')
const {secure,access} = require('../middleware/auth')
router.post('/create',Users.createUser);
router.get('/fetch',Users.getAllUsers);
router.put('/update/:id',secure,access('user'),Users.updateUserById);
router.put('/delete/:id',Users.softDeleteEventById);
router.post('/login',secure,Users.loginUser)
