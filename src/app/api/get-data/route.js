import dbConnect from "@/lib/dbConnect"
import UserModel from "@/models/user"
export async function GET(req){
    const adminCookies=req.cookies.get("admin")?.value
    if(!adminCookies || adminCookies!==process.env.ADMIN_KEY){
        return Response.json({success:false,message:"Unauthorized Request"},{status:401})
    }
    try {
        await dbConnect()
        const allData=await UserModel.find({})
        return Response.json({success:true,data:allData,message:"Got all Data"},{status:200})
    } catch (error) {
        console.log(error)
        return Response.json({success:false,message:"Failed to get data"},{status:500})
    }
}