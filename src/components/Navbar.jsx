import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'landing', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setCurrentPage('landing')}
                className="group relative flex items-center"
              >
                {/* Logo Icon */}
                <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <span className="text-white font-bold text-lg">A</span>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-xl border-2 border-orange-400/50 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '1.5s' }} />
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-yellow-600 transition-all duration-300">
                    AZ.EDDINE
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
                    Full Stack Developer
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="relative flex items-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-1.5">
                {/* Active indicator */}
                <div
                  className="absolute h-[calc(100%-12px)] bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30"
                  style={{
                    width: `${100 / navItems.length}%`,
                    left: `calc(${navItems.findIndex(item => item.id === currentPage) * (100 / navItems.length)}% + 6px)`,
                    transform: 'translateX(-6px)'
                  }}
                />

                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative z-10 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${currentPage === item.id
                        ? 'text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    <span className={`mr-2 transition-transform duration-300 ${hoveredItem === item.id ? 'scale-125' : ''}`}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button - Desktop */}
              <button
                onClick={() => setCurrentPage('contact')}
                className="hidden lg:flex items-center px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hire Me
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="relative w-5 h-4 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-45 translate-x-px' : ''}`} />
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-3' : ''}`} />
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-45 translate-x-px' : ''}`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ${isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${currentPage === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                <span className="text-xl mr-3">{item.icon}</span>
                {item.label}
                {currentPage === item.id && (
                  <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium shadow-lg shadow-orange-500/30"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;