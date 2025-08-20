import { useState } from "react";

export default function Waitlist() {
const [email, setEmail] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);
    // Future: Send to backend or form API
    setEmail("");
};

return (
    <section className="bg-white text-black py-20 px-6" id="waitlist">
    <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Join the Finsight Waitlist</h2>
        <p className="text-lg text-gray-600 mb-8">
        Be the first to get access and financial clarity.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
            type="email"
            required
            placeholder="Your email"
            className="px-5 py-3 rounded-lg border border-gray-300 flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
        Join Waitlist
        </button>
    </form>
    </div>
    </section>
);
}