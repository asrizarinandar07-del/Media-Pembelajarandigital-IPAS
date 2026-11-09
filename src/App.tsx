/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Student, AppSettings, Role } from './types';
import { 
  getStoredStudents, 
  saveStoredStudents, 
  resetStoredStudents, 
  getStoredSettings, 
  saveStoredSettings,
  getStoredActiveSession,
  saveStoredActiveSession
} from './utils/storage';

import { Header } from './components/Header';
import { LoginModal } from './components/LoginModal';
import { DashboardView } from './components/DashboardView';
import { ModuleView } from './components/ModuleView';
import { QuizSubBabView } from './components/QuizSubBabView';
import { AssessmentView } from './components/AssessmentView';
import { StudentReportView } from './components/StudentReportView';
import { TeacherRoomView } from './components/TeacherRoomView';
import { SettingsView } from './components/SettingsView';
import { ClassRecapPrintModal } from './components/ClassRecapPrintModal';

export default function App() {
  // Persistent data state
  const [students, setStudents] = useState<Student[]>(() => getStoredStudents());
  const [settings, setSettings] = useState<AppSettings>(() => getStoredSettings());

  // Active Session state
  const [role, setRole] = useState<Role>(null);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedSubBabForQuiz, setSelectedSubBabForQuiz] = useState<'sub-a' | 'sub-b' | 'sub-c'>('sub-a');
  
  // Modals & print state
  const [viewingReportStudent, setViewingReportStudent] = useState<Student | null>(null);
  const [showClassRecapModal, setShowClassRecapModal] = useState<boolean>(false);

  // Initialize session on mount
  useEffect(() => {
    const session = getStoredActiveSession();
    if (session.role === 'guru') {
      setRole('guru');
    } else if (session.role === 'siswa' && session.studentNis) {
      const found = students.find((s) => s.nis === session.studentNis);
      if (found) {
        setRole('siswa');
        setCurrentStudent(found);
      }
    }
  }, []);

  // Strict RBAC Guard: If logged in as siswa, prevent any access to Ruang Guru or Pengaturan
  useEffect(() => {
    if (role === 'siswa' && (activeTab === 'ruang-guru' || activeTab === 'pengaturan')) {
      setActiveTab('dashboard');
    }
  }, [role, activeTab]);

  // Handle Login Siswa
  const handleLoginSiswa = (student: Student) => {
    setRole('siswa');
    setCurrentStudent(student);
    saveStoredActiveSession({ role: 'siswa', studentNis: student.nis });
    setActiveTab('dashboard');
  };

  // Handle Login Guru
  const handleLoginGuru = () => {
    setRole('guru');
    setCurrentStudent(null);
    saveStoredActiveSession({ role: 'guru' });
    setActiveTab('dashboard');
  };

  // Handle Log Out
  const handleLogout = () => {
    setRole(null);
    setCurrentStudent(null);
    saveStoredActiveSession({ role: null });
    setActiveTab('dashboard');
    setViewingReportStudent(null);
  };

  // Handle student record update (scores, status, reflection)
  const handleUpdateStudent = (updatedStudent: Student) => {
    const updatedList = students.map((s) =>
      s.nis === updatedStudent.nis ? updatedStudent : s
    );
    setStudents(updatedList);
    saveStoredStudents(updatedList);

    // If currently logged in as this student, sync currentStudent state
    if (currentStudent && currentStudent.nis === updatedStudent.nis) {
      setCurrentStudent(updatedStudent);
    }
    // If viewing this student's report, sync it
    if (viewingReportStudent && viewingReportStudent.nis === updatedStudent.nis) {
      setViewingReportStudent(updatedStudent);
    }
  };

  // Handle Settings Update (KKM, Teacher & Principal names)
  const handleSaveSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    saveStoredSettings(newSettings);
  };

  // Handle Reset All Students (Zero Dummy Data)
  const handleResetAllStudents = () => {
    const fresh = resetStoredStudents();
    setStudents(fresh);
    if (currentStudent) {
      const freshCurrent = fresh.find((s) => s.nis === currentStudent.nis) || null;
      setCurrentStudent(freshCurrent);
    }
    setViewingReportStudent(null);
  };

  // Navigation helpers
  const handleStartSubBabQuiz = (subBabId: 'sub-a' | 'sub-b' | 'sub-c') => {
    setSelectedSubBabForQuiz(subBabId);
    setActiveTab('kuis-subbab');
  };

  const handleViewIndividualReport = (student: Student) => {
    setViewingReportStudent(student);
    setActiveTab('hasil-asesmen');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* App Header */}
      <Header
        role={role}
        currentStudent={currentStudent}
        settings={settings}
        activeTab={activeTab}
        onTabChange={(tab) => {
          // Reset specific view states when switching tabs
          if (tab !== 'hasil-asesmen') {
            setViewingReportStudent(null);
          }
          setActiveTab(tab);
        }}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {role === null ? (
          <LoginModal
            students={students}
            settings={settings}
            onLoginSiswa={handleLoginSiswa}
            onLoginGuru={handleLoginGuru}
          />
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <DashboardView
                role={role}
                currentStudent={currentStudent}
                students={students}
                settings={settings}
                onNavigate={(tab) => setActiveTab(tab)}
              />
            )}

            {activeTab === 'modul' && (
              <ModuleView
                onStartQuiz={handleStartSubBabQuiz}
              />
            )}

            {activeTab === 'kuis-subbab' && (
              <QuizSubBabView
                initialSubBab={selectedSubBabForQuiz}
                onNavigateToAsesmen={() => setActiveTab('asesmen')}
              />
            )}

            {activeTab === 'asesmen' && (
              <AssessmentView
                role={role}
                currentStudent={currentStudent}
                settings={settings}
                onUpdateStudent={handleUpdateStudent}
                onNavigateToReport={() => {
                  setViewingReportStudent(currentStudent);
                  setActiveTab('hasil-asesmen');
                }}
              />
            )}

            {activeTab === 'hasil-asesmen' && (
              <StudentReportView
                student={viewingReportStudent || currentStudent}
                settings={settings}
                onBack={() => {
                  setViewingReportStudent(null);
                  setActiveTab(role === 'guru' ? 'ruang-guru' : 'dashboard');
                }}
                onPrint={handlePrint}
              />
            )}

            {/* STRICT RBAC: Ruang Guru & Pengaturan ONLY FOR GURU */}
            {role === 'guru' && activeTab === 'ruang-guru' && (
              <TeacherRoomView
                students={students}
                settings={settings}
                onUpdateStudent={handleUpdateStudent}
                onViewStudentReport={handleViewIndividualReport}
                onPrintClassRecap={() => setShowClassRecapModal(true)}
              />
            )}

            {role === 'guru' && activeTab === 'pengaturan' && (
              <SettingsView
                settings={settings}
                onSaveSettings={handleSaveSettings}
                onResetAllStudents={handleResetAllStudents}
              />
            )}
          </>
        )}
      </main>

      {/* Class Recap Printable Modal (for Teacher) */}
      {showClassRecapModal && (
        <ClassRecapPrintModal
          students={students}
          settings={settings}
          onClose={() => setShowClassRecapModal(false)}
          onPrint={handlePrint}
        />
      )}

      {/* App Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800 print:hidden mt-auto">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <div className="font-semibold text-slate-300">
            Media Pembelajaran Digital Interaktif Mapel IPAS Kelas VI • Bab 4: Kearifan Lokal untuk Persatuan Bangsa
          </div>
          <div>
            Pengembang: <span className="text-emerald-400 font-bold">{settings.teacherName}</span> • Unit Tugas: {settings.schoolName}
          </div>
          <div className="text-[11px] text-slate-500 pt-1">
            Dirancang mandiri, responsif, modern, dan siap tayang di GitHub Pages tanpa backend eksternal.
          </div>
        </div>
      </footer>

    </div>
  );
}
