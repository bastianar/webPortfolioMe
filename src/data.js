import profileImg from "./assets/profile.svg";
import aboutImg from "./assets/about.svg";
import fotoSaya from "./assets/bastianAR.png"
import web1 from "./assets/web1.webp"
import web2 from "./assets/web2.webp"
import web3 from "./assets/web3.webp"
import project4 from "./assets/project-4.svg";
import project5 from "./assets/project-5.svg";

import sertif1 from "./assets/Sertifikat/sertif1.webp"
import sertif2 from "./assets/Sertifikat/sertif2.webp"
import sertif3 from "./assets/Sertifikat/sertif3.webp"
import sertif4 from "./assets/Sertifikat/sertif4.webp"
import sertif5 from "./assets/Sertifikat/sertif5.webp"

export const profile = {
  name: "Bastian Ardian Ramadhan",
  firstName: "Bastian",
  lastName: "Ardian Ramadhan",
  initials: "P",
  role: "Frontend Web Developer",
  tagline: "Saya membuat website yang cepat, rapi, dan enak dipakai.",
  intro: "Fokus pada tampilan bersih, performa, dan pengalaman pengguna yang baik.",
  yearsExperience: "Freshgraduate",
  location: "Bogor, Indonesia",
  email: "bastianrmdhn12@gmail.com",
  // Nomor WhatsApp: format internasional tanpa +, spasi, atau tanda hubung (contoh Indonesia: 62812...)
  whatsapp: "621213934547",
  photo: fotoSaya,
  socials: {
    github: "https://github.com/bastianar",
    linkedin: "https://www.linkedin.com/in/bastian-ardian-ramadhan-b168532ab/",
    instagram: "https://www.instagram.com/bastianrmdhn/",
  },
};

export const about = {
  heading: "Mengubah ide menjadi produk digital",
  image: fotoSaya,
  paragraphs: [
    "Halo, saya Bastian, saya lulusan sarjana Sistem Infomasi Universitas Terbuka.",
    "Saya memiliki keterampilan dalam membuat tampilan website dengan React dan Tailwind CSS, serta menjaga performa dan aksesibilitas. Saya juga memiliki keterampilan lain dalam mendesain dengan Figma dan Photoshop, jadi komunikasi dengan desainer terasa lebih mudah.",
  ],
};

export const experiences = [
  {
    role: "Data Entry - Freelance",
    company: "PT. Gita Cipta Siagayasa",
    period: "22 Juli - 27 Agustus 2025",
    points: ["Mengindentifikasi kondisi gambar jalan raya.", "Memberikan tanda dan nama kerusakan dengan melakukan seleksi pada kerusakan jalan.", "Menginput data pada website yang disediakan."],
  },
  {
    role: "Quality Inspection",
    company: "PT. Astra Daihatsu Motor",
    period: "2021 – 2022",
    points: [
      "Appearance  - Memeriksa tampilan eksterior dan interior mobil produksi untuk memastikan tidak ada cacat pada produk.",
      "Supply Unit - Melakukan scanning pada barcode mobil produksi agar data produk dapat dimasukkan.",
      "Fitting/Exterior & Interior 4 - Pastikan celah antara fender dan pintu depan, pintu depan dan pintu belakang, dan seterusnya, tidak terlalu lebar, sempit, atau menonjol ke luar maupun ke dalam.",
    ],
  },
];

// url = alamat website proyek (kartu langsung membuka link ini di tab baru)
export const projects = [
  {
    title: "Reservasi Spa",
    description: "Website reservasi spa dengan integrasi via whatsapp.",
    tags: ["React", "Tailwind", "Vite"],
    image: web1,
    url: "https://capstonpro.netlify.app/",
  },
  {
    title: "Landing Page Property",
    description: "Website untuk mencari rumah impian.",
    tags: ["React", "Tailwind"],
    image: web2,
    url: "https://landing-page-property-chi.vercel.app/",
  },
  {
    title: "Ecommerce Ui",
    description: "Website e-commerce modern dengan pengalaman belanja yang mulus.",
    tags: ["React", "Tailwind", "REST API"],
    image: web3,
    url: "https://ecommerce-ui-cyan.vercel.app/",
  },
  {
    title: "Task Manager Web",
    description: "Aplikasi web untuk mencatat dan mengatur tugas harian dengan efisien.",
    tags: ["JavaScript", "CSS", "LocalStorage"],
    image: project4,
    url: "https://example.com/project-4",
  },
  {
    title: "Company Profile",
    description: "Website profil perusahaan yang responsif dan cepat dimuat.",
    tags: ["HTML", "Tailwind", "JavaScript"],
    image: project5,
    url: "https://example.com/project-5",
  },
];


export const sertifikat = [
  {
    title: "Belajar Dasar Pemrograman Web",
    publisher: "Dicoding",
    date: "24 Mei 2026",
    image: sertif1,
  },
  {
    title: "Belajar Dasar Pemrograman Javascript",
    publisher: "Dicoding",
    date: "12 Juni 2026",
    image: sertif2,
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    publisher: "Dicoding",
    date: "25 Juni 2026",
    image: sertif3,
  },
  {
    title: "Belajar Membuat Aaplikasi Web dengan React",
    publisher: "Dicoding",
    date: "29 Juni 2026",
    image: sertif4,
  },
  {
    title: "Belajar Strategi Pengembangan Diri",
    publisher: "Dicoding",
    date: "30 Juni 2026",
    image: sertif5,
  },
]

// icon dipetakan di components/Skills.jsx
export const skills = [
  { name: "JavaScript", key: "javascript" },
  { name: "React", key: "react" },
  { name: "HTML5", key: "html" },
  { name: "CSS", key: "css" },
  { name: "Tailwind CSS", key: "tailwind" },
  { name: "Photoshop", key: "photoshop" },
  { name: "Figma", key: "figma" },
];
