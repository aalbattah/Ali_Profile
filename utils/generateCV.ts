import jsPDF from 'jspdf';
import { RESUME_DATA } from '../constants';
import { decodeEmail } from './emailObfuscation';

export const generateCV = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper function to add a new page if needed
  const checkNewPage = (requiredHeight: number) => {
    if (yPosition + requiredHeight > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number, isBold: boolean = false, color: number[] = [0, 0, 0], lineHeight: number = 1.2) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(color[0], color[1], color[2]);
    
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line: string) => {
      const requiredHeight = fontSize * lineHeight;
      checkNewPage(requiredHeight);
      doc.text(line, margin, yPosition);
      yPosition += requiredHeight;
    });
    yPosition += 2;
  };

  // Helper function to add a section header
  const addSectionHeader = (title: string) => {
    checkNewPage(20);
    yPosition += 8;
    doc.setFillColor(5, 150, 105);
    doc.rect(margin, yPosition - 1, contentWidth, 2.5, 'F');
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text(title, margin + 2, yPosition + 1.5);
    yPosition += 10;
  };

  // Page 1: Header, About, Highlights, Experience (first 2)
  // Header
  yPosition = margin + 5;
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Ali Albattah', margin, yPosition);
  yPosition += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Technology Operations & Infrastructure Leader', margin, yPosition);
  yPosition += 6;

  const { email: encodedEmail, phone, location } = RESUME_DATA.personalInfo;
  const email = decodeEmail(encodedEmail);
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(`${email} | ${phone} | ${location}`, margin, yPosition);
  yPosition += 12;

  // Key Highlights
  addSectionHeader('Key Highlights');
  const highlights = [
    { value: '80+', label: 'Team Members Led' },
    { value: '12M+', label: 'Customers Served' },
    { value: `${RESUME_DATA.certifications.length}+`, label: 'Certifications' },
    { value: '15+', label: 'Years of Experience' },
  ];

  const highlightWidth = contentWidth / 4;
  let maxLabelHeight = 0;
  
  // First pass: calculate max height needed
  highlights.forEach((highlight) => {
    doc.setFontSize(8);
    const labelLines = doc.splitTextToSize(highlight.label, highlightWidth - 4);
    maxLabelHeight = Math.max(maxLabelHeight, labelLines.length * 4);
  });

  // Second pass: draw highlights
  highlights.forEach((highlight, idx) => {
    const xPos = margin + idx * highlightWidth;
    const centerX = xPos + highlightWidth / 2;
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(highlight.value, centerX, yPosition, { align: 'center' });
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const labelLines = doc.splitTextToSize(highlight.label, highlightWidth - 4);
    labelLines.forEach((line: string, lineIdx: number) => {
      doc.text(line, centerX, yPosition + 7 + (lineIdx * 4), { align: 'center' });
    });
  });
  yPosition += 8 + maxLabelHeight + 5;

  // About Me
  addSectionHeader('About Me');
  addText(RESUME_DATA.personalInfo.objective, 10, false, [30, 41, 59], 1.3);
  yPosition += 2;

  // Professional Experience (first 2)
  addSectionHeader('Professional Experience');
  RESUME_DATA.experience.slice(0, 2).forEach((job, jobIdx) => {
    if (jobIdx > 0) {
      yPosition += 3;
    }
    checkNewPage(35);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    const roleLines = doc.splitTextToSize(job.role, contentWidth);
    roleLines.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += 5;
    });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(5, 150, 105);
    doc.text(job.company, margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`${job.period} | ${job.location}`, margin, yPosition);
    yPosition += 6;

    job.details.slice(0, 3).forEach((detail) => {
      checkNewPage(12);
      doc.setFontSize(9);
      doc.setTextColor(30, 41, 59);
      const lines = doc.splitTextToSize(`• ${detail}`, contentWidth - 8);
      lines.forEach((line: string, lineIdx: number) => {
        if (lineIdx === 0) {
          doc.text(line, margin + 3, yPosition);
        } else {
          doc.text(line, margin + 6, yPosition);
        }
        yPosition += 4.5;
      });
    });
    yPosition += 2;
  });

  // Page 2: Remaining Experience, Volunteering
  // Remaining Experience
  if (RESUME_DATA.experience.length > 2) {
    addSectionHeader('Professional Experience (continued)');
    RESUME_DATA.experience.slice(2).forEach((job, jobIdx) => {
      if (jobIdx > 0) {
        yPosition += 3;
      }
      checkNewPage(35);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      const roleLines = doc.splitTextToSize(job.role, contentWidth);
      roleLines.forEach((line: string) => {
        doc.text(line, margin, yPosition);
        yPosition += 5;
      });

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(5, 150, 105);
      doc.text(job.company, margin, yPosition);
      yPosition += 5;

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text(`${job.period} | ${job.location}`, margin, yPosition);
      yPosition += 6;

      job.details.slice(0, 3).forEach((detail) => {
        checkNewPage(12);
        doc.setFontSize(9);
        doc.setTextColor(30, 41, 59);
        const lines = doc.splitTextToSize(`• ${detail}`, contentWidth - 8);
        lines.forEach((line: string, lineIdx: number) => {
          if (lineIdx === 0) {
            doc.text(line, margin + 3, yPosition);
          } else {
            doc.text(line, margin + 6, yPosition);
          }
          yPosition += 4.5;
        });
      });
      yPosition += 2;
    });
  }

  // Volunteering
  if (RESUME_DATA.volunteering && RESUME_DATA.volunteering.length > 0) {
    addSectionHeader('Volunteering Experience');
    RESUME_DATA.volunteering.forEach((volunteer, volIdx) => {
      if (volIdx > 0) {
        yPosition += 3;
      }
      checkNewPage(30);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text(volunteer.role, margin, yPosition);
      yPosition += 6;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(5, 150, 105);
      doc.text(volunteer.company, margin, yPosition);
      yPosition += 5;

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text(`${volunteer.period} | ${volunteer.location}`, margin, yPosition);
      yPosition += 6;

      volunteer.details.slice(0, 2).forEach((detail) => {
        checkNewPage(12);
        doc.setFontSize(9);
        doc.setTextColor(30, 41, 59);
        const lines = doc.splitTextToSize(`• ${detail}`, contentWidth - 8);
        lines.forEach((line: string, lineIdx: number) => {
          if (lineIdx === 0) {
            doc.text(line, margin + 3, yPosition);
          } else {
            doc.text(line, margin + 6, yPosition);
          }
          yPosition += 4.5;
        });
      });
      yPosition += 2;
    });
  }

  // Page 3: Education, Certifications (key ones), Skills
  // Education
  addSectionHeader('Education');
  RESUME_DATA.education.forEach((edu, eduIdx) => {
    if (eduIdx > 0) {
      yPosition += 3;
    }
    checkNewPage(20);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    const degreeLines = doc.splitTextToSize(edu.degree, contentWidth);
    degreeLines.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += 5;
    });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(5, 150, 105);
    doc.text(edu.institution, margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`${edu.location} | ${edu.period}`, margin, yPosition);
    yPosition += 8;
  });

  // Key Certifications (top 6)
  addSectionHeader('Key Certifications');
  RESUME_DATA.certifications.slice(0, 6).forEach((cert, certIdx) => {
    if (certIdx > 0) {
      yPosition += 2;
    }
    checkNewPage(18);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    const certName = doc.splitTextToSize(cert.name, contentWidth);
    certName.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += 4.5;
    });

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    if (cert.issuer) {
      const issuerLines = doc.splitTextToSize(cert.issuer, contentWidth);
      issuerLines.forEach((line: string) => {
        doc.text(line, margin, yPosition);
        yPosition += 3.5;
      });
    }
    if (cert.period) {
      doc.text(cert.period, margin, yPosition);
      yPosition += 3.5;
    }
    yPosition += 1;
  });

  // Core Competencies
  addSectionHeader('Core Competencies');
  const skillsPerLine = 3;
  const skillWidth = (contentWidth - 4) / skillsPerLine;
  let currentLine = 0;
  const lineHeight = 6;
  
  RESUME_DATA.skills.forEach((skill, idx) => {
    if (idx % skillsPerLine === 0 && idx > 0) {
      currentLine++;
      checkNewPage(lineHeight + 2);
      yPosition = margin + currentLine * (lineHeight + 2);
    }
    const xPos = margin + (idx % skillsPerLine) * (skillWidth + 1.5);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    const skillText = doc.splitTextToSize(`• ${skill}`, skillWidth - 2);
    skillText.forEach((line: string, lineIdx: number) => {
      doc.text(line, xPos, yPosition + (lineIdx * 4));
    });
    if (skillText.length > 1) {
      currentLine++;
      yPosition += (skillText.length - 1) * 4;
    }
  });

  // Save the PDF
  doc.save('Ali_Albattah_CV.pdf');
};

