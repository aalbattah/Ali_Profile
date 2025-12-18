import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { decodeEmail } from '../utils/emailObfuscation';

const Contact: React.FC = () => {
  const { email: encodedEmail, location } = RESUME_DATA.personalInfo;
  const email = decodeEmail(encodedEmail);

  return (
    <div className="min-h-screen py-20 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Contact
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
          Open to executive discussions, advisory roles, and strategic collaboration.
        </p>

        <div className="space-y-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com/in/alialbattah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium hover:border-slate-900 dark:hover:border-slate-400 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 pt-4">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

