import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Watch scroll position to toggle background
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
          ? "bg-white/90 shadow backdrop-blur"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Finsight</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#hero" className="hover:text-gray-500">Home</a>
          <a href="#how-it-works" className="hover:text-gray-500">How it Works</a>
        </div>
      </div>
    </nav>
  );
}