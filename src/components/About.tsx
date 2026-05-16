import React from "react";
import { Code, Zap, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Code Advocate",
      description:
        "Writing maintainable, scalable code following best practices and industry standards.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance Focused",
      description:
        "Optimizing applications for speed and efficiency with modern web technologies.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Team Collaboration",
      description:
        "Working effectively with cross-functional teams to deliver exceptional results.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Pixel Perfect UI",
      description:
        "Building smooth, intuitive interfaces that delight users and drive business growth.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)), url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse top-20 right-20"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse bottom-20 left-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Frontend Developer who loves creating exceptional
            user experiences through clean, efficient code and modern web
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="prose prose-lg text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a Frontend Developer with around 3.6 years of experience, 
                mostly working with React.js, Next.js, and TypeScript. At Terralogic, 
                I've been a core part of building Blazeup — a large-scale HR platform — 
                where I handled everything from component architecture to API integration 
                across multiple modules.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in building reusable component libraries, state management 
                with Redux Toolkit and RTK Query, and modern styling with Tailwind CSS and 
                Shadcn/UI. My focus is always on creating scalable solutions that prioritize 
                performance and maintainability.
              </p>
              <p className="text-lg leading-relaxed">
                I genuinely enjoy the craft of building interfaces that feel smooth and 
                intuitive, and I take pride in writing code that's easy for other developers 
                to read and build on. I work well with designers and backend teams, and I'm 
                always looking for ways to make things faster, cleaner, or easier to maintain.
              </p>
              <p className="text-lg leading-relaxed">
                I've also explored backend development with Node.js, Express, and MongoDB, 
                which helped me understand the full picture and communicate better with 
                backend engineers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
