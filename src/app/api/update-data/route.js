import UserModel from "@/models/user";
import sendMail from "@/helpers/send-mail";
import dbConnect from "@/lib/dbConnect";
export async function PATCH(req) {
    try {
        dbConnect()
        const { transactionId, isVerified, email, event, transactionAmount } = await req.json();
        if (!transactionId) {
            return Response.json({ success: false, message: "Transaction Id is not found" }, { status: false })
        }
        console.log(transactionId)
        const user = await UserModel.findOne({ transaction_id: transactionId,email:email,event:event })
        if (!user) {
            return Response.json({ success: false, message: "User not found" }, { status: 404 })
        }
        user.isVerified = isVerified
        const updatedUser = await user.save()
        if (!updatedUser) {
            return Response.json({ success: false, message: "Failed to update User" }, { status: 500 })
        }
        const subject = "Mail regarding your registration for Engineers' day at UIT"
        const body = isVerified
            ? `Dear Participant,<br><br>
We are excited to inform you that your registration for <strong>Engineers' Day at UIT</strong> has been successfully verified!<br><br>
📌 Event: <strong>${event}</strong><br>
💳 Transaction ID: <strong>${transactionId}</strong><br>
💰 Amount Paid: <strong>₹${transactionAmount}</strong><br><br>
Please keep this confirmation mail safe. Bring a valid ID proof on the event day for a smooth entry.<br><br>
We look forward to your enthusiastic participation!<br><br>
Best regards,<br>
<strong>Team Core Committee</strong>`
            : `Dear Participant,<br><br>
We regret to inform you that your registration for <strong>Engineers' Day at UIT</strong> could not be verified.<br><br>
📌 Event: <strong>${event}</strong><br>
💳 Transaction ID: <strong>${transactionId}</strong><br>
💰 Amount: <strong>₹${transactionAmount}</strong><br><br>
This might have happened due to an incorrect transaction ID or an issue with the payment.<br>
If you believe this is a mistake, kindly reach out to us at <a href="mailto:vanshgambhirag@gmail.com">vanshgambhirag@gmail.com</a> with your payment details.<br><br>
We’d be happy to assist you.<br><br>
Best regards,<br>
<strong>Team Core Committee</strong>`;
        const response=await sendMail(email, subject,body)
        if(response.success){
            return Response.json({success:true,updatedUser,message:"User updated successfully"},{status:200})
        }
        return Response.json({success:false,message:"Email not sent"},{
            status:500
        })
    } catch (error) {
        console.log(error.message)
        return Response.json({success:false,message:"User not updated"},{status:500})
    }
}