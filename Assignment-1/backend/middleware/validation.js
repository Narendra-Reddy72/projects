const joi = require('joi');
const { schema } = require('../../models/eventmodel');

const  validate= (schema)=>(req,res,next)=>{
        const{error} = schema.validate(req.body)
        
        if(error){
            res.status(404).json({
                success:false,
                message:err.msg
            })
        }else{
            next();
        }
}
module.exports={validate};