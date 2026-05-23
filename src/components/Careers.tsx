import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PARTNERS } from "../data";
import { Briefcase, Building, CheckCircle2, Award, ExternalLink, ArrowRight } from "lucide-react";

interface CareersProps {
  language: "en" | "de";
  onApply: () => void;
}

export default function Careers({ language, onApply }: CareersProps) {
  const isEn = language === "en";
  const [partnerFilter, setPartnerFilter] = useState<string>("All");
  const [interestSubmitted, setInterestSubmitted] = useState(false);

  const partnersList = PARTNERS;
  const filterOptions = ["All", ...partnersList.map(p => p.name)];

  const handleInterestSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInterestSubmitted(true);
    setTimeout(() => {
      setInterestSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-brand-blue-dark relative overflow-hidden text-left border-t border-slate-900" id="careers">
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-brand-blue-glow/10 rounded-full filter blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
            {isEn ? "STUTTGART DUAL PARTNERSHIP GRID" : "DUALES PARTNER-NETZWERK STUTTGART"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            {isEn ? "Career & Industry Partnerships" : "Karriere & Industrie-Kooperationen"}
          </h2>
          <p className="text-slate-350 font-light mt-3 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? "Access elite internships and recruitment pipelines with top German engineering giants. Syncing your thesis directly with corporate research demands."
              : "Nutzen Sie erstklassige Praktika und Direkteinstiege bei führenden deutschen Industrie-Riesen. Verknüpfen Sie Ihre Bachelorarbeit direkt mit realen Projekten."
            }
          </p>
        </div>

        {/* Brand logo grid row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-20">
          {PARTNERS.map((part) => (
            <div 
              key={part.name}
              className="p-6 bg-brand-blue-medium hover:bg-brand-blue-medium/80 border border-slate-800 rounded-xl flex flex-col justify-center items-center text-center group transition-all"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{part.logo}</span>
              <span className="text-sm font-sans font-bold text-white mt-2 block tracking-wider">{part.name}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">{part.industry}</span>
            </div>
          ))}
        </div>

        {/* Dual Column Layout: Careers & Internship board / Interest Form */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LHS: Live Internships board */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <h3 className="text-md font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-brand-gold" />
                <span>{isEn ? "Exclusive Live Internships" : "Exklusive Praktikumsangebote"}</span>
              </h3>

              {/* Filtering */}
              <select
                id="partner-filter"
                value={partnerFilter}
                onChange={(e) => setPartnerFilter(e.target.value)}
                className="p-1.5 rounded bg-brand-blue-medium text-white text-xs border border-slate-700 outline-none"
              >
                {filterOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-4">
              {partnersList
                .filter(p => partnerFilter === "All" || p.name === partnerFilter)
                .map((part) => (
                  <div 
                    key={part.name}
                    className="p-6 bg-brand-blue-medium/50 hover:bg-brand-blue-medium border border-slate-800/80 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-brand-blue-dark rounded text-3xl flex-shrink-0">
                        {part.logo}
                      </div>
                      <div className="text-left space-y-1">
                        <span className="text-[10px] text-brand-gold font-mono uppercase bg-slate-900 px-2 py-0.5 rounded">
                          {part.name}
                        </span>
                        <p className="text-sm font-sans font-bold text-slate-100 pt-1">
                          {isEn ? part.internships[0] : part.internshipsDe[0]}
                        </p>
                        <p className="text-xs text-slate-350 font-light font-mono pr-2">
                          {isEn ? `Major Sector: ${part.industry}` : `Sektor: ${part.industry}`}
                        </p>
                      </div>
                    </div>

                    <button
                      id={`apply-int-${part.name}`}
                      onClick={onApply}
                      className="px-4 py-2 text-[10px] font-mono font-bold text-white bg-brand-blue-light hover:bg-brand-blue-light/85 border border-slate-705 rounded-lg flex items-center gap-1 hover:border-brand-gold/30 cursor-pointer"
                    >
                      <span>{isEn ? "DETAILS & SEND SYLLABUS" : "INFOS & SYLLABUS SENDEN"}</span>
                      <ExternalLink className="w-3 h-3 text-brand-gold" />
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* RHS: Interactive Career placement Stats and Signup form */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 bg-brand-blue-medium border border-slate-800 rounded-xl space-y-4">
              <h4 className="text-xs font-mono text-brand-gold uppercase tracking-wider flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>GIAET WORKPLACE RECORDS</span>
              </h4>

              <div className="pt-2 divide-y divide-slate-850 space-y-3">
                <div className="pt-1 flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-light">{isEn ? "Average Graduate Salary" : "Ø Absolventengehalt"}</span>
                  <span className="text-white font-mono font-bold">€64,200 / Year</span>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-light">{isEn ? "Stuttgart Placement Rate" : "Übernahme-Quote Stuttgart"}</span>
                  <span className="text-white font-mono font-bold">92%</span>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-light">{isEn ? "Employed in first 6 months" : "Anstellung binnen 6 Monaten"}</span>
                  <span className="text-white font-mono font-bold">95%</span>
                </div>
              </div>
            </div>

            {/* Live Recruiting Interest Tracker form */}
            <form onSubmit={handleInterestSubmit} className="p-6 bg-brand-blue-medium border border-slate-800 rounded-xl space-y-4">
              <h3 className="text-sm font-sans font-bold text-white uppercase flex items-center gap-1.5">
                <Building className="w-4 h-4 text-brand-gold" />
                <span>{isEn ? "Direct Placement Registry" : "Direkt-Zulassungsanfrage"}</span>
              </h3>
              <p className="text-[11px] text-slate-300 font-light leading-snug">
                {isEn ? "Looking to register your career preferences? Tick interests to let our Stuttgart partner desk matching recruiters contact you." : "Möchten Sie sich in die Datenbank eintragen lassen? Markieren Sie Sektoren zur Rekrutierungs-Vermittlung."}
              </p>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-white p-1 select-none">
                  <input type="checkbox" className="accent-brand-gold" defaultChecked />
                  <span>Automotive Mechanics</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-white p-1 select-none">
                  <input type="checkbox" className="accent-brand-gold" />
                  <span>PLCs & Factory Cobots</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-white p-1 select-none">
                  <input type="checkbox" className="accent-brand-gold" defaultChecked />
                  <span>Machine Learning Architectures</span>
                </label>
              </div>

              <div className="pt-1">
                <AnimatePresence mode="wait">
                  {!interestSubmitted ? (
                    <button
                      id="optin-placement-btn"
                      type="submit"
                      className="w-full py-2.5 bg-brand-blue-light hover:bg-brand-blue-light/80 text-[10px] font-mono font-bold text-white rounded border border-slate-700/80 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>{isEn ? "REGISTER MATCHING DESK" : "IN VERMITTLUNG EINTRAGEN"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-2.5 bg-slate-900 border border-brand-gold/30 rounded text-center text-[10px] text-brand-gold font-mono flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isEn ? "PREFERENCES LOGGED!" : "BEWERBERPROFIL AKTIV!"}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
