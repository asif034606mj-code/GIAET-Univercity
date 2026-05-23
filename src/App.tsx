import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Globe, GraduationCap, ChevronDown, 
  MapPin, Send, HelpCircle, Code, ShieldCheck 
} from "lucide-react";

// Sub-components import
import Hero from "./components/Hero";
import About from "./components/About";
import FacultiesAndPrograms from "./components/FacultiesAndPrograms";
import Admissions from "./components/Admissions";
import InternationalGuide from "./components/InternationalGuide";
import VirtualLMS from "./components/VirtualLMS";
import Research from "./components/Research";
import Careers from "./components/Careers";
import CampusTour from "./components/CampusTour";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  // Locale State
  const [language, setLanguage] = useState<"en" | "de">("en");
  
  // Mobile menu expand toggler
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isEn = language === "en";

  // Navigation list targets
  const navLinksEn = [
    { label: "Home", target: "home" },
    { label: "About GIAET", target: "about" },
    { label: "Online Degrees", target: "programs-root" },
    { label: "Admissions", target: "admissions" },
    { label: "LMS Portal", target: "lms-section" },
    { label: "Research", target: "research" },
    { label: "Careers", target: "careers" },
    { label: "Campus Tour", target: "tour" }
  ];

  const navLinksDe = [
    { label: "Startseite", target: "home" },
    { label: "Über GIAET", target: "about" },
    { label: "Studiengänge", target: "programs-root" },
    { label: "Zulassung", target: "admissions" },
    { label: "LMS Portal", target: "lms-section" },
    { label: "Forschung", target: "research" },
    { label: "Karriere", target: "careers" },
    { label: "Campustour", target: "tour" }
  ];

  const activeLinks = isEn ? navLinksEn : navLinksDe;

  const navigateToSection = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "de" : "en"));
  };

  return (
    <div className="min-h-screen bg-brand-blue-dark text-slate-100 flex flex-col font-sans" id="home">
      
      {/* Premium Sticky Navigation Menu */}
      <header className="sticky top-0 z-50 glass-premium border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Brand Brandings */}
          <button 
            id="nav-logo-btn"
            onClick={() => navigateToSection("home")}
            className="flex items-center gap-2.5 text-left bg-transparent border-none p-0 cursor-pointer"
          >
            <div className="w-10 h-10 rounded bg-gradient-to-br from-brand-gold to-cyan-500 flex items-center justify-center shadow-glow">
              <GraduationCap className="w-6 h-6 text-brand-blue-dark" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-display font-black text-white tracking-widest block">GIAET</span>
              <span className="text-[9px] text-brand-gold font-mono tracking-wider block leading-none">Global Institute</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {activeLinks.map((link) => (
              <button
                key={link.target}
                id={`nav-link-${link.target}`}
                onClick={() => navigateToSection(link.target)}
                className="text-xs font-mono font-bold text-slate-300 hover:text-brand-gold transition-colors tracking-wide cursor-pointer uppercase py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Triggers in navbar (Language, Apply) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switch button */}
            <button
              id="lang-switch-btn"
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded bg-brand-blue-medium border border-slate-700/80 text-[10px] font-mono font-bold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-brand-gold" />
              <span>{isEn ? "DEUTSCH" : "ENGLISH"}</span>
            </button>

            {/* Apply Quick trigger */}
            <button
              id="quick-apply-btn"
              onClick={() => navigateToSection("admissions")}
              className="px-4 py-2 bg-gradient-to-r from-brand-gold to-cyan-500 text-brand-blue-dark rounded-lg text-xs font-mono font-bold hover:scale-[1.03] shadow-glow transition-transform cursor-pointer"
            >
              {isEn ? "APPLY NOW" : "JETZT BEWERBEN"}
            </button>
          </div>

          {/* Mobile Hamburguer Toggler */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Language selector toggles */}
            <button
              id="lang-switch-mobile"
              onClick={toggleLanguage}
              className="p-1 px-2.5 rounded bg-brand-blue-medium text-[10px] font-mono font-bold text-brand-gold flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 0.98 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-premium border-t border-slate-800"
            >
              <div className="p-6 space-y-4 flex flex-col items-left text-left">
                {activeLinks.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => navigateToSection(link.target)}
                    className="w-full text-sm font-mono font-bold text-slate-300 hover:text-brand-gold transition-colors text-left uppercase py-1"
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                  <button
                    onClick={() => navigateToSection("admissions")}
                    className="w-full py-3 bg-gradient-to-r from-brand-gold to-cyan-400 text-brand-blue-dark text-center font-mono font-bold text-xs rounded-lg"
                  >
                    {isEn ? "SECURE REGISTER TRACK" : "ANMELDUNG STARTEN"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Hero Header Sector */}
      <Hero language={language} onNavigate={navigateToSection} />

      {/* About GIAET Section */}
      <About language={language} />

      {/* Faculties & BSc Curriculum Section */}
      <FacultiesAndPrograms language={language} onApply={() => navigateToSection("admissions")} />

      {/* admissions & Live Enrollment Forms System */}
      <Admissions language={language} />

      {/* Virtual LMS & Interactive Physics Labs Simulators */}
      <VirtualLMS language={language} />

      {/* Germany Study Guide and visas FAQ accordions */}
      <InternationalGuide language={language} />

      {/* Stuttgart Research Domains and initiative papers */}
      <Research language={language} />

      {/* Dual partners grid & exclusive placement recruitment registrations */}
      <Careers language={language} onApply={() => navigateToSection("admissions")} />

      {/* Success Stories testimonial sliders showcase */}
      <Testimonials language={language} />

      {/* Interactive satellite hotspots canvas tour */}
      <CampusTour language={language} />

      {/* Main unified Footer */}
      <Footer language={language} />

    </div>
  );
}
