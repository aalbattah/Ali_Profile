import React from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Volunteering: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Volunteering Experience
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {RESUME_DATA.volunteering?.map((volunteer, idx) => (
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
                {volunteer.details.slice(0, 3).map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteering;

