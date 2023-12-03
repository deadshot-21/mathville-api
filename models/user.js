const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
    uuid:{
        type:String,
        unique:true
    },
    // name:{
    //    type:String,
    //    trim:true
    // },
    email:{
       type:String,
       unique:true,
       trim:true,
       lowercase:true,
       validate(value){
           if(!validator.isEmail(value)){
               throw new Error('Enter a valid email address')
           }
       }
    },
    password:{
        type:String,
        trim:true,
        minLength:6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password')
            }
        }
    },
    question_set_ids:[{
        type:String
    }],
    

})

userSchema.statics.findByCredentials=async(email,password)=>{
    const user=await User.findOne({email})

    if(!user){
        throw new Error('Invalid Email')
    }

    const isMatch= await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('Invalid Password')
    }
    return user
}

//Hashing the plain text before saving
userSchema.pre('save',async function(next){
    const user=this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)

    }
    // console.log('just before saving')

    next()
})

const User=mongoose.model('User',userSchema)
module.exports=User