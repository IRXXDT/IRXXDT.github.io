// == scroll section active link == //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    // Aktifkan link nav saat scroll
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (id && top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let current = document.querySelector(`header nav a[href*="#${id}"]`);
            if (current) current.classList.add('active');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);
};

// === toggle icon navbar === //
if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// === Tutup menu saat klik link === //
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Tutup navbar saat klik di luar navbar
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// === typed js animation === //
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Student','Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// === scroll reveal animation === //
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// === Language switcher === //
const languageSelector = document.getElementById("language-selector");

const translations = {
  en: {
    home: "HOME",
    about: "About Me",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    hello: "Hello It's Me",
    name: "Ali Raditya",
    andIm: "And I'm a",
    description: "This is my first personal profile website.",
    downloadCV: "Download CV",
    aboutHeading: "About",
    aboutSpan: "Me",
    aboutDescription:
      "Hello, my name is Ali Raditya. I am a student at the Telekomunikasi Telesandi Bekasi Vocational High School, majoring in Informatics Engineering. I am passionate about web development and design, and I have experience in creating various projects that showcase my skills. I am always eager to learn new technologies and improve my abilities in the field of software development.",
    mySkills: "My",
    skillsSpan: " Skills",
    webDevelopment: "Web Development",
    webDevelopmentDesc:
      "I have experience in developing frontend, backend websites (Zakat Application) using PHP and Desktop development such as VB.NET.",
    webDesign: "Web Design",
    webDesignDesc:
      "Developing minimalist, user-friendly application designs such as web, mobile, etc.",
    editor: "Editor",
    editorDesc:
      "I have a lot of experience editing videos such as short videos, or long videos with an aesthetic editing impression.",
    contentCreator: "Content Creator",
    contentCreatorDesc:
      "I've been developing my YouTube channel since late 2020 and have amassed tens of thousands of views. This channel features compilations of national anthems, mandatory national songs, and more.",
    myPortfolio: "My",
    portfolioSpan: "Portfolio",
    project1Title: "GO!!ZAKAT",
    project1Desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eaque exercitationem, officia aspernatur cupiditate tempore, unde animi recusandae fugiat ipsa inventore debitis excepturi deserunt eius dignissimos quis, facere a laboriosam.",
    project2Title: "Spotify Design",
    project2Desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eaque exercitationem, officia aspernatur cupiditate tempore, unde animi recusandae fugiat ipsa inventore debitis excepturi deserunt eius dignissimos quis, facere a laboriosam.",
    project3Title: "LaravelPost",
    project3Desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eaque exercitationem, officia aspernatur cupiditate tempore, unde animi recusandae fugiat ipsa inventore debitis excepturi deserunt eius dignissimos quis, facere a laboriosam.",
    contactMe: "Contact",
    contactSpan: "Me",
    sendMessage: "Send Message",
    fullNamePlaceholder: "Full Name",
    emailPlaceholder: "Email Address",
    mobilePlaceholder: "Mobile Number",
    subjectPlaceholder: "Email Subject",
    messagePlaceholder: "Your Message",
    copyright: "© 2025 Ali Raditya | All Rights Reserved.",
  },
  id: {
    home: "BERANDA",
    about: "Tentang Saya",
    skills: "Keahlian",
    portfolio: "Portofolio",
    contact: "Kontak",
    hello: "Halo, Saya",
    name: "Ali Raditya",
    andIm: "Dan Saya adalah",
    description: "Ini adalah website portfolio pertama Saya.",
    downloadCV: "Unduh CV",
    aboutHeading: "Tentang",
    aboutSpan: "Saya",
    aboutDescription:
      "Halo, nama saya Ali Raditya. Saya siswa SMK Telekomunikasi Telesandi Bekasi, jurusan Teknik Informatika. Saya memiliki minat yang besar di bidang pengembangan dan desain web, dan berpengalaman dalam mengerjakan berbagai proyek yang menunjukkan keahlian saya. Saya selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan kemampuan saya di bidang pengembangan perangkat lunak.",
    mySkills: "Keahlian",
    skillsSpan: "",
    webDevelopment: "Web Programmer",
    webDevelopmentDesc:
      "Saya memiliki pengalaman dalam pengembangan situs web frontend, backend termasuk menggunakan PHP dan pengembangan Desktop seperti VB.NET.",
    webDesign: "Desainer Web",
    webDesignDesc:
      "Mengembangkan desain aplikasi minimalis, ramah pengguna dan mudah digunakan seperti web, seluler, dll.",
    editor: "Editor",
    editorDesc:
      "Saya sudah sangat berpengalaman mengedit video seperti video short, atau video berdurasi panjang dengan kesan editing yang aesthethic",
    contentCreator: "Konten Kreator",
    contentCreatorDesc:
      "Saya telah mengembangkan karir di channel youtube sejak akhir tahun 2020 dan telah memiliki total puluhan ribu penonton. channel ini menampilkan kompilasi dari lagu kebangsaan, lagu wajib nasional, DLL.",
    myPortfolio: "Portofolio",
    portfolioSpan: "",
    project1Title: "GO!!ZAKAT",
    project1Desc:
      "",
    project2Title: "Desain Spotify",
    project2Desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eaque exercitationem, officia aspernatur cupiditate tempore, unde animi recusandae fugiat ipsa inventore debitis excepturi deserunt eius dignissimos quis, facere a laboriosam.",
    project3Title: "LaravelPost",
    project3Desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eaque exercitationem, officia aspernatur cupiditate tempore, unde animi recusandae fugiat ipsa inventore debitis excepturi deserunt eius dignissimos quis, facere a laboriosam.",
    contactMe: "Kontak",
    contactSpan: "",
    sendMessage: "Kirim Pesan",
    fullNamePlaceholder: "Nama Lengkap",
    emailPlaceholder: "Alamat Email",
    mobilePlaceholder: "Nomor Telepon",
    subjectPlaceholder: "Subjek Email",
    messagePlaceholder: "Pesan Anda",
    copyright: "© 2025 Ali Raditya | Hak Cipta Dilindungi.",
  },
};

