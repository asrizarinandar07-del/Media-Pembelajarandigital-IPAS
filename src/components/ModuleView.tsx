import React, { useState } from 'react';
import { MODULES_DATA, SubBabModule } from '../data/modulesData';
import { 
  Compass, 
  Layers, 
  Users, 
  CheckCircle, 
  HelpCircle, 
  Lightbulb, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Split,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ModuleViewProps {
  onStartQuiz: (subBabId: 'sub-a' | 'sub-b' | 'sub-c') => void;
}

export const ModuleView: React.FC<ModuleViewProps> = ({ onStartQuiz }) => {
  const [activeSubBab, setActiveSubBab] = useState<'sub-a' | 'sub-b' | 'sub-c'>('sub-a');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>('cs-a1');
  const [interactiveOptionIndex, setInteractiveOptionIndex] = useState<number | null>(null);
  
  // Interactive Comparison Tool for Sub-Bab B
  const [comparisonCategory, setComparisonCategory] = useState<'air' | 'hutan' | 'pangan' | 'gempa'>('air');

  const currentModule = MODULES_DATA.find((m) => m.id === activeSubBab) || MODULES_DATA[0];

  const handleSubBabChange = (id: 'sub-a' | 'sub-b' | 'sub-c') => {
    setActiveSubBab(id);
    const mod = MODULES_DATA.find((m) => m.id === id);
    if (mod && mod.caseStudies.length > 0) {
      setSelectedCaseStudyId(mod.caseStudies[0].id);
    }
    setInteractiveOptionIndex(null);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Module Header Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Buku IPAS Kemendikdasmen 2025
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Modul Studi Kasus Kearifan Lokal Nusantara
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Jelajahi 3 sub-bab materi komprehensif yang dilengkapi gambar autentik, studi kasus interaktif, dan hikmah kebangsaan.
            </p>
          </div>

          <button
            onClick={() => onStartQuiz(activeSubBab)}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Kuis Formatif {currentModule.title.split(':')[0]}</span>
          </button>
        </div>

        {/* 3 Sub-Bab Navigation Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {MODULES_DATA.map((module) => {
            const isActive = module.id === activeSubBab;
            return (
              <button
                key={module.id}
                onClick={() => handleSubBabChange(module.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isActive
                    ? 'bg-emerald-50/90 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                  isActive ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-200 text-slate-600'
                }`}>
                  {module.id === 'sub-a' && <Compass className="w-5 h-5" />}
                  {module.id === 'sub-b' && <Layers className="w-5 h-5" />}
                  {module.id === 'sub-c' && <Users className="w-5 h-5" />}
                </div>
                <div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                    isActive ? 'text-emerald-700' : 'text-slate-500'
                  }`}>
                    {module.title.split(':')[0]}
                  </span>
                  <div className={`text-sm font-bold leading-tight mt-0.5 ${
                    isActive ? 'text-emerald-950' : 'text-slate-800'
                  }`}>
                    {module.title.split(':')[1]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Module Lead Narrative */}
      <div className="bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
          {currentModule.title}
        </h2>
        <p className="text-emerald-200 text-xs sm:text-sm font-medium mb-4">
          {currentModule.subtitle}
        </p>
        <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/15 text-xs sm:text-sm text-emerald-50 leading-relaxed">
          {currentModule.leadParagraph}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Detailed Theory & Points */}
        <div className="lg:col-span-2 space-y-6">
          {currentModule.sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3.5">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-5 bg-emerald-600 rounded-full" />
                <span>{section.heading}</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {section.description}
              </p>

              {section.highlightBox && (
                <div className="p-3.5 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 font-medium">
                  {section.highlightBox}
                </div>
              )}

              {section.points && section.points.length > 0 && (
                <div className="space-y-2 pt-1">
                  {section.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Interactive Checkpoint Question */}
          <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 border border-emerald-700/40 shadow-sm">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>Cek Pemahaman Interaktif</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-4 leading-relaxed">
              {currentModule.interactiveCheck.prompt}
            </h4>

            <div className="space-y-2.5">
              {currentModule.interactiveCheck.options.map((opt, oIdx) => {
                const isSelected = interactiveOptionIndex === oIdx;
                return (
                  <div key={oIdx}>
                    <button
                      onClick={() => setInteractiveOptionIndex(oIdx)}
                      className={`w-full p-3.5 rounded-xl text-left text-xs font-medium transition cursor-pointer border ${
                        isSelected
                          ? opt.isBest
                            ? 'bg-emerald-600 text-white border-emerald-400 font-bold'
                            : 'bg-rose-900/80 text-rose-100 border-rose-500'
                          : 'bg-white/10 text-emerald-100 hover:bg-white/20 border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt.text}</span>
                        {isSelected && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black/30 ml-2 flex-shrink-0">
                            {opt.isBest ? 'Tepat' : 'Kurang Tepat'}
                          </span>
                        )}
                      </div>
                    </button>

                    {isSelected && (
                      <div className={`mt-2 p-3 rounded-xl text-xs leading-relaxed animate-fadeIn ${
                        opt.isBest
                          ? 'bg-emerald-950/90 text-emerald-200 border border-emerald-500/50'
                          : 'bg-rose-950/90 text-rose-200 border border-rose-600/50'
                      }`}>
                        <strong>Umpan Balik:</strong> {opt.feedback}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Visual Case Studies */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Studi Kasus Visual Autentik
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                {currentModule.caseStudies.length} Pilihan Kasus
              </span>
            </div>

            {/* Case Studies Selector */}
            <div className="space-y-2 mb-4">
              {currentModule.caseStudies.map((cs) => {
                const isSelected = cs.id === selectedCaseStudyId;
                return (
                  <button
                    key={cs.id}
                    onClick={() => setSelectedCaseStudyId(cs.id)}
                    className={`w-full p-3 rounded-xl text-left text-xs font-bold transition flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <span className="truncate">{cs.title}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                      isSelected ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {cs.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Display active case study card */}
            {(() => {
              const activeCs = currentModule.caseStudies.find((c) => c.id === selectedCaseStudyId) || currentModule.caseStudies[0];
              if (!activeCs) return null;

              return (
                <div className="rounded-xl border border-slate-200 overflow-hidden space-y-3.5 bg-slate-50/50 animate-fadeIn">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={activeCs.image} 
                      alt={activeCs.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                        {activeCs.region}
                      </div>
                      <div className="text-sm font-bold leading-tight">
                        {activeCs.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeCs.story}
                    </p>

                    <div>
                      <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Nilai Luhur yang Terkandung:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCs.values.map((val, vIdx) => (
                          <span key={vIdx} className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs">
                      <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                        Refleksi Mandiri:
                      </div>
                      <p className="text-slate-600 italic">
                        &ldquo;{activeCs.reflectionQuestion}&rdquo;
                      </p>
                      <div className="mt-2 text-emerald-800 text-[11px] font-medium pt-2 border-t border-amber-200/60">
                        <strong>Hikmah:</strong> {activeCs.insight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>

      </div>

      {/* Special Feature for Sub-Bab B: Interactive Comparison Tool */}
      {activeSubBab === 'sub-b' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
              <Split className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Fitur Komparasi Interaktif: 4 Pilar Kecerdasan Ekologi Nusantara
              </h3>
              <p className="text-xs text-slate-500">
                Pilih bidang kearifan lokal untuk membandingkan teknologi tradisional dan nilai keberlanjutan:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'air', label: '1. Tata Kelola Air (Subak Bali)' },
              { id: 'hutan', label: '2. Konservasi Hutan (Sasi & Lubuk Larangan)' },
              { id: 'pangan', label: '3. Ketahanan Pangan (Lumbung Leuit Baduy)' },
              { id: 'gempa', label: '4. Arsitektur Gempa (Omo Sebua & Gadang)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setComparisonCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  comparisonCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {comparisonCategory === 'air' && (
              <>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="font-bold text-emerald-950 text-sm mb-1">Teknologi Tradisional: Subak Bali</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Menggunakan alat &ldquo;Tektek&rdquo; kayu bertakik yang membagi air secara proporsional sesuai luas petak sawah. Melibatkan pura dan ritual tanam serentak.
                  </p>
                  <span className="font-semibold text-emerald-700">Dampak: Memutus rantai hama secara biologis dan mencegah perebutan air antarpetani.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-sm mb-1">Nilai Luhur &amp; Persatuan</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Berlandaskan Tri Hita Karana (harmoni dengan Tuhan, sesama, dan alam). Menjunjung tinggi keadilan sosial dan musyawarah petani.
                  </p>
                  <span className="font-semibold text-slate-700">Diakui UNESCO sebagai warisan budaya dunia yang lestari lebih dari 1.000 tahun.</span>
                </div>
              </>
            )}

            {comparisonCategory === 'hutan' && (
              <>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="font-bold text-emerald-950 text-sm mb-1">Konservasi: Lubuk Larangan &amp; Sasi</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Zonasi sungai dan laut dilarang diambil ikannya dalam rentang 6-12 bulan. Ditegakkan melalui sanksi adat komunal dan denda sosial.
                  </p>
                  <span className="font-semibold text-emerald-700">Dampak: Biota laut/sungai berkembang biak melimpah dan tidak punah oleh eksploitasi liar.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-sm mb-1">Nilai Kesejahteraan Bersama</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Uang hasil panen ikan saat &ldquo;buka lubuk&rdquo; disalurkan untuk beasiswa anak yatim dan perbaikan sarana umum desa.
                  </p>
                  <span className="font-semibold text-slate-700">Konservasi alam terhubung langsung dengan kesejahteraan sosial masyarakat.</span>
                </div>
              </>
            )}

            {comparisonCategory === 'pangan' && (
              <>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="font-bold text-emerald-950 text-sm mb-1">Sistem Simpan: Leuit Baduy &amp; Ciptagelar</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Lumbung panggung kayu dan bambu berventilasi alami dengan sekam pelindung. Gabah tahan puluhan tahun tanpa zat kimia sintetik.
                  </p>
                  <span className="font-semibold text-emerald-700">Dampak: Desa memiliki kedaulatan pangan mandiri dan anti-gagal panen.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-sm mb-1">Filosofi Larangan Menjual Beras</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Masyarakat adat pantang menjual beras demi keuntungan uang. Beras dipandang sebagai anugerah hidup untuk kelangsungan generasi anak cucu.
                  </p>
                  <span className="font-semibold text-slate-700">Menjaga kemurnian niat bertani dan ketahanan pangan jangka panjang.</span>
                </div>
              </>
            )}

            {comparisonCategory === 'gempa' && (
              <>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="font-bold text-emerald-950 text-sm mb-1">Arsitektur: Omo Sebua &amp; Rumah Gadang</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Tiang kayu diagonal diletakkan di atas umpak batu sandi datar tanpa paku besi mati. Bangunan elastis bergoyang mengikuti gelombang seismik.
                  </p>
                  <span className="font-semibold text-emerald-700">Dampak: Tidak runtuh saat gempa dahsyat M 8,7 melanda Kepulauan Nias.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-sm mb-1">Pelajaran untuk Sains Modern</div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Menginspirasi konsep modern &ldquo;Base Isolation&rdquo; pada gedung pencakar langit dunia. Leluhur hidup selaras dengan karakter alam Nusantara.
                  </p>
                  <span className="font-semibold text-slate-700">Bukti kejeniusan rekayasa sipil bangsa Indonesia sebelum era modern.</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer call to action */}
      <div className="p-6 bg-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-slate-900">
            Sudah menguasai materi {currentModule.title.split(':')[0]}?
          </h4>
          <p className="text-xs text-slate-500">
            Uji kemampuanmu dengan menyelesaikan kuis formatif 4 butir soal dengan umpan balik langsung.
          </p>
        </div>
        <button
          onClick={() => onStartQuiz(activeSubBab)}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer whitespace-nowrap"
        >
          <span>Mulai Kuis Formatif</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
