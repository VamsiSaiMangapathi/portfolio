import React, { useState, useEffect } from "react";

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
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", level: 90, color: "from-gray-200 to-blue-600" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
        {
          name: "JavaScript ES6+",
          level: 95,
          color: "from-yellow-500 to-orange-500",
        },
      ],
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux", level: 92, color: "from-purple-500 to-purple-700" },
        {
          name: "RTK Query",
          level: 88,
          color: "from-indigo-500 to-purple-600",
        },
        { name: "Context API", level: 85, color: "from-green-500 to-teal-500" },
      ],
    },
    {
      title: "Backend & Learning",
      skills: [
        {
          name: "Node.js",
          level: 60,
          color: "from-green-600 to-green-800",
          isLearning: true,
        },
        {
          name: "Express.js",
          level: 55,
          color: "from-gray-600 to-purple-800",
          isLearning: true,
        },
        {
          name: "MongoDB",
          level: 50,
          color: "from-green-500 to-green-700",
          isLearning: true,
        },
        { name: "REST APIs", level: 90, color: "from-blue-600 to-indigo-600" },
      ],
    },
    {
      title: "Styling & UI",
      skills: [
        { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-blue-500" },
        { name: "CSS3", level: 90, color: "from-pink-500 to-rose-500" },
        { name: "SCSS", level: 85, color: "from-pink-600 to-purple-600" },
        {
          name: "Styled Components",
          level: 80,
          color: "from-yellow-600 to-red-500",
        },
        {
          name: "Material-UI",
          level: 75,
          color: "from-blue-600 to-indigo-600",
        },
        { name: "Ant Design", level: 78, color: "from-red-500 to-pink-500" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88, color: "from-orange-500 to-red-500" },
        { name: "Vite", level: 85, color: "from-purple-600 to-blue-600" },
        {
          name: "Responsive Design",
          level: 92,
          color: "from-teal-500 to-cyan-500",
        },
        {
          name: "Cross-browser Compatibility",
          level: 87,
          color: "from-indigo-500 to-purple-500",
        },
      ],
    },
  ];

  const SkillBar = ({
    skill,
    index,
  }: {
    skill: { name: string; level: number; color: string; isLearning?: boolean };
    index: number;
  }) => (
    <div
      className="mb-6 animate-slide-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-white flex items-center">
          {skill.name}
          {skill.isLearning && (
            <span className="ml-2 px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30 animate-pulse">
              Learning
            </span>
          )}
        </span>
        <span className="text-sm text-gray-300 font-semibold">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-2000 ease-out transform origin-left shadow-lg`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`,
          }}
        />
      </div>
    </div>
  );

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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>
        <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse top-1/2 left-1/4"></div>
      </div>

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-blue-400/20 text-6xl font-mono animate-float">
          {"</>"}
        </div>
        <div className="absolute top-40 right-32 text-purple-400/20 text-4xl font-mono animate-float-delayed">
          {}
        </div>
        <div className="absolute bottom-32 left-40 text-cyan-400/20 text-5xl font-mono animate-float-slow">
          []
        </div>
        <div className="absolute top-60 right-20 text-green-400/20 text-3xl font-mono animate-float">
          ()
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
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
              className="group bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 border-b border-gray-600/50 pb-4 group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                {category.title}
                {category.title === "Backend & Learning" && (
                  <span className="ml-2 text-sm bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                    🚀 Currently Learning
                  </span>
                )}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
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
