import React from 'react';
import { User, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-8 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <User className="text-blue-600" size={28} />
          About Me
        </h2>

        <div className="bg-white rounded-lg border-l-4 border-blue-500 shadow-sm p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="relative">
          <p className="text-slate-700 leading-relaxed mb-4 text-left">
            I am a seasoned technology leader with over 15 years of experience driving digital transformation 
            and operational excellence in the fintech and banking sectors. My expertise lies in building 
            high-performing teams, implementing robust IT service management frameworks, and delivering 
            scalable technology solutions that align with business objectives.
          </p>
          <p className="text-slate-600 leading-relaxed text-left text-sm">
            Based in Saudi Arabia, I am passionate about leveraging technology to solve complex business 
            challenges and create value through innovation, strategic planning, and continuous improvement.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

