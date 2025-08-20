import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setSubmitting(true);
      // TODO: send to your backend / service here
      // await fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email }) });

      console.log("Waitlist signup:", email);
      setSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Be first to try Finsight
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Join the list to get launch updates and early access.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
          noValidate
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 rounded-lg bg-white text-black border border-gray-300 flex-1"
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={submitting}
            className={`px-6 py-3 rounded-lg text-white transition ${
              submitting ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? "Submitting..." : "Get Updates"}
          </button>
        </form>

        {success && (
          <div className="mt-4 text-green-400 text-sm">
            🎉 Thanks! You’re on the list.
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        <p className="mt-8 text-xs text-gray-400">
          We’ll only email you about Finsight. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}