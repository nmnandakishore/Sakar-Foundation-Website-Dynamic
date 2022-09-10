import * as nodemailer from "nodemailer"
import { template as adminTemplate } from "./email-templates/form-admin-template";
import { template as visitorTemplate } from "./email-templates/form-visitor-template";
import crypto from "crypto"

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USERNAME = process.env.SMTP_USERNAME;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const DOMAIN = process.env.DOMAIN;
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL;

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: (SMTP_PORT === '465') ? true : false, // true for 465, false for other ports if false, still encrypts id STARTLS is supported.
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
    },
});


interface ISendFormEmail {
    visitorEmail?: string | null,
    formName: string,
    data: Object
}

export const sendFormEmail = async (options: ISendFormEmail) => {

    // Send Email to the admin
    const cidLogoForAdmin = crypto.randomUUID();
    let adminHtmlContent = adminTemplate(options.formName, options.data, cidLogoForAdmin)

    try {
        let info = await transporter.sendMail({
            from: SMTP_FROM_EMAIL, // sender address
            to: ADMIN_EMAIL, // list of receivers
            subject: "Sākār Website Communication: " + options.formName, // Subject line
            // text: "Hello world?", // plain text body
            html: adminHtmlContent, // html body
            attachments: [{
                filename: 'logo.png',
                path: DOMAIN + '/img/sakar_email_logo.png',
                cid: cidLogoForAdmin //sakarfoundationlogo@sakarfoundation.org //same cid value as in the html img src
            }]
        });
    } catch (e) {
        console.log('error while sending internal email at email manager');
        console.log(e);
        throw e;
    }

    // Send Email to the visitor if visitorEmail is provided.
    if (options.visitorEmail) {
        const cidLogoForVisitor = crypto.randomUUID();
        let visitorHtmlContent = visitorTemplate(options.formName, options.data, cidLogoForVisitor)

        try {
            let info = await transporter.sendMail({
                from: SMTP_FROM_EMAIL, // sender address
                to: options.visitorEmail, // list of receivers
                subject: "Sākār foundation", // Subject line
                html: visitorHtmlContent, // html body
                attachments: [{
                    filename: 'logo.png',
                    path: DOMAIN + '/img/sakar_email_logo.png',
                    cid: cidLogoForVisitor //same cid value as in the html img src
                }]
            });
        } catch (e) {
            console.log('error while sending visitor email at email manager');
            console.log(e);
        }
        console.log("Inside visiter Email");

    }

}