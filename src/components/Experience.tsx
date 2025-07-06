import React from 'react';
import { Building, Calendar, CheckCircle, Users, DollarSign, Target, FolderOpen, Calculator } from 'lucide-react';

const Experience = () => {
  const projectModules = [
    {
      name: "Asset Management",
      description: "Developed comprehensive asset tracking and management system with real-time updates and reporting capabilities.",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Payroll System",
      description: "Built automated payroll processing system with salary calculations, tax deductions, and payment scheduling.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "EPAS (Employee Performance Appraisal System)",
      description: "Created performance evaluation platform with goal setting, progress tracking, and automated review cycles.",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Task Management",
      description: "Implemented task assignment, tracking, and collaboration features with real-time notifications.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Customer Management",
      description: "Developed CRM module for customer data management, communication tracking, and relationship building.",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Project Management",
      description: "Built project planning and execution tools with timeline tracking, resource allocation, and progress monitoring.",
      icon: <FolderOpen className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse bottom-20 right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey in frontend development and the impactful projects I've worked on.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Current Role */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 animate-slide-in-up">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-white mb-3">
                  Frontend Developer
                </h3>
                <div className="flex items-center text-gray-300 mb-6">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span className="text-lg">Current Position • 3+ Years Experience</span>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Working as a Frontend Developer with expertise in React.js, Next.js, Redux, and modern web technologies. 
                  Responsible for developing and maintaining complex web applications with focus on performance, 
                  user experience, and code quality.
                </p>
                
                <div className="border-t border-gray-600/50 pt-8">
                  <h4 className="text-2xl font-semibold text-white mb-6">
                    HR-OS Project - Key Modules Developed
                  </h4>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    Led the development of multiple critical modules in the HR-OS (Human Resource Operating System) project, 
                    a comprehensive enterprise solution for managing various HR and business operations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectModules.map((module, index) => (
                      <div
                        key={index}
                        className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 bg-gradient-to-r ${module.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
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

          {/* Key Achievements */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 animate-slide-in-up animation-delay-500">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Key Achievements & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">6+</div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Modules Developed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">On-Time Delivery</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;