const fs = require('fs');
const { Resvg } = require('@resvg/resvg-js');
const { execSync } = require('child_process');

// 1024x1024 square matching the user's uploaded artwork exactly
const svgArtwork = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <!-- Sky Gradient -->
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4aa4ff" />
      <stop offset="50%" stop-color="#449eff" />
      <stop offset="100%" stop-color="#3d97fc" />
    </linearGradient>

    <!-- White Dome Shading -->
    <linearGradient id="domeGrad" x1="28%" y1="18%" x2="88%" y2="85%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="60%" stop-color="#f5f7fa" />
      <stop offset="100%" stop-color="#d4dfeb" />
    </linearGradient>

    <!-- Drum Base Gradient -->
    <linearGradient id="drumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#cf582a" />
      <stop offset="35%" stop-color="#e26c39" />
      <stop offset="70%" stop-color="#e4713e" />
      <stop offset="100%" stop-color="#c44f23" />
    </linearGradient>

    <!-- Finial Gradient -->
    <linearGradient id="finialGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a43d16" />
      <stop offset="50%" stop-color="#d55d2b" />
      <stop offset="100%" stop-color="#933410" />
    </linearGradient>

    <!-- Stone Pillars & Beams -->
    <linearGradient id="stoneTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ded2c1" />
      <stop offset="100%" stop-color="#c6b6a0" />
    </linearGradient>
    <linearGradient id="stonePillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c9baa5" />
      <stop offset="70%" stop-color="#b8a791" />
      <stop offset="100%" stop-color="#a5937d" />
    </linearGradient>

    <!-- Lawn Gradient -->
    <linearGradient id="lawnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#64b33b" />
      <stop offset="100%" stop-color="#4ea029" />
    </linearGradient>

    <!-- Pathway Gradient -->
    <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#faf5ec" />
      <stop offset="100%" stop-color="#ece2d2" />
    </linearGradient>
  </defs>

  <!-- Full-bleed background sky -->
  <rect x="0" y="0" width="1024" height="1024" fill="url(#skyGrad)" />

  <!-- Left Background Tree Trunk & Foliage -->
  <rect x="18" y="660" width="16" height="160" rx="4" fill="#4d3018" />
  <path d="M 24 675 L 8 700" stroke="#4d3018" stroke-width="8" stroke-linecap="round" />
  <circle cx="28" cy="630" r="56" fill="#286e1a" />
  <circle cx="68" cy="670" r="52" fill="#328221" />
  <circle cx="24" cy="598" r="46" fill="#3a9228" />

  <!-- Midground Left Bushes Behind Torana -->
  <ellipse cx="78" cy="745" rx="60" ry="40" fill="#29731b" />
  <ellipse cx="140" cy="740" rx="55" ry="35" fill="#368625" />
  <ellipse cx="205" cy="750" rx="50" ry="32" fill="#2b751d" />

  <!-- THE GREAT WHITE STUPA DOME -->
  <!-- Drum Base Shadow -->
  <ellipse cx="550" cy="530" rx="285" ry="35" fill="#2a651a" opacity="0.25" />

  <!-- Terracotta Cylindrical Drum Base -->
  <path d="M 185 615 
           C 185 540, 310 495, 550 495 
           C 780 495, 915 525, 988 565 
           L 988 745 
           C 940 762, 770 782, 550 782 
           C 340 782, 220 765, 185 745 Z" 
        fill="url(#drumGrad)" />

  <!-- Subtle Horizontal Brick Masonry Details on Drum Base -->
  <path d="M 186 655 C 360 675, 780 675, 988 645" stroke="#be4c22" stroke-width="3" fill="none" opacity="0.45" />
  <path d="M 185 700 C 360 720, 780 720, 988 690" stroke="#be4c22" stroke-width="3" fill="none" opacity="0.45" />

  <!-- Windows / Portals on Right Wall of Drum -->
  <!-- Left Window (Middle) -->
  <g>
    <rect x="676" y="590" width="154" height="142" rx="4" fill="#2d130a" />
    <rect x="704" y="618" width="98" height="114" fill="#130804" />
    <path d="M 676 590 L 704 618 L 802 618 L 830 590 Z" fill="#3c190d" />
    <path d="M 676 590 L 704 618 L 704 732 L 676 732 Z" fill="#250f07" />
  </g>
  <!-- Right Window (Far Right) -->
  <g>
    <rect x="866" y="605" width="96" height="135" rx="4" fill="#2d130a" />
    <rect x="886" y="628" width="60" height="112" fill="#130804" />
    <path d="M 866 605 L 886 628 L 946 628 L 962 605 Z" fill="#3c190d" />
    <path d="M 866 605 L 886 628 L 886 740 L 866 740 Z" fill="#250f07" />
  </g>

  <!-- Hemispherical Dome (The Stupa) -->
  <path d="M 252 520 
           C 238 340, 375 210, 560 210 
           C 745 210, 875 345, 866 520 
           C 780 495, 670 488, 560 488 
           C 450 488, 330 498, 252 520 Z" 
        fill="url(#domeGrad)" />

  <!-- Soft Highlight On Dome -->
  <path d="M 335 460 
           C 320 350, 420 230, 560 220 
           C 510 235, 380 340, 360 468 Z" 
        fill="#ffffff" opacity="0.65" />

  <!-- Dome Apex Spire & Finial (Harmika & Kalash) -->
  <ellipse cx="560" cy="208" rx="62" ry="16" fill="#9c3913" />
  <rect x="522" y="190" width="76" height="18" rx="4" fill="url(#finialGrad)" />
  <!-- Tier 1 disc -->
  <ellipse cx="560" cy="190" rx="52" ry="12" fill="#c45326" />
  <!-- Slotted central drum -->
  <rect x="530" y="162" width="60" height="28" fill="#882e0d" />
  <line x1="538" y1="163" x2="538" y2="188" stroke="#d56434" stroke-width="3.5" />
  <line x1="547" y1="163" x2="547" y2="188" stroke="#d56434" stroke-width="3.5" />
  <line x1="556" y1="163" x2="556" y2="188" stroke="#d56434" stroke-width="3.5" />
  <line x1="564" y1="163" x2="564" y2="188" stroke="#d56434" stroke-width="3.5" />
  <line x1="573" y1="163" x2="573" y2="188" stroke="#d56434" stroke-width="3.5" />
  <line x1="582" y1="163" x2="582" y2="188" stroke="#d56434" stroke-width="3.5" />
  <!-- Main upper eave disc -->
  <ellipse cx="560" cy="163" rx="63" ry="15" fill="#a43d16" />
  <ellipse cx="560" cy="160" rx="60" ry="13" fill="#d55d2b" />
  <!-- Upper Chhatra tiers -->
  <path d="M 534 160 C 540 142, 580 142, 586 160 Z" fill="url(#finialGrad)" />
  <ellipse cx="560" cy="142" rx="26" ry="8" fill="#b7471d" />
  <!-- Kalash Pot and Tip -->
  <circle cx="560" cy="132" r="14" fill="#da6031" />
  <circle cx="560" cy="130" r="10" fill="#ec7649" />
  <polygon points="560,118 555,128 565,128" fill="#be4a20" />

  <!-- Central Portal & Entrance Porch -->
  <!-- White Entrance Surround -->
  <polygon points="292,572 606,572 606,758 292,758" fill="#ffffff" />
  <!-- Dark Doorway Opening -->
  <polygon points="440,598 584,598 584,750 440,750" fill="#150d09" />
  <!-- Shadow under porch canopy -->
  <polygon points="292,572 606,572 584,598 440,598" fill="#e2e8f0" />
  <!-- Steps to Stupa Entrance -->
  <polygon points="268,750 592,750 588,764 272,764" fill="#e2e8f0" />
  <polygon points="252,764 588,764 584,778 256,778" fill="#f8fafc" />
  <polygon points="236,778 584,778 578,794 240,794" fill="#cbd5e1" />

  <!-- ANCIENT STONE TORANA GATEWAY (Foreground Left) -->
  <!-- Left Pillar -->
  <g>
    <polygon points="122,818 178,818 178,828 122,828" fill="#9b8a75" />
    <polygon points="122,420 178,420 178,818 122,818" fill="url(#stonePillarGrad)" />
    <!-- Highlight edge on pillar right side -->
    <line x1="176" y1="420" x2="176" y2="818" stroke="#dfd4c3" stroke-width="3" />
    <!-- Pillar Capital Extension -->
    <polygon points="122,400 178,400 178,420 122,420" fill="#baa892" />
    <polygon points="118,396 182,396 182,400 118,400" fill="#d2c5b2" />
  </g>

  <!-- Right Pillar -->
  <g>
    <polygon points="386,818 442,818 442,828 386,828" fill="#9b8a75" />
    <polygon points="386,420 442,420 442,818 386,818" fill="url(#stonePillarGrad)" />
    <line x1="440" y1="420" x2="440" y2="818" stroke="#dfd4c3" stroke-width="3" />
    <polygon points="386,400 442,400 442,420 386,420" fill="#baa892" />
    <polygon points="382,396 446,396 446,400 382,400" fill="#d2c5b2" />
  </g>

  <!-- Torana Curved Horizontal Crossbars (Architraves) -->
  <!-- Top Beam (Architrave 1) -->
  <g>
    <path d="M 72 445 C 235 433, 340 433, 498 445 L 498 456 C 340 444, 235 444, 72 456 Z" fill="#86745f" />
    <path d="M 70 422 C 235 410, 340 410, 500 422 L 500 448 C 340 436, 235 436, 70 448 Z" fill="#bfada0" />
    <path d="M 70 415 C 235 403, 340 403, 500 415 L 500 422 C 340 410, 235 410, 70 422 Z" fill="url(#stoneTopGrad)" />
    <!-- End Caps with Traditional Projections -->
    <rect x="64" y="415" width="14" height="38" rx="4" fill="#9e8d7a" />
    <rect x="492" y="415" width="14" height="38" rx="4" fill="#9e8d7a" />
    <circle cx="68" cy="434" r="7" fill="#bba894" />
    <circle cx="502" cy="434" r="7" fill="#bba894" />
  </g>

  <!-- Spacers between Beam 1 and 2 -->
  <rect x="200" y="454" width="22" height="34" fill="#a4937f" />
  <rect x="330" y="454" width="22" height="34" fill="#a4937f" />

  <!-- Middle Beam (Architrave 2) -->
  <g>
    <path d="M 72 508 C 235 496, 340 496, 498 508 L 498 519 C 340 507, 235 507, 72 519 Z" fill="#86745f" />
    <path d="M 70 485 C 235 473, 340 473, 500 485 L 500 511 C 340 499, 235 499, 70 511 Z" fill="#b8a798" />
    <path d="M 70 478 C 235 466, 340 466, 500 478 L 500 485 C 340 473, 235 473, 70 485 Z" fill="url(#stoneTopGrad)" />
    <rect x="64" y="478" width="14" height="38" rx="4" fill="#9e8d7a" />
    <rect x="492" y="478" width="14" height="38" rx="4" fill="#9e8d7a" />
    <circle cx="68" cy="497" r="7" fill="#bba894" />
    <circle cx="502" cy="497" r="7" fill="#bba894" />
  </g>

  <!-- Spacers between Beam 2 and 3 -->
  <rect x="200" y="517" width="22" height="34" fill="#a4937f" />
  <rect x="330" y="517" width="22" height="34" fill="#a4937f" />

  <!-- Bottom Beam (Architrave 3) -->
  <g>
    <path d="M 72 571 C 235 559, 340 559, 498 571 L 498 582 C 340 570, 235 570, 72 582 Z" fill="#86745f" />
    <path d="M 70 548 C 235 536, 340 536, 500 548 L 500 574 C 340 562, 235 562, 70 574 Z" fill="#b09e8e" />
    <path d="M 70 541 C 235 529, 340 529, 500 541 L 500 548 C 340 536, 235 536, 70 548 Z" fill="url(#stoneTopGrad)" />
    <rect x="64" y="541" width="14" height="38" rx="4" fill="#9e8d7a" />
    <rect x="492" y="541" width="14" height="38" rx="4" fill="#9e8d7a" />
    <circle cx="68" cy="560" r="7" fill="#bba894" />
    <circle cx="502" cy="560" r="7" fill="#bba894" />
  </g>

  <!-- FOREGROUND LAWN, PATHWAY & BUSHES -->
  <!-- Base Green Lawn -->
  <path d="M 0 765 Q 350 745, 1024 755 L 1024 1024 L 0 1024 Z" fill="url(#lawnGrad)" />

  <!-- Dense Bush Clumps Around Stupa Drum & Right Flank -->
  <ellipse cx="560" cy="790" rx="55" ry="32" fill="#368625" />
  <ellipse cx="615" cy="795" rx="50" ry="30" fill="#449c30" />
  <ellipse cx="670" cy="790" rx="55" ry="32" fill="#2d771e" />
  <ellipse cx="730" cy="795" rx="60" ry="34" fill="#42962c" />
  <ellipse cx="800" cy="798" rx="65" ry="36" fill="#307b20" />
  <ellipse cx="875" cy="800" rx="68" ry="38" fill="#3c8e27" />
  <ellipse cx="950" cy="802" rx="72" ry="40" fill="#2d731e" />
  <ellipse cx="1010" cy="805" rx="50" ry="35" fill="#388825" />

  <!-- Bushes Near Left Pillar of Torana -->
  <ellipse cx="205" cy="780" rx="50" ry="30" fill="#246316" />
  <ellipse cx="245" cy="790" rx="55" ry="34" fill="#307d20" />

  <!-- The Smooth Curving Pathway -->
  <!-- Curved pathway boundary sweeping up from bottom-left to the steps -->
  <path d="M 18 880 
           C 40 850, 100 825, 175 805 
           C 240 788, 290 782, 335 778 
           L 395 778 
           C 335 784, 280 792, 230 812 
           C 165 838, 105 880, 50 940 Z" 
        fill="#ded5c4" opacity="0.45" />

  <path d="M 0 865 
           C 65 835, 130 812, 195 798 
           C 255 784, 305 780, 350 778 
           L 390 778 
           C 340 782, 290 788, 235 804 
           C 165 824, 95 870, 20 955 
           L 180 1024 
           L 820 1024 
           C 680 970, 360 880, 0 865 Z" 
        fill="url(#pathGrad)" />

  <path d="M 20 860 
           C 85 832, 150 810, 215 798 
           C 275 786, 325 780, 370 778 
           L 395 778 
           C 345 782, 295 788, 240 804 
           C 175 822, 105 865, 30 950 
           L 180 1024 
           L 780 1024 
           C 650 970, 350 880, 20 860 Z" 
        fill="#fbf7f0" />

  <!-- Foreground Green Lawn Bottom-Right Fill -->
  <path d="M 260 840 C 370 820, 560 815, 1024 815 L 1024 1024 L 780 1024 C 540 920, 360 870, 260 840 Z" fill="#4ea029" />
  <path d="M 300 835 C 440 818, 670 816, 1024 818 L 1024 1024 L 810 1024 C 580 925, 410 870, 300 835 Z" fill="#5db035" />

  <!-- Left Green Grass Foreland -->
  <path d="M 0 765 Q 85 765, 120 820 C 60 875, 15 935, 0 980 Z" fill="url(#lawnGrad)" />
