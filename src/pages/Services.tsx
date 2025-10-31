import React, { useEffect, useState } from "react";
import { services } from "../constants/services";
import { useLocation } from "react-router-dom";

interface LocationState {
  initialIndex?: number;
}

interface ServicesProps {
  openContact: () => void;
}

const Services: React.FC<ServicesProps> = ({ openContact }) => {
  const location = useLocation();
  const state = location.state as LocationState;
  const initialIndexFromState = state?.initialIndex ?? null;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    if (initialIndexFromState !== null) setActiveIndex(initialIndexFromState);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialIndexFromState]);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderDetails = (index: number) => (
    <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-500">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {services[index].title} Details
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Average Time:</strong> {services[index].avgTime}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Price Range:</strong> {services[index].price}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Variations:</strong> {services[index].variations.join(", ")}
      </p>
      <button
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        onClick={openContact}
      >
        Raise Enquiry
      </button>
    </div>
  );

  return (
    <div className="w-full flex flex-col bg-gray-50 dark:bg-gray-900 pb-24">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Services
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col">
              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transform transition-transform duration-300 cursor-pointer hover:scale-105"
                onClick={() => handleCardClick(index)}
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>

              {/* For mobile, show details directly below card */}
              {isMobile && activeIndex === index && renderDetails(index)}
            </div>
          ))}
        </div>

        {/* For desktop, show details below grid */}
        {!isMobile && activeIndex !== null && (
          <div className="mt-12">{renderDetails(activeIndex)}</div>
        )}
      </section>
    </div>
  );
};

export default Services;
