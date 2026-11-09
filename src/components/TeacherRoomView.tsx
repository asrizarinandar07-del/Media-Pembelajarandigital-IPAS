import React, { useState } from 'react';
import { Student, AppSettings } from '../types';
import { calculatePredikat } from '../utils/storage';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Printer, 
  Download, 
  FileText, 
  Edit3, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Award,
  Users,
  X
} from 'lucide-react';

interface TeacherRoomViewProps {
  students: Student[];
  settings: AppSettings;
  onUpdateStudent: (updated: Student) => void;
  onViewStudentReport: (student: Student) => void;
  onPrintClassRecap: () => void;
}

export const TeacherRoomView: React.FC<TeacherRoomViewProps> = ({
  students,
  settings,
  onUpdateStudent,
  onViewStudentReport,
  onPrintClassRecap
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Tuntas' | 'Remedial' | 'Belum Mengerjakan'>('all');

  // Manual Edit Modal state
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [inputScore, setInputScore] = useState<number | string>('');

  // Class analytics
  const total = students.length;
  const completedList = students.filter((s) => s.skor !== null);
  const completedCount = completedList.length;
  const passedCount = students.filter((s) => s.status === 'Tuntas').length;
  const remedialCount = students.filter((s) => s.status === 'Remedial').length;
  const notCompletedCount = total - completedCount;

  const averageScore = completedCount > 0
    ? Math.round(completedList.reduce((sum, s) => sum + (s.skor || 0), 0) / completedCount)
    : 0;

  const highestScore = completedCount > 0
    ? Math.max(...completedList.map((s) => s.skor || 0))
    : 0;

  const lowestScore = completedCount > 0
    ? Math.min(...completedList.map((s) => s.skor || 0))
    : 0;

  const passPercentage = completedCount > 0
    ? Math.round((passedCount / completedCount) * 100)
    : 0;

  // Filtered Students
  const filteredStudents = students.filter((s) => {
    const matchesSearch = 
      s.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.nis.includes(searchTerm) ||
      s.nisn.includes(searchTerm);

    const matchesStatus = statusFilter === 'all' || s.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Handle manual score save
  const handleSaveManualScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent) return;

    const numScore = Number(inputScore);
    if (isNaN(numScore) || numScore < 0 || numScore > 100) {
      alert('Masukkan skor valid antara 0 s.d. 100.');
      return;
    }

    const isPassed = numScore >= settings.kkm;
    const newStatus = isPassed ? 'Tuntas' : 'Remedial';
    const newPredikat = calculatePredikat(numScore, settings.kkm);

    const updated: Student = {
      ...editingStudent,
      skor: numScore,
      status: newStatus,
      predikat: newPredikat,
      attemptCount: Math.max(editingStudent.attemptCount, 1),
      packageCompleted: editingStudent.packageCompleted || 'Manual Guru'
    };

    onUpdateStudent(updated);
    setEditingStudent(null);
  };

  // Reset student score
  const handleResetSingleStudent = (student: Student) => {
    const confirmReset = window.confirm(
      `Apakah Anda yakin ingin mereset nilai asesmen untuk ${student.nama} (NIS: ${student.nis}) ke status awal?`
    );
    if (!confirmReset) return;

    const updated: Student = {
      ...student,
      skor: null,
      status: 'Belum Mengerjakan',
      predikat: '-',
      attemptCount: 0,
      packageCompleted: null,
      reflection: null
    };

    onUpdateStudent(updated);
  };

  // Export CSV
  const handleExportCsv = () => {
    const headers = ['No', 'NIS', 'NISN', 'Nama Siswa', 'Skor Akhir', 'KKM', 'Status', 'Predikat', 'Jumlah Percobaan'];
    const rows = students.map((s) => [
      s.no,
      `'${s.nis}`,
      `'${s.nisn}`,
      `"${s.nama}"`,
      s.skor !== null ? s.skor : '-',
      settings.kkm,
      `"${s.status}"`,
      `"${s.predikat}"`,
      s.attemptCount
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + 
      [headers.join(','), ...rows.map(e => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Rekap_Nilai_IPAS_Kelas_VIa_${settings.location}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Teacher Room Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
          <div className="flex items-start gap-3.5">
            <div className="p-3 bg-amber-500 text-emerald-950 rounded-2xl shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-1">
                Panel Ruang Guru • Hak Akses Penuh
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Pangkalan Data &amp; Presensi Nilai Kelas VI-a
              </h1>
              <p className="text-xs text-slate-600 mt-0.5">
                {settings.schoolName} • KKM Aktif: <strong>{settings.kkm}</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleExportCsv}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Ekspor CSV / Excel</span>
            </button>

            <button
              onClick={onPrintClassRecap}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Rekap Nilai Kelas (PDF)</span>
            </button>
          </div>
        </div>

        {/* Analytic Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] font-bold text-slate-500 uppercase">Total Siswa</div>
            <div className="text-2xl font-black text-slate-900 mt-1">{total}</div>
            <div className="text-[10px] text-slate-500">Kelas VI-a resmi</div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
            <div className="text-[11px] font-bold text-emerald-700 uppercase">Tuntas Belajar</div>
            <div className="text-2xl font-black text-emerald-800 mt-1">{passedCount}</div>
            <div className="text-[10px] text-emerald-600">&ge; KKM ({passPercentage}%)</div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
            <div className="text-[11px] font-bold text-amber-700 uppercase">Remedial</div>
            <div className="text-2xl font-black text-amber-800 mt-1">{remedialCount}</div>
            <div className="text-[10px] text-amber-600">Perlu bimbingan</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] font-bold text-slate-500 uppercase">Belum Ujian</div>
            <div className="text-2xl font-black text-slate-700 mt-1">{notCompletedCount}</div>
            <div className="text-[10px] text-slate-500">Menunggu pengerjaan</div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-200">
            <div className="text-[11px] font-bold text-cyan-800 uppercase">Rata-Rata Nilai</div>
            <div className="text-2xl font-black text-cyan-900 mt-1">{averageScore}</div>
            <div className="text-[10px] text-cyan-700">Skor siswa selesai</div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200">
            <div className="text-[11px] font-bold text-purple-800 uppercase">Rentang Skor</div>
            <div className="text-xl font-black text-purple-900 mt-1">
              {highestScore} / {lowestScore}
            </div>
            <div className="text-[10px] text-purple-700">Tertinggi / Terendah</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari nama siswa, NIS, atau NISN..."
            className="w-full pl-10 pr-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-amber-500 outline-none transition"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {[
            { id: 'all', label: `Semua (${total})` },
            { id: 'Tuntas', label: `Tuntas (${passedCount})` },
            { id: 'Remedial', label: `Remedial (${remedialCount})` },
            { id: 'Belum Mengerjakan', label: `Belum (${notCompletedCount})` },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setStatusFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                statusFilter === f.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Students Table */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                <th className="py-3 px-3.5 w-12 text-center">No</th>
                <th className="py-3 px-3 w-24">NIS</th>
                <th className="py-3 px-3 w-32 hidden md:table-cell">NISN</th>
                <th className="py-3 px-4">Nama Lengkap Siswa</th>
                <th className="py-3 px-3 w-24 text-center">Skor Akhir</th>
                <th className="py-3 px-3 w-36 text-center">Status</th>
                <th className="py-3 px-3 w-36 text-center hidden sm:table-cell">Predikat</th>
                <th className="py-3 px-3 w-24 text-center hidden lg:table-cell">Percobaan</th>
                <th className="py-3 px-4 w-48 text-center">Aksi Guru</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-slate-500 italic">
                    Tidak ada siswa yang sesuai dengan filter pencarian.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((st) => (
                  <tr key={st.nis} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-3.5 text-center font-bold text-slate-600">
                      {st.no}
                    </td>
                    <td className="py-3.5 px-3 font-mono font-semibold text-slate-700">
                      {st.nis}
                    </td>
                    <td className="py-3.5 px-3 font-mono text-slate-500 hidden md:table-cell">
                      {st.nisn}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <div>{st.nama}</div>
                      {st.packageCompleted && (
                        <div className="text-[10px] text-emerald-700 font-semibold font-mono">
                          Paket: {st.packageCompleted}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span className={`font-black text-sm ${
                        st.skor !== null
                          ? st.skor >= settings.kkm
                            ? 'text-emerald-700'
                            : 'text-rose-700'
                          : 'text-slate-400'
                      }`}>
                        {st.skor !== null ? st.skor : '-'}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {st.status === 'Tuntas' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Tuntas
                        </span>
                      )}
                      {st.status === 'Remedial' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          Remedial
                        </span>
                      )}
                      {st.status === 'Belum Mengerjakan' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
                          Belum Ujian
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center font-semibold text-slate-700 hidden sm:table-cell text-xs">
                      {st.predikat}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono text-slate-600 hidden lg:table-cell">
                      {st.attemptCount}x
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        {/* View Report */}
                        <button
                          onClick={() => onViewStudentReport(st)}
                          title="Lihat Rapor Resmi Siswa"
                          className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition cursor-pointer"
                        >
                          <FileText className="w-4 h-4" />
                        </button>

                        {/* Manual Edit Score */}
                        <button
                          onClick={() => {
                            setEditingStudent(st);
                            setInputScore(st.skor !== null ? st.skor : '');
                          }}
                          title="Input / Koreksi Nilai Manual"
                          className="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-lg transition cursor-pointer"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        {/* Reset Single Student */}
                        {st.skor !== null && (
                          <button
                            onClick={() => handleResetSingleStudent(st)}
                            title="Reset Nilai Siswa Ini"
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg transition cursor-pointer"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Score Edit Modal */}
      {editingStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-slate-900">
                Input / Koreksi Nilai Siswa
              </h3>
              <button
                onClick={() => setEditingStudent(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl mb-4 text-xs space-y-1">
              <div className="font-bold text-slate-900">{editingStudent.nama}</div>
              <div className="text-slate-600">
                NIS: {editingStudent.nis} | NISN: {editingStudent.nisn}
              </div>
              <div className="text-emerald-700 font-semibold">
                Batas KKM Aktif: {settings.kkm}
              </div>
            </div>

            <form onSubmit={handleSaveManualScore} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Skor Asesmen (0 - 100):
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={inputScore}
                  onChange={(e) => setInputScore(e.target.value)}
                  placeholder="Contoh: 85"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none"
                  autoFocus
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingStudent(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer"
                >
                  Simpan Nilai
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
