import React from "react";
import {
  Building,
  Calendar,
  CheckCircle,
  Users,
  Target,
  LogOut,
  Briefcase,
  Ticket,
} from "lucide-react";

const Experience = () => {
  const projectModules = [
    {
      name: "Onboarding & Offboarding",
      description:
        "Built screens for document collection, task checklists, welcome kit tracking, clearance workflows, asset return tracking, exit interview forms, and multi-step approval chains.",
      icon: <LogOut className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Asset Management",
      description:
        "Created screens for tracking asset assignments, handling return requests, and displaying asset movement history across the organization.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Performance Appraisal (EPAS)",
      description:
        "Developed goal-setting and review cycle screens enabling employees to set goals, conduct self-reviews, and managers to evaluate them through structured flows.",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Task & Project Management",
      description:
        "Implemented Kanban-style task board with filters, priority flags, and due date alerts. Built project-level views for billing rates, resource allocation, and progress tracking.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Customer Management",
      description:
        "Developed profile pages and management screens for customers, including agreements, site locations, and key contact information.",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Ticket Management",
      description:
        "Built a support ticket system for employees to raise issues and track status. Included views for team leads to triage, assign, and close tickets.",
      icon: <Ticket className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Employee Management",
      description:
        "Created screens for managing employee profiles, department assignments, reporting structures, and employment details with org hierarchy views.",
      icon: <Users className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse bottom-20 right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey in frontend development and the impactful projects I've
            worked on.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 animate-slide-in-up">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-white mb-2">
                  Terralogic Software Solutions
                </h3>
                <p className="text-lg text-blue-300 font-medium mb-3">
                  Software Engineer II (Frontend Developer)
                </p>
                <div className="flex items-center text-gray-300 mb-6">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span className="text-lg">
                    August 2022 – Present • 4 Years Experience
                  </span>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Working as a Frontend Developer II specializing in React.js,
                  Next.js, and TypeScript. Core responsibilities include
                  building and maintaining complex web applications with focus
                  on performance, user experience, and code quality. Built and
                  maintained a shared component library of 30+ components using
                  Storybook, bringing overall page load performance up by around
                  20% using Next.js features like SSR, lazy loading, and proper
                  image handling.
                </p>

                <div className="border-t border-gray-600/50 pt-8">
                  <h4 className="text-2xl font-semibold text-white mb-6">
                    Blazeup – HR Platform | Key Modules Developed
                  </h4>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    Led the development of multiple critical modules in Blazeup,
                    a comprehensive multi-module HR platform that handles the
                    full employee lifecycle — hiring, onboarding, performance
                    reviews, asset tracking, task management, and offboarding.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectModules.map((module, index) => (
                      <div
                        key={index}
                        className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 bg-gradient-to-r ${module.color} rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                          >
                            {module.icon}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                              {module.name}
                            </h5>
                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 animate-slide-in-up">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Key Achievements & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  7
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Modules Developed
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  30+
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Shared Components
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  20%
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Performance Improvement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
