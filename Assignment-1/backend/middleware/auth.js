const jwt = require('jsonwebtoken');

const key = 'protect';

const secure = async(req,res,next) =>{
    try{

        if(req.headers.authorization.startsWith('Bearer','')){
            token = req.headers.authorization.split( ' ' )[1];
            const decrypt = jwt.verify(token,key)
            req.user = decrypt
            next();
            res.status(201).json({
                success:true,
                token:token,
                data:secure
            })
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