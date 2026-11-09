import React from 'react';
import { Student, AppSettings } from '../types';
import { 
  Printer, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Award, 
  School, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface StudentReportViewProps {
  student: Student | null;
  settings: AppSettings;
  onBack: () => void;
  onPrint: () => void;
}

export const StudentReportView: React.FC<StudentReportViewProps> = ({
  student,
  settings,
  onBack,
  onPrint
}) => {
  if (!student) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto" />
        <h3 className="text-lg font-bold text-slate-800">Data Siswa Tidak Ditemukan</h3>
        <p className="text-xs text-slate-500">Silakan login sebagai siswa atau pilih siswa dari tabel guru.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold cursor-pointer"
        >
          Kembali ke Dashboard
        </button>
      </div>
    );
  }

  const isCompleted = student.skor !== null;
  const isPassed = student.status === 'Tuntas';

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* Action Bar (Hidden on print) */}
      <div className="flex flex-wrap items-center justify-between gap-4 print:hidden bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onPrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Rapor Siswa (PDF / Print)</span>
          </button>
        </div>
      </div>

      {/* Official Printable Report Card Document */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-300 shadow-xl print:shadow-none print:border-none print:p-0 print:m-0 max-w-4xl mx-auto text-slate-900">
        
        {/* Kop Surat Resmi */}
        <div className="border-b-4 border-double border-slate-900 pb-4 mb-6 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
            PEMERINTAH KABUPATEN DELI SERDANG / DINAS PENDIDIKAN
          </div>
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-950 mt-0.5">
            {settings.schoolName}
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Alamat: Tandam Hilir I, Kec. Hamparan Perak, Kab. Deli Serdang, Sumatera Utara
          </p>
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
            LAPORAN HASIL ASESMEN FORMATIF &amp; SUMATIF DIGITAL IPAS KELAS VI-A
          </div>
        </div>

        {/* Student Biodata Grid */}
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm border border-slate-200 rounded-xl p-4 bg-slate-50/50 mb-6">
          <div className="space-y-1.5">
            <div className="flex">
              <span className="w-32 text-slate-500 font-medium">Nama Peserta Didik</span>
              <span className="font-bold text-slate-900">: {student.nama}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-slate-500 font-medium">Nomor Induk Siswa (NIS)</span>
              <span className="font-mono font-bold text-slate-800">: {student.nis}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-slate-500 font-medium">NISN</span>
              <span className="font-mono font-bold text-slate-800">: {student.nisn}</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex">
              <span className="w-32 text-slate-500 font-medium">Mata Pelajaran</span>
              <span className="font-bold text-slate-900">: IPAS (Ilmu Pengetahuan Alam &amp; Sosial)</span>
            </div>
            <div className="flex">
              <span className="w-32 text-slate-500 font-medium">Materi Pelajaran</span>
              <span className="font-bold text-slate-900">: Bab 4 - Kearifan Lokal &amp; Persatuan</span>
            </div>
            <div className="flex">
              <span className="w-32 text-slate-500 font-medium">Fase / Kelas / Smt</span>
              <span className="font-bold text-slate-800">: Fase C / Kelas VI-a / Genap</span>
            </div>
          </div>
        </div>

        {/* Competency Achievement Table */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            A. Rekapitulasi Capaian Asesmen Akhir Bab
          </div>
          <table className="w-full text-xs sm:text-sm border border-slate-300 border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold text-center border-b border-slate-300">
                <th className="p-2.5 border-r border-slate-300 w-12">No</th>
                <th className="p-2.5 border-r border-slate-300 text-left">Elemen Capaian Pembelajaran</th>
                <th className="p-2.5 border-r border-slate-300 w-20">KKM</th>
                <th className="p-2.5 border-r border-slate-300 w-24">Skor Siswa</th>
                <th className="p-2.5 border-r border-slate-300 w-28">Status</th>
                <th className="p-2.5 w-32">Predikat</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 text-center border-r border-slate-300 font-bold">1</td>
                <td className="p-3 border-r border-slate-300">
                  <div className="font-bold text-slate-900">
                    Kearifan Lokal, Warisan Leluhur untuk Persatuan Bangsa
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Capaian kognitif (C2-C4): Pemahaman nilai luhur, analisis teknologi ekologis tradisional (Subak, Sasi, Leuit, Rumah Tahan Gempa), serta resolusi musyawarah kebhinekaan.
                  </div>
                </td>
                <td className="p-3 text-center border-r border-slate-300 font-bold text-emerald-800">
                  {settings.kkm}
                </td>
                <td className="p-3 text-center border-r border-slate-300 font-black text-base">
                  {student.skor !== null ? student.skor : '-'}
                </td>
                <td className="p-3 text-center border-r border-slate-300 font-bold">
                  {student.status === 'Tuntas' && (
                    <span className="text-emerald-700">Tuntas</span>
                  )}
                  {student.status === 'Remedial' && (
                    <span className="text-amber-700">Remedial</span>
                  )}
                  {student.status === 'Belum Mengerjakan' && (
                    <span className="text-slate-500">Belum Ujian</span>
                  )}
                </td>
                <td className="p-3 text-center font-bold text-xs">
                  {student.predikat}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reflection & Commitment Section */}
        {student.reflection ? (
          <div className="mb-8 border border-slate-200 rounded-xl p-4 bg-emerald-50/30">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
              B. Lembar Refleksi Diri &amp; Komitmen Aksi Kebhinekaan Siswa
            </div>
            <div className="space-y-2 text-xs text-slate-800">
              <div>
                <strong>1. Inspirasi Kearifan Lokal:</strong> {student.reflection.kearifanFavorit}
              </div>
              <div>
                <strong>2. Komitmen Nyata di Sekolah:</strong> {student.reflection.komitmenSekolah}
              </div>
              <div>
                <strong>3. Sikap terhadap Budaya Daerah:</strong> {student.reflection.tanggapanDaerah}
              </div>
              {student.reflection.pesanPersatuan && (
                <div>
                  <strong>4. Kalimat Motivasi Persatuan:</strong> &ldquo;{student.reflection.pesanPersatuan}&rdquo;
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-8 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 italic">
            Instrumen refleksi diri belum diisi oleh siswa.
          </div>
        )}

        {/* Signature Columns - Prompt Item 8 Specification */}
        <div className="grid grid-cols-2 gap-8 text-xs sm:text-sm pt-4 mt-8 border-t border-slate-300">
          
          {/* Kolom Kiri: Mengetahui Kepala Sekolah */}
          <div className="text-center space-y-1">
            <div className="text-slate-700">Mengetahui,</div>
            <div className="font-bold text-slate-900">Kepala {settings.schoolName}</div>
            
            {/* Signature blank space */}
            <div className="h-20" />

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
            
            {/* Signature blank space */}
            <div className="h-20" />

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
  );
};
