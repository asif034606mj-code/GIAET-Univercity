import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Info, ArrowRight, ShieldCheck } from "lucide-react";

interface CampusTourProps {
  language: "en" | "de";
}

export default function CampusTour({ language }: CampusTourProps) {
  const isEn = language === "en";

  const hotspots = [
    { 
      id: "hotspot-mech", 
      title: "Core Robotics Lab", 
      titleDe: "Zentrales Robotik-Zentrum",
      x: 75, 
      y: 40,
      description: "Equipped with KUKA multi-axis robotic arms and tactility feed controllers for smart automation studies.",
      descriptionDe: "Ausgestattet mit KUKA-Mehrachsrobotern und taktilen Controllern für die Automatisierungsforschung."
    },
    { 
      id: "hotspot-grid", 
      title: "Clean Wind Generation Grid", 
      titleDe: "Grünes Windkraftwerk-Labor",
      x: 185, 
      y: 60,
      description: "Features simulated regional micro-grids coupled with real physical hydrogen cell storage units.",
      descriptionDe: "Simulierte urbane Smart-Grids gekoppelt mit physischen Wasserstoff-Speicherzellen."
    },
    { 
      id: "hotspot-stuttgart", 
      title: "Innovation Assembly Centre", 
      titleDe: "Innovations-Assembly-Zentrum",
      x: 125, 
      y: 130,
      description: "The primary mechanical workshop for hybrid attendees doing 2-week intensive bootcamps.",
      descriptionDe: "Die Hauptwerkstatt für Hybrid-Lernende während unserer zweiwöchigen Präsenz-Bootcamps."
    }
  ];

  // Selected hotspot state for overlay info
  const [selectedSpotId, setSelectedSpotId] = useState<string>("hotspot-mech");

  const activeSpot = hotspots.find(h => h.id === selectedSpotId);

  return (
    <section className="py-24 bg-brand-blue-medium border-t border-slate-905 text-left" id="tour">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
            {isEn ? "STUTTGART SATELLITE PLOTTER" : "CAMPUS-SATELLITENPLATTE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            {isEn ? "Virtual Campus Tour" : "Virtueller Campus-Rundgang"}
          </h2>
          <p className="text-slate-350 font-light mt-3 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? "Examine our physical Baden-Württemberg premises. Click marked hotspots on GIAET Campus Blueprint map below to view lab facilities."
              : "Erkunden Sie unsere Laborstandorte in Stuttgart. Klicken Sie auf die Markierungen der GIAET-Karte, um Campusdetails anzuzeigen."
            }
          </p>
        </div>

        {/* Outer card wrapper */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LHS Interactive Campus SVG Diagram map */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-brand-blue-dark border border-slate-800 space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-350 uppercase tracking-widest pl-1 border-l-2 border-brand-gold">
              {isEn ? "Innovation Engineering Campus Grid Blueprint" : "GIAET Campus Standortexzerpt (Karte)"}
            </h3>

            {/* Interactive map SVG */}
            <div className="relative aspect-[4/3] bg-slate-900/60 rounded-xl border border-slate-850 overflow-hidden select-none">
              
              {/* Complex blueprint styling vector paths */}
              <svg viewBox="0 0 240 180" className="w-full h-full opacity-60">
                {/* Structural grids */}
                <line x1="120" y1="0" x2="120" y2="180" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 3" />
                <line x1="0" y1="90" x2="240" y2="90" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 3" />

                {/* Simulated campus building shape contours */}
                <rect x="50" y="25" width="50" height="35" rx="4" fill="none" stroke="#334155" strokeWidth="1.5" />
                <rect x="160" y="45" width="50" height="35" rx="4" fill="none" stroke="#334155" strokeWidth="1.5" />
                <rect x="100" y="110" width="50" height="40" rx="4" fill="none" stroke="#334155" strokeWidth="1.5" />

                {/* Connecting paths */}
                <path d="M 75 60 C 100 80, 100 85, 125 110 M 125 110 C 145 80, 160 80, 185 80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
              </svg>

              {/* Dynamic Coordinate Target Markers */}
              {hotspots.map((spot) => {
                const isSelected = spot.id === selectedSpotId;
                return (
                  <button
                    key={spot.id}
                    id={`hotspot-btn-${spot.id}`}
                    onClick={() => setSelectedSpotId(spot.id)}
                    style={{ left: `${(spot.x / 240) * 100}%`, top: `${(spot.y / 180) * 100}%` }}
                    className="absolute -ml-3 -mt-3 p-1 rounded-full cursor-pointer transition-transform hover:scale-125 z-20 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  >
                    <span className="relative flex h-6 w-6">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-50"></span>
                      )}
                      <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center border text-[10px] font-bold ${
                        isSelected ? "bg-brand-gold text-brand-blue-dark border-brand-gold" : "bg-brand-blue-medium text-slate-300 border-slate-700"
                      }`}>
                        <MapPin className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* RHS Informational Panel for selected hotspot facilities */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {activeSpot && (
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="p-8 rounded-2xl bg-brand-blue-dark border border-slate-800 space-y-6 text-left flex-1"
                >
                  <div className="flex gap-3 items-center">
                    <div className="p-3 rounded bg-brand-blue-light border border-slate-800 text-brand-gold">
                      <Info className="w-5 h-5" />
                    </div>
                    <div className="leading-tight">
                      <span className="text-[10px] text-brand-gold font-mono block uppercase">LABORATORY BLUEPRINT NO. 145</span>
                      <h3 className="text-lg font-display font-medium text-white mt-1">
                        {isEn ? activeSpot.title : activeSpot.titleDe}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {isEn ? activeSpot.description : activeSpot.descriptionDe}
                  </p>

                  <div className="p-4 bg-slate-900 border border-slate-850 rounded-xl space-y-2">
                    <span className="text-[9px] text-slate-400 font-mono block uppercase tracking-wider">LAB SPECIFICATION DETAILS</span>
                    <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                      <li className="flex gap-1.5 items-center">
                        <span className="text-brand-gold">•</span>
                        <span>Gigabit Fiber Optic Backbone connection</span>
                      </li>
                      <li className="flex gap-1.5 items-center">
                        <span className="text-brand-gold">•</span>
                        <span>KUKA Tactile Multi-axis Automation nodes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-2.5 items-center text-xs text-slate-400 font-mono border-t border-slate-805/90 pt-4">
                    <ShieldCheck className="w-4.5 h-4.5 text-brand-gold" />
                    <span>Authorized hybrid student ID required for entry checks.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
