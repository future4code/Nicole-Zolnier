import SMTPTransport = require("nodemailer/lib/smtp-transport");
import nodemailer from "nodemailer";
import Mail = require("nodemailer/lib/mailer");
import { mailTemplate } from "../types";

export const config: SMTPTransport.Options ={
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "df3aefae660858",
        pass: "451b91cc38b29a"
    }
}

let transporter: Mail = nodemailer.createTransport(config);

export async function writeEmail(mail: mailTemplate) {

    let mailContent: Mail.Options = {
        from: mail.from,
        to: mail.to,
        subject: mail.subject,
        text: mail.text,
        html: mail.html
    }

    transporter.sendMail(mailContent, (error: Error | null, info: any)=>{
        if(error){
            throw new Error(error.message);
        }else{
            console.log("Email sent!");
        }

    })

}