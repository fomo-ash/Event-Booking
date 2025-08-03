const router = require('express').Router()
const {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
} = require('../controller/eventcontroller')

const { protect, adminOnly } = require('../middleware/authmiddleware')

router.get('/', protect, getEvents)
router.post('/', protect, adminOnly, addEvent)
router.put('/:id', protect, adminOnly, updateEvent)
router.delete('/:id', protect, adminOnly, deleteEvent);

module.exports=router;