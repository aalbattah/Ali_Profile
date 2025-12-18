import React from 'react';
import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';

const achievements = [
  { icon: Users, value: '80+', label: 'Team Members Led', color: 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white', shadow: 'shadow-blue-200' },
  { icon: Briefcase, value: '15+', label: 'Years Experience', color: 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white', shadow: 'shadow-indigo-200' },
  { icon: TrendingUp, value: '99.9%', label: 'Service Uptime', color: 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white', shadow: 'shadow-emerald-200' },
  { icon: Award, value: '14+', label: 'Certifications', color: 'bg-gradient-to-br from-amber-500 to-orange-500 text-white', shadow: 'shadow-amber-200' },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-12 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          Key Achievements
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 text-center border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1">{achievement.value}</div>
                <div className="text-xs text-slate-600 font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

