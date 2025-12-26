
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from './LanguageContext';
import { MapPin, Phone, Mail, MessageCircle, Send, User, Tag, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER_GHANA, WHATSAPP_NUMBER_TOGO, EMAIL_ADDRESS } from './constants';

export const Contact = () => {
  const { t, lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = `Contact Inquiry: ${formData.subject} (from ${formData.name})`;
    const mailBody = `Hello Skill Matters Support,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage Detail:\n${formData.message}\n\nSent from SMI Website Contact Form.`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  const offices = [
    {
      title: t.contact.ghanaOffice,
      location: t.contact.locationGhana,
      phone: t.contact.phoneGhana,
      wa: WHATSAPP_NUMBER_GHANA,
      color: "bg-white",
      tag: "Main HQ"
    },
    {
      title: t.contact.togoOffice,
      location: t.contact.locationTogo,
      phone: t.contact.phoneTogo,
      wa: WHATSAPP_NUMBER_TOGO,
      color: "bg-white",
      tag: "Regional Center"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-10 shadow-inner"
            >
              <Mail size={32} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-heading font-black text-deep-blue mb-8 leading-tight"
            >
              {t.contact.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Office Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="grid grid-cols-1 gap-10">
                {offices.map((office, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-10 rounded-[3.5rem] bg-bg-light border border-slate-100 shadow-xl group relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                       <MapPin size={80} />
                    </div>
                    <div className="flex justify-between items-center mb-8">
                       <span className="px-4 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{office.tag}</span>
                    </div>
                    <h3 className="text-3xl font-heading font-black text-deep-blue mb-8">
                      {office.title}
                    </h3>
                    <div className="space-y-6 mb-10 text-slate-600 font-bold">
                      <div className="flex items-start gap-4">
                        <MapPin size={24} className="text-secondary shrink-0" /> 
                        <span className="text-lg">{office.location}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone size={24} className="text-primary shrink-0" /> 
                        <span className="text-lg">{office.phone}</span>
                      </div>
                    </div>
                    <a 
                      href={`https://wa.me/${office.wa}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-4 text-primary font-black text-lg group-hover:translate-x-2 transition-transform"
                    >
                      {t.contact.whatsapp} <ArrowRight />
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white grayscale hover:grayscale-0 transition-all duration-700"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.634823460662!2d-2.0911736!3d5.7891823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfda4128f738f615%3A0xc0f1b2720e7f781!2sWassa%20Akropong!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                ></iframe>
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-bg-light p-10 md:p-20 rounded-[4rem] shadow-2xl border border-slate-50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="mb-16">
                <h2 className="text-4xl font-heading font-black text-deep-blue mb-4">{t.contact.formTitle}</h2>
                <p className="text-slate-500 font-bold">{t.contact.formSubtitle}</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">{t.contact.nameLabel}</label>
                    <div className="relative">
                      <User size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" />
                      <input 
                        required 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-16 pr-8 py-6 rounded-3xl bg-white border-2 border-transparent focus:border-primary focus:shadow-xl outline-none transition-all font-bold text-deep-blue text-lg" 
                        placeholder={t.contact.namePlaceholder} 
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">{t.contact.emailLabel}</label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" />
                      <input 
                        required 
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-16 pr-8 py-6 rounded-3xl bg-white border-2 border-transparent focus:border-primary focus:shadow-xl outline-none transition-all font-bold text-deep-blue text-lg" 
                        placeholder={t.contact.emailPlaceholder} 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">{t.contact.subjectLabel}</label>
                  <div className="relative">
                    <Tag size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" />
                    <input 
                      required 
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                      className="w-full pl-16 pr-8 py-6 rounded-3xl bg-white border-2 border-transparent focus:border-primary focus:shadow-xl outline-none transition-all font-bold text-deep-blue text-lg" 
                      placeholder={t.contact.subjectPlaceholder} 
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">{t.contact.messageLabel}</label>
                  <textarea 
                    required 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-8 py-8 rounded-[2.5rem] bg-white border-2 border-transparent focus:border-primary focus:shadow-xl outline-none transition-all font-bold text-deep-blue min-h-[250px] text-lg" 
                    placeholder={t.contact.messagePlaceholder} 
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-8 bg-primary text-white rounded-[2.5rem] font-black text-xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:bg-deep-blue transition-all flex items-center justify-center gap-4"
                >
                  {t.contact.sendButton} <Send size={24} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
