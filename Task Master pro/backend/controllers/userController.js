const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../env/env');
 
const generateToken = (id,role)=>{

    return jwt.sign({id:id,role:role}, SECRET_KEY, {expiresIn:'24h'})
}
exports.createUser = async (req, res) => {
    try {
        const { name, email, role, password } = req.body;
        const user = new User({ name, email, role, password });

        await user.save();
        const token = generateToken(user._id, user.role);

        res.status(201).json({
            success: true,
            token: token,
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};


exports.loginUser = async (req, res) => {
    const {  email, password } = req.body;
    console.log(email,password)
    try {
        const user = await User.findOne ({ email});
        if(user && (await user.matchPassword(password))){
        console.log(user,password)
            const token = generateToken(user._id, user.role);
            res.status(201).json({
                success: true,
                token: token,
                data: user,
            });
        }  
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};


exports.getAllUsers = async(req,res)=>{

    try{
        const users = await User.find({})
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
        
        const users = await User.findByIdAndUpdate(id,{name,email,role,password},{new:true})

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

exports.softDeleteUserById = async(req,res) => {
    try{
        const {id} = req.params;

        const soft = await User.findById(id)

        soft.isDeleted = true;
        soft.save();

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

