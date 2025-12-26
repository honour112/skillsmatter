
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from './LanguageContext';
import { IMAGES } from './constants';
import { Award, CheckCircle } from 'lucide-react';

export const Certificates = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="bg-white">
      <section className="pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <Award size={64} className="text-secondary mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-heading font-black text-primary mb-12">
            {t.certificates.title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-black text-primary mb-6">{t.certificates.excellence}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t.certificates.description}
              </p>
              <div className="space-y-4">
                {t.certificates.bullets.map((text: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 text-xl font-bold text-primary">
                    <CheckCircle className="text-accent" /> {text}
                  </div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ rotate: 3, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              className="relative p-8 bg-slate-50 rounded-[4rem] shadow-inner"
            >
              <img 
                src={IMAGES.sample_certificate} 
                className="w-full rounded-[2rem] shadow-2xl border-8 border-white" 
                alt={t.certificates.certificateAlt} 
              />
              <div className="absolute -top-4 -right-4 bg-secondary text-primary px-6 py-2 rounded-full font-black text-sm uppercase shadow-xl">
                {t.certificates.officialSample}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
