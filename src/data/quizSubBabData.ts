import { FormativePackage } from '../types';

export const QUIZ_SUB_BAB_A: FormativePackage[] = [
  {
    id: 'pkg-a1',
    title: 'Paket 1: Nilai Luhur & Hakikat Tradisi',
    questions: [
      {
        id: 'qa1-1',
        type: 'pg',
        question: 'Pengertian kearifan lokal (local wisdom) yang paling tepat menurut kajian IPAS adalah...',
        options: [
          { id: 'A', text: 'Peraturan pemerintah yang tertulis dalam undang-undang formal negara.' },
          { id: 'B', text: 'Pandangan hidup, nilai-nilai, dan tata cara hidup bijak yang diwariskan turun-temurun oleh masyarakat setempat.' },
          { id: 'C', text: 'Cerita mistis yang tidak memiliki manfaat bagi kehidupan sehari-hari.' },
          { id: 'D', text: 'Kebudayaan asing yang ditiru secara utuh oleh masyarakat perkotaan.' }
        ],
        correctAnswer: 'B',
        explanation: 'Kearifan lokal adalah tata nilai dan pengetahuan luhur setempat yang diwariskan lintas generasi untuk memecahkan masalah kehidupan secara harmonis.'
      },
      {
        id: 'qa1-2',
        type: 'pg',
        question: 'Pada tradisi Marakka Bola masyarakat Bugis, nilai luhur apa yang paling menonjol saat ratusan warga memindahkan rumah utuh?',
        options: [
          { id: 'A', text: 'Persaingan antarwarga desa untuk menunjukkan kekuatan fisik.' },
          { id: 'B', text: 'Keserakahan menguasai tanah milik tetangga.' },
          { id: 'C', text: 'Gotong royong tanpa pamrih dan solidaritas kebersamaan.' },
          { id: 'D', text: 'Keinginan mendapatkan upah materi yang berlimpah.' }
        ],
        correctAnswer: 'C',
        explanation: 'Marakka Bola adalah cermin gotong royong akbar di mana warga secara sukarela dan bersatu padu memikul rumah tetangganya tanpa mengharapkan imbalan uang.'
      },
      {
        id: 'qa1-3',
        type: 'bs',
        question: 'Kearifan lokal tradisi leluhur hanya berlaku pada masa lampau dan sudah tidak memiliki relevansi bagi kehidupan generasi masa kini.',
        correctAnswer: false,
        explanation: 'Salah. Nilai kearifan lokal seperti gotong royong, kejujuran, dan penjagaan lingkungan sangat relevan untuk mengatasi krisis sosial dan ekologis modern.'
      },
      {
        id: 'qa1-4',
        type: 'bs',
        question: 'Hukum adat Sasi di Maluku melarang pengambilan hasil alam tertentu dalam kurun waktu tertentu demi menjaga keberlanjutan ekosistem.',
        correctAnswer: true,
        explanation: 'Benar. Sasi bertujuan memberi kesempatan flora dan fauna laut/darat bereproduksi dan tumbuh besar sehingga tidak punah akibat eksploitasi berlebihan.'
      }
    ]
  },
  {
    id: 'pkg-a2',
    title: 'Paket 2: Ekologi & Kepatuhan Adat',
    questions: [
      {
        id: 'qa2-1',
        type: 'pg',
        question: 'Masyarakat adat Kenegerian Rumbio di Riau menjaga hutan larangan adat secara ketat dengan tujuan utama...',
        options: [
          { id: 'A', text: 'Menjual kayu gelondongan ke luar negeri demi keuntungan pribadi tetua adat.' },
          { id: 'B', text: 'Menjaga sumber mata air hulu sungai agar tidak kering dan mencegah bencana banjir serta longsor.' },
          { id: 'C', text: 'Mendirikan pabrik industri berskala internasional di tengah rimba.' },
          { id: 'D', text: 'Menakut-nakuti wisatawan asing yang berkunjung ke wilayah mereka.' }
        ],
        correctAnswer: 'B',
        explanation: 'Hutan larangan adat berfungsi sebagai daerah tangkapan air alami yang melindungi seluruh warga di hilir dari kekeringan maupun banjir lumpur.'
      },
      {
        id: 'qa2-2',
        type: 'pg',
        question: 'Sanksi adat bagi perusak hutan adat Rumbio yang berupa denda semen untuk fasilitas umum menunjukkan prinsip...',
        options: [
          { id: 'A', text: 'Pembalasan dendam yang merugikan semua pihak.' },
          { id: 'B', text: 'Keadilan restoratif untuk memperbaiki fasilitas kepentingan bersama masyarakat.' },
          { id: 'C', text: 'Ketidakpedulian tetua adat terhadap kelestarian alam.' },
          { id: 'D', text: 'Diskriminasi hukum yang hanya membebani masyarakat miskin.' }
        ],
        correctAnswer: 'B',
        explanation: 'Denda adat ditujukan untuk kepentingan sosial seluruh warga (restoratif) sekaligus memberikan efek jera yang mendidik.'
      },
      {
        id: 'qa2-3',
        type: 'bs',
        question: 'Kepatuhan masyarakat pada tanda Sasi didasari rasa takut pada polisi bersenjata yang berpatroli setiap jam di laut lepas.',
        correctAnswer: false,
        explanation: 'Salah. Kepatuhan sasi didasari oleh kesadaran batin, ketaatan moral, dan rasa hormat yang mendalam kepada norma adat serta leluhur.'
      },
      {
        id: 'qa2-4',
        type: 'bs',
        question: 'Semboyan "berat sama dipikul, ringan sama dijinjing" merupakan perwujudan nilai gotong royong yang menjadi ciri khas bangsa Indonesia.',
        correctAnswer: true,
        explanation: 'Benar. Pepatah ini mengajarkan bahwa segala kesulitan dapat diatasi bersama bila dipikul dengan persatuan yang tulus.'
      }
    ]
  },
  {
    id: 'pkg-a3',
    title: 'Paket 3: Harmoni Manusia dan Alam',
    questions: [
      {
        id: 'qa3-1',
        type: 'pg',
        question: 'Sikap yang mencerminkan pelestarian nilai kejujuran leluhur dalam lingkungan sekolah Kelas VI adalah...',
        options: [
          { id: 'A', text: 'Menyontek saat ujian ketika guru pengawas sedang lengah ke luar kelas.' },
          { id: 'B', text: 'Mengakui kesalahan secara jujur dan mengembalikan barang temuan kepada pemiliknya.' },
          { id: 'C', text: 'Menyembunyikan tempat pensil teman untuk bahan bercanda.' },
          { id: 'D', text: 'Menuduh teman lain ketika saluran wastafel kelas tersumbat.' }
        ],
        correctAnswer: 'B',
        explanation: 'Kejujuran adalah pondasi utama kearifan leluhur. Mengakui kesalahan dan mengembalikan barang temuan menunjukkan integritas moral yang luhur.'
      },
      {
        id: 'qa3-2',
        type: 'pg',
        question: 'Mengapa leluhur bangsa kita selalu meminta izin atau berdoa sebelum mengambil hasil alam seperti menebang pohon atau melaut?',
        options: [
          { id: 'A', text: 'Karena leluhur menganggap alam sebagai benda mati tanpa kegunaan.' },
          { id: 'B', text: 'Bentuk rasa hormat, kerendahan hati, dan pengingat agar tidak serakah mengeksploitasi alam.' },
          { id: 'C', text: 'Hanya sekadar formalitas tanpa memiliki makna batin apa pun.' },
          { id: 'D', text: 'Agar hasil alam dapat dijual dengan harga sepuluh kali lipat lebih mahal.' }
        ],
        correctAnswer: 'B',
        explanation: 'Ritual dan doa sebelum mengambil hasil alam menanamkan rasa syukur dan membatasi nafsu serakah manusia agar alam tetap lestari.'
      },
      {
        id: 'qa3-3',
        type: 'bs',
        question: 'Tradisi Sambatan atau Sinoman di Pulau Jawa adalah kegiatan gotong royong membantu tetangga hajatan atau membangun rumah tanpa menuntut upah.',
        correctAnswer: true,
        explanation: 'Benar. Sambatan dan sinoman adalah tradisi tolong-menolong berbasis persaudaraan antarwarga kampung.'
      },
      {
        id: 'qa3-4',
        type: 'bs',
        question: 'Eksploitasi tambang secara liar dan pembabatan hutan lindung merupakan contoh penerapan kearifan lokal yang modern.',
        correctAnswer: false,
        explanation: 'Salah. Eksploitasi liar justru bertolak belakang secara total dengan kearifan lokal yang selalu mengedepankan kelestarian alam.'
      }
    ]
  }
];

