
import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Laptop, Settings, PenTool, Code, 
  Star, GraduationCap, Zap, Target, Award, Image as ImageIcon, 
  Printer, ShieldCheck, Users, Briefcase, Globe 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import { IMAGES } from './constants';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export const Home = () => {
  const { t, openRegistration } = useContext(LanguageContext);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stats = [
    { label: t.home.stats.graduates, value: t.home.stats.graduatesValue, icon: <GraduationCap size={24} />, color: "text-blue-400" },
    { label: t.home.stats.jobSuccess, value: t.home.stats.jobSuccessValue, icon: <Briefcase size={24} />, color: "text-emerald-400" },
    { label: t.home.stats.regionalHubs, value: t.home.stats.regionalHubsValue, icon: <Globe size={24} />, color: "text-amber-400" },
    { label: t.home.stats.excellence, value: t.home.stats.excellenceValue, icon: <Award size={24} />, color: "text-purple-400" },
  ];

  const features = [
    { title: t.home.features.industryStandard, desc: t.home.features.industryStandardDesc, icon: <ShieldCheck className="text-accent" /> },
    { title: t.home.features.handsOn, desc: t.home.features.handsOnDesc, icon: <Zap className="text-secondary" /> },
    { title: t.home.features.expertMentors, desc: t.home.features.expertMentorsDesc, icon: <Users className="text-primary" /> },
  ];

  const programs = [
    { title: t.home.programs.officeAutomation, img: IMAGES.course_office, icon: <Laptop />, desc: t.home.programs.officeAutomationDesc },
    { title: t.home.programs.secretarialStudies, img: IMAGES.hero_sub1, icon: <Settings />, desc: t.home.programs.secretarialStudiesDesc },
    { title: t.home.programs.graphicDesign, img: IMAGES.course_design, icon: <PenTool />, desc: t.home.programs.graphicDesignDesc },
    { title: t.home.programs.applicationDev, img: IMAGES.course_programming, icon: <Code />, desc: t.home.programs.applicationDevDesc },
  ];

  const showcaseItems = [
    IMAGES.design_1, IMAGES.design_2, IMAGES.design_3, IMAGES.design_4, IMAGES.design_5, IMAGES.design_6
  ];

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      {/* --- ELITE HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-bg-light">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.03] -z-10 skew-x-[-12deg] translate-x-1/4"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] border-[1px] border-primary/10 rounded-full -z-10"
        ></motion.div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="z-10 text-center lg:text-left">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-xl border border-primary/5 mb-8 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
              <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase">{t.hero.tag}</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-[6.5rem] font-heading font-black text-deep-blue leading-[1] mb-8">
              {t.hero.title1} <br />
              <span className="text-primary italic font-light">{t.hero.title2}</span> <br />
              {t.hero.title3}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl lg:text-2xl text-slate-500 mb-10 max-w-xl lg:mx-0 mx-auto leading-relaxed">
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={openRegistration} 
                className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-3 group"
              >
                {t.hero.register} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Link to="/courses">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-12 py-5 bg-white text-primary border-2 border-primary/10 rounded-2xl font-black text-lg shadow-lg hover:bg-white/50 transition-all flex items-center justify-center gap-3 w-full"
                >
                  {t.hero.btn1}
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap gap-8 justify-center lg:justify-start">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-black text-xs uppercase tracking-widest text-deep-blue">{f.title}</div>
                    <div className="text-[10px] text-slate-400 font-bold">{f.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-20 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[12px] border-white group">
              <img src={IMAGES.hero} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" alt="Student Training" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent"></div>
            </div>
            
            {/* Floating Detail Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 z-30 w-64 p-6 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <Star fill="currentColor" size={24} />
                </div>
                <div>
                  <div className="font-black text-deep-blue text-sm uppercase">{t.home.certified}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.home.iso}</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">{t.home.certifiedDesc}</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 -right-12 z-10 w-48 h-64 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img src={IMAGES.hero_sub2} className="w-full h-full object-cover" alt="Campus Life" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- BEAUTIFUL IMAGE SECTION (after hero) --- */}
      <section className="w-full flex justify-center items-center py-10 bg-gradient-to-b from-white to-bg-light">
        <div className="max-w-4xl w-full px-4">
          <img
            src="https://i.postimg.cc/6q9Lvjv7/IMG_20251224_WA0035.jpg"
            alt="Skill Matters Institute Showcase"
            className="rounded-3xl shadow-2xl border-8 border-white w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            style={{ minHeight: 280, maxHeight: 420 }}
          />
        </div>
      </section>

      {/* --- TRUST & STATS STRIP --- */}
      <section className="bg-deep-blue py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-5"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color} shadow-inner`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-4xl font-heading font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISIONARY PROGRAMS --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-secondary font-black tracking-[0.4em] uppercase text-sm mb-6 block"
              >
                {t.home.premierTraining}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-heading font-black text-deep-blue leading-[0.9]"
              >
                {t.home.whereSkills} <br />
                {t.home.become} <span className="text-primary italic">{t.home.careers}</span>
              </motion.h2>
            </div>
            <Link to="/courses">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <span className="font-black text-primary text-xl uppercase tracking-widest group-hover:text-secondary transition-colors">{t.home.viewAllCourses}</span>
                <div className="w-20 h-20 rounded-full border-4 border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-2">
                  <ArrowRight size={32} />
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -20 }}
                onClick={openRegistration}
                className="bg-bg-light p-6 rounded-[3rem] shadow-xl border-4 border-transparent hover:border-secondary transition-all cursor-pointer group"
              >
                <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                  <img src={p.img} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                  <div className="absolute top-6 left-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl text-primary shadow-xl">
                    {p.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-deep-blue mb-4 leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-slate-500 mb-8 font-medium leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-2 text-accent font-black text-xs uppercase tracking-widest">
                  <CheckCircle size={16} /> {t.home.handsOnModule}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SHOWCASE SECTION --- */}
      <section className="py-32 bg-bg-light overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-deep-blue mb-8">
              {t.home.showcaseTitle1} <span className="text-primary italic">{t.home.showcaseTitle2}</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">{t.home.showcaseSubtitle}</p>
          </div>
          
          <div className="relative">
            <motion.div 
              className="flex gap-8 overflow-x-auto pb-20 no-scrollbar snap-x cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ right: 0, left: -1200 }}
            >
               {showcaseItems.map((img, i) => (
                 <motion.div 
                  key={i} 
                  className="min-w-[400px] sm:min-w-[600px] h-[400px] sm:h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl snap-center border-[12px] border-white relative group"
                  whileHover={{ scale: 1.02 }}
                 >
                   <img src={img} className="w-full h-full object-cover object-top" alt={`Student Work ${i+1}`} />
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <div className="p-6 bg-white rounded-2xl shadow-2xl">
                        <ImageIcon className="text-primary" size={32} />
                      </div>
                   </div>
                 </motion.div>
               ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mt-12">
             {showcaseItems.map((img, i) => (
               <motion.div 
                key={`print-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl hover:rotate-2 transition-transform cursor-pointer"
               >
                <img src={img} className="w-full h-full object-cover" alt={t.home.printSampleAlt} />
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[4rem] overflow-hidden bg-deep-blue p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 skew-x-[-20deg] translate-x-1/2"></div>
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-heading font-black text-white mb-10 leading-tight"
              >
                {t.home.readyToJoin} <br />
                {t.home.the} <span className="text-secondary italic">{t.home.elite}</span>
              </motion.h2>
              <div className="max-w-4xl mx-auto mb-16 rounded-[3rem] overflow-hidden shadow-2xl border-[15px] border-white/10">
                <img src={IMAGES.home_flier} className="w-full h-auto object-cover" alt="Enrollment Flier" />
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openRegistration} 
                className="px-16 py-8 bg-secondary text-primary rounded-[3rem] font-black text-2xl shadow-2xl hover:bg-white hover:text-deep-blue transition-all flex items-center justify-center gap-4 mx-auto"
              >
                {t.home.enrollToday} <CheckCircle size={32} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
