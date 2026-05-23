import './style.css';

const skills = [
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#68A063' },
  { name: 'Java', icon: 'fab fa-java', color: '#ED8B00' },
  { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
  { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
  { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
  { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
  { name: 'C++', icon: 'fas fa-code', color: '#00599C' },
  { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
];

const experience = [
  {
    hash: 'a1b7ca2', branch: 'HEAD → intern', company: 'ThoughtWin Technologies',
    role: 'Frontend Developer', at: '@ ThoughtWin Technologies, Indore, M.P',
    desc: 'Implemented microservices architecture using Node.js and Express, improving API response time by 25% and reducing server load by 30%.',
    tags: ['Node.js','Express','Microservices','REST APIs','JavaScript'],
    files: 31, add: 2800, del: 150, date: 'Jun 2025 - Jul 2025'
  },
  {
    hash: 'c3d5e11', branch: 'HEAD → developer', company: 'ISL Research',
    role: 'AI/ML Research Engineer', at: '@ Indian Sign Language Project (CanonSign)',
    desc: 'Developing a production-grade skeletal canonicalization pipeline for Indian Sign Language recognition using PyTorch and ST-GCN architectures. Building learnable spatial transformations for signer-invariant gesture recognition with graph neural networks.',
    tags: ['Python','PyTorch','Computer Vision','MediaPipe','Deep Learning','GNN'],
    files: 25, add: 3500, del: 12, date: '2024 - Present'
  },
  {
    hash: 'f7a9b33', branch: 'main', company: 'Full Stack',
    role: 'Full Stack Developer', at: '@ FixOnTheGo (MERN + Spring Boot)',
    desc: 'Built a full-stack web application connecting vehicle owners with mechanics for real-time service requests, booking, and payments using Spring Boot, Express.js, MongoDB, and Socket.io.',
    tags: ['Spring Boot','Express.js','EJS','Node.js','MongoDB','Socket.io','Tailwind CSS'],
    files: 45, add: 5000, del: 200, date: '2024 - 2025'
  }
];

const repos = [
  { name: 'FixOnTheGo', lang: 'JavaScript', updated: '1 month ago' },
  { name: 'LBR-Fruit-Web-App', lang: 'JavaScript', updated: '2 months ago' },
  { name: 'Site Suitability for Indore', lang: 'JavaScript', updated: '3 months ago' }
];

const pinned = [
  {
    title: 'FixOnTheGo', badge: 'Public',
    desc: 'Full-stack web application connecting vehicle owners with mechanics for real-time service requests, booking, and payments.',
    tags: ['Spring Boot','Express.js','EJS','Node.js','MongoDB','Socket.io','Tailwind CSS'],
    lang: 'JavaScript', langColor: '#F7DF1E', stars: 12, forks: 3, demo: '#'
  },
  {
    title: 'LBR Fruit Web App', badge: 'Public',
    desc: 'Wholesale fruit supply management platform for order processing, invoicing, and delivery tracking.',
    tags: ['Node.js','Express','React','MongoDB','Cloudinary','PDFKit','Nodemailer'],
    lang: 'JavaScript', langColor: '#F7DF1E', stars: 8, forks: 2, demo: '#'
  },
  {
    title: 'Site Suitability for Indore', badge: 'Public',
    desc: 'Geospatial analysis dashboard assessing site suitability for urban projects in Indore (GEOTA-derived).',
    tags: ['GIS','JavaScript','Leaflet','GeoJSON','Data Visualization'],
    lang: 'JavaScript', langColor: '#61AFEF', stars: 4, forks: 0, demo: '#'
  }
];

// NAV
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

const sections = document.querySelectorAll('.sec');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
  });
});

// SKILLS ORBIT
function buildSkillsOrbit() {
  const c = document.getElementById('skillsOrbit');
  if (!c) return;
  const center = document.createElement('div');
  center.className = 'orbit-center';
  center.innerHTML = '<i class="fas fa-code"></i>';
  c.appendChild(center);
  const cx = c.offsetWidth / 2, cy = c.offsetHeight / 2, r = Math.min(cx, cy) * 0.7;
  const canvas = document.createElement('canvas');
  canvas.width = c.offsetWidth; canvas.height = c.offsetHeight;
  canvas.style.cssText = 'position:absolute;inset:0;z-index:1';
  c.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  skills.forEach((s, i) => {
    const a = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(255,107,53,.12)'; ctx.lineWidth = 1; ctx.stroke();
    const n = (i + 1) % skills.length;
    const nx = cx + Math.cos((n / skills.length) * Math.PI * 2 - Math.PI / 2) * r;
    const ny = cy + Math.sin((n / skills.length) * Math.PI * 2 - Math.PI / 2) * r;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny);
    ctx.strokeStyle = 'rgba(255,107,53,.08)'; ctx.stroke();
    const el = document.createElement('div');
    el.className = 'orbit-item';
    el.style.left = `${x - 25}px`; el.style.top = `${y - 25}px`;
    el.innerHTML = `<i class="${s.icon}" style="color:${s.color}"></i><span>${s.name}</span>`;
    c.appendChild(el);
  });
  [0.35, 0.55, 0.7].forEach(rr => {
    ctx.beginPath(); ctx.arc(cx, cy, Math.min(cx, cy) * rr, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,107,53,.06)'; ctx.lineWidth = 1; ctx.stroke();
  });
}

