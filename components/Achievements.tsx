import React from 'react';
import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';

const achievements = [
  { icon: Users, value: '60+', label: 'Team Members Led', color: 'bg-blue-100 text-blue-600' },
  { icon: Briefcase, value: '15+', label: 'Years Experience', color: 'bg-indigo-100 text-indigo-600' },
  { icon: TrendingUp, value: '99.999%', label: 'Service Uptime', color: 'bg-green-100 text-green-600' },
  { icon: Award, value: '7+', label: 'Certifications', color: 'bg-orange-100 text-orange-600' },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-16 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Key Achievements
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-100/50 hover:shadow-xl hover:border-blue-300 transition-all transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={28} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.value}</div>
                <div className="text-sm text-slate-600 font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

