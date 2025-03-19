"use client";
import { useState } from "react";
import BookAppointmentModal from "./BookAppointmentModal";
import FindDoctor from "./FindDoctor"; // Import FindDoctor modal

export default function QuickAccess() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isFindDoctorModalOpen, setIsFindDoctorModalOpen] = useState(false);

  const services = [
    { name: "Book Appointment", icon: "📅", action: () => setIsAppointmentModalOpen(true) },
    { name: "Find Doctor", icon: "👨‍⚕️", action: () => setIsFindDoctorModalOpen(true) }, // ✅ Updated to open modal
    { name: "Find Hospital", icon: "🏥" },
    { name: "Book Health Check-Up", icon: "🩺" },
    { name: "Consult Online", icon: "💻" },
    { name: "Buy Medicine", icon: "💊" },
  ];

  return (
    <div className="mt-10 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Quick Access Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={service.action}
            className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition"
          >
            <span className="text-3xl">{service.icon}</span>
            <span className="mt-2 font-semibold text-gray-700">{service.name}</span>
          </button>
        ))}
      </div>

      {/* Book Appointment Modal */}
      <BookAppointmentModal isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)} />

      {/* Find Doctor Modal */}
      <FindDoctor isOpen={isFindDoctorModalOpen} onClose={() => setIsFindDoctorModalOpen(false)} />
    </div>
  );
}
