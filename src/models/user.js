import mongoose,{Schema} from 'mongoose'
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    universityName:{
        type:String,
        required:[true,"University Name is required"]
    },
    collegeName:{
        type:String,
        enum:['Uttaranchal Insititute of Technology','Other']
    },
    enrollNumber:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:String,
        require:[true,"Mobile Number is required"]
    },
    alternateNumber:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        match:[/.+\@.+\..+/,'Please use a valid email address']
    },
    numberOfParticipants:{
        type:String,
        required:[true,'Number of participants are required']
    }
})
const UserModel=(mongoose.models.User)|| mongoose.model("User",userSchema)
export default UserModel