import { motion } from "motion/react";
import { RESEARCH_PROJECTS } from "../data";
import { Cpu, Wind, ShieldCheck, Microscope, Database, Lightbulb } from "lucide-react";

interface ResearchProps {
  language: "en" | "de";
}

export default function Research({ language }: ResearchProps) {
  const isEn = language === "en";

  const iconsMap = [
    <Wind className="w-5 h-5 text-brand-gold" />,
    <Cpu className="w-5 h-5 text-brand-gold" />,
    <Microscope className="w-5 h-5 text-brand-gold" />
  ];

  return (
    <section className="py-24 bg-brand-blue-medium border-t border-slate-900 text-left" id="research">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
            {isEn ? "EUROPEAN PATENTS & RESEARCH INDEX" : "EUROPEAN PATENTS & FORSCHUNGSINDEX"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            {isEn ? "Research & Innovation Center" : "Forschungs- und Innovationszentrum"}
          </h2>
          <p className="text-slate-350 font-light mt-3 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? "Exploring highly efficient Photovoltaic arrays, collaborative tactical robots, and neural controllers in our Stuttgart Science Sandbox."
              : "Erforscht hocheffiziente Photovoltaikanlagen, kollaborative Industrieroboter und neuronale Netze an unserem Stuttgarter Hauptstandort."
            }
          </p>
        </div>

        {/* 6 Grid Core Domains */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-805 space-y-3">
            <Wind className="w-6 h-6 text-brand-gold" />
            <h4 className="font-display font-medium text-white">{isEn ? "Renewable Energy Research" : "Erneuerbare Energien"}</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {isEn ? "Developing intelligent decentralized urban grids, battery cells, and solar PV integrations." : "Entwicklung dezentraler Netze, Batterie-Speicherzellen und fortschrittlicher Photovoltaikanlagen."}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-805 space-y-3">
            <Cpu className="w-6 h-6 text-brand-gold" />
            <h4 className="font-display font-medium text-white">{isEn ? "Collaborative Robotics" : "Kollaborative Robotik (Cobots)"}</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {isEn ? "Tactile responsive mechanical hand grippers learning safe physical workspace co-existence." : "Taktile mechanische Greifwerkzeuge lernen das kooperative Arbeiten mit dem menschlichen Werker."}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-805 space-y-3">
            <Microscope className="w-6 h-6 text-brand-gold" />
            <h4 className="font-display font-medium text-white">{isEn ? "Industrial AI Pipelines" : "Künstliche Intelligenz in der Industrie"}</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {isEn ? "Employing deep reinforcement networks to optimize PLC codes and prevent industrial assemblies failures." : "Optimierung komplexer Fertigungslinien und Steuerungen mittels tiefer Bestärkungslernverfahren."}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-805 space-y-3">
            <ShieldCheck className="w-6 h-6 text-brand-gold" />
            <h4 className="font-display font-medium text-white">{isEn ? "Smart Automation Systems" : "Intelligente Automatisierung"}</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {isEn ? "Cyber-physical industrial networks syncing material tracking and resource planning in real-time." : "Steuerung cyber-physischer Netzwerke für optimiertes tracking von Fertigungsstationen."}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-805 space-y-3">
            <Database className="w-6 h-6 text-brand-gold" />
            <h4 className="font-display font-medium text-white">{isEn ? "Sustainable Engineering" : "Nachhaltige Werkstoffe & Verfahren"}</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {isEn ? "Simulating material compositions structural lifetimes to build non-ferrous recyclable components." : "Erprobung recyclingfähiger Nichteisen-Struktursubstanzen mit extrem verlängertem Lebensdauer-Zyklen."}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-805 space-y-3">
            <Lightbulb className="w-6 h-6 text-brand-gold" />
            <h4 className="font-display font-medium text-white">{isEn ? "Industrial Sensors Technology" : "Sensortechnologien (Industrie 4.0)"}</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {isEn ? "Designing micro-electro-mechanical sensor systems (MEMS) mapping atmospheric conditions." : "Entwicklung mikrosystemtechnischer Sensorglieder zur vollautomatisierten thermischen Überwachung."}
            </p>
          </div>

        </div>

        {/* Highlight Peer-Reviewed GIAET Projects */}
        <div className="space-y-6">
          <h3 className="text-lg font-mono font-bold text-slate-250 uppercase tracking-widest pl-1 border-l-2 border-brand-gold">
            {isEn ? "Major Science Initiatives & Patents" : "Aktive Forschungsprojekte"}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {RESEARCH_PROJECTS.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-brand-blue-dark border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-brand-gold font-mono uppercase bg-slate-900 px-2 py-0.5 rounded border border-brand-gold/20">
                      {proj.area}
                    </span>
                    {iconsMap[idx] || <Wind className="w-4 h-4 text-brand-gold" />}
                  </div>
                  <h4 className="text-sm font-sans font-bold text-white pr-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-350 leading-relaxed font-light">
                    {isEn ? proj.desc : proj.descDe}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-850 mt-4">
                  <span className="text-[9px] text-slate-400 font-mono block">PROJECT LEAD</span>
                  <p className="text-[11px] text-brand-gold font-sans font-medium mt-0.5">{proj.lead}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
