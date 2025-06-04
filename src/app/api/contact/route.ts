import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    // 1. Veritabanına kaydet
    await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    // 2. E-posta gönder
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Web Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Kendinize veya başka birine gönderebilirsiniz
      subject: `Yeni İletişim Mesajı: ${subject}`,
      text: `Ad: ${name}\nE-posta: ${email}\nKonu: ${subject}\nMesaj: ${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}