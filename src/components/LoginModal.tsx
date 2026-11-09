import React, { useState } from 'react';
import { Student, AppSettings } from '../types';
import { 
  GraduationCap, 
  User, 
  KeyRound, 
  School, 
  ShieldCheck, 
  AlertCircle, 
  ChevronRight,
  BookOpenCheck
} from 'lucide-react';

interface LoginModalProps {
  students: Student[];
  settings: AppSettings;
  onLoginSiswa: (student: Student) => void;
  onLoginGuru: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  students,
  settings,
  onLoginSiswa,
  onLoginGuru
}) => {
  const [activeRoleTab, setActiveRoleTab] = useState<'siswa' | 'guru'>('siswa');
  
  // Siswa state
  const [selectedNis, setSelectedNis] = useState<string>('');
  const [studentPin, setStudentPin] = useState<string>('');
  const [siswaError, setSiswaError] = useState<string>('');

  // Guru state
  const [guruPassword, setGuruPassword] = useState<string>('');
  const [guruError, setGuruError] = useState<string>('');

  const selectedStudent = students.find((s) => s.nis === selectedNis);

  const handleSiswaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSiswaError('');

    if (!selectedNis) {
      setSiswaError('Silakan pilih nama siswa dari daftar terlebih dahulu.');
      return;
    }

    if (!studentPin.trim()) {
      setSiswaError('Masukkan PIN / NIS Anda untuk masuk.');
      return;
    }

    if (!selectedStudent) {
      setSiswaError('Data siswa tidak ditemukan.');
      return;
    }

    // Siswa enters their NIS as PIN
    if (studentPin.trim() === selectedStudent.nis) {
      onLoginSiswa(selectedStudent);
    } else {
      setSiswaError('PIN / NIS salah! Masukkan NIS Anda yang sesuai (contoh: ' + selectedStudent.nis + ').');
    }
  };

  const handleGuruSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGuruError('');

    if (!guruPassword) {
      setGuruError('Silakan masukkan kata sandi Guru.');
      return;
    }

    if (guruPassword === 'guru105285') {
      onLoginGuru();
    } else {
      setGuruError('Kata sandi salah! Hubungi Pengembang jika mengalami kendala.');
    }
  };

  const [showFullPosterModal, setShowFullPosterModal] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto min-h-screen relative">
      {/* Background Poster Image with clean visibility overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-20 transition-all duration-700 scale-100"
        style={{
          backgroundImage: "url('./assets/aistudio/Poster_BHINEKA_TUNGGAL_IKA_7641d045.jpg')",
        }}
      />
      {/* Subtle backdrop overlay to keep poster details visible while ensuring text readability */}
      <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-[2px] -z-10" />

      {/* Main Dual-Panel Login Container */}
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 overflow-hidden my-auto grid grid-cols-1 md:grid-cols-12 animate-fadeIn">
        
        {/* Left Column: Direct Poster Visual Showcase (Ensures the poster is prominently and clearly visible) */}
        <div className="md:col-span-5 relative bg-gradient-to-b from-sky-400 via-teal-700 to-emerald-950 p-6 flex flex-col justify-between text-white overflow-hidden min-h-[280px] md:min-h-[580px]">
          {/* Poster Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-95 transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: "url('./assets/aistudio/Poster_BHINEKA_TUNGGAL_IKA_7641d045.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

          {/* Top Badge on Poster */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md text-amber-300 rounded-full text-[11px] font-extrabold border border-amber-400/40 shadow-lg">
              <School className="w-3.5 h-3.5" />
              <span>IPAS Kelas VI</span>
            </span>

            <button
              type="button"
              onClick={() => setShowFullPosterModal(true)}
              className="px-2.5 py-1 bg-white/80 hover:bg-white text-slate-900 rounded-lg text-[10px] font-bold shadow transition cursor-pointer backdrop-blur-sm"
              title="Perbesar Poster"
            >
              Perbesar Poster
            </button>
          </div>

          {/* Bottom Card Identity on Poster */}
          <div className="relative z-10 pt-16">
            <div className="p-3.5 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs space-y-1">
              <div className="font-extrabold text-amber-300 uppercase tracking-wide text-[11px]">
                Bab 4: Kearifan Lokal &amp; Persatuan Bangsa
              </div>
              <div className="text-white font-bold text-sm leading-snug">
                Bhinneka Tunggal Ika, Maju Terus Indonesiaku
              </div>
              <div className="text-[11px] text-emerald-200 pt-1 border-t border-white/10">
                UPT SPF SD Inpres 105285 Tandam Hilir I
              </div>
              <div className="text-[10px] text-slate-300">
                Pengembang: {settings.teacherName}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Authentication Form */}
        <div className="md:col-span-7 flex flex-col justify-between bg-white">
          
          <div>
            {/* Header Title inside form */}
            <div className="p-6 pb-4 border-b border-slate-100">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Media Pembelajaran Digital Interaktif
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                Selamat Datang di Portal IPAS
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Silakan pilih peran Anda untuk memulai pembelajaran atau mengelola asesmen.
              </p>
            </div>

            {/* Role Selector Tabs */}
            <div className="grid grid-cols-2 p-2 bg-slate-100 border-b border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setActiveRoleTab('siswa');
                  setSiswaError('');
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeRoleTab === 'siswa'
                    ? 'bg-white text-emerald-900 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-4 h-4 text-emerald-600" />
                <span>Masuk Siswa</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveRoleTab('guru');
                  setGuruError('');
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeRoleTab === 'guru'
                    ? 'bg-white text-amber-900 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Masuk Guru</span>
              </button>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-7">
              {activeRoleTab === 'siswa' ? (
                <form onSubmit={handleSiswaSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      1. Pilih Nama Siswa (Kelas VI-a Resmi)
                    </label>
                    <select
                      value={selectedNis}
                      onChange={(e) => {
                        setSelectedNis(e.target.value);
                        setSiswaError('');
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    >
                      <option value="">-- Cari &amp; Pilih Nama Anda ({students.length} Siswa) --</option>
                      {students.map((st) => (
                        <option key={st.nis} value={st.nis}>
                          {st.no}. {st.nama} (NIS: {st.nis} | NISN: {st.nisn})
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedStudent && (
                    <div className="p-3 bg-emerald-50/90 border border-emerald-200 rounded-xl text-xs text-emerald-900 space-y-1 animate-fadeIn">
                      <div className="font-bold text-emerald-950 flex items-center justify-between">
                        <span>{selectedStudent.nama}</span>
                        <span className="text-[10px] font-semibold bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                          Absen No. {selectedStudent.no}
                        </span>
                      </div>
                      <div className="text-slate-600 flex gap-4 text-[11px]">
                        <span>NIS: <strong className="text-emerald-900">{selectedStudent.nis}</strong></span>
                        <span>NISN: <strong className="text-emerald-900">{selectedStudent.nisn}</strong></span>
                      </div>
                      <div className="text-[11px] text-emerald-700 pt-1 border-t border-emerald-200/60">
                        Gunakan <strong>NIS Anda ({selectedStudent.nis})</strong> sebagai kata sandi / PIN untuk masuk.
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      2. Masukkan PIN / Kata Sandi Siswa (NIS)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        value={studentPin}
                        onChange={(e) => {
                          setStudentPin(e.target.value);
                          setSiswaError('');
                        }}
                        placeholder="Masukkan NIS Anda (4 digit)"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 font-medium tracking-wider focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                      />
                    </div>
                  </div>

                  {siswaError && (
                    <div className="flex items-start gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                      <span>{siswaError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Masuk ke Media Belajar</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-relaxed flex items-center gap-2">
                    <BookOpenCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      Siswa dapat mempelajari materi, kuis latihan sub-bab, serta mengerjakan Asesmen Akhir Sumatif Bab 4.
                    </span>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleGuruSubmit} className="space-y-4">
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-amber-950">Autentikasi Hak Akses Guru</div>
                      <div className="text-amber-800 text-[11px] mt-0.5 leading-relaxed">
                        Akses penuh untuk melihat Tabel Presensi &amp; Nilai 23 siswa resmi, pengaturan KKM, profil sekolah, dan cetak rapor hasil belajar.
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Kata Sandi Khusus Guru
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        value={guruPassword}
                        onChange={(e) => {
                          setGuruPassword(e.target.value);
                          setGuruError('');
                        }}
                        placeholder="Masukkan sandi guru..."
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 italic">
                      Sandi bawaan resmi Guru: <span className="font-mono font-bold text-slate-700">guru105285</span>
                    </p>
                  </div>

                  {guruError && (
                    <div className="flex items-start gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                      <span>{guruError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Masuk sebagai Guru</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Card Bottom Footer */}
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500">
            UPT SPF SD Inpres 105285 Tandam Hilir I • IPAS Kemendikdasmen 2025
          </div>

        </div>

      </div>

      {/* Modal Popup: View Full High-Res Poster */}
      {showFullPosterModal && (
        <div 
          onClick={() => setShowFullPosterModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
        >
          <div className="relative max-w-lg max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2">
            <img 
              src="./assets/aistudio/Poster_BHINEKA_TUNGGAL_IKA_7641d045.jpg" 
              alt="Poster Bhinneka Tunggal Ika Maju Terus Indonesiaku" 
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
            <div className="text-center pt-2 pb-1 text-xs font-bold text-slate-700 flex items-center justify-between px-3">
              <span>Bhinneka Tunggal Ika — Maju Terus Indonesiaku</span>
              <button 
                onClick={() => setShowFullPosterModal(false)}
                className="px-2 py-0.5 bg-slate-200 hover:bg-slate-300 rounded text-[11px] text-slate-800 font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
