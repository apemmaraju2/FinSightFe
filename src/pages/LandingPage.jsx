import Navbar from "../components/Navbar"; // Navbar 
import Hero from "../components/Hero";  // Main Hero Landing Page
import Features from "../components/Features"; // Not being used currently 
import HowItWorks from "../components/HowItWorks"; // How it Works Section
import Footer from "../components/Footer"; // Footer


export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="how">
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </div>
  );
}