export const QUIZ_SUB_BAB_B: FormativePackage[] = [
  {
    id: 'pkg-b1',
    title: 'Paket 1: Tata Kelola Air & Subak Bali',
    questions: [
      {
        id: 'qb1-1',
        type: 'pg',
        question: 'Sistem Subak di Bali diakui oleh UNESCO sebagai Warisan Budaya Dunia karena...',
        options: [
          { id: 'A', text: 'Menggunakan mesin pompa air bertenaga diesel terbesar di Asia Tenggara.' },
          { id: 'B', text: 'Memadukan tata kelola air irigasi yang adil, demokratis, dan berlandaskan filosofi keselarasan Tri Hita Karana.' },
          { id: 'C', text: 'Mengharuskan setiap petani membayar pajak air yang sangat mahal kepada raja.' },
          { id: 'D', text: 'Hanya mengalirkan air ke sawah-sawah milik bangsawan kaya saja.' }
        ],
        correctAnswer: 'B',
        explanation: 'Subak memadukan sistem hidrologi terasering yang canggih dengan nilai keadilan sosial dan penghormatan spiritual Tri Hita Karana.'
      },
      {
        id: 'qb1-2',
        type: 'pg',
        question: 'Alat ukur tradisional "Tektek" berbahan kayu bertakik pada sistem Subak berfungsi untuk...',
        options: [
          { id: 'A', text: 'Menghitung jumlah ikan mas yang lewat di saluran irigasi.' },
          { id: 'B', text: 'Membagi volume aliran air secara proporsional dan adil sesuai dengan luas petak sawah masing-masing petani.' },
          { id: 'C', text: 'Menangkap pencuri padi di pematang sawah pada malam hari.' },
          { id: 'D', text: 'Menumbuk padi hasil panen menjadi tepung beras.' }
        ],
        correctAnswer: 'B',
        explanation: 'Tektek adalah pembagi debit air kayu bertakik proporsional yang memastikan tidak ada petani yang kekurangan atau memonopoli air.'
      },
      {
        id: 'qb1-3',
        type: 'bs',
        question: 'Dalam organisasi Subak, petani di wilayah hulu diperbolehkan menutup pintu air agar sawahnya basah dan sawah di hilir kekeringan.',
        correctAnswer: false,
        explanation: 'Salah. Musyawarah Subak melarang keras monopoli air di hulu; air dialirkan secara terjadwal dan adil demi keberhasilan panen bersama.'
      },
      {
        id: 'qb1-4',
        type: 'bs',
        question: 'Filosofi Tri Hita Karana mengajarkan tiga hubungan harmonis: manusia dengan Tuhan, manusia dengan sesama, dan manusia dengan alam lingkungan.',
        correctAnswer: true,
        explanation: 'Benar. Inilah tiga pilar utama kebahagiaan dan keberlanjutan hidup dalam pandangan kearifan budaya Bali.'
      }
    ]
  },
  {
    id: 'pkg-b2',
    title: 'Paket 2: Konservasi Sungai & Ketahanan Pangan',
    questions: [
      {
        id: 'qb2-1',
        type: 'pg',
        question: 'Tradisi Lubuk Larangan di Mandailing Natal (Sumatera Utara) dan Riau memiliki manfaat utama berupa...',
        options: [
          { id: 'A', text: 'Mencegah kepunahan ikan sungai lokal serta hasil panen ikannya disumbangkan untuk pembangunan desa.' },
          { id: 'B', text: 'Menghalangi perahu dagang melintasi sungai air tawar.' },
          { id: 'C', text: 'Menjadikan sungai tempat pembuangan limbah pabrik secara resmi.' },
          { id: 'D', text: 'Mengeringkan aliran sungai agar dapat diubah menjadi jalan raya aspal.' }
        ],
        correctAnswer: 'A',
        explanation: 'Lubuk Larangan melindungi siklus pemijahan ikan asli sungai (seperti ikan jurung/semah) dan dana panennya dipakai untuk kas sosial warga.'
      },
      {
        id: 'qb2-2',
        type: 'pg',
        question: 'Masyarakat adat Baduy dan Kasepuhan Ciptagelar menyimpan padi di "Leuit" dengan tujuan utama...',
        options: [
          { id: 'A', text: 'Menimbun padi agar harga beras di pasar kota menjadi sangat mahal.' },
          { id: 'B', text: 'Menjaga ketahanan pangan mandiri keluarga dan desa agar tidak pernah mengalami kelaparan saat paceklik.' },
          { id: 'C', text: 'Menghindari pemeriksaan petugas pajak dari dinas pertanian.' },
          { id: 'D', text: 'Mengeringkan padi untuk dijadikan bahan bakar pembangkit listrik.' }
        ],
        correctAnswer: 'B',
        explanation: 'Leuit adalah lumbung pangan tradisi yang menjamin ketersediaan beras keluarga bertahun-tahun bahkan puluhan tahun tanpa membusuk.'
      },
      {
        id: 'qb2-3',
        type: 'bs',
        question: 'Pada masyarakat adat Banten Kidul, menjual beras mentah hasil panen sawah merupakan pelanggaran larangan adat (pamali).',
        correctAnswer: true,
        explanation: 'Benar. Padi dipandang sebagai wujud rezeki kehidupan yang tidak boleh diperjualbelikan demi spekulasi komersial.'
      },
      {
        id: 'qb2-4',
        type: 'bs',
        question: 'Ikan pada zona Lubuk Larangan bebas diracun atau disetrum listrik kapan saja oleh siapa pun asalkan warga setempat.',
        correctAnswer: false,
        explanation: 'Salah. Meracun, menyetrum, atau menangkap ikan di luar masa buka lubuk adalah pelanggaran berat yang dikenai sanksi adat dan sosial.'
      }
    ]
  },
  {
    id: 'pkg-b3',
    title: 'Paket 3: Arsitektur Tradisional Ramah Bencana',
    questions: [
      {
        id: 'qb3-1',
        type: 'pg',
        question: 'Rumah adat Omo Sebua di Nias Selatan terbukti tidak runtuh saat diguncang gempa dahsyat berkekuatan M 8,7 karena...',
        options: [
          { id: 'A', text: 'Dibuat seluruhnya dari rangka besi cor bertulang setebal 2 meter.' },
          { id: 'B', text: 'Memiliki struktur tiang diagonal silang elastis dan tumpuan batu lempeng tanpa ditanam mati dengan semen.' },
          { id: 'C', text: 'Dibangun melayang di atas air laut lepas sehingga gelombang gempa tidak terasa.' },
          { id: 'D', text: 'Atapnya terbuat dari lempengan emas tebal yang menahan angin kencang.' }
        ],
        correctAnswer: 'B',
        explanation: 'Struktur diagonal dan sistem tumpuan batu bebas paku peninggalan leluhur Nias membuat bangunan lentur meredam getaran seismik gempa.'
      },
      {
        id: 'qb3-2',
        type: 'pg',
        question: 'Ciri khas arsitektur Rumah Gadang di Minangkabau yang membuatnya ramah gempa adalah...',
        options: [
          { id: 'A', text: 'Tiang-tiang utamanya tidak ditanam ke tanah, melainkan bertumpu di atas batu sandi pipih yang dapat bergeser fleksibel.' },
          { id: 'B', text: 'Memakai perekat semen instan kualitas nomor satu dari luar negeri.' },
          { id: 'C', text: 'Dindingnya terbuat dari kaca patri yang mudah pecah saat gempa.' },
          { id: 'D', text: 'Menggunakan paku besi besar di setiap sambungan tiang rumah.' }
        ],
        correctAnswer: 'A',
        explanation: 'Tiang di atas batu sandi berfungsi seperti sistem peredam isolasi dasar (base isolation) modern yang menyerap energi goncangan tanah.'
      },
      {
        id: 'qb3-3',
        type: 'bs',
        question: 'Penggunaan pasak kayu pengganti paku logam pada rumah adat Nusantara justru membuat rangka bangunan lebih elastis saat terjadi gempa.',
        correctAnswer: true,
        explanation: 'Benar. Sambungan pasak kayu memungkinkan rangka rumah bergerak meliuk mengikuti goyangan tanpa patah getas seperti paku besi kaku.'
      },
      {
        id: 'qb3-4',
        type: 'bs',
        question: 'Nusantara yang terletak di wilayah cincin api membuktikan bahwa nenek moyang kita sama sekali tidak memahami bahaya gempa bumi.',
        correctAnswer: false,
        explanation: 'Salah. Keberadaan rumah tahan gempa membuktikan leluhur Nusantara memiliki kecerdasan mitigasi bencana yang sangat tinggi.'
      }
    ]
  }
];

