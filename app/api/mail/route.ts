import { NextRequest, NextResponse } from "next/server";
import { object, string, ZodError } from "zod";
import { Resend } from "resend";

const ContactFormSchema = object({
  name: string()
    .min(3, "Name is too short.")
    .max(18, "Name is too long.")
    .transform((str) => (str[0].toUpperCase() + str.slice(1)).trim()),
  email: string()
    .email("Email is invalid")
    .transform((str) => str.trim()),
  message: string()
    .min(20, "Message is too short.")
    .max(500, "Message is too long.")
    .transform((str) => str.trim()),
});

export const POST = async (req: NextRequest) => {
  const { name, email, message } = await req.json();
  try {
    await ContactFormSchema.parseAsync({ name, email, message });
    const resend = new Resend(process.env.RESEND_API_KEY || "");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ikhlak789@gmail.com",
      subject: `${name} sent a new message | Portfolio`,
      html: `
        You got a new message from your portfolio: <br /><br />
        Name: ${name} <br />
        Email: ${email} <br />
        Message: ${message}
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      const errors = err.issues.map((error) => error.message);

      return NextResponse.json({ ok: false, errors });
    }
  }
  return NextResponse.json({ ok: false });
};
