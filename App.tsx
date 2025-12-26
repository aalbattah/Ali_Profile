import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ExecutiveHeader from './components/ExecutiveHeader';
import SinglePage from './pages/SinglePage';
import { trackPageView } from './utils/analytics';

const App: React.FC = () => {
  useEffect(() => {
    // Track page view on mount
    trackPageView(window.location.pathname);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
        <ExecutiveHeader />
        <SinglePage />
        <footer className="border-t border-slate-200 dark:border-slate-700 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Ali Albattah
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
