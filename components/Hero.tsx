import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const { name, title, email, phone, location, objective } = RESUME_DATA.personalInfo;

  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image Placeholder - Assuming a professional avatar style */}
          <div className="relative group">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 ring-2 ring-gray-100">
             {/* Using a placeholder resembling the user's attire description if possible, or a generic professional one.
                 Since I cannot use the actual user image file provided in prompt context directly, I will use a high quality placeholder. 
                 Ideally, this src would be replaced by the actual image asset. */}
              <img 
                src="/images/1.jpg" 
                alt={name}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">{name}</h1>
            <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6">{title}</h2>
            
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0 text-lg">
              {objective}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href={`mailto:${email}`} className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg transition-colors border border-slate-200">
                <Mail size={18} />
                <span>{email}</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200">
                <Phone size={18} />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200">
                <MapPin size={18} />
                <span>{location}</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <Download size={20} />
                Save as PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
