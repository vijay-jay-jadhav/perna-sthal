const fs = require('fs');
const { Resvg } = require('@resvg/resvg-js');
const { execSync } = require('child_process');

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <!-- Background Squircle Clip -->
    <clipPath id="squircleClip">
      <rect x="0" y="0" width="1024" height="1024" rx="210" ry="210" />
    </clipPath>

    <!-- Sky Gradient -->
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4ea8ff" />
      <stop offset="100%" stop-color="#3d9dfc" />
    </linearGradient>

    <!-- Dome Shading Gradient -->
    <linearGradient id="domeGrad" x1="25%" y1="20%" x2="90%" y2="85%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="65%" stop-color="#f2f5f9" />
      <stop offset="100%" stop-color="#d6e0ea" />
    </linearGradient>

    <!-- Drum Base Gradient -->
    <linearGradient id="drumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#cf572c" />
      <stop offset="45%" stop-color="#df6738" />
      <stop offset="85%" stop-color="#e26c3d" />
      <stop offset="100%" stop-color="#c65026" />
    </linearGradient>

    <!-- Finial Gradient -->
    <linearGradient id="finialGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a43e19" />
      <stop offset="50%" stop-color="#cf582d" />
      <stop offset="100%" stop-color="#933513" />
    </linearGradient>

    <!-- Stone Torana Highlights & Shadows -->
    <linearGradient id="stoneTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d8cbba" />
      <stop offset="100%" stop-color="#c4b5a0" />
    </linearGradient>
    <linearGradient id="stonePillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c4b6a1" />
      <stop offset="70%" stop-color="#b6a690" />
      <stop offset="100%" stop-color="#a08f79" />
    </linearGradient>

    <!-- Lawn Gradient -->
    <linearGradient id="lawnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#6bb841" />
      <stop offset="100%" stop-color="#55a331" />
    </linearGradient>

    <!-- Pathway Gradient -->
    <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8f4ec" />
      <stop offset="100%" stop-color="#e8e0d0" />
    </linearGradient>
  </defs>

  <!-- Clip all elements to the squircle boundary -->
  <g clip-path="url(#squircleClip)">
    <!-- Sky Background -->
    <rect x="0" y="0" width="1024" height="1024" fill="url(#skyGrad)" />

    <!-- Left Background Tree Trunk & Canopy -->
    <rect x="82" y="650" width="18" height="150" rx="6" fill="#58351b" />
    <path d="M 80 670 L 64 690" stroke="#58351b" stroke-width="8" stroke-linecap="round" />
    <circle cx="88" cy="620" r="54" fill="#2d731e" />
    <circle cx="56" cy="650" r="42" fill="#256218" />
    <circle cx="118" cy="660" r="46" fill="#388825" />
    <circle cx="86" cy="595" r="44" fill="#3f962b" />

    <!-- Far Right Background Foliage -->
    <ellipse cx="940" cy="710" rx="90" ry="70" fill="#2c721c" />
    <ellipse cx="980" cy="740" rx="80" ry="60" fill="#3b8d27" />

    <!-- THE GREAT WHITE DOME -->
    <!-- Dome Base Shadow / Ellipse Underneath -->
    <ellipse cx="550" cy="530" rx="275" ry="35" fill="#2d6a1d" opacity="0.3" />

    <!-- Terracotta Cylindrical Base / Drum -->
    <path d="M 228 580 
             C 228 520, 340 500, 560 500 
             C 770 500, 890 525, 936 565 
             L 936 745 
             C 900 760, 750 780, 560 780 
             C 380 780, 260 765, 228 745 Z" 
          fill="url(#drumGrad)" />

    <!-- Subtle Brick Wall Texture Lines on Drum -->
    <path d="M 230 625 C 380 645, 750 645, 936 620" stroke="#c04e25" stroke-width="3.5" fill="none" opacity="0.45" />
    <path d="M 229 670 C 380 690, 750 690, 936 665" stroke="#c04e25" stroke-width="3.5" fill="none" opacity="0.45" />
    <path d="M 230 715 C 380 735, 750 735, 936 710" stroke="#c04e25" stroke-width="3.5" fill="none" opacity="0.45" />

    <!-- Windows / Recessed Niches on the Right Wall -->
    <!-- Window 1 (Middle Right) -->
    <g>
      <rect x="660" y="598" width="134" height="126" rx="4" fill="#35150c" />
      <rect x="686" y="624" width="82" height="100" fill="#180a06" />
      <!-- Top and side inner bevel -->
      <path d="M 660 598 L 686 624 L 768 624 L 794 598 Z" fill="#441c10" />
      <path d="M 660 598 L 686 624 L 686 724 L 660 724 Z" fill="#2d120a" />
    </g>
    <!-- Window 2 (Far Right) -->
    <g>
      <rect x="828" y="608" width="80" height="114" rx="4" fill="#35150c" />
      <rect x="846" y="630" width="50" height="92" fill="#180a06" />
      <path d="M 828 608 L 846 630 L 896 630 L 908 608 Z" fill="#441c10" />
      <path d="M 828 608 L 846 630 L 846 722 L 828 722 Z" fill="#2d120a" />
    </g>

    <!-- Hemispherical Dome (The Stupa) -->
    <!-- The Dome Arc: Rising up from the drum base -->
    <path d="M 288 520 
             C 275 370, 395 258, 560 258 
             C 735 258, 830 375, 825 520 
             C 740 500, 640 492, 560 492 
             C 470 492, 360 502, 288 520 Z" 
          fill="url(#domeGrad)" />

    <!-- Soft 3D Lighting / Highlight on Dome -->
    <path d="M 370 470 
             C 350 380, 430 280, 560 270 
             C 520 280, 400 370, 390 475 Z" 
          fill="#ffffff" opacity="0.6" />

    <!-- Dome Apex Finial / Spire (Harmika & Kalash) -->
    <!-- Base Plinth of Finial -->
    <ellipse cx="560" cy="256" rx="54" ry="14" fill="#9e3a15" />
    <rect x="526" y="240" width="68" height="16" rx="4" fill="url(#finialGrad)" />
    <!-- Tier 1 disc -->
    <ellipse cx="560" cy="240" rx="46" ry="11" fill="#c45227" />
    <!-- Tier 2 columns & middle disc -->
    <rect x="532" y="215" width="56" height="25" fill="#8f3211" />
    <!-- Vertical grill slots in tier 2 -->
    <line x1="540" y1="216" x2="540" y2="238" stroke="#da6a3b" stroke-width="3" />
    <line x1="548" y1="216" x2="548" y2="238" stroke="#da6a3b" stroke-width="3" />
    <line x1="556" y1="216" x2="556" y2="238" stroke="#da6a3b" stroke-width="3" />
    <line x1="564" y1="216" x2="564" y2="238" stroke="#da6a3b" stroke-width="3" />
    <line x1="572" y1="216" x2="572" y2="238" stroke="#da6a3b" stroke-width="3" />
    <line x1="580" y1="216" x2="580" y2="238" stroke="#da6a3b" stroke-width="3" />
    <!-- Main Disc Lip -->
    <ellipse cx="560" cy="216" rx="55" ry="13" fill="#a43d17" />
    <ellipse cx="560" cy="214" rx="53" ry="11" fill="#d35b2e" />
    <!-- Upper Chhatra Steps -->
    <path d="M 536 213 C 542 196, 578 196, 584 213 Z" fill="url(#finialGrad)" />
    <ellipse cx="560" cy="195" rx="22" ry="7" fill="#b5471f" />
    <!-- Kalash Pot & Finial Tip -->
    <circle cx="560" cy="186" r="12" fill="#d65d2f" />
    <circle cx="560" cy="184" r="8" fill="#e8764b" />
    <polygon points="560,174 556,182 564,182" fill="#c04e24" />

    <!-- Central Portal / Porch behind Torana -->
    <!-- White Entrance Gate Frame -->
    <polygon points="325,580 598,580 598,750 325,750" fill="#f8fafc" />
    <!-- Dark Doorway Void -->
    <polygon points="356,605 550,605 550,750 356,750" fill="#140d09" />
    <!-- Steps at Entrance -->
    <polygon points="295,730 580,730 575,742 300,742" fill="#e8edf2" />
    <polygon points="280,742 575,742 570,755 285,755" fill="#f8fafc" />
    <polygon points="265,755 570,755 565,770 270,770" fill="#dee4eb" />

    <!-- THE ANCIENT STONE TORANA GATEWAY (Foreground Left) -->
    <!-- Left Pillar -->
    <g>
      <!-- Pillar Base Plinth -->
      <polygon points="170,768 214,768 214,785 170,785" fill="#9c8c77" />
      <polygon points="172,764 212,764 212,768 172,768" fill="#c8baa6" />
      <!-- Pillar Shaft -->
      <polygon points="172,440 208,440 208,764 172,764" fill="url(#stonePillarGrad)" />
      <!-- Pillar Right Edge Highlight -->
      <line x1="207" y1="440" x2="207" y2="764" stroke="#dfd4c3" stroke-width="2.5" />
      <!-- Pillar Capital Top Extension above top beam -->
      <polygon points="172,420 208,420 208,440 172,440" fill="#baa993" />
      <polygon points="168,416 212,416 212,420 168,420" fill="#d2c5b2" />
    </g>

    <!-- Right Pillar -->
    <g>
      <polygon points="398,580 444,580 444,785 398,785" fill="url(#stonePillarGrad)" />
      <line x1="443" y1="440" x2="443" y2="785" stroke="#dfd4c3" stroke-width="2.5" />
      <polygon points="398,420 444,420 444,440 398,440" fill="#baa993" />
      <polygon points="394,416 448,416 448,420 394,420" fill="#d2c5b2" />
    </g>

    <!-- 3 Curved Horizontal Stone Crossbeams (Torana Architraves) -->
    <!-- Beam 1 (Top Architrave) -->
    <g>
      <!-- Bottom Shadow -->
      <path d="M 130 460 C 270 450, 360 450, 485 460 L 485 469 C 360 459, 270 459, 130 469 Z" fill="#887762" />
      <!-- Main Face -->
      <path d="M 128 440 C 270 430, 360 430, 486 440 L 486 462 C 360 452, 270 452, 128 462 Z" fill="#bfaea0" />
      <!-- Top Bevel Highlight -->
      <path d="M 128 434 C 270 424, 360 424, 486 434 L 486 440 C 360 430, 270 430, 128 440 Z" fill="url(#stoneTopGrad)" />
      <!-- End Caps with Traditional Projections -->
      <rect x="124" y="434" width="10" height="30" rx="3" fill="#9e8d7a" />
      <rect x="480" y="434" width="10" height="30" rx="3" fill="#9e8d7a" />
      <circle cx="126" cy="449" r="6" fill="#baa894" />
      <circle cx="488" cy="449" r="6" fill="#baa894" />
    </g>

    <!-- Vertical Spacers Between Beam 1 & 2 -->
    <rect x="220" y="468" width="18" height="28" fill="#a4937f" />
    <rect x="350" y="468" width="18" height="28" fill="#a4937f" />

    <!-- Beam 2 (Middle Architrave) -->
    <g>
      <!-- Bottom Shadow -->
      <path d="M 128 518 C 270 508, 360 508, 486 518 L 486 527 C 360 517, 270 517, 128 527 Z" fill="#887762" />
      <!-- Main Face -->
      <path d="M 126 498 C 270 488, 360 488, 488 498 L 488 520 C 360 510, 270 510, 126 520 Z" fill="#b8a898" />
      <!-- Top Bevel Highlight -->
      <path d="M 126 492 C 270 482, 360 482, 488 492 L 488 498 C 360 488, 270 488, 126 498 Z" fill="url(#stoneTopGrad)" />
      <!-- End Caps -->
      <rect x="122" y="492" width="10" height="30" rx="3" fill="#9e8d7a" />
      <rect x="482" y="492" width="10" height="30" rx="3" fill="#9e8d7a" />
      <circle cx="124" cy="507" r="6" fill="#baa894" />
      <circle cx="490" cy="507" r="6" fill="#baa894" />
    </g>

    <!-- Vertical Spacers Between Beam 2 & 3 -->
    <rect x="220" y="526" width="18" height="28" fill="#a4937f" />
    <rect x="350" y="526" width="18" height="28" fill="#a4937f" />

    <!-- Beam 3 (Bottom Architrave) -->
    <g>
      <!-- Bottom Shadow -->
      <path d="M 128 578 C 270 568, 360 568, 486 578 L 486 587 C 360 577, 270 577, 128 587 Z" fill="#887762" />
      <!-- Main Face -->
      <path d="M 126 558 C 270 548, 360 548, 488 558 L 488 580 C 360 570, 270 570, 126 580 Z" fill="#b09f8f" />
      <!-- Top Bevel Highlight -->
      <path d="M 126 552 C 270 542, 360 542, 488 552 L 488 558 C 360 548, 270 548, 126 558 Z" fill="url(#stoneTopGrad)" />
      <!-- End Caps -->
      <rect x="122" y="552" width="10" height="30" rx="3" fill="#9e8d7a" />
      <rect x="482" y="552" width="10" height="30" rx="3" fill="#9e8d7a" />
      <circle cx="124" cy="567" r="6" fill="#baa894" />
      <circle cx="490" cy="567" r="6" fill="#baa894" />
    </g>

    <!-- LUSH GREEN LAWN, PATHWAY & FOREGROUND FOLIAGE -->
    <!-- Base Lawn Polygon (Right & Center) -->
    <path d="M 0 770 Q 300 750, 1024 760 L 1024 1024 L 0 1024 Z" fill="url(#lawnGrad)" />

    <!-- Bush Groups Around Base of Drum -->
    <ellipse cx="640" cy="745" rx="55" ry="35" fill="#368625" />
    <ellipse cx="695" cy="748" rx="45" ry="30" fill="#449c30" />
    <ellipse cx="750" cy="745" rx="50" ry="32" fill="#2d771e" />
    <ellipse cx="805" cy="748" rx="50" ry="32" fill="#42962c" />
    <ellipse cx="865" cy="750" rx="60" ry="36" fill="#307b20" />
    <ellipse cx="920" cy="752" rx="55" ry="34" fill="#3c8e27" />
    <ellipse cx="975" cy="755" rx="60" ry="36" fill="#2d731e" />

    <!-- Left Shrubbery Next to Torana Pillar -->
    <ellipse cx="230" cy="745" rx="45" ry="30" fill="#256417" />
    <ellipse cx="265" cy="755" rx="55" ry="34" fill="#328021" />
    <ellipse cx="140" cy="740" rx="55" ry="35" fill="#2b701c" />
    <ellipse cx="85" cy="750" rx="65" ry="40" fill="#388825" />
    <ellipse cx="40" cy="760" rx="60" ry="38" fill="#266418" />

    <!-- Winding Sand/Cream Paved Pathway -->
    <!-- Smooth sweeping curve from bottom-left up to the stupa stairs -->
    <path d="M 75 950 
             C 90 870, 140 820, 200 800 
             C 270 780, 310 775, 365 770 
             L 395 770 
             C 320 782, 270 795, 230 820 
             C 170 855, 120 920, 75 950 Z" 
          fill="#dcd4c3" opacity="0.4" /> <!-- subtle pathway edge shadow -->

    <path d="M 85 960 
             C 105 870, 160 820, 225 798 
             C 285 780, 335 774, 385 770 
             L 330 770 
             C 280 774, 230 780, 175 805 
             C 110 835, 60 895, 0 940 
             L 0 1024 
             L 240 1024 
             C 170 990, 120 955, 85 960 Z" 
          fill="url(#pathGrad)" />

    <!-- Clean Foreground Pathway Ribbon -->
    <path d="M 0 930 
             C 65 890, 120 830, 185 800 
             C 240 775, 290 770, 340 765 
             L 390 765 
             C 335 772, 275 780, 225 805 
             C 155 840, 95 910, 35 970 
             L 0 1005 Z" 
          fill="#fbf9f4" />

    <!-- Left Lower Green Lawn Curve -->
    <path d="M 0 780 Q 90 780, 130 830 C 70 880, 20 940, 0 980 Z" fill="url(#lawnGrad)" />

    <!-- Bottom Green Grass Accent at right edge of pathway -->
    <path d="M 300 825 C 380 805, 550 800, 1024 800 L 1024 1024 L 230 1024 C 265 960, 280 890, 300 825 Z" fill="#52a02f" />
    <path d="M 330 820 C 440 805, 650 800, 1024 802 L 1024 1024 L 400 1024 C 365 950, 345 880, 330 820 Z" fill="#5fb037" />

    <!-- Small foreground decorative bushes along lawn -->
    <ellipse cx="550" cy="775" rx="42" ry="22" fill="#469e2f" />
    <ellipse cx="610" cy="778" rx="38" ry="20" fill="#378724" />
    <ellipse cx="665" cy="780" rx="35" ry="18" fill="#4ba833" />
  </g>
