const navAudio = document.getElementById('nav-audio');
const navFeedback = document.getElementById('nav-feedback');
const langSelect = document.getElementById('lang-select');

// Language data
const langData = {
  ms: {
    title: "Panduan Audio Muzium Pengurusan UUM",
    navAudio: "Panduan Audio",
    navFeedback: "Borang Maklum Balas",
    audioHeading: " ",
    segTitles: [
      "Zon A: Ruang Masuk Utama",
      "Zon B: Sejarah Sintok",
      "Zon C: Penubuhan UUM",
      "Zon D: Tayangan Cendekiawan",
      "Zon E: Penerokaan Pengurusan",
    ],
    transcripts: [
      "Selamat datang ke Zon A, ruang masuk muzium Pengurusan Universiti Utara Malaysia. Di sini, anda disambut dengan keindahan flora dan fauna yang menghijau dan menenangkan, mencerminkan suasana kampus UUM yang semula jadi. Pokok rimbun, bunga berwarna-warni, dan kicauan burung mencipta suasana damai, memberi inspirasi, dan menenangkan minda. Nikmati keindahan alam ini seketika, sebelum memulakan perjalanan menelusuri ilmu dan pengetahuan di muzium.",
      "Selamat datang ke Zon Sejarah Sintok. Sintok terletak di utara negeri Kedah, berhampiran sempadan Thailand. Pada asalnya, kawasan ini merupakan hutan belantara yang kaya dengan flora dan fauna serta berfungsi sebagai kawasan tadahan air. Dua sungai utama, iaitu Sungai Sintok dan Sungai Badak, mengalir merentasi kawasan ini dan menjadi sumber kehidupan awal penduduk. Nama Sintok diambil bersempena Pokok Sintok, sejenis tumbuhan liar yang mempunyai nilai perubatan tradisional. Penduduk terawal Sintok terdiri daripada masyarakat Melayu Kedah yang menjalankan kegiatan pertanian kecil-kecilan, memburu dan mengutip hasil hutan. Antara penempatan awal termasuk Kampung Changkat Setoi, Kampung Rawa dan Tanjung Undan. Perkembangan Sintok semakin pesat apabila aktiviti perlombongan bijih timah dan pembalakan dijalankan. Kehadiran pekerja, khususnya masyarakat Cina, meningkatkan jumlah penduduk serta membawa pembinaan kemudahan asas seperti balai polis, sekolah dan kedai perniagaan. Namun, selepas Perang Dunia Kedua, Sintok menjadi kawasan strategik bagi kegiatan Parti Komunis Malaya. Keganasan dan serangan terhadap penduduk serta pasukan keselamatan menyebabkan Sintok diisytiharkan sebagai kawasan hitam pada tahun 1948 dan 1969. Penduduk dipindahkan dan kegiatan ekonomi dihentikan demi keselamatan negara. Keamanan kembali apabila perjanjian damai dimeterai pada akhir tahun 1980-an. Sintok diisytiharkan sebagai kawasan putih pada Disember 1988. Dengan itu, kerajaan memulakan pembinaan Kampus Sintok pada tahun 1989, yang seterusnya menjadi tapak Universiti Utara Malaysia. Zon ini menggambarkan perjalanan Sintok daripada hutan belantara, melalui era konflik, hingga muncul sebagai pusat ilmu dan pengurusan negara.",
      "Selamat datang ke Zon Sejarah Penubuhan Universiti Utara Malaysia. Sejarah Universiti Utara Malaysia bermula pada tahun 1983 apabila Kementerian Pelajaran mencadangkan penubuhan universiti keenam di Malaysia. Pada 19 Oktober 1983, Kabinet bersetuju menubuhkan universiti ini di Kedah bagi memenuhi keperluan melahirkan sumber manusia dalam bidang pengurusan serta mengurangkan kebergantungan pelajar ke luar negara. Penubuhan UUM diluluskan secara rasmi pada 11 Januari 1984 melalui Perintah Universiti Utara Malaysia (Perbadanan) 1984, dengan Lembah Sintok dipilih sebagai tapak kampus. Universiti ini ditubuhkan sebagai satu-satunya universiti yang mengkhusus dalam bidang pengurusan, dan Prof. Emeritus Tan Sri Dato’ Dr. Awang Had Salleh dilantik sebagai Naib Canselor pertama. Seramai 295 pelajar perintis memulakan pengajian pada 7 Julai 1984 di kampus sementara Bandar Darul Aman. Identiti UUM dizahirkan melalui logo universiti yang melambangkan keilmuan, kebudimanan dan kecemerlangan. Simbol obor melambangkan semangat ilmu yang berterusan, manakala warna biru mencerminkan kestabilan dan keyakinan. Dataran Pewira pula menjadi mercu tanda penting bagi upacara rasmi dan peristiwa bersejarah. Sebagai simbol kedaulatan dan tradisi akademik, Cokmar Universiti telah diserahkan oleh Yang di-Pertuan Agong pada tahun 1988. Keseluruhannya, zon ini menggambarkan asas penubuhan, identiti dan aspirasi Universiti Utara Malaysia sebagai universiti pengurusan terkemuka negara.",
      "Selamat datang ke Zon D, Bilik Tayangan Cendekiawan. Di sini, anda akan menelusuri perjalanan Universiti Utara Malaysia sejak penubuhannya pada 1984. Dari langkah awal membina asas akademik dan pentadbiran, UUM terus berkembang menjadi universiti pengurusan terkemuka dengan program, penyelidikan, dan kerjasama antarabangsa yang cemerlang. Tayangan ini menyorot detik penting, pencapaian, dan sumbangan graduan UUM dalam memimpin masyarakat dan negara. Nikmati perjalanan ilmu dan sejarah UUM dari dahulu hingga kini.",
      "Selamat datang ke Zon E, yang membawa kita menelusuri evolusi pengurusan dan kepimpinan daripada tamadun awal hingga ke era moden di Malaysia. Perjalanan ini bermula ribuan tahun dahulu di kota Ur dan Sumeria, apabila manusia mula merekod perdagangan, mengurus sumber, membahagi tenaga kerja, dan memperkenalkan sistem undang-undang seperti Kod Hammurabi di Babylon. Tokoh klasik seperti Sun Tzu, Confucius dan Kautilya pula memperkukuh konsep strategi, etika dan pentadbiran negara. Memasuki era Neo-Klasik, tumpuan pengurusan beralih kepada faktor manusia. Pembahagian kerja oleh Adam Smith, kebajikan pekerja oleh Robert Owen, prinsip pengurusan oleh Henry Fayol, motivasi oleh Maslow, serta birokrasi oleh Max Weber membentuk asas pengurusan moden yang lebih sistematik dan berorientasikan manusia. Dalam konteks Islam, pengurusan berteraskan Tauhid menekankan keseimbangan dunia dan akhirat dengan matlamat al-Falah. Rasulullah SAW memperkenalkan prinsip keadilan, amanah, kecekapan dan syura, manakala Khulafa’ al-Rasyidin membangunkan sistem pentadbiran yang tersusun merangkumi pengurusan wilayah, kewangan, pertahanan dan Baitulmal. Di Alam Melayu, Kesultanan Melaka muncul sebagai pusat pentadbiran dan perdagangan yang tersusun melalui Sistem Pembesar Empat Lipatan serta undang-undang seperti Hukum Kanun Melaka dan Undang-Undang Laut Melaka. Kawasan Sungai Batu dan Lembah Bujang pula membuktikan keunggulan pengurusan ekonomi dan perdagangan antarabangsa sejak awal tamadun. Akhirnya, di era moden, Malaysia melalui Dasar Pandang ke Timur menekankan kecekapan, profesionalisme dan kepimpinan berkesan melalui pembaharuan sistem kerja, perubahan sikap, dan program latihan serta pendidikan. Keseluruhannya, Zon E memperlihatkan bagaimana nilai pengurusan, etika dan kepimpinan berkembang merentas zaman, membentuk asas pengurusan yang diamalkan hari ini.",
    ],
    transcriptBtn: "Transkrip",
    footer1: `UUM Management Museum | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 Panduan Audio Muzium UUM. Semua Hak Terpelihara.`
  },

  en: {
    title: "UUM Management Museum Audio Guide",
    navAudio: "Audio Guide",
    navFeedback: "Feedback",
    audioHeading: " ",
    segTitles: [
      "Zone A: Main Entrance Area",
      "Zone B: History of the Sintok Area",
      "Zone C: Establishment of UUM",
      "Zone D: Scholars’ Video Screening",
      "Zone E: Exploration of Management",
    ],
    transcripts: [
      "Welcome to Zone A, the entrance to the Management Museum at Universiti Utara Malaysia. Here, you are greeted by lush greenery, vibrant flowers, and the gentle sounds of birds, reflecting the serene and natural environment of UUM’s campus. This space offers a moment of calm and inspiration, preparing your mind to explore the rich journey of management, leadership, and knowledge that awaits inside the museum.",
      "Welcome to the Sintok History Zone. Sintok is located in the northern part of Kedah, near the border of Thailand. In its early days, this area was a vast jungle rich in flora and fauna and served as an important water catchment area. Two main rivers, the Sintok River and the Badak River, flow through this region and supported early human settlement. The name Sintok originates from the Sintok tree, a wild plant known for its traditional medicinal value. The earliest inhabitants of Sintok were mainly the Kedah Malay community, who depended on small-scale farming, hunting, and forest produce for their livelihood. Early settlements included areas such as Changkat Setoi, Kampung Rawa, and Tanjung Undan. Sintok began to develop further with the introduction of tin mining and logging activities. The arrival of workers, particularly from the Chinese community, led to population growth and the establishment of basic facilities such as police stations, schools, and commercial shops. After the Second World War, Sintok became a strategic base for the Communist Party of Malaya. Communist violence and attacks on civilians and security forces resulted in Sintok being declared a black area in 1948 and again in 1969. Economic activities were halted, and residents were relocated for safety reasons. Peace was restored in the late 1980s following a peace agreement. Sintok was declared a white area in December 1988. Soon after, the government began the construction of the Sintok Campus in 1989, which later became Universiti Utara Malaysia. This zone reflects Sintok’s journey from a jungle landscape, through conflict, to its transformation into a centre of knowledge and management education.",
      "Welcome to the History of Universiti Utara Malaysia Zone. The history of Universiti Utara Malaysia began in 1983 when the Ministry of Education proposed the establishment of Malaysia’s sixth university. On 19 October 1983, the Cabinet approved its establishment in Kedah to develop human capital in management and reduce students’ reliance on overseas education. UUM was officially established on 11 January 1984 through the Universiti Utara Malaysia (Incorporation) Order 1984, with Sintok Valley selected as its permanent campus. It was founded as the nation’s only university specialising in management studies. Professor Emeritus Tan Sri Dato’ Dr. Awang Had Salleh was appointed as the first Vice-Chancellor. The pioneer group of 295 students began their studies on 7 July 1984 at the temporary campus in Bandar Darul Aman. UUM’s identity is reflected in its logo, symbolising knowledge, integrity, and excellence. The torch represents the eternal flame of knowledge, while the blue colour signifies stability and confidence in management. Dataran Pewira stands as an important landmark for official ceremonies and historic events. In 1988, the University Mace was presented by His Majesty the Yang di-Pertuan Agong, symbolising sovereignty and academic tradition. This zone reflects the foundation, identity and aspirations of Universiti Utara Malaysia as a leading management university.",
      "Welcome to Zone D, the Scholars’ Screening Room. Here, you will explore the journey of Universiti Utara Malaysia since its establishment in 1984. From its early foundations in academics and administration, UUM has grown into a leading management university, excelling in programs, research, and international collaborations. This screening highlights key milestones, achievements, and the contributions of UUM graduates in shaping leadership across society and the nation. Enjoy this journey through UUM’s history and its legacy of knowledge.",
      "Welcome to Zone E, where we explore the evolution of management and leadership from early civilizations to the modern era in Malaysia. This journey begins thousands of years ago in the cities of Ur and Sumer, where humans first recorded trade activities, managed resources, organized labor, and introduced legal systems such as the Code of Hammurabi in Babylon. Classical thinkers like Sun Tzu, Confucius, and Kautilya further strengthened ideas of strategy, ethics, and state administration. Entering the Neo-Classical era, the focus of management shifted toward human behavior. The division of labor by Adam Smith, worker welfare promoted by Robert Owen, management principles introduced by Henry Fayol, human motivation theories by Maslow, and formal bureaucracy by Max Weber laid the foundation for modern, structured, and people-oriented management. In the Islamic context, management is based on the concept of Tawhid, emphasizing balance between worldly responsibilities and the hereafter, with the ultimate goal of al-Falah. The Prophet Muhammad (peace be upon him) emphasized justice, trustworthiness, efficiency, and consultation, while the Rightly Guided Caliphs developed a well-organized administrative system covering governance, finance, defense, and the Baitulmal. In the Malay world, the Melaka Sultanate emerged as a well-organized center of administration and international trade through the Four-Tier Chieftain System and laws such as the Melaka Code and the Maritime Laws of Melaka. Sites like Sungai Batu and the Bujang Valley further demonstrate the excellence of early economic management and global trade networks. Finally, in the modern era, Malaysia’s Look East Policy emphasizes efficiency, professionalism, and effective leadership through workplace reforms, changes in work culture, and comprehensive training and education programs. Overall, Zone E highlights how management values, ethics, and leadership have evolved across time, shaping the foundations of management practices today.",
    ],
    transcriptBtn: "Transcript",
    footer1: `UUM Management Museum | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 UUM Museum Audio Guide. All Rights Reserved.`
  }
};

