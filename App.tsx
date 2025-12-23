import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Smartphone, Mail, Facebook, Video, ArrowRight, Printer, Code, PenTool, Briefcase, Award, ExternalLink, MapPin, Users, Calendar, Clock, DollarSign, HelpCircle, ChevronDown, ChevronUp, Star, Youtube } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Assets ---
const LOGO_URL = "https://i.postimg.cc/sDy1sSzq/logo-AM.jpg";
const IMAGES = {
  hero: "https://i.postimg.cc/DyFmnsF2/2025-12-23-at-9-06-51-AM.jpg",
  about_hero: "https://i.postimg.cc/xTR8CCjB/9-06-51-AM.jpg",
  mission_1: "https://i.postimg.cc/sDcxXXfq/Whats-App-Image-2025-12-23-at-9-06-43-AM.jpg",
  mission_2: "https://i.postimg.cc/Wbnz33bv/Whats-App-Image-2025-12-23-at-9-06-51-AM.jpg",
  course_office: "https://i.postimg.cc/Wbnz33bv/Whats-App-Image-2025-12-23-at-9-06-51-AM.jpg",
  course_design: "https://i.postimg.cc/VLRv66Ls/Whats-App-Image-2025-12-23-at-9-06-52-AM.jpg",
  course_programming: "https://i.postimg.cc/bNTrJJNr/Whats-App-Image-2025-12-23-at-9-06-53-AM.jpg",
  course_printing: "https://i.postimg.cc/RVRhFFVW/Whats-App-Image-2025-12-23-at-9-06-55-AM.jpg",
  gallery_1: "https://i.postimg.cc/DyFmnsF2/2025-12-23-at-9-06-51-AM.jpg",
  gallery_2: "https://i.postimg.cc/xTR8CCjB/9-06-51-AM.jpg",
  gallery_3: "https://i.postimg.cc/sDcxXXfq/Whats-App-Image-2025-12-23-at-9-06-43-AM.jpg",
  gallery_4: "https://i.postimg.cc/VLRv66Ls/Whats-App-Image-2025-12-23-at-9-06-52-AM.jpg"
};

// --- Utilities ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Components ---

