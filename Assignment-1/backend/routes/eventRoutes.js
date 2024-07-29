const express =require('express');
const router = express.Router();

const Events = require('../controllers/eventContoller')

router.post('/createEvent',Events.createEvent);
router.get('/readEvent',Events.getAllEvents);
router.put('/updateEvent/:event_id',Events.softDeleteEventById);
router.put('/deleteEvent/:id',Events.softDeleteEventById);

module.exports = router;