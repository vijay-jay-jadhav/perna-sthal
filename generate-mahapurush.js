import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { mahapurushList } from './mahapurush-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateMahapurushPage(item, index, all) {
  const prev = index > 0 ? all[index - 1] : all[all.length - 1];
  const next = index < all.length - 1 ? all[index + 1] : all[0];

  const enParagraphsHtml = item.parasEn.map(p => `        <p>${p}</p>`).join('\n');
  const mrParagraphsHtml = item.parasMr.map(p => `        <p>${p}</p>`).join('\n');

  const portraitHtml = item.portrait 
    ? `<div class="leader-portrait-frame reveal" id="portraitFrame">
        <img src="${item.portrait}" width="865" height="1400" id="portraitImg" alt="Hand-painted portrait of ${item.titleEn} by Vishal Tajanekar" data-zoomable>
      </div>
      <div class="portrait-credit reveal">Hand-Painted Portrait by Vishal Tajanekar</div>`
    : `<div class="leader-portrait-frame placeholder-frame reveal" id="portraitFrame">
        <div class="placeholder-crest">
          <img src="images/logo-white.png" alt="Prerna Sthal Crest" class="crest-emblem">
          <div class="crest-name-mr">${item.titleMr}</div>
          <div class="crest-name-en">${item.titleEn}</div>
          <span class="crest-badge"><span class="en">Portrait in progress</span><span class="mr-inline mr">चित्र प्रतिक्षेत</span></span>
        </div>
      </div>
      <div class="portrait-credit reveal">The Dome Corridor · Prerna Sthal Gallery</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${item.titleEn} · Corridor Gallery · Prerna Sthal</title>
<meta name="description" content="${item.parasEn[0].replace(/"/g, '&quot;').slice(0, 155)}...">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Work+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Baloo+2:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="shared.css">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="shortcut icon" href="favicon.ico">
<link rel="manifest" href="site.webmanifest">
<meta name="theme-color" content="#ffffff">

<style>
  .corridor-progress {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    height: 3px;
    z-index: 99;
    background: rgba(23,35,31,0.08);
  }
  .corridor-progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--gold), var(--gold-soft));
    transition: width 0.05s linear;
  }

  .leader-header {
    margin-top: 72px;
    background: var(--teal-deep);
    color: var(--paper);
    padding: var(--sp-8) 0 var(--sp-7);
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .leader-header::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 20%, rgba(199, 154, 74, 0.16), transparent 65%);
    pointer-events: none;
  }

  .leader-portrait-frame {
    max-width: 380px;
    margin: var(--sp-4) auto 0;
    background: var(--ink);
    border: 1px solid rgba(220,193,137,0.35);
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 40px 80px -30px rgba(0,0,0,0.65);
    position: relative;
  }
  .leader-portrait-frame img {
    width: 100%;
    height: auto;
    display: block;
    cursor: zoom-in;
    transition: transform 0.4s ease;
  }
  .leader-portrait-frame:hover img {
    transform: scale(1.03);
  }

  .placeholder-frame {
    aspect-ratio: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 40%, #154540, #082420);
    border: 1px solid rgba(220,193,137,0.4);
    padding: 32px 24px;
  }
  .placeholder-crest {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .crest-emblem {
    width: 96px;
    height: auto;
    opacity: 0.85;
    margin-bottom: 20px;
  }
  .crest-name-mr {
    font-size: 26px;
    font-weight: 700;
    color: var(--gold-soft);
    margin-bottom: 6px;
    font-family: 'Baloo 2', sans-serif;
  }
  .crest-name-en {
    font-size: 16px;
    color: var(--paper);
    opacity: 0.9;
    margin-bottom: 16px;
    font-family: 'Work Sans', sans-serif;
  }
  .crest-badge {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid var(--line-ongold);
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(220,193,137,0.08);
  }

  .portrait-credit {
    margin-top: 14px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--gold-soft);
    opacity: 0.8;
  }
  .leader-name-en {
    font-size: clamp(30px, 4.5vw, 52px);
    color: var(--paper);
    margin-top: 24px;
    line-height: 1.15;
  }
  .leader-tag {
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.06em;
    color: var(--gold-soft);
    margin-top: 12px;
  }
  .leader-quote {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-weight: 400;
    font-size: clamp(17px, 1.8vw, 21px);
    line-height: 1.6;
    color: var(--parchment);
    max-width: 720px;
    margin: 24px auto 0;
    opacity: 0.95;
    padding: 0 16px;
  }

  /* Audio player card */
  .audio-narration-bar {
    max-width: 640px;
    margin: 32px auto 0;
    background: rgba(250, 245, 234, 0.08);
    border: 1px solid var(--line-ongold);
    border-radius: 999px;
    padding: 10px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .audio-play-pill {
    background: var(--gold);
    color: var(--teal-deep);
    border: 0;
    padding: 8px 18px;
    border-radius: 999px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
  }
  .audio-play-pill:hover {
    background: var(--paper);
  }

  .bio {
    padding: var(--sp-8) 0 var(--sp-9);
    background: var(--parchment);
  }
  .bio-card-wrapper {
    max-width: 780px;
    margin: 0 auto;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: clamp(28px, 5vw, 56px);
    box-shadow: 0 8px 30px rgba(23,35,31,0.05);
    position: relative;
  }
  .bio-card-wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 40px;
    right: 40px;
    height: 4px;
    background: linear-gradient(90deg, var(--gold), var(--brick));
    border-radius: 0 0 4px 4px;
  }
  .bio-official-heading {
    border-bottom: 1px solid var(--line);
    padding-bottom: 20px;
    margin-bottom: 28px;
    text-align: center;
  }
  .bio-official-title {
    font-size: clamp(24px, 3.5vw, 36px);
    color: var(--brick);
    font-weight: 700;
    margin-bottom: 6px;
    font-family: 'Baloo 2', sans-serif;
  }
  .bio-official-title.en {
    font-family: 'Fraunces', serif;
  }
  .bio-official-dates {
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
    color: var(--ink);
    opacity: 0.75;
  }

  .bio-body p {
    font-size: 17px;
    line-height: 1.85;
    color: var(--ink-soft);
    margin-bottom: 24px;
    text-align: justify;
  }
  .bio-body p:last-child {
    margin-bottom: 0;
  }
  .bio-body.mr-block p {
    font-size: 18px;
    line-height: 2;
    text-align: justify;
  }

  .bio-official-footer-emblem {
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid var(--line);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .bio-footer-logo {
    height: 52px;
    width: auto;
  }
  .bio-footer-stamp {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--teal);
    opacity: 0.8;
  }

  .gallery-nav {
    border-top: 1px solid var(--line);
    padding: 36px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    max-width: 780px;
    margin: 40px auto 0;
  }
  .gallery-nav a {
    text-decoration: none;
    opacity: 0.85;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 999px;
    transition: all 0.2s ease;
    color: var(--ink);
  }
  .gallery-nav a:hover {
    opacity: 1;
    background: var(--paper);
    color: var(--teal);
  }
  .gallery-nav .center-link {
    color: var(--teal);
    opacity: 1;
    font-weight: 700;
    background: var(--paper);
    border: 1px solid var(--line);
  }

  @media (max-width: 680px) {
    .gallery-nav {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
  }
</style>
</head>
<body>

  <a href="#main" class="skip-link">Skip to content</a>

  <!-- ================= TOP NAVIGATION ================= -->
  <nav class="site-nav" aria-label="Main Navigation">
    <div class="nav-top">
      <button type="button" class="hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      
      <div class="nav-brand">
        <a href="index.html" class="logo-link">
          <img src="images/logo.png" class="logo-img" alt="Prerna Sthal Logo">
        </a>
        <div class="brand-text">
          <span class="brand-title">Prerna Sthal</span>
          <span class="brand-sub">Nakshatra Udyan · Baramati</span>
        </div>
      </div>

      <div class="nav-actions">
        <div class="lang-toggle" role="group" aria-label="Choose language">
          <button type="button" class="active" data-lang="en" aria-pressed="true">EN</button>
          <button type="button" data-lang="mr" aria-pressed="false">मराठी</button>
        </div>

        <a href="contact.html" class="visit-pill en">Visit</a>
        <a href="contact.html" class="visit-pill mr-inline mr">भेट द्या</a>
      </div>
    </div>

    <div class="nav-links-row">
      <a href="index.html" class="en">Home</a>
      <a href="index.html" class="mr-inline mr">मुख्यपृष्ठ</a>
      <a href="mahapurush.html" class="is-current en">Mahapurush Gallery</a>
      <a href="mahapurush.html" class="is-current mr-inline mr">महापुरुष गॅलरी</a>
      <a href="mudras.html" class="en">Hasta Mudras</a>
      <a href="mudras.html" class="mr-inline mr">हस्तमुद्रा</a>
      <a href="meditation.html" class="en">Meditation</a>
      <a href="meditation.html" class="mr-inline mr">ध्यान</a>
      <a href="nakshatra-udyan.html" class="en">Nakshatra Udyan</a>
      <a href="nakshatra-udyan.html" class="mr-inline mr">नक्षत्र उद्यान</a>
      <a href="contact.html" class="en">Contact &amp; Visit</a>
      <a href="contact.html" class="mr-inline mr">संपर्क व भेट</a>
    </div>
  </nav>

  <!-- Mobile Drawer Menu -->
  <div class="mobile-menu" id="mobileMenu" role="dialog" aria-modal="true">
    <button type="button" class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu"><span></span><span></span></button>
    <a href="index.html" class="en">Home</a>
    <a href="index.html" class="mr-block mr">मुख्यपृष्ठ</a>
    <a href="mahapurush.html" class="en is-current">Mahapurush Gallery</a>
    <a href="mahapurush.html" class="mr-block mr is-current">महापुरुष गॅलरी</a>
    <a href="mudras.html" class="en">Hasta Mudras</a>
    <a href="mudras.html" class="mr-block mr">हस्तमुद्रा</a>
    <a href="meditation.html" class="en">Meditation</a>
    <a href="meditation.html" class="mr-block mr">ध्यान</a>
    <a href="nakshatra-udyan.html" class="en">Nakshatra Udyan</a>
    <a href="nakshatra-udyan.html" class="mr-block mr">नक्षत्र उद्यान</a>
    <a href="contact.html" class="en">Contact &amp; Visit</a>
    <a href="contact.html" class="mr-block mr">संपर्क व भेट</a>
  </div>

  <div class="corridor-progress"><div class="corridor-progress-fill" id="corridorFill"></div></div>

  <!-- Leader Header -->
  <header class="leader-header">
    <div class="wrap">
      <div class="eyebrow on-dark center reveal">
        <span class="en">The Dome Corridor · Mahapurush #${item.num}</span>
        <span class="mr-inline mr">घुमट प्रदक्षिणा मार्ग · महापुरुष #${item.numMr}</span>
      </div>
      
      ${portraitHtml}

      <h1 class="leader-name-en reveal en">${item.titleEn}</h1>
      <h1 class="leader-name-en reveal mr-block mr">${item.titleMr}</h1>

      <p class="leader-tag reveal en">(${item.datesEn})</p>
      <p class="leader-tag reveal mr-block mr">(${item.datesMr})</p>

      <p class="leader-quote reveal en">${item.quoteEn}</p>
      <p class="leader-quote reveal mr-block mr">${item.quoteMr}</p>

      <!-- Speech Narration Pill -->
      <div class="audio-narration-bar reveal">
        <span style="font-family:'Space Mono', monospace; font-size:11px; letter-spacing:0.06em;">
          <span class="en">Audio Narration</span><span class="mr-inline mr">श्राव्य निवेदन</span>
        </span>
        <button type="button" class="audio-play-pill" id="leaderNarrationBtn" onclick="toggleLeaderSpeech()">
          <span id="leaderAudioIcon">▶</span>
          <span id="leaderAudioLabel" class="en">Listen Biography</span>
          <span id="leaderAudioLabelMr" class="mr-inline mr">चरित्र ऐका</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Biography Content -->
  <section class="bio" id="main">
    <div class="wrap">
      <article class="bio-card-wrapper reveal">
        <div class="bio-official-heading">
          <h2 class="bio-official-title en">${item.titleEn}</h2>
          <h2 class="bio-official-title mr-block mr">${item.titleMr}</h2>
          <div class="bio-official-dates en">(${item.datesEn})</div>
          <div class="bio-official-dates mr-block mr">(${item.datesMr})</div>
        </div>

        <div class="bio-body reveal en">
${enParagraphsHtml}
        </div>

        <div class="bio-body reveal mr-block mr">
${mrParagraphsHtml}
        </div>

        <div class="bio-official-footer-emblem">
          <img src="images/logo.png" alt="Prerna Sthal" class="bio-footer-logo">
          <span class="bio-footer-stamp">Prerna Sthal · Nakshatra Udyan · Vidya Pratishthan</span>
        </div>
      </article>

      <div class="gallery-nav reveal">
        <a href="${prev.filename}">&larr; <span class="en">Previous (${prev.titleEn})</span><span class="mr-inline mr">मागील (${prev.titleMr})</span></a>
        <a href="mahapurush.html" class="center-link"><span class="en">Mahapurush Gallery</span><span class="mr-inline mr">महापुरुष गॅलरी</span></a>
        <a href="${next.filename}"><span class="en">Next (${next.titleEn})</span><span class="mr-inline mr">पुढील (${next.titleMr})</span> &rarr;</a>
      </div>
    </div>
  </section>

  <!-- ================= GLOBAL FOOTER ================= -->
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px;">
            <img src="images/logo.png" class="footer-logo" alt="Prerna Sthal">
            <h3 style="margin:0;">Prerna Sthal</h3>
          </div>
          <p class="en">A peaceful place for meditation, reflection and quiet thought, set within the serene surroundings of Nakshatra Udyan at Vidya Pratishthan, Baramati.</p>
          <p class="mr-block mr">निसर्ग, शांतता आणि चिंतन यांचा अनुभव देणारे प्रेरणा स्थळ नक्षत्र उद्यानाच्या हिरवाईत, विद्या प्रतिष्ठान, बारामती येथे वसले आहे.</p>
        </div>

        <div class="footer-col">
          <h4 class="en">Sections</h4>
          <h4 class="mr-block mr">विभाग</h4>
          <ul class="footer-links">
            <li><a href="index.html" class="en">Home Sanctuary</a><a href="index.html" class="mr-block mr">मुख्य दालन</a></li>
            <li><a href="mahapurush.html" class="en">Mahapurush Gallery</a><a href="mahapurush.html" class="mr-block mr">महापुरुष गॅलरी</a></li>
            <li><a href="mudras.html" class="en">Buddha Hasta Mudras</a><a href="mudras.html" class="mr-block mr">बुद्ध हस्तमुद्रा</a></li>
            <li><a href="meditation.html" class="en">Meditation &amp; Breath</a><a href="meditation.html" class="mr-block mr">ध्यान व प्राणायाम</a></li>
            <li><a href="nakshatra-udyan.html" class="en">Nakshatra Udyan (36 Acres)</a><a href="nakshatra-udyan.html" class="mr-block mr">नक्षत्र उद्यान (३६ एकर)</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="en">Connect</h4>
          <h4 class="mr-block mr">संपर्क</h4>
          <ul class="footer-links">
            <li><a href="contact.html" class="en">Plan a Visit</a><a href="contact.html" class="mr-block mr">भेटीचे नियोजन</a></li>
            <li><a href="https://www.vidyapratishthan.com" target="_blank" rel="noopener">Vidya Pratishthan Trust &nearr;</a></li>
            <li><a href="mailto:vijay.jay.jadhav@gmail.com">vijay.jay.jadhav@gmail.com</a></li>
            <li><span>Baramati, Pune, Maharashtra</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-fine">&copy; Prerna Sthal &middot; Nakshatra Udyan &middot; Vidya Pratishthan, Baramati</span>
        <span class="footer-fine">made with peace by <a href="https://zivastudios.com" target="_blank" rel="noopener">ziva studios</a></span>
      </div>
    </div>
  </footer>

  <script src="shared.js"></script>
  <script>
    // Reading Progress & Portrait Parallax
    const fill = document.getElementById('corridorFill');
    const portraitImg = document.getElementById('portraitImg');
    const portraitFrame = document.getElementById('portraitFrame');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        if (fill && scrollable > 0) fill.style.width = Math.min(100, (y / scrollable) * 100) + '%';
        if (!reduceMotion && portraitImg && portraitFrame) {
          const rect = portraitFrame.getBoundingClientRect();
          const vh = window.innerHeight;
          const p = Math.max(0, Math.min(1, 1 - (rect.top / vh)));
          portraitImg.style.transform = 'scale(' + (1 + p * 0.04) + ')';
        }
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Speech Narration Toggle
    let isSpeaking = false;
    function toggleLeaderSpeech() {
      const isMr = document.body.classList.contains('lang-mr');
      const bioText = isMr
        ? "${item.titleMr}. (${item.datesMr}). ${item.parasMr[0].replace(/"/g, '')}"
        : "${item.titleEn}. (${item.datesEn}). ${item.parasEn[0].replace(/"/g, '')}";

      if (isSpeaking) {
        if (window.PrernaSthal) window.PrernaSthal.stopSpeaking();
        isSpeaking = false;
        document.getElementById('leaderAudioIcon').textContent = '▶';
      } else {
        if (window.PrernaSthal) {
          const started = window.PrernaSthal.speakText(bioText, isMr ? 'mr-IN' : 'en-US');
          if (started) {
            isSpeaking = true;
            document.getElementById('leaderAudioIcon').textContent = '⏸';
          }
        }
      }
    }
  </script>
</body>
</html>
`;
}

// Generate each page
mahapurushList.forEach((item, index) => {
  const pageHtml = generateMahapurushPage(item, index, mahapurushList);
  const outPath = path.join(__dirname, item.filename);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`Generated: ${item.filename} (#${item.num} ${item.titleEn})`);
});

console.log("All 13 dedicated Mahapurush pages generated successfully!");
