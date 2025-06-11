import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  const getProjectIcon = (type) => {
    switch (type) {
      case 'Enterprise Digital Transformation':
        return '🏢';
      case 'Port Logistics Management':
        return '🚢';
      default:
        return '💼';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my experience in full-stack development with modern technologies and enterprise-level solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{getProjectIcon(project.type)}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {project.name}
                        </h2>
                        <p className="text-orange-500 font-semibold text-lg">
                          {project.type}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                        📅 {project.duration}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies & Tools
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-800 dark:hover:text-orange-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Project Highlights
                      </h4>
                      <ul className="space-y-3">
                        {project.name === 'FRIMAKE' ? (
                          <>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              Microservices architecture implementation
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              Digital transformation solution
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              Modern tech stack integration
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              Enterprise-level scalability
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              Port operations management system
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              Real-time logistics tracking
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              Complex data processing
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 mr-3 mt-1">✓</span>
                              High-performance architecture
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-orange-500 mr-3 mt-1">⭐</span>
                          Full-stack development
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-orange-500 mr-3 mt-1">⭐</span>
                          API design & implementation
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-orange-500 mr-3 mt-1">⭐</span>
                          Database optimization
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-orange-500 mr-3 mt-1">⭐</span>
                          Docker containerization
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in my work?</h3>
            <p className="text-orange-100 mb-6">
              I'm always excited to discuss new projects and opportunities
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;