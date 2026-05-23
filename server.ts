import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      try {
        aiClient = new GoogleGenAI({
          apiKey: key,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });
      } catch (err) {
        console.error("Failed to initialize GoogleGenAI client:", err);
      }
    }
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date() });
  });

  // AI Engineering Study Assistant
  app.post("/api/study-assistant", async (req, res) => {
    const { topic, question, language } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: "Question is required." });
    }

    const client = getGeminiClient();
    
    const systemPrompt = `You are "Professor GIAET", a world-class engineering professor at GIAET (Global Institute of Advanced Engineering & Technology in Stuttgart, Germany).
The student is asking a question about the engineering topic: "${topic || 'General Engineering'}".
Answer in an academic, professional, and clear manner. 
Use markdown layout, headers, bullet points, and appropriate formulas in text format (LaTeX formatting is fine) where helpful.
Answer in the requested language: ${language === "de" ? "German" : "English"}.
Keep your explanation solid, accurate, highly technical but easy for a BSc student to understand.`;

    if (client) {
      try {
        const response = await client.models.generateContent({
          model: "gemini-3.5-flash",
          contents: question,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.7,
          }
        });

        const text = response.text || "No response received from GIAET AI Processor.";
        return res.json({ answer: text, mode: "live" });
      } catch (error: any) {
        console.error("Gemini API error, falling back:", error.message || error);
        // Fallback to simulated expert explanation upon failure
      }
    }

    // High quality simulated tutoring fallback
    const fallbackAnswersEn: Record<string, string> = {
      thermodynamics: `### Thermodynamics Response from GIAET Engineering Faculty
Thank you for your question regarding **Thermodynamics**. Here is your academic guide:

1. **First Law Principles (Conservation of Energy):**
   $$\\Delta U = Q - W$$
   Internally stored molecular thermal energy ($\\Delta U$) equals the added heat ($Q$) minus mechanical work performed ($W$).

2. **Carnot Cycle Efficiency:**
   For a cycle operating between hot reservoir $T_H$ and cold reservoir $T_C$ (expressed in Kelvin), the limit of thermodynamic performance is:
   $$\\eta_{\\text{max}} = 1 - \\frac{T_C}{T_H}$$

*Recommendation:* Review GIAET Virtual Simulators in the Student Portal to see this engine in physical motion. Let us know if we can compile deeper numerical analyses!`,
      robotics: `### Robotics & Kinematics Insights from GIAET Automation Faculty
Your inquiry into **Robotics System Controls** is an essential part of automation:

1. **Forward vs. Inverse Kinematics:**
   * **Forward Kinematics:** Computes the end-effector coordinate position $(X, Y, Z)$ using joint angles $(\\theta_1, \\theta_2, \\dots)$.
   * **Inverse Kinematics:** Solves for the individual joint rotational configurations necessary to position the arm payload at a given spatial grid location.

2. **PID Regulators:**
   To govern servo actuation smoothly, the classic error feedback algorithm operates as:
   $$u(t) = K_p e(t) + K_i \\int o(t) dt + K_d \\frac{de(t)}{dt}$$

*Next Steps:* Load the mechanical arm simulator on GIAET dashboard level 2 to adjust these PID constants and observe path stabilization live.`,
      ai: `### Artificial Intelligence response from GIAET Computer Science Faculty
Welcome to **Advanced Machine Learning Systems**. Here is a formal overview:

1. **Multi-layer Feedforward Architecture:**
   Each node activates according to a weighted summation followed by a non-linear activation $\\sigma(z)$:
   $$a^{[l]} = \\sigma(W^{[l]} a^{[l-1]} + b^{[l]})$$

2. **Gradient Descent Backpropagation:**
   Calculates the partial derivative of cost function $C$ with respect to each training weight $W_{jk}$ in previous nodes to minimize system output error systematically:
   $$\\frac{\\partial C}{\\partial W_{jk}^{[l]}} = a_k^{[l-1]} \\delta_j^{[l]}$$

*Laboratory Task:* Access GIAET Code Playground to test this backpropagation loop on simple linear datasets, compiling your results in real time.`
    };

    const fallbackAnswersDe: Record<string, string> = {
      thermodynamics: `### Thermodynamik-Antwort der GIAET-Maschinenbaufakultät
Vielen Dank für Ihre akademische Anfrage zum Thema **Thermodynamik**. Hier ist Ihre Fachübersicht:

1. **Erster Hauptsatz (Energieerhaltungssatz):**
   $$\\Delta U = Q - W$$
   Die Änderung der inneren Energie ($\\Delta U$) entspricht der zugeführten Wärme ($Q$) minus der verrichteten Arbeit ($W$).

2. **Carnot-Wirkungsgrad:**
   Für ideale Wärmekraftmaschinen zwischen Heiß- ($T_H$) und Kalttemperaturen ($T_C$):
   $$\\eta_{\\text{max}} = 1 - \\frac{T_C}{T_H}$$

*Tipp:* Nutzen Sie den Thermodynamic Simulator im GIAET-Studierendenportal für interaktive Kreisprozessanalysen.`,
      robotics: `### Robotik- und Steuerungstechnik-Antwort der GIAET-Automatisierungsfakultät
Ihre Anfrage zu **Robotik-Steuerungskreisen** betrifft ein Kerngebiet moderner Automatisierungstechnik:

1. **Kinematische Transformationen:**
   * **Vorwärtskinematik:** Errechnet die Endeffektor-Pose $(X, Y, Z)$ aus den vorgegebenen Gelenkwinkeln $(\\theta_1, \\theta_2, \\dots)$.
   * **Inverskinematik:** Errechnet die Gelenkwinkel, die notwendig sind, um den Greifpunkt an eine Zielkoordinate zu führen.

2. **PID-Regelkreise:**
   $$u(t) = K_p e(t) + K_i \\int e(t) dt + K_d \\frac{de(t)}{dt}$$

*Praxis:* Nutzen Sie unseren Roboterarm-Simulator im Portal, um Gelenkwinkel interaktiv zu steuern.`,
      ai: `### KI & Neuronale Netze Antwort der GIAET-Informatikfakultät
Willkommen im Fachgebiet **Angewandte Künstliche Intelligenz**. Hier ist eine kurze mathematische Übersicht des Backpropagation-Prozesses:

1. **Vorwärtsaktivierung eines Neurons:**
   $$a^{[l]} = \\sigma(W^{[l]} a^{[l-1]} + b^{[l]})$$
   Dabei ist $\\sigma$ die Aktivierungsfunktion (z. B. ReLU oder Sigmoid).

2. **Gewichts-Gradientenberechnung:**
   $$\\frac{\\partial C}{\\partial W_{jk}^{[l]}} = a_k^{[l-1]} \\delta_j^{[l]}$$

*Code-Workplace:* Gehen Sie im Studierenden-Dashboard auf den 'Code Playground', um ein 3-Schicht-Netzwerk eigenhändig zu programmieren.`
    };

    const fallbackKey = (topic || "general").toLowerCase();
    
    // Choose appropriate fallback text or construct a generic one based on the student query!
    let matchingAnswer = language === "de" 
      ? fallbackAnswersDe[fallbackKey] 
      : fallbackAnswersEn[fallbackKey];

    if (!matchingAnswer) {
      if (language === "de") {
        matchingAnswer = `### GIAET Campus-Assistent (Simulation)
**Über:** "${topic}"
**Ihre Frage:** "${question}"

Vielen Dank für Ihre Anfrage an die Fakultät für Ingenieurwissenschaften des GIAET. 

* **Kernkonzept:** Der Lernstoff zu "${topic}" integriert reale Industriespezifikationen mit akademischen Grundlagen der deutschen Ingenieursausbildung.
* **Virtuelles Labor:** Zu diesem Bereich bieten wir anwendungsbezogene interaktive Praxisversuche an.
* **Professoren-Empfehlung:** Vertiefen Sie die Formeln der Strömungsmechanik und der Steuerungstheorie in Ihrer wöchentlichen Sprechstunde.

*(Hinweis: Der GIAET AI-Prozessor läuft im hochkompatiblen akademischen Simulationsmodus. Verbinden Sie Ihren GEMINI_API_KEY in den Einstellungen für Live-Antworten!)*`;
      } else {
        matchingAnswer = `### GIAET Academic Learning Assistant (Simulation)
**Topic:** "${topic}"
**Your Question:** "${question}"

Thank you for contacting the engineering faculty at GIAET.

* **Core Analysis:** The subject of "${topic}" emphasizes practical application, connecting industrial challenges with academic theory.
* **Virtual Practicum:** Check the "Virtual Lab" section in your portal to launch interactive experiments for this field.
* **Professor Recommendation:** We highly advise consulting the core literature on digital twins and modern automation models in GIAET's Digital Library.

*(Note: GIAET AI Processor is running in an academic simulation mode. Connect a valid GEMINI_API_KEY in settings to support real-time answers!)*`;
      }
    }

    // Add a randomized brief processing delay to simulate real server-side analytical reasoning
    setTimeout(() => {
      res.json({ answer: matchingAnswer, mode: "simulation" });
    }, 400);
  });

  // Setup Vite middleware for development, otherwise serve the compiled static build files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[GIAET Server] Fullstack environment loaded. Server active on: http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical server bootstrap error:", error);
});
