// Utility for scroll animations

export const observeElements = () => {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('section, [data-animate]');
  sections.forEach((section) => observer.observe(section));

  return observer;
};

