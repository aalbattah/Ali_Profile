import React from 'react';
import { Award, Zap, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills-section" className="py-12 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Skills Column */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Zap className="text-slate-600" />
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {RESUME_DATA.skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg p-3 border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-2.5"
              >
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700 flex-1">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <BookOpen className="text-slate-600" />
              Education
            </h2>
            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg p-5 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    {edu.logo && (
                      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-lg p-2.5 flex items-center justify-center border border-slate-200">
                        <img 
                          src={`${import.meta.env.BASE_URL}images/${edu.logo}`}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Hide image if it doesn't exist
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-base mb-1">
                        {edu.degree}
                      </h3>
                      <div className="text-slate-600 font-medium text-sm mb-2 flex items-center gap-2">
                        <span>{edu.institution}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal text-xs">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-slate-500 text-xs font-medium bg-slate-100 px-2.5 py-0.5 rounded">
                          {edu.period}
                        </span>
                        {edu.details && edu.details.length > 0 && (
                          <span className="text-slate-400 text-xs">
                            {edu.details[0]}
                          </span>
                        )}
                      </div>
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
            <Award className="text-slate-600" />
            Certifications
          </h2>
          <div className="grid gap-3">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 font-semibold text-xs">
                  {cert.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-slate-900 mb-1 text-sm">{cert.name}</h3>
                  {cert.issuer && <p className="text-xs text-slate-600 mb-1.5">{cert.issuer}</p>}
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-500 mb-2">
                    {cert.period && <span>Issued {cert.period}</span>}
                    {cert.expired && <span className="text-slate-400">• Expired {cert.expired}</span>}
                    {cert.location && <span>• {cert.location}</span>}
                    {cert.credentialId && <span>• ID: {cert.credentialId}</span>}
                  </div>
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIdx) => (
                        <span key={skillIdx} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
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
             <div className="grid gap-2.5">
                {RESUME_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-sm font-medium text-slate-700">{lang.split('(')[0]}</span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{lang.split('(')[1]?.replace(')', '') || 'Fluent'}</span>
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
