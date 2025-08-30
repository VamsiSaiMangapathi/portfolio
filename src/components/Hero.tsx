import React from "react";
import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9)), url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse bottom-10 right-10 animation-delay-2000"></div>
        <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-cyan-400/30 rotate-12 animate-float-slow"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-indigo-400/30 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-pink-400/30 rounded-full animate-float-delayed"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-glow">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient-x">
                Vamsi Sai Mangapathi
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-4 font-medium animate-slide-in-left">
              Frontend Developer | React & Next.js
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-right">
              I craft modern, responsive web applications using React.js,
              Next.js, and the latest technologies. With 3+ years of experience,
              I help businesses bring their ideas to life with clean, impactful
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animation-delay-1000">
              <a
                href="#contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="mr-2">Let's Connect</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </a>
              <a
                href="/VamsiResume.pdf"
                download="VamsiSaiMangapathi_FrontendDeveloper_Resume"
                className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20 hover:border-white/30 transform hover:scale-105 hover:-translate-y-1"
              >
                <Download className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                Download Resume
              </a>
            </div>
            <div className="flex justify-center space-x-8 mb-16 animate-fade-in-up animation-delay-1500">
              <a
                href="https://github.com/VamsiSaiMangapathi"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:shadow-white/25"
              >
                <FiGithub className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/vamsi-sai-mangapathi"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-400/25"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="mailto:vamsisai.mangapathi@gmail.com"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-400/25"
              >
                <Mail className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <a
              href="#about"
              className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 group"
            >
              <ArrowDown className="w-8 h-8 text-white/70 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
