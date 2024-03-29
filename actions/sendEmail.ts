"use server";

import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import {nodemailer} from "@/lib/nodemailer.config"

export const sendEmail = async (formData: FormData) => {
  if(!process.env.NODEMAILER_HOST && !process.env.NODEMAILER_PORT){
    return {
      error: "Email service is not configured"
    }
  }
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const mailoptions = {
      from: "Contact Form <onboarding@resend.dev>",
      to: "abuopearl@gmail.com",
      subject: "Message from portfolio",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    }
    data = await nodemailer.sendMail(mailoptions, (err: any, info: any) => {
      if(err){
        return {
          error: getErrorMessage(err)
        }
      }else{
        console.log(`Email Sent: ${info.response}`)
      }
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