export const QUIZ_SUB_BAB_C: FormativePackage[] = [
  {
    id: 'pkg-c1',
    title: 'Paket 1: Harmoni Pela Gandong & Musyawarah',
    questions: [
      {
        id: 'qc1-1',
        type: 'pg',
        question: 'Makna paling mendalam dari tradisi ikatan persaudaraan "Pela Gandong" di Maluku adalah...',
        options: [
          { id: 'A', text: 'Perjanjian perdagangan rempah-rempah demi monopoli harga cengkih.' },
          { id: 'B', text: 'Persaudaraan sejati lintas desa yang mengikat warga berbeda agama untuk saling melindungi dan tolong-menolong.' },
          { id: 'C', text: 'Aturan wajib perang antarnegeri untuk memperluas wilayah kekuasaan.' },
          { id: 'D', text: 'Kompetisi tahunan dayung perahu antar pulau di laut Banda.' }
        ],
        correctAnswer: 'B',
        explanation: 'Pela Gandong adalah modal sosial persaudaraan sakral lintas iman yang menjaga kerukunan abadi masyarakat Maluku.'
      },
      {
        id: 'qc1-2',
        type: 'pg',
        question: 'Ketika warga desa Muslim di Maluku membantu memikul kayu untuk merenovasi gereja desa saudaranya, hal itu mencerminkan penerapan sila Pancasila...',
        options: [
          { id: 'A', text: 'Sila ke-1 dan Sila ke-3 (Persatuan Indonesia).' },
          { id: 'B', text: 'Hanya sila ke-5 tanpa peduli toleransi beragama.' },
          { id: 'C', text: 'Tidak ada hubungannya sama sekali dengan Pancasila.' },
          { id: 'D', text: 'Sila ke-4 saja tanpa unsur keagamaan.' }
        ],
        correctAnswer: 'A',
        explanation: 'Tindakan ini menyatukan penghormatan terhadap kebebasan beribadah (Sila 1) dan persatuan kebangsaan yang kokoh (Sila 3).'
      },
      {
        id: 'qc1-3',
        type: 'bs',
        question: 'Pepatah Minang "Bulek aie dek pambuluah, bulek kato dek mupakaik" mengajarkan bahwa keputusan terbaik dicapai lewat musyawarah bersama.',
        correctAnswer: true,
        explanation: 'Benar. Pepatah ini bermakna kebulatan tekad dan mufakat yang dicapai secara bijak dan damai melalui dialog bersama.'
      },
      {
        id: 'qc1-4',
        type: 'bs',
        question: 'Dalam musyawarah desa tradisional, orang yang berbicara paling keras dan kasar berhak memaksakan kehendaknya kepada orang lain.',
        correctAnswer: false,
        explanation: 'Salah. Musyawarah adat mengedepankan kesantunan, saling mendengar, dan mencari kemaslahatan bersama tanpa paksaan kekerasan.'
      }
    ]
  },
  {
    id: 'pkg-c2',
    title: 'Paket 2: Memanusiakan Sesama & Empati',
    questions: [
      {
        id: 'qc2-1',
        type: 'pg',
        question: 'Filosofi Minahasa "Si Tou Timou Tumou Tou" yang dipopulerkan Sam Ratulangi memiliki arti luhur...',
        options: [
          { id: 'A', text: 'Orang yang kaya raya berhak memerintah orang yang miskin sesuka hati.' },
          { id: 'B', text: 'Manusia baru dapat dikatakan manusia sejati jika ia hidup untuk memanusiakan atau menolong manusia lainnya.' },
          { id: 'C', text: 'Setiap orang harus berjuang sendiri-sendiri tanpa memedulikan penderitaan tetangga.' },
          { id: 'D', text: 'Kemenangan hanya milik mereka yang memiliki senjata paling tajam.' }
        ],
        correctAnswer: 'B',
        explanation: 'Filosofi ini menekankan bahwa harkat kemanusiaan diukur dari seberapa besar manfaat dan pertolongan kita bagi sesama manusia.'
      },
      {
        id: 'qc2-2',
        type: 'pg',
        question: 'Bagaimana cara seorang murid Kelas VI menerapkan nilai "Si Tou Timou Tumou Tou" di ruang kelas?',
        options: [
          { id: 'A', text: 'Menjauhi teman yang nilainya jelek agar tidak tertular kebodohan.' },
          { id: 'B', text: 'Membimbing teman yang kesulitan belajar dengan sabar dan menghargai perasaannya.' },
          { id: 'C', text: 'Membanggakan kekayaan orang tua di hadapan teman-teman sekelas.' },
          { id: 'D', text: 'Menertawakan teman yang salah menjawab pertanyaan guru.' }
        ],
        correctAnswer: 'B',
        explanation: 'Membantu teman belajar dengan penuh kesabaran dan kasih sayang adalah wujud nyata memanusiakan sesama di lingkungan sekolah.'
      },
      {
        id: 'qc2-3',
        type: 'bs',
        question: 'Keragaman suku dan budaya di Indonesia merupakan ancaman yang pasti akan menghancurkan keutuhan Negara Kesatuan Republik Indonesia.',
        correctAnswer: false,
        explanation: 'Salah. Keberagaman adalah kekayaan dan kekuatan bangsa bila dirawat dengan semangat Bhinneka Tunggal Ika dan kearifan lokal.'
      },
      {
        id: 'qc2-4',
        type: 'bs',
        question: 'Tradisi resolusi konflik berbasis kearifan lokal lebih mengutamakan pemulihan kerukunan persaudaraan dibanding sekadar hukuman kurungan.',
        correctAnswer: true,
        explanation: 'Benar. Penyelesaian adat bertujuan memulihkan luka batin para pihak agar dapat hidup berdampingan secara damai kembali.'
      }
    ]
  },
  {
    id: 'pkg-c3',
    title: 'Paket 3: Kebhinekaan di Sekolah & Bangsa',
    questions: [
      {
        id: 'qc2-3',
        type: 'pg',
        question: 'Jika terjadi perselisihan pendapat saat menentukan ketua regu pramuka di kelas VI, tindakan yang paling bijak adalah...',
        options: [
          { id: 'A', text: 'Membubarkan regu dan menolak mengikuti kegiatan perkemahan sekolah.' },
          { id: 'B', text: 'Bermusyawarah secara terbuka dan memilih berdasarkan kesepakatan mufakat atau voting demokratis yang dihormati bersama.' },
          { id: 'C', text: 'Menentukan ketua hanya berdasarkan siswa yang badannya paling besar dan menakutkan.' },
          { id: 'D', text: 'Mengajak berkelahi di luar gerbang sekolah setelah jam pelajaran selesai.' }
        ],
        correctAnswer: 'B',
        explanation: 'Musyawarah mufakat yang santun dan menerima hasil keputusan bersama adalah penerapan kearifan bangsa di lingkungan sekolah.'
      },
      {
        id: 'qc3-2',
        type: 'pg',
        question: 'Menghormati teman yang sedang menjalankan ibadah puasa atau kebaktian di hari Minggu merupakan pengamalan komitmen...',
        options: [
          { id: 'A', text: 'Toleransi keberagaman dan penghargaan hak asasi beragama.' },
          { id: 'B', text: 'Keseragaman budaya yang memaksakan satu kebiasaan saja.' },
          { id: 'C', text: 'Kemandirian tanpa perlu bergaul dengan orang lain.' },
          { id: 'D', text: 'Kepentingan pribadi yang mencari pujian dari orang tua.' }
        ],
        correctAnswer: 'A',
        explanation: 'Menghargai ibadah teman adalah bukti kedewasaan sikap toleransi yang menjaga persatuan bangsa.'
      },
      {
        id: 'qc3-3',
        type: 'bs',
        question: 'Mengejek warna kulit atau bentuk rambut teman sekelas bertentangan dengan ajaran luhur nenek moyang bangsa Indonesia.',
        correctAnswer: true,
        explanation: 'Benar. Ejekan fisik (body shaming) dan rasisme merusak martabat kemanusiaan dan merobek persatuan bangsa.'
      },
      {
        id: 'qc3-4',
        type: 'bs',
        question: 'Kearifan lokal di Indonesia hanya mementingkan suku sendiri dan menolak bekerja sama dengan orang dari suku lain.',
        correctAnswer: false,
        explanation: 'Salah. Banyak tradisi luhur Nusantara seperti Pela Gandong justru dirancang khusus untuk merekatkan hubungan antarsuku dan antaragama.'
      }
    ]
  }
];
