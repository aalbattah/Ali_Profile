import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { X } from 'lucide-react';

const Header: React.FC = () => {
  const { name } = RESUME_DATA.personalInfo;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer"
          >
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              {name}
              <span className="text-xl">🇸🇦</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium hover:scale-105 relative group"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium hover:scale-105 relative group"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium hover:scale-105 relative group"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium hover:scale-105 relative group"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium hover:scale-105 relative group"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium hover:scale-105 relative group"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

