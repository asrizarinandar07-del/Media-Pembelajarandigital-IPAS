import React, { useState } from 'react';
import { 
  QUIZ_SUB_BAB_A, 
  QUIZ_SUB_BAB_B, 
  QUIZ_SUB_BAB_C 
} from '../data/quizSubBabData';
import { FormativePackage, FormativeQuestion } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  ArrowRight,
  Compass,
  Layers,
  Users,
  Check
} from 'lucide-react';

interface QuizSubBabViewProps {
  initialSubBab?: 'sub-a' | 'sub-b' | 'sub-c';
  onNavigateToAsesmen: () => void;
}

export const QuizSubBabView: React.FC<QuizSubBabViewProps> = ({
  initialSubBab = 'sub-a',
  onNavigateToAsesmen
}) => {
  const [selectedSubBab, setSelectedSubBab] = useState<'sub-a' | 'sub-b' | 'sub-c'>(initialSubBab);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-a1');
  
  // Student answers: { [questionId]: string | boolean }
  const [answers, setAnswers] = useState<{ [qId: string]: any }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Get packages for current sub-bab
  const packagesMap = {
    'sub-a': QUIZ_SUB_BAB_A,
    'sub-b': QUIZ_SUB_BAB_B,
    'sub-c': QUIZ_SUB_BAB_C
  };

  const currentPackages = packagesMap[selectedSubBab];
  const activePackage = currentPackages.find((p) => p.id === selectedPackageId) || currentPackages[0];

  const handleSubBabChange = (sub: 'sub-a' | 'sub-b' | 'sub-c') => {
    setSelectedSubBab(sub);
    const pkgs = packagesMap[sub];
    setSelectedPackageId(pkgs[0].id);
    setAnswers({});
    setIsSubmitted(false);
  };

  const handlePackageChange = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    setAnswers({});
    setIsSubmitted(false);
  };

  const handleSelectOption = (qId: string, value: any) => {
    if (isSubmitted) return; // locked after submission
    setAnswers((prev) => ({
      ...prev,
      [qId]: value
    }));
  };

  const handleCheckAnswers = () => {
    // Check if all 4 questions answered
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < activePackage.questions.length) {
      const confirmSubmit = window.confirm(
        `Anda baru menjawab ${answeredCount} dari ${activePackage.questions.length} butir soal. Tetap cek jawaban sekarang?`
      );
      if (!confirmSubmit) return;
    }
    setIsSubmitted(true);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  // Calculate score
  const correctCount = activePackage.questions.reduce((acc, q) => {
    const studentAns = answers[q.id];
    if (studentAns === undefined) return acc;
    if (studentAns === q.correctAnswer) return acc + 1;
    return acc;
  }, 0);

  const percentageScore = Math.round((correctCount / activePackage.questions.length) * 100);

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Quiz Header Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Latihan Formatif Interaktif
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Bank Kuis Sub-Bab (36 Butir Terstruktur)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pilih sub-bab dan paket kuis (4 butir: 2 PG &amp; 2 Benar/Salah). Klik &ldquo;Cek Jawaban&rdquo; untuk umpan balik dan pembahasan langsung.
            </p>
          </div>

          <button
            onClick={onNavigateToAsesmen}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Beralih ke Asesmen Sumatif</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Sub-Bab Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {[
            { id: 'sub-a', title: 'Sub-Bab A: Jejak Budaya & Nilai Luhur', icon: Compass },
            { id: 'sub-b', title: 'Sub-Bab B: Warna-Warni Kearifan Lokal', icon: Layers },
            { id: 'sub-c', title: 'Sub-Bab C: Keberagaman yang Menyatukan', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedSubBab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSubBabChange(tab.id as any)}
                className={`p-3.5 rounded-2xl text-left border transition cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-md font-bold'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold leading-tight">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Package Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-2">Pilih Paket:</span>
          {currentPackages.map((pkg, idx) => {
            const isPkgActive = pkg.id === selectedPackageId;
            return (
              <button
                key={pkg.id}
                onClick={() => handlePackageChange(pkg.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isPkgActive
                    ? 'bg-amber-500 text-emerald-950 shadow-sm ring-2 ring-amber-400/40'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {pkg.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result Score Banner if Submitted */}
      {isSubmitted && (
        <div className={`rounded-3xl p-6 sm:p-7 text-white shadow-xl animate-fadeIn ${
          percentageScore >= 75
            ? 'bg-gradient-to-r from-emerald-800 to-teal-900 border border-emerald-500/40'
            : 'bg-gradient-to-r from-amber-800 to-orange-950 border border-amber-500/40'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white text-slate-900 flex items-center justify-center font-black text-2xl shadow-md">
                {percentageScore}%
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                  Hasil Kuis Formatif • {activePackage.title}
                </div>
                <h3 className="text-lg sm:text-xl font-black mt-0.5">
                  {percentageScore >= 75
                    ? 'Luar Biasa! Pemahaman Materi Sangat Baik'
                    : 'Perlu Penguatan! Baca Kembali Pembahasan di Bawah'}
                </h3>
                <p className="text-xs text-white/90 mt-1">
                  Benar {correctCount} dari {activePackage.questions.length} butir soal ({percentageScore} Poin).
                </p>
              </div>
            </div>

            <button
              onClick={handleResetQuiz}
              className="px-4 py-2.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-slate-700" />
              <span>Ulangi Paket Ini</span>
            </button>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {activePackage.questions.map((q: FormativeQuestion, index: number) => {
          const studentAns = answers[q.id];
          const isCorrect = isSubmitted && studentAns === q.correctAnswer;
          const isWrong = isSubmitted && studentAns !== undefined && studentAns !== q.correctAnswer;
          const isUnanswered = isSubmitted && studentAns === undefined;

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
              {/* Question Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {q.type === 'pg' ? 'Pilihan Ganda' : 'Benar / Salah'}
                  </span>
                </div>

                {isSubmitted && (
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    {isCorrect && (
                      <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4" />
                        Jawaban Tepat (+25 Poin)
                      </span>
                    )}
                    {isWrong && (
                      <span className="flex items-center gap-1 text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full">
                        <XCircle className="w-4 h-4" />
                        Jawaban Belum Tepat
                      </span>
                    )}
                    {isUnanswered && (
                      <span className="flex items-center gap-1 text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                        Tidak Dijawab
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Context if exists */}
              {q.context && (
                <div className="p-3 bg-slate-50 border-l-4 border-slate-300 rounded-r-xl text-xs text-slate-700 mb-3 italic">
                  {q.context}
                </div>
              )}

              {/* Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 leading-relaxed">
                {q.question}
              </h3>

              {/* Answer options */}
              {q.type === 'pg' && q.options && (
                <div className="grid grid-cols-1 gap-2.5">
                  {q.options.map((opt) => {
                    const isSelected = studentAns === opt.id;
                    const isThisCorrect = isSubmitted && opt.id === q.correctAnswer;
                    const isThisChosenWrong = isSubmitted && isSelected && !isThisCorrect;

                    let btnClasses = 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100';

                    if (isSubmitted) {
                      if (isThisCorrect) {
                        btnClasses = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-bold';
                      } else if (isThisChosenWrong) {
                        btnClasses = 'bg-rose-100 text-rose-950 border-rose-400 font-semibold';
                      } else {
                        btnClasses = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                      }
                    } else if (isSelected) {
                      btnClasses = 'bg-emerald-600 text-white border-emerald-700 shadow-sm font-bold';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(q.id, opt.id)}
                        className={`w-full p-3.5 rounded-xl text-left text-xs sm:text-sm border transition flex items-start gap-3 cursor-pointer disabled:cursor-default ${btnClasses}`}
                      >
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                          isSelected && !isSubmitted
                            ? 'bg-white text-emerald-700'
                            : isSubmitted && isThisCorrect
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

              {/* True/False Options */}
              {q.type === 'bs' && (
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  {[
                    { val: true, label: 'BENAR' },
                    { val: false, label: 'SALAH' }
                  ].map((bs) => {
                    const isSelected = studentAns === bs.val;
                    const isThisCorrect = isSubmitted && bs.val === q.correctAnswer;
                    const isThisChosenWrong = isSubmitted && isSelected && !isThisCorrect;

                    let btnClasses = 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100';

                    if (isSubmitted) {
                      if (isThisCorrect) {
                        btnClasses = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-black';
                      } else if (isThisChosenWrong) {
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
                        onClick={() => handleSelectOption(q.id, bs.val)}
                        className={`p-3.5 rounded-xl text-center text-xs sm:text-sm font-bold border transition cursor-pointer disabled:cursor-default ${btnClasses}`}
                      >
                        {bs.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Explanation / Pembahasan Card after submit */}
              {isSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Pembahasan &amp; Kunci Jawaban:</span>
                  </div>
                  <p>{q.explanation}</p>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Bottom Submit Action */}
      <div className="sticky bottom-6 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-300 shadow-xl flex items-center justify-between gap-4">
        <div className="text-xs text-slate-600">
          Terjawab: <strong className="text-slate-900">{Object.keys(answers).length}</strong> dari{' '}
          <strong className="text-slate-900">{activePackage.questions.length}</strong> butir
        </div>

        <div className="flex items-center gap-3">
          {isSubmitted ? (
            <button
              onClick={handleResetQuiz}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Coba Lagi / Reset</span>
            </button>
          ) : (
            <button
              onClick={handleCheckAnswers}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Cek Jawaban &amp; Pembahasan</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
