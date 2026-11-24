import { NextRequest, NextResponse } from "next/server";
import { getAppointmentByReference } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ reference: string }> }
) {
  try {
    const { reference } = await params;
    if (!reference) {
      return NextResponse.json(
        { success: false, error: "Reference code is required" },
        { status: 400 }
      );
    }

    const appointment = await getAppointmentByReference(reference);
    if (!appointment) {
      return NextResponse.json(
        { success: false, error: "No appointment found with this reference code" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: appointment });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to retrieve appointment details" },
      { status: 500 }
    );
  }
}
