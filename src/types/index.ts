export type Role = 'siswa' | 'guru' | null;

export interface Student {
  no: number;
  nisn: string;
  nis: string;
  nama: string;
  skor: number | null;
  status: 'Belum Mengerjakan' | 'Tuntas' | 'Remedial';
  predikat: '-' | 'Sangat Baik (A)' | 'Baik (B)' | 'Cukup (C)' | 'Perlu Bimbingan (D)';
  attemptCount: number;
  packageCompleted?: string | null;
  completedAt?: string | null;
  reflection?: StudentReflection | null;
  history?: AssessmentAttempt[];
}

export interface AssessmentAttempt {
  attemptNumber: number;
  packageName: string;
  score: number;
  date: string;
  passed: boolean;
}

export interface StudentReflection {
  kearifanFavorit: string;
  komitmenSekolah: string;
  tanggapanDaerah: string;
  pesanPersatuan: string;
}

export interface AppSettings {
  teacherName: string;
  teacherNip: string;
  principalName: string;
  principalNip: string;
  schoolName: string;
  kkm: number;
  location: string;
  reportDate: string;
}

// Question types for Formative Quiz
export type FormativeType = 'pg' | 'bs';

export interface FormativeQuestion {
  id: string;
  type: FormativeType;
  question: string;
  context?: string;
  image?: string;
  options?: { id: string; text: string }[];
  correctAnswer: string | boolean; // option id for 'pg', boolean for 'bs'
  explanation: string;
}

export interface FormativePackage {
  id: string;
  title: string;
  questions: FormativeQuestion[];
}

// Question types for Summative Assessment
export type SummativeType = 'pg' | 'pg_kompleks' | 'bs';

export interface SummativeQuestion {
  id: string;
  type: SummativeType;
  cognitiveLevel: 'C2' | 'C3' | 'C4';
  context?: string;
  image?: string;
  question: string;
  // For 'pg':
  options?: { id: string; text: string }[];
  correctAnswer?: string; // e.g. 'B'
  // For 'pg_kompleks':
  statements?: { id: string; text: string }[];
  correctStatements?: string[]; // e.g. ['I', 'III']
  // For 'bs':
  correctBs?: boolean;
  explanation: string;
}

export interface SummativePackage {
  id: string;
  code: string;
  title: string;
  description: string;
  questions: SummativeQuestion[];
}
