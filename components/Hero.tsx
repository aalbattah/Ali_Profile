import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const { name, title, email, phone, location, objective } = RESUME_DATA.personalInfo;
  
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  
  // State to manage image source with fallback
  // We default to 'ali-albattah.png' expecting the user to upload their photo
  // If that fails, we fall back to a professional placeholder suited to the context
  const [imgSrc, setImgSrc] = useState("./ali-albattah.png");

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_IMAGE) {
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 ring-2 ring-gray-100">
              <img 
                src={imgSrc}
                onError={handleImageError}
                alt={name}
                className="w-full h-full object-cover object-top" 
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