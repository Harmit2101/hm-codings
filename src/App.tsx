import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactCard from "./components/ContactCard";
import { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Fixed Header */}
      <Header openContact={openContact} />

      {/* Scrollable Main Content */}
      <main className="flex-grow overflow-y-auto bg-gray-50 dark:bg-gray-900 pt-16 pb-16">
        <Routes>
          <Route path="/" element={<Home openContact={openContact} />} />
          <Route path="/about" element={<About openContact={openContact} />} />
          <Route
            path="/services"
            element={<Services openContact={openContact} />}
          />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<ContactCard />} /> */}
        </Routes>
      </main>

      {/* Fixed Footer */}
      <Footer openContact={openContact} />

      {/* Overlay Contact Card */}
      <ContactCard isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
