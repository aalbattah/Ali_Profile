import React from 'react';
import { Download, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Home: React.FC = () => {
  const { name, objective } = RESUME_DATA.personalInfo;

  const highlights = [
    { value: '80+', label: 'Users Supported' },
    { value: '50+', label: 'Enterprise Services' },
    { value: '20+', label: 'Transformation Programs' },
    { value: '15+', label: 'Years of Experience' },
  ];

  const expertise = [
    'IT Operations',
    'Infrastructure & Cloud',
    'Service Management (ITIL)',
    'Governance & Risk',
    'Vendor Management',
    'Digital Transformation',
    'Fintech Solutions',
    'Strategic Planning',
    'Team Leadership',
    'Cybersecurity',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {name}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">
                  Technology Operations & Infrastructure Leader
                </p>
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
                {objective}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </button>
                <a
                  href="https://linkedin.com/in/alialbattah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium hover:border-slate-900 dark:hover:border-slate-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl transform rotate-3"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/1.jpg`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center border border-slate-200 dark:border-slate-700"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                  {highlight.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Core Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {expertise.map((skill, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

