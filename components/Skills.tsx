import React from 'react';
import { Award, Zap, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills-section" className="py-8 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Skills Column */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Zap className="text-blue-600" size={28} />
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {RESUME_DATA.skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg p-3 border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex items-center gap-2.5"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700 flex-1">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <BookOpen className="text-blue-600" size={28} />
              Education
            </h2>
            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg p-5 border-l-4 border-blue-500 shadow-sm hover:shadow-md hover:border-blue-600 transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    {edu.logo && (
                      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-lg p-2.5 flex items-center justify-center border border-blue-100">
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
                      <div className="text-blue-600 font-medium text-sm mb-2 flex items-center gap-2">
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
            <Award className="text-blue-600" size={28} />
            Certifications
          </h2>
          <div className="space-y-3">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-blue-100 hover:border-blue-300 p-4 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm leading-tight">{cert.name}</h3>
                    {cert.issuer && (
                      <p className="text-xs text-blue-600 font-medium mb-1">{cert.issuer}</p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-500 mb-2">
                  {cert.period && <span className="bg-slate-50 px-2 py-0.5 rounded">Issued {cert.period}</span>}
                  {cert.expired && <span className="bg-slate-50 px-2 py-0.5 rounded text-slate-400">Expired {cert.expired}</span>}
                  {cert.location && <span className="bg-slate-50 px-2 py-0.5 rounded">{cert.location}</span>}
                  {cert.credentialId && <span className="bg-slate-50 px-2 py-0.5 rounded">ID: {cert.credentialId}</span>}
                </div>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cert.skills.map((skill, skillIdx) => (
                      <span key={skillIdx} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
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
