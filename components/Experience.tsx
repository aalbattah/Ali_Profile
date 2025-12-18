import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience-section" className="py-16 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-600" size={32} />
          Professional Experience
        </h2>

        <div className="space-y-12">
          {RESUME_DATA.experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[29px] top-8 bottom-[-48px] w-0.5 bg-slate-200 last:bottom-0"></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
                {/* Icon/Timeline Marker */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm z-10 group-hover:border-blue-500 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl hover:border-blue-200 transition-all transform hover:scale-[1.01]">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                      <h4 className="text-lg text-blue-600 font-medium">{job.company}</h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-slate-500 gap-1">
                      <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
