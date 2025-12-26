
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { Menu, X, CheckCircle, Smartphone, Mail, Facebook, Video, ArrowRight, Printer, Code, PenTool, Briefcase, Award, ExternalLink, MapPin, Users, Globe, Youtube, Star, ChevronLeft, ChevronRight, Send, Image as ImageIcon, MessageCircle, Laptop, Settings, Database, GraduationCap, Zap, Target, Heart } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Constants & Assets ---
const LOGO_URL = "https://i.postimg.cc/sDy1sSzq/logo-AM.jpg";
const WHATSAPP_NUMBER_GHANA = "233537110537";
const WHATSAPP_NUMBER_TOGO = "22899334437";
const EMAIL_ADDRESS = "skillmatters15@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/share/17jhnWoGp7/";
const TIKTOK_URL = "https://www.tiktok.com/@association.moba";
const YOUTUBE_URL = "https://www.youtube.com/@association.moba"; 

const IMAGES = {
  // HERO SECTION
  hero: "https://i.postimg.cc/6q9Lvjv7/IMG-20251224-WA0035.jpg", 
  hero_sub1: "https://i.postimg.cc/DyFmnsF2/2025-12-23-at-9-06-51-AM.jpg", 
  hero_sub2: "https://i.postimg.cc/HkxgY6cm/IMG-20251224-WA0066.jpg", 
  
  about_hero: "https://i.postimg.cc/xTR8CCjB/9-06-51-AM.jpg",
  mission_1: "https://i.postimg.cc/sDcxXXfq/Whats-App-Image-2025-12-23-at-9-06-43-AM.jpg",
  mission_2: "https://i.postimg.cc/Wbnz33bv/Whats-App-Image-2025-12-23-at-9-06-51-AM.jpg",
  course_office: "https://i.postimg.cc/9XxkCZ9v/IMG-20251224-WA0082.jpg",
  course_design: "https://i.postimg.cc/VLRv66Ls/Whats-App-Image-2025-12-23-at-9-06-52-AM.jpg",
  course_programming: "https://i.postimg.cc/bNTrJJNr/Whats-App-Image-2025-12-23-at-9-06-53-AM.jpg",
  course_printing: "https://i.postimg.cc/RVRhFFVW/Whats-App-Image-2025-12-23-at-9-06-55-AM.jpg",
  
  // ADMIN TEAM IMAGES
  team_dambe: "https://i.postimg.cc/zL9L6Cm9/IMG-20251223-WA0017.jpg",
  team_kolani: "https://i.postimg.cc/QHbTCK5m/IMG-20251224-WA0054.jpg",
  team_lalle: "https://i.postimg.cc/LY2YBjcs/IMG-20251223-WA0016.jpg",

  gallery_1: "https://i.postimg.cc/sDcxXXfq/Whats-App-Image-2025-12-23-at-9-06-43-AM.jpg",
  gallery_2: "https://i.postimg.cc/Wbnz33bv/Whats-App-Image-2025-12-23-at-9-06-51-AM.jpg",
  gallery_3: "https://i.postimg.cc/VLRv66Ls/Whats-App-Image-2025-12-23-at-9-06-52-AM.jpg",
  gallery_4: "https://i.postimg.cc/bNTrJJNr/Whats-App-Image-2025-12-23-at-9-06-53-AM.jpg",
  gallery_5: "https://i.postimg.cc/RVRhFFVW/Whats-App-Image-2025-12-23-at-9-06-55-AM.jpg",
  campus_1: "https://i.postimg.cc/nhzJF3jt/IMG-20251224-WA0063.jpg",
  campus_2: "https://i.postimg.cc/JznLrpDV/IMG-20251224-WA0064.jpg",
  campus_3: "https://i.postimg.cc/YC9HrdGB/IMG-20251224-WA0065.jpg",
  campus_4: "https://i.postimg.cc/HkxgY6cm/IMG-20251224-WA0066.jpg",
  campus_5: "https://i.postimg.cc/8PbpPFZK/IMG-20251224-WA0078.jpg",
  design_work_1: "https://i.postimg.cc/8zJZmYjb/IMG-20251224-WA0109.jpg",
  design_work_2: "https://i.postimg.cc/sD0nSzDH/IMG-20251224-WA0110.jpg",
  design_work_3: "https://i.postimg.cc/Qd9fJzHS/IMG-20251224-WA0111.jpg",
  design_work_4: "https://i.postimg.cc/pLhsJSpY/IMG-20251224-WA0112.jpg",
  design_work_5: "https://i.postimg.cc/sgQT4LvN/IMG-20251224-WA0113.jpg",
  design_work_6: "https://i.postimg.cc/W1F5wyhf/IMG-20251224-WA0114.jpg",
  print_work_1: "https://i.postimg.cc/vH3WxthC/IMG-20251224-WA0106.jpg",
  print_work_2: "https://i.postimg.cc/q7nhwscR/IMG-20251224-WA0062.jpg",
  print_work_3: "https://i.postimg.cc/N0T9D682/IMG-20251224-WA0105.jpg",
  print_work_4: "https://i.postimg.cc/FR4fBYGs/IMG-20251224-WA0107.jpg",
  sample_certificate: "https://i.postimg.cc/K83RcPHg/IMG-20251224-WA0094.jpg",
  home_flier: "https://i.postimg.cc/hvYL59jY/IMG_20251224_WA0037.jpg",
};

