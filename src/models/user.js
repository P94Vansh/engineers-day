import mongoose,{Schema} from 'mongoose'
const userSchema=new Schema({
    firstname:{
        type:String,
        required:[true,"Please provide the first name"],
    },
    lastname:{
        type:String,
        required:[true,"Please provide the last name"],
    },
    year:{
        type:String,
        required:[true,"Please provide the year"]
    },
    semester:{
        type:String,
        required:[true,"Please provide the semester"]
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:[true,"Please provide the gender"]
    },
    college:{
        type:String,
        required:[true,"Please provide the college"]
    },
    otherCollege:{
        type:String
    },
    email:{
        type:String,
        trim:true,
        required:[true,"Please provide the email"]
    },
    phone:{
        type:String,
        required:[true,"Please provide the mobile number"]
    },
    event:{
        type:String,
        required:[true,"Please provide the event"]
    },
    eventSpectrum:{
        type:String
    },
    eventVartalap:{
        type:String
    },
    teamSize:{
        type:String,
        required:[true,"Please provide the Team Number"]
    },
    teamMemberGameId1:{
        type:String
    },
    teamMember2:{
        type:String
    },
    teamMember3:{
        type:String
    },
    teamMember4:{
        type:String
    },
    teamMember5:{
        type:String
    },
    teamMember6:{
        type:String
    },
    teamMember7:{
        type:String
    },
    teamMember8:{
        type:String
    },
    teamMemberGameId1:{
        type:String
    },
    teamMemberGameId2:{
        type:String
    },
    teamMemberGameId3:{
        type:String
    },
    teamMemberGameId4:{
        type:String
    },
    transition_amount:{
        type:String,
        required:[true,"Transaction amount is required"]
    },
    transaction_id:{
        type:String,
        unique:true,
        required:[true,"Transaction id is required"]
    },
    upi_id:{
        type:String,
        required:[true,"UPI Id is required"]
    },
    isVerified:{
        type:Boolean,
        required:true,
        default:false
    }
})
const UserModel=(mongoose.models.User)|| mongoose.model("User",userSchema)
export default UserModel