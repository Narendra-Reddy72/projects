const Event = require('../models/eventmodel');

exports.createEvent = async(req,res) => {
    try{

        const { title, date, time, location,description} = req.body;

        const event = new Event({title, date, time, location,description})

        await event.save();

        res.status(201).json({
            success:true,
            data:event
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.msg
        })
    }
}

exports.getAllEvents= async(req,res)=>{
        try{
            const listevents = await Event.find({})
            res.status(201).json({
                success:true,
                data:listevents
            })
        }catch(err){
            res.status(500).json({
                success:false,
                message:err.msg
            })
        }
    }
    exports.getEventById = async (req, res) => {
        const { event_id } = req.params;
        
        try {

          const event = await Event.findById(event_id);
      
          res.status(200).json({
            success: true,
            data: event
          });
        } catch (err) {

          res.status(500).json({
            success: false,
            message: err.message
          });
        }
      }
      
      exports.updateEventById = async (req, res) => {
        const { event_id } = req.params;
        const { title, date, time, location, description } = req.body;
      
        try {
          const updatedEvent = await Event.findByIdAndUpdate(
            event_id,
            { title, date, time, location, description },
            { new: true } 
          );
          res.status(200).json({
            success: true,
            data: updatedEvent,
          });
        } catch (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          });
        }
      };
      
exports.deleteEventById = async(req,res) => {
    try{
        const {id} = req.params;

        const event = await Event.findById(id)

        event.isDeleted = true;
        await event.save()

        res.status(201).json({
            success:true,
            data:event
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
