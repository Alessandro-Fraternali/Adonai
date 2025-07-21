import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const nodemailer = await import("nodemailer");
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "casafamigliaadonai2019@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "casafamigliaadonai2019@gmail.com",
    subject: `Nuovo messaggio da ${name}`,
    text: `Hai ricevuto un nuovo messaggio dal sito web!\n\nNome: ${name}\n\nEmail: ${email}\n\nMessaggio:\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore invio email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
