import nodemailer from "nodemailer";
import { mailTemplate } from "../types";
import Mail = require("nodemailer/lib/mailer");
import SMTPTransport = require("nodemailer/lib/smtp-transport");

const config: SMTPTransport.Options = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d1fb6f8aa4b6cb",
        pass: "fae3c5ea66a998"
    },
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