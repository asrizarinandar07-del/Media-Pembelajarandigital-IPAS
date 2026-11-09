import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  User, 
  LogOut, 
  School, 
  Sparkles, 
  Award, 
  Sliders, 
  Layers, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { Student, AppSettings } from '../types';

interface HeaderProps {
  role: 'guru' | 'siswa' | null;
  currentStudent: Student | null;
  settings: AppSettings;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  role,
  currentStudent,
  settings,
  activeTab,
  onTabChange,
  onLogout
}) => {
  return (
    <header className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-950 text-white shadow-xl border-b border-emerald-700/40 sticky top-0 z-40 print:hidden">
      {/* Top Banner with Developer and School Identity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Main Title & School Info */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-md text-emerald-950 flex-shrink-0 mt-0.5">
              <School className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 bg-emerald-800/80 text-emerald-200 rounded-md border border-emerald-600/50">
                  Kurikulum Merdeka 2025
                </span>
                <span className="text-xs font-medium text-teal-200 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Kelas VI Semester Genap
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-0.5">
                Media Pembelajaran Digital Mapel IPAS Kelas VI
              </h1>
              <p className="text-xs sm:text-sm text-emerald-200/90 font-medium line-clamp-1">
                Bab 4: &ldquo;Kearifan Lokal, Warisan Leluhur untuk Persatuan Bangsa&rdquo;
              </p>
            </div>
          </div>

          {/* Developer identity and Active Role Badge */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 justify-between md:justify-end">
            <div className="text-left md:text-right hidden sm:block">
              <div className="text-xs font-semibold text-emerald-200">
                Pengembang: <span className="text-white font-bold">{settings.teacherName}</span>
              </div>
              <div className="text-[11px] text-teal-300/80 truncate max-w-xs">
                {settings.schoolName}
              </div>
            </div>

            {/* Active User Badge */}
            <div className="flex items-center gap-2">
              {role === 'guru' ? (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-800/90 border border-emerald-400/40 rounded-full shadow-inner text-emerald-100 text-xs sm:text-sm font-semibold">
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                  <span>Masuk sebagai Guru</span>
                </div>
              ) : role === 'siswa' && currentStudent ? (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-900/90 border border-cyan-400/40 rounded-full shadow-inner text-cyan-100 text-xs sm:text-sm font-semibold max-w-[220px] truncate">
                  <User className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span className="truncate">Masuk sebagai {currentStudent.nama}</span>
                </div>
              ) : null}

              {/* Log Out Button */}
              {role && (
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-950/80 hover:bg-rose-900 text-rose-200 hover:text-white border border-rose-700/50 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm cursor-pointer"
                  title="Keluar dari sesi ini"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Log Out</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      {role && (
        <div className="bg-emerald-950/80 border-t border-emerald-800/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 scrollbar-none" aria-label="Tabs">
              <button
                onClick={() => onTabChange('dashboard')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === 'dashboard'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => onTabChange('modul')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === 'modul'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Modul Pembelajaran</span>
              </button>

              <button
                onClick={() => onTabChange('kuis-subbab')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === 'kuis-subbab'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Kuis Sub-Bab (Formatif)</span>
              </button>

              <button
                onClick={() => onTabChange('asesmen')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === 'asesmen'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Asesmen Akhir Bab (Sumatif)</span>
              </button>

              {role === 'siswa' && (
                <button
                  onClick={() => onTabChange('hasil-asesmen')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'hasil-asesmen'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Cek Hasil Asesmen</span>
                </button>
              )}

              {/* STRICT RBAC: Ruang Guru & Pengaturan ONLY FOR GURU */}
              {role === 'guru' && (
                <>
                  <button
                    onClick={() => onTabChange('ruang-guru')}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'ruang-guru'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'text-amber-200 hover:text-white hover:bg-amber-900/50'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 text-amber-300" />
                    <span>Ruang Guru (Nilai & Presensi)</span>
                  </button>

                  <button
                    onClick={() => onTabChange('pengaturan')}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'pengaturan'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'text-amber-200 hover:text-white hover:bg-amber-900/50'
                    }`}
                  >
                    <Sliders className="w-4 h-4 text-amber-300" />
                    <span>Pengaturan (KKM & Profil)</span>
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
