"use server";

import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import { transporter } from "@/lib/nodemailer.config";
import { MailOptions } from "nodemailer/lib/sendmail-transport";


export const sendEmail = async (formData: FormData) => {
  if (!process.env.NODEMAILER_HOST && !process.env.NODEMAILER_PORT) {
    return {
      error: "Email service is not configured",
    };
  }
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const context = {message, senderEmail}
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
    const mailoptions: MailOptions = {
      from: senderEmail,
      to: "abuopearl@gmail.com",
      subject: "Message from portfolio",
      html: `<html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New message from your portfolio site</title>
      </head>
      <body style="height: 100vh; justify-content: center; display: flex; align-items: center; background-color: white; color: black;" className="bg-gray-100 text-black">
        <div style="width: fit-content; height: fit-content; border: 2px solid; border-radius: .5rem; padding: 30px; display: flex; align-items: center;">
          <section className="">
            <h1 style="line-height: 1.25; font-size: 0.875rem; line-height: 1.25rem" className="leading-tight text-sm">
              You received the following message from the contact form
            </h1>
            <p>${message}</p>
            <hr />
            <p>The sender's email is: ${senderEmail}</p>
          </section>
        </div>
      </body>
    </html>`,
    };
    data = await transporter.sendMail(mailoptions, (err, info) => {
      if (err) {
        return {
          error: getErrorMessage(err),
        };
      } else {
        console.log(`Email Sent: ${info.response}`);
      }
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
