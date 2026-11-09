export interface SubBabModule {
  id: 'sub-a' | 'sub-b' | 'sub-c';
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  leadParagraph: string;
  sections: {
    heading: string;
    description: string;
    highlightBox?: string;
    points?: string[];
  }[];
  caseStudies: {
    id: string;
    title: string;
    region: string;
    badge: string;
    image: string;
    story: string;
    values: string[];
    reflectionQuestion: string;
    insight: string;
  }[];
  interactiveCheck: {
    prompt: string;
    options: {
      text: string;
      isBest: boolean;
      feedback: string;
    }[];
  };
}

export const MODULES_DATA: SubBabModule[] = [
  {
    id: 'sub-a',
    title: 'Sub-Bab A: Jejak Budaya yang Sarat akan Nilai Luhur',
    subtitle: 'Mengenal Akar Tradisi, Nilai Kejujuran, Gotong Royong, dan Harmoni dengan Alam',
    iconName: 'Compass',
    color: 'emerald',
    leadParagraph: 'Kearifan lokal adalah pandangan hidup, pengetahuan, serta berbagai strategi kehidupan yang berwujud aktivitas yang dilakukan oleh masyarakat lokal dalam menjawab berbagai masalah dalam pemenuhan kebutuhan mereka. Warisan leluhur nusantara bukan sekadar peninggalan masa lampau, melainkan pedoman moral hidup yang mengalirkan nilai gotong royong, kejujuran, dan penghormatan tulus kepada alam.',
    sections: [
      {
        heading: '1. Apa itu Kearifan Lokal?',
        description: 'Kearifan lokal (local wisdom) merupakan gagasan-gagasan setempat yang bersifat bijaksana, penuh kearifan, bernilai baik, yang tertanam dan diikuti oleh anggota masyarakatnya. Kearifan lokal diwariskan secara turun-temurun melalui cerita rakyat, pepatah, nyanyian, upacara adat, serta praktik keseharian.',
        highlightBox: 'Prinsip Utama: Kearifan lokal selalu mengutamakan keberlanjutan hidup bersama dan keseimbangan ekosistem, bukan eksploitasi yang merusak.',
        points: [
          'Memiliki daya tahan terhadap budaya luar yang merusak.',
          'Mampu mengakomodasi dan mengintegrasikan unsur budaya baru tanpa kehilangan jati diri.',
          'Berfungsi memberi arah pada perkembangan budaya dan persatuan bangsa.'
        ]
      },
      {
        heading: '2. Nilai-Nilai Luhur dalam Jejak Budaya',
        description: 'Dalam setiap tradisi Nusantara, terdapat pilar nilai utama yang membentuk kepribadian bangsa Indonesia:',
        points: [
          'Gotong Royong: Beban seberat apa pun akan terasa ringan bila dipikul bersama (filosofi berat sama dipikul, ringan sama dijinjing).',
          'Kejujuran dan Amanah: Ketaatan memegang janji adat tanpa perlu diawasi aparat secara fisik.',
          'Penghormatan terhadap Lingkungan: Alam diposisikan sebagai ibu pertiwi yang wajib dijaga kelestariannya demi anak cucu.'
        ]
      }
    ],
    caseStudies: [
      {
        id: 'cs-a1',
        title: 'Tradisi Marakka Bola (Mengangkat Rumah Adat)',
        region: 'Suku Bugis - Barru & Soppeng, Sulawesi Selatan',
        badge: 'Gotong Royong Akbar',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
        story: 'Ketika seorang warga Bugis hendak pindah lokasi, rumah panggung kayu yang beratnya berpuluh-puluh ton tidak dibongkar, melainkan diangkat bersama-sama oleh ratusan pria desa secara serentak diiringi komando aba-aba dan sorak penyemangat. Para perempuan desa memasak hidangan tradisional untuk dimakan bersama setelah rumah berhasil dipindahkan.',
        values: ['Solidaritas tanpa pamrih', 'Kerukunan antarwarga', 'Kekuatan persatuan melampaui kepentingan pribadi'],
        reflectionQuestion: 'Apa yang terjadi jika ada warga yang enggan membantu saat tradisi Marakka Bola berlangsung?',
        insight: 'Tradisi ini membuktikan bahwa persatuan dan kesediaan meluangkan tenaga untuk sesama adalah fondasi kekuatan sosial yang membuat masyarakat tangguh menghadapi segala tantangan.'
      },
      {
        id: 'cs-a2',
        title: 'Kearifan Hukum Adat Sasi Laut dan Darat',
        region: 'Maluku & Raja Ampat, Papua Barat Daya',
        badge: 'Pelestarian Ekosistem',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
        story: 'Sasi adalah larangan adat untuk mengambil hasil alam tertentu (seperti teripang, lola, ikan baronang, atau kelapa) dalam jangka waktu tertentu di wilayah yang ditentukan. Ketika tetua adat menancapkan tanda sasi, tak ada satu pun warga yang berani melanggar. Saat "buka sasi" tiba, hasil panen melimpah dan dinikmati bersama serta disisihkan untuk kas desa dan tempat ibadah.',
        values: ['Kepatuhan pada hukum bersama', 'Mencegah eksploitasi berlebihan', 'Keadilan antargenerasi'],
        reflectionQuestion: 'Mengapa warga mematuhi tanda sasi meski tidak ada kamera pengawas atau polisi di laut?',
        insight: 'Warga memiliki kesadaran batin bahwa melanggar sasi berarti merusak hak anak cucu di masa depan dan mengkhianati amanah leluhur.'
      },
      {
        id: 'cs-a3',
        title: 'Hutan Larangan Adat Kenegerian Rumbio',
        region: 'Kabupaten Kampar, Riau',
        badge: 'Penjaga Sumber Air',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
        story: 'Masyarakat adat Rumbio melarang keras siapa pun menebang pohon di kawasan hutan larangan adat. Jika ada yang melanggar, mereka dijatuhi sanksi adat berupa denda semen ratusan sak untuk fasilitas umum atau beras dan kerbau. Hutan ini sengaja dijaga perawan agar mata air sungai Kampar tidak mengering dan mencegah banjir bandang.',
        values: ['Tanggung jawab ekologis', 'Kearifan mitigasi bencana alam', 'Kewibawaan musyawarah adat'],
        reflectionQuestion: 'Bagaimana tradisi ini melindungi masyarakat yang tinggal puluhan kilometer di hilir sungai?',
        insight: 'Hutan di hulu yang lestari adalah pelindung alami bagi seluruh warga lembah dari ancaman kekeringan maupun banjir lumpur.'
      }
    ],
    interactiveCheck: {
      prompt: 'Di lingkungan sekolahmu, terdapat kegiatan kerja bakti membersihkan saluran air menjelang musim hujan. Perilaku manakah yang paling mencerminkan nilai luhur gotong royong warisan leluhur?',
      options: [
        {
          text: 'Mengikuti kerja bakti hanya jika diberi imbalan uang jajan atau nilai tambahan oleh wali kelas.',
          isBest: false,
          feedback: 'Kurang tepat. Gotong royong sejati berlandaskan keikhlasan dan kesadaran bahwa kebersihan lingkungan adalah tanggung jawab bersama.'
        },
        {
          text: 'Datang paling awal, bersama teman berbagi tugas mengangkat sampah tanpa membedakan tugas ringan atau berat.',
          isBest: true,
          feedback: 'Sangat Tepat! Inilah wujud nyata nilai Marakka Bola di era modern: saling bahu-membahu dengan tulus demi kenyamanan seluruh warga sekolah.'
        },
        {
          text: 'Menonton teman-teman yang bekerja sambil mendokumentasikan kegiatan untuk diunggah ke media sosial.',
          isBest: false,
          feedback: 'Kurang tepat. Aksi nyata dan kontribusi langsung jauh lebih berharga daripada sekadar menjadi penonton.'
        }
      ]
    }
  },
  {
    id: 'sub-b',
    title: 'Sub-Bab B: Warna-Warni Kearifan Lokal',
    subtitle: 'Ragam Kecerdasan Nusantara: Tata Air, Adat Hutan, Pangan, dan Arsitektur Ramah Gempa',
    iconName: 'Layers',
    color: 'amber',
    leadParagraph: 'Nusantara yang terbentang dari Sabang sampai Merauke memiliki kondisi geografis yang unik. Nenek moyang bangsa Indonesia telah mengembangkan teknologi tradisional dan kearifan ekologis yang terbukti tangguh selama berabad-abad, membuktikan kecerdasan bangsa yang luar biasa.',
    sections: [
      {
        heading: '1. Tata Kelola Air: Sistem Subak di Bali',
        description: 'Subak bukan sekadar saluran irigasi sawah, melainkan organisasi kemasyarakatan petani Bali yang mengatur pembagian air berdasarkan prinsip keadilan dan keharmonisan Tri Hita Karana (hubungan harmonis manusia dengan Tuhan, sesama manusia, dan alam). Diakui sebagai Warisan Budaya Dunia oleh UNESCO.',
        points: [
          'Teknologi "Tektek": Pembagian jatah air sawah secara proporsional sesuai luas lahan tanpa ada petani yang serakah.',
          'Ritual Bersama di Pura Ulun Danu: Menanam padi serentak untuk memutus siklus hama secara biologis tanpa racun kimia.'
        ]
      },
      {
        heading: '2. Konservasi Sungai: Lubuk Larangan di Sumatera',
        description: 'Di Mandailing Natal (Sumut) dan Riau, bagian sungai tertentu disucikan dan dilarang ditangkap ikannya selama 6 hingga 12 bulan (Lubuk Larangan). Ikan dibiarkan bertelur dan berkembang biak. Saat dibuka, pesta rakyat panen ikan digelar, dan sebagian uang hasil lelang ikan dipakai memperbaiki madrasah, jalan, atau menyantuni anak yatim.',
        points: [
          'Menjaga populasi ikan lokal seperti ikan jurung / ikan semah tidak punah.',
          'Pemanfaatan ekonomi komunal yang mensejahterakan seluruh warga desa.'
        ]
      },
      {
        heading: '3. Ketahanan Pangan: Leuit Lumbung Padi Baduy & Ciptagelar',
        description: 'Masyarakat Kasepuhan Ciptagelar di Sukabumi dan Baduy di Banten menyimpan padi di bangunan lumbung khusus bernama "Leuit". Padi yang disimpan dapat bertahan puluhan tahun tanpa membusuk berkat sirkulasi udara alami dan teknik pengeringan jerami tradisional. Pantangan adat melarang keras menjual beras hasil panen agar masyarakat tidak pernah kelaparan.',
        points: [
          'Ketahanan pangan mandiri tanpa bergantung pada pasokan luar daerah.',
          'Menghargai setiap bulir padi sebagai wujud rasa syukur kepada Sang Pencipta.'
        ]
      },
      {
        heading: '4. Arsitektur Ramah Bencana Gempa Bumi',
        description: 'Nusantara berada di Cincin Api Pasifik (Ring of Fire). Nenek moyang kita merancang rumah adat yang elastis dan tahan guncangan gempa:',
        points: [
          'Omo Sebua (Nias Selatan): Tiang-tiang kayu diagonal dan pondasi batu pipih tanpa paku besi membuat bangunan fleksibel bergoyang mengikuti ritme gempa tanpa runtuh.',
          'Rumah Gadang (Minangkabau): Tiang bertumpu di atas batu sandi tanpa ditanam mati ke tanah, dihubungkan dengan pasak kayu lentur.',
          'Rumah Joglo (Jawa): Struktur tumpang sari yang kokoh mengunci beban ke tengah dan menyerap gelombang getaran tanah.'
        ]
      }
    ],
    caseStudies: [
      {
        id: 'cs-b1',
        title: 'Sistem Subak: Keadilan Pembagian Air',
        region: 'Pulau Bali',
        badge: 'UNESCO Heritage',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
        story: 'Petani yang sawahnya berada di hulu tidak boleh membendung air semaunya. Setiap anggota subak memiliki hak suara yang setara dalam rapat bulanan. Jika terjadi musim kemarau, jadwal pengaliran air diatur bergantian secara ketat sehingga tidak ada sawah petani di hilir yang mati kekeringan.',
        values: ['Keadilan distributif', 'Demokrasi akar rumput', 'Keseimbangan spiritual dan material'],
        reflectionQuestion: 'Apa hikmah dari prinsip "Tri Hita Karana" dalam kehidupan sehari-hari siswa?',
        insight: 'Kemakmuran bersama hanya dapat diraih bila kita tidak serakah mengambil hak orang lain dan selalu menjaga kelestarian alam.'
      },
      {
        id: 'cs-b2',
        title: 'Omo Sebua: Mahakarya Tahan Gempa',
        region: 'Bawomataluo, Nias Selatan, Sumatera Utara',
        badge: 'Arsitektur Seismik',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80',
        story: 'Ketika gempa dahsyat berkekuatan M 8,7 mengguncang Nias pada tahun 2005 dan meruntuhkan gedung-gedung beton modern, rumah-rumah adat Omo Sebua yang berusia ratusan tahun tetap berdiri tegak kokoh. Rahasianya terletak pada struktur rangka silang segitiga dan sistem pasak kayu bebas paku yang elastis.',
        values: ['Kejeniusan rancang bangun lokal', 'Adaptasi terhadap kondisi alam', 'Pemanfaatan material ramah lingkungan'],
        reflectionQuestion: 'Mengapa teknologi nenek moyang justru lebih tahan gempa dibanding banyak bangunan semen modern?',
        insight: 'Leluhur tidak melawan alam, melainkan merancang kehidupan yang selaras dan fleksibel mengikuti gerak alam.'
      }
    ],
    interactiveCheck: {
      prompt: 'Mengapa tradisi lumbung Leuit pada masyarakat adat melarang beras dijual ke luar desa?',
      options: [
        {
          text: 'Karena masyarakat adat tidak mau bergaul dengan masyarakat luar perkotaan.',
          isBest: false,
          feedback: 'Kurang tepat. Masyarakat adat tetap terbuka berinteraksi, namun memiliki prinsip ketat menjaga kebutuhan pangan dasar.'
        },
        {
          text: 'Untuk memastikan persediaan pangan keluarga dan desa selalu aman saat terjadi gagal panen atau paceklik panjang.',
          isBest: true,
          feedback: 'Tepat Sekali! Leuit adalah strategi ketahanan pangan mandiri (zero food crisis) agar generasi penerus tidak pernah menderita kelaparan.'
        },
        {
          text: 'Agar beras tersebut menjadi barang langka yang harganya melambung tinggi.',
          isBest: false,
          feedback: 'Kurang tepat. Filosofi adat sama sekali tidak memandang pangan pokok sebagai komoditas spekulasi keuntungan.'
        }
      ]
    }
  },
  {
    id: 'sub-c',
    title: 'Sub-Bab C: Keberagaman yang Menyatukan',
    subtitle: 'Musyawarah Adat, Resolusi Konflik Tradisional, dan Perekat Persatuan Bangsa',
    iconName: 'Users',
    color: 'teal',
    leadParagraph: 'Bangsa Indonesia dianugerahi lebih dari 1.300 suku bangsa dan 700 bahasa daerah. Nenek moyang kita telah mewariskan mekanisme sosial yang luar biasa untuk merawat perdamaian, menyelesaikan perselisihan dengan kepala dingin, dan menjadikan keragaman sebagai jembatan persatuan, bukan sumber perpecahan.',
    sections: [
      {
        heading: '1. Perjanjian Sakral Pela Gandong di Maluku',
        description: 'Pela Gandong adalah sistem ikatan persaudaraan tradisional antara dua desa atau lebih di Maluku yang seringkali berbeda keyakinan agama (misalnya desa Kristen dan desa Muslim). Kata "Pela" berarti persaudaraan yang diikat sumpah janji, sedangkan "Gandong" berarti satu rahim atau satu kandungan.',
        points: [
          'Kewajiban Saling Melindungi: Jika salah satu desa ditimpa bencana, desa saudaranya wajib datang membantu tanpa diminta.',
          'Pembangunan Tempat Ibadah Bersama: Warga desa Muslim ikut mengangkut kayu dan batu untuk renovasi gereja, dan sebaliknya warga desa Kristen ikut membangun masjid saudaranya.',
          'Larangan Menumpahkan Darah: Segala bentuk kekerasan antarwarga yang terikat pela dianggap pelanggaran adat paling tercela.'
        ]
      },
      {
        heading: '2. Falsafah Luhur Minahasa: Si Tou Timou Tumou Tou',
        description: 'Ditegaskan oleh pahlawan nasional Dr. Gerungan Saul Samuel Jacob Ratulangi, filosofi ini bermakna: "Manusia baru dapat dikatakan sebagai manusia jika ia telah memanusiakan manusia lainnya".',
        points: [
          'Membantu sesama yang sedang lemah tanpa memandang latar belakang suku atau keyakinan.',
          'Mengembangkan ilmu pengetahuan untuk dibagikan kembali kepada masyarakat luas.'
        ]
      },
      {
        heading: '3. Musyawarah Mufakat di Balai Pertemuan Adat',
        description: 'Dalam tradisi Minangkabau ada pepatah: "Bulek aie dek pambuluah, bulek kato dek mupakaik" (Bulat air karena pembuluh bambu, bulat kata karena mufakat). Masalah besar diselesaikan melalui musyawarah di Balai Kerapatan Adat hingga tercapai titik temu yang menenangkan semua pihak.',
        points: [
          'Mendengarkan semua pendapat sebelum mengambil keputusan bersama.',
          'Mengutamakan perdamaian dan keutuhan warga di atas kemenangan ego individu.'
        ]
      },
      {
        heading: '4. Membawa Kearifan Lokal ke Lingkungan Sekolah Kita',
        description: 'Sebagai murid Kelas VI, nilai-nilai luhur ini dapat kita terapkan secara nyata setiap hari:',
        points: [
          'Menolak segala bentuk ejekan atau perundungan (bullying) berlatar suku, agama, ras, dan bentuk fisik.',
          'Berbagi bekal dan bangga mengenakan batik serta pakaian adat saat peringatan hari besar nasional.',
          'Menyelesaikan perselisihan dengan berbicara baik-baik, meminta maaf, dan memaafkan.'
        ]
      }
    ],
    caseStudies: [
      {
        id: 'cs-c1',
        title: 'Pela Gandong: Merajut Damai Abadi',
        region: 'Kepulauan Maluku',
        badge: 'Resolusi Konflik',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
        story: 'Di Negeri Hitu (Islam) dan Negeri Hative (Kristen), ikatan pela gandong telah terjalin ratusan tahun. Ketika masa kelam kerusuhan sosial tahun 1999 melanda Ambon, ikatan persaudaraan pela gandong inilah yang menjadi benteng penyejuk. Warga saling menyembunyikan saudara pelanya dari kejaran provokator dan memulihkan perdamaian sejati di tanah Maluku.',
        values: ['Toleransi sejati', 'Persaudaraan lintas agama', 'Komitmen menjaga janji leluhur'],
        reflectionQuestion: 'Pelajaran berharga apa yang bisa kita petik untuk menjaga kerukunan di kelas kita?',
        insight: 'Perbedaan agama dan suku adalah anugerah Tuhan Yang Maha Esa. Persaudaraan kemanusiaan harus selalu berada di atas segala perbedaan.'
      }
    ],
    interactiveCheck: {
      prompt: 'Di kelasmu ada teman baru pindahan dari daerah lain yang logat bicaranya berbeda dan ditertawakan oleh beberapa murid. Sikap mana yang sesuai dengan filosofi "Si Tou Timou Tumou Tou"?',
      options: [
        {
          text: 'Ikut tertawa sebentar agar dianggap kompak dengan teman-teman sekelas lainnya.',
          isBest: false,
          feedback: 'Kurang tepat. Menertawakan logat teman adalah perbuatan tidak terpuji yang dapat melukai perasaannya.'
        },
        {
          text: 'Mengajak teman baru tersebut duduk bersama, mendengarkan ceritanya, dan membantunya beradaptasi dengan nyaman di kelas.',
          isBest: true,
          feedback: 'Luar Biasa! Inilah esensi memanusiakan sesama: merangkul, menghargai keunikan budayanya, dan membuatnya merasa diterima.'
        },
        {
          text: 'Diam saja dan pura-pura tidak mendengar agar tidak ikut campur dalam urusan orang lain.',
          isBest: false,
          feedback: 'Kurang tepat. Bersikap pasif saat ada teman yang diperlakukan tidak adil belum mencerminkan nilai empati luhur leluhur.'
        }
      ]
    }
  }
];
