export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Finsight</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600">
        Financial tracking for small businesses made easy. Clean. Fast. AI-powered.
      </p>
      <a href="#features" className="bg-black text-white px-6 py-3 rounded-full text-lg hover:opacity-90 transition">
        Learn More
      </a>
    </div>
  );
}
