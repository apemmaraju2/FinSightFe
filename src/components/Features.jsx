export default function Features() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Why Finsight?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Track Finances</h3>
          <p className="text-gray-600">Get a complete overview of income, expenses, and cash flow.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
          <p className="text-gray-600">Understand where your money is going and get smart suggestions.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
          <p className="text-gray-600">Clean interface designed for non-technical business owners.</p>
        </div>
      </div>
    </div>
  );
}