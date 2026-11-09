import React from 'react';
import { 
  Sparkles, 
  Layers, 
  HelpCircle, 
  Award, 
  ArrowRight, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Flame, 
  Lightbulb, 
  Compass, 
  Users,
  Target
} from 'lucide-react';
import { Student, AppSettings } from '../types';

interface DashboardViewProps {
  role: 'guru' | 'siswa' | null;
  currentStudent: Student | null;
  students: Student[];
  settings: AppSettings;
  onNavigate: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  role,
  currentStudent,
  students,
  settings,
  onNavigate
}) => {
  // Stats calculation for Guru
  const totalStudents = students.length;
  const completedCount = students.filter((s) => s.skor !== null).length;
  const passedCount = students.filter((s) => s.status === 'Tuntas').length;
  const remedialCount = students.filter((s) => s.status === 'Remedial').length;
  const notCompletedCount = totalStudents - completedCount;

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/30">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-60 h-60 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-700/60 border border-emerald-500/40 rounded-full text-xs font-semibold text-emerald-200 mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>IPAS Kelas VI • Buku Kurikulum Kemendikdasmen 2025</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            Kearifan Lokal, Warisan Leluhur untuk Persatuan Bangsa
          </h1>
          
          <p className="mt-3 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            Selamat datang di media pembelajaran interaktif digital. Bersama-sama kita akan menelusuri jejak peradaban leluhur Nusantara, menguak kecerdasan ekologis nenek moyang, serta memetik nilai gotong royong dan musyawarah sebagai perekat persatuan bangsa Indonesia.
          </p>

          {/* User Specific Status Strip */}
          <div className="mt-6 pt-5 border-t border-emerald-700/50 flex flex-wrap items-center justify-between gap-4">
            {role === 'siswa' && currentStudent ? (
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold text-lg shadow-md">
                  {currentStudent.no}
                </div>
                <div>
                  <div className="text-xs text-emerald-200">Peserta Didik Aktif:</div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <span>{currentStudent.nama}</span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-700/80 text-emerald-200 font-mono">
                      NIS: {currentStudent.nis}
                    </span>
                  </div>
                </div>
              </div>
            ) : role === 'guru' ? (
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-amber-400 text-emerald-950 font-bold shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-amber-200 font-medium">Pengajar &amp; Pengembang:</div>
                  <div className="text-base font-bold text-white">{settings.teacherName}</div>
                  <div className="text-xs text-emerald-200/80">{settings.schoolName}</div>
                </div>
              </div>
            ) : null}

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('modul')}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Mulai Belajar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {role === 'siswa' && (
                <button
                  onClick={() => onNavigate('asesmen')}
                  className="px-4 py-2.5 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm rounded-xl border border-emerald-500/40 transition cursor-pointer"
                >
                  Asesmen Bab 4
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Student Progress Badge if Logged In as Student */}
      {role === 'siswa' && currentStudent && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Status Capaian Asesmen Akhir Siswa
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-slate-800">
                  {currentStudent.skor !== null ? `${currentStudent.skor} / 100` : 'Belum Mengerjakan'}
                </span>

                {currentStudent.status === 'Tuntas' && (
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    TUNTAS (KKM {settings.kkm})
                  </span>
                )}

                {currentStudent.status === 'Remedial' && (
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                    STATUS: REMEDIAL
                  </span>
                )}

                {currentStudent.status === 'Belum Mengerjakan' && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                    Belum Mengikuti Asesmen
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate(currentStudent.skor !== null ? 'hasil-asesmen' : 'asesmen')}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <span>{currentStudent.skor !== null ? 'Lihat Lembar Hasil' : 'Ikuti Asesmen Sekarang'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats for Teacher */}
      {role === 'guru' && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Siswa Resmi</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{totalStudents}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Kelas VI-a (UPT SPF SD Inpres 105285)</div>
          </div>

          <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 shadow-sm">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Siswa Tuntas</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-800 mt-1">{passedCount}</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">Skor &ge; KKM {settings.kkm}</div>
          </div>

          <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 shadow-sm">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">Siswa Remedial</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-800 mt-1">{remedialCount}</div>
            <div className="text-[11px] text-amber-600 mt-0.5">Mengikuti pemantapan khusus</div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Belum Mengerjakan</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-700 mt-1">{notCompletedCount}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Menunggu pengerjaan siswa</div>
          </div>
        </div>
      )}

      {/* Learning Objectives Grid (Tujuan Pembelajaran IPAS Bab 4) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Tujuan Pembelajaran (Alur Capaian Pembelajaran IPAS Bab 4)
            </h2>
            <p className="text-xs text-slate-500">
              Kompetensi yang akan dikuasai murid setelah mempelajari media interaktif ini:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-gradient-to-b from-emerald-50/60 to-white border border-emerald-200/80">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mb-3 shadow-sm">
              TP 1
            </div>
            <h3 className="text-sm font-bold text-emerald-950 mb-1">
              Menemukan Jejak Budaya &amp; Nilai Luhur
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Peserta didik mampu mengidentifikasi asal-usul warisan tradisi leluhur serta merefleksikan nilai gotong royong, kejujuran, dan penghormatan tulus kepada alam sekitar.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-b from-amber-50/60 to-white border border-amber-200/80">
            <div className="w-7 h-7 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center text-xs mb-3 shadow-sm">
              TP 2
            </div>
            <h3 className="text-sm font-bold text-amber-950 mb-1">
              Menganalisis Ragam Kearifan Nusantara
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Peserta didik mampu menelaah kecerdasan lokal Nusantara dalam tata kelola air (Subak), hukum konservasi hutan (Sasi/Lubuk Larangan), ketahanan pangan (Leuit), dan arsitektur gempa.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-b from-teal-50/60 to-white border border-teal-200/80">
            <div className="w-7 h-7 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center text-xs mb-3 shadow-sm">
              TP 3
            </div>
            <h3 className="text-sm font-bold text-teal-950 mb-1">
              Merawat Keragaman untuk Persatuan
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Peserta didik mampu membuktikan kearifan lokal (Pela Gandong, Si Tou Timou Tumou Tou, musyawarah mufakat) sebagai perekat perdamaian dan keutuhan NKRI di sekolah.
            </p>
          </div>
        </div>
      </div>

      {/* Main Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Modul Pembelajaran */}
        <div 
          onClick={() => onNavigate('modul')}
          className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">3 Sub-Bab Lengkap</span>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-0.5">
            Modul Pembelajaran IPAS
          </h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Eksplorasi 3 modul studi kasus bergambar autentik: Jejak Budaya, Warna-Warni Kearifan, dan Keberagaman yang Menyatukan.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
            <span>Buka Modul Belajar</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

        {/* Kuis Formatif Sub-Bab */}
        <div 
          onClick={() => onNavigate('kuis-subbab')}
          className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <HelpCircle className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">36 Soal Latihan</span>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mt-0.5">
            Kuis Formatif Sub-Bab
          </h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Uji pemahaman per sub-bab dengan paket kuis interaktif (Pilihan Ganda &amp; Benar/Salah) dengan visual koreksi langsung dan kunci pembahasan.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
            <span>Latihan Kuis Sekarang</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

        {/* Asesmen Akhir Sumatif */}
        <div 
          onClick={() => onNavigate('asesmen')}
          className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Award className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">6 Paket Soal C2-C4</span>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mt-0.5">
            Asesmen Akhir Sumatif
          </h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Evaluasi sumatif akhir Bab 4 dengan 10 butir soal kognitif setara (PG, PG Kompleks, Benar/Salah), kelulusan KKM, dan sertifikasi tuntas.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
            <span>Buka Asesmen Bab 4</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

      </div>

      {/* Interactive Heritage Spotlight Section */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-400 text-emerald-950 rounded-xl">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold">
            Tahukah Kamu? Warisan Cerdas Nusantara yang Mengagumkan Dunia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
            <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Sistem Subak Bali
            </div>
            <p className="text-emerald-100/90 leading-relaxed">
              Telah beroperasi lebih dari 1.000 tahun! Memadukan terasering indah, hidrologi air adil, dan filosofi Tri Hita Karana diakui UNESCO.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
            <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Omo Sebua Nias
            </div>
            <p className="text-emerald-100/90 leading-relaxed">
              Rumah adat anti-gempa tanpa satu pun paku besi. Terbukti berdiri kokoh saat gempa M 8,7 meluluhlantakkan bangunan beton pada 2005.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
            <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              Pela Gandong Maluku
            </div>
            <p className="text-emerald-100/90 leading-relaxed">
              Ikatan sumpah persaudaraan sakral antara desa Muslim dan Kristen untuk saling membela, membangun rumah ibadah, dan merawat damai.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
            <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              Marakka Bola Bugis
            </div>
            <p className="text-emerald-100/90 leading-relaxed">
              Mengangkat rumah kayu panggung puluhan ton secara serentak bersama ratusan warga desa tanpa pamrih imbalan uang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
