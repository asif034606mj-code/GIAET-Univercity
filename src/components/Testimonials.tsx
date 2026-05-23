import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Quote, Landmark } from "lucide-react";

interface TestimonialsProps {
  language: "en" | "de";
}

export default function Testimonials({ language }: TestimonialsProps) {
  const isEn = language === "en";

  // Active slider index state
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = () => {
    setActiveIdx(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section className="py-24 bg-brand-blue-dark relative overflow-hidden text-left border-t border-slate-900" id="testimonials">
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-brand-blue-glow/15 rounded-full filter blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-gold font-mono tracking-wider block mb-2">
            {isEn ? "STUTTGART INGENIEUR ALUMNI CLUSTERS" : "ALUMNI & INTEGRATIONS-HORIZONTE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            {isEn ? "Student Success Stories" : "Erfolgsberichte unserer Studierenden"}
          </h2>
          <p className="text-slate-350 font-light mt-3 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? "Gain insights from GIAET international student chapters and working masterminds operating inside top automotive/tech manufacturers."
              : "Erfahren Sie aus erster Hand, wie unsere Absolventen weltweit Karriere machen — berufsunterstützend akkreditiert im Online-Modell."
            }
          </p>
        </div>

        {/* Carousel slide card */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-2xl bg-brand-blue-medium border border-slate-800 grid md:grid-cols-12 gap-8 items-center relative"
            >
              {/* Giant icon watermark */}
              <div className="absolute right-8 top-8 opacity-5 text-brand-gold">
                <Quote className="w-32 h-32" />
              </div>

              {/* LHS Profile Photo Column */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                <img 
                  src={activeTestimonial.avatar} 
                  alt={activeTestimonial.name} 
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-full object-cover border-2 border-brand-gold/30 shadow-lg"
                />
                
                <div className="leading-tight">
                  <h4 className="font-sans font-bold text-white text-md">
                    {activeTestimonial.name}
                  </h4>
                  <span className="text-[10px] text-brand-gold font-mono mt-0.5 block tracking-wider uppercase">
                    {activeTestimonial.country}
                  </span>
                  <span className="text-xs text-slate-400 font-mono block mt-1 leading-tight">
                    {activeTestimonial.program}
                  </span>
                </div>
              </div>

              {/* RHS Quote text Column */}
              <div className="md:col-span-8 space-y-4">
                <Quote className="w-8 h-8 text-brand-gold/60" />
                
                <p className="text-sm sm:text-base text-slate-200 font-light italic leading-relaxed">
                  "{isEn ? activeTestimonial.quote : activeTestimonial.quoteDe}"
                </p>

                <div className="pt-4 border-t border-slate-850 flex gap-2 items-center text-xs font-mono text-slate-350">
                  <Landmark className="w-4.5 h-4.5 text-brand-gold" />
                  <span>
                    {isEn ? `Current Role: ${activeTestimonial.role}` : `Position: ${activeTestimonial.roleDe}`}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls arrows floating */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              id="testimonial-prev-btn"
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-brand-blue-medium hover:bg-brand-blue-light text-slate-300 hover:text-white border border-slate-800 cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-brand-blue-medium hover:bg-brand-blue-light text-slate-300 hover:text-white border border-slate-800 cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
