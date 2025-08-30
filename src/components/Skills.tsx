import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Palette,
  Settings,
  Layers,
  BookOpen,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React.js", color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", color: "from-gray-200 to-blue-600" },
        { name: "TypeScript", color: "from-blue-600 to-blue-800" },
        { name: "JavaScript ES6+", color: "from-yellow-500 to-orange-500" },
      ],
    },
    {
      title: "State Management",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: "Redux", color: "from-purple-500 to-purple-700" },
        { name: "RTK Query", color: "from-indigo-500 to-purple-600" },
        { name: "Context API", color: "from-green-500 to-teal-500" },
      ],
    },
    {
      title: "Backend & Learning",
      icon: <Database className="w-6 h-6" />,
      skills: [
        {
          name: "Node.js",
          color: "from-green-600 to-green-800",
          isLearning: true,
        },
        {
          name: "Express.js",
          color: "from-gray-600 to-purple-800",
          isLearning: true,
        },
        {
          name: "MongoDB",
          color: "from-green-500 to-green-700",
          isLearning: true,
        },
        { name: "REST APIs", color: "from-blue-600 to-indigo-600" },
      ],
    },
    {
      title: "Styling & UI",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Tailwind CSS", color: "from-cyan-500 to-blue-500" },
        { name: "CSS3", color: "from-pink-500 to-rose-500" },
        { name: "SCSS", color: "from-pink-600 to-purple-600" },
        { name: "Styled Components", color: "from-yellow-600 to-red-500" },
        { name: "Material-UI", color: "from-blue-600 to-indigo-600" },
        { name: "Ant Design", color: "from-red-500 to-pink-500" },
        { name: "Storybook", color: "from-indigo-500 to-purple-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", color: "from-orange-500 to-red-500" },
        { name: "Vite", color: "from-purple-600 to-blue-600" },
        { name: "Responsive Design", color: "from-teal-500 to-cyan-500" },
        {
          name: "Cross-browser Compatibility",
          color: "from-indigo-500 to-purple-500",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.95)), url('https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>
        <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse top-1/2 left-1/4"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-blue-400/20 text-6xl font-mono animate-float">
          {"</>"}
        </div>
        <div className="absolute top-40 right-32 text-purple-400/20 text-4xl font-mono animate-float-delayed">
          {"{}"}
        </div>
        <div className="absolute bottom-32 left-40 text-cyan-400/20 text-5xl font-mono animate-float-slow">
          {"[]"}
        </div>
        <div className="absolute top-60 right-20 text-green-400/20 text-3xl font-mono animate-float">
          {"()"}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to build amazing web
            applications, including my current learning journey into backend
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6 pb-4 border-b border-gray-600/30">
                <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mr-3 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
                {category.title === "Backend & Learning" && (
                  <BookOpen className="w-4 h-4 ml-2 text-green-400 animate-pulse" />
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group/skill relative px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full text-white text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                    style={{
                      animationDelay: `${
                        categoryIndex * 200 + skillIndex * 100
                      }ms`,
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      {skill.name}
                      {skill.isLearning && (
                        <span className="ml-2 w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