</svg>`;

console.log('Rendering all PNG favicon icons for favicon-icons/ directory...');

function renderPng(size, outputPath) {
  const resvg = new Resvg(svgArtwork, {
    fitTo: {
      mode: 'width',
      value: size,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`Rendered: ${outputPath} (${size}x${size}, ${pngBuffer.length} bytes)`);
}

// 1. Output files directly into dedicated favicon-icons/ folder
renderPng(1024, 'favicon-icons/icon-1024x1024.png');
renderPng(512, 'favicon-icons/android-chrome-512x512.png');
renderPng(192, 'favicon-icons/android-chrome-192x192.png');
renderPng(180, 'favicon-icons/apple-touch-icon.png');
renderPng(48, 'favicon-icons/favicon-48x48.png');
renderPng(32, 'favicon-icons/favicon-32x32.png');
renderPng(16, 'favicon-icons/favicon-16x16.png');

// 2. Generate multi-resolution ICO file using ImageMagick
execSync('convert favicon-icons/favicon-48x48.png favicon-icons/favicon-32x32.png favicon-icons/favicon-16x16.png -colors 256 favicon-icons/favicon.ico');
console.log('Generated: favicon-icons/favicon.ico');

// 3. Mirror into images/favicon-icons/
fs.mkdirSync('images/favicon-icons', { recursive: true });
execSync('cp -r favicon-icons/* images/favicon-icons/');
console.log('Mirrored into images/favicon-icons/');

// 4. Also mirror to root and images/ for full backwards compatibility
execSync('cp favicon-icons/android-chrome-512x512.png android-chrome-512x512.png');
execSync('cp favicon-icons/android-chrome-512x512.png images/android-chrome-512x512.png');

execSync('cp favicon-icons/android-chrome-192x192.png android-chrome-192x192.png');
execSync('cp favicon-icons/android-chrome-192x192.png images/android-chrome-192x192.png');

execSync('cp favicon-icons/apple-touch-icon.png apple-touch-icon.png');
execSync('cp favicon-icons/apple-touch-icon.png images/apple-touch-icon.png');

execSync('cp favicon-icons/favicon-32x32.png favicon-32x32.png');
execSync('cp favicon-icons/favicon-32x32.png images/favicon-32x32.png');

execSync('cp favicon-icons/favicon-16x16.png favicon-16x16.png');
execSync('cp favicon-icons/favicon-16x16.png images/favicon-16x16.png');

execSync('cp favicon-icons/favicon.ico favicon.ico');
execSync('cp favicon-icons/favicon.ico images/favicon.ico');

console.log('All favicon PNG icons generated and placed successfully in favicon-icons/!');
