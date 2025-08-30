import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";

export async function POST(req) {
  try {
    await dbConnect();

    const data = await req.json();
    if('isVerified' in data){
      return Response.json({success:false,message:"You are not allowed to verify the user"},{status:400})
    }
    if (!data || Object.keys(data).length === 0) {
      return Response.json(
        { success: false, message: "Details are required" },
        { status: 400 }
      );
    }

    const user = new UserModel(data);
    const savedUser = await user.save();

    return Response.json(
      { success: true, message: "User saved successfully", user: savedUser },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error saving user:", error); 
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