// --- Custom Icons ---
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.021 0C5.381 0 0 5.381 0 12.021c0 2.124.553 4.119 1.517 5.86L0 24l6.305-1.654c1.7.91 3.633 1.433 5.688 1.433 6.638 0 12.021-5.383 12.021-12.021C24.042 5.381 18.659 0 12.021 0z" />
  </svg>
);

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.38 6.38 0 0 1-1.87-1.62v7.92c.02 3.47-2.32 6.7-5.74 7.26a7.1 7.1 0 0 1-6.19-2.32A7.13 7.13 0 0 1 3.4 12.88a7.11 7.11 0 0 1 7.07-7.06v4.03a3.1 3.1 0 0 0-3.1 3.1 3.11 3.11 0 0 0 5.27 2.2c.42-.43.64-.62.64-1.1V.02z" />
  </svg>
);

// --- Localization ---
const translations = {
  en: {
    nav: { home: 'Home', about: 'About', courses: 'Courses', certs: 'Certificates', contact: 'Contact' },
    hero: {
      tag: 'Professional Skills Excellence',
      title: 'Empowering Careers Through Skill Matters.',
      subtitle: 'Unlock your potential with industry-standard training in Wassa Akropong and beyond. We believe excellence is the only path to success.',
      btn1: 'Explore Courses',
      btn2: 'Talk to Us',
      register: 'Register Now',
      practical: 'Practical Learning',
      realWorld: 'Wassa Akropong, Ghana'
    },
    about: {
      title: 'Our Story',
      heroSubtitle: 'Redefining technical education in West Africa since our inception.',
      vision: 'Our Mission & Vision',
      campusLife: 'Campus Life',
      campusSubtitle: 'Experiencing excellence through every moment of student life.',
      p1: 'Founded on the belief that practical expertise is the currency of the future, Skill Matters Institute is the premier hub for technical training in the Western Region of Ghana.',
      motto: '"Only Excellence Makes The Difference"',
      leadership: 'Meet Our Administrators'
    },
    courses: {
      title: 'Our Courses',
      subtitle: 'Transform your future through hands-on mastery. Click on any course image to inquire via WhatsApp.',
      showcase: 'Graphic Design Showcase',
      showcaseSubtitle: 'Recent works crafted by our talented students. Tap to chat with us about these works.',
      printShowcase: 'Printing Services Showcase',
      printSubtitle: 'Professional quality printing for your brands and business needs. Click to enquire.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have a question or ready to start? Reach out to our regional offices today.',
      ghanaOffice: 'Ghana Office',
      togoOffice: 'Togo Office',
      locationGhana: 'Wassa Akropong, Ghana',
      locationTogo: 'Togo',
      phoneGhana: '+233 53 711 0537',
      phoneTogo: '+228 99 33 44 37',
      email: EMAIL_ADDRESS,
      whatsapp: 'Chat on WhatsApp',
      success: 'Opening WhatsApp...'
    },
    footer: {
      tagline: 'Empowering Ghanaian & Togolese youth with world-class practical skills.',
      follow: 'Follow Us'
    }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', courses: 'Cours', certs: 'Certificats', contact: 'Contact' },
    hero: {
      tag: 'Excellence des Compétences Professionnelles',
      title: 'Propulsez votre Carrière avec Skill Matters.',
      subtitle: 'Libérez votre potentiel avec une formation aux normes de l\'industrie à Wassa Akropong et ailleurs. Nous croyons que l\'excellence est la seule voie.',
      btn1: 'Voir les Cours',
      btn2: 'Contactez-nous',
      register: 'S\'inscrire',
      practical: 'Apprentissage Pratique',
      realWorld: 'Wassa Akropong, Ghana'
    },
    about: {
      title: 'Notre Histoire',
      heroSubtitle: 'Redéfinir l\'enseignement technique en Afrique de l\'Ouest depuis nos débuts.',
      vision: 'Notre Mission & Vision',
      campusLife: 'Vie de Campus',
      campusSubtitle: 'Vivre l\'excellence à travers chaque moment de la vie étudiante.',
      p1: 'Fondé sur la conviction que l\'expertise pratique est la monnaie du futur, l\'Institut Skill Matters est le premier centre de formation technique au Ghana.',
      motto: '"Seule l\'excellence fait la différence"',
      leadership: 'Nos Administrateurs'
    },
    courses: {
      title: 'Nos Cours',
      subtitle: 'Transformez votre avenir grâce à une maîtrise pratique. Cliquez sur une image pour nous contacter par WhatsApp.',
      showcase: 'Vitrine de Design Graphique',
      showcaseSubtitle: 'Travaux récents réalisés par nos étudiants talentueux. Cliquez pour discuter avec nous.',
      printShowcase: 'Vitrine des Services d\'Impression',
      printSubtitle: 'Impression de qualité professionnelle pour vos marques et besoins commerciaux. Cliquez pour vous renseigner.'
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Une question ou prêt à commencer ? Contactez nos bureaux régionaux aujourd\'hui.',
      ghanaOffice: 'Bureau du Ghana',
      togoOffice: 'Bureau du Togo',
      locationGhana: 'Wassa Akropong, Ghana',
      locationTogo: 'Togo',
      phoneGhana: '+233 53 711 0537',
      phoneTogo: '+228 99 33 44 37',
      email: EMAIL_ADDRESS,
      whatsapp: 'Chatter sur WhatsApp',
      success: 'Ouverture de WhatsApp...'
    },
    footer: {
      tagline: 'Autonomiser la jeunesse ghanéenne et togolaise avec des compétences pratiques.',
      follow: 'Suivez-nous'
    }
  }
};

