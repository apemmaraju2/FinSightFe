import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 shadow backdrop-blur text-black" : "bg-transparent text-white"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-blue-600">Fin</span>
          <span className="text-blue-600">Sight</span>
        </div>

        <div className="space-x-6 hidden md:flex">
          <a href="#hero">Home</a>
          <a href="#how-it-works">How it Works</a>
          <Link to="/waitlist">Waitlist</Link>
        </div>
      </div>
    </nav>
  );
}