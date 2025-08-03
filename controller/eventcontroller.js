const Event = require('../models/Event')


exports.getEvents = async (req,res)=>{
    try{
        const events = await Event.find()
        res.json(events)
    }
    catch(err){
        res.status(500).json({message:'Events not loaded', error: err.message})
    }

}

exports.addEvent = async(req,res)=>{
    try{
        const event = await Event.create(req.body)
        res.status(201).json(event)
    }
    catch(err){
        res.status(400).json({message:'Invalid addition', error: err.message})
    }
}

exports.updateEvent= async(req,res)=>{


    try{
        const event= await Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!event){
        return res.status(404).json({message:'Event does not exist'})
    }
    res.json(event)
    }
    catch(err){
       res.status(400).json({ message: "Error updating event", error: err.message }); 
    }
}

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting event", error: err.message });
  }
};