type Language = 'en' | 'fr';
const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.en;
  openRegistration: () => void;
}>({ lang: 'en', setLang: () => {}, t: translations.en, openRegistration: () => {} });

// --- Animation Variants ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }: { children?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const FloatingWhatsApp = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="fixed bottom-6 right-6 z-[100] pointer-events-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-auto"
      >
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER_GHANA}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] border-4 border-white group"
          aria-label="WhatsApp"
        >
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="bg-white text-primary text-sm font-black px-4 py-2 rounded-2xl shadow-xl whitespace-nowrap border border-slate-100 flex items-center gap-2 group-hover:opacity-100 transition-all opacity-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
              {t.contact.whatsapp}
            </motion.div>
          </div>
          <WhatsAppIcon size={32} />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></span>
        </motion.a>
      </motion.div>
    </div>
  );
};

const RegistrationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Program: ${formData.program}
      
      Additional Message:
      ${formData.message}
    `;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            <div className="p-10 md:p-14">
              <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-primary transition-colors"><X size={32}/></button>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary"><GraduationCap size={40} /></div>
                <div>
                  <h2 className="text-3xl font-heading font-black text-primary leading-tight">{lang === 'en' ? 'Register Your Spot' : 'Inscrivez-vous'}</h2>
                  <p className="text-slate-500 font-bold">{lang === 'en' ? 'Excellence starts here.' : 'L\'excellence commence ici.'}</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary/60 uppercase tracking-widest ml-1">{lang === 'en' ? 'Full Name' : 'Nom Complet'}</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary" placeholder="Kofi Mensah" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary/60 uppercase tracking-widest ml-1">{lang === 'en' ? 'Email Address' : 'Email'}</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary" placeholder="example@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary/60 uppercase tracking-widest ml-1">{lang === 'en' ? 'Phone Number' : 'Téléphone'}</label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary" placeholder="+233..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-primary/60 uppercase tracking-widest ml-1">{lang === 'en' ? 'Preferred Program' : 'Programme Choisi'}</label>
                    <select value={formData.program} onChange={e => setFormData({...formData, program: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary appearance-none">
                      <option>Office Automation</option>
                      <option>Secretarial Studies</option>
                      <option>Graphic Design</option>
                      <option>Application Development</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-primary/60 uppercase tracking-widest ml-1">{lang === 'en' ? 'Notes' : 'Notes'}</label>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-bg-light border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-bold text-primary min-h-[120px]" placeholder={lang === 'en' ? 'Any questions?' : 'Des questions?'} />
                </div>
                <button type="submit" className="w-full py-5 rounded-2xl bg-primary text-white font-black text-lg shadow-xl hover:bg-deep-blue transition-all flex items-center justify-center gap-3">
                  {lang === 'en' ? 'Submit Registration' : 'Envoyer l\'inscription'} <Send size={24} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ShowcaseCarousel = ({ items, type }: { items: string[], type: string }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_TOGO}?text=I am inquiring about this ${type} work.`;

  return (
    <div className="relative group w-full max-w-5xl mx-auto overflow-hidden rounded-[3rem] shadow-2xl bg-white border-8 border-white">
      <div className="relative h-[400px] md:h-[600px]">
        <AnimatePresence mode="wait">
          <motion.a
            key={index}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 block"
          >
            <img src={items[index]} className="w-full h-full object-contain md:object-cover bg-slate-50" alt={`Showcase ${index}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-full text-primary font-black shadow-2xl flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform">
                <WhatsAppIcon size={24} className="text-[#25D366]" /> Chat About This
              </div>
            </div>
          </motion.a>
        </AnimatePresence>
      </div>

      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100">
        <ChevronLeft size={32} />
      </button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {items.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${index === i ? 'w-10 bg-primary' : 'w-2 bg-primary/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t, openRegistration } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.courses, href: '/courses' },
    { label: t.nav.certs, href: '/certificates' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 shadow-xl backdrop-blur-md py-3' : 'bg-white/40 py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-2xl border-2 border-secondary/30 bg-white">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg md:text-xl tracking-tight text-primary">SKILL MATTERS</span>
              <span className="text-accent text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">Institute</span>
            </div>
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <button onClick={openRegistration} className="hidden sm:flex px-6 py-2 bg-primary text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all shadow-lg">
              {t.hero.register}
            </button>
            <button 
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/5 transition-all text-xs font-black text-primary shadow-sm bg-white/80"
            >
              {lang === 'en' ? 'EN' : 'FR'}
            </button>
            <button onClick={() => setIsOpen(true)} className="p-2 text-primary hover:text-secondary transition-all">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-deep-blue z-[60]" />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] shadow-[-20px_0_50px_rgba(0,0,0,0.2)] flex flex-col p-10"
            >
              <button onClick={() => setIsOpen(false)} className="self-end p-2 text-slate-400 hover:text-primary transition-colors"><X size={40}/></button>
              <ul className="mt-12 flex flex-col gap-8">
                {navItems.map((item) => (
                  <motion.li key={item.label} whileHover={{ x: 10 }}>
                    <Link to={item.href} onClick={() => setIsOpen(false)} className={`text-4xl font-heading font-black ${location.pathname === item.href ? 'text-secondary' : 'text-primary hover:text-secondary'}`}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pt-10 border-t border-slate-100">
                <button onClick={() => { setIsOpen(false); openRegistration(); }} className="w-full py-5 bg-primary text-white rounded-2xl font-black text-xl mb-6 shadow-xl hover:bg-secondary hover:text-primary transition-all">
                  {t.hero.register}
                </button>
                <div className="flex gap-4">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER_GHANA}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-green-50 text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-all"><WhatsAppIcon size={24}/></a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 text-[#1877F2] rounded-full hover:bg-[#1877F2] hover:text-white transition-all"><Facebook size={24}/></a>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 text-black rounded-full hover:bg-black hover:text-white transition-all"><TikTokIcon size={24}/></a>
                  <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-red-50 text-[#FF0000] rounded-full hover:bg-[#FF0000] hover:text-white transition-all"><Youtube size={24}/></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Pages ---

const Home = () => {
  const { t, openRegistration } = useContext(LanguageContext);
  const galleryImages = [
    { src: IMAGES.gallery_1 }, { src: IMAGES.campus_5 }, { src: IMAGES.gallery_3 },
    { src: IMAGES.gallery_4 }, { src: IMAGES.gallery_2 }, { src: IMAGES.campus_2 },
  ];

  const trainingPrograms = [
    {
      title: "Office Automation",
      description: "Master the modern digital workspace with comprehensive tools for office productivity and workflow optimization.",
      icon: <Laptop className="text-secondary" size={32} />,
      img: IMAGES.course_office
    },
    {
      title: "Secretarial Studies",
      description: "Develop professional administrative skills, executive management techniques, and business communication excellence.",
      icon: <Settings className="text-secondary" size={32} />,
      img: IMAGES.hero_sub1
    },
    {
      title: "Graphic Design",
      description: "Unleash your creativity using industry-standard visual design software to build powerful brand identities.",
      icon: <PenTool className="text-secondary" size={32} />,
      img: IMAGES.course_design
    },
    {
      title: "Application Development",
      description: "Build the future with modern programming languages, database management, and professional software engineering.",
      icon: <Code className="text-secondary" size={32} />,
      img: IMAGES.course_programming
    }
  ];

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-bg-light overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-20">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-secondary rounded-full blur-[150px]"></div>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-deep-blue font-black text-[10px] tracking-widest uppercase">{t.hero.tag}</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-heading font-black text-primary leading-[1] mb-8">
              {t.hero.title.split('.').map((s, i) => <span key={i} className={i === 1 ? "text-secondary block" : ""}>{s}</span>)}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-12">{t.hero.subtitle}</motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-6">
              <button onClick={openRegistration} className="px-10 py-5 bg-primary text-white rounded-[2rem] font-black shadow-2xl hover:bg-secondary hover:text-primary transition-all flex items-center gap-3 transform hover:-translate-y-1">
                {t.hero.register} <CheckCircle size={24}/>
              </button>
              <Link to="/courses" className="px-10 py-5 bg-white text-primary border-2 border-primary/10 rounded-[2rem] font-black shadow-xl hover:bg-bg-light transition-all flex items-center gap-3">
                {t.hero.btn1} <ArrowRight size={24}/>
              </Link>
            </motion.div>
          </motion.div>
          <div className="relative grid grid-cols-2 gap-6 h-[700px]">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="col-span-2 h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img src={IMAGES.hero} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000" alt="Hero Main (Computer)" />
            </motion.div>
            <div className="h-[250px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white">
              <img src={IMAGES.hero_sub1} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" alt="Hero Sub 1" />
            </div>
            <div className="h-[250px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white">
              <img src={IMAGES.hero_sub2} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" alt="Hero Sub 2" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-5xl mx-auto rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(37,99,235,0.15)] bg-white border-[12px] border-white group"
          >
            <div className="absolute top-8 left-8 z-10">
              <div className="bg-secondary text-primary px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2">
                <Star size={16} fill="currentColor" /> Featured Information
              </div>
            </div>
            <img 
              src={IMAGES.home_flier} 
              alt="Skills Matters Featured Flier" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-12">
              <button 
                onClick={openRegistration}
                className="bg-white text-primary px-10 py-5 rounded-[2rem] font-black shadow-2xl flex items-center gap-3 hover:bg-secondary transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
              >
                Inquire Now <WhatsAppIcon size={24} className="text-[#25D366]" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-secondary font-black tracking-[0.3em] uppercase text-sm block mb-4">Skill Matters Institute</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-black text-primary mb-6">Computer Training</motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} className="h-1 w-24 bg-secondary mx-auto mb-8"></motion.div>
            <button onClick={openRegistration} className="inline-block px-10 py-4 bg-accent text-white rounded-full font-black text-sm uppercase tracking-widest shadow-xl animate-bounce hover:bg-secondary hover:text-primary transition-all cursor-pointer">
              ✓ Registration Open - Join Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -15 }}
                className="group bg-bg-light rounded-[3rem] overflow-hidden shadow-xl border-2 border-transparent hover:border-secondary/20 transition-all duration-500"
              >
                <div className="h-72 relative overflow-hidden">
                  <img src={program.img} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" alt={program.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-light via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
                    {program.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">{program.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{program.description}</p>
                  <button onClick={openRegistration} className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all">
                    Register Now <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-primary mb-6">Life at Skill Matters</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Explore the vibrant environment where excellence is nurtured every day.</p>
        </div>
        <div className="flex gap-8 overflow-hidden py-10">
          <motion.div 
            initial={{ x: 0 }} 
            animate={{ x: "-50%" }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
            className="flex gap-8 shrink-0"
          >
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div key={idx} className="w-[450px] h-[550px] shrink-0 rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-slate-50 bg-white">
                <img 
                  src={img.src} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  alt="Campus Life"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

const About = () => {
  const { t, lang } = useContext(LanguageContext);
  
  const adminTeam = [
    { name: "Dambe Lapotinan", img: IMAGES.team_dambe, role: lang === 'en' ? 'Administrator' : 'Administrateur', bio: "Expert in organizational management and strategic operations." },
    { name: "Kolani Latinan", img: IMAGES.team_kolani, role: lang === 'en' ? 'Administrator' : 'Administrateur', bio: "Dedicated to student welfare and academic excellence protocols." },
    { name: "Matieyendou Lalle", img: IMAGES.team_lalle, role: lang === 'en' ? 'Director' : 'Directeur', bio: "Visionary leader driving the future of technical skills." }
  ];

  const coreValues = [
    { title: "Practical Mastery", icon: <Zap size={32} />, desc: "Learning by doing is the heartbeat of our curriculum." },
    { title: "Global Vision", icon: <Target size={32} />, desc: "Preparing students for international industry standards." },
    { title: "Integrity", icon: <Heart size={32} />, desc: "Excellence paired with a strong moral foundation." }
  ];

  const stats = [
    { label: "Students Trained", value: "5,000+" },
    { label: "Success Rate", value: "98%" },
    { label: "Partner Companies", value: "120+" },
    { label: "Expert Instructors", value: "25+" }
  ];

  return (
    <PageTransition>
      {/* IMPROVED HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-deep-blue">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.about_hero} className="w-full h-full object-cover opacity-20 scale-110 blur-sm" alt="About Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/80 via-deep-blue/40 to-white"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-sm mb-6 block">Since 2015</span>
            <h1 className="text-6xl md:text-9xl font-heading font-black text-white mb-6 leading-none">{t.about.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium">{t.about.heroSubtitle}</p>
          </motion.div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[50px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,91.54,118,103.09,177.3,103.57,238.2,104.04,272,74,321.39,56.44Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-[2rem] bg-bg-light/50 border border-primary/5"
              >
                <div className="text-4xl md:text-6xl font-heading font-black text-primary mb-2">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION REDESIGNED */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white w-4/5"
              >
                <img src={IMAGES.mission_1} className="w-full h-full object-cover" alt="Mission 1" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                className="absolute -bottom-12 -right-4 z-20 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white w-2/3 hidden md:block"
              >
                <img src={IMAGES.mission_2} className="w-full h-full object-cover" alt="Mission 2" />
              </motion.div>
            </div>
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <span className="text-accent font-black uppercase tracking-widest text-sm block mb-4">The Institute</span>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-primary mb-10 leading-none">{t.about.vision}</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">{t.about.p1}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                   {coreValues.map((val, idx) => (
                     <div key={idx} className="flex flex-col gap-4">
                       <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">{val.icon}</div>
                       <h4 className="font-black text-primary">{val.title}</h4>
                       <p className="text-slate-500 text-sm">{val.desc}</p>
                     </div>
                   ))}
                </div>
                <div className="p-10 rounded-[3rem] bg-deep-blue text-white shadow-[0_25px_50px_rgba(30,58,138,0.3)] relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                  <p className="text-3xl font-heading font-black italic text-secondary relative z-10">{t.about.motto}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* REFRESHED LEADERSHIP SECTION */}
      <section className="py-32 bg-bg-light relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        <div className="container mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-secondary font-black tracking-[0.4em] uppercase text-sm block mb-4">Board of Directors</motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-8xl font-heading font-black text-primary mb-24"
          >
            {t.about.leadership}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {adminTeam.map((admin, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="group perspective"
              >
                <div className="relative mb-10 h-[500px] rounded-[4rem] overflow-hidden shadow-2xl bg-white transition-all duration-700 hover:shadow-primary/20 transform-gpu group-hover:rotate-y-12">
                  <img src={admin.img} className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={admin.name} />
                  
                  {/* Bio Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-primary to-transparent backdrop-blur-sm">
                    <p className="text-white text-sm font-medium leading-relaxed">{admin.bio}</p>
                  </div>

                  {/* Glassmorphism Title Box */}
                  <div className="absolute top-6 left-6 p-4 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <Star className="text-secondary" fill="currentColor" />
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-black text-primary mb-2 transition-colors group-hover:text-secondary">{admin.name}</h3>
                <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-black tracking-widest uppercase text-xs">
                  {admin.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-primary mb-6">{t.about.campusLife}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-20 text-lg">{t.about.campusSubtitle}</p>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[IMAGES.campus_1, IMAGES.campus_5, IMAGES.campus_3, IMAGES.campus_4, IMAGES.campus_2, IMAGES.gallery_5].map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="break-inside-avoid rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group relative bg-bg-light cursor-pointer"
              >
                <img src={img} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" alt={`Campus ${i}`} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ImageIcon className="text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Courses = () => {
  const { lang, t, openRegistration } = useContext(LanguageContext);
  const courseList = [
    { id: 'office', title: lang === 'en' ? 'Office Management' : 'Gestion de Bureau', img: IMAGES.course_office, price: '₵500/mo' },
    { id: 'design', title: lang === 'en' ? 'Graphic Design' : 'Design Graphique', img: IMAGES.course_design, price: '₵650/mo' },
    { id: 'code', title: lang === 'en' ? 'Programming' : 'Programmation', img: IMAGES.course_programming, price: '₵800/mo' },
    { id: 'print', title: lang === 'en' ? 'Printing Tech' : 'Tech d\'Impression', img: IMAGES.course_printing, price: '₵450/mo' }
  ];

  const designPortfolio = [
    IMAGES.design_work_1, IMAGES.design_work_2, IMAGES.design_work_3,
    IMAGES.design_work_4, IMAGES.design_work_5, IMAGES.design_work_6,
  ];

  const printingPortfolio = [
    IMAGES.print_work_1, IMAGES.print_work_2, IMAGES.print_work_3, IMAGES.print_work_4
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-heading font-black text-primary mb-8">{t.courses.title}</h2>
            <p className="text-xl text-slate-500 mb-8">{t.courses.subtitle}</p>
            <button onClick={openRegistration} className="px-10 py-4 bg-primary text-white rounded-full font-black uppercase shadow-xl hover:bg-secondary hover:text-primary transition-all">
              Register For A Course Now
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {courseList.map((c) => (
              <div key={c.id} className="group relative h-[450px] rounded-[4rem] overflow-hidden shadow-2xl bg-deep-blue">
                <button onClick={openRegistration} className="block w-full h-full text-left">
                  <img src={c.img} className="w-full h-full object-cover object-top opacity-70 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-end text-white bg-gradient-to-t from-primary/80 via-transparent to-transparent">
                    <h3 className="text-4xl font-heading font-black mb-4">{c.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-secondary">{c.price}</span>
                      <div className="px-8 py-4 bg-white/20 rounded-full font-bold backdrop-blur-md">Enroll Now</div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="mb-32">
            <h2 className="text-5xl font-heading font-black text-primary text-center mb-16">{t.courses.showcase}</h2>
            <ShowcaseCarousel items={designPortfolio} type="graphic design" />
          </div>

          <div>
            <h2 className="text-5xl font-heading font-black text-primary text-center mb-16">{t.courses.printShowcase}</h2>
            <ShowcaseCarousel items={printingPortfolio} type="printing" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Certificates = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-bg-light text-center">
        <Award size={64} className="text-primary mx-auto mb-8" />
        <h2 className="text-5xl md:text-7xl font-heading font-black text-primary mb-16">{lang === 'en' ? 'Official Certification' : 'Certification Officielle'}</h2>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h3 className="text-4xl font-heading font-black text-primary mb-6">Earn Your Credentials</h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Every student who successfully completes our rigorous practical training receives a globally recognized certificate from Skill Matters Institute. These credentials prove your technical mastery to employers across Ghana, Togo, and beyond.
              </p>
              <div className="space-y-4">
                {['Verified Skills', 'Industry Ready', 'Regional Recognition'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-2xl font-black text-primary/80">
                    <CheckCircle className="text-accent" /> {item}
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div initial={{ rotate: 2 }} whileHover={{ rotate: 0 }} className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={IMAGES.sample_certificate} 
                className="w-full rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-8 border-white" 
                alt="Sample Certificate" 
              />
              <div className="absolute top-6 right-6 bg-secondary text-primary px-6 py-2 rounded-full font-black text-sm uppercase shadow-xl">
                Sample Certificate
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Contact = () => {
  const { t, openRegistration } = useContext(LanguageContext);
  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-heading font-black text-primary mb-8">{t.contact.title}</h2>
              <p className="text-xl text-slate-500 mb-12">{t.contact.subtitle}</p>
              <div className="space-y-8">
                <div className="p-8 rounded-[3rem] bg-bg-light border border-primary/10">
                  <h4 className="text-2xl font-black text-primary mb-4 flex items-center gap-3"><MapPin className="text-secondary"/> {t.contact.ghanaOffice}</h4>
                  <p className="text-xl text-slate-600 mb-6">{t.contact.locationGhana}</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER_GHANA}`} className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-bold shadow-xl">
                    <WhatsAppIcon size={24}/> {t.contact.phoneGhana}
                  </a>
                </div>
                <div className="p-8 rounded-[3rem] bg-yellow-50 border border-secondary/20">
                  <h4 className="text-2xl font-black text-primary mb-4 flex items-center gap-3"><MapPin className="text-secondary"/> {t.contact.togoOffice}</h4>
                  <p className="text-xl text-slate-600 mb-6">{t.contact.locationTogo}</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER_TOGO}`} className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-bold shadow-xl">
                    <WhatsAppIcon size={24}/> {t.contact.phoneTogo}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-full space-y-8">
               <div className="h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.634823460662!2d-2.0911736!3d5.7891823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfda4128f738f615%3A0xc0f1b2720e7f781!2sWassa%20Akropong!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh" 
                   width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                 ></iframe>
               </div>
               <div className="p-10 bg-bg-light rounded-[3rem] shadow-xl">
                 <h3 className="text-3xl font-heading font-black text-primary mb-6 text-center">Registration Inquiry</h3>
                 <p className="text-slate-500 mb-8 text-center font-bold">Interested in joining? Click the button below to fill out our formal registration form and start your journey.</p>
                 <div className="space-y-4">
                   <button onClick={openRegistration} className="w-full py-6 rounded-[2rem] bg-primary text-white font-black text-xl flex items-center justify-center gap-3 shadow-2xl transform transition-transform hover:scale-[1.02]">
                     Launch Registration Form <GraduationCap size={28}/>
                   </button>
                   <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER_GHANA}`)} className="w-full py-4 rounded-[2rem] bg-white text-primary font-black text-lg flex items-center justify-center gap-3 border-2 border-primary/10">
                     Chat via WhatsApp <WhatsAppIcon size={24}/>
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="bg-deep-blue text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-8">
              <img src={LOGO_URL} className="w-16 h-16 rounded-2xl bg-white p-1" />
              <span className="font-heading font-black text-4xl">SKILL MATTERS</span>
            </Link>
            <p className="text-blue-100 text-xl max-w-md">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="text-2xl font-black text-secondary mb-8">Links</h4>
            <ul className="space-y-4 text-blue-100 text-lg">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-secondary transition-colors">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-black text-secondary mb-8">Follow</h4>
            <div className="flex gap-4">
               <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-black transition-all"><TikTokIcon size={24}/></a>
               <a href={`https://wa.me/${WHATSAPP_NUMBER_GHANA}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all"><WhatsAppIcon size={24}/></a>
               <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"><Facebook size={24}/></a>
               <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all"><Youtube size={24}/></a>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex justify-between items-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Skill Matters Institute.</p>
          <p className="font-black text-secondary uppercase tracking-widest">{t.about.motto}</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], openRegistration: () => setIsRegModalOpen(true) }}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen relative bg-bg-light">
          <Navigation />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <FloatingWhatsApp />
          <Footer />
          <RegistrationModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
