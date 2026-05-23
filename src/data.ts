import { Faculty, DegreeProgram, Testimonial, Partner } from "./types";

export const MOTTO_EN = "Engineering Innovation for a Sustainable Global Future";
export const MOTTO_DE = "Engineering-Innovation für eine nachhaltige globale Zukunft";

export const STATS = [
  { id: "stat-1", count: "20,000+", label: "Global Students", labelDe: "Globale Studierende", subtitle: "Online & Hybrid", subtitleDe: "Online & Hybrid" },
  { id: "stat-2", count: "60+", label: "Nationalities Represented", labelDe: "Vertretene Nationen", subtitle: "Diverse Academic Body", subtitleDe: "Diverse akademische Gemeinschaft" },
  { id: "stat-3", count: "500+", label: "World-Class Faculty", labelDe: "Weltklasse-Dozierende", subtitle: "Ph.D. & Industry Experts", subtitleDe: "Promovierte & Industrie-Experten" },
  { id: "stat-4", count: "95%", label: "Graduate Employability Rate", labelDe: "Vermittlungsquote", subtitle: "Within 6 months", subtitleDe: "Innerhalb von 6 Monaten" },
  { id: "stat-5", count: "150+", label: "Industry Partners", labelDe: "Industrie-Partner", subtitle: "Leading European Firms", subtitleDe: "Führende europäische Unternehmen" }
];

