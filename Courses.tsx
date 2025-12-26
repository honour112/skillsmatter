
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { IMAGES, WHATSAPP_NUMBER_GHANA } from './constants';
import { motion } from 'framer-motion';
import { GraduationCap, MessageCircle, ArrowUpRight, Zap, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export const Courses = () => {
  const { lang, t, openRegistration } = useContext(LanguageContext);
  
  const courseList = [
    { 
      title: lang === 'en' ? 'Office Automation' : 'Gestion de Bureau', 
      img: IMAGES.course_office, 
      price: '₵500/mo',
      tags: ['Certification', 'Beginner Friendly'],
      features: ['Word Processing', 'Spreadsheet Mastery', 'Email Management']
    },
    { 
      title: lang === 'en' ? 'Graphic Design' : 'Design Graphique', 
      img: IMAGES.course_design, 
      price: '₵650/mo',
      tags: ['Creative', 'Industry Lead'],
      features: ['Photoshop', 'Branding Strategy', 'Visual Identity']
    },
    { 
      title: lang === 'en' ? 'Programming' : 'Programmation', 
      img: IMAGES.course_programming, 
      price: '₵800/mo',
      tags: ['High Growth', 'Advanced'],
      features: ['Web Dev', 'Logic Building', 'Project Based']
    },
    { 
      title: lang === 'en' ? 'Printing Tech' : 'Tech d\'Impression', 
      img: IMAGES.course_printing, 
      price: '₵450/mo',
      tags: ['Technical', 'Hands-on'],
      features: ['Digital Printing', 'Branding Ops', 'Machine Maint.']
    }
  ];

  const designShowcase = [
    IMAGES.design_1, IMAGES.design_2, IMAGES.design_3, IMAGES.design_4, IMAGES.design_5, IMAGES.design_6
  ];

  const handleWhatsAppInquiry = (courseTitle: string) => {
    const message = encodeURIComponent(`Hello Skill Matters Institute! I am interested in enrolling for the ${courseTitle} course. Can I get more details on enrollment dates and requirements?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER_GHANA}?text=${message}`, '_blank');
  };

    return (
    <section className="pt-40 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 shadow-inner"
          >
            <Zap size={32} />
          </motion.div>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-deep-blue mb-8 leading-none">
                {t.courses.title}
              </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
                {t.courses.subtitle}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(37, 99, 235, 0.25)" }}
            whileTap={{ scale: 0.98 }}
            onClick={openRegistration} 
            className="px-12 py-6 bg-primary text-white rounded-[2.5rem] font-black text-lg shadow-2xl hover:bg-deep-blue transition-all flex items-center gap-4 mx-auto"
          >
            <GraduationCap size={24} /> Register Online
          </motion.button>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {courseList.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-bg-light rounded-[4rem] overflow-hidden shadow-2xl border-4 border-transparent hover:border-secondary transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img 
                    src={c.img} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" 
                    alt={c.title} 
                  />
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {c.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase shadow-lg border border-primary/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-heading font-black text-deep-blue mb-4 leading-tight group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {c.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                          <CheckCircle2 size={16} className="text-accent" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Monthly Tuition</span>
                      <span className="text-3xl font-black text-primary">{c.price}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsAppInquiry(c.title)}
                      className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all"
                    >
                      <MessageCircle size={20} /> Inquire Now <ArrowUpRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- DEDICATED GRAPHIC DESIGN SHOWCASE --- */}
        <div className="py-24 border-t border-slate-100">
          <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-deep-blue mb-4">{t.courses.showcase}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t.courses.showcaseSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designShowcase.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Showcase Project ${idx + 1}`} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                   <div className="p-4 bg-white rounded-xl shadow-xl">
                     <ImageIcon className="text-primary" size={24} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-16 rounded-[4rem] bg-deep-blue text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-15deg] translate-x-1/2"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-6xl font-heading font-black mb-8">Not sure which track to choose?</h3>
              <p className="text-xl text-blue-100/60 mb-12">Our academic advisors are ready to help you chart your path to excellence based on your goals.</p>
              <button 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER_GHANA}`, '_blank')}
                className="px-12 py-6 bg-secondary text-primary rounded-3xl font-black text-xl shadow-2xl hover:bg-white transition-all"
              >
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
