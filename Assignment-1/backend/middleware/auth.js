const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../env/env');

const secure = async(req,res,next) =>{
    try{

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
            const decrypt = jwt.verify(token,SECRET_KEY)
            req.user = decrypt
            next();
        }else{
            res.status(401).json({
                success:false,
                message:"No token provided"
            })
        }
    }catch(err){
        res.status(401).json({
            success:false,
            message:"Token is not found"
    })
    }
    
}

const access = (role)=>{
    return (req,res,next)=>{
        if(req.user && req.user.role==role){
            next();

        }else{
            res.status(403).json({
                success:false,
                message:"The user is not specified this API"
        })
       
    }
}}
module.exports = {secure,access}