export const FACULTIES: Faculty[] = [
  {
    id: "fac-mech",
    name: "School of Mechanical Engineering",
    nameDe: "Fakultät für Maschinenbau",
    short: "SME",
    cardImage: "https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?auto=format&fit=crop&w=800&q=80",
    overview: "Pioneering the future of physical machinery, fluid dynamics, and thermodynamic cycles with modern computer-aided design and virtual structural testing environments.",
    overviewDe: "Wegweisend für die Zukunft physischer Maschinen, Strömungsdynamik und thermodynamischer Kreisläufe mit modernen CAD- und virtuellen Strukturprüfumgebungen.",
    durationDe: "6 Semester (Vollzeit) / 8-12 Semester (Teilzeit)",
    durationEn: "6 Semesters (Full-time) / 8-12 Semesters (Part-time)",
    credits: "180 ECTS",
    careerPaths: ["Automotive Engineer", "R&D Specialist", "Aerospace Designer", "CAD/CAE Systems Architect"],
    careerPathsDe: ["Fahrzeugingenieur", "F&E-Spezialist", "Luftfahrt-Designer", "CAD/CAE-Systemarchitekt"]
  },
  {
    id: "fac-ipe",
    name: "School of Industrial & Production Engineering",
    nameDe: "Fakultät für Industrie- und Produktionstechnik",
    short: "SIPE",
    cardImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    overview: "Optimizing comprehensive fabrication workflows, design networks, manufacturing systems, and industrial operations for peak sustainable efficiency.",
    overviewDe: "Optimierung umfassender Fertigungsabläufe, Design-Netzwerke, Fabrikatssysteme und industrieller Abläufe für maximale nachhaltige Effizienz.",
    durationDe: "6 Semester",
    durationEn: "6 Semesters",
    credits: "180 ECTS",
    careerPaths: ["Supply Chain Director", "Operations Lead", "Production Auditor", "Quality Assurance Manager"],
    careerPathsDe: ["Supply-Chain-Direktor", "Betriebsleiter", "Produktionsprüfer", "Qualitätssicherungs-Manager"]
  },
  {
    id: "fac-automation",
    name: "School of Automation Engineering",
    nameDe: "Fakultät für Automatisierungstechnik",
    short: "SAE",
    cardImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    overview: "Unifying cyber-physical controllers, smart robotics systems, programmable logic controllers (PLCs), and industry 4.0 paradigms into autonomous production units.",
    overviewDe: "Vereinigung von cyber-physischen Steuerungen, intelligenten Robotersystemen, speicherprogrammierbaren Steuerungen (SPS) und Industrie 4.0-Paradigmen zu autonomen Produktionseinheiten.",
    durationDe: "6 Semester",
    durationEn: "6 Semesters",
    credits: "180 ECTS",
    careerPaths: ["Robotics Systems Architect", "PAC/PLC Integrator", "Automation Architect", "Industrial IoT Expert"],
    careerPathsDe: ["Robotersystem-Architekt", "SPS-Integrator", "Automatisierungs-Architekt", "Industrieller IoT-Experte"]
  },
  {
    id: "fac-eee",
    name: "School of Electrical & Electronic Engineering",
    nameDe: "Fakultät für Elektrotechnik & Informationstechnik",
    short: "SEEE",
    cardImage: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
    overview: "Driving global micro-level circuit configurations, sustainable smart electric grids, clean energy conversions, and advanced electronic design automation.",
    overviewDe: "Entwicklung von Mikro-Stromkreisen, nachhaltigen intelligenten Stromnetzen, sauberen Energieumwandlungen und fortschrittlicher Elektronik-Design-Automatisierung.",
    durationDe: "6 Semester",
    durationEn: "6 Semesters",
    credits: "180 ECTS",
    careerPaths: ["Hardware Design Engineer", "Smart Grid Coordinator", "Power Network Architect", "Renewable Grid Analyst"],
    careerPathsDe: ["Hardware-Entwicklungsingenieur", "Smart-Grid-Koordinator", "Stromnetz-Architekt", "Netzintegrations-Analyst für Erneuerbare"]
  },
  {
    id: "fac-cse",
    name: "School of Computer Science & Engineering",
    nameDe: "Fakultät für Informatik & Softwaretechnik",
    short: "SCSE",
    cardImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    overview: "Structuring advanced algorithms, neural network configurations, distributed web systems, and high-performance server architectures.",
    overviewDe: "Strukturierung fortschrittlicher Algorithmen, neuronaler Netzwerkkonfigurationen, verteilter Websysteme und Hochleistungs-Serverarchitekturen.",
    durationDe: "6 Semester",
    durationEn: "6 Semesters",
    credits: "180 ECTS",
    careerPaths: ["AI & Machine Learning Architect", "Fullstack Systems Integrator", "Cloud Security Strategist", "Big Data Engineer"],
    careerPathsDe: ["KI- & ML-Architekt", "Full-Stack-Systemintegrator", "Cloud-Security-Stratege", "Big-Data-Ingenieur"]
  },
  {
    id: "fac-energy",
    name: "School of Energy Technology",
    nameDe: "Fakultät für Energietechnik",
    short: "SET",
    cardImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    overview: "Pioneering highly efficient photovoltaic conversion arrays, smart urban grid energy architectures, next-gen battery storage solutions, and wind harvesting.",
    overviewDe: "Pionierarbeit bei hocheffizienten Photovoltaik-Anlagen, intelligenten städtischen Stromnetzen, Batteriespeicherlösungen und Windkraftnutzung.",
    durationDe: "6 Semester",
    durationEn: "6 Semesters",
    credits: "180 ECTS",
    careerPaths: ["Sustainable Energy Auditor", "Solar Infrastructure Project Lead", "Energy Storage Designer", "Smart Infrastructure Consultant"],
    careerPathsDe: ["Auditor für nachhaltige Energie", "Projektleiter für Solar-Infrastruktur", "Entwickler für Energiespeicher", "Berater für intelligente Infrastruktur"]
  }
];

