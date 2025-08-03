const router = require('express').Router();
const { protect } = require('../middleware/authmiddleware');
const { bookEvent, cancelBooking } = require('../controller/bookingcontroller');

router.post('/:eventId/book', protect, bookEvent);
router.delete('/:eventId/cancel', protect, cancelBooking);

module.exports = router;
