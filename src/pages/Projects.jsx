import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = ({ setCurrentPage }) => {
  const { projects } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getProjectData = (projectName) => {
    const projectsData = {
      'FRIMAKE': {
        icon: '🏢',
        gradient: 'from-blue-500 via-indigo-500 to-purple-500',
        bgGradient: 'from-blue-500/10 to-purple-500/10',
        highlights: [
          'Microservices architecture implementation',
          'Digital transformation solution',
          'Modern tech stack integration',
          'Enterprise-level scalability'
        ],
        contributions: [
          { icon: '⚡', text: 'Full-stack development' },
          { icon: '🔗', text: 'API design & implementation' },
          { icon: '🗄️', text: 'Database optimization' },
          { icon: '🐳', text: 'Docker containerization' }
        ]
      },
      'RBN Somalev': {
        icon: '🚢',
        gradient: 'from-cyan-500 via-blue-500 to-blue-600',
        bgGradient: 'from-cyan-500/10 to-blue-500/10',
        highlights: [
          'Port operations management system',
          'Real-time logistics tracking',
          'Complex data processing',
          'High-performance architecture'
        ],
        contributions: [
          { icon: '⚡', text: 'Full-stack development' },
          { icon: '🔗', text: 'API design & implementation' },
          { icon: '🗄️', text: 'Database optimization' },
          { icon: '🐳', text: 'Docker containerization' }
        ]
      },
      'WindShield': {
        icon: '🌬️',
        gradient: 'from-green-500 via-emerald-500 to-teal-500',
        bgGradient: 'from-green-500/10 to-teal-500/10',
        highlights: [
          'Real-time wind turbine monitoring dashboard',
          'Advanced metrics visualization (Power Factor, Availability)',
          'Dynamic notifications system',
          'Responsive design with Mantine UI'
        ],
        contributions: [
          { icon: '🎨', text: 'UI/UX Development' },
          { icon: '📊', text: 'Data visualization' },
          { icon: '🔔', text: 'Notification system' },
          { icon: '📱', text: 'Responsive design' }
        ]
      }
    };
    return projectsData[projectName] || {
      icon: '💼',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/10 to-orange-600/10',
      highlights: [],
      contributions: []
    };
  };

  const getTechColor = (tech) => {
    const colors = {
      'Java 21': 'from-red-500 to-orange-500',
      'Spring Boot': 'from-green-500 to-emerald-500',
      'Microservices': 'from-purple-500 to-indigo-500',
      'Next.js': 'from-gray-800 to-gray-900',
      'TypeScript': 'from-blue-500 to-blue-600',
      'PostgreSQL': 'from-blue-600 to-indigo-600',
      'Docker': 'from-blue-400 to-cyan-500',
      'React': 'from-cyan-400 to-blue-500',
      'Mantine UI': 'from-blue-500 to-indigo-500',
      'Vite': 'from-purple-500 to-yellow-500',
      'CSS Modules': 'from-pink-500 to-rose-500',
      'Responsive Design': 'from-green-400 to-teal-500'
    };
    return colors[tech] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
            <span className="text-lg mr-2">🚀</span>
            Featured Projects
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my experience in full-stack development with modern technologies and enterprise-level solutions
          </p>
        </div>

        {/* Project Stats */}
        <div className={`grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: projects.length, label: 'Projects', icon: '📁' },
            { value: '15+', label: 'Technologies', icon: '⚡' },
            { value: '100%', label: 'Dedication', icon: '🎯' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const projectData = getProjectData(project.name);
            const isActive = activeProject === index;

            return (
              <div
                key={index}
                className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div
                  className={`relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-500 ${isActive ? 'shadow-2xl scale-[1.02]' : 'shadow-lg hover:shadow-xl'}`}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${projectData.gradient}`} />

                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${projectData.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative p-8 lg:p-10">
                    {/* Project Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                      {/* Icon */}
                      <div className={`w-20 h-20 bg-gradient-to-br ${projectData.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        {projectData.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            {project.name}
                          </h2>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${projectData.gradient} text-white`}>
                            {project.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {project.duration}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </span>
                        Technologies & Tools
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-default ${hoveredTech === `${index}-${i}`
                                ? `bg-gradient-to-r ${getTechColor(tech)} text-white shadow-lg scale-105`
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                            onMouseEnter={() => setHoveredTech(`${index}-${i}`)}
                            onMouseLeave={() => setHoveredTech(null)}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Highlights */}
                      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          Project Highlights
                        </h4>
                        <ul className="space-y-3">
                          {projectData.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start group/item">
                              <span className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                ✓
                              </span>
                              <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contributions */}
                      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                          Key Contributions
                        </h4>
                        <ul className="space-y-3">
                          {projectData.contributions.map((contribution, i) => (
                            <li key={i} className="flex items-start group/item">
                              <span className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                {contribution.icon}
                              </span>
                              <span className="text-gray-700 dark:text-gray-300">{contribution.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Open to new opportunities
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                Interested in my work?
              </h3>
              <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                I'm always excited to discuss new projects and opportunities. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentPage && setCurrentPage('contact')}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Let's Connect
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentPage && setCurrentPage('about')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Learn More About Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;