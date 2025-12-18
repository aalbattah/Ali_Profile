import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Professional Experience
        </h1>

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
    </div>
  );
};

export default Experience;

