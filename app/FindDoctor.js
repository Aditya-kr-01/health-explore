"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FindDoctor({ isOpen, onClose }) {
  const cities = {
    Delhi: { AIIMS: ["Dr. Sharma", "Dr. Mehta"], Fortis: ["Dr. Kapoor", "Dr. Reddy"], Apollo: ["Dr. Singh", "Dr. Khanna"] },
    Mumbai: { Lilavati: ["Dr. Desai", "Dr. Nair"], Nanavati: ["Dr. Patel", "Dr. Ahuja"], Hinduja: ["Dr. Rao", "Dr. Saxena"] },
    Kolkata: { AMRI: ["Dr. Banerjee", "Dr. Ghosh"], Fortis: ["Dr. Bose", "Dr. Mukherjee"], Woodlands: ["Dr. Roy", "Dr. Dutta"] },
  };

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (selectedCity && selectedHospital) {
      setDoctors(cities[selectedCity][selectedHospital] || []);
    } else {
      setDoctors([]);
    }
  }, [selectedCity, selectedHospital]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-6 rounded-xl shadow-2xl w-[500px] max-w-full"
          >
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              🔍 Find a Doctor
            </h2>

            <form className="space-y-3">
              {/* City Selection */}
              <select
                className="input-style"
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedHospital("");
                }}
              >
                <option key="default-city" value="">Select City</option>
                {Object.keys(cities).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {/* Hospital Selection */}
              <select
                className="input-style"
                value={selectedHospital}
                onChange={(e) => setSelectedHospital(e.target.value)}
                disabled={!selectedCity}
              >
                <option key="default-hospital" value="">Select Hospital</option>
                {selectedCity &&
                  Object.keys(cities[selectedCity]).map((hospital) => (
                    <option key={hospital} value={hospital}>
                      {hospital}
                    </option>
                  ))}
              </select>

              {/* Doctor List */}
              <div className="doctor-list">
                {doctors.length > 0 ? (
                  doctors.map((doctor) => (
                    <p key={doctor} className="text-gray-700 p-2 border-b">
                      {doctor}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">Select a hospital to see doctors</p>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full mt-3 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300"
              >
                ❌ Close
              </button>
            </form>
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
