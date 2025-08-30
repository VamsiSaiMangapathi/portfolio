import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_vbj6ysq",
        "template_4ejroao",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "n-J5sm_0TDZdLLxDy"
      )
      .then(
        () => {
          // toast.success("Message sent successfully!");
          toast.success("Message sent successfully!", {
            theme: "dark",
          });
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Error:", error.text);
          toast.error("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "vamsisai.mangapathi@gmail.com",
      link: "mailto:vamsisai.mangapathi@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 7013917151",
      link: "tel:+917013917151",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "India",
      link: null,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/VamsiSaiMangapathi",
      color: "hover:text-gray-300",
      bgColor: "from-gray-600 to-gray-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/vamsi-sai-mangapathi",
      color: "hover:text-blue-400",
      bgColor: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)), url('https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse bottom-20 right-20"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-4 h-4 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-32 w-6 h-6 bg-purple-400/30 rotate-45 animate-float-delayed"></div>
        <div className="absolute top-60 left-20 w-3 h-3 bg-cyan-400/30 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a friendly chat about web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Feel free to reach out if you want to discuss React.js, web
                development trends, or explore potential collaboration
                opportunities. I'm here to help and share knowledge.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg group-hover:text-blue-300 transition-colors duration-300">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-lg">
                        {info.content}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-600/50 animate-fade-in-up animation-delay-600">
              <h4 className="font-medium text-white mb-6 text-xl">Follow Me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${social.bgColor} rounded-xl text-white ${social.color} transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <span className="group-hover:animate-pulse">
                      {social.icon}
                    </span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 animate-slide-in-right">
            <h3 className="text-3xl font-semibold text-white mb-8">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  placeholder="Your Name"
                />
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="animate-fade-in-up animation-delay-400">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 animate-fade-in-up animation-delay-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
