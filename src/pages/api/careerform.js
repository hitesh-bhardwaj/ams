/* eslint-disable import/no-anonymous-default-export */
import CareerDetails from "@/components/Emailtemplate/TemplateCareer";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email,content , filename} = req.body;

    const { data, error } = await resend.emails.send({
      from: "Ams <onboarding@resend.dev>",
      to: ["harshgoyalrss7@gmail.com"],
      subject: "New inquiry: New Form Submission",
      react: CareerDetails({
        userName: name,
        userEmail: email,
        
      }),
      attachments: [
        {
          content,
          filename,
        },
      ],
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
