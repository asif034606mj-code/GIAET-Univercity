import { motion } from "motion/react";
import { ArrowRight, Globe, Shield, Cpu, BookOpen } from "lucide-react";

interface HeroProps {
  language: "en" | "de";
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ language, onNavigate }: HeroProps) {
  const isEn = language === "en";

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center bg-brand-blue-dark overflow-hidden pt-16">
      {/* Background Aesthetic Map Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80')` 
        }}
      />
      
      {/* Dynamic Animated Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-brand-blue-glow/35 rounded-full filter blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-8 items-center z-10">
        
        {/* Left Copy Panel */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-medium border border-brand-gold/20 text-brand-gold text-xs font-mono tracking-wider shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 animate-spin-slow" />
            <span>STUTTGART, GERMANY | GLOBAL HYBRID ACADEMY</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]"
          >
            {isEn ? (
              <>
                Study Engineering from <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-cyan-400">Germany</span> — Anywhere in the World
              </>
            ) : (
              <>
                Ingenieurwesen aus <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-cyan-400">Deutschland</span> studieren — Weltweit
              </>
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-md sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed"
          >
            {isEn 
              ? "International engineering education designed for future innovators and industry leaders. Combining European quality standards, cutting-edge virtual labs, and flexible online modules."
              : "Internationale Ingenieursausbildung für die Innovatoren der Zukunft. Kombination aus deutschen Qualitätsstandards, hochmodernen virtuellen Labors und flexiblen Online-Modulen."
            }
          </motion.p>

          {/* Buttons CTA Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button 
              id="hero-apply-btn"
              onClick={() => onNavigate("admissions")}
              className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-brand-gold to-cyan-500 text-brand-blue-dark font-medium font-sans hover:scale-[1.03] transition-transform shadow-glow cursor-pointer text-center"
            >
              {isEn ? "Apply Securely Now" : "Jetzt sicher bewerben"}
            </button>
            <button 
              id="hero-programs-btn"
              onClick={() => onNavigate("programs")}
              className="px-6 py-3.5 rounded-lg bg-brand-blue-medium hover:bg-brand-blue-light text-white font-medium border border-slate-700 hover:border-brand-gold/30 transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{isEn ? "Explore Programs" : "Studiengänge erkunden"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              id="hero-tour-btn"
              onClick={() => onNavigate("tour")}
              className="px-6 py-3.5 rounded-lg bg-transparent hover:bg-brand-blue-light/20 text-slate-300 hover:text-white font-medium transition-colors text-center cursor-pointer border border-slate-800"
            >
              {isEn ? "Virtual Tour" : "Virtueller Rundgang"}
            </button>
          </motion.div>

          {/* Core Credentials Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6 pt-6 border-t border-brand-blue-medium"
          >
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
              <Shield className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>{isEn ? "Accredited FIBAA & ECTS Standards" : "Akkreditiert nach FIBAA & ECTS"}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
              <Cpu className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>{isEn ? "Physics-Based Virtual Labs" : "Physikalische Online-Labore"}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
              <BookOpen className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>{isEn ? "100% Online or Hybrid Models" : "100% Online oder Hybrid"}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Engineering Tech Graphic Card */}
        <div className="hidden lg:block lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative p-2 rounded-2xl glass-premium shadow-2xl relative overflow-hidden"
          >
            {/* Tech Mesh effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-blue-dark/50" />
            
            <img 
              src="https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?auto=format&fit=crop&w=700&q=80"
              alt="GIAET Robotics Lab engineering"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover rounded-xl border border-brand-blue-light/50"
            />
            
            {/* Glass Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-premium border border-white/10 flex items-center justify-between text-left">
              <div>
                <span className="text-[10px] text-brand-gold font-mono tracking-wider block">RESEARCH NODE</span>
                <span className="text-white text-sm font-display font-bold">Stuttgart Automation Core</span>
              </div>
              <div className="px-2 py-1 rounded bg-slate-900 border border-brand-gold/30 text-xs text-brand-gold font-mono font-bold">
                GERMANY
              </div>
            </div>
          </motion.div>

          {/* Floating Aesthetic Stats Ring */}
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full border border-brand-gold/20 flex items-center justify-center bg-brand-blue-medium p-4 shadow-xl">
            <div className="text-center font-mono">
              <p className="text-brand-gold text-sm font-bold leading-none">ECTS</p>
              <p className="text-white text-xs leading-none mt-1">180</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
