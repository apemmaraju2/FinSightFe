import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function LandingPage() {
return (
    <div className="bg-white text-gray-900">
    <Navbar />
<main>
        <section id="hero"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="how-it-works"><HowItWorks /></section>
        <section id="waitlist"><Waitlist /></section>
</main>
<Footer />
</div>
);
}