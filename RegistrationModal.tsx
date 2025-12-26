
import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Send } from 'lucide-react';
import { LanguageContext } from './LanguageContext';
import { EMAIL_ADDRESS } from './constants';

export const RegistrationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { lang } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Office Automation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Registration: ${formData.name} - ${formData.program}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgram: ${formData.program}\n\nNotes:\n${formData.message}`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="absolute inset-0 bg-primary/20 backdrop-blur-md" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="overflow-y-auto p-6 sm:p-10 md:p-14 custom-scrollbar">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-slate-400 hover:text-primary transition-colors z-10 p-2"
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>
              
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-2xl text-primary shrink-0">
                  <GraduationCap size={32} className="sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-primary leading-tight">
                    {lang === 'en' ? 'Register Your Spot' : 'Inscrivez-vous'}
                  </h2>
                  <p className="text-slate-500 font-bold text-sm sm:text-base">
                    {lang === 'en' ? 'Excellence starts here.' : 'L\'excellence commence ici.'}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black text-primary/60 uppercase tracking-widest ml-1">
                      {lang === 'en' ? 'Full Name' : 'Nom Complet'}
                    </label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary text-sm sm:text-base" placeholder="Kofi Mensah" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black text-primary/60 uppercase tracking-widest ml-1">
                      {lang === 'en' ? 'Email Address' : 'Email'}
                    </label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary text-sm sm:text-base" placeholder="example@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black text-primary/60 uppercase tracking-widest ml-1">
                      {lang === 'en' ? 'Phone Number' : 'Téléphone'}
                    </label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary text-sm sm:text-base" placeholder="+233..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black text-primary/60 uppercase tracking-widest ml-1">
                      {lang === 'en' ? 'Preferred Program' : 'Programme Choisi'}
                    </label>
                    <select value={formData.program} onChange={e => setFormData({...formData, program: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary appearance-none text-sm sm:text-base">
                      <option>Office Automation</option>
                      <option>Secretarial Studies</option>
                      <option>Graphic Design</option>
                      <option>Application Development</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-black text-primary/60 uppercase tracking-widest ml-1">
                    {lang === 'en' ? 'Notes' : 'Notes'}
                  </label>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary min-h-[100px] sm:min-h-[120px] text-sm sm:text-base" placeholder={lang === 'en' ? 'Any questions?' : 'Des questions?'} />
                </div>

                <button type="submit" className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-primary text-white font-black text-base sm:text-lg shadow-xl hover:bg-deep-blue transition-all flex items-center justify-center gap-3">
                  {lang === 'en' ? 'Submit Registration' : 'Envoyer l\'inscription'} <Send size={20} className="sm:w-6 sm:h-6" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
