
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from './LanguageContext';
import { IMAGES } from './constants';
import { Camera } from 'lucide-react';

export const About = () => {
  const { t } = useContext(LanguageContext);

  const admins = [
    { name: "Matieyendou Lalle", img: IMAGES.admin_lalle, role: "Director" },
    { name: "Dambe Lapotinan", img: IMAGES.admin_dambe, role: "Administrator" },
    { name: "Kolani Latinan", img: IMAGES.admin_kolani, role: "Administrator" },
  ];

  const campusImages = [
    IMAGES.campus_1,
    IMAGES.campus_2,
    IMAGES.campus_3,
    IMAGES.campus_4
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black text-primary mb-6"
          >
            {t.about.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            {t.about.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src={IMAGES.mission_1} className="w-full h-full object-cover object-center" alt="Mission" />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 w-64 aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl hidden md:block"
              >
                <img src={IMAGES.mission_2} className="w-full h-full object-cover object-top" alt="Vision" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-8">{t.about.vision}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t.about.p1}
              </p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-deep-blue text-white rounded-[2rem] shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <p className="text-2xl font-heading font-bold italic text-secondary text-center relative z-10">
                  {t.about.motto}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Life / Campus Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Camera size={32} />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-primary mb-4">{t.about.campusLife}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">{t.about.campusSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {campusImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group relative"
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Campus life ${idx + 1}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrators */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-primary mb-4">{t.about.leadership}</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '5rem' }}
              viewport={{ once: true }}
              className="h-1.5 bg-secondary mx-auto rounded-full"
            ></motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {admins.map((admin, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-6 rounded-[3rem] shadow-xl text-center border-4 border-transparent hover:border-primary/10 transition-all"
              >
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-lg border-4 border-slate-50">
                  <img src={admin.img} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" alt={admin.name} />
                </div>
                <h3 className="text-2xl font-black text-primary mb-2">{admin.name}</h3>
                <span className="px-4 py-1 bg-primary/5 text-primary rounded-full font-bold uppercase tracking-widest text-[10px]">{admin.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
