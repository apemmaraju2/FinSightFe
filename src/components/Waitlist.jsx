import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // very simple email check
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setSubmitting(true);
      // TODO: send to your backend / form service here
      // await fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email }) });

      console.log("Waitlist signup:", email);
      setSuccess(true);
      setEmail("");
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="bg-gray-100 py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">Sign up with your email</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join the Finsight waitlist and be the first to get access.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          noValidate
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="px-5 py-3 rounded-lg border border-gray-300 flex-1 bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={submitting}
            className={`px-6 py-3 rounded-lg text-white transition ${
              submitting ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>

        {/* inline feedback */}
        {success && (
          <div className="mt-4 text-green-600 text-sm">
            🎉 Thanks! You’re on the list.
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-600 text-sm">
            {error}
          </div>
        )}

        <p className="mt-6 text-xs text-gray-500">
          We’ll only use your email to contact you about Finsight. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}