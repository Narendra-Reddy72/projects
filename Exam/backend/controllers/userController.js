const User = require('../models/usermodel');
const jwt = require('jsonwebtoken')
const key = 'protect'
 
const generateToken = async(id,role)=>{
    return jwt.sign({id:id,role:role},key,{expiresIN:'24h'})
}
exports. createUser = async(req,res) => {
    try{
        const { name,email,role,password } = req.body;

        const user = new User({name,email,role,password})

        await user.save();
         generateToken = await User.find(user._id,user.role)
        res.status(201).json({
            success:true,
            data:user,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.msg
        })
    }
}

exports.loginUser = async(req,res) =>{
    try{
        const { email,password } = req.body;

        const user = new User.findOne({email})

        if(user && (await User.matchPassword(password))){
            return next();
        }
        generateToken = await User.find(user._id,user.role)
        res.status(201).json({
            success:true,
            data:user
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.msg
        })
    }
}


exports.getAllUsers = async(req,res)=>{

    try{
        const users = await Event.find({})
        res.status(201).json({
            success:true,
            data:users
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.msg
        })
    }
}

exports.updateUserById = async(req,res) => {
    try{
        const {id} = req.params;
        const { name,email,role,password } = req.body;
        
        const eventer = await Event.findByIdAndUpdate(id,{name,email,role,password})

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

        const soft = await User.findByIdAndUpdate(id)
        
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