// 1. Navigation Sidebar
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Services', href: '/services' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Contact', href: '/contact' },
  ];

  const sidebarVariants: Variants = {
    open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '100%', opacity: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/50 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg border-2 border-accent-teal/20 transition-transform group-hover:scale-105">
              <img src={LOGO_URL} alt="Skills Matters Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg tracking-wide text-deep-blue`}>SKILLS MATTERS</span>
              <span className="text-accent-teal text-xs tracking-widest uppercase group-hover:text-accent-teal-dark transition-colors">Institute</span>
            </div>
          </Link>
          
          <button 
            onClick={() => setIsOpen(true)} 
            className={`transition-colors p-2 text-deep-blue hover:text-accent-teal`}
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[55]"
            />
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white border-l border-gray-200 z-[60] shadow-2xl flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-accent-teal transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={32} />
                </button>
              </div>

              <ul className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link 
                        to={item.href} 
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-heading hover:pl-2 transition-all duration-300 flex items-center gap-3 ${isActive ? 'text-accent-teal' : 'text-deep-blue hover:text-accent-teal'}`}
                      >
                        <span className={`w-1 h-1 bg-accent-teal rounded-full transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto border-t border-gray-100 pt-8 flex flex-col items-center gap-4">
                 <a href="https://youtube.com/@skillmattersinstitute?si=cgk3sXjFHu9Cl5UH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-600 font-bold hover:scale-105 transition-transform">
                   <Youtube size={20} /> Follow us on YouTube
                 </a>
                 <p className="text-accent-teal italic text-sm text-center">"Seul Excellence fait la difference"</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// --- PAGES ---

// 2. Home Page
const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-light">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent-teal/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-block mb-4 px-4 py-1.5 border border-accent-teal/30 rounded-full bg-white shadow-sm">
                <span className="text-accent-teal text-sm font-semibold tracking-wider uppercase">Professional Skills Training</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-deep-blue mb-6 leading-tight">
                Empowering Skills.<br />
                <span className="text-accent-teal">Creating Excellence.</span>
              </h1>
              
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
                Unlock your potential with industry-standard training designed to elevate your career. At Skills Matters Institute, we believe only excellence makes the difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link to="/courses" className="group relative px-8 py-4 bg-accent-teal hover:bg-deep-blue text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-accent-teal/30 hover:shadow-xl hover:shadow-deep-blue/30 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    View Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </span>
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-deep-blue hover:border-accent-teal hover:text-accent-teal font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 aspect-video lg:aspect-square">
                <img 
                  src={IMAGES.hero} 
                  alt="Students working together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Practical Learning</p>
                  <p className="text-sm opacity-80">Real-world projects in Cameroon</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-accent-teal/20 rounded-[2.5rem] -z-10 rotate-[-3deg]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 mx-auto bg-accent-teal/10 rounded-full flex items-center justify-center text-accent-teal mb-4">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-bold text-deep-blue mb-2">Expert Instructors</h3>
               <p className="text-slate-500">Learn from local industry professionals with years of hands-on experience.</p>
             </div>
             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 mx-auto bg-accent-teal/10 rounded-full flex items-center justify-center text-accent-teal mb-4">
                 <Award size={32} />
               </div>
               <h3 className="text-xl font-bold text-deep-blue mb-2">Recognized Certs</h3>
               <p className="text-slate-500">Gain credentials that are respected and valued by employers nationwide.</p>
             </div>
             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 mx-auto bg-accent-teal/10 rounded-full flex items-center justify-center text-accent-teal mb-4">
                 <Clock size={32} />
               </div>
               <h3 className="text-xl font-bold text-deep-blue mb-2">Flexible Learning</h3>
               <p className="text-slate-500">Schedule your classes to fit around your professional or student life.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-deep-blue text-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-heading mb-12">Student <span className="text-accent-teal">Success Stories</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-deep-blue-light p-8 rounded-2xl border border-white/10 relative">
                <div className="flex gap-1 text-yellow-400 mb-4 justify-center">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="italic text-gray-300 mb-6">"The Graphic Design course completely changed my career path. I'm now working as a freelance designer in Douala."</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-accent-teal rounded-full flex items-center justify-center font-bold">AT</div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Arnaud Tchuente</p>
                    <p className="text-xs text-gray-400">Graphic Design Graduate</p>
                  </div>
                </div>
              </div>
              <div className="bg-deep-blue-light p-8 rounded-2xl border border-white/10 relative">
                <div className="flex gap-1 text-yellow-400 mb-4 justify-center">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="italic text-gray-300 mb-6">"Skills Matters Institute provided the practical coding skills I needed. The hands-on projects were invaluable."</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold">SE</div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Sandrine Etoundi</p>
                    <p className="text-xs text-gray-400">Programming Student</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Blog/News Preview */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-heading font-bold text-deep-blue">Latest <span className="text-accent-teal">Insights</span></h2>
               <p className="text-slate-500 mt-2">News and updates from the institute.</p>
             </div>
             <Link to="/about" className="text-accent-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all">Read More <ArrowRight size={16} /></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="group cursor-pointer">
               <div className="rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                 <img src={IMAGES.gallery_4} alt="Workshop" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
               </div>
               <p className="text-xs text-accent-teal font-bold mb-2">OCT 12, 2023</p>
               <h3 className="font-bold text-lg text-deep-blue mb-2 group-hover:text-accent-teal transition-colors">New Digital Marketing Workshop</h3>
               <p className="text-slate-500 text-sm line-clamp-2">Join us for a 2-day intensive workshop on social media strategies in Yaoundé.</p>
             </div>
             <div className="group cursor-pointer">
               <div className="rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                 <img src={IMAGES.mission_2} alt="Students" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
               </div>
               <p className="text-xs text-accent-teal font-bold mb-2">SEP 28, 2023</p>
               <h3 className="font-bold text-lg text-deep-blue mb-2 group-hover:text-accent-teal transition-colors">Welcoming the new cohort</h3>
               <p className="text-slate-500 text-sm line-clamp-2">We are excited to welcome over 50 new students to our campus this semester.</p>
             </div>
             <div className="group cursor-pointer">
               <div className="rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                 <img src={IMAGES.mission_1} alt="Meeting" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
               </div>
               <p className="text-xs text-accent-teal font-bold mb-2">AUG 15, 2023</p>
               <h3 className="font-bold text-lg text-deep-blue mb-2 group-hover:text-accent-teal transition-colors">Partnership with Tech Firms</h3>
               <p className="text-slate-500 text-sm line-clamp-2">Skills Matters Institute partners with local tech firms to provide internship opportunities.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// 3. About Page
const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* About Hero */}
      <section className="bg-deep-blue text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20">
           <img src={IMAGES.about_hero} alt="Background" className="w-full h-full object-cover" />
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">About <span className="text-accent-teal">Us</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Discover the story behind Skills Matters Institute and our commitment to excellence in education.</p>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-heading font-bold text-deep-blue mb-6">Our Mission & Vision</h2>
               <div className="space-y-6">
                 <p className="text-slate-600 leading-relaxed">
                   Founded with the belief that practical skills are the currency of the future, Skills Matters Institute has grown into a premier destination for vocational and technical training in Cameroon.
                 </p>
                 <p className="text-slate-600 leading-relaxed">
                   Our mission is to bridge the gap between theoretical education and the practical demands of the modern workforce. We strive to empower every student with the tools they need to succeed, innovate, and lead in their respective fields.
                 </p>
                 <blockquote className="border-l-4 border-accent-teal pl-6 italic text-slate-700 my-8">
                   "Seul Excellence fait la difference" - Only Excellence Makes the Difference.
                 </blockquote>
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <img src={IMAGES.mission_1} alt="Team" className="rounded-2xl shadow-lg mt-8 aspect-square object-cover"/>
               <img src={IMAGES.mission_2} alt="Classroom" className="rounded-2xl shadow-lg aspect-square object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-heading font-bold text-deep-blue">Meet Our <span className="text-accent-teal">Leadership</span></h2>
             <p className="text-slate-500 mt-2">The experts guiding our vision.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Matieyendou Lalle", role: "Director", img: IMAGES.gallery_1 },
                { name: "Dr. Solange Biyong", role: "Head of Academics", img: IMAGES.gallery_2 },
                { name: "Eng. Cedric Ngannou", role: "Technical Lead", img: IMAGES.gallery_3 }
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner">
                     <img src={member.img} alt={member.name} className="w-full h-full object-cover"/>
                   </div>
                   <h3 className="font-bold text-xl text-deep-blue">{member.name}</h3>
                   <p className="text-accent-teal text-sm font-medium uppercase tracking-wide">{member.role}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-heading font-bold text-deep-blue mb-12">Campus <span className="text-accent-teal">Life</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md">
                 <img src={IMAGES.gallery_1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Students"/>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                 <img src={IMAGES.gallery_2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Meeting"/>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                 <img src={IMAGES.gallery_3} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Lab"/>
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-md">
                 <img src={IMAGES.gallery_4} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Collaboration"/>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// 4. Courses Page
const CoursesPage = () => {
  const courseDetails = [
    {
      id: "office",
      title: "Office Management",
      desc: "Master administrative skills, organizational efficiency, and modern office software suites.",
      longDesc: "Equip yourself with the essential skills needed to run a modern office efficiently. Master MS Office Suite, office etiquette, and digital communication tools.",
      outcomes: ["Proficiency in MS Office", "Business Communication", "Record Keeping", "Time Management"],
      image: IMAGES.course_office,
      icon: <Briefcase size={24}/>
    },
    {
      id: "design",
      title: "Graphic Design",
      desc: "Create stunning visuals using industry-standard tools like Photoshop, Illustrator, and CorelDraw.",
      longDesc: "Unleash your creativity. Cover design principles, color theory, and typography with intensive practical training in Photoshop, Illustrator, and CorelDraw.",
      outcomes: ["Brand Identity Design", "Photo Manipulation", "Vector Illustration", "Print Layout"],
      image: IMAGES.course_design,
      icon: <PenTool size={24}/>
    },
    {
      id: "programming",
      title: "Programming",
      desc: "Build the future with code. Learn software development, web technologies, and logic.",
      longDesc: "Dive into software development. Learn programming logic, web development (HTML, CSS, JS), and backend fundamentals with real-world projects.",
      outcomes: ["Web Development", "Programming Logic", "Database Basics", "Git Control"],
      image: IMAGES.course_programming,
      icon: <Code size={24}/>
    },
    {
      id: "printing",
      title: "Printing & Design",
      desc: "Practical training in T-Shirt printing, Books printing, and Photo printing technologies.",
      longDesc: "Hands-on course on print industry technicalities. Operate professional machinery, understand paper types, color calibration, and textile printing.",
      outcomes: ["Screen Printing", "Large Format Operations", "Color Management", "Production Workflow"],
      image: IMAGES.course_printing,
      icon: <Printer size={24}/>
    }
  ];

  return (
    <div className="pt-20">
       <section className="bg-slate-50 py-20">
         <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-blue mb-4">Our <span className="text-accent-teal">Courses</span></h1>
            <p className="text-slate-500 max-w-2xl mx-auto">Explore our diverse range of programs designed to kickstart your career.</p>
         </div>
       </section>

       <section className="py-24 bg-white">
         <div className="container mx-auto px-6 space-y-24">
            {courseDetails.map((course, index) => (
              <div key={course.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3]">
                     <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                     <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-xl text-accent-teal shadow-lg">
                       {course.icon}
                     </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                   <h2 className="text-3xl font-heading font-bold text-deep-blue mb-4">{course.title}</h2>
                   <p className="text-lg text-slate-600 mb-6 leading-relaxed">{course.longDesc}</p>
                   
                   <div className="mb-8">
                     <h4 className="font-bold text-deep-blue mb-3 flex items-center gap-2"><CheckCircle size={18} className="text-accent-teal"/> What you will learn:</h4>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {course.outcomes.map(outcome => (
                         <li key={outcome} className="flex items-center gap-2 text-slate-600 text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-accent-teal"></div>
                           {outcome}
                         </li>
                       ))}
                     </ul>
                   </div>
                   
                   <Link to="/contact" className="inline-block px-8 py-3 bg-deep-blue text-white rounded-lg hover:bg-accent-teal transition-colors font-medium">
                     Enroll in this Course
                   </Link>
                </div>
              </div>
            ))}
         </div>
       </section>
    </div>
  );
};

// 5. Services Page
const ServicesPage = () => {
  return (
    <div className="pt-20">
       <section className="bg-deep-blue text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Professional <span className="text-accent-teal">Services</span></h1>
            <p className="text-gray-300 max-w-2xl mx-auto">Beyond education, we provide top-tier services to businesses and individuals.</p>
          </div>
       </section>

       <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                <div className="p-8 border border-slate-100 rounded-2xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 bg-white">
                   <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                     <Users size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-deep-blue mb-4">Corporate Training</h3>
                   <p className="text-slate-600 mb-6">Tailored sessions for companies looking to upskill their staff in IT, administration, or design.</p>
                </div>
                
                <div className="p-8 border border-slate-100 rounded-2xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 bg-white">
                   <div className="w-16 h-16 bg-teal-50 text-accent-teal rounded-xl flex items-center justify-center mb-6">
                     <Printer size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-deep-blue mb-4">Print Production</h3>
                   <p className="text-slate-600 mb-6">High-quality printing for T-shirts, books, banners, and marketing materials.</p>
                </div>

                <div className="p-8 border border-slate-100 rounded-2xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 bg-white">
                   <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                     <PenTool size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-deep-blue mb-4">Design Consultancy</h3>
                   <p className="text-slate-600 mb-6">Create a visual identity that stands out with our branding and UI/UX expertise.</p>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

// 6. Certificates Page
const CertificatesPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20 text-center">
         <div className="container mx-auto px-6">
           <Award size={64} className="text-accent-teal mx-auto mb-6" />
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-blue mb-4">Certification</h1>
           <p className="text-slate-600 max-w-2xl mx-auto">Validate your skills with our recognized credentials.</p>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col items-center">
           <div className="max-w-4xl bg-white border border-slate-200 shadow-2xl p-4 md:p-8 rounded-xl relative mb-12 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="border-4 border-double border-slate-100 p-8 md:p-12 text-center h-full flex flex-col items-center justify-center">
                 <div className="w-24 h-24 mb-6 relative">
                    <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover rounded-full shadow-md"/>
                 </div>
                 <h2 className="font-heading text-4xl text-deep-blue mb-2">Certificate of Completion</h2>
                 <p className="text-slate-500 italic mb-8">This is to certify that</p>
                 <p className="text-3xl font-cursive text-accent-teal mb-2 font-bold border-b-2 border-slate-100 pb-2 px-12">Maitre Lalle Matieyendou</p>
                 <p className="text-slate-500 mt-6 mb-8 max-w-lg">Has successfully completed the prescribed course in <strong>Office Management & IT Excellence</strong> demonstrating proficiency and dedication.</p>
                 <div className="flex justify-between w-full max-w-md mt-8 pt-8 border-t border-slate-100">
                    <div className="text-center">
                       <div className="h-12 w-32 mb-2 border-b border-slate-300"></div> 
                       <p className="text-xs text-slate-400 uppercase tracking-widest">Director Signature</p>
                    </div>
                    <div className="text-center">
                       <div className="w-16 h-16 bg-accent-teal/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                         <Award className="text-accent-teal" />
                       </div>
                    </div>
                    <div className="text-center">
                       <p className="text-sm font-bold text-deep-blue">{new Date().getFullYear()}</p>
                       <p className="text-xs text-slate-400 uppercase tracking-widest">Date</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// 7. Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !message) {
      alert("Please fill in your name and message.");
      return;
    }
    const whatsappMessage = `*Hello Skills Matters!*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/237699000000?text=${whatsappMessage}`; // Generic CM number example
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      <section className="bg-deep-blue text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact <span className="text-accent-teal">Us</span></h1>
        <p className="text-gray-300">We are here to help. Reach out to us anytime.</p>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-deep-blue mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Phone</h4>
                    <p className="text-deep-blue font-semibold">+237 6XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Email</h4>
                    <p className="text-deep-blue font-semibold">contact@skillmatters.cm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Location</h4>
                    <p className="text-deep-blue font-semibold">Yaoundé, Cameroon</p>
                  </div>
                </div>
              </div>

              {/* Google Map Iframe */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 border-2 border-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.51130663185!2d11.431268677465825!3d3.844111351144074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf9a22d35f47%3A0xc5403e0617308d!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div>
              <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-deep-blue mb-6">Send Message</h3>
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-500 text-sm mb-2" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-deep-blue focus:outline-none focus:border-accent-teal transition-colors"
                      placeholder="Thierry Abessolo"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 text-sm mb-2" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-deep-blue focus:outline-none focus:border-accent-teal transition-colors"
                      placeholder="thierry@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 text-sm mb-2" htmlFor="message">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-deep-blue focus:outline-none focus:border-accent-teal transition-colors"
                      placeholder="I'm interested in..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded-lg hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                     Send via WhatsApp <ExternalLink size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// 8. Footer
const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="w-16 h-16 mb-4 mx-auto md:mx-0 rounded-lg overflow-hidden border border-white/20">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-heading font-bold text-white mb-2">SKILLS MATTERS</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Cameroonian youth with practical skills for a better tomorrow.
            </p>
          </div>

          <div className="text-center md:text-left">
             <h3 className="font-bold text-lg mb-6 text-accent-teal">Social Media</h3>
             <ul className="space-y-3 text-sm text-gray-400">
               <li><a href="https://youtube.com/@skillmattersinstitute?si=cgk3sXjFHu9Cl5UH" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-2 justify-center md:justify-start"><Youtube size={18}/> YouTube Channel</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 justify-center md:justify-start"><Facebook size={18}/> Facebook</a></li>
               <li><a href="#" className="hover:text-pink-400 transition-colors flex items-center gap-2 justify-center md:justify-start"><Video size={18}/> TikTok</a></li>
             </ul>
          </div>

          <div className="text-center md:text-left col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-accent-teal">Quick Contacts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-center gap-3 text-gray-400">
                  <Smartphone size={18} className="text-accent-teal" />
                  <span className="text-sm">+237 6XX XXX XXX</span>
               </div>
               <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} className="text-accent-teal" />
                  <span className="text-sm">contact@skillmatters.cm</span>
               </div>
               <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} className="text-accent-teal" />
                  <span className="text-sm">Yaoundé, Cameroon</span>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Skills Matters Institute. All rights reserved.</p>
          <p className="italic text-accent-teal/80">"Seul Excellence fait la difference"</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Layout
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-light text-slate-800 font-sans selection:bg-accent-teal selection:text-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;