import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, Terminal, Sparkles, Send, Play, 
  HelpCircle, UserCheck, BarChart3, GraduationCap,
  Sliders, MessageSquare, Database, Cpu 
} from "lucide-react";

interface VirtualLMSProps {
  language: "en" | "de";
}

export default function VirtualLMS({ language }: VirtualLMSProps) {
  const isEn = language === "en";

  // LMS active section tabs: 'dashboard' | 'labs' | 'assistant' | 'library'
  const [activeTab, setActiveTab] = useState<"dashboard" | "labs" | "assistant" | "library">("dashboard");

  // State: Selected Engineering Track for Simulator
  const [selectedLabTrack, setSelectedLabTrack] = useState<"thermo" | "robotics" | "ai">("thermo");

  // Simulator 1: Thermodynamics
  const [tempHot, setTempHot] = useState(600); // Kelvin
  const [tempCold, setTempCold] = useState(300); // Kelvin
  const [carnotEff, setCarnotEff] = useState(0);

  useEffect(() => {
    // Carnot Efficiency calculation: n = 1 - (Tc / Th)
    const eff = 1 - (tempCold / tempHot);
    setCarnotEff(Math.max(0, parseFloat((eff * 100).toFixed(1))));
  }, [tempHot, tempCold]);

  // Simulator 2: Robotics 2D Joint Arm
  const [angle1, setAngle1] = useState(45); // degrees
  const [angle2, setAngle2] = useState(60); // degrees
  const armLen1 = 80;
  const armLen2 = 60;
  const pivotX = 120;
  const pivotY = 140;

  // Convert Degrees to Radians
  const rad1 = (angle1 * Math.PI) / 180;
  const rad2 = ((angle1 + angle2) * Math.PI) / 180;

  // Compute Joint 1 (x1, y1)
  const j1x = pivotX + armLen1 * Math.cos(rad1);
  const j1y = pivotY - armLen1 * Math.sin(rad1); // negative because SVG y axis points down

  // Compute Joint 2 (x2, y2)
  const j2x = j1x + armLen2 * Math.cos(rad2);
  const j2y = j1y - armLen2 * Math.sin(rad2);

  // Simulator 3: Neural Net Node Activation
  const [inputX1, setInputX1] = useState(0.8);
  const [inputX2, setInputX2] = useState(0.4);
  const [weightW1, setWeightW1] = useState(0.5);
  const [weightW2, setWeightW2] = useState(-0.3);
  const [biasVal, setBiasVal] = useState(0.1);
  const [neuronModelVal, setNeuronModelVal] = useState(0);

  useEffect(() => {
    // Sigmoid math function
    const z = inputX1 * weightW1 + inputX2 * weightW2 + biasVal;
    const activation = 1 / (1 + Math.exp(-z));
    setNeuronModelVal(parseFloat(activation.toFixed(3)));
  }, [inputX1, inputX2, weightW1, weightW2, biasVal]);

  const runBackpropagationPass = () => {
    // Push activation values slightly closer to target output 1.0
    setWeightW1(parseFloat((weightW1 + 0.05 * (1.0 - neuronModelVal) * inputX1).toFixed(3)));
    setWeightW2(parseFloat((weightW2 + 0.05 * (1.0 - neuronModelVal) * inputX2).toFixed(3)));
    setBiasVal(parseFloat((biasVal + 0.05 * (1.0 - neuronModelVal)).toFixed(3)));
  };

  // AI Assistant States
  const [assistantTopic, setAssistantTopic] = useState("Thermodynamics");
  const [assistantPrompt, setAssistantPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState<{ sender: "student" | "professor"; text: string; topic: string }[]>([
    { 
      sender: "professor", 
      topic: "Thermodynamics",
      text: isEn 
        ? "Greeting, Colleague! I am **Professor GIAET**. Welcome to GIAET virtual study office. Select an engineering module and type your homework questions below. Let us evaluate formulas together!"
        : "Guten Tag! Ich bin **Professor GIAET**. Willkommen in Ihrer virtuellen Sprechstunde. Wählen Sie ein Ingenieursmodul und stellen Sie Ihre Fachfrage."
    }
  ]);
  const [aiLoading, setAiLoading] = useState(false);

  const triggerAssistantCall = async (e: FormEvent) => {
    e.preventDefault();
    if (!assistantPrompt.trim()) return;

    const studentMsg = assistantPrompt;
    setChatHistory(prev => [...prev, { sender: "student", topic: assistantTopic, text: studentMsg }]);
    setAssistantPrompt("");
    setAiLoading(true);

    try {
      const response = await fetch("/api/study-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          topic: assistantTopic, 
          question: studentMsg, 
          language: language 
        })
      });

      const data = await response.json();
      setChatHistory(prev => [...prev, { sender: "professor", topic: assistantTopic, text: data.answer }]);
    } catch (err) {
      console.error("Failed assistant fetch:", err);
      const networkError = isEn 
        ? "Error connecting with GIAET computing node. Please check server connectivity."
        : "Fehler beim Verbinden mit dem GIAET-Rechenzentrum.";
      setChatHistory(prev => [...prev, { sender: "professor", topic: assistantTopic, text: networkError }]);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-blue-dark relative overflow-hidden text-left border-t border-slate-900" id="lms-section">
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-brand-gold/10 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
            {isEn ? "GIAET DIGITIZED ACADEMIC INFRASTRUCTURE" : "DIGITALE GIAET LERNPLATTFORM (LMS)"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            {isEn ? "Virtual Learning Management System" : "Virtuelles Studierendenportal (LMS)"}
          </h2>
          <p className="text-slate-350 font-light mt-3 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? "Access our responsive student dashboard, interact with 2D/3D physics laboratory simulators, or query GIAET's AI Professor."
              : "Greifen Sie auf das Studierendendashboard zu, experimentieren Sie in virtuellen Onlinelaboren oder befragen Sie den KI-Professor."
            }
          </p>
        </div>

        {/* Portal Dashboard Wrapper Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LHS Sidebar Navigation Tracks */}
          <div className="lg:col-span-3 space-y-3">
            <div className="p-4 rounded-xl bg-brand-blue-medium/30 border border-slate-805/80 text-left flex gap-3 items-center">
              <div className="w-9 h-9 rounded-full bg-brand-blue-light border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <p className="text-xs text-slate-400 font-mono">STUDENT CREDENTIALS</p>
                <p className="text-sm font-sans font-bold text-white">Sarah Schmidt</p>
                <p className="text-[10px] text-brand-gold font-mono mt-0.5">ID: GS-2026-9810</p>
              </div>
            </div>

            <div className="bg-brand-blue-medium border border-slate-800 rounded-xl overflow-hidden p-2 flex flex-col gap-1">
              <button
                id="tab-dashboard-btn"
                onClick={() => setActiveTab("dashboard")}
                className={`py-3 px-4 rounded-lg text-xs font-mono font-bold text-left transition-colors flex items-center gap-2.5 cursor-pointer ${
                  activeTab === "dashboard" ? "bg-brand-blue-light text-brand-gold border border-slate-700" : "text-slate-300 hover:bg-brand-blue-light/30"
                }`}
              >
                <BarChart3 className="w-4 h-4 text-brand-gold" />
                <span>{isEn ? "STUDENT DASHBOARD" : "STUDENTEN-DASHBOARD"}</span>
              </button>

              <button
                id="tab-labs-btn"
                onClick={() => setActiveTab("labs")}
                className={`py-3 px-4 rounded-lg text-xs font-mono font-bold text-left transition-colors flex items-center gap-2.5 cursor-pointer ${
                  activeTab === "labs" ? "bg-brand-blue-light text-brand-gold border border-slate-700" : "text-slate-300 hover:bg-brand-blue-light/30"
                }`}
              >
                <Terminal className="w-4 h-4 text-brand-gold" />
                <span>{isEn ? "INTERACTIVE PRACTICAL LABS" : "VIRTUELLE INGENIEURLABORE"}</span>
              </button>

              <button
                id="tab-assistant-btn"
                onClick={() => setActiveTab("assistant")}
                className={`py-3 px-4 rounded-lg text-xs font-mono font-bold text-left transition-colors flex items-center gap-2.5 cursor-pointer ${
                  activeTab === "assistant" ? "bg-brand-blue-light text-brand-gold border border-slate-700" : "text-slate-300 hover:bg-brand-blue-light/30"
                }`}
              >
                <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
                <span>{isEn ? "AI STUDY ASSISTANT" : "KI-SUDIENASSISTENT"}</span>
              </button>

              <button
                id="tab-library-btn"
                onClick={() => setActiveTab("library")}
                className={`py-3 px-4 rounded-lg text-xs font-mono font-bold text-left transition-colors flex items-center gap-2.5 cursor-pointer ${
                  activeTab === "library" ? "bg-brand-blue-light text-brand-gold border border-slate-700" : "text-slate-300 hover:bg-brand-blue-light/30"
                }`}
              >
                <BookOpen className="w-4 h-4 text-brand-gold" />
                <span>{isEn ? "DIGITAL LIBRARY & EXAMS" : "BIBLIOTHEK & PRÜFUNGEN"}</span>
              </button>
            </div>
          </div>

          {/* RHS Tab Content Panel container with smooth transitionings */}
          <div className="lg:col-span-9 p-8 rounded-2xl bg-brand-blue-medium border border-slate-800 min-h-[500px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {/* TAB 1: DASHBOARD */}
              {activeTab === "dashboard" && (
                <motion.div
                  key="tab-dashboard"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 text-left"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-805 pb-4">
                    <div>
                      <h3 className="text-xl font-display font-medium text-white">{isEn ? "Overview Analytics" : "Akademischer Fortschritt"}</h3>
                      <p className="text-xs text-slate-400 mt-1">{isEn ? "Registered Major: BSc Computer Science & Engineering" : "Zielabschluss: B.Sc. Informatik & IT-Engineering"}</p>
                    </div>
                    <span className="px-3 py-1 bg-brand-blue-light/60 rounded text-xs text-green-400 font-mono font-semibold border border-green-400/20 mt-3 sm:mt-0">
                      ● {isEn ? "SEMESTER ACTIVE" : "SEMESTER AKTIV"}
                    </span>
                  </div>

                  {/* Top Stats Grid indicators */}
                  <div className="grid sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-brand-blue-dark border border-slate-850">
                      <span className="text-[10px] text-slate-400 font-mono block">GPA SCORE</span>
                      <span className="text-xl font-display font-bold text-white mt-1 block">3.82 / 4.0</span>
                    </div>
                    <div className="p-4 rounded-lg bg-brand-blue-dark border border-slate-850">
                      <span className="text-[10px] text-slate-400 font-mono block">COMPLETED CREDITS</span>
                      <span className="text-xl font-display font-bold text-white mt-1 block">42 / 180 ECTS</span>
                    </div>
                    <div className="p-4 rounded-lg bg-brand-blue-dark border border-slate-850">
                      <span className="text-[10px] text-slate-400 font-mono block">NEXT SCHEDULED EXAM</span>
                      <span className="text-xs font-mono font-bold text-brand-gold mt-1 block leading-tight">CSE-204: AI Basics</span>
                    </div>
                    <div className="p-4 rounded-lg bg-brand-blue-dark border border-slate-850">
                      <span className="text-[10px] text-slate-400 font-mono block">ATTENDANCE LEVEL</span>
                      <span className="text-xl font-display font-bold text-white mt-1 block">98.4%</span>
                    </div>
                  </div>

                  {/* Active Semester course list */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                      {isEn ? "Live Modules Level II" : "Ihre aktiven Pflichtmodule im Semester"}
                    </h4>

                    <div className="grid gap-3">
                      <div className="p-4 bg-brand-blue-dark/50 rounded-lg border border-slate-850 flex justify-between items-center hover:bg-brand-blue-dark transition-colors">
                        <div className="flex gap-3 items-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                          <div className="text-left leading-tight">
                            <p className="text-sm text-slate-100 font-sans font-semibold">CSE-204: Artificial Intelligence Frontiers</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Professor Marcus Wagner | 6 ECTS</p>
                          </div>
                        </div>
                        <span className="text-xs text-brand-gold font-mono uppercase bg-slate-900 px-2 py-1 rounded">
                          {isEn ? "84% Progress" : "84% abgeschlossen"}
                        </span>
                      </div>

                      <div className="p-4 bg-brand-blue-dark/50 rounded-lg border border-slate-850 flex justify-between items-center hover:bg-brand-blue-dark transition-colors">
                        <div className="flex gap-3 items-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                          <div className="text-left leading-tight">
                            <p className="text-sm text-slate-100 font-sans font-semibold">CSE-203: Web Engineering Systems & APIs</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Dr. Elena Petrova | 6 ECTS</p>
                          </div>
                        </div>
                        <span className="text-xs text-brand-gold font-mono uppercase bg-slate-900 px-2 py-1 rounded">
                          {isEn ? "76% Progress" : "76% abgeschlossen"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* LMS Alert banner */}
                  <div className="p-4 bg-gradient-to-r from-brand-blue-light/40 to-slate-900 border border-slate-700/50 rounded-xl flex gap-3 text-xs text-slate-300 items-start">
                    <Sparkles className="w-5 h-5 text-brand-gold flex-shrink-0 animate-spin-slow" />
                    <div>
                      <p className="font-bold text-white">{isEn ? "AI Professor Copilot Update" : "Ankündigung: KI-Tutor freigeschaltet"}</p>
                      <p className="font-light mt-0.5">
                        {isEn 
                          ? "GIAET AI Core is loaded. Click the 'AI Study Assistant' tab in layout to ask homework assistance or coding challenges directly!"
                          : "Der GIAET-Copilot ist aktiv. Klicken Sie links auf 'KI-Studienassistent', um Fachfragen zum Vorlesungsstoff zu stellen."
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: INTERACTIVE LABORATORY SIMULATORS */}
              {activeTab === "labs" && (
                <motion.div
                  key="tab-labs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div className="border-b border-slate-805 pb-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-display font-medium text-white">{isEn ? "Interactive Physics Workbench" : "Virtueller Laborversuch (Simulation)"}</h3>
                      <p className="text-xs text-slate-400 mt-1">{isEn ? "Practical ECTS credit assessment sandbox" : "Interaktive Versuchsdurchführung"}</p>
                    </div>
                    {/* Selector */}
                    <select
                      id="lab-selector"
                      value={selectedLabTrack}
                      onChange={(e) => setSelectedLabTrack(e.target.value as any)}
                      className="p-1.5 rounded bg-brand-blue-dark text-white text-xs border border-slate-700 outline-none"
                    >
                      <option value="thermo">{isEn ? "Thermodynamics Cycle" : "Thermodynamik (Carnot)"}</option>
                      <option value="robotics">{isEn ? "Robotics joint arm kinematic" : "Robotik-Gelenkarm"}</option>
                      <option value="ai">{isEn ? "Neural logic pass" : "KI-Aktivierungsfunktion"}</option>
                    </select>
                  </div>

                  {/* SIMULATOR CORE CONTAINER */}
                  <div className="grid md:grid-cols-12 gap-6">
                    
                    {/* LHS Controls Sliders panel */}
                    <div className="md:col-span-4 p-5 rounded-lg bg-brand-blue-dark border border-slate-850 space-y-5">
                      <h4 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1">
                        <Sliders className="w-4 h-4" />
                        <span>{isEn ? "Parameters" : "Parameter"}</span>
                      </h4>

                      {/* Display Thermo controls */}
                      {selectedLabTrack === "thermo" && (
                        <div className="space-y-4">
                          <p className="text-[11px] text-slate-300 font-light leading-snug">
                            {isEn ? "Adjust temperatures of Hot and Cold reservoirs to compute maximum possible efficiency limits." : "Regulieren Sie die Quellentemperatur zur Wirkungsgradberechnung."}
                          </p>
                          <div className="space-y-1.5 flex flex-col">
                            <label className="text-[10px] text-slate-400 font-mono">HOT TEMPS (Th): {tempHot} K</label>
                            <input 
                              type="range" 
                              min="400" 
                              max="900"
                              value={tempHot}
                              onChange={(e) => setTempHot(parseInt(e.target.value))}
                              className="w-full accent-brand-gold"
                            />
                          </div>

                          <div className="space-y-1.5 flex flex-col z-0">
                            <label className="text-[10px] text-slate-400 font-mono">COLD TEMPS (Tc): {tempCold} K</label>
                            <input 
                              type="range" 
                              min="200" 
                              max="399"
                              value={tempCold}
                              onChange={(e) => setTempCold(parseInt(e.target.value))}
                              className="w-full accent-brand-gold"
                            />
                          </div>
                        </div>
                      )}

                      {/* Display Robotics controls */}
                      {selectedLabTrack === "robotics" && (
                        <div className="space-y-4">
                          <p className="text-[11px] text-slate-300 font-light leading-snug">
                            {isEn ? "Vary structural rotational angles (θ1, θ2) to compute joint nodes spatial grid locations (x, y) live." : "Regulieren Sie die Winkelwerte für Glied 1 und Glied 2."}
                          </p>
                          <div className="space-y-1.5 flex flex-col">
                            <label className="text-[10px] text-slate-400 font-mono">JOINT ANGLE 1 (θ1): {angle1}°</label>
                            <input 
                              type="range" 
                              min="0" 
                              max="180"
                              value={angle1}
                              onChange={(e) => setAngle1(parseInt(e.target.value))}
                              className="w-full accent-brand-gold"
                            />
                          </div>

                          <div className="space-y-1.5 flex flex-col">
                            <label className="text-[10px] text-slate-400 font-mono">JOINT ANGLE 2 (θ2): {angle2}°</label>
                            <input 
                              type="range" 
                              min="-180" 
                              max="180"
                              value={angle2}
                              onChange={(e) => setAngle2(parseInt(e.target.value))}
                              className="w-full accent-brand-gold"
                            />
                          </div>
                        </div>
                      )}

                      {/* Display Neural net node controls */}
                      {selectedLabTrack === "ai" && (
                        <div className="space-y-4">
                          <p className="text-[11px] text-slate-300 font-light leading-snug">
                            {isEn ? "Modify synapse input values, weights, and biases to activate sigmoid function nodes feedforward." : "Gewichte und Bias anpassen zur Vorwärtsberechnung."}
                          </p>
                          
                          <div className="space-y-1 bg-slate-900/50 p-2 rounded">
                            <label className="text-[9px] text-slate-400 font-mono">INPUTS: X1={inputX1} | X2={inputX2}</label>
                            <div className="flex gap-2">
                              <input 
                                type="range" 
                                min="0.1" 
                                max="1.0" 
                                step="0.1"
                                value={inputX1}
                                onChange={(e) => setInputX1(parseFloat(e.target.value))}
                                className="w-1/2 accent-brand-gold"
                              />
                              <input 
                                type="range" 
                                min="0.1" 
                                max="1.0" 
                                step="0.1"
                                value={inputX2}
                                onChange={(e) => setInputX2(parseFloat(e.target.value))}
                                className="w-1/2 accent-brand-gold"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5 flex flex-col">
                            <label className="text-[10px] text-slate-400 font-mono">WEIGHT W1: {weightW1}</label>
                            <input 
                              type="range" 
                              min="-2.0" 
                              max="2.0" 
                              step="0.05"
                              value={weightW1}
                              onChange={(e) => setWeightW1(parseFloat(e.target.value))}
                              className="w-full accent-brand-gold"
                            />
                          </div>

                          <div className="space-y-1.5 flex flex-col">
                            <label className="text-[10px] text-slate-400 font-mono">BIAS VALUE: {biasVal}</label>
                            <input 
                              type="range" 
                              min="-1.0" 
                              max="1.0" 
                              step="0.05"
                              value={biasVal}
                              onChange={(e) => setBiasVal(parseFloat(e.target.value))}
                              className="w-full accent-brand-gold"
                            />
                          </div>

                          <button
                            id="run-backprop-btn"
                            type="button"
                            onClick={runBackpropagationPass}
                            className="w-full py-2 bg-brand-blue-light hover:bg-brand-blue-light/80 text-[10px] font-mono font-bold text-white rounded border border-slate-700 cursor-pointer"
                          >
                            RUN GRADIENT BACKPASS
                          </button>
                        </div>
                      )}
                    </div>

                    {/* RHS Live Screen Drawing Area */}
                    <div className="md:col-span-8 p-5 rounded-lg bg-brand-blue-dark border border-slate-850 flex flex-col justify-between min-h-[300px]">
                      
                      {/* Graphics Canvas Plotters */}
                      <div className="flex-1 flex items-center justify-center relative bg-slate-900/40 rounded-lg p-2 overflow-hidden border border-slate-800">
                        
                        {/* Thermo drawing graph */}
                        {selectedLabTrack === "thermo" && (
                          <div className="w-full max-w-[280px] h-[220px] relative">
                            {/* SVG Carnot PV Diagram */}
                            <svg viewBox="0 0 240 200" className="w-full h-full overflow-visible">
                              {/* Axis */}
                              <line x1="20" y1="180" x2="220" y2="180" stroke="#475569" strokeWidth="2" />
                              <line x1="20" y1="10" x2="20" y2="180" stroke="#475569" strokeWidth="2" strokeDasharray="1 1" />
                              <text x="210" y="195" fill="#94a3b8" fontSize="10" fontFamily="monospace">Vol (V)</text>
                              <text x="5" y="20" fill="#94a3b8" fontSize="10" fontFamily="monospace" transform="rotate(-90, 5, 20)">Press (P)</text>

                              {/* PV Closed Cycle Area */}
                              <path 
                                d={`M 50 ${140 - (tempHot - 600)/5} 
                                    Q 100 ${100 - (tempHot - 600)/5} 140 ${130 - (tempCold - 300)/5} 
                                    Q 110 ${165 - (tempCold - 300)/5} 80 ${175 - (tempCold - 300)/5} 
                                    Z`} 
                                fill="rgba(0, 210, 196, 0.1)" 
                                stroke="#00d2c4" 
                                strokeWidth="2.5" 
                                className="transition-all duration-300"
                              />

                              {/* Points */}
                              <circle cx="50" cy={140 - (tempHot - 600)/10} r="3" fill="#ffffff" />
                              <circle cx="140" cy={130 - (tempCold - 300)/10} r="3" fill="#ffffff" />
                            </svg>
                          </div>
                        )}

                        {/* Robotics Arm live rendering */}
                        {selectedLabTrack === "robotics" && (
                          <div className="w-full max-w-[280px] h-[220px] relative">
                            <svg viewBox="0 0 240 180" className="w-full h-full">
                              {/* Grid lines */}
                              <circle cx={pivotX} cy={pivotY} r={armLen1} fill="none" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 3" />
                              <circle cx={pivotX} cy={pivotY} r={armLen1 + armLen2} fill="none" stroke="rgba(255,255,255,0.02)" strokeDasharray="1 3" />

                              {/* Base Support */}
                              <path d={`M ${pivotX - 15} ${pivotY + 10} L ${pivotX + 15} ${pivotY + 10} L ${pivotX} ${pivotY} Z`} fill="#1e293b" />
                              <circle cx={pivotX} cy={pivotY} r="6" fill="#00d2c4" />

                              {/* Arm Link 1 */}
                              <line 
                                x1={pivotX} 
                                y1={pivotY} 
                                x2={j1x} 
                                y2={j1y} 
                                stroke="rgba(255, 255, 255, 0.85)" 
                                strokeWidth="5.5" 
                                strokeLinecap="round" 
                                className="transition-all duration-100"
                              />

                              {/* Joint 2 */}
                              <circle cx={j1x} cy={j1y} r="5" fill="#f59e0b" className="transition-all duration-100" />

                              {/* Arm Link 2 */}
                              <line 
                                x1={j1x} 
                                y1={j1y} 
                                x2={j2x} 
                                y2={j2y} 
                                stroke="#00d2c4" 
                                strokeWidth="3.5" 
                                strokeLinecap="round" 
                                className="transition-all duration-100"
                              />

                              {/* End Effector Claw payload */}
                              <circle cx={j2x} cy={j2y} r="4.5" fill="#ffffff" className="transition-all duration-100" />
                            </svg>
                          </div>
                        )}

                        {/* AI activation rendering */}
                        {selectedLabTrack === "ai" && (
                          <div className="w-full max-w-[280px] h-[220px] relative">
                            <svg viewBox="0 0 240 180" className="w-full h-full">
                              {/* Weights arrows links */}
                              <line x1="30" y1="40" x2="140" y2="90" stroke="#475569" strokeWidth={Math.max(1, Math.abs(weightW1)*3)} strokeDasharray={weightW1 < 0 ? "3 3" : "none"} />
                              <line x1="30" y1="140" x2="140" y2="90" stroke="#475569" strokeWidth={Math.max(1, Math.abs(weightW2)*3)} strokeDasharray={weightW2 < 0 ? "3 3" : "none"} />

                              {/* Node inputs */}
                              <circle cx="30" cy="40" r="15" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                              <text x="24" y="44" fill="#ffffff" fontSize="11" fontFamily="sans-serif">X1</text>

                              <circle cx="30" cy="140" r="15" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                              <text x="24" y="144" fill="#ffffff" fontSize="11" fontFamily="sans-serif">X2</text>

                              {/* Neuron activation node */}
                              <circle cx="140" cy="90" r="28" fill="#15305b" stroke="#00d2c4" strokeWidth="3" className="shadow-glow" />
                              <text x="122" y="94" fill="#00d2c4" fontSize="13" fontWeight="bold" fontFamily="sans-serif">σ(∑)</text>

                              {/* Output layer */}
                              <line x1="168" y1="90" x2="210" y2="90" stroke="#00d2c4" strokeWidth="2.5" />
                              <circle cx="210" cy="90" r="8" fill="#ffffff" />
                              
                              <text x="110" y="155" fill="#a5f3fc" fontSize="9" fontFamily="monospace">Target Output: 1.0</text>
                            </svg>
                          </div>
                        )}
                        
                      </div>

                      {/* Display calculations summary */}
                      <div className="mt-4 pt-4 border-t border-slate-805 grid grid-cols-2 gap-4">
                        {selectedLabTrack === "thermo" && (
                          <>
                            <div>
                              <span className="text-[10px] text-slate-400 font-mono block">CARNOT FORMULA</span>
                              <span className="text-xs text-slate-100 font-mono block mt-1">η = 1 - (Tc / Th)</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-400 font-mono block">THERM EFFICIENCY</span>
                              <span className="text-md text-brand-gold font-mono font-bold block mt-1">{carnotEff}%</span>
                            </div>
                          </>
                        )}

                        {selectedLabTrack === "robotics" && (
                          <>
                            <div>
                              <span className="text-[10px] text-slate-400 font-mono block">JOINT-2 TARGET GRID (X, Y)</span>
                              <span className="text-xs text-slate-100 font-mono block mt-1">X: {j2x.toFixed(1)}, Y: {j2y.toFixed(1)}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-400 font-mono block">KINEMATICS SOLVER</span>
                              <span className="text-xs text-green-400 font-mono block mt-1">2-Link Forward Pass</span>
                            </div>
                          </>
                        )}

                        {selectedLabTrack === "ai" && (
                          <>
                            <div>
                              <span className="text-[10px] text-slate-400 font-mono block">SIGMOID VALUE σ(W•X + b)</span>
                              <span className="text-xs text-slate-100 font-mono block mt-1">Sum, z: {(inputX1 * weightW1 + inputX2 * weightW2 + biasVal).toFixed(3)}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-400 font-mono block">NEURON ACTIVATION</span>
                              <span className="text-md text-brand-gold font-mono font-bold block mt-1">{neuronModelVal}</span>
                            </div>
                          </>
                        )}
                      </div>

                    </div>

                  </div>
                </motion.div>
              )}

              {/* TAB 3: ARTIFICIAL INTELLIGENCE STUDY ASSISTANT (PROFESSOR GIAET) */}
              {activeTab === "assistant" && (
                <motion.div
                  key="tab-assistant"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left flex flex-col justify-between"
                >
                  {/* Title heading */}
                  <div className="border-b border-slate-805 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <h3 className="text-xl font-display font-medium text-white flex items-center gap-1.5">
                        <Sparkles className="w-5 h-5 text-brand-gold flex-shrink-0" />
                        <span>{isEn ? "Professor GIAET AI Office" : "KI-Sprechstunde (Professor GIAET)"}</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {isEn ? "Ask active engineering syllabus questions about Thermodynamics, Robotics, and Computer Science." : "Stellen Sie fachspezifische Fragen zu Kursen und erhalten Sie fundierte Antworten."}
                      </p>
                    </div>

                    {/* Choose field select bar */}
                    <div className="mt-3 sm:mt-0">
                      <select
                        id="assistant-topic-selector"
                        value={assistantTopic}
                        onChange={(e) => setAssistantTopic(e.target.value)}
                        className="p-1.5 rounded bg-brand-blue-dark text-white text-xs border border-slate-705"
                      >
                        <option value="Thermodynamics">{isEn ? "Thermodynamics Class" : "Thermodynamik"}</option>
                        <option value="Robotics">{isEn ? "Control Theory & Robotics" : "Robotik & Regelungstechnik"}</option>
                        <option value="AI">{isEn ? "Advanced Artificial Intelligence" : "Künstliche Intelligenz"}</option>
                        <option value="Clean Energy Grid">{isEn ? "Sustainable Energy" : "Erneuerbare Energien"}</option>
                      </select>
                    </div>
                  </div>

                  {/* Chat logs feed scrolling */}
                  <div className="h-[250px] overflow-y-auto space-y-4 pr-2 bg-slate-900/30 rounded-lg p-4 border border-slate-850 flex flex-col">
                    {chatHistory.map((chat, idx) => (
                      <div 
                        key={idx}
                        className={`flex gap-3 max-w-[85%] ${
                          chat.sender === "student" ? "self-end flex-row-reverse" : "self-start"
                        }`}
                      >
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 ${
                          chat.sender === "student" ? "bg-brand-blue-light text-slate-300" : "bg-gradient-to-br from-brand-gold to-cyan-500 text-brand-blue-dark"
                        }`}>
                          {chat.sender === "student" ? "S" : "P"}
                        </div>

                        {/* Text card balloon */}
                        <div className={`p-3.5 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                          chat.sender === "student" ? "bg-brand-blue-light/50 border border-slate-750 text-slate-100" : "bg-brand-blue-dark border border-slate-805 text-left text-slate-200"
                        }`}>
                          <span className="text-[9px] text-brand-gold font-mono block mb-1 uppercase tracking-wider">{chat.topic || "Engineering"}</span>
                          <span>{chat.text}</span>
                        </div>
                      </div>
                    ))}

                    {/* AI Loading bubble */}
                    {aiLoading && (
                      <div className="flex gap-3 self-start max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-blue-dark flex items-center justify-center text-xs font-bold animate-pulse">P</div>
                        <div className="p-3 bg-brand-blue-dark border border-slate-805 rounded-xl text-xs text-slate-300 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                          <span>{isEn ? "Professor is compiling references..." : "Professor durchsucht Studienskripte..."}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Typing input bar */}
                  <form onSubmit={triggerAssistantCall} className="flex gap-2.5">
                    <input 
                      id="asst-input-txt"
                      type="text"
                      required
                      value={assistantPrompt}
                      onChange={(e) => setAssistantPrompt(e.target.value)}
                      placeholder={isEn ? "e.g. Can you explain Inverse Kinematics in 2D space?" : "z.B. Wie lautet der Wirkungsgrad des Carnot-Ablaufs?"}
                      className="flex-1 p-3 rounded bg-brand-blue-dark text-white text-sm border border-slate-700/80 outline-none focus:border-brand-gold"
                    />
                    <button
                      id="asst-send-btn"
                      type="submit"
                      disabled={aiLoading}
                      className="px-5 py-3 rounded-lg bg-gradient-to-r from-brand-gold to-cyan-400 text-brand-blue-dark text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-glow transition-transform active:scale-[0.98]"
                    >
                      <span>{isEn ? "ASK PROF" : "FRAGEN"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* TAB 4: DIGITAL LIBRARY & REASSURING ENROLLMENT EXAMS */}
              {activeTab === "library" && (
                <motion.div
                  key="tab-library"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div className="border-b border-slate-805 pb-4">
                    <h3 className="text-xl font-display font-medium text-white">{isEn ? "Digital Library & Exam Schedules" : "Digitale Bibliothek & Prüfungen"}</h3>
                    <p className="text-xs text-slate-400 mt-1">{isEn ? "Browse certified European technological literatures" : "Akkreditierter Wissenschaftskatalog"}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Catalog item 1 */}
                    <div className="p-4 bg-brand-blue-dark rounded-lg border border-slate-855 flex gap-4 items-start hover:border-brand-gold/20 transition-colors">
                      <div className="p-3 bg-brand-blue-light/50 rounded text-brand-gold flex-shrink-0">
                        <Database className="w-5 h-5" />
                      </div>
                      <div className="leading-snug space-y-1">
                        <p className="font-sans font-bold text-slate-100 text-sm">{isEn ? "Principles of Fluid Dynamics (PDF)" : "Grundlagen der Strömungslehre (PDF)"}</p>
                        <p className="text-xs text-slate-400 font-mono">Author: Müller, H. (Stuttgart University Ed. VI)</p>
                        <a href="#lms-section" className="text-[10px] text-brand-gold font-mono hover:underline inline-block mt-1">
                          ↳ {isEn ? "Open Digital Textbook" : "Lehrbuch im Viewer öffnen"}
                        </a>
                      </div>
                    </div>

                    {/* Catalog item 2 */}
                    <div className="p-4 bg-brand-blue-dark rounded-lg border border-slate-855 flex gap-4 items-start hover:border-brand-gold/20 transition-colors">
                      <div className="p-3 bg-brand-blue-light/50 rounded text-brand-gold flex-shrink-0">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="leading-snug space-y-1">
                        <p className="font-sans font-bold text-slate-100 text-sm">{isEn ? "Automation Systems & PLC Circuits" : "Automatisierungstechnik & SPS-Verkabelung"}</p>
                        <p className="text-xs text-slate-400 font-mono">Author: Krause, D. (KIT Academic Publishing)</p>
                        <a href="#lms-section" className="text-[10px] text-brand-gold font-mono hover:underline inline-block mt-1">
                          ↳ {isEn ? "Open Digital Textbook" : "Lehrbuch im Viewer öffnen"}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-brand-gold" />
                      <span>{isEn ? "Final examination criteria" : "Prüfungsordnungen (Bologna-Einklang)"}</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {isEn 
                        ? "GIAET conducts virtual, secure online exams monitored by identity metric algorithms. To claim your 180 ECTS degree, each seminar section requires completing independent thesis defenses coordinated via the Stuttgart International Board."
                        : "Der Leistungsnachweis erfolgt über sichere Online-Prüfungsverfahren. Alle 180 ECTS-Bachelorarbeiten werden in koordinierter Kooperation mit Stuttgarter Universitätsstellen online verteidigt."
                      }
                    </p>
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
