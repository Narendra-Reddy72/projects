const joi = require('joi');
const { schema } = require('../../models/eventmodel');

const  createValidationSchema= (schema)=>{
    return (req,res,next)=>{
        const{error} = schema.validate(req.body)
        
        if(!error){
            res.status(404).json({
                success:false,
                message:err.msg
            })
        }else{
            return next();
        }
    }
    
}
module.exports={createValidationSchema}