"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookAppointmentModal({ isOpen, onClose }) {
  const cities = {
    Delhi: { AIIMS: ["Dr. Sharma", "Dr. Mehta"], Fortis: ["Dr. Kapoor", "Dr. Reddy"], Apollo: ["Dr. Singh", "Dr. Khanna"] },
    Mumbai: { Lilavati: ["Dr. Desai", "Dr. Nair"], Nanavati: ["Dr. Patel", "Dr. Ahuja"], Hinduja: ["Dr. Rao", "Dr. Saxena"] },
    Bangalore: { Manipal: ["Dr. Joshi", "Dr. Verma"], "Columbia Asia": ["Dr. Iyer", "Dr. Das"], Apollo: ["Dr. Gupta", "Dr. Menon"] },
    Kolkata: { AMRI: ["Dr. Banerjee", "Dr. Ghosh"], Fortis: ["Dr. Bose", "Dr. Mukherjee"], Woodlands: ["Dr. Roy", "Dr. Dutta"] },
  };

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isOpen) return null;

  const handleConfirm = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isClient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-xl shadow-2xl w-[500px] max-w-full"
          >
            {isConfirmed ? (
              <div className="text-center">
                <div className="text-green-500 text-5xl mb-3">✔️</div>
                <h2 className="text-xl font-semibold">Appointment Confirmed!</h2>
                <p className="text-gray-600 mt-2">Your booking has been successfully scheduled.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">📅 Book an Appointment</h2>

                <form className="space-y-3" onSubmit={handleConfirm}>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Full Name" className="input-style" required />
                    <input type="tel" placeholder="Phone Number" className="input-style" required />
                  </div>

                  <input type="email" placeholder="Email" className="input-style" required />

                  <div className="grid grid-cols-2 gap-3">
                    <select className="input-style" required>
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <input type="number" placeholder="Age" className="input-style" required />
                  </div>

                  {/* City Selection */}
                  <select
  className="input-style"
  value={selectedCity}
  onChange={(e) => {
    setSelectedCity(e.target.value);
    setSelectedHospital("");
    setSelectedDoctor("");
  }}
  required
>
  <option value="" disabled>Select City</option> {/* Prevent duplicate empty keys */}
  {Object.keys(cities).map((city, index) => (
    <option key={`city-${index}`} value={city}>
      {city}
    </option>
  ))}
</select>

                  {/* Hospital Selection */}
                  <select
  className="input-style"
  value={selectedHospital}
  onChange={(e) => {
    setSelectedHospital(e.target.value);
    setSelectedDoctor("");
  }}
  disabled={!selectedCity}
  required
>
  <option value="" disabled>Select Hospital</option>
  {selectedCity &&
    Object.keys(cities[selectedCity]).map((hospital, index) => (
      <option key={`hospital-${selectedCity}-${index}`} value={hospital}>
        {hospital}
      </option>
    ))}
</select>

                  {/* Doctor Selection */}
                  <select
  className="input-style"
  value={selectedDoctor}
  onChange={(e) => setSelectedDoctor(e.target.value)}
  disabled={!selectedHospital}
  required
>
  <option value="" disabled>Select Preferred Doctor</option>
  {selectedHospital &&
    cities[selectedCity][selectedHospital].map((doctor, index) => (
      <option key={`doctor-${selectedCity}-${selectedHospital}-${index}`} value={doctor}>
        {doctor}
      </option>
    ))}
</select>

                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300"
                  >
                    Confirm Appointment
                  </button>
                </form>

                <button
                  onClick={onClose}
                  className="w-full mt-3 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300"
                >
                  ❌ Close
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .input-style:focus {
          border-color: #007bff;
          outline: none;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
      `}</style>
    </AnimatePresence>
  );
}
