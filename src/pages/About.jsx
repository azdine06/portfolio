import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo, skills, languages, aboutMe } = portfolioData;

  const skillCategories = [
    { title: 'Programming Languages', skills: skills.programmingLanguages, icon: '💻' },
    { title: 'Backend Technologies', skills: skills.backend, icon: '⚙️' },
    { title: 'Frontend Technologies', skills: skills.frontend, icon: '🎨' },
    { title: 'Architecture & APIs', skills: skills.architecture, icon: '🏗️' },
    { title: 'Methodologies', skills: skills.methodologies, icon: '📋' },
    { title: 'DevOps & Tools', skills: skills.devOps, icon: '🔧' },
    { title: 'Databases', skills: skills.databases, icon: '🗄️' },
    { title: 'Testing & Quality', skills: skills.testing, icon: '🧪' },
    { title: 'Development Tools', skills: skills.tools, icon: '🛠️' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with a strong foundation in modern technologies and best practices
          </p>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  My Journey
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    {personalInfo.profileSummary}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">🎯</span>
                      <span><strong>Personality:</strong> {aboutMe.personality}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">💡</span>
                      <span><strong>Approach:</strong> {aboutMe.approach}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">🚀</span>
                      <span><strong>Goal:</strong> {aboutMe.goal}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {personalInfo.email}
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {personalInfo.location}
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" />
                      </svg>
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">{lang.language}</span>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center py-2 px-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values & Principles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Values & Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Clean Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Writing maintainable, readable, and efficient code following best practices
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Staying updated with latest technologies and implementing modern solutions
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Working effectively in teams using Agile methodologies and communication
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Continuous learning and improvement to deliver high-impact projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;