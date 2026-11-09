import React from 'react';
import { Student, AppSettings } from '../types';
import { Printer, X, Download } from 'lucide-react';

interface ClassRecapPrintModalProps {
  students: Student[];
  settings: AppSettings;
  onClose: () => void;
  onPrint: () => void;
}

export const ClassRecapPrintModal: React.FC<ClassRecapPrintModalProps> = ({
  students,
  settings,
  onClose,
  onPrint
}) => {
  const completedList = students.filter((s) => s.skor !== null);
  const completedCount = completedList.length;
  const passedCount = students.filter((s) => s.status === 'Tuntas').length;
  const remedialCount = students.filter((s) => s.status === 'Remedial').length;
  const notCompletedCount = students.length - completedCount;

  const averageScore = completedCount > 0
    ? Math.round(completedList.reduce((sum, s) => sum + (s.skor || 0), 0) / completedCount)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 print:p-0 print:bg-white print:static">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-300 overflow-hidden print:border-none print:shadow-none print:rounded-none">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="text-xs font-bold text-slate-700">
            Pratinjau Cetak: Rekapitulasi Nilai &amp; Ketuntasan Kelas VI-a
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrint}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Sekarang (Print / PDF)</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-800 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Sheet */}
        <div className="p-8 sm:p-12 text-slate-900 text-xs sm:text-sm">
          
          {/* Official Letterhead */}
          <div className="border-b-4 border-double border-slate-900 pb-3 mb-6 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
              PEMERINTAH KABUPATEN DELI SERDANG / DINAS PENDIDIKAN
            </div>
            <h2 className="text-lg sm:text-xl font-black uppercase text-slate-950 mt-0.5">
              {settings.schoolName}
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Alamat: Tandam Hilir I, Kec. Hamparan Perak, Kab. Deli Serdang, Sumatera Utara
            </p>
            <div className="text-[11px] font-bold text-slate-800 uppercase tracking-widest mt-2">
              REKAPITULASI CAPAIAN NILAI &amp; KETUNTASAN ASESMEN SUMATIF BAB 4 KELAS VI-A
            </div>
            <div className="text-[11px] text-slate-600 font-medium">
              Mata Pelajaran: IPAS • Materi: Kearifan Lokal, Warisan Leluhur untuk Persatuan Bangsa • KKM: {settings.kkm}
            </div>
          </div>

          {/* Quick Statistics Summary */}
          <div className="grid grid-cols-4 gap-3 text-center border border-slate-300 rounded-xl p-3 bg-slate-50 mb-6">
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Total Siswa</div>
              <div className="text-base font-black text-slate-900">{students.length} Siswa</div>
            </div>
            <div>
              <div className="text-[10px] text-emerald-700 uppercase font-bold">Tuntas Belajar</div>
              <div className="text-base font-black text-emerald-800">{passedCount} Siswa</div>
            </div>
            <div>
              <div className="text-[10px] text-amber-700 uppercase font-bold">Sesi Remedial</div>
              <div className="text-base font-black text-amber-800">{remedialCount} Siswa</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Rata-Rata Kelas</div>
              <div className="text-base font-black text-slate-900">{averageScore} / 100</div>
            </div>
          </div>

          {/* Table of 23 Students */}
          <table className="w-full text-xs border border-slate-400 border-collapse mb-8">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-400 text-center">
                <th className="p-2 border-r border-slate-400 w-10">No</th>
                <th className="p-2 border-r border-slate-400 w-24">NIS</th>
                <th className="p-2 border-r border-slate-400 w-32">NISN</th>
                <th className="p-2 border-r border-slate-400 text-left">Nama Lengkap Siswa</th>
                <th className="p-2 border-r border-slate-400 w-16">KKM</th>
                <th className="p-2 border-r border-slate-400 w-20">Skor</th>
                <th className="p-2 border-r border-slate-400 w-28">Status</th>
                <th className="p-2 w-32">Predikat</th>
              </tr>
            </thead>
            <tbody>
              {students.map((st) => (
                <tr key={st.nis} className="border-b border-slate-300">
                  <td className="p-2 text-center border-r border-slate-300 font-bold">{st.no}</td>
                  <td className="p-2 text-center border-r border-slate-300 font-mono">{st.nis}</td>
                  <td className="p-2 text-center border-r border-slate-300 font-mono">{st.nisn}</td>
                  <td className="p-2 border-r border-slate-300 font-semibold">{st.nama}</td>
                  <td className="p-2 text-center border-r border-slate-300">{settings.kkm}</td>
                  <td className="p-2 text-center border-r border-slate-300 font-black">
                    {st.skor !== null ? st.skor : '-'}
                  </td>
                  <td className="p-2 text-center border-r border-slate-300 font-bold">
                    {st.status === 'Tuntas' && <span className="text-emerald-700">Tuntas</span>}
                    {st.status === 'Remedial' && <span className="text-amber-700">Remedial</span>}
                    {st.status === 'Belum Mengerjakan' && <span className="text-slate-400">Belum Ujian</span>}
                  </td>
                  <td className="p-2 text-center">{st.predikat}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Official Signatures (Prompt Item 8) */}
          <div className="grid grid-cols-2 gap-8 pt-4 mt-8 border-t border-slate-300">
            {/* Kolom Kiri: Mengetahui Kepala Sekolah */}
            <div className="text-center space-y-1">
              <div className="text-slate-700">Mengetahui,</div>
              <div className="font-bold text-slate-900">Kepala {settings.schoolName}</div>
              
              {/* Space for physical signature and stamp */}
              <div className="h-24" />

              <div className="font-bold underline text-slate-950 uppercase tracking-tight">
                {settings.principalName}
              </div>
              <div className="text-slate-600 font-mono text-xs">
                NIP. {settings.principalNip}
              </div>
            </div>

            {/* Kolom Kanan: Tandam Hilir I, Tanggal Otomatis, Guru Kelas VI-a (Pengembang) */}
            <div className="text-center space-y-1">
              <div className="text-slate-700">
                {settings.location}, {settings.reportDate}
              </div>
              <div className="font-bold text-slate-900">Guru Kelas VI-a (Pengembang)</div>
              
              {/* Space for physical signature */}
              <div className="h-24" />

              <div className="font-bold underline text-slate-950 uppercase tracking-tight">
                {settings.teacherName}
              </div>
              <div className="text-slate-600 font-mono text-xs">
                NIP. {settings.teacherNip}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
