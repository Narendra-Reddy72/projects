const express =require('express');
const router = express.router();

const Events = require('../../controllers/eventContoller')

router.post('/create',Events.createEvents);
router.get('/fetch',Events.getAllEvents);
router.put('/update/:id',Events.softDeleteEventById);
router.put('/delete/:id',Events.softDeleteEventById);
