import React from "react";
import { portfolioData } from "../data/portfolioData";

const Landing = () => {
  const { personalInfo, skills, experience, education } = portfolioData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {personalInfo.displayName}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-orange-100 font-medium">
              {personalInfo.title}
            </p>
            <p className="text-lg mb-8 text-orange-50 max-w-3xl">
              {personalInfo.profileSummary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start text-orange-100">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {personalInfo.email}
              </div>
              <div className="flex items-center justify-center lg:justify-start text-orange-100">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {personalInfo.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                2024
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Master's Graduate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">11</div>
              <div className="text-gray-600 dark:text-gray-400">
                Months Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-400">
                Major Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Professional Experience
          </h2>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-orange-500 font-semibold mb-2">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.duration} • {exp.methodology}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.context}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.mainResponsibilities.slice(0, 4).map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technicalEnvironment.slice(0, 8).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm"
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

      {/* Education */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    {edu.institution && (
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {edu.institution}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to collaborate?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how I can contribute to your next project
          </p>
          <button
            onClick={() => (window.location.hash = "contact")}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
