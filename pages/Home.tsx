import React from 'react';
import { Download, Linkedin, User, Code, Server, Shield, Zap, Globe } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Home: React.FC = () => {
  const { name, objective } = RESUME_DATA.personalInfo;

  const featuredProjects = [
    {
      title: 'IT Service Management Framework',
      description: 'Designed and implemented comprehensive ITSM framework ensuring regulatory compliance and service quality across enterprise operations.',
      icon: Server,
    },
    {
      title: '24/7 Command Center Operations',
      description: 'Established and managed round-the-clock NOC operations supporting critical fintech infrastructure with 99.9% uptime.',
      icon: Zap,
    },
    {
      title: 'Fintech Platform Development',
      description: 'Led development of secure, scalable fintech platforms with integrated payment solutions and regulatory compliance.',
      icon: Code,
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Ensured compliance with financial regulations and implemented robust security standards for sensitive financial data.',
      icon: Shield,
    },
  ];

  const highlights = [
    { value: '80+', label: 'Users Supported' },
    { value: '50+', label: 'Enterprise Services' },
    { value: '20+', label: 'Transformation Programs' },
    { value: '15+', label: 'Years of Experience' },
  ];

  // Use actual skills from constants
  const expertise = RESUME_DATA.skills;

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
                  href="https://www.linkedin.com/in/ali-albattah-093b68ab/"
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

      {/* About Me */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              I am a seasoned technology leader with over 15 years of experience driving digital transformation 
              and operational excellence in the fintech and banking sectors. My expertise lies in building 
              high-performing teams, implementing robust IT service management frameworks, and delivering 
              scalable technology solutions that align with business objectives.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Saudi Arabia, I am passionate about leveraging technology to solve complex business 
              challenges and create value through innovation, strategic planning, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects & Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Featured Projects & Initiatives
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border-l-4 border-emerald-500 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {expertise.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Languages
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {RESUME_DATA.languages.map((lang, idx) => {
              const [language, proficiency] = lang.split('(');
              const level = proficiency?.replace(')', '') || 'Fluent';
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                >
                  <span className="text-base font-medium text-slate-900 dark:text-white">
                    {language.trim()}
                  </span>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                    {level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

