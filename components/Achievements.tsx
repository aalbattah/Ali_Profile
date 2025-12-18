import React from 'react';
import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';

const achievements = [
  { icon: Users, value: '80+', label: 'Team Members Led', color: 'bg-blue-100 text-blue-600' },
  { icon: Briefcase, value: '15+', label: 'Years Experience', color: 'bg-blue-100 text-blue-600' },
  { icon: TrendingUp, value: '99.9%', label: 'Service Uptime', color: 'bg-blue-100 text-blue-600' },
  { icon: Award, value: '14+', label: 'Certifications', color: 'bg-blue-100 text-blue-600' },
];

const Achievements: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <Award className="text-blue-600" size={28} />
        Key Achievements
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 text-center border-l-4 border-blue-500 shadow-sm hover:shadow-md hover:border-blue-600 transition-all h-full flex flex-col justify-center"
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

