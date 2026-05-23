import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface FooterProps {
  language: "en" | "de";
}

export default function Footer({ language }: FooterProps) {
  const isEn = language === "en";
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 1500);
  };

  return (
    <footer className="bg-brand-blue-dark border-t border-slate-805/90 text-left pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 pb-16 border-b border-slate-805/75">
        
        {/* LHS Brand Brief and Address info */}
        <div className="md:col-span-4 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-display font-medium text-white tracking-widest block font-bold leading-tight">
              GIAET
            </h3>
            <p className="text-xs text-brand-gold font-mono uppercase tracking-widest leading-none">
              Engineering Innovation
            </p>
          </div>

          <p className="text-xs text-slate-350 leading-relaxed font-light">
            {isEn 
              ? "Global Institute of Advanced Engineering & Technology is Europe's state-accredited online engineering university. Designed in Stuttgart - studying anywhere globally."
              : "Das Global Institute of Advanced Engineering & Technology ist Europas staatlich anerkannte Online-Hochschule für Ingenieurwissenschaften."
            }
          </p>

          <div className="space-y-3.5 pt-2">
            <div className="flex gap-3 text-xs text-slate-300 font-mono">
              <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>
                Industriestraße 145, <br className="hidden sm:inline" />
                70565 Stuttgart, <br className="hidden sm:inline" />
                Baden-Württemberg, Germany
              </span>
            </div>
            
            <div className="flex gap-3 text-xs text-slate-300 font-mono items-center">
              <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <a href="mailto:admissions@giaet.de" className="hover:text-brand-gold transition-colors">admissions@giaet.de</a>
            </div>

            <div className="flex gap-3 text-xs text-slate-300 font-mono items-center">
              <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <a href="tel:+497116845321" className="hover:text-brand-gold transition-colors">+49 (0) 711 684 5321</a>
            </div>
          </div>
        </div>

        {/* Mid Quick links navigation index */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {isEn ? "Academics" : "Studium"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-350 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">BSc Mechanical</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">BSc Automation</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">BSc Computer Science</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">BSc Energy Tech</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {isEn ? "LMS Portal" : "Campus Leben"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-350 font-light">
              <li><a href="#lms-section" className="hover:text-white transition-colors">{isEn ? "Student Login" : "Studenten-LMS"}</a></li>
              <li><a href="#lms-section" className="hover:text-white transition-colors">{isEn ? "Virtual Lab Sandbox" : "Virtueller Laborpool"}</a></li>
              <li><a href="#lms-section" className="hover:text-white transition-colors">{isEn ? "AI Professor" : "KI-Sprechstunde"}</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Stuttgart Research</a></li>
            </ul>
          </div>

        </div>

        {/* RHS News letter optin grid */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
            {isEn ? "Weekly Science Bulletins" : "Wöchentlicher Forschungsbrief"}
          </h4>
          <p className="text-xs text-slate-300 font-light leading-relaxed">
            {isEn 
              ? "Subscribe to GIAET publications and enrollment notices from our Stuttgart Campus Board."
              : "Abonnieren Sie Publikationseinträge und Ankündigungen direkt aus Stuttgart."
            }
          </p>

          {!newsletterSubscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input 
                id="ft-email-txt"
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="university@example.com"
                className="p-2.5 rounded bg-brand-blue-medium text-white text-xs border border-slate-700 outline-none flex-1"
              />
              <button
                id="ft-subscribe-btn"
                type="submit"
                className="p-2.5 rounded bg-brand-blue-light border border-slate-700 hover:bg-brand-blue-light/80 text-white cursor-pointer transition-colors"
              >
                <Send className="w-4 h-4 text-brand-gold" />
              </button>
            </form>
          ) : (
            <div className="p-3 bg-slate-900 border border-brand-gold/20 rounded flex items-center gap-2 text-xs text-brand-gold font-mono">
              <CheckCircle2 className="w-4 h-4 animate-bounce" />
              <span>{isEn ? "SUBSCRIBED SUCCESSFULLY!" : "ERFOLGREICH ABONNIERT!"}</span>
            </div>
          )}
        </div>

      </div>

      {/* Sub footer fine line */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
        <p className="text-[10px] text-slate-500 font-mono">
          © 2026 Global Institute of Advanced Engineering & Technology (GIAET). All Rights Reserved.
        </p>

        <div className="flex gap-6 text-[10px] font-mono text-slate-500">
          <a href="#contact" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Terms & Conditions</a>
          <span className="text-slate-650">Stuttgart HRB 70565</span>
        </div>
      </div>
    </footer>
  );
}
