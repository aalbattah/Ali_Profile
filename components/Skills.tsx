import React from 'react';
import { Award, Zap, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills-section" className="py-16 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Skills Column */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Zap className="text-blue-600" />
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 rounded-lg border border-blue-100/50 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 hover:shadow-md transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <BookOpen className="text-blue-600" />
              Education
            </h2>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-blue-500 pl-4 py-1">
                  <div className="flex items-start gap-3">
                    {edu.logo && (
                      <div className="flex-shrink-0 mt-1">
                        <img 
                          src={`${import.meta.env.BASE_URL}images/${edu.logo}`}
                          alt={`${edu.institution} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            // Hide image if it doesn't exist
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                      <div className="text-slate-600 text-sm mb-1">{edu.institution}</div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider">{edu.period}</div>
                      {edu.details && (
                        <p className="text-slate-500 text-sm mt-2">{edu.details.join(' ')}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Award className="text-blue-600" />
            Certifications
          </h2>
          <div className="grid gap-4">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100/50 hover:border-blue-300 hover:bg-blue-50/70 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  {cert.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1">{cert.name}</h3>
                  {cert.issuer && <p className="text-sm text-slate-600 font-medium mb-1">{cert.issuer}</p>}
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    {cert.period && <span>Issued {cert.period}</span>}
                    {cert.expired && <span className="text-orange-600">• Expired {cert.expired}</span>}
                    {cert.location && <span>• {cert.location}</span>}
                    {cert.credentialId && <span>• ID: {cert.credentialId}</span>}
                  </div>
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((skill, skillIdx) => (
                        <span key={skillIdx} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
             <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              Languages
            </h2>
             <div className="grid gap-3">
                {RESUME_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-100/50 hover:shadow-md transition-all">
                    <span className="font-medium text-slate-700">{lang.split('(')[0]}</span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{lang.split('(')[1]?.replace(')', '') || 'Fluent'}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
