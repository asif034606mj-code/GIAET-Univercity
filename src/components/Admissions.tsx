import { useState, useRef, DragEvent, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, ArrowUpRight, ShieldCheck, Mail, Send, 
  Upload, Cloud, Trash, CheckCircle2, RefreshCw 
} from "lucide-react";

interface AdmissionsProps {
  language: "en" | "de";
}

export default function Admissions({ language }: AdmissionsProps) {
  const isEn = language === "en";
  
  // Registration Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationId, setRegistrationId] = useState<string | null>(null);

  // Files state
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Drag and drop events
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) {
      addFiles(e.dataTransfer.files);
    }
  };

  const fileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(e.target.files);
    }
  };

  const addFiles = (files: FileList) => {
    const list = [...uploadedFiles];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const kbSize = (f.size / 1024).toFixed(1) + " KB";
      list.push({ name: f.name, size: kbSize });
    }
    setUploadedFiles(list);
  };

  const triggerSearch = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (idx: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== idx));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !selectedProgram) {
      alert(isEn ? "Please fill in all mandatory fields." : "Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate server side registration & database save
    setTimeout(() => {
      setIsSubmitting(false);
      const randomID = "GIAET-" + Math.floor(100000 + Math.random() * 900000);
      setRegistrationId(randomID);
    }, 1200);
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setSelectedProgram("");
    setNotes("");
    setUploadedFiles([]);
    setRegistrationId(null);
  };

  return (
    <section className="py-24 bg-brand-blue-dark relative overflow-hidden text-left" id="admissions">
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-brand-blue-glow/15 rounded-full filter blur-[110px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
            {isEn ? "PREMIUM ENGINEERING ADMISSIONS" : "PREMIUM ZULASSUNGSVERFAHREN"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            {isEn ? "Apply Now to GIAET" : "Jetzt bewerben am GIAET"}
          </h2>
          <p className="text-slate-300 font-light mt-3 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? "Start your digital application safely. GIAET Admissions board processes registrations on a rolling semester schedule for winter and summer semesters."
              : "Starten Sie Ihre Bewerbung sicher online. Der Zulassungsausschuss des GIAET bearbeitet Bewerbungen fortlaufend für das Winter- und Sommersemester."
            }
          </p>
        </div>

        {/* Dynamic State Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Requirements and Help Checklist */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Admission Process steps */}
            <div className="p-6 rounded-xl bg-brand-blue-medium border border-slate-800 space-y-6">
              <h3 className="text-lg font-display font-medium text-white border-b border-slate-800 pb-3">
                {isEn ? "Application Milestones" : "Bewerbungs-Schritte"}
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-brand-blue-light border border-brand-gold/20 flex items-center justify-center text-xs text-brand-gold font-mono font-bold flex-shrink-0">1</span>
                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold text-white uppercase">{isEn ? "Submit online form" : "Formular übermitteln"}</p>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{isEn ? "Enter credentials, select major, and upload diploma files." : "Angaben eingeben, Studiengang auswählen und Zeugnisse hochladen."}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-brand-blue-light border border-brand-gold/20 flex items-center justify-center text-xs text-brand-gold font-mono font-bold flex-shrink-0">2</span>
                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold text-white uppercase">{isEn ? "Admissions Board Review" : "Prüfung durch den Ausschuss"}</p>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{isEn ? "Evaluation of ECTS prerequisites and english language standards." : "Bewertung der akademischen Voraussetzungen und Sprachkenntnisse."}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-brand-blue-light border border-brand-gold/20 flex items-center justify-center text-xs text-brand-gold font-mono font-bold flex-shrink-0">3</span>
                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold text-white uppercase">{isEn ? "Simulated Lab Tryout" : "Virtueller Kennenlerntag"}</p>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{isEn ? "Log in to virtual LMS to complete a baseline laboratory test." : "Zulassungszugang zum LMS für einen ersten virtuellen Laborversuch."}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarships & Financial card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-brand-blue-medium to-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
                <span>{isEn ? "Scholarships Support" : "Stipendienförderung"}</span>
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {isEn 
                  ? "GIAET awards merit-based scholarships of up to €2,500 every semester. Outstanding industrial learners and female technology candidates can also unlock corporate sponsorships with partner organizations."
                  : "Das GIAET vergibt jedes Semester Leistungsstipendien von bis zu 2.500 €. Hervorragende Bewerbende aus der Industrie oder Studentinnen im Ingenieurbereich können zusätzliche Sponsorenschaften erhalten."
                }
              </p>
              <div className="pt-2">
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline font-mono">
                  <span>{isEn ? "Consult GIAET Scholarship Board" : "Förderrichtlinien anfordern"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="flex gap-3 text-xs text-slate-400 font-mono leading-relaxed bg-brand-blue-medium/30 p-4 rounded-xl border border-slate-850">
              <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>
                {isEn 
                  ? "All dossiers and files are stored on high-security encrypted university database servers complying fully with EU DSGVO data regulations."
                  : "Alle Dokumente und persönlichen Daten werden hochsicher auf verschlüsselten Servern unter voller Einhaltung der DSGVO gespeichert."
                }
              </span>
            </div>

          </div>

          {/* Right Column: Dynamic Application Form */}
          <div className="lg:col-span-7">
            
            <AnimatePresence mode="wait">
              {!registrationId ? (
                
                /* Standard Registration Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="p-8 rounded-2xl bg-brand-blue-medium border border-slate-800 space-y-6"
                >
                  <h3 className="text-xl font-display font-medium text-white mb-2">
                    {isEn ? "Secure Registration Portfolio" : "Sicheres Bewerbungsportal"}
                  </h3>
                  <p className="text-xs text-slate-300 font-light">
                    {isEn ? "Fill in your global academic credentials. No application fee required." : "Geben Sie Ihre persönlichen Daten ein. Es fallen keine Bewerbungsgebühren an."}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5 flex flex-col text-left">
                      <label id="lbl-full-name" className="text-xs font-mono font-bold text-slate-300 uppercase">
                        {isEn ? "Full Name *" : "Vollständiger Name *"}
                      </label>
                      <input 
                        id="full-name-input"
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Max Mustermann"
                        className="p-3 rounded bg-brand-blue-dark text-white text-sm border border-slate-700/80 focus:border-brand-gold outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 flex flex-col text-left">
                      <label id="lbl-email" className="text-xs font-mono font-bold text-slate-300 uppercase">
                        {isEn ? "Email Address *" : "E-Mail-Adresse *"}
                      </label>
                      <input 
                        id="email-input"
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. max@example.com"
                        className="p-3 rounded bg-brand-blue-dark text-white text-sm border border-slate-700/80 focus:border-brand-gold outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Selected Major Program */}
                    <div className="space-y-1.5 flex flex-col text-left">
                      <label id="lbl-program" className="text-xs font-mono font-bold text-slate-300 uppercase">
                        {isEn ? "Academic Program Major *" : "Studiengangskenntnis *"}
                      </label>
                      <select
                        id="program-select"
                        required
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="p-3 rounded bg-brand-blue-dark text-white text-sm border border-slate-700/80 focus:border-brand-gold outline-none transition-colors"
                      >
                        <option value="">-- {isEn ? "Select BSc Track" : "B.Sc. auswählen"} --</option>
                        <option value="mech">BSc in Mechanical Engineering</option>
                        <option value="ipe">BSc in Industrial & Production Engineering</option>
                        <option value="automation">BSc in Automation Engineering</option>
                        <option value="eee">BSc in Electrical & Electronic Engineering</option>
                        <option value="cse">BSc in Computer Science & Engineering</option>
                        <option value="energy">BSc in Energy Technology</option>
                      </select>
                    </div>

                    {/* Stuttgart Preference */}
                    <div className="space-y-1.5 flex flex-col text-left">
                      <label id="lbl-attendance" className="text-xs font-mono font-bold text-slate-300 uppercase">
                        {isEn ? "Preferred Learning Mode" : "Präferenz Studienmodell"}
                      </label>
                      <select
                        id="attendance-select"
                        className="p-3 rounded bg-brand-blue-dark text-white text-sm border border-slate-700/80 focus:border-brand-gold outline-none transition-colors"
                      >
                        <option value="online">{isEn ? "100% Remote Online" : "100% Online"}</option>
                        <option value="hybrid">{isEn ? "Hybrid Model (visits Stuttgart labs)" : "Hybrid (regelmäßige Besuche in Stuttgart)"}</option>
                      </select>
                    </div>
                  </div>

                  {/* High quality drag and drop custom files uploading system! */}
                  <div className="space-y-1.5 flex flex-col text-left">
                    <label id="lbl-file-upload" className="text-xs font-mono font-bold text-slate-300 uppercase">
                      {isEn ? "Academic Dossiers & Diplomas" : "Zeugnisse & Leistungsnachweise (PDF)"}
                    </label>

                    <div 
                      id="upload-dock"
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerSearch}
                      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                        isDragOver ? "border-brand-gold bg-brand-gold/5" : "border-slate-700 hover:border-brand-gold/50 bg-brand-blue-dark/50"
                      }`}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        multiple 
                        className="hidden" 
                        onChange={fileSelected}
                      />
                      <Cloud className="w-10 h-10 text-brand-gold mx-auto mb-3 animate-pulse" />
                      <p className="text-sm text-slate-100 font-sans font-medium">
                        {isEn ? "Drag & drop file folders or Click to search" : "PDFs herziehen oder zum Suchen klicken"}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        PDF, DOCX, maximum 15MB file sizes
                      </p>
                    </div>

                    {/* Uploaded File List Representation */}
                    {uploadedFiles.length > 0 && (
                      <div className="pt-4 space-y-2">
                        <span className="text-[10px] text-slate-400 font-mono block uppercase">
                          {isEn ? "Queue Files to Upload" : "Dateien im Upload-Pool"}:
                        </span>
                        {uploadedFiles.map((file, idx) => (
                          <div 
                            key={idx}
                            className="p-2.5 bg-brand-blue-dark rounded border border-slate-800 flex justify-between items-center"
                          >
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-brand-gold" />
                              <span className="text-xs text-slate-300 font-mono truncate max-w-[200px]">{file.name}</span>
                              <span className="text-[10px] text-slate-500 font-mono">({file.size})</span>
                            </div>
                            <button 
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-red-400 rounded cursor-pointer transition-colors"
                            >
                              <Trash className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Motivational background details */}
                  <div className="space-y-1.5 flex flex-col text-left">
                    <label id="lbl-notes" className="text-xs font-mono font-bold text-slate-300 uppercase">
                      {isEn ? "Statement of Motivation" : "Kurzes Motivationsschreiben"}
                    </label>
                    <textarea 
                      id="notes-txt"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={isEn ? "Briefly tell us why engineering innovation interests you..." : "Schreiben Sie kurz, warum Sie Ingenieurwesen studieren möchten..."}
                      className="p-3 rounded bg-brand-blue-dark text-white text-sm border border-slate-700/80 focus:border-brand-gold outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="submit-appl-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 text-xs font-mono font-bold rounded-lg text-brand-blue-dark transition-all cursor-pointer shadow-glow flex justify-center items-center gap-2 bg-gradient-to-r from-brand-gold to-cyan-500 hover:scale-[1.01]`}
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>{isEn ? "PROCESSING DOSSIER..." : "ZEUGNISSE WERDEN GEPRÜFT..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{isEn ? "SUBMIT PORTFOLIO TO BOARD" : "ANMELDUNG AN AUSSCHUSS SENDEN"}</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
                
              ) : (
                
                /* Success Notification View after compilation */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 sm:p-12 rounded-2xl bg-brand-blue-medium border border-slate-800 text-center space-y-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-gold mx-auto animate-bounce" />
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-medium text-white">
                      {isEn ? "Application Securely Logged" : "Bewerbe-Dossier erfolgreich übermittelt!"}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {isEn 
                        ? `Congratulations, ${fullName}! Your portfolio has been logged directly into GIAET Registration Index database structure with authorized student code:`
                        : `Guten Tag, ${fullName}! Ihre Bewerbung wurde erfolgreich in das Register der Zulassungskommission eingetragen. Ihre Registrierungsnummer lautet:`
                      }
                    </p>
                  </div>

                  {/* Generated Registration badge */}
                  <div className="px-6 py-4 rounded-xl bg-brand-blue-dark border border-slate-755 inline-block mx-auto font-mono text-xl text-brand-gold font-bold tracking-widest shadow-inner">
                    {registrationId}
                  </div>

                  <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
                    {isEn 
                      ? "A secure verification receipt has been compiled and dispatched to your email address. Our Admissions Board officers in Stuttgart will evaluate your ECTS modules and contact you shortly."
                      : "Eine verschlüsselte Quittung wurde an Ihre E-Mail-Adresse gesendet. Die Zulassungskommission am Stuttgarter Campus prüft Ihre Hochladen-Dateien und meldet sich zeitnah."
                    }
                  </p>

                  <div className="pt-4 flex gap-4 justify-center">
                    <button 
                      onClick={resetForm}
                      className="px-4 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono hover:text-white cursor-pointer transition-colors"
                    >
                      {isEn ? "Register New Major" : "Weitere Anmeldung starten"}
                    </button>
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
