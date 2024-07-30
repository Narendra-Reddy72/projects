const express =require('express');
const router = express.Router();

const Events = require('../controllers/eventContoller')

router.post('/createEvent', Events.createEvent);
router.get('/readEvent/:event_id', Events.getEventById);
router.delete('/deleteEvent/:id', Events.deleteEventById);
router.get('/getAllEvents', Events.getAllEvents)
router.put('/updateEvent/:event_id',Events.updateEventById)

module.exports = router;