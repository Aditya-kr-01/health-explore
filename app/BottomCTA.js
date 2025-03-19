export default function BottomCTA() {
    return (
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-6 px-4">
        <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-blue-700 transition-all duration-300">
          Book Health Check-Up
        </button>
        <button className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-orange-600 transition-all duration-300">
          Book Appointment
        </button>
      </div>
    );
  }
  