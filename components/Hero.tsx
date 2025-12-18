import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, MapPin, Download, Eye, EyeOff } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { decodeEmail } from '../utils/emailObfuscation';

const Hero: React.FC = () => {
  const { name, title, email: encodedEmail, phone, location, objective } = RESUME_DATA.personalInfo;
  const [email, setEmail] = useState<string>('');
  const [showContact, setShowContact] = useState<boolean>(false);

  useEffect(() => {
    // Decode email on client side only
    setEmail(decodeEmail(encodedEmail));
  }, [encodedEmail]);

  return (
    <div className="relative bg-white shadow-sm border-b border-gray-100 overflow-hidden" id="hero-section" data-animate>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/1760790880747.jpeg)`,
          filter: 'blur(2px)',
          opacity: 0.5
        }}
      />
      {/* Tech Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 79px, rgba(59, 130, 246, 0.1) 81px, rgba(59, 130, 246, 0.1) 82px, transparent 84px),
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 50px'
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/70 to-blue-50/60" />
      
      <div className="relative max-w-5xl mx-auto px-4 py-12 sm:py-20 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image Placeholder - Assuming a professional avatar style */}
          <div className="relative group">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 ring-2 ring-gray-100 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-300 group-hover:shadow-2xl group-hover:scale-105">
             {/* Using a placeholder resembling the user's attire description if possible, or a generic professional one.
                 Since I cannot use the actual user image file provided in prompt context directly, I will use a high quality placeholder. 
                 Ideally, this src would be replaced by the actual image asset. */}
              <img 
                src={`${import.meta.env.BASE_URL}images/1.jpg`}
                alt={name}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 drop-shadow-sm" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>{name}</h1>
            <h2 className="text-xl md:text-2xl text-blue-700 font-semibold mb-6 drop-shadow-sm" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>{title}</h2>
            
            <p className="text-slate-800 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0 text-lg font-medium drop-shadow-sm" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
              {objective}
            </p>

            {!showContact ? (
              <div className="flex justify-center md:justify-start mb-8">
                <button
                  onClick={() => setShowContact(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <Eye size={20} />
                  <span>Show Contact Details</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href={`mailto:${email}`} className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-slate-800 rounded-lg transition-colors border-2 border-slate-300 shadow-sm font-medium">
                    <Mail size={18} />
                    <span>{email}</span>
                  </a>
                  <a 
                    href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-slate-800 rounded-lg transition-colors border-2 border-slate-300 shadow-sm font-medium"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp: {phone}</span>
                  </a>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/90 text-slate-800 rounded-lg border-2 border-slate-300 shadow-sm font-medium">
                    <MapPin size={18} />
                    <span>{location}</span>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <button
                    onClick={() => setShowContact(false)}
                    className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 text-sm transition-colors"
                  >
                    <EyeOff size={16} />
                    <span>Hide Contact Details</span>
                  </button>
                </div>
              </div>
            )}

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
