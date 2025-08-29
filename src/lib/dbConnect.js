import mongoose from "mongoose";
const connection={}
async function dbConnect(){
    try {
        if(connection.isConnected){
            console.log("Alredy connected to database");
            return;
        }
        const db=await mongoose.connect(process.env.MONGODB_URI || '',{})
        connection.isConnected=db.connections[0].readyState
        console.log("DB connected Successfully")
    } catch (error) {
        console.log("Database Connection Failed",error)
        process.exit(1)
    }
}
export default dbConnect