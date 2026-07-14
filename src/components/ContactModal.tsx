import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    
    // Strict number validation for phone
    if (e.target.name === 'phone') {
      value = value.replace(/[^\d+]/g, ''); // Only allow digits and plus sign
    }

    setFormData({ ...formData, [e.target.name]: value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    // Check if phone contains at least 10 digits (ignoring the + sign)
    const digitCount = formData.phone.replace(/\D/g, '').length;
    if (formData.phone.trim() && digitCount < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      // Using Web3Forms API for reliable silent email delivery
      // You must get a free access key from https://web3forms.com/ and paste it below
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "e33cce5c-c432-4518-80aa-c4d284fdc21b", // <-- REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
          subject: `New Contact Query: ${formData.subject}`,
          from_name: formData.fullName,
          "Full Name": formData.fullName,
          "Email Address": formData.email,
          "Phone Number": formData.phone || 'Not provided',
          "Subject": formData.subject,
          "Message": formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Helper to render an input class dynamically based on error
  const getInputClass = (fieldName: string) => {
    const base = "w-full px-4 py-2.5 text-[16px] md:text-sm rounded-lg border outline-none transition-all focus:ring-2 ";
    if (errors[fieldName]) {
      return base + "border-red-500 focus:border-red-500 focus:ring-red-500/20";
    }
    return base + "border-gray-200 focus:border-[#2563eb] focus:ring-[#2563eb]/20";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0d1b4b]/40 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex justify-between items-center gap-4 mb-5 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-[#0d1b4b] truncate">Request a Query</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  aria-label="Close modal"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1b4b]">Request Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit} noValidate>
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                      An error occurred while sending your request. Please try again.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={getInputClass('fullName')} 
                        placeholder="John Doe" 
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={getInputClass('email')} 
                        placeholder="john@example.com" 
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                      <input 
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={getInputClass('phone')} 
                        placeholder="+91 98765 43210" 
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input 
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className={getInputClass('subject')} 
                        placeholder="Brief subject of your query" 
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${getInputClass('message')} resize-none`} 
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-[#0d1b4b] text-white font-semibold py-3.5 rounded-lg hover:bg-[#1a2d6b] transition-colors mt-2 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
