/**
 * Prerna Sthal - Shared Interactive Engine
 * Nakshatra Garden, Vidya Pratishthan, Baramati
 */

(function () {
  'use strict';

  // 1. Language System with LocalStorage Persistence
  const STORAGE_KEY = 'ps_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    const isMr = lang === 'mr';

    document.documentElement.lang = isMr ? 'mr' : 'en';
    if (document.body) {
      document.body.classList.toggle('lang-mr', isMr);
    }

    // Sync all language toggle button groups on the page
    document.querySelectorAll('.lang-toggle').forEach(group => {
      group.querySelectorAll('button').forEach(btn => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    });

    window.dispatchEvent(new CustomEvent('ps:langchange', { detail: { lang } }));
  }

  // Early apply before DOMContentLoaded if body exists
  if (document.body) {
    document.body.classList.toggle('lang-mr', currentLang === 'mr');
    document.documentElement.lang = currentLang;
  }

  // 2. Ambient Meditation Soundscape (Web Audio API)
  class MeditationAudio {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.gainNode = null;
      this.intervalId = null;
    }

    init() {
      if (this.ctx) return;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.ctx = new AudioContext();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }

    playSingingBowl(freq = 261.63, duration = 6) { // C4 root
      if (!this.ctx || !this.isPlaying) return;
      const t = this.ctx.currentTime;

      // Fundamental and harmonics
      const freqs = [freq, freq * 2.76, freq * 5.4, freq * 8.93];
      const gains = [0.12, 0.05, 0.02, 0.008];

      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, t);

        g.gain.setValueAtTime(gains[idx] * 0.8, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + duration);

        osc.connect(g);
        g.connect(this.gainNode);

        osc.start(t);
        osc.stop(t + duration);
      });
    }

    start() {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.isPlaying = true;
      this.gainNode.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 1.5);

      // Strike bowl immediately
      this.playSingingBowl(216, 7); // 216Hz A3 sub-harmonic soothing tone

      // Ambient periodic chime loop (every 9s)
      const bowlFreqs = [216, 288, 324, 432];
      let step = 0;
      this.intervalId = setInterval(() => {
        if (!this.isPlaying) return;
        step = (step + 1) % bowlFreqs.length;
        this.playSingingBowl(bowlFreqs[step], 8);
      }, 8500);

      this.updateUI();
    }

    stop() {
      if (!this.ctx) return;
      this.isPlaying = false;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      if (this.gainNode) {
        this.gainNode.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      }
      this.updateUI();
    }

    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    }

    updateUI() {
      document.querySelectorAll('.audio-nav-btn, .audio-toggle-btn').forEach(btn => {
        btn.classList.toggle('playing', this.isPlaying);
        btn.setAttribute('aria-pressed', this.isPlaying ? 'true' : 'false');
        btn.setAttribute('title', this.isPlaying 
          ? (currentLang === 'mr' ? 'शांतता ध्वनी थांबवा' : 'Mute Sanctuary Chimes')
          : (currentLang === 'mr' ? 'शांतता ध्वनी सुरू करा' : 'Play Sanctuary Chimes')
        );
      });
    }
  }

  const soundscape = new MeditationAudio();

  // 3. Speech Synthesizer for Biographies / Narration
  function speakText(text, lang = 'mr-IN') {
    if (!('speechSynthesis' in window)) return false;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // 4. Modal Lightbox System
  function initLightbox() {
    let modal = document.getElementById('psLightboxModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'psLightboxModal';
      modal.className = 'ps-modal';
      modal.innerHTML = `
        <div class="ps-modal-dialog" style="background:transparent; box-shadow:none; max-width:90vw; text-align:center;">
          <button type="button" class="ps-modal-close" id="psLightboxClose" aria-label="Close image">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <img id="psLightboxImg" src="" alt="" style="max-height:82vh; max-width:100%; margin:0 auto; border-radius:6px; box-shadow:0 30px 90px rgba(0,0,0,0.8); border:1px solid rgba(220,193,137,0.3);">
          <p id="psLightboxCaption" style="margin-top:14px; font-family:'Space Mono', monospace; font-size:12px; color:var(--paper); letter-spacing:0.08em;"></p>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('#psLightboxClose')) {
          closeLightbox();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
          closeLightbox();
        }
      });
    }

    function openLightbox(src, caption) {
      const img = document.getElementById('psLightboxImg');
      const cap = document.getElementById('psLightboxCaption');
      if (img) img.src = src;
      if (cap) cap.textContent = caption || '';
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    // Attach to images with data-zoomable or in visual-break
    document.querySelectorAll('.visual-break img, img[data-zoomable]').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        const cap = img.getAttribute('alt') || '';
        openLightbox(img.src, cap);
      });
    });
  }

  // 5. DOM Initialization
  document.addEventListener('DOMContentLoaded', () => {
    // Initial language setup
    applyLanguage(currentLang);

    // Language Toggle clicks
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-toggle button');
      if (btn && btn.dataset.lang) {
        applyLanguage(btn.dataset.lang);
      }
    });

    // Mobile menu handling
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    function openMobileMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.add('is-open');
      if (hamburgerBtn) {
        hamburgerBtn.classList.add('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.remove('is-open');
      if (hamburgerBtn) {
        hamburgerBtn.classList.remove('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('is-open')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenu) {
      mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
          closeMobileMenu();
        }
      });
    }

    // Audio Nav Button Toggle
    document.querySelectorAll('.audio-nav-btn, .audio-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundscape.toggle();
      });
    });

    // Scroll Reveal Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length > 0) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });

      reveals.forEach(el => io.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('in'));
    }

    // Lightbox setup
    initLightbox();
  });

  // Global Export
  window.PrernaSthal = {
    setLanguage: applyLanguage,
    getLanguage: () => currentLang,
    soundscape,
    speakText,
    stopSpeaking
  };
})();
