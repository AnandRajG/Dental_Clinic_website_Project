"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  User,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Printer,
  CalendarPlus,
  ArrowRight,
  Info,
} from "lucide-react";
import { TREATMENTS } from "@/data/treatments";
import { DOCTORS } from "@/data/doctors";
import { AppointmentRecord } from "@/lib/db";
import SectionHeader from "@/components/ui/SectionHeader";

function BookingForm() {
  const searchParams = useSearchParams();
  const initialTreatmentSlug = searchParams.get("treatment") || "";
  const initialDoctorName = searchParams.get("doctor") || "";

  // Lazy / pure initializers
  const [treatment, setTreatment] = useState(() => {
    if (initialTreatmentSlug) {
      const match = TREATMENTS.find((t) => t.slug === initialTreatmentSlug);
      if (match) return match.title;
    }
    return TREATMENTS.length > 0 ? TREATMENTS[0].title : "";
  });

  const [doctor, setDoctor] = useState(() => {
    return initialDoctorName || "Any Available Specialist";
  });

  const [appointmentDate, setAppointmentDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });

  const [timeSlot, setTimeSlot] = useState("10:30 AM");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [notes, setNotes] = useState("");

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentRecord | null>(null);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split("T")[0];

  const timeSlots = [
    { time: "08:30 AM", period: "Morning" },
    { time: "09:30 AM", period: "Morning" },
    { time: "10:30 AM", period: "Morning" },
    { time: "11:30 AM", period: "Morning" },
    { time: "01:30 PM", period: "Afternoon" },
    { time: "02:30 PM", period: "Afternoon" },
    { time: "03:30 PM", period: "Afternoon" },
    { time: "04:30 PM", period: "Afternoon" },
    { time: "05:30 PM", period: "Evening" },
    { time: "06:30 PM", period: "Evening" },
  ];

  const handleNextStep = () => {
    setErrorMessage(null);
    if (step === 1) {
      if (!treatment) {
        setErrorMessage("Please select a dental treatment");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!appointmentDate) {
        setErrorMessage("Please pick an appointment date");
        return;
      }
      if (!timeSlot) {
        setErrorMessage("Please pick an appointment time slot");
        return;
      }
      setStep(3);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!patientName.trim()) {
      setErrorMessage("Please enter the patient's full name");
      setLoading(false);
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMessage("Please enter a valid phone number for SMS confirmation");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName,
          email,
          phone,
          treatment,
          doctor,
          appointmentDate,
          timeSlot,
          notes,
          isNewPatient,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to process appointment booking");
      }

      setConfirmedBooking(result.data);
      setStep(4);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected network error occurred. Please contact the clinic.");
      }
    } finally {
      setLoading(false);
    }
  };

  const downloadCalendarFile = () => {
    if (!confirmedBooking) return;
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Aura Dental Studio//Appointment//EN",
      "BEGIN:VEVENT",
      `SUMMARY:Dental Appointment: ${confirmedBooking.treatment} with ${confirmedBooking.doctor}`,
      `DESCRIPTION:Appointment Reference: ${confirmedBooking.referenceCode}\\nPatient: ${confirmedBooking.patientName}\\nLocation: 450 Lexington Ave, New York, NY`,
      `LOCATION:450 Lexington Ave, Suite 1400, New York, NY 10017`,
      `STATUS:CONFIRMED`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `AuraDental-${confirmedBooking.referenceCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {step === 4 && confirmedBooking ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-xl animate-in zoom-in-95 duration-300">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
              Appointment Registered & Confirmed
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy">
              We Look Forward to Welcoming You!
            </h2>
            <p className="mt-2 text-sm text-brand-muted">
              Your appointment has been successfully stored in our clinical schedule system.
              A confirmation summary has been logged for our patient concierge team.
            </p>
          </div>

          <div className="bg-brand-warm rounded-2xl p-6 sm:p-8 border border-brand-border mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-200/80 gap-4">
              <div>
                <span className="text-xs font-semibold text-brand-muted uppercase">Booking Reference ID</span>
                <p className="text-2xl font-black text-brand-teal tracking-wider mt-0.5">
                  {confirmedBooking.referenceCode}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Status: {confirmedBooking.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-sm">
              <div>
                <span className="text-xs text-brand-muted font-medium">Patient Name</span>
                <p className="font-bold text-brand-navy mt-0.5">{confirmedBooking.patientName}</p>
              </div>
              <div>
                <span className="text-xs text-brand-muted font-medium">Treatment</span>
                <p className="font-bold text-brand-navy mt-0.5">{confirmedBooking.treatment}</p>
              </div>
              <div>
                <span className="text-xs text-brand-muted font-medium">Selected Specialist</span>
                <p className="font-bold text-brand-navy mt-0.5">{confirmedBooking.doctor}</p>
              </div>
              <div>
                <span className="text-xs text-brand-muted font-medium">Date & Time Slot</span>
                <p className="font-bold text-brand-teal mt-0.5">
                  {confirmedBooking.appointmentDate} at {confirmedBooking.timeSlot}
                </p>
              </div>
              <div>
                <span className="text-xs text-brand-muted font-medium">Contact Phone</span>
                <p className="font-medium text-brand-navy mt-0.5">{confirmedBooking.phone}</p>
              </div>
              <div>
                <span className="text-xs text-brand-muted font-medium">Confirmation Email</span>
                <p className="font-medium text-brand-navy mt-0.5">{confirmedBooking.email}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              type="button"
              onClick={downloadCalendarFile}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-white font-bold text-xs sm:text-sm hover:bg-brand-teal-dark shadow-sm transition-all cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>Add to Apple / Google Calendar (.ics)</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border text-brand-navy font-semibold text-xs sm:text-sm hover:border-brand-teal transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Confirmation Receipt</span>
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-brand-aqua/40 border border-brand-teal/20 text-xs sm:text-sm text-brand-navy space-y-2">
            <h4 className="font-bold text-sm flex items-center gap-1.5 text-brand-teal">
              <Info className="w-4 h-4" />
              <span>Clinic Arrival Instructions</span>
            </h4>
            <p className="text-brand-muted leading-relaxed">
              Please arrive 10 minutes prior to your appointment time at <strong>450 Lexington Avenue, Suite 1400</strong>.
              Enjoy complimentary tea or infused water in our hospitality lounge while checking in.
              Valet parking is validated for 2 hours.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal hover:underline"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-md">
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-muted mb-3">
              <span className={step >= 1 ? "text-brand-teal" : ""}>1. Treatment</span>
              <span className={step >= 2 ? "text-brand-teal" : ""}>2. Schedule</span>
              <span className={step >= 3 ? "text-brand-teal" : ""}>3. Patient Info</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-brand-teal transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Select Treatment & Specialist</h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1">
                  Choose the dental care service you require and optionally pick a preferred specialist.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-brand-navy mb-2">
                  Preferred Dental Treatment *
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-brand-border bg-white text-sm text-brand-navy font-semibold focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-brand-navy mb-2">
                  Preferred Specialist (Optional)
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-brand-border bg-white text-sm text-brand-navy font-semibold focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                >
                  <option value="Any Available Specialist">Any Available Specialist (Fastest Available)</option>
                  {DOCTORS.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} — {doc.role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-teal text-white font-bold text-sm shadow-md hover:bg-brand-teal-dark transition-all cursor-pointer"
                >
                  <span>Continue to Date & Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Choose Date & Preferred Time</h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1">
                  Select your preferred appointment date and convenient time slot.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-brand-navy mb-2">
                  Appointment Date *
                </label>
                <input
                  type="date"
                  min={minDateStr}
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-brand-border bg-white text-sm text-brand-navy font-semibold focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-brand-navy mb-2">
                  Available Time Slots *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setTimeSlot(slot.time)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                        timeSlot === slot.time
                          ? "bg-brand-teal text-white border-brand-teal shadow-xs"
                          : "bg-white text-brand-navy border-brand-border hover:border-brand-teal/50 hover:bg-brand-aqua/30"
                      }`}
                    >
                      <span>{slot.time}</span>
                      <span className="block text-[10px] font-normal opacity-80">{slot.period}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-full border border-brand-border text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-teal text-white font-bold text-sm shadow-md hover:bg-brand-teal-dark transition-all cursor-pointer"
                >
                  <span>Continue to Patient Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleBookingSubmit} className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Patient Details & Contact</h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1">
                  We use your phone and email to send instant confirmation and appointment reminders.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="patientName" className="block text-xs font-bold uppercase text-brand-navy mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-4 top-3.5 text-brand-muted" />
                    <input
                      id="patientName"
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-border text-sm text-brand-navy focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase text-brand-navy mb-1.5">
                    Mobile Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-4 top-3.5 text-brand-muted" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-border text-sm text-brand-navy focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-brand-navy mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-4 top-3.5 text-brand-muted" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-border text-sm text-brand-navy focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-warm border border-brand-border">
                <input
                  id="newPatient"
                  type="checkbox"
                  checked={isNewPatient}
                  onChange={(e) => setIsNewPatient(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-teal focus:ring-brand-teal accent-brand-teal cursor-pointer"
                />
                <label htmlFor="newPatient" className="text-xs sm:text-sm font-semibold text-brand-navy cursor-pointer">
                  I am a first-time patient at Aura Dental Studio (Complimentary 3D Imaging included)
                </label>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase text-brand-navy mb-1.5">
                  Specific Concerns or Symptoms (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Sensitivity on upper left molar, dental anxiety, interested in clear aligners..."
                  className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-navy focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                />
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-brand-navy space-y-1">
                <div className="flex justify-between">
                  <span className="text-brand-muted">Selected Service:</span>
                  <span className="font-bold">{treatment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Specialist:</span>
                  <span className="font-bold">{doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Date & Time:</span>
                  <span className="font-bold text-brand-teal">
                    {appointmentDate} at {timeSlot}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-full border border-brand-border text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-teal text-white font-bold text-sm shadow-md shadow-brand-teal/20 hover:bg-brand-teal-dark active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{loading ? "Confirming Appointment..." : "Confirm & Book Appointment"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default function BookAppointmentPage() {
  return (
    <div className="bg-brand-warm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8 max-w-4xl mx-auto">
          <Link href="/" className="hover:text-brand-teal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-navy font-semibold">Book Appointment</span>
        </nav>

        <SectionHeader
          badge="Direct Online Scheduling"
          title="Reserve Your Clinical Consultation"
          description="Instant booking with zero waiting room delays. Select your treatment, specialist, and preferred time in under two minutes."
        />

        <Suspense
          fallback={
            <div className="text-center py-20 text-brand-muted text-sm">
              Loading appointment scheduler...
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