// EDUCATION
function buildEducation() {
  const el = document.getElementById('eduTimeline');
  if (!el) return;
  const edu = [
    { icon: 'fas fa-university', name: 'Indian Institute of Information Technology, Sri City, Tirupati, AP',
      degree: 'B.Tech - Computer Science and Engineering', details: 'Currently pursuing B.Tech in CSE with focus on Full Stack Development, AI/ML, and Data Structures & Algorithms.',
      date: 'Expected May 2027', score: 'CGPA: 9.20' },
    { icon: 'fas fa-school', name: 'Paramount Academy',
      degree: 'Higher Secondary (PCM)', details: 'Completed 12th with Physics, Chemistry, and Mathematics. Achieved a 10.0 SGPA in the 2nd semester of B.Tech.',
      date: 'May 2022', score: '95.60%' }
  ];
  el.innerHTML = edu.map(e => `
    <div class="edu-card">
      <div>
        <div class="edu-icon"><i class="${e.icon}"></i></div>
        <div class="edu-name">${e.name}</div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-details">${e.details}</div>
      </div>
      <div class="edu-right">
        <div class="edu-date"><i class="far fa-calendar"></i> ${e.date}</div>
        <div class="edu-score">${e.score}</div>
      </div>
    </div>
  `).join('');
}

// TIMELINE
function buildTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  experience.forEach((exp, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    const item = document.createElement('div');
    item.className = `tl-item ${side}`;
    item.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-card-head">
          <span class="commit-hash">${exp.hash}</span>
          <span class="commit-branch">${exp.branch}</span>
          <span class="tl-company">${exp.company}</span>
        </div>
        <div class="tl-role">${exp.role}</div>
        <span class="tl-at">${exp.at}</span>
        <p class="tl-desc">${exp.desc}</p>
        <div class="tech-tags">${exp.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="commit-stats">
          <span><i class="fas fa-file-code"></i> ${exp.files} files changed</span>
          <span class="add">+${exp.add} insertions</span>
          <span class="del">-${exp.del} deletions</span>
        </div>
      </div>
      <div class="tl-date"><span>📅</span> ${exp.date}</div>`;
    tl.appendChild(item);
  });
  const init = document.createElement('div');
  init.className = 'tl-init';
  init.innerHTML = '<div class="tl-init-card"><i class="fas fa-code-commit"></i> Initial Commit (Hello World)</div>';
  tl.appendChild(init);
}

// PROJECTS
function buildProjects() {
  const rl = document.getElementById('repoList'), pg = document.getElementById('pinnedGrid');
  if (!rl || !pg) return;
  const langColor = l => l === 'Python' ? '#3776AB' : l === 'HTML' ? '#E34F26' : '#F7DF1E';
  rl.innerHTML = `<div class="repo-list-head"><span><i class="far fa-folder"></i> Repositories</span><span class="repo-cnt">${repos.length}</span></div>` +
    repos.map(r => `<div class="repo-item"><div><div class="repo-name">${r.name}</div><div class="repo-meta"><span style="background:${langColor(r.lang)};width:8px;height:8px;border-radius:50%;display:inline-block"></span> ${r.lang} · Updated ${r.updated}</div></div><span class="repo-vis">Public</span></div>`).join('');
  pg.innerHTML = pinned.map(p => `<div class="pin-card"><div class="pin-head"><span class="pin-title"><i class="far fa-folder"></i> ${p.title}</span><span class="pin-badge">${p.badge}</span></div><p class="pin-desc">${p.desc}</p><div class="pin-tags">${p.tags.map(t => `<span class="pin-tag">${t}</span>`).join('')}</div><div class="pin-footer"><span><span style="background:${p.langColor};width:8px;height:8px;border-radius:50%;display:inline-block"></span> ${p.lang}</span><span>⭐ ${p.stars}</span><span>🍴 ${p.forks}</span>${p.demo ? `<a href="${p.demo}">Demo <i class="fas fa-external-link-alt"></i></a>` : ''}</div></div>`).join('');
}

// CONTACT
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.className = 'form-msg success';
  msg.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => { msg.style.display = 'none'; }, 4000);
});

// SCROLL ANIMATIONS
function handleScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.tl-item,.skill-cat,.pin-card,.about-card,.about-term,.edu-card').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = '.6s ease'; observer.observe(el);
  });
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
  buildSkillsOrbit(); buildEducation(); buildTimeline(); buildProjects();
  setTimeout(handleScrollAnimations, 100);
});
