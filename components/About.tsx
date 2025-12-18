import React from 'react';
import { User, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <User className="text-blue-600" size={28} />
            About Me
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 md:p-8">
          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-center">
            I am a seasoned technology leader with over 15 years of experience driving digital transformation 
            and operational excellence in the fintech and banking sectors. My expertise lies in building 
            high-performing teams, implementing robust IT service management frameworks, and delivering 
            scalable technology solutions that align with business objectives.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed text-center">
            Based in Saudi Arabia, I am passionate about leveraging technology to solve complex business 
            challenges and create value through innovation, strategic planning, and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

