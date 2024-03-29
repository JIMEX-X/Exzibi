"use strict"
import transporter from 'nodemailer'
export const nodemailer = transporter.createTransport({
    service: "gmail",
    port: process.env.NODEMAILER_PORT,
    host: process.env.NODEMAILER_HOST,
    auth: {
        pass: process.env.NODEMAILER_PASS,
        user: process.env.NODEMAILER_USER
    }
})