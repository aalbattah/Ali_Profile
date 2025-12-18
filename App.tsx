import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ExecutiveHeader from './components/ExecutiveHeader';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Volunteering from './pages/Volunteering';
import Training from './pages/Training';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
          <ExecutiveHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/volunteering" element={<Volunteering />} />
            <Route path="/training" element={<Training />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer className="border-t border-slate-200 dark:border-slate-700 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Ali Albattah
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
