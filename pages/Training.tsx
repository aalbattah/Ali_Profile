import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Training: React.FC = () => {
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
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Training & Certifications
          </h1>
        </div>

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
                      className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
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
                      <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-500 mb-2">
                        {cert.period && (
                          <span className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                            {cert.period}
                          </span>
                        )}
                        {cert.year && (
                          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded font-medium">
                            {cert.year}
                          </span>
                        )}
                      </div>
                      {cert.location && (
                        <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                          📍 {cert.location}
                        </p>
                      )}
                      {cert.credentialId && (
                        <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                          ID: {cert.credentialId}
                        </p>
                      )}
                      {cert.expired && (
                        <p className="text-xs text-slate-400 dark:text-slate-600">
                          Expired: {cert.expired}
                        </p>
                      )}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                          {cert.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="text-xs px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
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

export default Training;

