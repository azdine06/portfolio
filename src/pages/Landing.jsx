import React, { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ setCurrentPage }) => {
  const { personalInfo, skills, experience, education } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-float"
          style={{
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Dynamic Background */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(249, 115, 22, 0.3) 0%, 
              transparent 50%),
            linear-gradient(135deg, 
              #1a1a2e 0%, 
              #16213e 25%, 
              #0f3460 50%, 
              #1a1a2e 100%)
          `,
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/10 animate-gradient-shift" />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Main content */}
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Glowing badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6 backdrop-blur-sm animate-pulse-slow">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Open to opportunities
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="block">Hello, I'm</span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                  {personalInfo.displayName}
                </span>
              </h1>

              <p className="text-xl lg:text-2xl mb-6 text-orange-200 font-medium">
                {personalInfo.title}
              </p>

              <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed">
                {personalInfo.profileSummary}
              </p>

              {/* Contact info with icons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center justify-center lg:justify-start px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-orange-500/20 hover:border-orange-500/30 hover:text-orange-300 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {personalInfo.email}
                </a>
                <div className="flex items-center justify-center lg:justify-start px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {personalInfo.location}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setCurrentPage("projects")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View My Work
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <button
                  onClick={() => setCurrentPage("contact")}
                  className="px-8 py-4 border-2 border-orange-500/50 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Animated illustration/decoration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Rotating rings */}
                <div className="absolute inset-0 border-2 border-orange-500/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border-2 border-orange-500/30 rounded-full animate-spin-slow-reverse" />
                <div className="absolute inset-8 border-2 border-orange-500/40 rounded-full animate-spin-slow" />

                {/* Center content */}
                <div className="absolute inset-12 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="text-sm text-gray-300 font-medium">Full Stack</div>
                    <div className="text-xs text-orange-400">Developer</div>
                  </div>
                </div>

                {/* Floating tech icons */}
                {['⚛️', '☕', '🗄️', '🐳'].map((icon, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl animate-float border border-white/20"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: i % 2 === 0 ? '-10%' : '90%',
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Quick Stats - Updated with animations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2024', label: "Master's Graduate", icon: '🎓' },
              { value: '11', label: 'Months Experience', icon: '💼' },
              { value: '3', label: 'Major Projects', icon: '🚀' },
              { value: '15+', label: 'Technologies', icon: '⚡' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Overview - Updated */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
          </div>

          {experience.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 rounded-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl">
                      💼
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-orange-500 font-semibold">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                      📅 {exp.duration}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      🔄 {exp.methodology}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg border-l-4 border-orange-500 pl-4 italic">
                {exp.context}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="mr-2">📋</span> Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.mainResponsibilities.slice(0, 4).map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 dark:text-gray-300 group/item"
                      >
                        <span className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500 mr-3 mt-0.5 text-sm flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          ✓
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="mr-2">🛠️</span> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technicalEnvironment.slice(0, 10).map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/40 text-orange-800 dark:text-orange-200 rounded-lg text-sm font-medium border border-orange-200 dark:border-orange-800/30 hover:scale-105 transition-transform cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education - Updated */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative md:pl-20 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-orange-500 rounded-full border-4 border-white dark:border-gray-800 hidden md:block group-hover:scale-125 transition-transform" />

                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                          🎓
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          {edu.institution && (
                            <p className="text-gray-600 dark:text-gray-400 mt-1 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                              </svg>
                              {edu.institution}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Updated */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-[length:200%_100%] animate-gradient-x" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zNCAyNGgtMnYtMmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how I can contribute to your next project and bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="group px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
