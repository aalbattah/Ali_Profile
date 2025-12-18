import React from 'react';
import { Award } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Certifications: React.FC = () => {
  // Group certifications by category
  const categories = {
    'Leadership & Strategy': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('Leadership') ||
        cert.name.includes('Business') ||
        cert.name.includes('Habits')
    ),
    'Digital Transformation & Cloud': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('Digital') ||
        cert.name.includes('Cloud') ||
        cert.name.includes('Transformation')
    ),
    'Project & Risk Management': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('Project') ||
        cert.name.includes('Risk') ||
        cert.name.includes('PMP') ||
        cert.name.includes('PMI')
    ),
    'Infrastructure & Cybersecurity': RESUME_DATA.certifications.filter(
      (cert) =>
        cert.name.includes('HPE') ||
        cert.name.includes('VMware') ||
        cert.name.includes('Red Hat') ||
        cert.name.includes('Ethical Hacker') ||
        cert.name.includes('Veritas') ||
        cert.name.includes('InfoScale')
    ),
    'Other': RESUME_DATA.certifications.filter(
      (cert) =>
        !cert.name.includes('Leadership') &&
        !cert.name.includes('Business') &&
        !cert.name.includes('Habits') &&
        !cert.name.includes('Digital') &&
        !cert.name.includes('Cloud') &&
        !cert.name.includes('Transformation') &&
        !cert.name.includes('Project') &&
        !cert.name.includes('Risk') &&
        !cert.name.includes('PMP') &&
        !cert.name.includes('PMI') &&
        !cert.name.includes('HPE') &&
        !cert.name.includes('VMware') &&
        !cert.name.includes('Red Hat') &&
        !cert.name.includes('Ethical Hacker') &&
        !cert.name.includes('Veritas') &&
        !cert.name.includes('InfoScale')
    ),
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Certifications
        </h1>

        <div className="space-y-12">
          {Object.entries(categories).map(([category, certs]) => {
            if (certs.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certs.map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                          <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight mb-1">
                            {cert.name}
                          </h3>
                          {cert.issuer && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                              {cert.issuer}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        {cert.period && <span>{cert.period}</span>}
                        {cert.year && <span className="font-medium">{cert.year}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

