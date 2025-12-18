import React from 'react';
import { Code, Server, Shield, Zap } from 'lucide-react';

const projects = [
  {
    title: 'IT Service Management Framework',
    description: 'Designed and implemented comprehensive ITSM framework ensuring regulatory compliance and service quality across enterprise operations.',
    icon: Server,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: '24/7 Command Center Operations',
    description: 'Established and managed round-the-clock NOC operations supporting critical fintech infrastructure with 99.9% uptime.',
    icon: Zap,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Fintech Platform Development',
    description: 'Led development of secure, scalable fintech platforms with integrated payment solutions and regulatory compliance.',
    icon: Code,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Ensured compliance with financial regulations and implemented robust security standards for sensitive financial data.',
    icon: Shield,
    color: 'bg-slate-100 text-slate-700'
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <div className="w-full" id="projects">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <Code className="text-slate-600" size={28} />
        <span className="bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">Featured Projects & Initiatives</span>
      </h2>

      <div className="grid gap-4">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{project.description}</p>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default FeaturedProjects;

