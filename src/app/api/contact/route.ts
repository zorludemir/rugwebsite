import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Document, MongoClient, OptionalId } from "mongodb";

const uri = process.env.MONGODB_URI || "your-mongodb-connection-string";
const client = new MongoClient(uri);

async function saveContactMessage(data: OptionalId<Document>) {
  try {
    await client.connect();
    const database = client.db("deneme");
    const collection = database.collection("forms");
    await collection.insertOne(data);
  } finally {
    await client.close();
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;
    await saveContactMessage({ name, email, subject, message });

    console.log("Data saved to database");

    // E-posta gönder
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT),
      secure: false, // TLS kullanımı için false
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Sertifika doğrulamasını devre dışı bırak
      },
    });

    await transporter.sendMail({
      from: `\"Web Contact\" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Gönderilecek kişinin maili buraya girilmeli, input olarak da alınabilir
      subject: `Yeni İletişim Mesajı: ${subject}`,
      text: `Ad: ${name}\nE-posta: ${email}\nKonu: ${subject}\nMesaj: ${message}`,
    });

    console.log("Email sent successfully");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
