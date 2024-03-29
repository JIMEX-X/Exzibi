import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: process.env.NODEMAILER_HOST,
    auth: {
        pass: process.env.NODEMAILER_PASS,
        user: process.env.NODEMAILER_USER
    }
})