/* eslint-disable import/no-anonymous-default-export */
import { Resend } from "resend";
import ContactDetails from "@/components/Emailtemplate/TemplateOem";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, message} = req.body;

    const { data, error } = await resend.emails.send({
      from: "Ams <onboarding@resend.dev>",
      to: ["harshgoyalrss7@gmail.com"],
      subject: "New Lead: New Form Submission",
      react: ContactDetails({
        userName: name,
        userEmail: email,
        userMessage:message,
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error("API route error:", error);
    res.status(400).json({ error: error.message });
  }
};
