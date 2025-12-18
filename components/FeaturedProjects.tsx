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
    color: 'bg-red-100 text-red-600'
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-12 relative" data-animate>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <Code className="text-blue-600" size={32} />
          Featured Projects & Initiatives
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 hover:shadow-xl hover:border-blue-300 transition-all transform hover:scale-[1.02]"
              >
                <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

