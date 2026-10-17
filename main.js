/**
 * PAUL E. K. GUEDE — PORTFOLIO ÉDITORIAL & DIRECTION ARTISTIQUE
 * Interactive Creative Logic & Dynamic Features
 */

(function () {
  'use strict';

  /* ==========================================================================
     PROJECTS DATABASE (Curated from Paul's Actual Works)
     ========================================================================== */
  const PROJECTS = [
    {
      id: 'abi-coiffure',
      title: 'Abi Coiffure — Campagne Estivale',
      client: 'Abi Coiffure (Lomé)',
      category: 'branding',
      categoryLabel: 'Direction Artistique & Print',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.48.56.jpeg',
      colSpan: 'card-col-7',
      shortDesc: 'Direction artistique et affichage promotionnel pour salon de coiffure premium & vente de mèches et perruques de luxe.',
      fullDesc: 'Conception intégrale d’une campagne publicitaire séduisante et raffinée. L’identité repose sur un camaïeu de teintes douces (rose poudré, bordeaux velouté) et une typographie sérif haut de gamme, valorisant la qualité artisanale des perruques et la beauté contemporaine des clientes.',
      palette: ['#E8AFB0', '#2B141E', '#F5D6D8', '#522B38', '#FFFFFF'],
      tools: ['Photoshop', 'Illustrator', 'Lightroom'],
      deliverables: ['Affiche Print A3 & A4', 'Formats Carrés Feed Instagram', 'Bannières dynamiques WhatsApp', 'Déclinaison Story Sponsorisée']
    },
    {
      id: 'pentecote-3d',
      title: 'Pentecôte — Typographie 3D Or & Chrome',
      client: 'Groupe Artistique Gloria',
      category: 'typo',
      categoryLabel: 'Typographie 3D & Retouche',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.49.27.jpeg',
      colSpan: 'card-col-5',
      shortDesc: 'Exploration typographique 3D monumentale en lettrage biseauté or pur et chrome miroir pour une célébration solennelle.',
      fullDesc: 'Une recherche esthétique poussée sur les jeux de réflexion de lumière céleste, les chanfreins sculptés et la solennité typographique. Le lettrage 3D associe l’or chaud et le chrome liquide, reposant sur un arrière-plan architectural épuré illustrant l’élévation spirituelle.',
      palette: ['#E5A93B', '#F8F9FA', '#212529', '#B37D14', '#D4AF37'],
      tools: ['Photoshop', 'Cinema 4D', 'Illustrator'],
      deliverables: ['Affiche de projection monumentale', 'Habillage d’écrans scène', 'Posters commémoratifs', 'Format carré pour réseaux sociaux']
    },
    {
      id: 'sandwich-broker',
      title: 'The Sandwich Broker — Identité & Logotype',
      client: 'The Sandwich Broker',
      category: 'branding',
      categoryLabel: 'Branding & Identité Visuelle',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.52.27.jpeg',
      colSpan: 'card-col-5',
      shortDesc: 'Identité de marque gourmande et fraîche pour une enseigne moderne de restauration rapide artisanale.',
      fullDesc: 'Création d’un logotype combinant énergie, modernité et tradition culinaire. Le symbole associe une toque de cuisinier stylisée en orange mandarine à un lettrage fluide fait main en vert basilic, complété par le label de fraîcheur "Hasty and Tasty".',
      palette: ['#2D6A4F', '#FB8500', '#52B788', '#1B4332', '#FFF3E0'],
      tools: ['Illustrator', 'InDesign', 'Photoshop'],
      deliverables: ['Logotype vectoriel (SVG/AI)', 'Charte graphique (Brand Book)', 'Packaging kraft & papiers sulfurisés', 'Stickers & enseigne extérieure']
    },
    {
      id: 'gloria-live-studio',
      title: 'Gloria Live Studio 2026 — Artwork Musical',
      client: 'Groupe Artistique Gloria',
      category: 'events',
      categoryLabel: 'Événementiel & Direction Artistique',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.50.45.jpeg',
      colSpan: 'card-col-7',
      shortDesc: 'Cover art d’envergure et identité visuelle pour l’enregistrement live en studio du collectif musical.',
      fullDesc: 'Conception de l’affiche et du visuel d’album live. Un travail typographique percutant en lettres dorées lumineuses sur un bleu de nuit profond, rehaussé d’un ruban écarlate et d’un flou artistique de studio avec micro de prise de son professionnelle.',
      palette: ['#2A4B9B', '#FFD23F', '#D90429', '#081C44', '#FFFFFF'],
      tools: ['Photoshop', 'After Effects', 'Illustrator'],
      deliverables: ['Cover digitale d’album', 'Habillage de diffusion YouTube / Facebook', 'Kakemonos d’accueil studio', 'Badges VIP & Staff']
    },
    {
      id: 'celson-groupe',
      title: 'Celson Groupe — Sécurité, Caméras & Réseaux',
      client: 'Groupe Celson (Agoè-Zossimé)',
      category: 'flyers',
      categoryLabel: 'Affiche Publicitaire Corporate',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.48.58.jpeg',
      colSpan: 'card-col-6',
      shortDesc: 'Support commercial et communication visuelle pour une société experte en vidéosurveillance et réseaux informatiques.',
      fullDesc: 'Mise en page éditoriale rigoureuse et percutante orientée conversion client. L’affiche met en avant l’humain et la rigueur technique avec un éclairage chaleureux, des icônes d’équipements claires et des points de contact instantanés pour les prospects.',
      palette: ['#0D47A1', '#E53935', '#42281D', '#F4F4F6', '#121217'],
      tools: ['Photoshop', 'Illustrator'],
      deliverables: ['Flyer commercial recto/verso', 'Fiches techniques d’intervention', 'Bannières web géolocalisées', 'Visuel vitrine agence']
    },
    {
      id: 'kadi-groupe',
      title: 'KADI Groupe — Votre Maison de Rêve',
      client: 'KADI Groupe Construction & Immobilier',
      category: 'branding',
      categoryLabel: 'Communication Immobilière & BTP',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.49.02.jpeg',
      colSpan: 'card-col-6',
      shortDesc: 'Campagne de prestige pour un cabinet de construction, plans architecturaux et concessions immobilières.',
      fullDesc: 'Direction artistique combinant une villa contemporaine aux lignes épurées et un technicien de chantier inspirant confiance. Les teintes bleu nuit et orange sécurité affirment le professionnalisme de la structure auprès des investisseurs locaux et de la diaspora.',
      palette: ['#0B2545', '#FCA311', '#134074', '#FFFFFF', '#081426'],
      tools: ['Photoshop', 'Illustrator', 'InDesign'],
      deliverables: ['Affiche institutionnelle 4x3', 'Brochure de vente immobilière', 'Plaquette d’offres clé-en-main', 'Visuels WhatsApp Business']
    },
    {
      id: 'vos-chansons-mesures',
      title: 'Vos Chansons Sur Mesures — Joël Dogba',
      client: 'Nid’Ange Music',
      category: 'events',
      categoryLabel: 'Art Direction Musicale & 3D',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.49.01.jpeg',
      colSpan: 'card-col-7',
      shortDesc: 'Visuel percutant mettant en scène une clé de sol dorée 3D sur fond urbain pour des créations musicales personnalisées.',
      fullDesc: 'Design d’affiche invitant à la célébration par la musique. La clé de sol en or lustré capte immédiatement le regard, soutenue par une typographie futuriste lisible et un fond bleu profond qui confère au projet une signature prestigieuse.',
      palette: ['#1E50FF', '#E4A936', '#04153E', '#F7E5A9', '#0A2570'],
      tools: ['Photoshop', 'Illustrator'],
      deliverables: ['Affiche promo digitale', 'Vignette de clip vidéo', 'Kit de communication réseaux', 'Cartes de contact musicales']
    },
    {
      id: 'hope-coiffure',
      title: 'Hope Coiffure — Barbier & Coiffeur à Domicile',
      client: 'Hope Coiffure',
      category: 'flyers',
      categoryLabel: 'Identité Visuelle & Flyer Urbain',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.49.00.jpeg',
      colSpan: 'card-col-5',
      shortDesc: 'Flyer nocturne et stylé pour un coiffeur barbier moderne opérant à domicile.',
      fullDesc: 'Création d’un univers masculin et soigné. Utilisation d’un violet profond aux reflets néon, mise en avant du détail des dégradés de cheveux et composition typographique sans-serif & serif percutante assurant une clarté immédiate des tarifs et services.',
      palette: ['#6B11A6', '#160B24', '#FFFFFF', '#1A1A1A', '#A346F0'],
      tools: ['Photoshop', 'Illustrator'],
      deliverables: ['Flyer de poche A6', 'Logo ciseaux minimaliste', 'Menu de services digital', 'Plaque magnétique véhicule']
    },
    {
      id: 'fete-des-moissons',
      title: 'Fête des Moissons 2025 — Événement & Culte',
      client: 'EEPT Paroisse de Zossimé',
      category: 'events',
      categoryLabel: 'Affiche Culturelle & Religieuse',
      year: '2025',
      image: './WhatsApp Image 2026-10-14 at 17.51.25.jpeg',
      colSpan: 'card-col-6',
      shortDesc: 'Affiche festive d’abondance agricole et de célébration paroissiale annuelle.',
      fullDesc: 'Une création vivante et joyeuse symbolisant l’abondance de la terre. Le vert vif ondulé fait écho à la nature togolaise, complété par une corbeille garnie aux détails soignés et une typographie à fort empattement qui donne un souffle magistral au titre.',
      palette: ['#00873E', '#E63946', '#FFFFFF', '#1D3557', '#F4A261'],
      tools: ['Photoshop', 'Illustrator'],
      deliverables: ['Affiche grand format A1', 'Carnet de programme imprimé', 'Banderole extérieure 6 mètres', 'Visuels de diffusion WhatsApp']
    },
    {
      id: 'journee-sport',
      title: 'Journée Sport & Santé — Commission des Jeunes',
      client: 'EEPT Paroisse de Zossimé',
      category: 'events',
      categoryLabel: 'Affiche Sportive & Dynamique',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.51.46.jpeg',
      colSpan: 'card-col-6',
      shortDesc: 'Communication sportive énergique pour une journée de fitness, football et cohésion communautaire.',
      fullDesc: 'Mise en page contemporaine en découpe d’arche ouvrant directement sur la pelouse du stade. Typographie condensée surdimensionnée et contraste vigoureux entre le bleu cobalt et le jaune d’énergie pour stimuler la participation active des jeunes.',
      palette: ['#0F52BA', '#FFB703', '#000000', '#FFFFFF', '#093680'],
      tools: ['Photoshop', 'Illustrator'],
      deliverables: ['Affiche événementielle', 'Flocage T-shirts participants', 'Pass d’inscription', 'Stories comptes officiels']
    },
    {
      id: 'maestro-guy-birthday',
      title: 'Hommage & Célébration — Maestro Guy Basse',
      client: 'Groupe Artistique Gloria',
      category: 'flyers',
      categoryLabel: 'Flyer de Célébration Personnalisé',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.49.26.jpeg',
      colSpan: 'card-col-6',
      shortDesc: 'Affiche anniversaire raffinée avec effets de confettis dorés et cachet de cire rouge commémoratif.',
      fullDesc: 'Composition festive sur fond rouge velours avec traitement photographique type portrait instantané bordé de papier déchiré, calligraphie manuelle "Happy Birthday" et citations bibliques stylisées.',
      palette: ['#990000', '#D4AF37', '#FFFFFF', '#1A0000', '#E63946'],
      tools: ['Photoshop', 'Illustrator'],
      deliverables: ['Visuel de vœux officiel', 'Carte de félicitations digitale', 'Statut WhatsApp haute définition']
    },
    {
      id: 'sandrine-birthday',
      title: 'Vœux & Célébration — Sandrine Soprano',
      client: 'Groupe Artistique Gloria',
      category: 'flyers',
      categoryLabel: 'Flyer de Célébration Personnalisé',
      year: '2026',
      image: './WhatsApp Image 2026-10-14 at 17.50.21.jpeg',
      colSpan: 'card-col-6',
      shortDesc: 'Flyer d’anniversaire délicat en vert émeraude et bleu canard avec mise en valeur photographique.',
      fullDesc: 'Design doux et moderne associant des formes géométriques courbes, une typographie script dynamique couleur menthe fraîche et un badge coeur 3D texturé pour célébrer la voix soprano du groupe.',
      palette: ['#003844', '#00E676', '#FF1744', '#FFFFFF', '#001E24'],
      tools: ['Photoshop', 'Illustrator'],
      deliverables: ['Affiche d’honneur pour réseaux', 'Carte virtuelle interactive']
    }
  ];

  /* ==========================================================================
     RESILIENT IMAGE LOADER COMPONENT
     Creates skeleton shimmer + handles successful load + renders elegant SVG fallback on error
     ========================================================================== */
  function createResilientImage(src, alt, className = '') {
    const wrapper = document.createElement('div');
    wrapper.className = `resilient-img-wrapper ${className}`;

    // Skeleton shimmer element
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton-shimmer';
    wrapper.appendChild(skeleton);

    // Fallback card (hidden by default)
    const fallback = document.createElement('div');
    fallback.className = 'resilient-fallback';
    fallback.innerHTML = `
      <svg class="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <div class="fallback-title">${escapeHTML(alt || 'Aperçu du Projet')}</div>
      <div class="fallback-desc">Asset en cours de chargement ou archive Paul GUEDE</div>
    `;
    wrapper.appendChild(fallback);

    // Actual image
    const img = document.createElement('img');
    img.className = 'resilient-img';
    img.alt = alt || 'Création graphique Paul GUEDE';
    img.loading = 'lazy';

    img.onload = () => {
      img.classList.add('loaded');
      skeleton.style.opacity = '0';
      setTimeout(() => skeleton.remove(), 400);
    };

    img.onerror = () => {
      skeleton.remove();
      fallback.classList.add('active');
    };

    img.src = src;
    wrapper.appendChild(img);

    return wrapper;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  /* ==========================================================================
     WEB AUDIO HAPTIC MICRO-CLICK SYNTHESIZER
     ========================================================================== */
  let audioCtx = null;
  function playHapticClick(freq = 1100) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, audioCtx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch(e) {}
  }

  /* ==========================================================================
     INTERACTIVE 3D SPATIAL GALLERY ENGINE
     Cylinder projection, smooth momentum, drag/swipe physics & HUD sync
     ========================================================================== */
  function initSpatial3DGallery() {
    const stage = document.getElementById('spatialGalleryStage');
    const ring = document.getElementById('spatialRing');
    const counterEl = document.getElementById('spatialCounter');
    const catEl = document.getElementById('spatialCategory');
    const titleEl = document.getElementById('spatialTitle');
    const prevBtn = document.getElementById('spatialPrevBtn');
    const nextBtn = document.getElementById('spatialNextBtn');
    const openBtn = document.getElementById('spatialOpenBtn');

    if (!stage || !ring) return;

    const totalProjects = PROJECTS.length; // 12
    const angleStep = 360 / totalProjects; // 30 deg

    // Responsive radius calculation
    function getRadius() {
      const isMobile = window.innerWidth <= 768;
      const cardWidth = isMobile ? 250 : 340;
      // Tangent radius: R = (cardWidth / 2) / tan(pi / N) + padding
      return Math.round((cardWidth / 2) / Math.tan(Math.PI / totalProjects)) + 40;
    }

    let radius = getRadius();

    // Populate the 12 spatial cards in the ring
    ring.innerHTML = '';
    const cardElements = [];

    PROJECTS.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'spatial-card';
      card.setAttribute('data-id', project.id);
      card.setAttribute('data-index', idx);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Explorer ${project.title}`);

      card.innerHTML = `
        <span class="spatial-card-badge">${escapeHTML(project.categoryLabel)}</span>
        <div class="spatial-card-media">
          <img src="${project.image}" alt="${escapeHTML(project.title)}" loading="lazy">
        </div>
        <div class="spatial-card-body">
          <h4 class="spatial-card-title">${escapeHTML(project.title)}</h4>
          <span class="spatial-card-year">${escapeHTML(project.year)} • ${escapeHTML(project.client)}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        // If card is current front card, open modal; otherwise rotate to front!
        if (activeSpatialIndex === idx) {
          playHapticClick(1000);
          openProjectModal(project.id);
        } else {
          playHapticClick(850);
          rotateToIndex(idx);
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (activeSpatialIndex === idx) {
            openProjectModal(project.id);
          } else {
            rotateToIndex(idx);
          }
        }
      });

      ring.appendChild(card);
      cardElements.push(card);
    });

    function layoutCards() {
      radius = getRadius();
      cardElements.forEach((card, idx) => {
        const theta = idx * angleStep;
        card.style.transform = `rotateY(${theta}deg) translateZ(${radius}px)`;
      });
    }

    layoutCards();
    window.addEventListener('resize', layoutCards);

    // Physics & Rotation State
    let currentAngle = 0;
    let targetAngle = 0;
    let currentTiltX = 0;
    let targetTiltX = 0;
    let activeSpatialIndex = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let angleAtDragStart = 0;
    let lastDragX = 0;
    let dragVelocity = 0;

    function getNormalizedIndex(angle) {
      const rawIdx = Math.round(angle / angleStep);
      return ((rawIdx % totalProjects) + totalProjects) % totalProjects;
    }

    function rotateToIndex(idx) {
      // Find shortest angular path to target index
      const currentNorm = getNormalizedIndex(targetAngle);
      let diff = idx - currentNorm;
      if (diff > totalProjects / 2) diff -= totalProjects;
      if (diff < -totalProjects / 2) diff += totalProjects;
      targetAngle += diff * angleStep;
    }

    function updateHUD(idx) {
      const project = PROJECTS[idx];
      if (!project) return;
      if (counterEl) counterEl.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(totalProjects).padStart(2, '0')}`;
      if (catEl) catEl.textContent = project.categoryLabel.toUpperCase();
      if (titleEl) titleEl.textContent = project.title;

      cardElements.forEach((card, i) => {
        card.classList.toggle('is-active', i === idx);
      });
    }

    updateHUD(0);

    // Render loop with smooth damping
    function render3DLoop() {
      currentAngle += (targetAngle - currentAngle) * 0.085;
      currentTiltX += (targetTiltX - currentTiltX) * 0.085;

      ring.style.transform = `rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${(-currentAngle).toFixed(2)}deg)`;

      // Dynamic lighting/opacity based on angular distance from front
      cardElements.forEach((card, idx) => {
        const cardAngle = idx * angleStep;
        const diff = Math.abs(((cardAngle - currentAngle) % 360 + 540) % 360 - 180);
        const brightness = Math.max(0.4, 1 - (diff / 180) * 0.85);
        card.style.filter = `brightness(${brightness.toFixed(2)})`;
      });

      const newIdx = getNormalizedIndex(currentAngle);
      if (newIdx !== activeSpatialIndex) {
        activeSpatialIndex = newIdx;
        updateHUD(activeSpatialIndex);
      }

      requestAnimationFrame(render3DLoop);
    }
    requestAnimationFrame(render3DLoop);

    // Mouse Drag & Touch Interactions
    function onPointerDown(x, y) {
      isDragging = true;
      dragStartX = x;
      dragStartY = y;
      lastDragX = x;
      dragVelocity = 0;
      angleAtDragStart = targetAngle;
      stage.classList.add('grabbing');
    }

    function onPointerMove(x, y) {
      if (!isDragging) return;
      const deltaX = x - dragStartX;
      const deltaY = y - dragStartY;
      dragVelocity = x - lastDragX;
      lastDragX = x;

      // Rotate around Y and slight pitch tilt around X
      targetAngle = angleAtDragStart - deltaX * 0.38;
      targetTiltX = Math.max(-10, Math.min(10, (deltaY * 0.1)));
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      stage.classList.remove('grabbing');
      targetTiltX = 0;

      // Apply flick momentum and snap to nearest card
      targetAngle += -dragVelocity * 0.8;
      targetAngle = Math.round(targetAngle / angleStep) * angleStep;
      playHapticClick(900);
    }

    stage.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) return;
      onPointerDown(e.clientX, e.clientY);
    });

    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onPointerUp);

    // Touch events for mobile
    stage.addEventListener('touchstart', (e) => {
      if (e.target.closest('button')) return;
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', onPointerUp);

    // Mouse Wheel Scroll Navigation
    let wheelDebounce = null;
    stage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 8) return;

      const direction = delta > 0 ? 1 : -1;
      targetAngle += direction * (angleStep * 0.5);
      targetTiltX = direction * 4;

      clearTimeout(wheelDebounce);
      wheelDebounce = setTimeout(() => {
        targetAngle = Math.round(targetAngle / angleStep) * angleStep;
        targetTiltX = 0;
        playHapticClick(850);
      }, 140);
    }, { passive: false });

    // Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        playHapticClick(800);
        targetAngle -= angleStep;
        targetAngle = Math.round(targetAngle / angleStep) * angleStep;
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        playHapticClick(800);
        targetAngle += angleStep;
        targetAngle = Math.round(targetAngle / angleStep) * angleStep;
      });
    }

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        playHapticClick(1100);
        const currentProject = PROJECTS[activeSpatialIndex];
        if (currentProject) {
          openProjectModal(currentProject.id);
        }
      });
    }

    // Keyboard navigation when stage is in view
    window.addEventListener('keydown', (e) => {
      if (document.getElementById('projectModal')?.classList.contains('active')) return;
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      const rect = stage.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        playHapticClick(750);
        targetAngle -= angleStep;
        targetAngle = Math.round(targetAngle / angleStep) * angleStep;
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        playHapticClick(750);
        targetAngle += angleStep;
        targetAngle = Math.round(targetAngle / angleStep) * angleStep;
      }
    });
  }

  /* ==========================================================================
     PROJECT DETAIL MODAL
     ========================================================================== */
  const modalOverlay = document.getElementById('projectModal');
  let activeProjectIndex = 0;

  function openProjectModal(projectId) {
    const idx = PROJECTS.findIndex(p => p.id === projectId);
    if (idx === -1) return;

    activeProjectIndex = idx;
    updateModalContent(PROJECTS[activeProjectIndex]);

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateModalContent(project) {
    const mediaStage = document.getElementById('modalMediaStage');
    const titleEl = document.getElementById('modalProjectTitle');
    const tagEl = document.getElementById('modalTag');
    const yearEl = document.getElementById('modalYear');
    const fullDescEl = document.getElementById('modalFullDesc');
    const clientEl = document.getElementById('modalClient');
    const toolsEl = document.getElementById('modalTools');
    const deliverablesEl = document.getElementById('modalDeliverables');
    const paletteEl = document.getElementById('modalPalette');

    if (!mediaStage) return;

    // Resilient image for modal
    mediaStage.innerHTML = '';
    const modalImg = createResilientImage(project.image, project.title);
    mediaStage.appendChild(modalImg);

    titleEl.textContent = project.title;
    tagEl.textContent = project.categoryLabel;
    yearEl.textContent = project.year;
    fullDescEl.textContent = project.fullDesc;
    clientEl.textContent = project.client;
    toolsEl.textContent = project.tools.join(', ');

    // Deliverables list
    deliverablesEl.innerHTML = '';
    project.deliverables.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      deliverablesEl.appendChild(li);
    });

    // Palette swatches
    paletteEl.innerHTML = '';
    project.palette.forEach(colorHex => {
      const swatch = document.createElement('div');
      swatch.className = 'swatch-item';
      swatch.style.backgroundColor = colorHex;
      swatch.title = `Copier ${colorHex}`;
      swatch.setAttribute('role', 'button');
      swatch.setAttribute('tabindex', '0');

      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(colorHex, `Couleur ${colorHex} copiée !`);
      });

      paletteEl.appendChild(swatch);
    });
  }

  function showNextProject() {
    activeProjectIndex = (activeProjectIndex + 1) % PROJECTS.length;
    updateModalContent(PROJECTS[activeProjectIndex]);
  }

  function showPrevProject() {
    activeProjectIndex = (activeProjectIndex - 1 + PROJECTS.length) % PROJECTS.length;
    updateModalContent(PROJECTS[activeProjectIndex]);
  }

  /* ==========================================================================
     CUSTOM CURSOR PHYSICS
     ========================================================================== */
  function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    function renderFollower() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderFollower);
    }
    requestAnimationFrame(renderFollower);

    // Hover interactive elements
    const interactiveTargets = 'a, button, input, .project-card, .email-copy-box, .swatch-item, .tool-badge-card';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveTargets)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveTargets)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  /* ==========================================================================
     LOMÉ, TOGO LIVE CLOCK (GMT+0)
     ========================================================================== */
  function updateLiveClock() {
    const clockEl = document.getElementById('liveClock');
    if (!clockEl) return;

    const now = new Date();
    // Togo is UTC/GMT+0
    const timeStr = now.toLocaleTimeString('fr-FR', {
      timeZone: 'Africa/Lome',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clockEl.textContent = `${timeStr} (GMT+0)`;
  }

  /* ==========================================================================
     CLIPBOARD COPY HELPER WITH VISUAL FEEDBACK
     ========================================================================== */
  function copyToClipboard(text, customMessage = 'Email copié !') {
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById('copyFeedbackToast');
      if (toast) {
        toast.textContent = customMessage;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2200);
      }
    }).catch(err => {
      console.warn('Clipboard write failed:', err);
    });
  }

  /* ==========================================================================
     INTERSECTION OBSERVER FOR PROGRESS BARS & REVEAL ON SCROLL
     ========================================================================== */
  function initScrollObservers() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Skill Bars animation
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillBars.forEach(bar => skillObserver.observe(bar));
  }

  /* ==========================================================================
     THEME TOGGLE
     ========================================================================== */
  function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;

    themeBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.innerHTML = '☀';
        themeBtn.setAttribute('aria-label', 'Activer le mode clair');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '☾';
        themeBtn.setAttribute('aria-label', 'Activer le mode sombre');
      }
    });
  }

  /* ==========================================================================
     MOBILE NAVIGATION DRAWER
     ========================================================================== */
  function initMobileDrawer() {
    const openBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('mobileDrawerClose');
    const drawer = document.getElementById('mobileNavDrawer');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!openBtn || !drawer) return;

    openBtn.addEventListener('click', () => {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    links.forEach(link => link.addEventListener('click', closeDrawer));
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });
  }

  /* ==========================================================================
     DOM READY INITIALIZATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Interactive 3D Spatial Cylinder Gallery
    initSpatial3DGallery();

    // 2. Modal controls
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => { playHapticClick(750); showPrevProject(); });
    if (modalNextBtn) modalNextBtn.addEventListener('click', () => { playHapticClick(750); showNextProject(); });

    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeProjectModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeProjectModal();
      if (e.key === 'ArrowLeft') { playHapticClick(750); showPrevProject(); }
      if (e.key === 'ArrowRight') { playHapticClick(750); showNextProject(); }
    });

    // 7. Email copy pill
    const emailBox = document.getElementById('emailCopyBox');
    if (emailBox) {
      emailBox.addEventListener('click', () => {
        playHapticClick(1400);
        copyToClipboard('guedepaul02@gmail.com', 'Email copié dans le presse-papier !');
      });
    }

    // 8. Back to top button
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 9. Custom cursor & observers
    initCustomCursor();
    initScrollObservers();
    initThemeToggle();
    initMobileDrawer();

    // 10. Live Clock
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
  });

})();
