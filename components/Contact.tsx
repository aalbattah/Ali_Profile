import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { decodeEmail } from '../utils/emailObfuscation';

const Contact: React.FC = () => {
  const { email: encodedEmail } = RESUME_DATA.personalInfo;
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    // Decode email on client side only
    setEmail(decodeEmail(encodedEmail));
  }, [encodedEmail]);
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.senderEmail}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Open email client
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', senderEmail: '', subject: '', message: '' });
        setSubmitStatus('success');
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <MessageSquare className="text-blue-600" size={36} />
            Send Me a Message
          </h2>
          <p className="text-slate-600 text-lg">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-blue-100/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/90"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="senderEmail" className="block text-sm font-semibold text-slate-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  value={formData.senderEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-blue-100/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/90"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-100/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white/90"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                <MessageSquare size={16} className="inline mr-2" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-100/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white/90"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-center">
                ✓ Message prepared! Your email client should open shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-700 text-center">
                ✗ Something went wrong. Please try again or use the contact form above.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

