
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Facebook, Youtube, ChevronRight, MessageCircle, MapPin, Phone, Mail, Globe } from 'lucide-react';

import { LanguageContext, Language } from './LanguageContext';
import { translations } from './translations';
import { LOGO_URL, FACEBOOK_URL, YOUTUBE_URL, TIKTOK_URL, WHATSAPP_NUMBER_GHANA, EMAIL_ADDRESS } from './constants';

import { Home } from './Home';
import { Courses } from './Courses';
import { About } from './About';
import { Certificates } from './Certificates';
import { Contact } from './Contact';
import { RegistrationModal } from './RegistrationModal';

// --- FLOATING WHATSAPP BUTTON ---
const FloatingWhatsApp = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER_GHANA}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.4)] group"
  >
    <MessageCircle size={32} />
    <span className="absolute right-20 bg-white text-deep-blue px-5 py-3 rounded-2xl font-black text-sm shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
      Chat with an Advisor
    </span>
    <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 -z-10"></span>
  </motion.a>
);

// --- SHARED UI COMPONENTS ---

const Navigation = ({ openReg }: { openReg: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = React.useContext(LanguageContext);
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
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6">
          <div className={`flex justify-between items-center transition-all duration-500 px-6 py-3 rounded-[2rem] ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40' : 'bg-transparent'}`}>
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_URL} className="w-10 h-10 md:w-12 md:h-12 rounded-2xl shadow-xl" alt="Logo" />
              <div className="flex flex-col">
                <span className={`font-heading font-black text-lg md:text-xl leading-tight transition-colors ${scrolled ? 'text-deep-blue' : 'text-deep-blue'}`}>SKILL MATTERS</span>
                <span className="text-[10px] font-black text-secondary tracking-widest uppercase">Institute</span>
              </div>
            </Link>
            
            <div className="flex items-center gap-6">
              <ul className="hidden lg:flex gap-10">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link 
                      to={item.href} 
                      className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group ${location.pathname === item.href ? 'text-primary' : 'text-deep-blue hover:text-primary'}`}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} 
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/10 font-black text-xs text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Globe size={14} /> {lang.toUpperCase()}
                </button>
                <button onClick={openReg} className="hidden md:block px-8 py-3 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:bg-deep-blue hover:translate-y-[-2px] transition-all">
                  {t.hero.register}
                </button>
                <button onClick={() => setIsOpen(true)} className="lg:hidden p-3 text-deep-blue hover:text-primary transition-colors bg-white/50 rounded-xl shadow-sm">
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.1 }} 
            className="fixed inset-0 bg-deep-blue z-[200] p-10 flex flex-col text-white"
          >
            <div className="flex justify-between items-center mb-16">
              <img src={LOGO_URL} className="w-14 h-14 rounded-2xl shadow-2xl" alt="Logo" />
              <button onClick={() => setIsOpen(false)} className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all">
                <X size={32}/>
              </button>
            </div>
            <ul className="flex flex-col gap-8">
              {navItems.map((item, idx) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={item.href} 
                    onClick={() => setIsOpen(false)} 
                    className={`text-5xl font-heading font-black flex items-center justify-between group ${location.pathname === item.href ? 'text-secondary' : 'text-white hover:text-secondary'}`}
                  >
                    {item.label} <ChevronRight size={44} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4">
              <button 
                onClick={() => { setLang(lang === 'en' ? 'fr' : 'en'); setIsOpen(false); }}
                className="w-full py-6 rounded-[2rem] border-2 border-white/10 font-black text-xl hover:bg-white/5 transition-all"
              >
                SWITCH TO {lang === 'en' ? 'FRENCH' : 'ENGLISH'}
              </button>
              <button onClick={() => { setIsOpen(false); openReg(); }} className="w-full py-8 bg-secondary text-primary rounded-[2rem] font-black text-2xl shadow-2xl hover:bg-white transition-all">
                {t.hero.register}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  const { t } = React.useContext(LanguageContext);
  return (
    <footer className="bg-deep-blue text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-secondary shadow-[0_0_30px_rgba(250,204,21,0.5)]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-10">
              <img src={LOGO_URL} className="w-20 h-20 rounded-3xl shadow-2xl border-4 border-white/10" alt="Logo" />
              <div>
                <span className="font-heading font-black text-3xl block leading-none">SKILL</span>
                <span className="font-heading font-black text-3xl block text-secondary leading-none">MATTERS</span>
              </div>
            </Link>
            <p className="text-blue-100/70 text-lg leading-relaxed mb-10 max-w-sm">
              Cultivating the next generation of West African talent through industry-standard practical excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={24} />, url: FACEBOOK_URL, color: "bg-[#1877F2]", hover: "hover:bg-[#0C63D4]" },
                { icon: <Youtube size={24} />, url: YOUTUBE_URL, color: "bg-[#FF0000]", hover: "hover:bg-[#CC0000]" },
                { icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.13-.32-2.35-.14-3.32.49-.43.28-.81.65-1.08 1.09-.55.85-.63 1.95-.2 2.85.41.93 1.25 1.63 2.25 1.83.63.14 1.28.12 1.9-.06.74-.22 1.41-.67 1.86-1.28.38-.57.56-1.24.58-1.92.03-3.04.03-6.08.03-9.12z"/></svg>, url: TIKTOK_URL, color: "bg-[#000000]", hover: "hover:bg-[#111111]" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`w-14 h-14 rounded-2xl ${social.color} ${social.hover} flex items-center justify-center transition-all shadow-lg hover:scale-110 hover:-translate-y-1 active:scale-95 text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-secondary uppercase tracking-[0.3em] mb-10">Institutional</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Courses', 'Certificates', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-blue-100/60 hover:text-secondary transition-all flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-secondary transition-all"></div>
                    <span className="font-bold">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-secondary uppercase tracking-[0.3em] mb-10">Core Tracks</h4>
            <ul className="space-y-6">
              {['Office Automation', 'Graphic Design', 'Programming', 'Printing Technology'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="text-blue-100/60 hover:text-secondary transition-all flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-secondary transition-all"></div>
                    <span className="font-bold">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-secondary uppercase tracking-[0.3em] mb-10">Headquarters</h4>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary shrink-0"><MapPin size={20} /></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Location</div>
                  <span className="text-blue-100 font-bold">{t.contact.locationGhana}</span>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary shrink-0"><Phone size={20} /></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Contact</div>
                  <span className="text-blue-100 font-bold">{t.contact.phoneGhana}</span>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary shrink-0"><Mail size={20} /></div>
                <div className="min-w-0">
                  <div className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Inquiries</div>
                  <span className="text-blue-100 font-bold truncate block">{EMAIL_ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 font-bold text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white">Skill Matters Institute</span>. Elite Technical Training Hub.
          </p>
          <div className="flex items-center gap-8">
            <span className="font-black text-secondary tracking-[0.4em] uppercase text-[10px] italic opacity-60 hover:opacity-100 transition-opacity">
              "Excellence is the standard"
            </span>
          </div>
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
        <div className="flex flex-col min-h-screen selection:bg-secondary selection:text-deep-blue relative bg-bg-light">
          <Navigation openReg={() => setIsRegModalOpen(true)} />
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
          <Footer />
          <FloatingWhatsApp />
          <RegistrationModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
