import { NextRequest, NextResponse } from "next/server";
import { createAppointment, getAllAppointments } from "@/lib/db";

export async function GET() {
  try {
    const appointments = await getAllAppointments();
    return NextResponse.json({ success: true, count: appointments.length, data: appointments });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to retrieve appointments" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { patientName, email, phone, treatment, doctor, appointmentDate, timeSlot, notes, isNewPatient } = body;

    // Server-side validation
    if (!patientName || typeof patientName !== "string" || patientName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Patient name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required" },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required" },
        { status: 400 }
      );
    }

    if (!treatment) {
      return NextResponse.json(
        { success: false, error: "Please select a dental treatment" },
        { status: 400 }
      );
    }

    if (!appointmentDate) {
      return NextResponse.json(
        { success: false, error: "Please select an appointment date" },
        { status: 400 }
      );
    }

    if (!timeSlot) {
      return NextResponse.json(
        { success: false, error: "Please select a preferred time slot" },
        { status: 400 }
      );
    }

    const newAppointment = await createAppointment({
      patientName: patientName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      treatment: treatment.trim(),
      doctor: (doctor || "Any Available Specialist").trim(),
      appointmentDate: appointmentDate.trim(),
      timeSlot: timeSlot.trim(),
      notes: notes ? notes.trim() : "",
      isNewPatient: Boolean(isNewPatient),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Appointment successfully confirmed and registered in clinic schedule",
        data: newAppointment,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to process appointment booking" },
      { status: 500 }
    );
  }
}
