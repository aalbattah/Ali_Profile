// Utility for scroll animations with enhanced effects

export const observeElements = () => {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered animation delay
        const delay = index * 100;
        setTimeout(() => {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections with initial hidden state
  const sections = document.querySelectorAll('section, [data-animate]');
  sections.forEach((section) => {
    (section as HTMLElement).style.opacity = '0';
    (section as HTMLElement).style.transform = 'translateY(30px)';
    (section as HTMLElement).style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  return observer;
};

