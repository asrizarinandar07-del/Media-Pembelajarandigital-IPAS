export interface ReflectionOptionItem {
  id: string;
  label: string;
  description: string;
}

export const KEARIFAN_FAVORIT_OPTIONS: ReflectionOptionItem[] = [
  {
    id: 'k1',
    label: 'Tradisi Marakka Bola (Bugis) - Gotong Royong Tanpa Pamrih',
    description: 'Menginspirasi saya untuk selalu rela menolong sesama teman tanpa mengharap imbalan.'
  },
  {
    id: 'k2',
    label: 'Sistem Subak (Bali) - Keadilan Pembagian Air & Tri Hita Karana',
    description: 'Mengajarkan saya pentingnya keadilan, kejujuran, dan menjaga harmoni dengan alam sekitar.'
  },
  {
    id: 'k3',
    label: 'Hukum Adat Sasi & Lubuk Larangan - Perlindungan Ekosistem',
    description: 'Membuka mata saya bahwa alam bukan untuk dirusak melainkan dirawat demi generasi mendatang.'
  },
  {
    id: 'k4',
    label: 'Arsitektur Ramah Gempa Omo Sebua & Rumah Gadang',
    description: 'Menumbuhkan rasa bangga atas kecerdasan sains dan arsitektur nenek moyang bangsa Indonesia.'
  },
  {
    id: 'k5',
    label: 'Persaudaraan Sakral Pela Gandong (Maluku)',
    description: 'Menjadi teladan terindah bagi saya dalam memupuk persaudaraan sejati lintas suku dan agama.'
  }
];

export const KOMITMEN_SEKOLAH_OPTIONS: ReflectionOptionItem[] = [
  {
    id: 's1',
    label: 'Menjaga kerukunan kelas dan berteman dengan siapa saja tanpa membedakan suku/agama',
    description: 'Saya berkomitmen untuk tidak memilih-milih teman dan merangkul semua teman sekelas.'
  },
  {
    id: 's2',
    label: 'Aktif gotong royong dalam piket kebersihan kelas dan kegiatan kerja bakti sekolah',
    description: 'Saya akan melaksanakan tugas piket dengan penuh tanggung jawab dan ikhlas.'
  },
  {
    id: 's3',
    label: 'Menolak keras segala bentuk perundungan (bullying) dan ejekan fisik/logat di sekolah',
    description: 'Saya akan membela teman yang diejek dan melaporkan tindakan tidak terpuji kepada guru.'
  },
  {
    id: 's4',
    label: 'Mengutamakan musyawarah santun dalam menyelesaikan silang pendapat kelompok',
    description: 'Saya akan mendengarkan masukan teman dengan kepala dingin dan mencari mufakat bersama.'
  },
  {
    id: 's5',
    label: 'Membimbing teman yang kesulitan belajar dengan ramah dan sabar (Si Tou Timou Tumou Tou)',
    description: 'Saya akan berbagi ilmu dengan teman sebangku tanpa merasa sombong atau meremehkan.'
  }
];

export const TANGGAPAN_DAERAH_OPTIONS: ReflectionOptionItem[] = [
  {
    id: 'd1',
    label: 'Sangat bangga dan ingin terus mempelajari tradisi leluhur daerah Sumatera Utara',
    description: 'Tradisi lokal seperti gotong royong dan kesantunan adat sangat bernilai luhur.'
  },
  {
    id: 'd2',
    label: 'Ingin memperkenalkan warisan budaya Indonesia kepada dunia melalui media digital',
    description: 'Memanfaatkan teknologi untuk menyebarkan pesan damai dan kearifan bangsa.'
  },
  {
    id: 'd3',
    label: 'Bertekad menjaga kelestarian lingkungan sekitar sekolah agar tetap asri dan hijau',
    description: 'Menerapkan prinsip cinta lingkungan yang diwariskan para leluhur nusantara.'
  }
];
