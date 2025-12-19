export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Hero Section
    name: 'Ali Albattah',
    subtitle: 'Technology Operations & Infrastructure Leader',
    downloadCV: 'Download CV',
    linkedInProfile: 'LinkedIn Profile',
    
    // Key Highlights
    usersSupported: 'Users Supported',
    enterpriseServices: 'Enterprise Services',
    transformationPrograms: 'Transformation Programs',
    yearsOfExperience: 'Years of Experience',
    
    // Section Titles
    aboutMe: 'About Me',
    featuredProjects: 'Featured Projects & Initiatives',
    professionalExperience: 'Professional Experience',
    volunteeringExperience: 'Volunteering Experience',
    trainingCertifications: 'Training & Certifications',
    education: 'Education',
    coreCompetencies: 'Core Competencies',
    languages: 'Languages',
    contact: 'Contact',
    
    // About Me
    aboutText1: 'I am a seasoned technology leader with over 15 years of experience driving digital transformation and operational excellence in the fintech and banking sectors. My expertise lies in building high-performing teams, implementing robust IT service management frameworks, and delivering scalable technology solutions that align with business objectives.',
    aboutText2: 'Based in Saudi Arabia, I am passionate about leveraging technology to solve complex business challenges and create value through innovation, strategic planning, and continuous improvement.',
    
    // Objective (Hero section)
    objective: 'Experienced technology leader specializing in IT operations, fintech solutions, and digital transformation. Passionate about building high-performing teams and delivering innovative technology solutions that drive business success.',
    
    // Contact
    contactStatement: 'Open to executive discussions, advisory roles, and strategic collaboration.',
    email: 'Email',
    linkedIn: 'LinkedIn',
    
    // Common
    location: 'Location',
    period: 'Period',
    skills: 'Skills',
    credentialId: 'Credential ID',
    expired: 'Expired',
  },
  ar: {
    // Hero Section
    name: 'علي عبدالله البطاح',
    subtitle: 'قائد عمليات التكنولوجيا والبنية التحتية',
    downloadCV: 'تحميل السيرة الذاتية',
    linkedInProfile: 'الملف الشخصي على لينكد إن',
    
    // Key Highlights
    usersSupported: 'المستخدمون المدعومون',
    enterpriseServices: 'الخدمات المؤسسية',
    transformationPrograms: 'برامج التحول',
    yearsOfExperience: 'سنوات الخبرة',
    
    // Section Titles
    aboutMe: 'نبذة عني',
    featuredProjects: 'المشاريع والمبادرات المميزة',
    professionalExperience: 'الخبرة المهنية',
    volunteeringExperience: 'خبرة التطوع',
    trainingCertifications: 'التدريب والشهادات',
    education: 'التعليم',
    coreCompetencies: 'الكفاءات الأساسية',
    languages: 'اللغات',
    contact: 'اتصل بي',
    
    // About Me - Professional Arabic translation
    aboutText1: 'أنا قائد تقني محترف يتمتع بأكثر من 15 عامًا من الخبرة في قيادة التحول الرقمي والتميز التشغيلي في قطاعات التكنولوجيا المالية والخدمات المصرفية. تكمن خبرتي في بناء فرق عالية الأداء، وتنفيذ أطر إدارة خدمات تكنولوجيا المعلومات المتينة، وتقديم حلول تقنية قابلة للتطوير تتماشى مع الأهداف التجارية.',
    aboutText2: 'مقيم في المملكة العربية السعودية، أنا شغوف باستخدام التكنولوجيا لحل التحديات التجارية المعقدة وخلق القيمة من خلال الابتكار والتخطيط الاستراتيجي والتحسين المستمر.',
    
    // Objective (Hero section) - Professional Arabic translation
    objective: 'قائد تقني محترف متخصص في عمليات تكنولوجيا المعلومات، وحلول التكنولوجيا المالية، والتحول الرقمي. شغوف ببناء فرق عالية الأداء وتقديم حلول تقنية مبتكرة تحقق النجاح التجاري.',
    
    // Contact
    contactStatement: 'مفتوح للمناقشات التنفيذية، والأدوار الاستشارية، والتعاون الاستراتيجي.',
    email: 'البريد الإلكتروني',
    linkedIn: 'لينكد إن',
    
    // Common
    location: 'الموقع',
    period: 'الفترة',
    skills: 'المهارات',
    credentialId: 'رقم الشهادة',
    expired: 'منتهية الصلاحية',
  },
};

export const getTranslation = (key: keyof typeof translations.en, lang: Language): string => {
  return translations[lang][key] || translations.en[key];
};

