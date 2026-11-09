import React, { useState } from 'react';
import { AppSettings, Student } from '../types';
import { 
  Sliders, 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  School, 
  UserCheck, 
  FileCheck, 
  AlertTriangle 
} from 'lucide-react';

interface SettingsViewProps {
  settings: AppSettings;
  onSaveSettings: (newSettings: AppSettings) => void;
  onResetAllStudents: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onSaveSettings,
  onResetAllStudents
}) => {
  const [formData, setFormData] = useState<AppSettings>({ ...settings });
  const [savedAlert, setSavedAlert] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.kkm < 0 || formData.kkm > 100) {
      alert('Batas KKM harus berada di rentang 0 s.d. 100.');
      return;
    }
    onSaveSettings(formData);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  const handleResetConfirm = () => {
    const confirmation = window.confirm(
      'PERINGATAN: Apakah Anda yakin ingin mereset SELURUH data asesmen 23 siswa ke keadaan kosong/awal? Tindakan ini tidak dapat dibatalkan.'
    );
    if (confirmation) {
      onResetAllStudents();
      alert('Data asesmen 23 siswa resmi berhasil direset ke status awal (Belum Mengerjakan).');
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16 max-w-4xl mx-auto">
      
      {/* Settings Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
        <div className="flex items-start gap-3.5 mb-2">
          <div className="p-3 bg-amber-500 text-emerald-950 rounded-2xl shadow-md">
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-1">
              Pengaturan Sistem &amp; Profil Sekolah
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Konfigurasi KKM &amp; Identitas Rapor Resmi
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Kelola batas ketuntasan belajar (KKM), identitas guru pengembang, kepala sekolah, serta data kop surat rapor.
            </p>
          </div>
        </div>
      </div>

      {savedAlert && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>Pengaturan dan profil berhasil disimpan secara persisten! Dokumen rapor akan diperbarui seketika.</span>
        </div>
      )}

      {/* Main Settings Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
        
        {/* Section 1: KKM Dinamis */}
        <div className="border-b border-slate-100 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">
              Kriteria Ketuntasan Minimal (KKM)
            </h3>
          </div>
          <div className="max-w-xs">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Batas Skor Ketuntasan (0 - 100):
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="100"
                value={formData.kkm}
                onChange={(e) => setFormData({ ...formData, kkm: Number(e.target.value) })}
                className="w-32 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-lg font-black text-emerald-700 text-center focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
              <span className="text-xs text-slate-500">
                Default: <strong>75</strong>. Skor di bawah nilai ini wajib mengikuti remedial.
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Data Satuan Pendidikan & Lokasi */}
        <div className="border-b border-slate-100 pb-6 space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <School className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">
              Identitas Satuan Pendidikan &amp; Wilayah
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">
                Nama Satuan Pendidikan:
              </label>
              <input
                type="text"
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">
                Lokasi Surat Rapor (Kota/Desa):
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 uppercase mb-1">
                Tanggal Otomatis Rapor:
              </label>
              <input
                type="text"
                value={formData.reportDate}
                onChange={(e) => setFormData({ ...formData, reportDate: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 3: Data Guru & Kepala Sekolah (Prompt Item 8) */}
        <div className="border-b border-slate-100 pb-6 space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="w-5 h-5 text-cyan-600" />
            <h3 className="text-base font-bold text-slate-900">
              Identitas Tanda Tangan Dokumen Rapor
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            {/* Guru Pengembang */}
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
              <div className="font-bold text-slate-900 text-sm">
                Kolom Kanan: Guru Kelas VI-a (Pengembang)
              </div>
              
              <div>
                <label className="block font-semibold text-slate-600 mb-1">
                  Nama Guru Lengkap &amp; Gelar:
                </label>
                <input
                  type="text"
                  value={formData.teacherName}
                  onChange={(e) => setFormData({ ...formData, teacherName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-600 mb-1">
                  NIP Guru:
                </label>
                <input
                  type="text"
                  value={formData.teacherNip}
                  onChange={(e) => setFormData({ ...formData, teacherNip: e.target.value })}
                  placeholder="-"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Kepala Sekolah */}
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
              <div className="font-bold text-slate-900 text-sm">
                Kolom Kiri: Mengetahui Kepala Sekolah
              </div>

              <div>
                <label className="block font-semibold text-slate-600 mb-1">
                  Nama Kepala Sekolah &amp; Gelar:
                </label>
                <input
                  type="text"
                  value={formData.principalName}
                  onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                  placeholder="[Nama Kepala Sekolah]"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-600 mb-1">
                  NIP Kepala Sekolah:
                </label>
                <input
                  type="text"
                  value={formData.principalNip}
                  onChange={(e) => setFormData({ ...formData, principalNip: e.target.value })}
                  placeholder="[NIP Kepala Sekolah]"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Pengaturan</span>
          </button>
        </div>
      </form>

      {/* Danger Zone: Reset All Student Records */}
      <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-rose-800">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <h3 className="text-base font-bold">Zona Bahaya: Reset Database 23 Siswa</h3>
        </div>
        <p className="text-xs text-rose-700 leading-relaxed">
          Tindakan ini akan mengosongkan semua riwayat skor, status kelulusan, dan refleksi 23 siswa Kelas VI-a kembali ke keadaan awal sebelum asesmen dikerjakan (Zero Dummy Data).
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={handleResetConfirm}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Seluruh Data Siswa ke Awal</span>
          </button>
        </div>
      </div>

    </div>
  );
};
