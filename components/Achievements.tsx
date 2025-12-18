import React from 'react';
import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';

const achievements = [
  { icon: Users, value: '80+', label: 'Team Members Led', color: 'bg-blue-100 text-blue-600' },
  { icon: Briefcase, value: '15+', label: 'Years Experience', color: 'bg-indigo-100 text-indigo-600' },
  { icon: TrendingUp, value: '99.9%', label: 'Service Uptime', color: 'bg-green-100 text-green-600' },
  { icon: Award, value: '14+', label: 'Certifications', color: 'bg-orange-100 text-orange-600' },
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
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-100/50 hover:shadow-lg hover:border-blue-300 transition-all transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={22} />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{achievement.value}</div>
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

