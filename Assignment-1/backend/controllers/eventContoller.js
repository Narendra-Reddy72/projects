const Event = require('../models/eventmodel');

exports. createEvent = async(req,res) => {
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

exports.getAllEvents = async(req,res)=>{

    try{
        const events = await Event.find({})
        res.status(201).json({
            success:true,
            data:events
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.msg
        })
    }
}

exports.updateEventById = async(req,res) => {
    try{
        const {id} = req.params;
        const { title, date, time, location,description} = req.body;
        
        const eventer = await Event.findByIdAndUpdate(id,{title, date, time, location,description})

        res.status(201).json({
            success:true,
            data:eventer
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.msg
        })
    }
}

exports.softDeleteEventById = async(req,res) => {
    try{
        const {id} = req.params;

        const soft = await Event.findByIdAndUpdate(id)
        
        isDeleted = true;
        await soft.save()

        res.status(201).json({
            success:true,
            data:soft
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.msg
        })
    }
}

