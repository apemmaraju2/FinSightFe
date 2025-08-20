import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Toggle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow backdrop-blur text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">
            <span className="text-blue-600">Fin</span>
            <span className="text-gray-900 dark:text-white">Sight</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="#hero" className="hover:text-gray-500 transition-colors duration-200">
            Home
          </a>
          <a href="#how-it-works" className="hover:text-gray-500 transition-colors duration-200">
            How it Works
          </a>
          <a href="#waitlist" className="hover:text-gray-500 transition-colors duration-200">
            Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}