import { SummativePackage } from '../types';

export const SUMMATIVE_PACKAGES: SummativePackage[] = [
  {
    id: 'paket-1',
    code: 'PAKET 1',
    title: 'Asesmen Akhir Bab 4 - Paket 1 (Standar Akreditasi)',
    description: 'Fokus: Harmoni Ekologi, Arsitektur Tradisional, dan Modal Sosial Persatuan',
    questions: [
      // 5 PG
      {
        id: 'p1-q1',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Perhatikan narasi berikut: Di Kepulauan Maluku, tradisi Sasi melarang pengambilan lola (kerang mutiara) dan teripang selama satu tahun penuh hingga tetua adat mengumumkan buka sasi.',
        question: 'Dampak ekologis jangka panjang yang paling nyata dari penerapan tradisi Sasi tersebut adalah...',
        options: [
          { id: 'A', text: 'Harga teripang di pasar internasional mengalami penurunan drastis.' },
          { id: 'B', text: 'Biota laut memiliki waktu bereproduksi optimal sehingga stok hayati terjaga lestari.' },
          { id: 'C', text: 'Para nelayan kehilangan mata pencaharian untuk selamanya.' },
          { id: 'D', text: 'Terumbu karang mengalami pemutihan akibat terlalu banyak lumut.' }
        ],
        correctAnswer: 'B',
        explanation: 'Tradisi Sasi memberi jeda biologis bagi ekosistem laut untuk pulih dan memperbanyak diri, mencegah kepunahan akibat eksploitasi berlebih.'
      },
      {
        id: 'p1-q2',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Dalam sistem pengairan Subak di Bali, pembagian air antar-petani diatur menggunakan bilah kayu bertakik yang disebut "Tektek".',
        question: 'Prinsip keadilan sosial apa yang tercermin dari penggunaan teknologi tradisional Tektek tersebut?',
        options: [
          { id: 'A', text: 'Petani yang memiliki kerabat pejabat berhak mendapat air dua kali lipat.' },
          { id: 'B', text: 'Volume air dialirkan secara proporsional sesuai kebutuhan luas sawah tanpa diskriminasi.' },
          { id: 'C', text: 'Petani yang berada paling dekat dengan mata air boleh menguasai seluruh aliran.' },
          { id: 'D', text: 'Air hanya diberikan kepada petani yang memenangkan undian tahunan.' }
        ],
        correctAnswer: 'B',
        explanation: 'Tektek menjamin keadilan distributif; debit air terbagi secara proporsional dengan luas lahan sehingga tidak ada pihak yang dizalimi.'
      },
      {
        id: 'p1-q3',
        type: 'pg',
        cognitiveLevel: 'C4',
        context: 'Ketika gempa berkekuatan M 8,7 melanda Nias pada 2005, rumah adat Omo Sebua tetap kokoh berdiri, sementara banyak gedung beton modern di sekitarnya roboh.',
        question: 'Berdasarkan analisis struktur arsitektur lokal, faktor utama yang membuat Omo Sebua tahan gempa adalah...',
        options: [
          { id: 'A', text: 'Dindingnya terbuat dari lempengan baja tahan karat buatan pabrik.' },
          { id: 'B', text: 'Sistem tiang diagonal silang elastis dan tumpuan batu bebas paku yang menyerap energi getaran.' },
          { id: 'C', text: 'Dibangun di atas bukit pasir yang tidak dapat dirambati gelombang seismik.' },
          { id: 'D', text: 'Memiliki mantra pelindung yang digantung pada puncak bubungan atap.' }
        ],
        correctAnswer: 'B',
        explanation: 'Sambungan pasak kayu elastis dan tumpuan tiang di atas batu sandi berfungsi meredam dan menyerap energi kinetik gelombang gempa.'
      },
      {
        id: 'p1-q4',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Pepatah Minangkabau berbunyi: "Bulek aie dek pambuluah, bulek kato dek mupakaik". Pepatah ini selalu dipraktikkan di Balai Kerapatan Adat.',
        question: 'Makna paling relevan pepatah tersebut dalam menjaga persatuan bangsa Indonesia adalah...',
        options: [
          { id: 'A', text: 'Setiap keputusan bersama harus dicapai melalui musyawarah untuk mufakat yang menenangkan semua pihak.' },
          { id: 'B', text: 'Air yang mengalir dalam bambu dapat digunakan untuk mencuci pakaian di sungai.' },
          { id: 'C', text: 'Keputusan hanya boleh diambil oleh satu orang pemimpin terkuat tanpa mendengar rakyat.' },
          { id: 'D', text: 'Perselisihan harus diselesaikan dengan adu argumentasi hingga salah satu pihak menyerah.' }
        ],
        correctAnswer: 'A',
        explanation: 'Pepatah tersebut mengajarkan kebulatan tekad melalui musyawarah mufakat yang santun, menghindari perpecahan dan permusuhan.'
      },
      {
        id: 'p1-q5',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Masyarakat Suku Baduy memiliki tradisi lumbung Leuit yang diisi padi hasil panen dan diharamkan untuk dijual.',
        question: 'Tujuan utama larangan menjual padi simpanan Leuit bagi keberlangsungan hidup masyarakat adalah...',
        options: [
          { id: 'A', text: 'Mencegah interaksi jual beli dengan suku lain.' },
          { id: 'B', text: 'Menjaga ketahanan pangan keluarga saat musim paceklik atau gagal panen berkepanjangan.' },
          { id: 'C', text: 'Menghindari biaya sewa gudang komersial di kota.' },
          { id: 'D', text: 'Mengumpulkan harta kekayaan pribadi untuk diwariskan ke generasi berikutnya.' }
        ],
        correctAnswer: 'B',
        explanation: 'Leuit adalah jaminan ketahanan pangan mandiri masyarakat adat agar tidak bergantung pada pasar dan terhindar dari kelaparan.'
      },
      // 2 PG Kompleks
      {
        id: 'p1-q6',
        type: 'pg_kompleks',
        cognitiveLevel: 'C4',
        context: 'Perhatikan 4 pernyataan mengenai tradisi ikatan persaudaraan "Pela Gandong" di Maluku berikut:',
        statements: [
          { id: 'I', text: 'Mengikat persaudaraan abadi antara desa-desa yang berbeda latar belakang agama (Muslim dan Kristen).' },
          { id: 'II', text: 'Warga desa saling membantu dalam pembangunan rumah ibadah (masjid dan gereja) secara bergantian.' },
          { id: 'III', text: 'Mengharuskan salah satu desa mengubah keyakinan agamanya agar sama dengan desa saudaranya.' },
          { id: 'IV', text: 'Menjadi benteng sosial penyejuk dalam meredam konflik perselisihan antarwarga di Maluku.' }
        ],
        question: 'Kombinasi pernyataan yang BENAR mengenai esensi dan peran Pela Gandong adalah...',
        correctStatements: ['I', 'II', 'IV'],
        explanation: 'Pernyataan I, II, dan IV benar. Pernyataan III salah karena Pela Gandong justru merawat toleransi tanpa pernah memaksa keseragaman keyakinan.'
      },
      {
        id: 'p1-q7',
        type: 'pg_kompleks',
        cognitiveLevel: 'C3',
        context: 'Di bawah ini adalah beberapa contoh perilaku siswa di lingkungan sekolah dasar:',
        statements: [
          { id: 'I', text: 'Bahu-membahu membersihkan ruang kelas tanpa membedakan tugas laki-laki dan perempuan.' },
          { id: 'II', text: 'Hanya mau berteman dengan teman yang berasal dari suku atau daerah asal yang sama.' },
          { id: 'III', text: 'Menghargai teman yang sedang menjalankan ibadah keagamaan saat istirahat siang.' },
          { id: 'IV', text: 'Mengejek dialek atau logat bicara teman baru pindahan dari luar pulau.' }
        ],
        question: 'Sikap yang mencerminkan pelestarian nilai luhur kearifan lokal ditunjukkan oleh nomor...',
        correctStatements: ['I', 'III'],
        explanation: 'Pernyataan I (gotong royong) dan III (toleransi beragama) mencerminkan nilai luhur leluhur. Pernyataan II dan IV adalah sikap primordial yang merusak persatuan.'
      },
      // 3 Benar / Salah
      {
        id: 'p1-q8',
        type: 'bs',
        cognitiveLevel: 'C3',
        context: 'Studi Kasus: Di Mandailing Natal, tradisi Lubuk Larangan menetapkan bagian sungai dilarang dipancing ikannya selama 1 tahun. Setelah dibuka, uang hasil lelang ikan digunakan untuk beasiswa anak yatim di desa.',
        question: 'Tradisi Lubuk Larangan tidak hanya menjaga kelestarian fauna air tawar, melainkan juga memperkuat solidaritas sosial dan kesejahteraan ekonomi warga desa.',
        correctBs: true,
        explanation: 'Benar. Lubuk Larangan memadukan konservasi hayati sungai dengan fungsi filantropi sosial untuk membantu warga yang membutuhkan.'
      },
      {
        id: 'p1-q9',
        type: 'bs',
        cognitiveLevel: 'C2',
        context: 'Kearifan lokal masyarakat pedalaman Kalimantan dalam bertani ladang berpindah disertai ritual pemulihan tanah dan larangan membakar hutan lindung.',
        question: 'Kearifan lokal masyarakat adat selalu identik dengan perusakan lingkungan karena mereka belum mengenal teknologi laboratorium modern.',
        correctBs: false,
        explanation: 'Salah. Praktik adat leluhur justru memiliki aturan ketat zonasi hutan dan konservasi tanah yang sangat ramah lingkungan.'
      },
      {
        id: 'p1-q10',
        type: 'bs',
        cognitiveLevel: 'C4',
        context: 'Filosofi "Si Tou Timou Tumou Tou" dari Minahasa mengajarkan bahwa kesempurnaan manusia diukur dari seberapa besar ia memanusiakan dan mendidik orang lain.',
        question: 'Penerapan filosofi ini di kelas VI adalah dengan cara membantu teman sebangku yang kesulitan memahami pelajaran tanpa merendahkan kemampuannya.',
        correctBs: true,
        explanation: 'Benar. Memanusiakan orang lain berarti memperlakukan sesama dengan martabat, rasa empati, dan kesabaran tulus.'
      }
    ]
  },
  {
    id: 'paket-2',
    code: 'PAKET 2',
    title: 'Asesmen Akhir Bab 4 - Paket 2 (Standar Kognitif C2-C4)',
    description: 'Fokus: Mitigasi Kebencanaan, Ketahanan Budaya, dan Musyawarah Inklusif',
    questions: [
      {
        id: 'p2-q1',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Pada tradisi Marakka Bola di Sulawesi Selatan, seluruh warga desa bergotong royong memindahkan rumah panggung kayu.',
        question: 'Manakah nilai karakter utama yang dipupuk melalui pelaksanaan tradisi Marakka Bola?',
        options: [
          { id: 'A', text: 'Individualisme dan persaingan kekayaan.' },
          { id: 'B', text: 'Solidaritas gotong royong dan kepedulian sosial yang tulus.' },
          { id: 'C', text: 'Ketergantungan pada kontraktor bangunan asing.' },
          { id: 'D', text: 'Sikap pasrah tanpa berusaha menyelesaikan masalah.' }
        ],
        correctAnswer: 'B',
        explanation: 'Marakka Bola memupuk rasa senasib sepenanggungan bahwa kesulitan tetangga adalah urusan bersama yang harus dipikul gotong royong.'
      },
      {
        id: 'p2-q2',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Di Bali, organisasi Subak juga mengatur upacara persembahan di Pura Ulun Danu sebelum masa tanam serentak dimulai.',
        question: 'Secara ilmiah biologi pertanian, tujuan penanaman padi serentak yang diatur Subak adalah...',
        options: [
          { id: 'A', text: 'Memutus siklus rantai makanan hama wereng dan tikus sehingga populasi hama terkendali.' },
          { id: 'B', text: 'Menghabiskan seluruh stok pupuk kimia pabrik dalam waktu cepat.' },
          { id: 'C', text: 'Membuat harga jual padi anjlok di pasaran.' },
          { id: 'D', text: 'Memaksa semua petani bekerja lembur sepanjang malam.' }
        ],
        correctAnswer: 'A',
        explanation: 'Tanam serentak memutus siklus hidup hama secara alami karena sumber pakan hama terhenti serentak, mengurangi kebutuhan pestisida kimia.'
      },
      {
        id: 'p2-q3',
        type: 'pg',
        cognitiveLevel: 'C4',
        context: 'Rumah Gadang Minangkabau didesain dengan konstruksi tiang melengkung bertumpu pada batu sandi datar tanpa pasak tanam kaku.',
        question: 'Keunggulan sistem tumpuan batu sandi ini saat terjadi gempa bumi tektonik adalah...',
        options: [
          { id: 'A', text: 'Membuat rumah terangkat terbang ke udara.' },
          { id: 'B', text: 'Tiang dapat bergeser fleksibel di atas batu meredam getaran tanpa mematahkan struktur utama rumah.' },
          { id: 'C', text: 'Mencegah rembesan air banjir masuk ke dalam kamar tidur.' },
          { id: 'D', text: 'Mempercepat proses pembusukan tiang kayu balok.' }
        ],
        correctAnswer: 'B',
        explanation: 'Prinsip base-isolation alami ini membuat gaya gempa tidak diteruskan secara kaku ke rangka atas, menjaga rumah tetap utuh.'
      },
      {
        id: 'p2-q4',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Masyarakat Suku Dayak di Kalimantan memiliki hutan larangan adat yang disebut "Tane\' Olen".',
        question: 'Dampak positif keberadaan Tane\' Olen bagi kehidupan masyarakat suku Dayak dan dunia adalah...',
        options: [
          { id: 'A', text: 'Sebagai cadangan karbon dunia dan menjaga plasma nutfah tanaman obat alami.' },
          { id: 'B', text: 'Mempersempit lahan pemukiman bagi warga setempat.' },
          { id: 'C', text: 'Menjadi tempat pembuangan sampah beracun.' },
          { id: 'D', text: 'Menghentikan proses fotosintesis pohon rimba.' }
        ],
        correctAnswer: 'A',
        explanation: 'Tane\' Olen berfungsi sebagai paru-paru dunia, habitat satwa langka, dan sumber tanaman obat tradisional bagi masyarakat.'
      },
      {
        id: 'p2-q5',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Bangsa Indonesia memiliki semboyan "Bhinneka Tunggal Ika" yang bersumber dari kitab Sutasoma karangan Mpu Tantular.',
        question: 'Sikap yang bertentangan dengan semboyan Bhinneka Tunggal Ika dalam pergaulan di sekolah adalah...',
        options: [
          { id: 'A', text: 'Menghormati teman yang merayakan hari raya agamanya.' },
          { id: 'B', text: 'Menolak pembagian kelompok belajar jika satu tim dengan murid berbeda suku.' },
          { id: 'C', text: 'Mempelajari tarian daerah lain dengan penuh semangat.' },
          { id: 'D', text: 'Menyanyikan lagu-lagu nasional dengan khidmat saat upacara.' }
        ],
        correctAnswer: 'B',
        explanation: 'Memilih teman hanya berdasarkan suku adalah sikap diskriminatif yang mencabik-cabik semangat persatuan Bhinneka Tunggal Ika.'
      },
      // 2 PG Kompleks
      {
        id: 'p2-q6',
        type: 'pg_kompleks',
        cognitiveLevel: 'C4',
        context: 'Perhatikan empat pernyataan mengenai kearifan lokal sistem penyimpanan pangan "Leuit":',
        statements: [
          { id: 'I', text: 'Sirkulasi udara dan alas sekam kering menjaga padi tahan puluhan tahun tanpa zat pengawet kimia.' },
          { id: 'II', text: 'Setiap keluarga memiliki cadangan mandiri untuk mengantisipasi gagal panen dan paceklik.' },
          { id: 'III', text: 'Beras Leuit wajib diekspor ke negara asing sebanyak-banyaknya untuk mendapatkan devisa.' },
          { id: 'IV', text: 'Mencerminkan rasa syukur dan penghormatan kepada alam sebagai sumber kehidupan.' }
        ],
        question: 'Pernyataan yang BENAR mengenai sistem Leuit adalah kombinasi nomor...',
        correctStatements: ['I', 'II', 'IV'],
        explanation: 'Pernyataan I, II, dan IV benar. Pernyataan III salah karena masyarakat adat pantang menjual beras Leuit untuk komersialisasi eksternal.'
      },
      {
        id: 'p2-q7',
        type: 'pg_kompleks',
        cognitiveLevel: 'C3',
        context: 'Perhatikan tindakan-tindakan berikut dalam menghadapi perbedaan pendapat di kelas:',
        statements: [
          { id: 'I', text: 'Mengedepankan musyawarah mufakat dengan kepala dingin.' },
          { id: 'II', text: 'Memaksakan pendapat pribadi dengan nada mengancam.' },
          { id: 'III', text: 'Mendengarkan saran teman dengan sikap terbuka dan santun.' },
          { id: 'IV', text: 'Meninggalkan ruangan secara sepihak saat pendapatnya tidak disetujui.' }
        ],
        question: 'Tindakan yang sejalan dengan kearifan leluhur dalam bermusyawarah ditunjukkan oleh...',
        correctStatements: ['I', 'III'],
        explanation: 'Musyawarah mufakat menuntut kesantunan, dialog mendalam, dan keterbukaan (I dan III). Memaksa dan mogok (II dan IV) mencerminkan egoisme.'
      },
      // 3 Benar / Salah
      {
        id: 'p2-q8',
        type: 'bs',
        cognitiveLevel: 'C3',
        context: 'Studi Kasus: Di sebuah desa pesisir, aturan adat melarang penggunaan racun portas dan pukat harimau untuk menangkap ikan.',
        question: 'Aturan adat tersebut merugikan nelayan miskin karena menghambat mereka menangkap ikan sebanyak-banyaknya dalam waktu singkat.',
        correctBs: false,
        explanation: 'Salah. Racun dan pukat harimau menghancurkan karang dan bibit ikan, yang pada akhirnya memiskinkan nelayan. Aturan adat justru menjamin ikan tetap ada selamanya.'
      },
      {
        id: 'p2-q9',
        type: 'bs',
        cognitiveLevel: 'C2',
        context: 'Kearifan lokal mengajarkan manusia untuk tidak serakah dan selalu berbagi kelebihan rezeki dengan sesama warga yang kekurangan.',
        question: 'Sikap peduli dan saling berbagi merupakan modal sosial terpenting dalam menjaga persatuan dan ketahanan bangsa.',
        correctBs: true,
        explanation: 'Benar. Solidaritas sosial mempererat ikatan kekeluargaan antarelemen masyarakat sehingga bangsa tidak mudah dipecah-belah.'
      },
      {
        id: 'p2-q10',
        type: 'bs',
        cognitiveLevel: 'C4',
        context: 'Sistem arsitektur tradisional seperti Joglo dan Omo Sebua membuktikan bahwa arsitektur nusantara tertinggal zaman dan tidak layak dipelajari di era modern.',
        question: 'Pernyataan bahwa arsitektur nusantara tidak memiliki nilai ilmiah modern adalah keliru, karena struktur elastis rumah adat terbukti menginspirasi ilmu rekayasa gempa dunia.',
        correctBs: true,
        explanation: 'Benar. Arsitek modern dunia saat ini justru banyak meneliti prinsip fleksibilitas rumah panggung nusantara untuk perancangan gedung tahan gempa.'
      }
    ]
  },
  {
    id: 'paket-3',
    code: 'PAKET 3',
    title: 'Asesmen Akhir Bab 4 - Paket 3 (Studi Kasus Komprehensif)',
    description: 'Fokus: Etika Lingkungan, Konservasi Air, dan Resolusi Konflik Komunal',
    questions: [
      {
        id: 'p3-q1',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Kearifan lokal masyarakat Kasepuhan Ciptagelar membagi hutan menjadi tiga zona: Leuweung Titipan (keramat/konservasi), Leuweung Tutupan (penyangga), dan Leuweung Garapan (produksi).',
        question: 'Fungsi utama zona "Leuweung Titipan" yang tidak boleh diganggu sama sekali adalah...',
        options: [
          { id: 'A', text: 'Tempat berburu satwa liar untuk dijual dagingnya.' },
          { id: 'B', text: 'Menjaga kemurnian mata air hulu, mencegah longsor, dan melindungi keanekaragaman hayati.' },
          { id: 'C', text: 'Lahan cadangan untuk pembangunan jalan tol lintas daerah.' },
          { id: 'D', text: 'Lokasi pembuangan limbah sisa panen pertanian.' }
        ],
        correctAnswer: 'B',
        explanation: 'Leuweung Titipan adalah kawasan suci konservasi mutlak yang menjaga siklus air dan mencegah bencana hidrometeorologi.'
      },
      {
        id: 'p3-q2',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Dalam tradisi Pela Gandong di Kepulauan Maluku, jika satu desa sedang tertimpa musibah kebakaran atau bencana alam, maka desa saudaranya akan...',
        question: 'Tindakan yang wajib dilakukan desa saudara berdasarkan ikatan sakral Pela Gandong adalah...',
        options: [
          { id: 'A', text: 'Segera datang membawakan bantuan makanan, bahan bangunan, dan tenaga tanpa diminta.' },
          { id: 'B', text: 'Menutup batas desa agar warganya tidak ikut tertular kemalangan.' },
          { id: 'C', text: 'Menuntut pembayaran upah pertolongan sebelum mulai membantu.' },
          { id: 'D', text: 'Menyalahkan desa yang tertimpa musibah karena dianggap lalai.' }
        ],
        correctAnswer: 'A',
        explanation: 'Janji sakral pela gandong mewajibkan saling membantu secara tulus tanpa memandang batas wilayah maupun perbedaan keyakinan.'
      },
      {
        id: 'p3-q3',
        type: 'pg',
        cognitiveLevel: 'C4',
        context: 'Perhatikan kasus: Di sebuah sekolah, dua siswa yang berasal dari suku berbeda terlibat perselisihan paham mengenai permainan sepak bola.',
        question: 'Penyelesaian yang paling mencerminkan semangat kearifan musyawarah leluhur adalah...',
        options: [
          { id: 'A', text: 'Membiarkan mereka berkelahi hingga ada yang mengaku kalah.' },
          { id: 'B', text: 'Wali kelas memfasilitasi dialog damai, mendengarkan kedua belah pihak, dan membimbing mereka saling meminta maaf serta bersalaman.' },
          { id: 'C', text: 'Menghukum kedua siswa tanpa mendengarkan kronologi kejadian.' },
          { id: 'D', text: 'Menyebarkan rekaman perselisihan ke grup media sosial orang tua murid.' }
        ],
        correctAnswer: 'B',
        explanation: 'Penyelesaian adat mengedepankan pemulihan hubungan (restorative), mendengarkan duduk perkara secara adil, dan mengembalikan kerukunan.'
      },
      {
        id: 'p3-q4',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Subak di Bali memiliki aturan tertulis dan tidak tertulis yang disebut "Awig-awig".',
        question: 'Jika seorang petani kedapatan mencuri jatah air sawah milik petani lain pada malam hari, maka sanksi Awig-awig yang dijatuhkan biasanya bersifat...',
        options: [
          { id: 'A', text: 'Hukuman denda beras/uang untuk kas pura subak serta kerja sosial membersihkan saluran irigasi.' },
          { id: 'B', text: 'Pengusiran seluruh keluarga dari pulau Bali.' },
          { id: 'C', text: 'Penutupan sawah secara permanen dan pembakaran rumah.' },
          { id: 'D', text: 'Hukuman penjara seumur hidup tanpa diadili.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sanksi awig-awig berfokus pada perbaikan sosial (restoratif) dan pembersihan spiritual tanpa merusak martabat kemanusiaan.'
      },
      {
        id: 'p3-q5',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Di Sumatera Utara, tradisi Marsialapari pada suku Batak Mandailing adalah bentuk tolong-menolong saat musim tanam dan panen padi.',
        question: 'Karakteristik utama tradisi Marsialapari yang sama dengan gotong royong nasional adalah...',
        options: [
          { id: 'A', text: 'Mengerjakan sawah secara bergiliran bersama-sama tanpa menuntut bayaran upah harian.' },
          { id: 'B', text: 'Menjual hasil panen dengan harga setinggi mungkin kepada tetangga.' },
          { id: 'C', text: 'Menyewa traktor modern impor tanpa melibatkan warga lokal.' },
          { id: 'D', text: 'Hanya mau membantu sanak famili yang kaya raya.' }
        ],
        correctAnswer: 'A',
        explanation: 'Marsialapari adalah tradisi gotong royong agraria di mana warga saling membantu menggarap sawah secara bergiliran dengan sukacita.'
      },
      // 2 PG Kompleks
      {
        id: 'p3-q6',
        type: 'pg_kompleks',
        cognitiveLevel: 'C4',
        context: 'Perhatikan 4 pernyataan mengenai hubungan antara kearifan lokal dan kelestarian sumber daya alam:',
        statements: [
          { id: 'I', text: 'Zonasi hutan adat mencegah erosi tanah dan menjaga ketersediaan air bersih di daerah hilir.' },
          { id: 'II', text: 'Kearifan lokal membolehkan penangkapan ikan dengan racun asalkan dilakukan di siang hari.' },
          { id: 'III', text: 'Sistem pertanian terasering dan subak menjaga stabilitas lereng pegunungan dari bahaya tanah longsor.' },
          { id: 'IV', text: 'Konservasi adat memadukan dimensi spiritual, ekologis, dan kemaslahatan antargenerasi.' }
        ],
        question: 'Pernyataan yang BENAR mengenai kearifan lokal dalam menjaga alam adalah...',
        correctStatements: ['I', 'III', 'IV'],
        explanation: 'Pernyataan I, III, dan IV benar. Pernyataan II salah karena meracun ikan merupakan pelanggaran berat dalam etika konservasi adat nusantara.'
      },
      {
        id: 'p3-q7',
        type: 'pg_kompleks',
        cognitiveLevel: 'C3',
        context: 'Perhatikan upaya-upaya berikut dalam melestarikan budaya bangsa di era digital:',
        statements: [
          { id: 'I', text: 'Membuat video edukatif interaktif tentang rumah tahan gempa di media sosial.' },
          { id: 'II', text: 'Meremehkan lagu daerah dan hanya mendengarkan musik dari luar negeri.' },
          { id: 'III', text: 'Mempelajari makna filosofis di balik upacara adat daerah sendiri dan daerah lain.' },
          { id: 'IV', text: 'Mendokumentasikan kearifan pangan lokal seperti Leuit untuk bahan belajar sains di sekolah.' }
        ],
        question: 'Upaya nyata generasi muda yang positif dalam melestarikan warisan leluhur adalah...',
        correctStatements: ['I', 'III', 'IV'],
        explanation: 'Menggunakan teknologi digital untuk mengkaji dan menyebarkan kearifan budaya (I, III, IV) adalah langkah pelestarian yang sangat tepat.'
      },
      // 3 Benar / Salah
      {
        id: 'p3-q8',
        type: 'bs',
        cognitiveLevel: 'C3',
        context: 'Studi Kasus: Siswa Kelas VI-a mengadakan musyawarah untuk menentukan ketua kelas. Siswa yang terpilih berasal dari suku minoritas di kelas.',
        question: 'Menerima dan mendukung ketua kelas terpilih dari suku mana pun adalah wujud pengamalan nilai persatuan Indonesia dan kearifan musyawarah.',
        correctBs: true,
        explanation: 'Benar. Persatuan sejati melampaui sekat kesukuan dan mengedepankan integritas serta amanah kepemimpinan.'
      },
      {
        id: 'p3-q9',
        type: 'bs',
        cognitiveLevel: 'C2',
        context: 'Penggunaan pasak kayu tanpa paku besi pada Rumah Joglo dan Gadang dilakukan karena nenek moyang kita kekurangan uang untuk membeli paku.',
        question: 'Pernyataan di atas benar, karena teknologi kayu sambung pasak diciptakan semata-mata karena ketiadaan bahan besi di Nusantara masa lampau.',
        correctBs: false,
        explanation: 'Salah. Nusantara adalah produsen logam dan keris ulung; pilihan pasak kayu adalah keputusan teknik yang sadar untuk menghasilkan sambungan lentur peredam gempa.'
      },
      {
        id: 'p3-q10',
        type: 'bs',
        cognitiveLevel: 'C4',
        context: 'Hukum adat seperti Sasi dan Lubuk Larangan tidak memerlukan aparat bersenjata untuk ditaati masyarakat setempat.',
        question: 'Kepatuhan masyarakat adat pada aturan pelestarian lingkungan didorong oleh kekuatan moral, sanksi sosial komunal, dan kesadaran spiritual.',
        correctBs: true,
        explanation: 'Benar. Norma adat melekat dalam batin nurani masyarakat, sehingga ketaatannya timbul dari kesadaran bersama menjaga harmoni hidup.'
      }
    ]
  },
  {
    id: 'paket-4',
    code: 'PAKET 4',
    title: 'Asesmen Akhir Bab 4 - Paket 4 (Penalaran Nilai Luhur)',
    description: 'Fokus: Etika Kemanusiaan, Keadilan Sumber Daya, dan Solidaritas Kebangsaan',
    questions: [
      {
        id: 'p4-q1',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Di masyarakat Jawa dikenal falsafah "Urip Iku Urup" yang bermakna hidup itu hendaknya menyala atau memberi manfaat bagi sesama.',
        question: 'Keterkaitan falsafah "Urip Iku Urup" dengan nilai kearifan lokal untuk persatuan bangsa adalah...',
        options: [
          { id: 'A', text: 'Setiap warga negara diajak saling menolong dan menebar kebaikan agar tercipta kedamaian hidup bersama.' },
          { id: 'B', text: 'Setiap rumah wajib menyalakan api obor sepanjang malam.' },
          { id: 'C', text: 'Masyarakat dilarang menggunakan listrik modern.' },
          { id: 'D', text: 'Orang yang paling banyak bicara adalah orang yang paling berjasa.' }
        ],
        correctAnswer: 'A',
        explanation: 'Falsafah ini menekankan kontribusi sosial nyata: hidup seseorang berharga bila mampu menerangi dan menolong kehidupan orang lain.'
      },
      {
        id: 'p4-q2',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Pada sistem Subak di Bali, pura Ulun Swi dan Pura Ulun Danu didirikan di dekat sumber mata air.',
        question: 'Pesan moral dan ekologis yang terkandung dari penempatan tempat suci di hulu sumber air tersebut adalah...',
        options: [
          { id: 'A', text: 'Hulu mata air adalah kawasan sakral yang wajib dijaga kebersihannya dan dilarang dicemari sampah maupun limbah.' },
          { id: 'B', text: 'Hanya pendeta yang boleh meminum air dari sumber tersebut.' },
          { id: 'C', text: 'Agar air tidak mengalir ke sawah milik orang lain.' },
          { id: 'D', text: 'Supaya ikan di sumber mata air dapat dipancing setiap hari.' }
        ],
        correctAnswer: 'A',
        explanation: 'Penyucian hulu air menanamkan disiplin lingkungan agar masyarakat pantang merusak hutan dan mencemari sumber kehidupan bersama.'
      },
      {
        id: 'p4-q3',
        type: 'pg',
        cognitiveLevel: 'C4',
        context: 'Di Sumatera Utara, masyarakat Batak memiliki falsafah "Dalihan Na Tolu" yang mengatur tata krama interaksi sosial antarkeluarga.',
        question: 'Dampak penerapan tata krama Dalihan Na Tolu terhadap pencegahan perselisihan dalam masyarakat adalah...',
        options: [
          { id: 'A', text: 'Mendorong semua orang saling menghormati, bersikap hati-hati, dan menjaga martabat kerabat sehingga konflik dapat dicegah.' },
          { id: 'B', text: 'Membuat masyarakat selalu terpecah menjadi tiga golongan yang saling bersaing.' },
          { id: 'C', text: 'Mengharuskan setiap masalah diselesaikan di pengadilan negeri.' },
          { id: 'D', text: 'Mewajibkan warga membayar upeti tahunan kepada kepala suku.' }
        ],
        correctAnswer: 'A',
        explanation: 'Dalihan Na Tolu menciptakan struktur penghormatan yang saling menyeimbangkan (Somba marhula-hula, Elek marboru, Manat mardongan tubu), menjaga kerukunan sosial.'
      },
      {
        id: 'p4-q4',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Kearifan lokal suku Baduy membedakan wilayah menjadi Baduy Dalam dan Baduy Luar.',
        question: 'Komitmen Suku Baduy Dalam yang pantang menggunakan bahan kimia sintetis seperti sabun dan detergen di aliran sungai bertujuan untuk...',
        options: [
          { id: 'A', text: 'Menjaga aliran air sungai tetap murni dan aman bagi seluruh makhluk hidup di sepanjang daerah aliran sungai.' },
          { id: 'B', text: 'Menghemat pengeluaran belanja keluarga sehari-hari.' },
          { id: 'C', text: 'Menolak kedatangan wisatawan domestik.' },
          { id: 'D', text: 'Menghindari bau wangi sabun pabrikan.' }
        ],
        correctAnswer: 'A',
        explanation: 'Larangan zat kimia sintetis menjaga kualitas air sungai tetap jernih dan higienis bagi masyarakat yang hidup di hilir.'
      },
      {
        id: 'p4-q5',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Ketika sebuah desa menggelar musyawarah mufakat, semua warga berhak menyampaikan pendapat secara santun.',
        question: 'Nilai Pancasila yang paling tercermin dalam musyawarah adat tersebut adalah...',
        options: [
          { id: 'A', text: 'Sila ke-4: Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.' },
          { id: 'B', text: 'Hanya sila ke-1 saja.' },
          { id: 'C', text: 'Hanya sila ke-2 saja.' },
          { id: 'D', text: 'Tidak ada sila Pancasila yang cocok.' }
        ],
        correctAnswer: 'A',
        explanation: 'Musyawarah mufakat adalah kristalisasi sila ke-4 Pancasila yang berakar dari kearifan leluhur nusantara.'
      },
      // 2 PG Kompleks
      {
        id: 'p4-q6',
        type: 'pg_kompleks',
        cognitiveLevel: 'C4',
        context: 'Perhatikan 4 ciri arsitektur tradisional ramah gempa di Nusantara berikut:',
        statements: [
          { id: 'I', text: 'Struktur pondasi bertumpu elastis di atas umpak batu tanpa dicor mati ke dalam tanah.' },
          { id: 'II', text: 'Rangka dinding dan atap disambung menggunakan pasak kayu dan pasak bambu.' },
          { id: 'III', text: 'Seluruh dinding rumah wajib menggunakan cor semen padat setebal 50 cm.' },
          { id: 'IV', text: 'Bentuk atap segitiga atau pelana dengan kemiringan curam untuk mempercepat aliran air hujan.' }
        ],
        question: 'Ciri-ciri arsitektur yang mendukung ketahanan terhadap gempa dan cuaca tropis adalah kombinasi...',
        correctStatements: ['I', 'II', 'IV'],
        explanation: 'Pernyataan I, II, dan IV benar. Pernyataan III salah karena dinding beton masif yang kaku justru mudah retak dan runtuh saat gempa bumi.'
      },
      {
        id: 'p4-q7',
        type: 'pg_kompleks',
        cognitiveLevel: 'C3',
        context: 'Berikut ini tindakan-tindakan siswa dalam menjaga persatuan di sekolah:',
        statements: [
          { id: 'I', text: 'Berbagi makanan khas daerah masing-masing saat jam istirahat.' },
          { id: 'II', text: 'Membuat kelompok khusus yang hanya menerima murid dari suku yang sama.' },
          { id: 'III', text: 'Menghargai tradisi teman sekelas yang sedang menjalankan ibadah keagamaan.' },
          { id: 'IV', text: 'Menghibur teman yang sedih tanpa memandang latar belakang keluarganya.' }
        ],
        question: 'Tindakan yang memperkokoh persatuan dan kesatuan di sekolah ditunjukkan oleh nomor...',
        correctStatements: ['I', 'III', 'IV'],
        explanation: 'Nomor I, III, dan IV menciptakan kerukunan dan rasa persaudaraan. Nomor II adalah tindakan eksklusif yang memecah-belah pertemanan.'
      },
      // 3 Benar / Salah
      {
        id: 'p4-q8',
        type: 'bs',
        cognitiveLevel: 'C3',
        context: 'Studi Kasus: Tradisi "Ngayau" (berburu kepala manusia) yang pernah ada di masa lalu telah ditinggalkan masyarakat Dayak sejak Perjanjian Damai Tumbang Anoi 1894.',
        question: 'Ditinggalkannya tradisi kekerasan masa lalu membuktikan bahwa kebudayaan dan kearifan lokal selalu berkembang menuju perdamaian dan kemanusiaan yang lebih beradab.',
        correctBs: true,
        explanation: 'Benar. Masyarakat adat memiliki kearifan untuk memperbarui tradisinya demi keselamatan bersama dan perdamaian abadi.'
      },
      {
        id: 'p4-q9',
        type: 'bs',
        cognitiveLevel: 'C2',
        context: 'Kearifan lokal hanya ditemukan di daerah pedalaman yang terpencil dan tidak ada kearifan lokal yang hidup di perkotaan modern.',
        question: 'Pernyataan di atas adalah keliru karena nilai kearifan seperti gotong royong dan musyawarah tetap dapat diterapkan di perkotaan.',
        correctBs: true,
        explanation: 'Benar. Kearifan lokal adalah nilai moral yang fleksibel dan dapat dipraktikkan di mana saja, termasuk di perumahan kota modern.'
      },
      {
        id: 'p4-q10',
        type: 'bs',
        cognitiveLevel: 'C4',
        context: 'Seorang siswa menolak mengikuti jadwal piket kebersihan kelas karena merasa tugas membersihkan lantai hanya untuk siswa perempuan.',
        question: 'Sikap siswa tersebut sangat sesuai dengan nilai luhur gotong royong yang membagi tugas berdasarkan kasta.',
        correctBs: false,
        explanation: 'Salah. Gotong royong nusantara memandang semua orang setara dan wajib bahu-membahu tanpa diskriminasi gender atau status sosial.'
      }
    ]
  },
  {
    id: 'paket-5',
    code: 'PAKET 5',
    title: 'Asesmen Akhir Bab 4 - Paket 5 (Sains & Budaya Terpadu)',
    description: 'Fokus: Integrasi IPAS, Konservasi Alam, dan Bhinneka Tunggal Ika',
    questions: [
      {
        id: 'p5-q1',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Di Kabupaten Kerinci, Jambi, terdapat kearifan lokal larangan menebang pohon di "Hutan Heltanah Aji" yang dipercaya melindungi harimau sumatera dan mata air.',
        question: 'Secara ilmu pengetahuan alam (IPA), fungsi akar pohon-pohon besar di hutan pegunungan tersebut adalah...',
        options: [
          { id: 'A', text: 'Menyerap air hujan ke dalam tanah sehingga mencegah erosi dan menyuplai mata air bawah tanah.' },
          { id: 'B', text: 'Memanaskan suhu tanah agar air cepat menguap ke udara.' },
          { id: 'C', text: 'Menghabiskan kandungan air tanah sehingga tanah menjadi kering kerontang.' },
          { id: 'D', text: 'Menarik petir agar menyambar puncak pegunungan.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sistem perakaran pohon hutan berfungsi sebagai spons raksasa penyerap air hujan dan pengikat butiran tanah dari bahaya longsor.'
      },
      {
        id: 'p5-q2',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Tradisi "Sedekah Laut" atau "Larung Sesaji" oleh para nelayan di pesisir pantai pulau Jawa sering disertai aksi bersih-bersih pantai massal.',
        question: 'Nilai positif dari kegiatan bersih pantai yang menyertai tradisi tersebut adalah...',
        options: [
          { id: 'A', text: 'Menyelamatkan satwa laut dari ancaman sampah plastik yang mematikan ekosistem.' },
          { id: 'B', text: 'Menghilangkan bau amis ikan di pasar pelelangan.' },
          { id: 'C', text: 'Menjual sampah plastik kepada pedagang liar di tengah laut.' },
          { id: 'D', text: 'Mencegah air laut pasang naik ke daratan.' }
        ],
        correctAnswer: 'A',
        explanation: 'Pembersihan pantai melestarikan keanekaragaman biota laut dari mikroplastik beracun dan menjaga keindahan pantai.'
      },
      {
        id: 'p5-q3',
        type: 'pg',
        cognitiveLevel: 'C4',
        context: 'Perhatikan data: Bangsa Indonesia terdiri atas lebih dari 300 kelompok etnis dan 1.340 suku bangsa menurut sensus BPS.',
        question: 'Mengapa keberagaman suku bangsa ini tidak menyebabkan Indonesia terpecah belah seperti beberapa negara di dunia?',
        options: [
          { id: 'A', text: 'Karena bangsa Indonesia memiliki perekat falsafah Pancasila, bahasa persatuan Bahasa Indonesia, dan kearifan musyawarah.' },
          { id: 'B', text: 'Karena penduduk Indonesia tidak boleh bepergian ke luar pulau asalnya.' },
          { id: 'C', text: 'Karena seluruh suku diwajibkan mengganti bahasa ibunya dengan bahasa asing.' },
          { id: 'D', text: 'Karena Indonesia dikuasai oleh satu suku bangsa saja yang mendominasi.' }
        ],
        correctAnswer: 'A',
        explanation: 'Fondasi Pancasila, Bahasa Indonesia, dan modal sosial kearifan lokal terbukti menjaga persatuan kokoh di tengah kebhinekaan yang luas.'
      },
      {
        id: 'p5-q4',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Dalam membangun rumah tradisional suku Toraja (Tongkonan), masyarakat satu kampung saling tolong-menolong tanpa upah materi.',
        question: 'Kearifan lokal pembangunan Tongkonan ini mengajarkan siswa bahwa hubungan kekeluargaan lebih bernilai daripada...',
        options: [
          { id: 'A', text: 'Perhitungan untung-rugi uang semata.' },
          { id: 'B', text: 'Kesehatan fisik para pekerja.' },
          { id: 'C', text: 'Keamanan struktur bangunan.' },
          { id: 'D', text: 'Keselamatan jiwa anak-anak.' }
        ],
        correctAnswer: 'A',
        explanation: 'Kearifan leluhur menempatkan persaudaraan dan kebersamaan di atas kalkulasi untung-rugi materi semata.'
      },
      {
        id: 'p5-q5',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Kearifan lokal "Tri Kaya Parisudha" mengajarkan tiga pengendalian: berpikir baik (Manacika), berkata baik (Wacika), dan berbuat baik (Kayika).',
        question: 'Penerapan "Wacika" (berkata baik) dalam kehidupan di media sosial bagi siswa masa kini adalah...',
        options: [
          { id: 'A', text: 'Tidak menyebarkan berita bohong (hoaks), fitnah, atau ujaran kebencian antarsuku.' },
          { id: 'B', text: 'Mengunggah komentar jahat di akun teman yang tidak disukai.' },
          { id: 'C', text: 'Menyalin tulisan orang lain tanpa mencantumkan sumber aslinya.' },
          { id: 'D', text: 'Menghina kebiasaan adat daerah lain di kolom komentar.' }
        ],
        correctAnswer: 'A',
        explanation: 'Berkata baik di era siber berarti menggunakan kata-kata santun, jujur, serta menjauhi hoaks dan perundungan siber.'
      },
      // 2 PG Kompleks
      {
        id: 'p5-q6',
        type: 'pg_kompleks',
        cognitiveLevel: 'C4',
        context: 'Perhatikan 4 pernyataan mengenai tata kelola air tradisional Nusantara:',
        statements: [
          { id: 'I', text: 'Sistem Subak di Bali membagi air berdasarkan prinsip keadilan proporsional.' },
          { id: 'II', text: 'Lubuk Larangan di Sumatera Utara melarang penangkapan ikan di sungai secara sembarangan.' },
          { id: 'III', text: 'Subak membolehkan petani hulu menjual seluruh debit air sungai ke kawasan industri swasta.' },
          { id: 'IV', text: 'Kearifan tata air tradisional menempatkan air sebagai sumber kehidupan bersama yang suci.' }
        ],
        question: 'Kombinasi pernyataan yang TEPAT mengenai tata air kearifan lokal adalah...',
        correctStatements: ['I', 'II', 'IV'],
        explanation: 'Pernyataan I, II, dan IV benar. Pernyataan III salah karena Subak mengharamkan komersialisasi air demi keuntungan pribadi.'
      },
      {
        id: 'p5-q7',
        type: 'pg_kompleks',
        cognitiveLevel: 'C3',
        context: 'Perhatikan peran-peran kearifan lokal berikut bagi ketahanan bangsa Indonesia:',
        statements: [
          { id: 'I', text: 'Menjadi penyaring (filter) terhadap dampak buruk budaya asing yang bertentangan dengan moral Pancasila.' },
          { id: 'II', text: 'Menjadi sarana resolusi damai saat terjadi kesalahpahaman antarkelompok masyarakat.' },
          { id: 'III', text: 'Menghalangi anak-anak Indonesia untuk mempelajari sains dan teknologi modern.' },
          { id: 'IV', text: 'Mempererat tali persaudaraan antarwarga negara melalui tradisi gotong royong.' }
        ],
        question: 'Peran positif kearifan lokal bagi ketahanan bangsa ditunjukkan oleh nomor...',
        correctStatements: ['I', 'II', 'IV'],
        explanation: 'Kearifan lokal membentengi moral (I), mendamaikan konflik (II), dan merekatkan persaudaraan (IV). Kearifan lokal tidak melarang sains modern (III).'
      },
      // 3 Benar / Salah
      {
        id: 'p5-q8',
        type: 'bs',
        cognitiveLevel: 'C3',
        context: 'Studi Kasus: Di sekolah, siswa-siswi Kelas VI membiasakan diri memberi salam santun dan membungkukkan badan sedikit saat berpapasan dengan bapak/ibu guru.',
        question: 'Kebiasaan sopan santun tersebut merupakan warisan tata krama luhur bangsa Indonesia yang wajib terus dilestarikan.',
        correctBs: true,
        explanation: 'Benar. Sikap hormat dan santun kepada guru adalah etika luhur kepribadian bangsa Indonesia.'
      },
      {
        id: 'p5-q9',
        type: 'bs',
        cognitiveLevel: 'C2',
        context: 'Masyarakat Suku Baduy menolak penggunaan semen dan lantai ubin di perkampungan Baduy Dalam.',
        question: 'Penolakan tersebut dilakukan agar tanah resapan air hujan tetap porous dan tidak menimbulkan banjir limpasan ke perkampungan lain.',
        correctBs: true,
        explanation: 'Benar. Membiarkan tanah terbuka dan menggunakan lantai bambu menjaga daya serap air alami tanah secara optimal.'
      },
      {
        id: 'p5-q10',
        type: 'bs',
        cognitiveLevel: 'C4',
        context: 'Kearifan lokal mengajarkan bahwa masyarakat yang kuat adalah masyarakat yang berhasil menindas kelompok minoritas di wilayahnya.',
        question: 'Pernyataan di atas adalah keliru total, karena kearifan nusantara selalu mengajarkan perlindungan dan pengayoman terhadap seluruh warga tanpa kecuali.',
        correctBs: true,
        explanation: 'Benar. Falsafah leluhur mengajarkan pengayoman, keadilan, dan perlindungan bagi yang lemah, bukan penindasan.'
      }
    ]
  },
  {
    id: 'paket-6',
    code: 'PAKET 6',
    title: 'Asesmen Akhir Bab 4 - Paket 6 (Evaluasi Tingkat Tinggi C4)',
    description: 'Fokus: Refleksi Kebijakan Tradisional, Mitigasi Bencana, dan Aksi Kebangsaan',
    questions: [
      {
        id: 'p6-q1',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Masyarakat adat Mentawai di Sumatera Barat memiliki konsep "Arat Sabulungan" yang meyakini seluruh tumbuhan dan hewan memiliki jiwa yang harus dihormati.',
        question: 'Dampak nyata dari filosofi Arat Sabulungan terhadap pemanfaatan hutan rimba adalah...',
        options: [
          { id: 'A', text: 'Penebangan pohon dilakukan secara selektif hanya sesuai kebutuhan mendesak dan diiringi doa permohonan maaf.' },
          { id: 'B', text: 'Hutan ditebang habis untuk perkebunan kelapa sawit skala besar.' },
          { id: 'C', text: 'Masyarakat dilarang sama sekali menyentuh kayu hutan.' },
          { id: 'D', text: 'Pohon-pohon dibakar agar binatang buas tidak mendekati perkampungan.' }
        ],
        correctAnswer: 'A',
        explanation: 'Penghormatan terhadap jiwa alam mencegah penebangan membabi-buta dan menjaga hutan Mentawai tetap lebat.'
      },
      {
        id: 'p6-q2',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Di Nusa Tenggara Timur (NTT), terdapat tradisi "Pasola" yang sarat dengan musyawarah tetua adat (Rato) dalam menentukan kalender musim tanam.',
        question: 'Peran para tetua adat dalam kearifan lokal ini menunjukkan bahwa kepemimpinan tradisional didasarkan pada...',
        options: [
          { id: 'A', text: 'Kebijaksanaan membaca tanda-tanda alam dan komitmen menjaga keharmonisan warga.' },
          { id: 'B', text: 'Kekayaan emas dan kepemilikan senjata api terbanyak.' },
          { id: 'C', text: 'Kemampuan menipu pedagang dari luar pulau.' },
          { id: 'D', text: 'Paksaan militer kepada rakyat jelata.' }
        ],
        correctAnswer: 'A',
        explanation: 'Tetua adat dihormati karena kepekaan membaca fenomena alam dan kemampuannya membimbing warga bercocok tanam tepat waktu.'
      },
      {
        id: 'p6-q3',
        type: 'pg',
        cognitiveLevel: 'C4',
        context: 'Perhatikan fenomena: Banyak kasus perselisihan di masyarakat modern berujung kekerasan dan perpecahan karena hilangnya ruang dialog musyawarah.',
        question: 'Solusi berbasis kearifan lokal yang paling tepat untuk mengatasi masalah tersebut adalah...',
        options: [
          { id: 'A', text: 'Menghidupkan kembali tradisi musyawarah rembuk desa dengan melibatkan tokoh masyarakat yang dipercaya.' },
          { id: 'B', text: 'Menyerahkan penyelesaian konflik kepada pihak yang membayar uang paling banyak.' },
          { id: 'C', text: 'Membiarkan perselisihan terus berlanjut hingga kedua kubu lelah.' },
          { id: 'D', text: 'Melarang warga berbeda pandangan tinggal dalam satu desa.' }
        ],
        correctAnswer: 'A',
        explanation: 'Rembuk musyawarah desa dengan mediasi tokoh bijak mengembalikan budaya dialog santun demi mencapai mufakat damai.'
      },
      {
        id: 'p6-q4',
        type: 'pg',
        cognitiveLevel: 'C3',
        context: 'Kearifan lokal "Pabrik Gula Madukismo" dan tradisi Cembengan di Yogyakarta melibatkan doa bersama lintas agama dan pertunjukan wayang kulit sebelum giling tebu.',
        question: 'Pesan sosial dari tradisi tersebut bagi para pekerja pabrik adalah...',
        options: [
          { id: 'A', text: 'Menyatukan kebersamaan antarpenduduk dan buruh serta memohon keselamatan kerja kepada Tuhan.' },
          { id: 'B', text: 'Menghindari pembayaran gaji pekerja pabrik.' },
          { id: 'C', text: 'Memamerkan kemewahan pemilik pabrik kepada rakyat kecil.' },
          { id: 'D', text: 'Menggantikan teknologi mesin dengan tenaga kuda semata.' }
        ],
        correctAnswer: 'A',
        explanation: 'Tradisi ini mempererat solidaritas kerja dan menanamkan spiritualitas bahwa keselamatan kerja berakar dari doa dan kerukunan.'
      },
      {
        id: 'p6-q5',
        type: 'pg',
        cognitiveLevel: 'C2',
        context: 'Di sekolah kita UPT SPF SD Inpres 105285 Tandam Hilir I, murid-murid berasal dari berbagai suku bangsa seperti Melayu, Jawa, Batak, Karo, dan lainnya.',
        question: 'Sikap yang mencerminkan kecintaan pada kearifan lokal dalam bingkai persatuan di sekolah kita adalah...',
        options: [
          { id: 'A', text: 'Saling belajar dan menghormati keunikan tradisi teman serta bangga berbahasa Indonesia yang baik dan benar.' },
          { id: 'B', text: 'Mengejek tarian daerah teman yang tidak sama dengan daerah sendiri.' },
          { id: 'C', text: 'Hanya mau menyapa guru yang sukunya sama dengan suku orang tua kita.' },
          { id: 'D', text: 'Menghindari kegiatan ekstrakurikuler seni budaya Nusantara.' }
        ],
        correctAnswer: 'A',
        explanation: 'Saling belajar budaya teman dan menggunakan Bahasa Indonesia adalah wujud nyata persatuan bangsa di lingkungan sekolah.'
      },
      // 2 PG Kompleks
      {
        id: 'p6-q6',
        type: 'pg_kompleks',
        cognitiveLevel: 'C4',
        context: 'Perhatikan 4 pernyataan mengenai ketahanan pangan tradisional Nusantara:',
        statements: [
          { id: 'I', text: 'Lumbung Leuit melindungi benih padi unggul lokal dari kepunahan akibat bibit impor.' },
          { id: 'II', text: 'Kearifan diversifikasi pangan (ubi, sagu, jagung) membuat masyarakat tidak bergantung hanya pada beras.' },
          { id: 'III', text: 'Pangan tradisional hanya boleh dimakan oleh para bangsawan kerajaan.' },
          { id: 'IV', text: 'Penyimpanan pangan mandiri mencegah bencana kelaparan saat terjadi krisis cuaca ekstrem.' }
        ],
        question: 'Pernyataan yang BENAR mengenai keunggulan ketahanan pangan lokal adalah kombinasi...',
        correctStatements: ['I', 'II', 'IV'],
        explanation: 'Pernyataan I, II, dan IV benar. Pernyataan III salah karena ketahanan pangan lokal dinikmati dan dipelihara oleh seluruh lapisan rakyat.'
      },
      {
        id: 'p6-q7',
        type: 'pg_kompleks',
        cognitiveLevel: 'C3',
        context: 'Berikut adalah sikap yang dapat ditunjukkan siswa Kelas VI dalam merawat persatuan bangsa:',
        statements: [
          { id: 'I', text: 'Menjaga tutur kata dan tidak mengucapkan kata-kata yang menyinggung SARA.' },
          { id: 'II', text: 'Bersikap terbuka untuk bekerja sama dengan siapa saja dalam kerja kelompok.' },
          { id: 'III', text: 'Mengutamakan kepentingan pribadi di atas kenyamanan bersama.' },
          { id: 'IV', text: 'Membela teman yang melakukan perundungan karena dia sahabat dekat.' }
        ],
        question: 'Sikap yang BENAR dalam merawat persatuan di lingkungan sekolah adalah nomor...',
        correctStatements: ['I', 'II'],
        explanation: 'Nomor I dan II menjaga harmoni kelas. Nomor III adalah egoisme dan nomor IV melanggar keadilan serta merusak moral pertemanan.'
      },
      // 3 Benar / Salah
      {
        id: 'p6-q8',
        type: 'bs',
        cognitiveLevel: 'C3',
        context: 'Studi Kasus: Di Minahasa, falsafah "Si Tou Timou Tumou Tou" diabadikan dalam monumen Dr. Sam Ratulangi untuk mengingatkan generasi muda.',
        question: 'Makna falsafah ini adalah bahwa kepandaian seseorang baru bermanfaat bila digunakan untuk mendidik dan memajukan derajat sesama manusia.',
        correctBs: true,
        explanation: 'Benar. Filosofi ini menekankan bahwa ilmu dan keberhasilan hidup harus didedikasikan untuk kemanusiaan dan keadilan bersama.'
      },
      {
        id: 'p6-q9',
        type: 'bs',
        cognitiveLevel: 'C2',
        context: 'Sistem Subak di Bali hanya bertahan beberapa puluh tahun dan kini telah ditinggalkan seluruh petani Bali karena tidak efisien.',
        question: 'Pernyataan di atas adalah keliru, karena sistem Subak telah bertahan lebih dari seribu tahun dan tetap aktif digunakan hingga hari ini.',
        correctBs: true,
        explanation: 'Benar. Subak adalah contoh kearifan lokal yang terbukti memiliki daya tahan sejarah luar biasa selama lebih dari sepuluh abad.'
      },
      {
        id: 'p6-q10',
        type: 'bs',
        cognitiveLevel: 'C4',
        context: 'Keragaman budaya dan kearifan lokal di Indonesia merupakan kelemahan besar yang harus diseragamkan menjadi satu bentuk budaya tunggal.',
        question: 'Pernyataan tersebut salah karena keragaman kearifan lokal adalah kekayaan luhur bangsa yang saling melengkapi dalam bingkai persatuan Indonesia.',
        correctBs: true,
        explanation: 'Benar. Kebhinnekaan bukanlah kelemahan, melainkan mozaik kekuatan yang memperkaya identitas bangsa Indonesia.'
      }
    ]
  }
];

// Special Remedial Package (10 Questions: 5 PG + 2 PG Kompleks + 3 BS)
export const REMEDIAL_PACKAGE: SummativePackage = {
  id: 'paket-remedial',
  code: 'SESI REMEDIAL',
  title: 'Sesi Remedial Khusus - Pemantapan Kompetensi IPAS Bab 4',
  description: 'Materi Bimbingan Terfokus untuk Mencapai Ketuntasan Belajar KKM',
  questions: [
    {
      id: 'rem-q1',
      type: 'pg',
      cognitiveLevel: 'C2',
      question: 'Kearifan lokal diwariskan oleh nenek moyang bangsa Indonesia dengan tujuan utama...',
      options: [
        { id: 'A', text: 'Menjaga keharmonisan hidup antara manusia, alam sekitar, dan Sang Pencipta.' },
        { id: 'B', text: 'Membuat masyarakat takut keluar rumah.' },
        { id: 'C', text: 'Menolak semua orang yang datang dari luar daerah.' },
        { id: 'D', text: 'Mendapatkan keuntungan materi pribadi sebanyak-banyaknya.' }
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan utama kearifan lokal adalah menciptakan tata hidup yang harmonis, damai, dan lestari.'
    },
    {
      id: 'rem-q2',
      type: 'pg',
      cognitiveLevel: 'C2',
      question: 'Sistem pengairan sawah tradisional di Bali yang berlandaskan asas keadilan dan kebersamaan disebut...',
      options: [
        { id: 'A', text: 'Subak' },
        { id: 'B', text: 'Sasi' },
        { id: 'C', text: 'Leuit' },
        { id: 'D', text: 'Marakka Bola' }
      ],
      correctAnswer: 'A',
      explanation: 'Subak adalah sistem organisasi irigasi tradisional di Bali yang diakui UNESCO.'
    },
    {
      id: 'rem-q3',
      type: 'pg',
      cognitiveLevel: 'C3',
      question: 'Tradisi larangan mengambil hasil laut dalam periode tertentu di Maluku agar biota laut tidak punah dinamakan...',
      options: [
        { id: 'A', text: 'Tradisi Sasi' },
        { id: 'B', text: 'Tradisi Bakar Batu' },
        { id: 'C', text: 'Tradisi Sekaten' },
        { id: 'D', text: 'Tradisi Tedak Siten' }
      ],
      correctAnswer: 'A',
      explanation: 'Sasi adalah larangan adat di Maluku dan Papua untuk melindungi ekosistem dari eksploitasi berlebihan.'
    },
    {
      id: 'rem-q4',
      type: 'pg',
      cognitiveLevel: 'C3',
      question: 'Rumah adat Nusantara seperti Omo Sebua dan Rumah Gadang dirancang tahan gempa karena...',
      options: [
        { id: 'A', text: 'Memiliki struktur tiang elastis di atas batu umpak tanpa paku kaku yang dapat menyerap goncangan.' },
        { id: 'B', text: 'Dibuat dari semen tebal yang tidak bisa pecah.' },
        { id: 'C', text: 'Ditanam sedalam 100 meter ke dalam kerak bumi.' },
        { id: 'D', text: 'Terbuat dari bahan plastik tebal yang ringan.' }
      ],
      correctAnswer: 'A',
      explanation: 'Struktur pasak kayu dan umpak batu membuat rumah adat lentur meredam gaya getaran gempa bumi.'
    },
    {
      id: 'rem-q5',
      type: 'pg',
      cognitiveLevel: 'C2',
      question: 'Makna paling utama dari semboyan Bhinneka Tunggal Ika dalam pergaulan di sekolah kita adalah...',
      options: [
        { id: 'A', text: 'Meskipun berbeda suku, agama, dan budaya, kita tetap satu keluarga bangsa Indonesia yang rukun.' },
        { id: 'B', text: 'Semua siswa harus memiliki cita-cita dan hobi yang persis sama.' },
        { id: 'C', text: 'Hanya teman dari suku mayoritas yang berhak memimpin upacara.' },
        { id: 'D', text: 'Setiap siswa bebas mengejek adat istiadat teman lain.' }
      ],
      correctAnswer: 'A',
      explanation: 'Bhinneka Tunggal Ika bermakna berbeda-beda tetapi tetap satu jua dalam persaudaraan kebangsaan.'
    },
    // 2 PG Kompleks
    {
      id: 'rem-q6',
      type: 'pg_kompleks',
      cognitiveLevel: 'C3',
      context: 'Pilihlah pernyataan yang BENAR mengenai tradisi persaudaraan Pela Gandong di Maluku:',
      statements: [
        { id: 'I', text: 'Mengikat persaudaraan antar-desa yang berbeda keyakinan (Islam dan Kristen).' },
        { id: 'II', text: 'Warga saling tolong-menolong dalam membangun masjid dan gereja.' },
        { id: 'III', text: 'Melarang warga desa saling membantu saat ditimpa bencana.' },
        { id: 'IV', text: 'Menjadi teladan toleransi sejati bagi persatuan bangsa Indonesia.' }
      ],
      question: 'Pernyataan yang BENAR tentang Pela Gandong adalah...',
      correctStatements: ['I', 'II', 'IV'],
      explanation: 'Pernyataan I, II, dan IV benar. Pernyataan III bertolak belakang dengan hakikat persaudaraan pela.'
    },
    {
      id: 'rem-q7',
      type: 'pg_kompleks',
      cognitiveLevel: 'C3',
      context: 'Perhatikan contoh-contoh tindakan luhur gotong royong di lingkungan sekolah:',
      statements: [
        { id: 'I', text: 'Bersama-sama membersihkan papan tulis dan menyapu lantai kelas sesuai jadwal piket.' },
        { id: 'II', text: 'Menolong teman yang terjatuh di halaman sekolah dan membawanya ke ruang UKS.' },
        { id: 'III', text: 'Menyembunyikan buku pelajaran teman sebelum jam ulangan dimulai.' },
        { id: 'IV', text: 'Bekerja sama dalam menyelesaikan tugas proyek kelas dengan gembira.' }
      ],
      question: 'Tindakan yang mencerminkan nilai luhur gotong royong adalah nomor...',
      correctStatements: ['I', 'II', 'IV'],
      explanation: 'Nomor I, II, dan IV mencerminkan gotong royong dan empati. Nomor III adalah perbuatan jahil tercela.'
    },
    // 3 Benar / Salah
    {
      id: 'rem-q8',
      type: 'bs',
      cognitiveLevel: 'C2',
      question: 'Lumbung Leuit pada masyarakat adat Baduy digunakan untuk menyimpan cadangan padi agar terhindar dari kelaparan saat paceklik.',
      correctBs: true,
      explanation: 'Benar. Leuit adalah strategi ketahanan pangan mandiri masyarakat adat.'
    },
    {
      id: 'rem-q9',
      type: 'bs',
      cognitiveLevel: 'C2',
      question: 'Dalam musyawarah mufakat, keputusan diambil dengan cara mengintimidasi dan memaksakan kehendak kepada orang yang lebih lemah.',
      correctBs: false,
      explanation: 'Salah. Musyawarah mufakat didasarkan pada akal sehat, keikhlasan hati, dan saling menghormati pendapat.'
    },
    {
      id: 'rem-q10',
      type: 'bs',
      cognitiveLevel: 'C3',
      question: 'Membantu teman sekelas yang mengalami kesulitan belajar merupakan wujud nyata memanusiakan sesama (Si Tou Timou Tumou Tou).',
      correctBs: true,
      explanation: 'Benar. Menolong sesama dengan penuh kasih sayang adalah wujud nyata filosofi memanusiakan manusia.'
    }
  ]
};
