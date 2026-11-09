import { Student, AppSettings } from '../types';
import { INITIAL_STUDENTS } from '../data/studentsData';
import { DEFAULT_SETTINGS } from '../data/settingsData';

const STUDENTS_KEY = 'mpi_ipas_students_v1';
const SETTINGS_KEY = 'mpi_ipas_settings_v1';
const ACTIVE_USER_KEY = 'mpi_ipas_active_user_v1';

export function getStoredStudents(): Student[] {
  try {
    const raw = localStorage.getItem(STUDENTS_KEY);
    if (!raw) {
      saveStoredStudents(INITIAL_STUDENTS);
      return INITIAL_STUDENTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    saveStoredStudents(INITIAL_STUDENTS);
    return INITIAL_STUDENTS;
  } catch (err) {
    console.error('Failed reading students from storage', err);
    return INITIAL_STUDENTS;
  }
}

export function saveStoredStudents(students: Student[]) {
  try {
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
  } catch (err) {
    console.error('Failed saving students to storage', err);
  }
}

export function resetStoredStudents(): Student[] {
  saveStoredStudents(INITIAL_STUDENTS);
  return INITIAL_STUDENTS;
}

export function getStoredSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      saveStoredSettings(DEFAULT_SETTINGS);
      return DEFAULT_SETTINGS;
    }
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (err) {
    console.error('Failed reading settings from storage', err);
    return DEFAULT_SETTINGS;
  }
}

export function saveStoredSettings(settings: AppSettings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed saving settings to storage', err);
  }
}

export interface ActiveSession {
  role: 'guru' | 'siswa' | null;
  studentNis?: string | null;
}

export function getStoredActiveSession(): ActiveSession {
  try {
    const raw = localStorage.getItem(ACTIVE_USER_KEY);
    if (!raw) return { role: null };
    return JSON.parse(raw);
  } catch {
    return { role: null };
  }
}

export function saveStoredActiveSession(session: ActiveSession) {
  try {
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(session));
  } catch (err) {
    console.error('Failed saving session', err);
  }
}

export function calculatePredikat(score: number, kkm: number): 'Sangat Baik (A)' | 'Baik (B)' | 'Cukup (C)' | 'Perlu Bimbingan (D)' {
  if (score >= 90) return 'Sangat Baik (A)';
  if (score >= 80) return 'Baik (B)';
  if (score >= kkm) return 'Cukup (C)';
  return 'Perlu Bimbingan (D)';
}

export function getIndonesianDate(): string {
  return new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
