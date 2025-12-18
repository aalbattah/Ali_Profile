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
    <div className="fixed top-0 left-0 w-full h-1.5 bg-blue-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 transition-all duration-300 ease-out shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

