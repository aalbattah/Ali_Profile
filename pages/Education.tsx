import React from 'react';
import { GraduationCap } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Education: React.FC = () => {
  const emba = RESUME_DATA.education.find((edu) =>
    edu.degree.includes('EMBA')
  );
  const otherEducation = RESUME_DATA.education.filter(
    (edu) => !edu.degree.includes('EMBA')
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Education
        </h1>

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
                    <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {emba.degree}
                    </h2>
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
    </div>
  );
};

export default Education;

