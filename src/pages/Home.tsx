import React from "react";
import HMLogo from "../components/HMLogo";
import { useNavigate } from "react-router-dom";
import FirmLogo from "../assets/FirmLogo.jpg";

interface HomeProps {
  openContact: () => void; // receive openContact from App
}

const services = [
  { title: "Websites", description: "Responsive, modern websites built to scale." },
  { title: "Web Apps", description: "Powerful web applications with dynamic features." },
  { title: "Mobile Apps", description: "iOS and Android apps with smooth UX/UI." },
  { title: "AI Integration", description: "Future-ready AI solutions for your business." },
];

const Home: React.FC<HomeProps> = ({ openContact }) => {
  const navigate = useNavigate();

  const handleServiceClick = (index: number) => {
    navigate("/services", { state: { initialIndex: index } });
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-400 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Build the Future with <span className="text-yellow-300">HM Coding</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              We craft websites, web apps, mobile apps, and AI-driven solutions that empower your business.
            </p>
            <div className="space-x-4">
              <button
                className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
                onClick={() => navigate("/services")}
              >
                Explore Services
              </button>
              <button
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition"
                onClick={openContact} // trigger global contact card
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <HMLogo className="w-64 h-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleServiceClick(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About HM Coding
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              HM Coding is a cutting-edge technology firm delivering websites, web apps, mobile apps, and AI solutions. Our goal is to help businesses innovate and grow in the digital era.
            </p>
          </div>
          <div
            className="md:w-1/2 flex justify-center cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <img
              src={FirmLogo}
              alt="Firm Logo"
              className="rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="contact" className="py-20 bg-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-8 text-lg md:text-xl">Contact us today and let's build something amazing together!</p>
        <button
          className="px-8 py-4 bg-yellow-300 text-gray-900 text-lg font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
          onClick={openContact} // trigger global contact card
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
