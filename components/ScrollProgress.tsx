import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 z-50 shadow-sm">
      <div
        className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-300 ease-out relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

export default ScrollProgress;