export const DEGREE_PROGRAMS: DegreeProgram[] = [
  {
    id: "bsc-mech",
    title: "BSc in Mechanical Engineering",
    titleDe: "B.Sc. Maschinenbau & Energiesysteme",
    facultyId: "fac-mech",
    description: "Our world-class Mechanical Engineering program provides global learners with complete knowledge of fluid mechanics, thermodynamic behaviors, structures, and automated Computer-Aided Engineering tools.",
    descriptionDe: "Unser erstklassiges Maschinenbau-Programm vermittelt globalen Lernenden umfassende Kenntnisse in Strömungsmechanik, Thermodynamik, Bauteilprüfung und computergestützten Entwicklungswerkzeugen.",
    duration: "6 Semesters (3 Years)",
    durationDe: "6 Semester (3 Jahre)",
    credits: "180 ECTS Points",
    tuition: "€3,900 / Semester",
    tuitionDe: "3.900 € / Semester",
    virtualLabType: "Thermodynamics Heat Engine & CAD Simulator",
    careerOutcomes: [
      "Aerospace Systems Tester",
      "Automotive Engine Developer at Mercedes/BMW",
      "Thermal Control Systems Specialist",
      "Structural Stress Analysis Expert"
    ],
    careerOutcomesDe: [
      "Prüfer für Luftfahrtsysteme",
      "Motorenentwickler in der Automobilindustrie",
      "Spezialist für thermische Regelsysteme",
      "Experte für Strukturspannungsanalyse"
    ],
    facultyMembers: [
      { name: "Prof. Dr.-Ing. Hans Müller", role: "Dean of SME", roleDe: "Dekan für Maschinenbau", avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=120&h=120&q=80", education: "Ph.D. in Fluid Dynamics, University of Stuttgart" },
      { name: "Dr. Elena Petrova", role: "Assistant Professor", roleDe: "Stellvertretende Professorin", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80", education: "D.Sc. in Materials Engineering, TU Munich" }
    ],
    semesters: [
      {
        number: 1,
        courses: [
          { code: "MECH-101", name: "Engineering Mathematics I", nameDe: "Höhere Mathematik I", credits: 6 },
          { code: "MECH-102", name: "Technical Mechanics I (Statics)", nameDe: "Technische Mechanik I (Statik)", credits: 6 },
          { code: "MECH-103", name: "Introduction to CAD systems", nameDe: "Einführung in CAD-Systeme", credits: 6 },
          { code: "MECH-104", name: "Materials Sciences & Physics", nameDe: "Werkstoffkunde & Werkstoffprüfung", credits: 6 }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "MECH-201", name: "Thermodynamics fundamentals", nameDe: "Grundlagen der Thermodynamik", credits: 6 },
          { code: "MECH-202", name: "Technical Mechanics II (Kinetics)", nameDe: "Technische Mechanik II (Kinetik)", credits: 6 },
          { code: "MECH-203", name: "Fluid Mechanics & Hydrodynamics", nameDe: "Strömungsmechanik & Hydrodynamik", credits: 6 },
          { code: "MECH-204", name: "Machine Architecture Design Basics", nameDe: "Grundlagen der Maschinenelemente", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "bsc-ipe",
    title: "BSc in Industrial & Production Engineering",
    titleDe: "B.Sc. Industrie- und Produktionstechnik",
    facultyId: "fac-ipe",
    description: "This modern curriculum covers manufacturing layouts, quality frameworks, industrial operations, and optimization systems to prep you for managing major European and global supply networks directly.",
    descriptionDe: "Dieses moderne Curriculum umfasst Fertigungslayouts, Qualitätsframeworks, Betriebsabläufe und Optimierungssysteme, um Sie optimal auf das Management europäischer und globaler Liefernetzwerke vorzubereiten.",
    duration: "6 Semesters (3 Years)",
    durationDe: "6 Semester (3 Jahre)",
    credits: "180 ECTS Points",
    tuition: "€3,900 / Semester",
    tuitionDe: "3.900 € / Semester",
    virtualLabType: "Assembly Line Optimization & Bottleneck Simulator",
    careerOutcomes: [
      "Industrial Plant Director",
      "Supply Chain Strategist at DHL/Porsche",
      "Lean Engineering Advisor",
      "Lean Operations Auditor"
    ],
    careerOutcomesDe: [
      "Direktor für Industrieanlagen",
      "Supply-Chain-Stratege bei Logistikunternehmen",
      "Berater für Lean Engineering",
      "Prüfer für schlanke Betriebsabläufe"
    ],
    facultyMembers: [
      { name: "Prof. Dr. Gerhard Schmidt", role: "Head of SIPE Research", roleDe: "Forschungsleiter SIPE", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80", education: "Ph.D. in Industrial Engineering, RWTH Aachen" }
    ],
    semesters: [
      {
        number: 1,
        courses: [
          { code: "IPE-101", name: "Manufacturing Workstations Layout", nameDe: "Layout von Fertigungsarbeitsplätzen", credits: 6 },
          { code: "IPE-102", name: "Operations Management Basics", nameDe: "Grundlagen des Operations Management", credits: 6 },
          { code: "IPE-103", name: "Engineering Design Standards", nameDe: "Konstruktions- und Industrie-Standards", credits: 6 },
          { code: "IPE-104", name: "Intro to Modern Industry 4.0", nameDe: "Einführung in Industrie 4.0", credits: 6 }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "IPE-201", name: "Logistics Optimization", nameDe: "Optimierung von Logistikabläufen", credits: 6 },
          { code: "IPE-202", name: "Advanced Statistical Quality Controls", nameDe: "Erweiterte statistische Qualitätskontrollen", credits: 6 },
          { code: "IPE-203", name: "Six Sigma Planning Modes", nameDe: "Lean Six Sigma Planungsmethoden", credits: 6 },
          { code: "IPE-204", name: "Manufacturing Systems Engineering", nameDe: "Systemtechnik in der Fertigung", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "bsc-automation",
    title: "BSc in Automation Engineering",
    titleDe: "B.Sc. Automatisierungstechnik",
    facultyId: "fac-automation",
    description: "Focus on industrial automation frameworks, programmable controllers (PLC), advanced sensors, robotic arm manipulation metrics, and integrated cyber-physical networks (IoT).",
    descriptionDe: "Schwerpunkte sind industrielle Automatisierungsframeworks, speicherprogrammierbare Steuerungen (SPS), hochentwickelte Sensorik, Steuerungsmetriken für Roboterarme und integrierte cyber-physische Netzwerke.",
    duration: "6 Semesters (3 Years)",
    durationDe: "6 Semester (3 Jahre)",
    credits: "180 ECTS Points",
    tuition: "€4,100 / Semester",
    tuitionDe: "4.100 € / Semester",
    virtualLabType: "PLC Programming Lab & Robotic Arm Controller",
    careerOutcomes: [
      "Automation Control Room Engineer at Siemens",
      "Robotic Systems Integrator",
      "Smart Factory Coordinator",
      "SCADA Systems Specialist"
    ],
    careerOutcomesDe: [
      "Ingenieur für Automatisierungs-Leitstände",
      "Roboter-Systemintegrator",
      "Koordinator für Smart Factories",
      "Spezialist für SCADA-Systeme"
    ],
    facultyMembers: [
      { name: "Prof. Dr.-Ing. Dieter Krause", role: "Dean of Automation", roleDe: "Dekan für Automatisierung", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80", education: "Ph.D. in Control Engineering, Karlsruhe Institute of Technology (KIT)" }
    ],
    semesters: [
      {
        number: 1,
        courses: [
          { code: "AUTO-101", name: "Foundations of Control Systems", nameDe: "Grundlagen der Steuerungstechnik", credits: 6 },
          { code: "AUTO-102", name: "Digital Systems Logic", nameDe: "Digitaltechnik und Logikschaltungen", credits: 6 },
          { code: "AUTO-103", name: "Advanced Sensor Architectures", nameDe: "Fortschrittliche Sensorarchitekturen", credits: 6 },
          { code: "AUTO-104", name: "C Programming for Microcontrollers", nameDe: "C-Programmierung für Mikrocontroller", credits: 6 }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "AUTO-201", name: "PLC Programming (IEC 61131-3)", nameDe: "SPS-Programmierung (IEC 61131-3)", credits: 6 },
          { code: "AUTO-202", name: "Robotics Dynamics & Kinematics", nameDe: "Roboterdynamik & Kinematik", credits: 6 },
          { code: "AUTO-203", name: "SCADA systems & Industrial networks", nameDe: "SCADA-Systeme & Industrielle Netzwerke", credits: 6 },
          { code: "AUTO-204", name: "Cyber-Physical systems & IoT", nameDe: "Cyber-physische Systeme & IoT", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "bsc-eee",
    title: "BSc in Electrical & Electronic Engineering",
    titleDe: "B.Sc. Elektrotechnik & Elektronik",
    facultyId: "fac-eee",
    description: "From low-power microchips and microcontrollers to ultra-scalable continental energy grids and solar converters, this dynamic course ensures core competencies in electrical system modeling.",
    descriptionDe: "Von stromsparenden Mikrochips und Mikrocontrollern bis hin zu kontinentalen Stromnetzen und Solarwechselrichtern vermittelt dieser dynamische Studiengang Kernkompetenzen in der elektrischen Systemmodellierung.",
    duration: "6 Semesters (3 Years)",
    durationDe: "6 Semester (3 Jahre)",
    credits: "180 ECTS Points",
    tuition: "€3,900 / Semester",
    tuitionDe: "3.900 € / Semester",
    virtualLabType: "Oscilloscope Waveform Lab & Circuit Simulator",
    careerOutcomes: [
      "ASIC Circuit Designer",
      "Power Grid Systems Operator at TransnetBW",
      "Telecommunication Architect",
      "Electric Vehicle Powertrain Specialist"
    ],
    careerOutcomesDe: [
      "ASIC-Schaltungsdesigner",
      "Netzleitstellen-Ingenieur bei Stromnetzbetreibern",
      "Architekt für Telekommunikationssysteme",
      "Spezialist für Elektrofahrzeug-Antriebsstränge"
    ],
    facultyMembers: [
      { name: "Prof. Dr. Sarah Becker", role: "EEE Chair", roleDe: "Lehrstuhlinhaberin EEE", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80", education: "Ph.D. in Microelectronics, TU Berlin" }
    ],
    semesters: [
      {
        number: 1,
        courses: [
          { code: "EEE-101", name: "Electrical Circuit Principles", nameDe: "Grundlagen der Elektrotechnik I", credits: 6 },
          { code: "EEE-102", name: "Linear Systems Analysis", nameDe: "Lineare Systemanalyse", credits: 6 },
          { code: "EEE-103", name: "Applied Optics & Solid Physics", nameDe: "Angewandte Optik & Festkörperphysik", credits: 6 },
          { code: "EEE-104", name: "Introduction to Electromagnetics", nameDe: "Einführung in Elektromagnetismus", credits: 6 }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "EEE-201", name: "Analog Electronics", nameDe: "Analoge Elektronikschaltungen", credits: 6 },
          { code: "EEE-202", name: "Power Electronics Conversions", nameDe: "Leistungselektronische Konversionen", credits: 6 },
          { code: "EEE-203", name: "Microcontroller Design basics", nameDe: "Grundlagen der Mikrocontrollertechnik", credits: 6 },
          { code: "EEE-204", name: "Renewable Generation Grid Integration", nameDe: "Netzintegration erneuerbarer Energien", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "bsc-cse",
    title: "BSc in Computer Science & Engineering",
    titleDe: "B.Sc. Informatik & IT-Engineering",
    facultyId: "fac-cse",
    description: "Specializing in advanced programming concepts, algorithms optimization, server infrastructure architecture, modern web development systems, and multi-tier artificial intelligence pipelines.",
    descriptionDe: "Spezialisierung auf fortgeschrittene Programmierkonzepte, Algorithmenoptimierung, Serverinfrastrukturarchitekturen, moderne Websysteme und mehrstufige Pipelines für künstliche Intelligenz.",
    duration: "6 Semesters (3 Years)",
    durationDe: "6 Semester (3 Jahre)",
    credits: "180 ECTS Points",
    tuition: "€4,150 / Semester",
    tuitionDe: "4.150 € / Semester",
    virtualLabType: "Interactive Code Workbench & AI Model Playground",
    careerOutcomes: [
      "AI & Machine Learning Architect at SAP / Google",
      "Fullstack Systems Developer",
      "Lead Cyber Defense Strategist",
      "High-Performance Cloud Architect"
    ],
    careerOutcomesDe: [
      "KI- und ML-Architekt bei Technologiefirmen",
      "Full-Stack-Systementwickler",
      "Leitender Cyber-Defense-Stratege",
      "Cloud-Infrastruktur-Architekt"
    ],
    facultyMembers: [
      { name: "Prof. Dr. Marcus Wagner", role: "Dean of CS", roleDe: "Dekan für Informatik", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=120&h=120&q=80", education: "Ph.D. in Computer Science, ETH Zurich" },
      { name: "Dr. Amira Yusuf", role: "Lecturer in Machine Learning", roleDe: "Dozentin für Machine Learning", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&h=120&q=80", education: "Ph.D. in Machine Learning, Cambridge University" }
    ],
    semesters: [
      {
        number: 1,
        courses: [
          { code: "CSE-101", name: "Introduction to Computer Science (Python)", nameDe: "Einführung in die Informatik (Python)", credits: 6 },
          { code: "CSE-102", name: "Discrete Structures & Mathematics", nameDe: "Diskrete Mathematik", credits: 6 },
          { code: "CSE-103", name: "Data Structures & Complexity Algorithms", nameDe: "Datenstrukturen & Komplexität von Algorithmen", credits: 6 },
          { code: "CSE-104", name: "Computer Architecture Design", nameDe: "Rechnerarchitektur und Hardware-Entwurf", credits: 6 }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "CSE-201", name: "Software Engineering & Object Design (Java)", nameDe: "Software Engineering & Objektorientierter Entwurf (Java)", credits: 6 },
          { code: "CSE-202", name: "Database Engineering & SQL Architecture", nameDe: "Datenbanksysteme & SQL-Infrastruktur", credits: 6 },
          { code: "CSE-203", name: "Web Engineering Systems & APIs", nameDe: "Web-Engineering-Systeme & APIs", credits: 6 },
          { code: "CSE-204", name: "Artificial Intelligence Foundations", nameDe: "Grundlagen der Künstlichen Intelligenz", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "bsc-energy",
    title: "BSc in Energy Technology",
    titleDe: "B.Sc. Energietechnik",
    facultyId: "fac-energy",
    description: "Master modern wind turbine kinetics, smart regional micro-grid distribution maps, advanced industrial fuel cells, carbon capture setups, and deep photovoltaic physics for direct green energy integration.",
    descriptionDe: "Meistern Sie moderne Windkraftkinetik, intelligente regionale Mikrostromnetze, hochentwickelte Brennstoffzellen und elektrochemische Speicher für die Energiewende.",
    duration: "6 Semesters (3 Years)",
    durationDe: "6 Semester (3 Jahre)",
    credits: "180 ECTS Points",
    tuition: "€3,900 / Semester",
    tuitionDe: "3.900 € / Semester",
    virtualLabType: "Solar Panel Angle Collector & Turbine Efficiency Lab",
    careerOutcomes: [
      "Sustainable Grid Coordinator",
      "Solar Panel Array Designer",
      "Offshore Wind Project Analyst",
      "Bio-Energy Systems Architect"
    ],
    careerOutcomesDe: [
      "Koordinator für nachhaltige Stromnetze",
      "Planer für Photovoltaikanlagen",
      "Projekt-Analyst für Offshore-Windparks",
      "Architect für Bio-Energiesysteme"
    ],
    facultyMembers: [
      { name: "Prof. Dr. Sophia Lindemann", role: "Sustainable Energy Chair", roleDe: "Lehrstuhl Energietechnik", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80", education: "Ph.D. in Solar Energy Physics, University of Freiburg" }
    ],
    semesters: [
      {
        number: 1,
        courses: [
          { code: "ENER-101", name: "Thermodynamics of Green Cycles", nameDe: "Thermodynamik grüner Kreisprozesse", credits: 6 },
          { code: "ENER-102", name: "Fluid Power and Hydraulic Turbines", nameDe: "Fluidtechnik und hydraulische Turbinen", credits: 6 },
          { code: "ENER-103", name: "Introduction to Renewable Energies", nameDe: "Einführung in Erneuerbare Energien", credits: 6 },
          { code: "ENER-104", name: "General Chemistry of Energy Fuels", nameDe: "Grundlagen der Energieträgerchemie", credits: 6 }
        ]
      },
      {
        number: 2,
        courses: [
          { code: "ENER-201", name: "Solar Thermal & Photovoltaics", nameDe: "Solarthermie & Photovoltaik", credits: 6 },
          { code: "ENER-202", name: "Wind Generation Kinetics", nameDe: "Kinetik der Windkraftgewinnung", credits: 6 },
          { code: "ENER-203", name: "Smart Grid Power Distribution", nameDe: "Verteilungstechnologien in Smart Grids", credits: 6 },
          { code: "ENER-204", name: "Sustainable Fuel Cells & Batteries", nameDe: "Nachhaltige Brennstoffzellen & Akkumulatoren", credits: 6 }
        ]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lukas Weber",
    role: "Automotive Engineer at Porsche AG",
    roleDe: "Fahrzeugingenieur bei Porsche AG",
    country: "Germany",
    quote: "GIAET allowed me to study mechanical engineering of unparalleled quality while working full-time. The Virtual Lab is highly precise, mapping fluid kinetics perfectly.",
    quoteDe: "GIAET ermöglichte mir ein Maschinenbaustudium auf beispiellosem Niveau, während ich vollzeitnah arbeitete. Die virtuellen Labore analysieren Strömungsmechanik extrem präzise.",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=150&h=150&q=80",
    program: "BSc Mechanical Engineering (Graduate 2025)"
  },
  {
    name: "Yuki Tanaka",
    role: "Robotics Dev, Fanuc Corp",
    roleDe: "Robotik-Entwicklerin bei Fanuc Corporation",
    country: "Japan",
    quote: "GIAET's platform works beautifully in any timezone. The Automation engineering lab's PLC interactive code suite helped me transition from hardware technician to robot automation lead.",
    quoteDe: "Die Lernplattform von GIAET lässt sich perfekt in jede Zeitzone integrieren. Die SPS-Steuerungen und Programmierwerkzeuge halfen mir extrem im Übergang zur Robotikleitung.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    program: "BSc Automation Engineering (Student Level III)"
  },
  {
    name: "Carlos Mendoza",
    role: "Frontend Team Lead, Globant",
    roleDe: "Frontend-Teamleiter bei Globant",
    country: "Colombia",
    quote: "Acquiring a certified German accredited Bachelor degree completely online helped me secure a high-ticket tech position in Germany. Highly practical algorithm challenges!",
    quoteDe: "Die staatlich anerkannte deutsche Akkreditierung des GIAET-Bachelors hat mir enorm geholfen, eine Top-Tech-Stelle in Deutschland zu finden. Extrem praxisnahe Algorithmen-Herausforderungen!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    program: "BSc Computer Science & Engineering (Graduate 2024)"
  },
  {
    name: "Elena Rostova",
    role: "Smart Infrastructure Consultant, E.ON",
    roleDe: "Beraterin für Smart Infrastructure bei E.ON",
    country: "Poland",
    quote: "Doing laboratory modeling on solar panel efficiencies online with accurate GIAET Stuttgart simulation models was phenomenal. Germany is the king of sustainable energy planning.",
    quoteDe: "Die Labor-Simulationen des GIAET zur Solarmodul-Ausrichtung und Wirkungsgradberechnung waren absolut phänomenal. Deutschland setzt den Standard für nachhaltige Stromnetze.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    program: "BSc Energy Technology (Student Level II)"
  }
];

export const PARTNERS: Partner[] = [
  { name: "Siemens", logo: "⚡", industry: "Automation & Energy", internships: ["SCADA Systems Intern (Stuttgart)", "Power Grid Trainee (Munich)"], internshipsDe: ["SCADA-Systeme Praktikum (Stuttgart)", "Stromnetz Trainee-Stelle (München)"] },
  { name: "Bosch", logo: "🚗", industry: "Automotive & Sensor Tech", internships: ["ADAS Computer Vision Intern (Abstatt)", "Microcontroller R&D Student (Stuttgart)"], internshipsDe: ["ADAS Bildverarbeitung Praktikum (Abstatt)", "Mikrocontroller Entwicklung (Stuttgart)"] },
  { name: "BMW", logo: "⚙️", industry: "Automotive Systems", internships: ["EV Thermal Control Intern (Munich)", "Autonomous Robotic Assemblers Tech"], internshipsDe: ["Thermisches Management E-Auto (München)", "Werkstudent Autonome Montageroboter"] },
  { name: "SAP", logo: "💻", industry: "Enterprise Software & Cloud", internships: ["AI Integration Software Architect Intern", "Big Data Analytics Intern (Walldorf)"], internshipsDe: ["Praktikant KI-Software-Architektur", "Big-Data Analytik Werkstudent (Walldorf)"] },
  { name: "Volkswagen", logo: "🚙", industry: "Automobile & Manufacturing", internships: ["Production Line Optimization Scholar", "Electric Battery Storage Intern"], internshipsDe: ["Prozessingenieur Fertigungstechnik", "Praktikant Batteriezellenforschung"] }
];

export const RESEARCH_PROJECTS = [
  { id: "res-1", title: "Smart Microgrids Framework", area: "Renewable Energy", lead: "Prof. Dr. Sophia Lindemann", desc: "Modeling autonomous decentralized smart grid architectures for southern Germany urban clusters.", descDe: "Modellierung autonomer, dezentraler Smart-Grid-Architekturen für urbane Ballungsräume in Süddeutschland." },
  { id: "res-2", title: "Stuttgart Collaborative Robotics (ScoBot)", area: "Robotics", lead: "Prof. Dr.-Ing. Dieter Krause", desc: "Collaborative cyber-physical robots learning safe high-speed tactile feedback configurations inside assembly lines.", descDe: "Kollaborative cyber-physische Roboter lernen sicheres hochempfindliches taktiles Feedback in Montagehallen." },
  { id: "res-3", title: "Explainable Deep Learning for PLC Diagnostic Code", area: "AI in Engineering", lead: "Prof. Dr. Marcus Wagner", desc: "Generative networks scanning industrial controllers to forecast assembly failures automatically.", descDe: "Generative Netze analysieren SPS-Steuerungen zur automatischen Vorhersage von Montagefehlern." }
];

export const STUDY_GUIDE_EN = {
  title: "Stuttgart Study Guide & International Life",
  sub: "Innovation Engineering Campus, Industrial Hub Baden-Württemberg, Germany",
  sections: [
    { name: "Why Stuttgart?", desc: "Known as the cradle of automobile invention, Stuttgart hosts world leaders like Mercedes-Benz, Porsche, Bosch and HP. It provides an elite, high-density tech network for students." },
    { name: "German Student Visas", desc: "GIAET's international admissions team issues authorized enrollment portfolios for standard Schengen D-Visas for hybrid learners wishing to visit Stuttgart labs." },
    { name: "Scholarship Support", desc: "Up to €2,500 per academic year is awarded to top-performing international students, with corporate funding provided by Siemens and Stuttgart technological funds." },
    { name: "Language Accommodations", desc: "All core degree program courses are taught in pristine English. Dual language support gives students access to free accelerated German language lessons to integration level." }
  ]
};

export const STUDY_GUIDE_DE = {
  title: "Stuttgart Studienführer & Internationales Leben",
  sub: "Innovation-Engineering-Campus, Industrie-Schwerpunkt Baden-Württemberg, Deutschland",
  sections: [
    { name: "Warum Stuttgart?", desc: "Stuttgart ist die Wiege des Automobilbaus und Sitz führender Weltkonzerne wie Mercedes-Benz, Porsche und Bosch. Es bietet Studierenden ein hochkarätiges Technologie-Netzwerk." },
    { name: "Deutsches Studentenvisum", desc: "Das internationale Zulassungsamt des GIAET stellt offizielle Studienplatznachweise für Schengen-D-Visa für Hybrid-Lernende aus, die Stuttgarter Labore besuchen." },
    { name: "Stipendienprogramm", desc: "Sehr gute internationale und nationale Studierende erhalten bis zu 2.500 € pro Studienjahr, teilgefördert durch namhafte Stuttgarter Stiftungen." },
    { name: "Sprache & Integration", desc: "Alle Studiengänge werden vollständig auf Englisch unterrichtet. Zusätzlich bieten wir kostenlose, begleitende Deutschkurse zur Erleichterung der Integration an." }
  ]
};

export const FAQ_EN = [
  { question: "Is GIAET a fully accredited university?", answer: "Yes, our BSc programs align with European academic standards and the Bologna process. Graduates receive accredited ECTS degrees valid for international professional registrations." },
  { question: "How do virtual laboratories operate in online learning?", answer: "We use high-fidelity, interactive, physics-based simulations on our portal, mapping real heat thermodynamic engines, microchip oscilloscopes, and PLC coding boards so that you obtain actual, practical insights from home." },
  { question: "Can I do my internships in Germany?", answer: "Absolutely. Our strong partnerships (Bosch, Siemens, Porsche, etc.) provide dedicated hybrid and on-site Stuttgart internship frameworks with active visa assistance." },
  { question: "Is there a hybrid option to visit the Stuttgart campus?", answer: "Yes, hybrid students are welcome to visit our Innovation Engineering Campus for intensive 2-week laboratory bootcamps every semester." }
];

export const FAQ_DE = [
  { question: "Ist das GIAET eine offiziell akkreditierte Hochschule?", answer: "Ja, unsere Bachelor-Studiengänge sind voll akkreditiert und entsprechen den Bologna-Statuten. Absolventen erhalten anerkannte ECTS-Punkte, die international gültig sind." },
  { question: "Wie funktionieren virtuelle Laboratorien online?", answer: "Wir setzen präzise interaktive physikalische Simulationswerkzeuge ein. Studierende programmieren simulierte speicherprogrammierbare Steuerungen (SPS), konfigurieren Oszilloskope oder optimieren Montagebänder direkt im Browser." },
  { question: "Kann ich Praktika bei deutschen Unternehmen absolvieren?", answer: "Ja, absolut. Durch unsere engen Kooperationen mit Bosch, Siemens, BMW, SAP und Porsche bieten wir exklusive Praktikumsplätze in Deutschland mit Visumsunterstützung an." },
  { question: "Gibt es Hybrid-Optionen zum Besuch des Stuttgarter Campus?", answer: "Ja, absolut! Hybrid-Studierende können jedes Semester an zweiwöchigen intensiven Labor-Bootcamps an unserem Stuttgarter Campus teilnehmen." }
];
