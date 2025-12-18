import React from 'react';
import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';

const achievements = [
  { icon: Users, value: '80+', label: 'Team Members Led', color: 'bg-slate-200 text-slate-700', shadow: 'shadow-slate-200' },
  { icon: Briefcase, value: '15+', label: 'Years Experience', color: 'bg-slate-300 text-slate-800', shadow: 'shadow-slate-300' },
  { icon: TrendingUp, value: '99.9%', label: 'Service Uptime', color: 'bg-slate-200 text-slate-700', shadow: 'shadow-slate-200' },
  { icon: Award, value: '14+', label: 'Certifications', color: 'bg-slate-300 text-slate-800', shadow: 'shadow-slate-300' },
];

const Achievements: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        <span className="bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">Key Achievements</span>
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 text-center border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={22} />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{achievement.value}</div>
                <div className="text-xs text-slate-600 font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Achievements;

