import React, { useState } from 'react';
import { Linkedin, User, Code, Server, Shield, Zap, Globe, Briefcase, Heart, BookOpen, Award, Calendar, MapPin, ChevronDown, ChevronUp, Mail, MessageSquare, Users, UsersRound, GraduationCap, Clock } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { decodeEmail } from '../utils/emailObfuscation';

const SinglePage: React.FC = () => {
  const { name, objective, email: encodedEmail, location } = RESUME_DATA.personalInfo;
  const email = decodeEmail(encodedEmail);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const arabicName = 'علي عبدالله البطاح';

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const highlights = [
    { value: '80+', label: 'Team Members Led', icon: Users },
    { value: '12M+', label: 'Customers Served', icon: UsersRound },
    { value: `${RESUME_DATA.certifications.length}+`, label: 'Certifications', icon: GraduationCap },
    { value: '15+', label: 'Years of Experience', icon: Clock },
  ];

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

  // Group certifications by category
  const categories = {
    'Leadership & Strategy': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('Leadership') ||
        cert.name.includes('Business') ||
        cert.name.includes('Habits')
    ),
    'Digital Transformation & Cloud': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('Digital') ||
        cert.name.includes('Cloud') ||
        cert.name.includes('Transformation')
    ),
    'Project & Risk Management': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('Project') ||
        cert.name.includes('Risk') ||
        cert.name.includes('PMP') ||
        cert.name.includes('PMI')
    ),
    'Infrastructure & Cybersecurity': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('HPE') ||
        cert.name.includes('VMware') ||
        cert.name.includes('Red Hat') ||
        cert.name.includes('Ethical Hacker') ||
        cert.name.includes('Veritas') ||
        cert.name.includes('InfoScale')
    ),
    'Other': RESUME_DATA.certifications.filter(
      (cert) =>
        !cert.name.includes('Leadership') &&
        !cert.name.includes('Business') &&
        !cert.name.includes('Habits') &&
        !cert.name.includes('Digital') &&
        !cert.name.includes('Cloud') &&
        !cert.name.includes('Transformation') &&
        !cert.name.includes('Project') &&
        !cert.name.includes('Risk') &&
        !cert.name.includes('PMP') &&
        !cert.name.includes('PMI') &&
        !cert.name.includes('HPE') &&
        !cert.name.includes('VMware') &&
        !cert.name.includes('Red Hat') &&
        !cert.name.includes('Ethical Hacker') &&
        !cert.name.includes('Veritas') &&
        !cert.name.includes('InfoScale')
    ),
  };

  const emba = RESUME_DATA.education.find((edu) =>
    edu.degree.includes('EMBA')
  );
  const otherEducation = RESUME_DATA.education.filter(
    (edu) => !edu.degree.includes('EMBA')
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {name}
                </h1>
                <p className="text-base md:text-lg lg:text-xl arabic-name mb-4">
                  {arabicName}
                </p>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">
                  Technology Operations & Infrastructure Leader
                </p>
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
                {objective}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/ali-albattah-093b68ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium hover:border-slate-900 dark:hover:border-slate-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
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
      <section id="highlights" className="py-16 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                  style={{
                    animation: `slideInFromLeft ${0.8 + idx * 0.2}s ease-out forwards`,
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                      {highlight.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {highlight.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              I am a seasoned technology leader with over 15 years of experience driving digital transformation and operational excellence in the fintech and banking sectors. My expertise lies in building high-performing teams, implementing robust IT service management frameworks, and delivering scalable technology solutions that align with business objectives.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Saudi Arabia, I am passionate about leveraging technology to solve complex business challenges and create value through innovation, strategic planning, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects & Initiatives */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
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

      {/* Professional Experience */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-6">
            {RESUME_DATA.experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedIndex === index ? (
                      <ChevronUp className="text-slate-400" size={20} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={20} />
                    )}
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
                    <ul className="mt-4 space-y-3">
                      {job.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                        >
                          <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Experience */}
      {RESUME_DATA.volunteering && RESUME_DATA.volunteering.length > 0 && (
        <section id="volunteering" className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <Heart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Volunteering Experience
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {RESUME_DATA.volunteering.map((volunteer, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Heart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                        {volunteer.role}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                        {volunteer.company}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{volunteer.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{volunteer.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {volunteer.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Training & Certifications */}
      <section id="training" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Training & Certifications
            </h2>
          </div>

          <div className="space-y-12">
            {Object.entries(categories).map(([category, certs]) => {
              if (certs.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight mb-1">
                              {cert.name}
                            </h4>
                            {cert.issuer && (
                              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                                {cert.issuer}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-500 mb-2">
                          {cert.period && (
                            <span className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                              {cert.period}
                            </span>
                          )}
                          {cert.year && (
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded font-medium">
                              {cert.year}
                            </span>
                          )}
                        </div>
                        {cert.location && (
                          <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                            📍 {cert.location}
                          </p>
                        )}
                        {cert.credentialId && (
                          <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                            Credential ID: {cert.credentialId}
                          </p>
                        )}
                        {cert.expired && (
                          <p className="text-xs text-slate-400 dark:text-slate-600">
                            Expired: {cert.expired}
                          </p>
                        )}
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                            {cert.skills.map((skill, skillIdx) => (
                              <span
                                key={skillIdx}
                                className="text-xs px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            {/* EMBA - Highlighted */}
            {emba && (
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border-2 border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-6">
                  {emba.logo && (
                    <div className="flex-shrink-0 w-20 h-20 bg-white dark:bg-slate-800 rounded-xl p-3 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                      <img
                        src={`${import.meta.env.BASE_URL}images/${emba.logo}`}
                        alt={`${emba.institution} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {emba.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-2">
                      {emba.institution}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {emba.location} • {emba.period}
                    </p>
                    {emba.details && emba.details.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {emba.details[0].split(',').map((focus, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium border border-emerald-200 dark:border-emerald-800"
                          >
                            {focus.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Other Education */}
            <div className="space-y-4">
              {otherEducation.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start gap-4">
                    {edu.logo && (
                      <div className="flex-shrink-0 w-16 h-16 bg-slate-50 dark:bg-slate-700 rounded-lg p-2 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                        <img
                          src={`${import.meta.env.BASE_URL}images/${edu.logo}`}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        {edu.location} • {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {RESUME_DATA.skills.map((skill, idx) => (
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
      <section id="languages" className="py-20 bg-slate-50 dark:bg-slate-900/50">
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

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageSquare className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Contact
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            Open to executive discussions, advisory roles, and strategic collaboration.
          </p>

          <div className="space-y-6">
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ali-albattah-093b68ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium hover:border-slate-900 dark:hover:border-slate-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 pt-4">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;


