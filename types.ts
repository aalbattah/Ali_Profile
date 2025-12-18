export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
  location: string;
}

export interface Certification {
  name: string;
  year: string;
  issuer?: string;
  period?: string;
  credentialId?: string;
  skills?: string[];
  location?: string;
  expired?: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    objective: string;
  };
  experience: Job[];
  volunteering?: Job[];
  education: Education[];
  certifications: Certification[];
  skills: string[];
  languages: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}