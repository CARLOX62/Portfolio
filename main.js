const navLinks = document.querySelectorAll('.ul-list li a');
const sections = document.querySelectorAll('section');

const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// load saved theme
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

function removeActive() {
  navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

const hireBtn = document.getElementById("hire-btn");

if (hireBtn) {
  hireBtn.addEventListener("click", () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=aniketkumarsonu62@gmail.com&su=Hiring%20Inquiry&body=Hi%20Aniket,%20I%20want%20to%20work%20with%20you.",
      "_blank"
    );
  });
}

const downloadBtn = document.querySelector(".btn-home2");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {

    // ✅ Create toast
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = "Downloading CV...";
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add("show"), 100);

    // Remove toast after 3 sec
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => document.body.removeChild(toast), 400);
    }, 3000);

    // ✅ Download logic
    const link = document.createElement("a");
    link.href = "assets\\aniket_frontend_resume.pdf";
    link.download = "Aniket_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    removeActive();
    link.parentElement.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      removeActive();
      const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
      if (activeLink) activeLink.parentElement.classList.add('active');
    }
  });

  if (window.scrollY > 500) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }

  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active-reveal');
    }
  });
});

const languagesCard = document.getElementById("languages-card");
const skillsSection = document.getElementById("skills");

if (languagesCard) {
  languagesCard.addEventListener("click", () => {
    skillsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

const projectsCard = document.getElementById("projects-card");
const projectSection = document.getElementById("project");

if (projectsCard) {
  projectsCard.addEventListener("click", () => {
    projectSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

const eduCard = document.getElementById("education-card");
const eduModal = document.getElementById("edu-modal");
const closeEdu = document.querySelector(".close-edu");

if (eduCard) {
  eduCard.addEventListener("click", () => {
    eduModal.style.display = "flex";
  });
}

closeEdu.onclick = () => eduModal.style.display = "none";

window.onclick = (e) => {
  if (e.target === eduModal) {
    eduModal.style.display = "none";
  }
};

const revealElements = document.querySelectorAll('.home-container, .about-container, .projects-container, .services-container, .contact-content');
revealElements.forEach(el => el.classList.add('reveal'));

const backToTop = document.createElement('div');
backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
backToTop.id = "back-to-top";
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #474af0;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;
`;

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTop.addEventListener('mouseover', () => backToTop.style.transform = 'scale(1.2)');
backToTop.addEventListener('mouseout', () => backToTop.style.transform = 'scale(1)');

const cards = document.querySelectorAll('.project-card, .c1, .service-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px) scale(1.05)');
  card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
});

const typingElement = document.querySelector('.info-home h3');
const words = ["Frontend Developer", "Python Developer", "Machine Learning Enthusiast", "React Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentWord = words[wordIndex];
  let displayedText = currentWord.substring(0, charIndex);

  typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, typingSpeed / 2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}

function switchTab(tabName, btn) {
  // Deactivate all panels and buttons
  document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.exp-tab-btn').forEach(b => b.classList.remove('active'));

  // Activate chosen
  document.getElementById('tab-' + tabName).classList.add('active');
  btn.classList.add('active');
}

/* ── Counter animation ── */
function animateCounters() {
  document.querySelectorAll('.ach-stat-num[data-target]').forEach(el => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || (target >= 100 ? '+' : '');
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = start + (start === target ? suffix : '');
      if (start >= target) clearInterval(timer);
    }, 30);
  });
}

/* ── Scroll reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      if (e.target.querySelector('.ach-stat-num[data-target]')) {
        animateCounters();
      }
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

/* ── Trigger on load since it's a standalone preview ── */
setTimeout(() => {
  document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('visible'));
  animateCounters();
}, 300);

function openCert(card) {
  const btn       = card.querySelector('.ach-cert-btn');
  const title     = btn.dataset.title;
  const org       = btn.dataset.org;
  const year      = btn.dataset.year;
  const type      = btn.dataset.type;
  const fileSrc   = btn.dataset.img;
  const verifyUrl = btn.dataset.verify;
  const isProject = type === 'project';
  const isPDF     = fileSrc.toLowerCase().endsWith('.pdf');

  // Populate header
  document.getElementById('cert-modal-title-text').textContent = title;
  document.getElementById('cert-modal-org').textContent = org;
  document.getElementById('cert-modal-year').textContent = year;

  // Icon swap
  const icon = document.getElementById('cert-modal-icon');
  icon.innerHTML = isProject
    ? '<i class="fa-solid fa-rocket"></i>'
    : '<i class="fa-solid fa-file-certificate"></i>';
  icon.style.background = isProject ? 'rgba(34,197,94,0.1)' : 'var(--accent-soft)';
  icon.style.color      = isProject ? '#16a34a' : 'var(--accent)';

  // Body
  const body = document.getElementById('cert-modal-body');
  body.innerHTML = '';

  const frame = document.createElement('div');
  frame.className = 'cert-frame';

  if (isProject) {
    // Project — just show placeholder with live demo CTA
    frame.innerHTML = `
      <div class="cert-placeholder">
        <div class="cert-placeholder-icon">🚀</div>
        <h3>Live Project</h3>
        <p>This is a self-built project deployed live. Click below to view the live demo.</p>
      </div>`;

  } else if (isPDF) {
    // ── PDF certificate ──
    // Show loading spinner first
    frame.innerHTML = `
      <div style="padding:60px 0;display:flex;flex-direction:column;align-items:center;gap:14px;width:100%;">
        <div style="width:42px;height:42px;border-radius:50%;border:3px solid var(--accent-soft);border-top-color:var(--accent);animation:spin .8s linear infinite;"></div>
        <span style="font-size:13px;color:#888;">Loading PDF…</span>
      </div>`;

    // Add spin keyframe once
    if (!document.getElementById('spin-style')) {
      const s = document.createElement('style');
      s.id = 'spin-style';
      s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
      document.head.appendChild(s);
    }

    // Build iframe after a tick so spinner shows
    setTimeout(() => {
      frame.innerHTML = `
        <iframe
          src="${fileSrc}"
          title="${title}"
          class="cert-pdf-iframe"
          frameborder="0"
        ></iframe>`;
    }, 100);

  } else {
    // ── Image certificate ──
    frame.innerHTML = `
      <div style="padding:60px 0;display:flex;flex-direction:column;align-items:center;gap:14px;width:100%;">
        <div style="width:42px;height:42px;border-radius:50%;border:3px solid var(--accent-soft);border-top-color:var(--accent);animation:spin .8s linear infinite;"></div>
        <span style="font-size:13px;color:#888;">Loading certificate…</span>
      </div>`;

    if (!document.getElementById('spin-style')) {
      const s = document.createElement('style');
      s.id = 'spin-style';
      s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
      document.head.appendChild(s);
    }

    const img = new Image();
    img.alt = title;
    img.style.cssText = 'width:100%;height:auto;display:block;border-radius:14px;';
    img.onload  = () => { frame.innerHTML = ''; frame.appendChild(img); };
    img.onerror = () => {
      frame.innerHTML = `
        <div class="cert-placeholder">
          <div class="cert-placeholder-icon">📜</div>
          <h3>Certificate Ready to Upload</h3>
          <p>Drop your file into <code style="background:var(--accent-soft);padding:2px 6px;border-radius:4px;color:var(--accent);font-size:12px;">images/certificates/</code></p>
          <span class="cert-placeholder-hint">📁 ${fileSrc}</span>
        </div>`;
    };
    img.src = fileSrc;
  }

  body.appendChild(frame);

  // Footer buttons
  const footer = document.getElementById('cert-modal-footer');
  footer.innerHTML = '';

  if (isProject) {
    footer.innerHTML = `
      <a href="${verifyUrl}" target="_blank" class="cert-action-btn primary">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live Demo
      </a>
      <button class="cert-action-btn secondary" onclick="closeCert()">
        <i class="fa-solid fa-xmark"></i> Close
      </button>`;
  } else {
    footer.innerHTML = `
      <a href="${verifyUrl}" target="_blank" class="cert-action-btn primary">
        <i class="fa-solid fa-shield-check"></i> Verify Certificate
      </a>
      <a href="${fileSrc}" download class="cert-action-btn secondary">
        <i class="fa-solid fa-download"></i> Download PDF
      </a>
      <button class="cert-action-btn secondary" onclick="closeCert()">
        <i class="fa-solid fa-xmark"></i> Close
      </button>`;
  }

  // Open modal
  document.getElementById('cert-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCert() {
  const modal = document.getElementById('cert-modal');
  modal.style.animation = 'none';
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.2s ease';
  setTimeout(() => {
    modal.classList.remove('open');
    modal.style.opacity = '';
    modal.style.transition = '';
    modal.style.animation = '';
    document.body.style.overflow = '';
  }, 200);
}

function handleModalBackdrop(e) {
  if (e.target === document.getElementById('cert-modal')) closeCert();
}

// ESC key to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCert();
});

document.addEventListener('DOMContentLoaded', type);

document.addEventListener("DOMContentLoaded", () => {
  const loadingText = document.getElementById("loading-text");
  const mainIcon = document.querySelector(".main-icon");
  const subIcons = document.querySelectorAll(".sub-icons i");
  const designerText = document.getElementById("designer-text");
  const mainPage = document.getElementById("main-page");
  const loadingScreen = document.getElementById("loading-screen");

  // ✅ CHECK if already shown
  if (localStorage.getItem("loaded")) {
    loadingScreen.style.display = "none";
    // mainPage.classList.add("visible");
    return;
  }

  function showElement(element, delay = 0) {
    setTimeout(() => {
      element.classList.remove("hidden");
      element.classList.add("fall");
    }, delay);
  }

  showElement(loadingText, 0);
  showElement(mainIcon, 800);
  subIcons.forEach((icon, idx) => {
    showElement(icon, 1600 + idx * 400);
  });
  showElement(designerText, 2800);

  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => { loadingScreen.style.display = 'none'; }, 500);
    // mainPage.classList.add("visible");

    // ✅ SAVE state
    localStorage.setItem("loaded", "true");
  }, 4000);
});

// ── EmailJS Contact Form ──
emailjs.init('DVhCXNmBGBXSc9mNN'); // ← paste your Public Key here

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Disable button and show sending state
    const sendBtn = contactForm.querySelector('.btn-send');
    const originalText = sendBtn.textContent;
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';
    sendBtn.style.opacity = '0.7';

    // Send via EmailJS
    emailjs.sendForm('service_tx89ytf', 'template_m77q7e5', this)
      .then(() => {
        // ✅ Success toast
        showContactToast('✅ Message sent! I\'ll get back to you soon.', '#474af0');
        contactForm.reset();
      })
      .catch((error) => {
        // ❌ Error toast
        showContactToast('❌ Something went wrong. Please try again.', '#dc2626');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        // Re-enable button
        sendBtn.disabled = false;
        sendBtn.textContent = originalText;
        sendBtn.style.opacity = '1';
      });
  });
}

function showContactToast(message, color) {
  // Remove any existing toast first
  const existing = document.getElementById('contact-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'contact-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: ${color};
    color: #fff;
    padding: 14px 22px;
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease;
    z-index: 9999;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    max-width: 320px;
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 100);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}