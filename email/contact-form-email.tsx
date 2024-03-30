import React from "react";
// import {
//   Html,
//   Body,
//   Head,
//   Heading,
//   Hr,
//   Container,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";
// import {  } from "@react-email/tailwind";
import dynamic from "next/dynamic";

// @ts-ignore
const Html = dynamic(() => import("@react-email/html"), { ssr: false });
// @ts-ignore
const Body = dynamic(() => import("@react-email/body"), { ssr: false });
// @ts-ignore
const Head = dynamic(() => import("@react-email/head"), { ssr: false });
// @ts-ignore
const Heading = dynamic(() => import("@react-email/heading"), { ssr: false });
// @ts-ignore
const Hr = dynamic(() => import("@react-email/hr"), { ssr: false });
// @ts-ignore
const Container = dynamic(() => import("@react-email/container"), {
  ssr: false,
});
// @ts-ignore
const Preview = dynamic(() => import("@react-email/preview"), { ssr: false });
// @ts-ignore
const Section = dynamic(() => import("@react-email/section"), { ssr: false });
// @ts-ignore
const Text = dynamic(() => import("@react-email/text"), { ssr: false });

// @ts-ignore
const Tailwind = dynamic(() => import("@react-email/tailwind"), { ssr: false });

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    // @ts-ignore
    <Html>
      <Head />
      {/* @ts-ignore */}
      <Preview>New message from your portfolio site</Preview>
      {/* @ts-ignore */}
      <Tailwind>
        {/* @ts-ignore */}
        <Body className="bg-gray-100 text-black">
          {/* @ts-ignore */}
          <Container>
            {/* @ts-ignore */}
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              {/* @ts-ignore */}
              <Heading className="leading-tight text-sm">
                You received the following message from the contact form
              </Heading>
              {/* @ts-ignore */}
              <Text>{message}</Text>
              <Hr />
              {/* @ts-ignore */}
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
