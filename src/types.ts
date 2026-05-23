export interface Faculty {
  id: string;
  name: string;
  nameDe: string;
  short: string;
  cardImage: string;
  overview: string;
  overviewDe: string;
  durationDe: string;
  durationEn: string;
  credits: string;
  careerPaths: string[];
  careerPathsDe: string[];
}

export interface Course {
  code: string;
  name: string;
  nameDe: string;
  credits: number;
}

export interface Semester {
  number: number;
  courses: Course[];
}

export interface DegreeProgram {
  id: string;
  title: string;
  titleDe: string;
  facultyId: string;
  description: string;
  descriptionDe: string;
  duration: string;
  durationDe: string;
  credits: string; // e.g. "180 ECTS"
  tuition: string; // e.g. "€4,900 / Semester"
  tuitionDe: string;
  virtualLabType: string;
  careerOutcomes: string[];
  careerOutcomesDe: string[];
  semesters: Semester[];
  facultyMembers: {
    name: string;
    role: string;
    roleDe: string;
    avatar: string;
    education: string;
  }[];
}

export interface Testimonial {
  name: string;
  role: string;
  roleDe: string;
  country: string;
  quote: string;
  quoteDe: string;
  avatar: string;
  program: string;
}

export interface Partner {
  name: string;
  logo: string;
  industry: string;
  internships: string[];
  internshipsDe: string[];
}

export interface StudentDashboardState {
  studentName: string;
  studentId: string;
  completedCredits: number;
  gpa: number;
  enrolledProgram: string;
}
