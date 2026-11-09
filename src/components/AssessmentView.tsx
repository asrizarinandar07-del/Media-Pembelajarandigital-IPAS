import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  SUMMATIVE_PACKAGES, 
  REMEDIAL_PACKAGE 
} from '../data/assessmentData';
import { 
  KEARIFAN_FAVORIT_OPTIONS, 
  KOMITMEN_SEKOLAH_OPTIONS, 
  TANGGAPAN_DAERAH_OPTIONS 
} from '../data/reflectionData';
import { 
  Student, 
  AppSettings, 
  SummativePackage, 
  SummativeQuestion,
  StudentReflection 
} from '../types';
import { calculatePredikat } from '../utils/storage';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  RotateCcw, 
  FileText, 
  Send,
  HelpCircle,
  BookmarkCheck,
  ShieldAlert,
  ThumbsUp
} from 'lucide-react';

interface AssessmentViewProps {
  role: 'guru' | 'siswa' | null;
  currentStudent: Student | null;
  settings: AppSettings;
  onUpdateStudent: (updated: Student) => void;
  onNavigateToReport: () => void;
}

export const AssessmentView: React.FC<AssessmentViewProps> = ({
  role,
  currentStudent,
  settings,
  onUpdateStudent,
  onNavigateToReport
}) => {
  // Select active package
  const [selectedPackageId, setSelectedPackageId] = useState<string>('paket-1');
  const [isRemedialMode, setIsRemedialMode] = useState<boolean>(false);

  // Student answers state:
  // For PG: string (e.g. 'A')
  // For PG Kompleks: string[] (e.g. ['I', 'III'])
  // For BS: boolean (e.g. true)
  const [answers, setAnswers] = useState<{ [qId: string]: any }>({});
  
  // Results view state
  const [resultState, setResultState] = useState<{
    score: number;
    passed: boolean;
    packageName: string;
    details: { qId: string; isCorrect: boolean; points: number }[];
  } | null>(null);

  // Reflection form state
  const [reflectionData, setReflectionData] = useState<StudentReflection>({
    kearifanFavorit: KEARIFAN_FAVORIT_OPTIONS[0].label,
    komitmenSekolah: KOMITMEN_SEKOLAH_OPTIONS[0].label,
    tanggapanDaerah: TANGGAPAN_DAERAH_OPTIONS[0].label,
    pesanPersatuan: ''
  });
  const [reflectionSaved, setReflectionSaved] = useState<boolean>(false);

  // Determine which package is active
  const activePackage: SummativePackage = isRemedialMode 
    ? REMEDIAL_PACKAGE 
    : (SUMMATIVE_PACKAGES.find((p) => p.id === selectedPackageId) || SUMMATIVE_PACKAGES[0]);

  // Handle single option selection (PG)
  const handleSelectPg = (qId: string, optId: string) => {
    if (resultState) return;
    setAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  // Handle complex checkbox toggle (PG Kompleks)
  const handleToggleStatement = (qId: string, stmtId: string) => {
    if (resultState) return;
    const currentList: string[] = answers[qId] || [];
    let updated: string[];
    if (currentList.includes(stmtId)) {
      updated = currentList.filter((id) => id !== stmtId);
    } else {
      updated = [...currentList, stmtId].sort();
    }
    setAnswers((prev) => ({ ...prev, [qId]: updated }));
  };

  // Handle true/false selection (BS)
  const handleSelectBs = (qId: string, val: boolean) => {
    if (resultState) return;
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  // Trigger confetti celebration
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback if blocked
    }
  };

  // Check Assessment Submission
  const handleCheckAssessment = () => {
    const questions = activePackage.questions;
    const answeredCount = questions.filter((q) => {
      const a = answers[q.id];
      if (a === undefined) return false;
      if (Array.isArray(a) && a.length === 0) return false;
      return true;
    }).length;

    if (answeredCount < questions.length) {
      const proceed = window.confirm(
        `Anda baru menjawab ${answeredCount} dari ${questions.length} butir soal. Apakah Anda yakin ingin mengumpulkan dan memeriksa hasil sekarang?`
      );
      if (!proceed) return;
    }

    // Calculate score: 10 questions @ 10 points each = 100 max
    let totalScore = 0;
    const details = questions.map((q) => {
      let isCorrect = false;
      const studentAns = answers[q.id];

      if (q.type === 'pg') {
        isCorrect = studentAns === q.correctAnswer;
      } else if (q.type === 'pg_kompleks') {
        const correctStmts = (q.correctStatements || []).slice().sort();
        const studentStmts = Array.isArray(studentAns) ? studentAns.slice().sort() : [];
        isCorrect = JSON.stringify(correctStmts) === JSON.stringify(studentStmts);
      } else if (q.type === 'bs') {
        isCorrect = studentAns === q.correctBs;
      }

      const points = isCorrect ? 10 : 0;
      totalScore += points;
      return { qId: q.id, isCorrect, points };
    });

    const passed = totalScore >= settings.kkm;

    setResultState({
      score: totalScore,
      passed,
      packageName: activePackage.title,
      details
    });

    if (passed) {
      triggerCelebration();
    }

    // If logged in as student, update student database
    if (role === 'siswa' && currentStudent) {
      const nextAttemptCount = (currentStudent.attemptCount || 0) + 1;
      let newStatus: 'Tuntas' | 'Remedial' | 'Belum Mengerjakan' = currentStudent.status;

      if (passed) {
        newStatus = 'Tuntas';
      } else if (isRemedialMode) {
        // Failing after remedial or finishing remedial session
        newStatus = 'Remedial';
      } else if (nextAttemptCount >= 2) {
        // Failed attempt 2
        newStatus = 'Remedial';
      }

      const newPredikat = calculatePredikat(totalScore, settings.kkm);

      const updatedStudent: Student = {
        ...currentStudent,
        skor: totalScore,
        status: newStatus,
        predikat: newPredikat,
        attemptCount: nextAttemptCount,
        packageCompleted: activePackage.code,
        completedAt: new Date().toISOString()
      };

      onUpdateStudent(updatedStudent);
    }
  };

  // Save Reflection & Commitment
  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'siswa' && currentStudent) {
      const updatedStudent: Student = {
        ...currentStudent,
        reflection: reflectionData
      };
      onUpdateStudent(updatedStudent);
    }
    setReflectionSaved(true);
  };

  // Retry or Switch Package on Attempt 1 failure
  const handlePrepareSecondAttempt = (newPkgId: string) => {
    setSelectedPackageId(newPkgId);
    setAnswers({});
    setResultState(null);
    setIsRemedialMode(false);
  };

  // Open Special Remedial Session
  const handleOpenRemedialSession = () => {
    setIsRemedialMode(true);
    setAnswers({});
    setResultState(null);
  };

  // Reset or re-test
  const handleResetForTesting = () => {
    setAnswers({});
    setResultState(null);
    setIsRemedialMode(false);
  };

  const studentAttemptCount = currentStudent?.attemptCount || 0;

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Assessment Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-bold mb-2">
              <Award className="w-3.5 h-3.5 text-cyan-700" />
              Asesmen Sumatif Akhir Bab 4 (Standar Kemendikdasmen 2025)
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {isRemedialMode ? 'Sesi Remedial Terarah & Pemantapan' : 'Lembar Asesmen Akhir Sumatif'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              6 Paket Soal Setara (10 Butir: 5 PG + 2 PG Kompleks + 3 Benar/Salah). Nilai KKM Ketuntasan:{' '}
              <strong className="text-emerald-700 font-extrabold">{settings.kkm} Poin</strong>.
            </p>
          </div>

          {currentStudent && (
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                {currentStudent.no}
              </div>
              <div className="text-left text-xs">
                <div className="font-bold text-slate-800">{currentStudent.nama}</div>
                <div className="text-slate-500">Percobaan ke-{studentAttemptCount + 1}</div>
              </div>
            </div>
          )}
        </div>

        {/* Package Selector Pills (If not in remedial mode and not yet submitted) */}
        {!isRemedialMode && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Pilih 1 dari 6 Paket Soal Asesmen:
              </span>
              {currentStudent?.packageCompleted && (
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Pernah menyelesaikan: {currentStudent.packageCompleted}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {SUMMATIVE_PACKAGES.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    disabled={resultState !== null}
                    onClick={() => {
                      setSelectedPackageId(pkg.id);
                      setAnswers({});
                    }}
                    className={`p-3 rounded-xl text-center border transition-all cursor-pointer disabled:cursor-default ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-md font-bold ring-2 ring-emerald-400/30'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200 text-xs font-medium'
                    }`}
                  >
                    <div className="text-xs font-black">{pkg.code}</div>
                    <div className="text-[10px] opacity-80 truncate">{pkg.description.split(':')[0]}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {isRemedialMode && (
          <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-950 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm">Mode Sesi Remedial Khusus Aktif</div>
              <p className="mt-0.5 text-amber-900 leading-relaxed">
                Anda sedang mengikuti sesi remedial terarah. Kerjakan seluruh 10 butir soal pemantapan di bawah ini dengan sungguh-sungguh untuk memperbaiki capaian belajar Anda.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Result Card: Displayed after clicking "Cek Hasil Asesmen" */}
      {resultState && (
        <div className={`rounded-3xl p-6 sm:p-8 text-white shadow-xl animate-fadeIn ${
          resultState.passed
            ? 'bg-gradient-to-br from-emerald-800 via-teal-800 to-emerald-950 border border-emerald-400/50'
            : 'bg-gradient-to-br from-rose-900 via-slate-900 to-rose-950 border border-rose-500/50'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-3xl bg-white text-slate-900 flex flex-col items-center justify-center font-black shadow-2xl flex-shrink-0">
                <span className="text-3xl leading-none">{resultState.score}</span>
                <span className="text-[10px] font-bold text-slate-500 mt-0.5">/ 100</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  {resultState.passed ? (
                    <span className="px-3.5 py-1 bg-emerald-400 text-emerald-950 font-black rounded-full text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                      LENCANA KELULUSAN: TUNTAS
                    </span>
                  ) : (
                    <span className="px-3.5 py-1 bg-amber-400 text-amber-950 font-black rounded-full text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-950" />
                      BELUM MENCAPAI KKM ({settings.kkm})
                    </span>
                  )}
                  <span className="text-xs text-white/80 font-medium">
                    Predikat: <strong>{calculatePredikat(resultState.score, settings.kkm)}</strong>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black mt-1">
                  {resultState.passed
                    ? 'Selamat! Anda Berhasil Menguasai Kompetensi IPAS Bab 4'
                    : 'Tetap Semangat! Jangan Putus Asa dan Manfaatkan Kesempatan Belajar'}
                </h2>

                <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-2xl leading-relaxed">
                  {resultState.passed
                    ? `Skor Anda ${resultState.score} telah melampaui batas KKM (${settings.kkm}). Hasil penilaian telah tercatat resmi di pangkalan data guru.`
                    : `Skor Anda ${resultState.score} belum mencapai KKM (${settings.kkm}). Ikuti petunjuk kesempatan perbaikan di bawah.`}
                </p>
              </div>
            </div>

            {/* Actions in Result Banner */}
            <div className="flex flex-wrap items-center gap-3">
              {resultState.passed && (
                <button
                  onClick={onNavigateToReport}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Lihat Lembar Rapor</span>
                </button>
              )}

              {/* If Failed on Attempt 1: Offer Attempt 2 with Different Package */}
              {!resultState.passed && studentAttemptCount === 1 && !isRemedialMode && (
                <div className="bg-white/10 p-3.5 rounded-2xl border border-white/20 text-xs space-y-2">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4" />
                    <span>Kesempatan Mengulang Ke-2 (Paket Berbeda)</span>
                  </div>
                  <p className="text-[11px] text-white/90">
                    Sistem memberikan 1 kali kesempatan kedua. Pilih paket soal yang berbeda (misal Paket 2):
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {SUMMATIVE_PACKAGES.filter((p) => p.id !== selectedPackageId).map((altPkg) => (
                      <button
                        key={altPkg.id}
                        onClick={() => handlePrepareSecondAttempt(altPkg.id)}
                        className="px-2.5 py-1 bg-white text-slate-900 rounded-lg font-bold text-[11px] hover:bg-amber-300 transition cursor-pointer"
                      >
                        Pilih {altPkg.code}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* If Failed on Attempt 2: Offer Remedial Session */}
              {!resultState.passed && studentAttemptCount >= 2 && !isRemedialMode && (
                <button
                  onClick={handleOpenRemedialSession}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center gap-2 cursor-pointer"
                >
                  <Clock className="w-4 h-4" />
                  <span>Buka Sesi Remedial Khusus</span>
                </button>
              )}

              {/* Guru Testing Controls */}
              {role === 'guru' && (
                <button
                  onClick={handleResetForTesting}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-semibold text-xs rounded-xl transition cursor-pointer"
                >
                  Reset Uji Coba (Guru)
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Enrichment & Reflection Form: Opens automatically when Passed (Skor >= KKM) */}
      {resultState?.passed && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-300 shadow-lg animate-fadeIn space-y-6">
          <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-2xl shadow-sm">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md">
                Instrumen Pengayaan &amp; Refleksi Belajar Mandiri
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                Refleksi Diri &amp; Komitmen Aksi Kebhinekaan Siswa
              </h3>
              <p className="text-xs text-slate-500">
                Pilih opsi dropdown di bawah untuk menuangkan komitmen nyata pelestarian kearifan lokal di sekolah dan masyarakat.
              </p>
            </div>
          </div>

          <form onSubmit={handleSaveReflection} className="space-y-5">
            {/* Dropdown 1: Kearifan Favorit */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                1. Kearifan Lokal &amp; Warisan Leluhur yang Paling Menginspirasi Diri:
              </label>
              <select
                value={reflectionData.kearifanFavorit}
                onChange={(e) => setReflectionData({ ...reflectionData, kearifanFavorit: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 outline-none transition"
              >
                {KEARIFAN_FAVORIT_OPTIONS.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown 2: Komitmen Sekolah */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                2. Rencana Aksi Nyata Merawat Persatuan &amp; Kebhinekaan di Lingkungan Sekolah:
              </label>
              <select
                value={reflectionData.komitmenSekolah}
                onChange={(e) => setReflectionData({ ...reflectionData, komitmenSekolah: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 outline-none transition"
              >
                {KOMITMEN_SEKOLAH_OPTIONS.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown 3: Tanggapan Daerah */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                3. Sikap dan Tanggapan terhadap Pelestarian Tradisi Daerah Nusantara:
              </label>
              <select
                value={reflectionData.tanggapanDaerah}
                onChange={(e) => setReflectionData({ ...reflectionData, tanggapanDaerah: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 outline-none transition"
              >
                {TANGGAPAN_DAERAH_OPTIONS.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Text Input: Pesan Persatuan Pribadi */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                4. Pesan Persatuan Siswa Kelas VI (Kalimat Motivasi Singkat):
              </label>
              <input
                type="text"
                value={reflectionData.pesanPersatuan}
                onChange={(e) => setReflectionData({ ...reflectionData, pesanPersatuan: e.target.value })}
                placeholder="Contoh: Berbeda itu indah, gotong royong membuat Indonesia jaya!"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />
            </div>

            {reflectionSaved && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Refleksi dan komitmen aksi berhasil disimpan ke dokumen rapor belajar Anda!</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <BookmarkCheck className="w-4 h-4" />
                <span>Simpan Refleksi ke Rapor</span>
              </button>

              <button
                type="button"
                onClick={onNavigateToReport}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Lihat Format Rapor Resmi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 10 Assessment Questions List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <div className="text-sm font-black text-slate-800">
            Daftar 10 Butir Soal ({activePackage.title})
          </div>
          <div className="text-xs text-slate-500">
            Terjawab:{' '}
            <strong className="text-emerald-700 font-bold">
              {Object.keys(answers).length}
            </strong>{' '}
            / 10
          </div>
        </div>

        {activePackage.questions.map((q: SummativeQuestion, index: number) => {
          const detail = resultState?.details.find((d) => d.qId === q.id);
          const isSubmitted = !!resultState;
          const isCorrect = detail?.isCorrect ?? false;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-6 border shadow-sm transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-400 bg-emerald-50/20 ring-1 ring-emerald-300'
                    : 'border-rose-300 bg-rose-50/20 ring-1 ring-rose-200'
                  : 'border-slate-200/90'
              }`}
            >
              {/* Question Header Pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {q.type === 'pg'
                      ? 'Pilihan Ganda (Tunggal)'
                      : q.type === 'pg_kompleks'
                      ? 'Pilihan Ganda Kompleks (Centang Kombinasi Benar)'
                      : 'Benar / Salah (Penalaran Kasus)'}
                  </span>
                  <span className="text-[10px] font-extrabold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    Tingkat {q.cognitiveLevel}
                  </span>
                </div>

                {isSubmitted && (
                  <div>
                    {isCorrect ? (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Tepat (+10 Poin)
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full">
                        Kurang Tepat (0 Poin)
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Case Context if present */}
              {q.context && (
                <div className="p-3.5 bg-slate-50 border-l-4 border-slate-300 rounded-r-xl text-xs text-slate-700 mb-3 italic leading-relaxed">
                  {q.context}
                </div>
              )}

              {/* Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 leading-relaxed">
                {q.question}
              </h3>

              {/* 1. Format PG (Single Choice A, B, C, D) */}
              {q.type === 'pg' && q.options && (
                <div className="grid grid-cols-1 gap-2.5">
                  {q.options.map((opt) => {
                    const studentChoice = answers[q.id];
                    const isSelected = studentChoice === opt.id;
                    const isKeyAnswer = isSubmitted && opt.id === q.correctAnswer;
                    const isChosenWrong = isSubmitted && isSelected && !isKeyAnswer;

                    let btnClasses = 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100';

                    if (isSubmitted) {
                      if (isKeyAnswer) {
                        btnClasses = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-bold';
                      } else if (isChosenWrong) {
                        btnClasses = 'bg-rose-100 text-rose-950 border-rose-400 font-medium';
                      } else {
                        btnClasses = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                      }
                    } else if (isSelected) {
                      btnClasses = 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-sm';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={isSubmitted}
                        onClick={() => handleSelectPg(q.id, opt.id)}
                        className={`w-full p-3.5 rounded-xl text-left text-xs sm:text-sm border transition flex items-start gap-3 cursor-pointer disabled:cursor-default ${btnClasses}`}
                      >
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                          isSelected && !isSubmitted
                            ? 'bg-white text-emerald-700'
                            : isSubmitted && isKeyAnswer
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {opt.id}
                        </span>
                        <span className="leading-snug pt-0.5">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 2. Format PG Kompleks (Statements I, II, III, IV with checkboxes) */}
              {q.type === 'pg_kompleks' && q.statements && (
                <div className="space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Beri tanda centang pada setiap pernyataan yang menurutmu BENAR:
                  </div>

                  {q.statements.map((stmt) => {
                    const selectedList: string[] = answers[q.id] || [];
                    const isChecked = selectedList.includes(stmt.id);
                    const isKeyStmt = (q.correctStatements || []).includes(stmt.id);

                    return (
                      <div
                        key={stmt.id}
                        onClick={() => !isSubmitted && handleToggleStatement(q.id, stmt.id)}
                        className={`p-3 rounded-xl border text-xs sm:text-sm transition flex items-start gap-3 cursor-pointer ${
                          isSubmitted
                            ? isKeyStmt
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium'
                              : isChecked
                              ? 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-slate-50 border-slate-200 opacity-60'
                            : isChecked
                            ? 'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400/30'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-700 text-white'
                            : 'bg-white border-slate-300'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <div className="leading-snug">
                          <strong className="text-slate-900 mr-1.5">{stmt.id}.</strong>
                          <span>{stmt.text}</span>
                        </div>
                      </div>
                    );
                  })}

                  {isSubmitted && (
                    <div className="text-[11px] text-emerald-800 font-bold mt-1">
                      Kombinasi Pernyataan Benar: {(q.correctStatements || []).join(', ')}
                    </div>
                  )}
                </div>
              )}

              {/* 3. Format Benar / Salah */}
              {q.type === 'bs' && (
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  {[
                    { val: true, label: 'BENAR' },
                    { val: false, label: 'SALAH' }
                  ].map((bs) => {
                    const studentAns = answers[q.id];
                    const isSelected = studentAns === bs.val;
                    const isKeyAnswer = isSubmitted && bs.val === q.correctBs;
                    const isChosenWrong = isSubmitted && isSelected && !isKeyAnswer;

                    let btnClasses = 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100';

                    if (isSubmitted) {
                      if (isKeyAnswer) {
                        btnClasses = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-black';
                      } else if (isChosenWrong) {
                        btnClasses = 'bg-rose-100 text-rose-950 border-rose-400 font-bold';
                      } else {
                        btnClasses = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                      }
                    } else if (isSelected) {
                      btnClasses = 'bg-emerald-600 text-white border-emerald-700 font-black shadow-sm';
                    }

                    return (
                      <button
                        key={String(bs.val)}
                        type="button"
                        disabled={isSubmitted}
                        onClick={() => handleSelectBs(q.id, bs.val)}
                        className={`p-3.5 rounded-xl text-center text-xs sm:text-sm font-bold border transition cursor-pointer disabled:cursor-default ${btnClasses}`}
                      >
                        {bs.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Pembahasan & Evaluasi setelah Submit */}
              {isSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Pembahasan &amp; Analisis Kunci:</span>
                  </div>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sticky Bottom Actions */}
      <div className="sticky bottom-6 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-300 shadow-xl flex items-center justify-between gap-4">
        <div className="text-xs text-slate-600">
          Progres: <strong className="text-slate-900">{Object.keys(answers).length}</strong> dari{' '}
          <strong className="text-slate-900">10</strong> butir terjawab
        </div>

        <div className="flex items-center gap-3">
          {resultState ? (
            <button
              onClick={onNavigateToReport}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Cek Lembar Rapor</span>
            </button>
          ) : (
            <button
              onClick={handleCheckAssessment}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Cek Hasil Asesmen</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
