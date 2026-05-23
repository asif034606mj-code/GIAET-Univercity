import { motion } from "motion/react";
import { STATS, MOTTO_EN, MOTTO_DE } from "../data";
import { GraduationCap, Award, Compass, HeartHandshake } from "lucide-react";

interface AboutProps {
  language: "en" | "de";
}

export default function About({ language }: AboutProps) {
  const isEn = language === "en";

  return (
    <section className="py-24 bg-brand-blue-dark relative overflow-hidden" id="about">
      {/* Absolute light accent */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-blue-glow/20 rounded-full filter blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Academic Motto Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <span className="text-xs text-brand-gold font-mono tracking-widest block mb-3 uppercase">
            {isEn ? "The Academic Motto" : "Das Akademische Motto"}
          </span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight italic">
            "{isEn ? MOTTO_EN : MOTTO_DE}"
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Mission & Vision Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-xl bg-brand-blue-medium border border-slate-800 flex gap-5 items-start text-left"
          >
            <div className="p-3.5 rounded-lg bg-brand-blue-light text-brand-gold flex-shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-medium text-white mb-3">
                {isEn ? "Our Academic Mission" : "Unsere Akademische Mission"}
              </h3>
              <p className="text-slate-300 font-light leading-relaxed text-sm">
                {isEn 
                  ? "To deliver highly innovative, accessible, and globally recognized German engineering education through technology-driven online and hybrid learning models, empowering the next cohort of technical masterminds worldwide."
                  : "Bereitstellung von höchst innovativer, anerkannter deutscher Ingenieursausbildung durch technologiegestützte Online- und Hybrid-Lernmodelle, um die nächste Generation technischer Vordenker weltweit zu befähigen."
                }
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-xl bg-brand-blue-medium border border-slate-800 flex gap-5 items-start text-left"
          >
            <div className="p-3.5 rounded-lg bg-brand-blue-light text-brand-gold flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-medium text-white mb-3">
                {isEn ? "Our Global Vision" : "Unsere Globale Vision"}
              </h3>
              <p className="text-slate-300 font-light leading-relaxed text-sm">
                {isEn 
                  ? "To become Europe's leading accredited international hybrid engineering university, recognized globally for blending industrial simulations, digital twin laboratories, and direct German firm integrations."
                  : "Eine der führenden akkreditierten internationalen Hybrid-Ingenieurhochschulen in Europa zu werden, die weltweit für die Verbindung industrieller Simulationen, digitaler Laboratorien und direkter Anbindung an deutsche Unternehmen bekannt ist."
                }
              </p>
            </div>
          </motion.div>
          
        </div>

        {/* Dynamic Statistics Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 pt-12 border-t border-slate-800/80"
        >
          {STATS.map((stat, idx) => (
            <div 
              key={stat.id}
              className="p-6 rounded-xl bg-brand-blue-medium/50 border border-slate-800/60 flex flex-col justify-between text-left hover:border-brand-gold/20 transition-colors"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-display font-bold text-white block tracking-tight">
                  {stat.count}
                </span>
                <span className="text-sm font-sans font-medium text-brand-gold mt-2 block leading-snug">
                  {isEn ? stat.label : stat.labelDe}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-light mt-2 italic font-mono">
                {isEn ? stat.subtitle : stat.subtitleDe}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Stuttgart Heritage Promo */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue-medium to-brand-blue-light/50 p-8 sm:p-12 rounded-2xl border border-slate-800 text-left lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h4 className="text-lg font-mono text-brand-gold tracking-wide uppercase">
              {isEn ? "Premium German Heritage" : "Premium Deutsches Erbe"}
            </h4>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {isEn ? "Engineered in Stuttgart, Germany" : "Entwickelt in Stuttgart, Deutschland"}
            </h3>
            <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              {isEn 
                ? "Located in Stuttgart, Baden-Württemberg — a premium capital of global machine design, automotive patents, and industrial sensor innovation. GIAET builds upon this regional history to bring German-standard rigorous technical study directly to you, anywhere in the world."
                : "Ansässig in Stuttgart, Baden-Württemberg — der Wiege des weltweiten Maschinenbaus, Automobils und Sensorik-Erfindungsgeistes. Das GIAET baut auf diesem Vermächtnis auf, um Ihnen die anspruchsvolle deutsche Ingenieurausbildung direkt nach Hause zu bringen."
              }
            </p>
          </div>
          <div className="lg:col-span-4 mt-8 lg:mt-0 flex justify-center gap-6">
            <div className="p-4 rounded-xl bg-brand-blue-dark border border-slate-700/50 flex flex-col items-center">
              <GraduationCap className="w-8 h-8 text-brand-gold mb-2" />
              <span className="text-xs text-slate-400 text-center font-mono">EU accredited BSc</span>
            </div>
            <div className="p-4 rounded-xl bg-brand-blue-dark border border-slate-700/50 flex flex-col items-center">
              <HeartHandshake className="w-8 h-8 text-brand-gold mb-2" />
              <span className="text-xs text-slate-400 text-center font-mono">Partners like Bosch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
