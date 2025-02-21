import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar"; // ✅ Import Navbar
import SearchBar from "./searchbar"; // ✅ Import SearchBar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Health Explorer",
  description: "Find doctors, hospitals, and healthcare services easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* ✅ Add Navbar at the top */}
        <SearchBar /> {/* ✅ Add Search Bar below Navbar */}
        {children}
      </body>
    </html>
  );
}
