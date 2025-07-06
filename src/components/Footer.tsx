import React from "react";
import { Heart, Linkedin, Mail } from "lucide-react";
import { FiGithub } from "react-icons/fi";
const Footer = () => {
  return (
    <footer
      className="relative py-12 border-t border-white/10 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)), url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4 animate-fade-in-up">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
              VS
            </span>
            <span className="text-gray-300 text-lg">Vamsi Sai Mangapathi</span>
          </div>

          <div className="flex items-center text-gray-300 text-sm animate-fade-in-up animation-delay-300">
            <span>Made with</span>
            <Heart
              className="w-4 h-4 text-red-500 mx-2 animate-pulse"
              fill="currentColor"
            />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/VamsiSaiMangapathi"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FiGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/vamsi-sai-mangapathi"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:vamsisai.mangapathi@gmail.com"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-900">
          © 2025 Vamsi Sai Mangapathi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
