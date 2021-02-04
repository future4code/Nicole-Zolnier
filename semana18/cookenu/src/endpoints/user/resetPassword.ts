import { Request, Response } from "express";
import { selectUserByEmail } from "../../data/user/selectUserByEmail";
import { updatePassword } from "../../data/user/updatePassword";
import { generateHash } from "../../services/hashManager";
import { writeEmail } from "../../services/mailer";

export const resetPassword = async (req: Request, res: Response) => {
    const { email } = req.body;
    
    try {
        if(!email){
            res.statusCode = 422
            throw new Error("Invalid email")
        }

        const user = await selectUserByEmail(email)

        if(!user){
            res.statusCode = 404;
            throw new Error("User not found.")
        }

        const password: string = "divapop";
        const passwordHash: string = await generateHash(password)

        await updatePassword(email, passwordHash)

        await writeEmail({
            from: "Cookenu <admin@cookenu.com.br>",
            to: email,
            subject: "New Password - Cookenu",
            text: "Here is your new password",
            html: `<p>Hello, ${user.email}. We have updated your password. Your new password is ${password}.</p>`
        })

        res.status(200).send({message: "Password updated. Please check your email"});

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }

}