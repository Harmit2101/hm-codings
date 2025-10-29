import React from "react";
import { motion } from "framer-motion";
import FirmLogo from "../assets/FirmLogo.jpg";
import { aboutContent } from "../constants/aboutContent";
import { useNavigate } from "react-router-dom";

interface AboutProps {
  openContact: () => void;
}

const About: React.FC<AboutProps> = ({ openContact }) => {
  const { hero, whoWeAre, missionVision, values } = aboutContent;
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {hero.title.split(" ")[0]}{" "}
              <span className="text-yellow-300">
                {hero.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100">{hero.tagline}</p>
            <div className="space-x-4">
                <button
                    className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
                    onClick={() => navigate("/services")}
                >
                    Explore Services
                </button>
                <button
                    onClick={openContact}
                    className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
                >
                    {hero.buttonText}
                </button>
            </div>
            
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={FirmLogo}
              alt="HM Codings team"
              className="rounded-xl shadow-lg max-w-sm md:max-w-md transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {whoWeAre.title}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {whoWeAre.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {[missionVision.mission, missionVision.vision].map((item) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            {values.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.list.map((value) => (
              <motion.div
                key={value.title}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow transition-transform hover:scale-105"
              >
                <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
