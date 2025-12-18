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
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-slate-200" id="hero-section" data-animate>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-3">{name}</h1>
            <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">{title}</h2>
            
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0 text-base">
              {objective}
            </p>

            {!showContact ? (
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <button
                  onClick={() => setShowContact(true)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
                >
                  <Eye size={18} />
                  <span>Contact Information</span>
                </button>
                <button 
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors border border-slate-300"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </button>
              </div>
            ) : (
              <div className="space-y-3 mb-6">
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a href={`mailto:${email}`} className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-lg transition-colors border border-slate-300 text-sm font-medium">
                    <Mail size={16} />
                    <span>{email}</span>
                  </a>
                  <a 
                    href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-lg transition-colors border border-slate-300 text-sm font-medium"
                  >
                    <MessageCircle size={16} />
                    <span>{phone}</span>
                  </a>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-300 text-sm font-medium">
                    <MapPin size={16} />
                    <span>{location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowContact(false)}
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Hide Contact
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
