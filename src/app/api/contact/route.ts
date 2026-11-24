import { NextRequest, NextResponse } from "next/server";
import { createContactMessage, getAllContactMessages } from "@/lib/db";

export async function GET() {
  try {
    const messages = await getAllContactMessages();
    return NextResponse.json({ success: true, count: messages.length, data: messages });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to retrieve contact messages" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    const record = await createContactMessage({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      subject: (subject || "General Dental Enquiry").trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. A dental coordinator will contact you promptly.",
        data: record,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to submit enquiry message" },
      { status: 500 }
    );
  }
}
