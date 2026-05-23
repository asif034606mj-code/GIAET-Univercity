import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FACULTIES, DEGREE_PROGRAMS } from "../data";
import { 
  Cpu, Clock, Award, Briefcase, ArrowLeft, BookOpen, 
  Play, DollarSign, Users, Sparkles, GraduationCap 
} from "lucide-react";

interface FacultiesAndProgramsProps {
  language: "en" | "de";
  onApply: () => void;
  activeFacultyId?: string;
}

export default function FacultiesAndPrograms({ language, onApply, activeFacultyId }: FacultiesAndProgramsProps) {
  const isEn = language === "en";
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  // If activeFacultyId is passed through, find the corresponding program
  const handleFacultyClick = (facultyId: string) => {
    const matchingProgram = DEGREE_PROGRAMS.find(p => p.facultyId === facultyId);
    if (matchingProgram) {
      setSelectedProgramId(matchingProgram.id);
      // Smooth scroll to element
      document.getElementById("programs-root")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectedProgram = DEGREE_PROGRAMS.find(p => p.id === selectedProgramId);

  return (
    <div className="py-24 bg-brand-blue-medium border-t border-slate-900" id="programs-root">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic State: If a degree program is selected, show detail view */}
        <AnimatePresence mode="wait">
          {!selectedProgramId ? (
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
                  {isEn ? "EUROPEAN ACCREDITED SPECIALTIES" : "EUROPÄISCH AKKREDITIERTE FACHBEREICHE"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                  {isEn ? "Our Academic Fields & Degree Programs" : "Unsere Fachbereiche & Studiengänge"}
                </h2>
                <p className="text-slate-300 font-light mt-4 text-sm sm:text-base leading-relaxed">
                  {isEn 
                    ? "Explore GIAET's six specialized engineering schools. Each offers a pristine, accredited Bachelor of Science (BSc) degree coupled with dynamic virtual lab modules designed for global remote execution."
                    : "Entdecken Sie die sechs spezialisierten Ingenieurfakultäten des GIAET. Jede Fakultät bietet einen akkreditierten Bachelor of Science (B.Sc.) kombiniert mit praxisnahen virtuellen Laborübungen."
                  }
                </p>
              </div>

              {/* Animated Faculty Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {FACULTIES.map((faculty, idx) => (
                  <motion.div
                    key={faculty.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col h-full rounded-2xl bg-brand-blue-dark border border-slate-800 overflow-hidden shadow-lg group"
                  >
                    {/* Cover image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10" />
                      <img 
                        src={faculty.cardImage} 
                        alt={isEn ? faculty.name : faculty.nameDe} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-brand-blue-dark/80 text-[10px] font-mono font-bold text-brand-gold border border-brand-gold/20 z-20">
                        {faculty.short}
                      </div>
                    </div>

                    {/* Content body */}
                    <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-display font-medium text-white group-hover:text-brand-gold transition-colors">
                          {isEn ? faculty.name : faculty.nameDe}
                        </h3>
                        <p className="text-xs text-slate-300 font-light line-clamp-3 leading-relaxed">
                          {isEn ? faculty.overview : faculty.overviewDe}
                        </p>
                      </div>

                      <div className="space-y-2 border-t border-slate-800 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <Clock className="w-4 h-4 text-brand-gold" />
                          <span>{isEn ? faculty.durationEn : faculty.durationDe}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <Award className="w-4 h-4 text-brand-gold" />
                          <span>{faculty.credits} Point System</span>
                        </div>
                      </div>

                      {/* Career Tracks list */}
                      <div className="pt-2">
                        <span className="text-[10px] text-slate-400 font-mono tracking-wider block mb-1 uppercase">
                          {isEn ? "Career Horizons" : "Berufliche Perspektiven"}:
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {(isEn ? faculty.careerPaths : faculty.careerPathsDe).slice(0, 2).map((path, pIdx) => (
                            <span 
                              key={pIdx} 
                              className="px-2 py-0.5 rounded bg-brand-blue-light/50 border border-slate-800 text-[10px] text-slate-300 font-mono"
                            >
                              {path}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Learn more btn */}
                      <button
                        onClick={() => handleFacultyClick(faculty.id)}
                        className="w-full py-2.5 px-4 text-xs font-mono font-medium rounded-lg bg-brand-blue-light hover:bg-brand-blue-light/80 text-white border border-slate-700/50 hover:border-brand-gold/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isEn ? "LEAN MORE & CURRICULUM" : "DETAILS & STUDIENPLAN"}
                        <Play className="w-3 h-3 text-brand-gold" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Selected Program Detailed Sub-Page */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedProgramId(null)}
                className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-brand-gold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? "Back to Faculties" : "Zurück zur Fakultätsauswahl"}</span>
              </button>

              {/* Title Header with Hero */}
              <div className="rounded-2xl bg-brand-blue-dark border border-slate-800 p-8 sm:p-12 relative overflow-hidden text-left">
                <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial-gradient from-brand-gold/10 to-transparent pointer-events-none" />
                
                <div className="max-w-4xl space-y-6">
                  <span className="px-3 py-1 rounded bg-brand-blue-light border border-slate-700 text-xs font-mono text-brand-gold">
                    {isEn ? "ACCREDITED BSC DEGREE" : "AKKREDITIERTER B.SC. STUDIENGANG"}
                  </span>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                    {isEn ? selectedProgram.title : selectedProgram.titleDe}
                  </h1>

                  <p className="text-slate-300 font-light text-base leading-relaxed">
                    {isEn ? selectedProgram.description : selectedProgram.descriptionDe}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-850">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-mono block uppercase">{isEn ? "Duration" : "Regelstudienzeit"}</span>
                      <span className="text-white text-sm font-display">{isEn ? selectedProgram.duration : selectedProgram.durationDe}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-mono block uppercase">{isEn ? "ECTS System" : "Punkte-System"}</span>
                      <span className="text-white text-sm font-display">{selectedProgram.credits}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-mono block uppercase">{isEn ? "Tuition Fee" : "Studiengebühren"}</span>
                      <span className="text-brand-gold text-sm font-display font-medium">{isEn ? selectedProgram.tuition : selectedProgram.tuitionDe}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-mono block uppercase">{isEn ? "Online Lab Integration" : "Online Lab-Modul"}</span>
                      <span className="text-cyan-400 text-xs font-mono">{selectedProgram.virtualLabType}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two-Column Detail View */}
              <div className="grid lg:grid-cols-12 gap-8 items-start text-left">
                
                {/* Left Column: Curriculum & Syllabus */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-800 space-y-6">
                    <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-brand-gold" />
                      <span>{isEn ? "Syllabus & Core Course Modules" : "Studienplan & Kernmodule"}</span>
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {isEn 
                        ? "The curriculum corresponds directly to the European Qualifications Framework (EQF Level 6) standards. Core modules from semesters 1 and 2 explore physics-focused engineering foundations:"
                        : "Der Lehrplan entspricht den Richtlinien des Nationalen Qualifikationsrahmens (DQR Stufe 6). Die Kernmodule des ersten Studienjahres legen ein solides technologisches Fundament:"
                      }
                    </p>

                    <div className="space-y-6">
                      {selectedProgram.semesters.map((sem) => (
                        <div key={sem.number} className="space-y-3">
                          <h4 className="text-sm font-mono text-brand-gold font-bold flex items-center gap-2 border-b border-slate-800 pb-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>{isEn ? `Semester ${sem.number}` : `Semester ${sem.number}`}</span>
                          </h4>
                          <div className="grid gap-2">
                            {sem.courses.map((course) => (
                              <div 
                                key={course.code}
                                className="p-3 bg-brand-blue-medium/50 rounded border border-slate-850 flex justify-between items-center hover:bg-brand-blue-medium transition-colors"
                              >
                                <div>
                                  <span className="text-[10px] text-slate-400 font-mono mr-2.5">[{course.code}]</span>
                                  <span className="text-sm text-slate-100 font-sans font-medium">
                                    {isEn ? course.name : course.nameDe}
                                  </span>
                                </div>
                                <span className="text-xs text-brand-gold font-mono">{course.credits} ECTS</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Virtual Laboratories System Card */}
                  <div className="p-6 rounded-xl bg-gradient-to-r from-brand-blue-dark to-brand-blue-medium border border-slate-800 space-y-4">
                    <div className="inline-flex gap-2 items-center px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/30 text-xs text-brand-gold font-mono">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      <span>GIAET VIRTUAL LAB ENGINE</span>
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      {isEn ? "Simulation-Driven Practical Training" : "Simulationsgestützte Praxisausbildung"}
                    </h3>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {isEn 
                        ? `To offset traditional on-campus mechanical workshops, students log in to the GIAET interactive workbench. This program utilizes the custom ${selectedProgram.virtualLabType} allowing simulated mathematical experiments directly in your web workspace.`
                        : `Als vollwertiger Ersatz für klassische Werkstattübungen nutzen Studierende das GIAET-Online-Portal. Dieses Programm integriert den interaktiven Modulpool: ${selectedProgram.virtualLabType} für virtuelle Versuche direkt im Browser.`
                      }
                    </p>
                  </div>
                </div>

                {/* Right Column: Faculty & Enrollment Sidebox */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Tuition side card */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-brand-blue-medium to-slate-900 border border-slate-700/60 text-center space-y-4">
                    <DollarSign className="w-8 h-8 text-brand-gold mx-auto" />
                    <h4 className="text-white font-display font-medium text-md uppercase tracking-wider">
                      {isEn ? "ESTIMATED TUITION COST" : "STUDIENGEBÜHREN-ÜBERSICHT"}
                    </h4>
                    <p className="text-3xl font-display font-bold text-white tracking-tight">
                      {isEn ? selectedProgram.tuition : selectedProgram.tuitionDe}
                    </p>
                    <p className="text-xs text-slate-300 font-light">
                      {isEn 
                        ? "Interest-free monthly installment modes, scholarships support, and Stuttgart-based firm sponsorship plans available."
                        : "Zinsfreie monatliche Ratenzahlungs-Modelle, Stipendienoptionen oder direkte Industrie-Sponsorenschaften möglich."
                      }
                    </p>
                    <button
                      onClick={onApply}
                      className="w-full py-3 px-4 font-mono font-bold text-xs rounded-lg bg-gradient-to-r from-brand-gold to-cyan-400 hover:scale-[1.02] transition-transform text-brand-blue-dark cursor-pointer uppercase shadow-glow"
                    >
                      {isEn ? "Start Application" : "Bewerbung starten"}
                    </button>
                  </div>

                  {/* Career Paths Box */}
                  <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-800 space-y-4">
                    <h4 className="text-xs font-mono text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      <span>{isEn ? "Target Career Horizons" : "Berufliche Zielfelder"}</span>
                    </h4>
                    <ul className="space-y-2 text-xs font-mono text-slate-300">
                      {(isEn ? selectedProgram.careerOutcomes : selectedProgram.careerOutcomesDe).map((out, oIdx) => (
                        <li key={oIdx} className="flex gap-2 items-start">
                          <span className="text-brand-gold">•</span>
                          <span className="leading-relaxed">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Program Faculty Box */}
                  <div className="p-6 rounded-xl bg-brand-blue-dark border border-slate-800 space-y-4">
                    <h4 className="text-xs font-mono text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>{isEn ? "Core Faculty Leads" : "Lehrstuhlinhaber & Dozierende"}</span>
                    </h4>

                    <div className="space-y-4">
                      {selectedProgram.facultyMembers.map((fac, fIdx) => (
                        <div key={fIdx} className="flex gap-3 items-center">
                          <img 
                            src={fac.avatar} 
                            alt={fac.name} 
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-full object-cover border border-slate-700" 
                          />
                          <div className="text-left leading-tight">
                            <p className="text-xs font-sans font-bold text-white">{fac.name}</p>
                            <p className="text-[10px] text-brand-gold font-mono mt-0.5">{isEn ? fac.role : fac.roleDe}</p>
                            <p className="text-[9px] text-slate-400 font-sans mt-0.5">{fac.education}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
