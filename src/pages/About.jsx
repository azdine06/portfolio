import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const About = ({ setCurrentPage }) => {
  const { personalInfo, skills, languages, aboutMe } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    { title: 'Programming Languages', skills: skills.programmingLanguages, icon: '💻', gradient: 'from-blue-500 to-indigo-500', color: 'blue' },
    { title: 'Backend Technologies', skills: skills.backend, icon: '⚙️', gradient: 'from-green-500 to-emerald-500', color: 'green' },
    { title: 'Frontend Technologies', skills: skills.frontend, icon: '🎨', gradient: 'from-pink-500 to-rose-500', color: 'pink' },
    { title: 'Architecture & APIs', skills: skills.architecture, icon: '🏗️', gradient: 'from-purple-500 to-violet-500', color: 'purple' },
    { title: 'Methodologies', skills: skills.methodologies, icon: '📋', gradient: 'from-orange-500 to-amber-500', color: 'orange' },
    { title: 'DevOps & Tools', skills: skills.devOps, icon: '🔧', gradient: 'from-cyan-500 to-blue-500', color: 'cyan' },
    { title: 'Databases', skills: skills.databases, icon: '🗄️', gradient: 'from-yellow-500 to-orange-500', color: 'yellow' },
    { title: 'Testing & Quality', skills: skills.testing, icon: '🧪', gradient: 'from-red-500 to-pink-500', color: 'red' },
    { title: 'Development Tools', skills: skills.tools, icon: '🛠️', gradient: 'from-slate-500 to-gray-600', color: 'slate' }
  ];

  const values = [
    {
      icon: '✨',
      title: 'Clean Code',
      desc: 'Writing maintainable, readable, and efficient code following best practices',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      desc: 'Staying updated with latest technologies and implementing modern solutions',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      desc: 'Working effectively in teams using Agile methodologies',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📈',
      title: 'Growth',
      desc: 'Continuous learning and improvement to deliver high-impact projects',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
            <span className="text-lg mr-2">👨‍💻</span>
            Full Stack Developer
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with a strong foundation in modern technologies and best practices
          </p>
        </div>

        {/* Personal Story Section */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-5 gap-12 items-start">
              {/* Left: Profile & Story */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    🎯
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">My Journey</h2>
                    <p className="text-gray-400">Développeur Full Stack passionné</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-orange-500 pl-6">
                  {personalInfo.profileSummary}
                </p>

                {/* Traits */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: '🎯', label: 'Personality', value: aboutMe.personality },
                    { icon: '💡', label: 'Approach', value: aboutMe.approach },
                    { icon: '🚀', label: 'Goal', value: aboutMe.goal }
                  ].map((trait, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/30 transition-colors">
                      <div className="text-2xl mb-2">{trait.icon}</div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{trait.label}</p>
                      <p className="text-gray-200 text-sm">{trait.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Contact & Languages */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                      📬
                    </span>
                    Contact
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                      { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>, value: personalInfo.location },
                      { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" /></svg>, value: personalInfo.phone, href: `tel:${personalInfo.phone}` }
                    ].map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className={`flex items-center text-gray-300 hover:text-orange-400 transition-colors ${contact.href ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <span className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 mr-3">
                          {contact.icon}
                        </span>
                        <span className="text-sm">{contact.value}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Languages Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                      🌍
                    </span>
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{lang.language}</span>
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 rounded-full text-xs font-medium border border-orange-500/20">
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
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${activeSkillCategory === index ? 'ring-2 ring-orange-500' : ''}`}
                onMouseEnter={() => setActiveSkillCategory(index)}
                onMouseLeave={() => setActiveSkillCategory(null)}
              >
                {/* Gradient border top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`} />

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-4">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${activeSkillCategory === index
                            ? `bg-gradient-to-r ${category.gradient} text-white`
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values & Principles */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Values & Principles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {value.icon}
                </div>

                <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="relative text-gray-600 dark:text-gray-400 text-sm">
                  {value.desc}
                </p>

                {/* Bottom decoration */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center">
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                Let's Work Together!
              </h3>
              <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentPage && setCurrentPage('contact')}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Get In Touch
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentPage && setCurrentPage('projects')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  View My Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;