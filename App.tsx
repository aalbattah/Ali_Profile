import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Loading from './components/Loading';
import ChatBot from './components/ChatBot';
import { observeElements } from './utils/scrollAnimations';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize scroll animations
    observeElements();
  }, []);

  return (
    <>
      <Loading />
      <div className="min-h-screen text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      {/* Mat background */}
      <div className="fixed inset-0 -z-10 bg-slate-50" />

      <ScrollProgress />
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <main>
        <div id="about">
          <About />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 my-6 opacity-50"></div>
        </div>
        {/* Achievements and Projects Side by Side */}
        <section className="py-12 relative" data-animate>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="w-full">
                <Achievements />
              </div>
              <div className="w-full">
                <FeaturedProjects />
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-slate-200 my-6"></div>
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-slate-200 my-6"></div>
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 my-6 opacity-50"></div>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <footer className="bg-slate-900/90 backdrop-blur-sm text-slate-400 py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-white mb-2">Ali Albattah</p>
            <p className="text-sm mb-4">Senior Director of Technology Operations | Fintech & Digital Transformation Expert</p>
            <div className="flex justify-center gap-4 mb-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/aalbattah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-sm border-t border-slate-700 pt-6">
            <p>&copy; {new Date().getFullYear()} Ali Albattah. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
      <ChatBot />
      </div>
    </>
  );
};

export default App;

