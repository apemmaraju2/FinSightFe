import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WaitlistPage from "./pages/WaitlistPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/waitlist" element={<WaitlistPage />} />
    </Routes>
  );
}