</svg>`;

console.log('Generating favicon assets from SVG...');

// 1. Save SVG
fs.writeFileSync('favicon.svg', svgIcon, 'utf8');
fs.writeFileSync('images/favicon.svg', svgIcon, 'utf8');
console.log('Saved favicon.svg and images/favicon.svg');

// Helper to render PNG at exact resolution
function renderPng(size, outputPath) {
  const resvg = new Resvg(svgIcon, {
    fitTo: {
      mode: 'width',
      value: size,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`Rendered ${outputPath} (${size}x${size}, ${pngBuffer.length} bytes)`);
}

// 2. Render all standard web and mobile icon sizes
renderPng(512, 'android-chrome-512x512.png');
renderPng(512, 'images/android-chrome-512x512.png');

renderPng(192, 'android-chrome-192x192.png');
renderPng(192, 'images/android-chrome-192x192.png');

renderPng(180, 'apple-touch-icon.png');
renderPng(180, 'images/apple-touch-icon.png');

renderPng(32, 'favicon-32x32.png');
renderPng(32, 'images/favicon-32x32.png');

renderPng(16, 'favicon-16x16.png');
renderPng(16, 'images/favicon-16x16.png');

// 3. Render 48x48 temporary PNG and create multi-resolution ICO file
renderPng(48, 'temp-48.png');
execSync('convert temp-48.png favicon-32x32.png favicon-16x16.png -colors 256 favicon.ico');
execSync('cp favicon.ico images/favicon.ico');
fs.unlinkSync('temp-48.png');
console.log('Generated multi-resolution favicon.ico and images/favicon.ico');

console.log('Favicon generation completed successfully!');