function updateTextContent(lang) {
  // Navbar links
  document.querySelector('nav.navbar a[href="#home"]').textContent =
    translations[lang].home;
  document.querySelector('nav.navbar a[href="#about"]').textContent =
    translations[lang].about;
  document.querySelector('nav.navbar a[href="#skills"]').textContent =
    translations[lang].skills;
  document.querySelector('nav.navbar a[href="#portfolio"]').textContent =
    translations[lang].portfolio;
  document.querySelector('nav.navbar a[href="#contact"]').textContent =
    translations[lang].contact;

  // Home section
  document.querySelector(".home-content h3:nth-of-type(1)").textContent =
    translations[lang].hello;
  document.querySelector(".home-content h1").textContent =
    translations[lang].name;
  document.querySelector(
    ".home-content h3:nth-of-type(2)"
  ).childNodes[0].textContent = translations[lang].andIm + " ";
  // The span with class multiple-text is handled by typed.js, so no change here
  document.querySelector(".home-content p").textContent =
    translations[lang].description;
  document.querySelector(".btn").textContent = translations[lang].downloadCV;

  // About section
  document.querySelector(".about-content h2").innerHTML =
    translations[lang].aboutHeading +
    " <span>" +
    translations[lang].aboutSpan +
    "</span>";
  document.querySelector(".about-content p").textContent =
    translations[lang].aboutDescription;

  // Skills section
  document.querySelector(".skills h2").innerHTML =
    translations[lang].mySkills +
    "<span>" +
    translations[lang].skillsSpan +
    "</span>";
  const skillBoxes = document.querySelectorAll(".skil-box");
  if (skillBoxes.length >= 4) {
    skillBoxes[0].querySelector("h3").textContent =
      translations[lang].webDevelopment;
    skillBoxes[0].querySelector("p").textContent =
      translations[lang].webDevelopmentDesc;
    skillBoxes[1].querySelector("h3").textContent =
      translations[lang].webDesign;
    skillBoxes[1].querySelector("p").textContent =
      translations[lang].webDesignDesc;
    skillBoxes[2].querySelector("h3").textContent = translations[lang].editor;
    skillBoxes[2].querySelector("p").textContent =
      translations[lang].editorDesc;
    skillBoxes[3].querySelector("h3").textContent =
      translations[lang].contentCreator;
    skillBoxes[3].querySelector("p").textContent =
      translations[lang].contentCreatorDesc;
  }

  // Portfolio section
  document.querySelector(".portfolio h2").innerHTML =
    translations[lang].myPortfolio +
    " <span>" +
    translations[lang].portfolioSpan +
    "</span>";
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");
  if (portfolioBoxes.length >= 3) {
    portfolioBoxes[0].querySelector("h4").textContent =
      translations[lang].project1Title;
    portfolioBoxes[0].querySelector("p").textContent =
      translations[lang].project1Desc;
    portfolioBoxes[1].querySelector("h4").textContent =
      translations[lang].project2Title;
    portfolioBoxes[1].querySelector("p").textContent =
      translations[lang].project2Desc;
    portfolioBoxes[2].querySelector("h4").textContent =
      translations[lang].project3Title;
    portfolioBoxes[2].querySelector("p").textContent =
      translations[lang].project3Desc;
  }

  // Contact section
  document.querySelector(".contact h2").innerHTML =
    translations[lang].contactMe +
    " <span>" +
    translations[lang].contactSpan +
    "</span>";
  document.querySelector(".contact form button").textContent =
    translations[lang].sendMessage;
  const inputs = document.querySelectorAll(
    ".contact form input, .contact form textarea"
  );
  inputs.forEach((input) => {
    if (
      input.placeholder === "Full Name" ||
      input.placeholder === "Nama Lengkap"
    ) {
      input.placeholder = translations[lang].fullNamePlaceholder;
    } else if (
      input.placeholder === "Email Address" ||
      input.placeholder === "Alamat Email"
    ) {
      input.placeholder = translations[lang].emailPlaceholder;
    } else if (
      input.placeholder === "Mobile Number" ||
      input.placeholder === "Nomor Telepon"
    ) {
      input.placeholder = translations[lang].mobilePlaceholder;
    } else if (
      input.placeholder === "Email Subject" ||
      input.placeholder === "Subjek Email"
    ) {
      input.placeholder = translations[lang].subjectPlaceholder;
    } else if (
      input.placeholder === "Your Message" ||
      input.placeholder === "Pesan Anda"
    ) {
      input.placeholder = translations[lang].messagePlaceholder;
    }
  });

  // Footer
  document.querySelector(".footer-text p").textContent =
    translations[lang].copyright;
}

languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  updateTextContent(selectedLang);
});

// Initialize with default language
updateTextContent(languageSelector.value);
