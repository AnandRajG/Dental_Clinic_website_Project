import fs from "fs";
import path from "path";

export interface AppointmentRecord {
  id: string;
  referenceCode: string;
  patientName: string;
  email: string;
  phone: string;
  treatment: string;
  doctor: string;
  appointmentDate: string;
  timeSlot: string;
  notes?: string;
  isNewPatient: boolean;
  status: "CONFIRMED" | "PENDING" | "COMPLETED" | "CANCELLED";
  createdAt: string;
}

export interface ContactMessageRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "UNREAD" | "READ" | "REPLIED";
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const APPOINTMENTS_FILE = path.join(DATA_DIR, "appointments.json");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

function ensureDirectoryAndFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(APPOINTMENTS_FILE)) {
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export function generateReferenceCode(): string {
  const year = new Date().getFullYear();
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `APX-${year}-${randomDigits}`;
}

export async function getAllAppointments(): Promise<AppointmentRecord[]> {
  ensureDirectoryAndFiles();
  try {
    const raw = fs.readFileSync(APPOINTMENTS_FILE, "utf-8");
    return JSON.parse(raw) as AppointmentRecord[];
  } catch {
    return [];
  }
}

export async function getAppointmentByReference(referenceCode: string): Promise<AppointmentRecord | null> {
  const appointments = await getAllAppointments();
  return appointments.find((a) => a.referenceCode.toUpperCase() === referenceCode.trim().toUpperCase()) || null;
}

export async function createAppointment(
  data: Omit<AppointmentRecord, "id" | "referenceCode" | "status" | "createdAt">
): Promise<AppointmentRecord> {
  ensureDirectoryAndFiles();
  const appointments = await getAllAppointments();

  const record: AppointmentRecord = {
    id: `apt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    referenceCode: generateReferenceCode(),
    status: "CONFIRMED",
    createdAt: new Date().toISOString(),
    ...data,
  };

  appointments.unshift(record);
  fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(appointments, null, 2), "utf-8");
  return record;
}

export async function getAllContactMessages(): Promise<ContactMessageRecord[]> {
  ensureDirectoryAndFiles();
  try {
    const raw = fs.readFileSync(MESSAGES_FILE, "utf-8");
    return JSON.parse(raw) as ContactMessageRecord[];
  } catch {
    return [];
  }
}

export async function createContactMessage(
  data: Omit<ContactMessageRecord, "id" | "status" | "createdAt">
): Promise<ContactMessageRecord> {
  ensureDirectoryAndFiles();
  const messages = await getAllContactMessages();

  const record: ContactMessageRecord = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    status: "UNREAD",
    createdAt: new Date().toISOString(),
    ...data,
  };

  messages.unshift(record);
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
  return record;
}
