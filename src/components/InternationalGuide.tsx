import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { STUDY_GUIDE_EN, STUDY_GUIDE_DE, FAQ_EN, FAQ_DE } from "../data";
import { ChevronDown, Globe, HelpCircle, GraduationCap, MapPin, Compass } from "lucide-react";

interface InternationalGuideProps {
  language: "en" | "de";
}

export default function InternationalGuide({ language }: InternationalGuideProps) {
  const isEn = language === "en";
  const guide = isEn ? STUDY_GUIDE_EN : STUDY_GUIDE_DE;
  const faqList = isEn ? FAQ_EN : FAQ_DE;

  // Track expanded FAQ index
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaqIdx(activeFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-brand-blue-medium border-t border-slate-900 text-left" id="international">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
            {isEn ? "STUTTGART DOCKING OFFICE" : "STUTTGARTER AUSLANDSAMT"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            {isEn ? "International Students & German Life" : "Internationale Studierende & Deutsches Leben"}
          </h2>
          <p className="text-slate-350 font-light mt-3 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? "Studying in Stuttgart has never been so seamless. Obtain a secure European engineering path with local support centers."
              : "Studieren in Stuttgart war noch nie so unkompliziert. Erlangen Sie einen sicheren EU-Ingenieurabschluss mit lokaler Betreuung."
            }
          </p>
        </div>

        {/* Stuttgart Study Guide Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left Column: Interactive Map Spot / Drone Mockup */}
          <div className="relative p-2 rounded-2xl bg-brand-blue-dark border border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80"
              alt="Stuttgart Baden-Württemberg Industry Hub GIAET"
              referrerPolicy="no-referrer"
              className="w-full h-[380px] object-cover rounded-xl"
            />
            {/* Ambient hot spot */}
            <div className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-brand-gold animate-ping" />
            
            <div className="absolute top-1/3 left-1/2 -mt-1 -ml-1 w-2.5 h-2.5 rounded-full bg-brand-gold shadow-glow" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-premium border border-white/10 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <div className="text-left text-xs leading-tight">
                <p className="font-bold text-white">Innovation Engineering Campus</p>
                <p className="text-slate-300 font-light mt-0.5">Industriestraße 145, 70565 Stuttgart, Germany</p>
              </div>
            </div>
          </div>

          {/* Right Column: Stuttgart Info Sections */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-white">
              {guide.title}
            </h3>
            <p className="text-sm font-mono text-brand-gold">
              {guide.sub}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {guide.sections.map((sect, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-gold" />
                    <span>{sect.name}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {sect.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FAQ - Frequently Asked Questions Accordion Grid */}
        <div className="grid lg:grid-cols-12 gap-12 py-16 border-t border-slate-800/85">
          
          {/* FAQ LHS Prompt Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-3 bg-brand-blue-dark border border-slate-800 rounded-lg inline-block text-brand-gold">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-medium text-white">
              {isEn ? "FAQ & Guidance Support" : "Häufig gestellte Fragen (FAQ)"}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {isEn 
                ? "Got reservations regarding admissions criteria, German visa cycles, or online examinations? Here are immediate briefs from GIAET International Student Support Services."
                : "Haben Sie Fragen zu Zulassungskriterien, Visa-Zyklen oder Online-Prüfungen? Hier finden Sie schnelle Antworten direkt vom International Support Office."
              }
            </p>
            <div className="pt-2">
              <a href="#contact" className="text-xs font-mono font-bold text-brand-gold hover:underline flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                <span>{isEn ? "Contact Stuttgart International Office" : "Auslandsamt Stuttgart kontaktieren"}</span>
              </a>
            </div>
          </div>

          {/* FAQ Accordion list */}
          <div className="lg:col-span-8 space-y-3">
            {faqList.map((faq, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-lg bg-brand-blue-dark border border-slate-800 overflow-hidden"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex justify-between items-center bg-transparent hover:bg-slate-900/40 cursor-pointer transition-colors"
                  >
                    <span className="text-sm font-sans font-medium text-slate-100 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-5 pt-0 border-t border-slate-850 text-xs text-slate-300 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