function applyLanguage(lang) {
  const t = langData[lang];

  document.getElementById('title').innerText = t.title;
  navAudio.innerText = t.navAudio;
  navFeedback.innerText = t.navFeedback;
  document.getElementById('audio-heading').innerText = t.audioHeading;

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`seg${i}-title`).innerText = t.segTitles[i - 1];
    document.getElementById(`seg${i}-trans`).innerText = t.transcripts[i - 1];
  }

  document.querySelectorAll('.transcript-btn').forEach(
    btn => btn.innerText = t.transcriptBtn
  );

  document.querySelectorAll('.audio-bm').forEach(
    a => a.style.display = lang === 'ms' ? 'block' : 'none'
  );
  document.querySelectorAll('.audio-en').forEach(
    a => a.style.display = lang === 'en' ? 'block' : 'none'
  );

  document.getElementById('footer1').innerHTML = t.footer1;
  document.getElementById('footer2').innerHTML = t.footer2;
  document.getElementById('footer3').innerHTML = t.footer3;
}

// Language persistence
langSelect.addEventListener('change', () => {
  localStorage.setItem('lang', langSelect.value);
  applyLanguage(langSelect.value);
});

applyLanguage(localStorage.getItem('lang') || 'ms');

// Transcript toggle
document.querySelectorAll('.transcript-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = document.getElementById(btn.dataset.target);
    t.style.display = t.style.display === 'block' ? 'none' : 'block';
  });
});
