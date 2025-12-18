import { ResumeData } from './types';
import { decodeEmail } from './utils/emailObfuscation';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Ali Albattah",
    title: "Director of Technology Operations",
    email: "==QZt5CahRHdhJGbhlGbhBUa", // Encoded email (reversed base64)
    phone: "+966502196619",
    location: "Saudi Arabia",
    objective: "Experienced technology leader specializing in IT operations, fintech solutions, and digital transformation. Passionate about building high-performing teams and delivering innovative technology solutions that drive business success."
  },
  experience: [
    {
      company: "Diriyah Company",
      role: "Director of Technology Operations, IT Department",
      location: "Saudi Arabia",
      period: "Dec 2024 – Present",
      details: [
        "Lead the end-to-end IT service management function, ensuring strategic alignment with DGDA's business goals through effective Service Strategy, Design, Transition, Operation, and Continual Service Improvement (CSI).",
        "Oversee the implementation and enforcement of IT service management frameworks (e.g., ITSM, SLAs, SLOs), ensuring regulatory compliance, service quality, and cost efficiency.",
        "Spearhead the development and execution of departmental strategy, annual budgets, and operational plans while coaching and managing high-performing technical teams.",
        "Drive service innovation and infrastructure enhancement through robust change, incident, and problem management practices.",
        "Ensure continuous improvement of IT services by monitoring performance and leveraging data-driven insights to optimize operations and elevate service delivery standards."
      ]
    },
    {
      company: "FintechPay",
      role: "Chief Technology Officer (Part-Time)",
      location: "Saudi Arabia",
      period: "Jun 2024 – Jan 2025",
      details: [
        "Led the development of secure, scalable fintech platforms aligned with business goals.",
        "Built and managed high-performing engineering teams across software, DevOps, and security.",
        "Oversaw product architecture, cloud infrastructure, and integration of third-party fintech services.",
        "Ensured compliance with financial regulations and data security standards.",
        "Collaborated with executive leadership to define tech strategy, roadmap, and fundraising support."
      ]
    },
    {
      company: "STC BANK",
      role: "Director of Technology Operations, IT Department",
      location: "Saudi Arabia",
      period: "Aug 2023 – Nov 2024",
      details: [
        "Lead and oversee the technology operations department, responsible for managing the Preproduction & Production technology including infrastructure, systems, and resources.",
        "Develop and execute strategic plans to align technology initiatives with the company's overall objectives and goals.",
        "Manage a team of IT professionals, providing guidance, mentoring, and performance evaluations to ensure high productivity.",
        "Collaborate with cross-functional teams to identify technology needs and implement effective solutions.",
        "Establish and maintain IT policies, procedures, and standards to ensure compliance with industry regulations.",
        "Develop and manage the technology operations budget, including forecasting and cost control.",
        "Implement and maintain robust IT infrastructure ensuring high availability, scalability, and reliability."
      ]
    },
    {
      company: "STCPay",
      role: "Command Center & Monitoring Manager, IT Operations",
      location: "Saudi Arabia",
      period: "2021 – July 2023",
      details: [
        "Directs the efforts of 60 personnel in the achievement of the strategic and operational objectives of the group.",
        "Leading the NOC 24/7 (L1), Production Support (L2), Incident & Problem management, and Monitoring & Reporting Teams.",
        "Meet the financial objects of the projects and manage the budgets.",
        "Manages the hiring, staffing, and maintaining of a diverse and effective workforce.",
        "Oversees the monitoring and tuning of the system to achieve optimum performance levels."
      ]
    },
    {
      company: "STCPay",
      role: "Command Center Manager, IT Operations",
      location: "Saudi Arabia",
      period: "2020 – 2021",
      details: [
        "Monitoring of all Services including infrastructure and business applications.",
        "Ensure all necessary IT technical business partners are on the major incident technical bridge.",
        "Lead efforts to drive automation/innovation improvements that positively improve the customer experience.",
        "Ensure proper documentation/runbooks exist within the Command center.",
        "Collaborate with various technology teams for issues resolution."
      ]
    },
    {
      company: "The Saudi British Bank (SABB)",
      role: "Unix / Linux Technical Engineering Manager, IT Operations",
      location: "Saudi Arabia",
      period: "2019 – 2020",
      details: [
        "Generate innovative approaches and solutions to recurring tasks or problems.",
        "Design and set enhancement plans for maintaining green and up-to-date environments.",
        "Manage stability within physical and virtual server environments through incident, change, and problem management.",
        "Perform capacity analysis, relief sizing, and timing for the growth of the computing platform.",
        "Provide coaching and guidance to team members."
      ]
    },
    {
      company: "The Saudi British Bank (SABB)",
      role: "Unix / Linux Technical Engineering Specialist",
      location: "Saudi Arabia",
      period: "2016 – 2019",
      details: [
        "Perform daily maintenance and Administration tasks associated with a server environment.",
        "Build and deploy servers in a physical and virtual environment.",
        "Work with cross-function teams to understand system requirements.",
        "Troubleshoot server issues using various internal and external resources."
      ]
    },
    {
      company: "The Saudi British Bank (SABB)",
      role: "SABB Management Development Program (SMDP)",
      location: "Saudi Arabia",
      period: "2015 – 2016",
      details: [
        "A broad one-year foundation of banking education, management skills, and on-the-job learning."
      ]
    },
    {
      company: "Saudi Post",
      role: "Technical Support",
      location: "Alrass, Saudi Arabia",
      period: "2009 – 2010",
      details: [
        "Performed Technical support within the service center.",
        "Provided assistance on work problems and routine checkups."
      ]
    }
  ],
  education: [
    {
      institution: "Old Dominion University",
      degree: "Bachelor of Science in Computer Science",
      location: "Norfolk, VA, United States",
      period: "2012 - Aug 2015",
      details: [
        "Relevant Courses: OOP, Computer Networking, Advanced Data Structures and Algorithms, OS, UNIX Administration, Parallel Programming, Software Engineering."
      ]
    },
    {
      institution: "College of Technology",
      degree: "Associates degree, Technical Support",
      location: "AlRass, AlQassim, Saudi Arabia",
      period: "2007 - Aug 2009",
      details: [
        "Relevant Courses: Advanced Computer Application, Computer Components & Assembly, Computer Hardware Maintenance."
      ]
    },
    {
      institution: "ODU Computer Science Dept.",
      degree: "Senior Project Design (CESR)",
      location: "Norfolk, VA",
      period: "2014 – 2015",
      details: [
        "Developed a web interface called CESR (Color Enhanced Slash Reader) to aid ESL students."
      ]
    }
  ],
  certifications: [
    { name: "Project Risk Management (PMI-PRM)", year: "2020" },
    { name: "HPE Synergy Administration", year: "2019" },
    { name: "HPE OneView Administration", year: "2019" },
    { name: "Red Hat Certified System Administrator (RHCSA)", year: "2018", issuer: "License 180-008-013" },
    { name: "Certified Ethical Hacking (CEH)", year: "2017" },
    { name: "Project Management (PMP)", year: "2016" },
    { name: "The 7 Habits of Highly Effective People", year: "2016" }
  ],
  skills: [
    "IT Operations Management",
    "IT Service Management (ITSM)",
    "Strategic Planning",
    "Team Leadership & Mentoring",
    "Budget Management",
    "Infrastructure Management",
    "Unix/Linux Administration",
    "Cybersecurity & Compliance",
    "Cloud Infrastructure",
    "DevOps",
    "Crisis Management (NOC)",
    "Vendor Management"
  ],
  languages: [
    "Arabic (Native)",
    "English (Fluent)"
  ]
};

// Helper to decode email for context (works in both Node and browser)
const getEmailForContext = (encoded: string): string => {
  try {
    const reversed = encoded.split('').reverse().join('');
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(reversed, 'base64').toString();
    }
    return atob(reversed);
  } catch {
    return encoded; // Fallback to encoded if decoding fails
  }
};

export const RESUME_CONTEXT = `
You are an AI assistant for Ali Albattah. Use the following resume data to answer questions about him professionally.

Name: ${RESUME_DATA.personalInfo.name}
Title: ${RESUME_DATA.personalInfo.title}
Contact: ${getEmailForContext(RESUME_DATA.personalInfo.email)}, ${RESUME_DATA.personalInfo.phone}
Objective: ${RESUME_DATA.personalInfo.objective}

Experience:
${RESUME_DATA.experience.map(j => `- ${j.role} at ${j.company} (${j.period}): ${j.details.join(' ')}`).join('\n')}

Education:
${RESUME_DATA.education.map(e => `- ${e.degree} at ${e.institution} (${e.period})`).join('\n')}

Certifications:
${RESUME_DATA.certifications.map(c => `- ${c.name} (${c.year})`).join('\n')}

Skills: ${RESUME_DATA.skills.join(', ')}
`;
