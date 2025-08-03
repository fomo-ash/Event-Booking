
const Booking= require('../models/Booking')
const Event = require('../models/Event')

exports.bookEvent = async(req,res)=>{
    try{
        const event= await Event.findById(req.params.eventId);
        if(!event){
            return res.status(404).json({message:'No event'})
        }

        if(event.booked>=event.capacity){
            return res.status(400).json({Error:'Booking full, try next time'})
        }

     const existingBooking = await Booking.findOne({
             user: req.user._id,
             event: event._id
    });

    if (existingBooking) {
      return res.status(400).json({ message: 'You have already booked this event' });
    }

    const booking = await Booking.create({
        user: req.user._id,
        event: event._id
    })

    event.booked+=1;
    await event.save()

    res.status(201).json({ message: 'Booking successful', booking });

    }
    catch(err){
        res.status(500).json({message:'Booking not done', error:err.message})
    }
}

exports.cancelBooking= async(req,res)=>{
    try{
        const booking= await Booking.findOneAndDelete({
             user: req.user._id,
             event: req.params.eventId
        })
        if(!booking){
           return  res.status(404).json({message:'No such booking exists'})
        }

        const event= await Event.findById(req.params.eventId)
        if(event && event.booked>0){
            event.booked -= 1;
            await event.save()
        }

        res.json({ message: 'Booking cancelled successfully' });
    }
    catch(err){
         res.status(500).json({ message: 'Error cancelling booking', error: err.message });

    }
}
