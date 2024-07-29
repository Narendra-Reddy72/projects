const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    name : {type:String,required:true},

    email: {type: String,required:true,unique:true},

    role:{type: String,required:true,enum:['user','admin']},

    password:{type: String,required:true},
    
    isDeleted: {type:Boolean,default:false},
})

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next();
});

userSchema.methods.matchPassword = async function(enterpassword){
    await bcrypt.compare(enterpassword,this.password)
};

module.exports = mongoose.model('User',userSchema);