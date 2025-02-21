"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/hospital1.jpg",
    text: "Apollo Proton Cancer Centre, India's First Advanced Cancer Centre Is Accredited By JCI",
  },
  {
    id: 2,
    image: "/hospital2.jpg",
    text: "Providing World-Class Healthcare Services with Compassion",
  },
  {
    id: 3,
    image: "/hospital3.jpg",
    text: "Book Your Appointments Online with Top Doctors",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <Image
              src={slide.image}
              alt="Hospital Image"
              fill
              priority
              unoptimized
              className="object-cover"
            />
            <div className="absolute bottom-10 left-5 bg-black bg-opacity-50 p-4 rounded text-white">
              <h2 className="text-lg md:text-2xl font-bold">{slide.text}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
        onClick={prevSlide}
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
        onClick={nextSlide}
      >
        ▶
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
