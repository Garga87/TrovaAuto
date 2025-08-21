// TrovaAuto - Modern Car Search App
// Developed with GitHub Codespaces for mobile-first experience

/* =================== CAR DATABASE =================== */

const carDatabase = [
  {
    id: 1,
    brand: "Volkswagen",
    model: "Golf",
    variant: "1.5 TSI Life",
    price_base: 28500,
    seats: 5,
    drivetrain: "FWD",
    fuel_type: "benzina",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: false
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 8.25,
      premium_audio: false
    },
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 2,
    brand: "BMW",
    model: "Serie 3",
    variant: "320d xDrive",
    price_base: 52000,
    seats: 5,
    drivetrain: "AWD",
    fuel_type: "diesel",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: true
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 10.25,
      premium_audio: true
    },
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 3,
    brand: "Tesla",
    model: "Model 3",
    variant: "Standard Range Plus",
    price_base: 45000,
    seats: 5,
    drivetrain: "RWD",
    fuel_type: "elettrico",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: true
    },
    infotainment: {
      android_auto: false,
      apple_carplay: false,
      display_size: 15,
      premium_audio: true
    },
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Prius",
    variant: "1.8 Hybrid Active",
    price_base: 32000,
    seats: 5,
    drivetrain: "FWD",
    fuel_type: "ibrido",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: false
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 9,
      premium_audio: false
    },
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 5,
    brand: "Audi",
    model: "A4 Avant",
    variant: "40 TFSI quattro",
    price_base: 48000,
    seats: 5,
    drivetrain: "AWD",
    fuel_type: "benzina",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: true
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 10.1,
      premium_audio: true
    },
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 6,
    brand: "Ford",
    model: "Kuga",
    variant: "2.0 EcoBlue AWD",
    price_base: 38000,
    seats: 5,
    drivetrain: "AWD",
    fuel_type: "diesel",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: false,
      BSM: true
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 8,
      premium_audio: false
    },
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 7,
    brand: "Mercedes",
    model: "Classe A",
    variant: "A200d Automatic",
    price_base: 42000,
    seats: 5,
    drivetrain: "FWD",
    fuel_type: "diesel",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: true
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 10.25,
      premium_audio: true
    },
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 8,
    brand: "Volkswagen",
    model: "Tiguan",
    variant: "2.0 TDI 4Motion",
    price_base: 44000,
    seats: 7,
    drivetrain: "AWD",
    fuel_type: "diesel",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: true
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 9.2,
      premium_audio: false
    },
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 9,
    brand: "Hyundai",
    model: "Kona Electric",
    variant: "64 kWh",
    price_base: 39000,
    seats: 5,
    drivetrain: "FWD",
    fuel_type: "elettrico",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: true
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 10.25,
      premium_audio: false
    },
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 10,
    brand: "Peugeot",
    model: "3008",
    variant: "1.6 PureTech GT",
    price_base: 36000,
    seats: 5,
    drivetrain: "FWD",
    fuel_type: "benzina",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: false,
      BSM: false
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 10,
      premium_audio: true
    },
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 11,
    brand: "Skoda",
    model: "Octavia",
    variant: "2.0 TDI DSG",
    price_base: 35000,
    seats: 5,
    drivetrain: "FWD",
    fuel_type: "diesel",
    adas_features: {
      ACC: true,
      AEB: true,
      LKA: true,
      BSM: true
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 9.2,
      premium_audio: false
    },
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  },
  {
    id: 12,
    brand: "Renault",
    model: "Clio",
    variant: "1.0 TCe Zen",
    price_base: 22000,
    seats: 5,
    drivetrain: "FWD",
    fuel_type: "benzina",
    adas_features: {
      ACC: false,
      AEB: true,
      LKA: false,
      BSM: false
    },
    infotainment: {
      android_auto: true,
      apple_carplay: true,
      display_size: 7,
      premium_audio: false
    },
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop&auto=format",
    match_score: 0
  }
];

const adasExplanations = {
  ACC: {
    name: "Adaptive Cruise Control",
    description: "Sistema che mantiene automaticamente la distanza di sicurezza dal veicolo che precede, regolando la velocità",
    benefits: "Riduce lo stress di guida, migliora sicurezza e comfort nei viaggi lunghi",
    limitations: "Non sostituisce l'attenzione del guidatore, può avere difficoltà in condizioni meteo avverse"
  },
  AEB: {
    name: "Autonomous Emergency Braking",
    description: "Frenata automatica d'emergenza che interviene per evitare o ridurre l'impatto di una collisione",
    benefits: "Può salvare vite umane e ridurre la gravità degli incidenti",
    limitations: "Funziona solo in determinate condizioni, velocità e distanze"
  },
  LKA: {
    name: "Lane Keeping Assist",
    description: "Sistema che aiuta a mantenere il veicolo nella propria corsia di marcia",
    benefits: "Previene uscite accidentali di carreggiata, utile in caso di distrazione",
    limitations: "Richiede linee stradali ben visibili, può essere disattivato dal guidatore"
  },
  BSM: {
    name: "Blind Spot Monitoring",
    description: "Monitoraggio dell'angolo cieco che avverte della presenza di veicoli nelle zone non visibili",
    benefits: "Aumenta la sicurezza nei cambi di corsia e nelle manovre",
    limitations: "Sensibile alle condizioni meteo e alla pulizia dei sensori"
  }
};

const priceRanges = {
  budget: { min: 15000, max: 25000 },
  medio: { min: 25000, max: 40000 },
  premium: { min: 40000, max: 60000 },
  luxury: { min: 60000, max: 999999 }
};

/* =================== APPLICATION STATE =================== */

let appState = {
  currentPage: 'homepage',
  currentStep: 1,
  wizardData: {},
  searchResults: [],
  selectedCars: new Set(),
  sortBy: 'match'
};

/* =================== DOM ELEMENTS =================== */

const elements = {
  // Navigation
  navHome: document.getElementById('navHome'),
  navTraining: document.getElementById('navTraining'),
  
  // Pages
  pages: document.querySelectorAll('.page'),
  homepage: document.getElementById('homepage'),
  wizard: document.getElementById('wizard'),
  results: document.getElementById('results'),
  training: document.getElementById('training'),
  
  // Wizard
  startWizard: document.getElementById('startWizard'),
  wizardSteps: document.querySelectorAll('.wizard-step'),
  progressFill: document.getElementById('progressFill'),
  progressSteps: document.querySelectorAll('.step'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  submitBtn: document.getElementById('submitBtn'),
  
  // Results
  resultsCount: document.getElementById('resultsCount'),
  carResults: document.getElementById('carResults'),
  sortSelect: document.getElementById('sortSelect'),
  backToWizard: document.getElementById('backToWizard'),
  compareSelected: document.getElementById('compareSelected'),
  saveSearch: document.getElementById('saveSearch'),
  
  // Training
  categoryBtns: document.querySelectorAll('.category-btn'),
  trainingCategories: document.querySelectorAll('.training-category'),
  
  // Modal
  comparisonModal: document.getElementById('comparisonModal'),
  comparisonTable: document.getElementById('comparisonTable'),
  modalClose: document.querySelector('.modal__close'),
  
  // Tooltip
  tooltip: document.getElementById('tooltip')
};

/* =================== UTILITY FUNCTIONS =================== */

function formatPrice(price) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showPage(pageId) {
  elements.pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  appState.currentPage = pageId;
  
  // Update navigation
  document.querySelectorAll('.header__nav .btn').forEach(btn => btn.classList.remove('active'));
  if (pageId === 'homepage') elements.navHome.classList.add('active');
  if (pageId === 'training') elements.navTraining.classList.add('active');
}

function updateProgressBar() {
  const progress = (appState.currentStep / 3) * 100;
  elements.progressFill.style.width = `${progress}%`;
  
  elements.progressSteps.forEach((step, index) => {
    step.classList.toggle('active', index + 1 <= appState.currentStep);
  });
}

function showWizardStep(step) {
  elements.wizardSteps.forEach((stepEl, index) => {
    stepEl.classList.toggle('active', index + 1 === step);
  });
  
  appState.currentStep = step;
  updateProgressBar();
  
  // Update navigation buttons
  elements.prevBtn.style.display = step > 1 ? 'block' : 'none';
  elements.nextBtn.style.display = step < 3 ? 'block' : 'none';
  elements.submitBtn.style.display = step === 3 ? 'block' : 'none';
}

function validateStep(step) {
  const stepEl = document.getElementById(`step${step}`);
  const requiredInputs = stepEl.querySelectorAll('input[type="radio"][required]');
  
  for (let input of requiredInputs) {
    const name = input.name;
    if (!stepEl.querySelector(`input[name="${name}"]:checked`)) {
      return false;
    }
  }
  return true;
}

function collectWizardData() {
  const formData = new FormData(document.getElementById('wizard'));
  const data = {};
  
  // Basic requirements
  data.seats = formData.get('seats');
  data.budget = formData.get('budget');
  data.fuel = formData.get('fuel');
  data.drivetrain = formData.get('drivetrain');
  
  // ADAS features
  data.adas = formData.getAll('adas');
  data.safetyPriority = parseInt(document.getElementById('safetyPriority').value);
  
  // Infotainment
  data.infotainment = formData.getAll('infotainment');
  data.infotainmentPriority = parseInt(document.getElementById('infotainmentPriority').value);
  
  appState.wizardData = data;
  return data;
}

/* =================== MATCHING ALGORITHM =================== */

function calculateMatchScore(car, preferences) {
  let score = 0;
  let maxScore = 0;
  
  // Basic requirements (40% weight)
  maxScore += 40;
  
  // Seats matching
  const seatsMatch = car.seats >= parseInt(preferences.seats);
  if (seatsMatch) score += 10;
  
  // Budget matching
  const budgetRange = priceRanges[preferences.budget];
  const budgetMatch = car.price_base >= budgetRange.min && car.price_base <= budgetRange.max;
  if (budgetMatch) score += 15;
  
  // Fuel type matching
  const fuelMatch = car.fuel_type === preferences.fuel;
  if (fuelMatch) score += 10;
  
  // Drivetrain matching
  const drivetrainMatch = car.drivetrain === preferences.drivetrain;
  if (drivetrainMatch) score += 5;
  
  // ADAS features (30% weight)
  maxScore += 30;
  if (preferences.adas && preferences.adas.length > 0) {
    const adasScore = preferences.adas.reduce((acc, feature) => {
      return acc + (car.adas_features[feature] ? 1 : 0);
    }, 0);
    score += (adasScore / preferences.adas.length) * 20 * (preferences.safetyPriority / 5);
  } else {
    score += 10; // Default ADAS score if no preferences
  }
  
  // Infotainment features (30% weight)
  maxScore += 30;
  if (preferences.infotainment && preferences.infotainment.length > 0) {
    let infotainmentScore = 0;
    
    preferences.infotainment.forEach(feature => {
      switch (feature) {
        case 'android_auto':
          if (car.infotainment.android_auto) infotainmentScore += 1;
          break;
        case 'apple_carplay':
          if (car.infotainment.apple_carplay) infotainmentScore += 1;
          break;
        case 'premium_audio':
          if (car.infotainment.premium_audio) infotainmentScore += 1;
          break;
        case 'large_display':
          if (car.infotainment.display_size >= 10) infotainmentScore += 1;
          break;
      }
    });
    
    score += (infotainmentScore / preferences.infotainment.length) * 20 * (preferences.infotainmentPriority / 5);
  } else {
    score += 15; // Default infotainment score
  }
  
  return Math.round((score / maxScore) * 100);
}

function findMatchingCars(preferences) {
  const results = carDatabase.map(car => {
    const matchScore = calculateMatchScore(car, preferences);
    return { ...car, match_score: matchScore };
  });
  
  // Sort by match score descending
  results.sort((a, b) => b.match_score - a.match_score);
  
  return results;
}

/* =================== RESULTS RENDERING =================== */

function renderCarCard(car) {
  const adasFeatures = Object.entries(car.adas_features)
    .filter(([key, value]) => value)
    .map(([key, value]) => key);
  
  const infotainmentFeatures = [];
  if (car.infotainment.android_auto) infotainmentFeatures.push('Android Auto');
  if (car.infotainment.apple_carplay) infotainmentFeatures.push('CarPlay');
  if (car.infotainment.premium_audio) infotainmentFeatures.push('Audio Premium');
  if (car.infotainment.display_size >= 10) infotainmentFeatures.push('Display Grande');
  
  return `
    <div class="car-card" data-car-id="${car.id}">
      <input type="checkbox" class="car-card__checkbox" data-car-id="${car.id}">
      <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-card__image" loading="lazy">
      <div class="car-card__content">
        <div class="car-card__header">
          <div>
            <div class="car-card__title">${car.brand} ${car.model}</div>
            <div class="car-card__variant">${car.variant}</div>
          </div>
          <div class="car-card__match">
            <div class="match-score">${car.match_score}% match</div>
            <div class="car-card__price">${formatPrice(car.price_base)}</div>
          </div>
        </div>
        
        <div class="car-card__features">
          ${adasFeatures.map(feature => 
            `<span class="feature-badge feature-badge--active">${feature}</span>`
          ).join('')}
          ${infotainmentFeatures.map(feature => 
            `<span class="feature-badge">${feature}</span>`
          ).join('')}
          <span class="feature-badge">${car.seats} posti</span>
          <span class="feature-badge">${car.fuel_type}</span>
          <span class="feature-badge">${car.drivetrain}</span>
        </div>
        
        <div class="car-card__actions">
          <button class="btn btn--primary btn--sm" onclick="generateQuote(${car.id})">
            💰 Preventivo
          </button>
          <button class="btn btn--ghost btn--sm" onclick="showCarDetails(${car.id})">
            ℹ️ Dettagli
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderResults(cars) {
  if (!cars || cars.length === 0) {
    elements.carResults.innerHTML = `
      <div class="text-center">
        <h3>Nessuna auto trovata</h3>
        <p>Prova a modificare i tuoi criteri di ricerca</p>
        <button class="btn btn--primary" onclick="showPage('wizard')">
          Modifica Ricerca
        </button>
      </div>
    `;
    return;
  }
  
  elements.resultsCount.textContent = cars.length;
  elements.carResults.innerHTML = cars.map(renderCarCard).join('');
  
  // Add event listeners to checkboxes
  document.querySelectorAll('.car-card__checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const carId = parseInt(this.dataset.carId);
      if (this.checked) {
        appState.selectedCars.add(carId);
      } else {
        appState.selectedCars.delete(carId);
      }
      
      elements.compareSelected.textContent = 
        `Confronta Selezionate (${appState.selectedCars.size})`;
      elements.compareSelected.disabled = appState.selectedCars.size < 2;
    });
  });
}

function sortResults(sortBy) {
  let sorted = [...appState.searchResults];
  
  switch (sortBy) {
    case 'match':
      sorted.sort((a, b) => b.match_score - a.match_score);
      break;
    case 'price_asc':
      sorted.sort((a, b) => a.price_base - b.price_base);
      break;
    case 'price_desc':
      sorted.sort((a, b) => b.price_base - a.price_base);
      break;
    case 'brand':
      sorted.sort((a, b) => a.brand.localeCompare(b.brand));
      break;
  }
  
  renderResults(sorted);
}

/* =================== TRAINING FUNCTIONS =================== */

function showTrainingCategory(category) {
  elements.categoryBtns.forEach(btn => btn.classList.remove('active'));
  elements.trainingCategories.forEach(cat => cat.classList.remove('active'));
  
  document.querySelector(`[data-category="${category}"]`).classList.add('active');
  document.getElementById(`${category}-training`).classList.add('active');
}

/* =================== TOOLTIP FUNCTIONS =================== */

function showTooltip(element, content) {
  const tooltip = elements.tooltip;
  const tooltipContent = tooltip.querySelector('.tooltip__content');
  
  tooltipContent.textContent = content;
  tooltip.classList.add('show');
  
  const rect = element.getBoundingClientRect();
  tooltip.style.left = rect.left + (rect.width / 2) + 'px';
  tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
}

function hideTooltip() {
  elements.tooltip.classList.remove('show');
}

/* =================== MODAL FUNCTIONS =================== */

function showComparisonModal() {
  const selectedCarIds = Array.from(appState.selectedCars);
  const selectedCars = appState.searchResults.filter(car => 
    selectedCarIds.includes(car.id)
  );
  
  if (selectedCars.length < 2) {
    alert('Seleziona almeno 2 auto per il confronto');
    return;
  }
  
  const tableHTML = generateComparisonTable(selectedCars);
  elements.comparisonTable.innerHTML = tableHTML;
  elements.comparisonModal.classList.add('active');
}

function generateComparisonTable(cars) {
  const features = [
    'brand', 'model', 'variant', 'price_base', 'seats', 
    'fuel_type', 'drivetrain', 'match_score'
  ];
  
  const adasFeatures = ['ACC', 'AEB', 'LKA', 'BSM'];
  const infotainmentFeatures = ['android_auto', 'apple_carplay', 'premium_audio', 'display_size'];
  
  let html = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Caratteristica</th>
          ${cars.map(car => `<th>${car.brand} ${car.model}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Prezzo</strong></td>
          ${cars.map(car => `<td>${formatPrice(car.price_base)}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>Match Score</strong></td>
          ${cars.map(car => `<td>${car.match_score}%</td>`).join('')}
        </tr>
        <tr>
          <td><strong>Posti</strong></td>
          ${cars.map(car => `<td>${car.seats}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>Carburante</strong></td>
          ${cars.map(car => `<td>${car.fuel_type}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>Trazione</strong></td>
          ${cars.map(car => `<td>${car.drivetrain}</td>`).join('')}
        </tr>
        <tr><td colspan="${cars.length + 1}"><strong>ADAS Features</strong></td></tr>
        ${adasFeatures.map(feature => `
          <tr>
            <td>${adasExplanations[feature].name}</td>
            ${cars.map(car => `<td>${car.adas_features[feature] ? '✅' : '❌'}</td>`).join('')}
          </tr>
        `).join('')}
        <tr><td colspan="${cars.length + 1}"><strong>Infotainment</strong></td></tr>
        <tr>
          <td>Android Auto</td>
          ${cars.map(car => `<td>${car.infotainment.android_auto ? '✅' : '❌'}</td>`).join('')}
        </tr>
        <tr>
          <td>Apple CarPlay</td>
          ${cars.map(car => `<td>${car.infotainment.apple_carplay ? '✅' : '❌'}</td>`).join('')}
        </tr>
        <tr>
          <td>Audio Premium</td>
          ${cars.map(car => `<td>${car.infotainment.premium_audio ? '✅' : '❌'}</td>`).join('')}
        </tr>
        <tr>
          <td>Dimensione Display</td>
          ${cars.map(car => `<td>${car.infotainment.display_size}"</td>`).join('')}
        </tr>
      </tbody>
    </table>
  `;
  
  return html;
}

/* =================== EXTERNAL FUNCTIONS =================== */

function generateQuote(carId) {
  const car = carDatabase.find(c => c.id === carId);
  if (!car) return;
  
  // Simulate quote generation
  const options = [
    { name: 'Navigatore Satellitare', price: 800 },
    { name: 'Cerchi in Lega 18"', price: 1200 },
    { name: 'Pacchetto Sport', price: 1500 },
    { name: 'Vernice Metallizzata', price: 600 }
  ];
  
  const randomOptions = options.sort(() => 0.5 - Math.random()).slice(0, 2);
  const optionsTotal = randomOptions.reduce((sum, opt) => sum + opt.price, 0);
  const totalPrice = car.price_base + optionsTotal;
  
  alert(`
Preventivo per ${car.brand} ${car.model}

Prezzo base: ${formatPrice(car.price_base)}
Optional inclusi:
${randomOptions.map(opt => `- ${opt.name}: ${formatPrice(opt.price)}`).join('\\n')}

TOTALE: ${formatPrice(totalPrice)}

Contatta un concessionario per finalizzare l'acquisto!
  `);
}

function showCarDetails(carId) {
  const car = carDatabase.find(c => c.id === carId);
  if (!car) return;
  
  const adasList = Object.entries(car.adas_features)
    .filter(([key, value]) => value)
    .map(([key, value]) => adasExplanations[key].name)
    .join(', ');
    
  alert(`
Dettagli ${car.brand} ${car.model}

${car.variant}
Prezzo: ${formatPrice(car.price_base)}
Posti: ${car.seats}
Carburante: ${car.fuel_type}
Trazione: ${car.drivetrain}

ADAS disponibili:
${adasList || 'Nessuna tecnologia ADAS'}

Display: ${car.infotainment.display_size}"
Android Auto: ${car.infotainment.android_auto ? 'Sì' : 'No'}
Apple CarPlay: ${car.infotainment.apple_carplay ? 'Sì' : 'No'}
Audio Premium: ${car.infotainment.premium_audio ? 'Sì' : 'No'}

Match Score: ${car.match_score}%
  `);
}

function saveSearch() {
  const searchData = {
    preferences: appState.wizardData,
    results: appState.searchResults.map(car => ({ id: car.id, match_score: car.match_score })),
    timestamp: new Date().toISOString(),
    name: `Ricerca ${new Date().toLocaleDateString()}`
  };
  
  // Save to localStorage
  const savedSearches = JSON.parse(localStorage.getItem('trovaAutoSearches') || '[]');
  savedSearches.push(searchData);
  localStorage.setItem('trovaAutoSearches', JSON.stringify(savedSearches));
  
  alert('Ricerca salvata con successo!\\nPotrai ritrovarla nella sezione "Le mie ricerche"');
}

/* =================== EVENT LISTENERS =================== */

function initializeEventListeners() {
  // Navigation
  elements.navHome?.addEventListener('click', () => showPage('homepage'));
  elements.navTraining?.addEventListener('click', () => showPage('training'));
  
  // Wizard start
  elements.startWizard?.addEventListener('click', () => {
    showPage('wizard');
    showWizardStep(1);
  });
  
  // Wizard navigation
  elements.prevBtn?.addEventListener('click', () => {
    if (appState.currentStep > 1) {
      showWizardStep(appState.currentStep - 1);
    }
  });
  
  elements.nextBtn?.addEventListener('click', () => {
    if (appState.currentStep < 3) {
      showWizardStep(appState.currentStep + 1);
    }
  });
  
  elements.submitBtn?.addEventListener('click', () => {
    const preferences = collectWizardData();
    const results = findMatchingCars(preferences);
    
    appState.searchResults = results;
    renderResults(results);
    showPage('results');
  });
  
  // Results page
  elements.backToWizard?.addEventListener('click', () => showPage('wizard'));
  elements.compareSelected?.addEventListener('click', showComparisonModal);
  elements.saveSearch?.addEventListener('click', saveSearch);
  
  elements.sortSelect?.addEventListener('change', (e) => {
    appState.sortBy = e.target.value;
    sortResults(e.target.value);
  });
  
  // Training categories
  elements.categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      showTrainingCategory(category);
    });
  });
  
  // Modal
  elements.modalClose?.addEventListener('click', () => {
    elements.comparisonModal.classList.remove('active');
  });
  
  elements.comparisonModal?.addEventListener('click', (e) => {
    if (e.target === elements.comparisonModal) {
      elements.comparisonModal.classList.remove('active');
    }
  });
  
  // Info tooltips
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-btn')) {
      const feature = e.target.dataset.info;
      const explanation = adasExplanations[feature];
      if (explanation) {
        showTooltip(e.target, `${explanation.name}: ${explanation.description}`);
        setTimeout(hideTooltip, 3000);
      }
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideTooltip();
      elements.comparisonModal.classList.remove('active');
    }
  });
}

/* =================== INITIALIZATION =================== */

function initializeApp() {
  console.log('🚗 TrovaAuto inizializzato!');
  console.log(`📊 Database: ${carDatabase.length} auto caricate`);
  
  initializeEventListeners();
  
  // Set initial state
  showPage('homepage');
  
  // Initialize comparison button as disabled
  if (elements.compareSelected) {
    elements.compareSelected.disabled = true;
    elements.compareSelected.textContent = 'Confronta Selezionate (0)';
  }
  
  // Add some animation to feature cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
  });
  
  console.log('✅ TrovaAuto pronto per l\\\'uso!');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export for global access
window.TrovaAuto = {
  generateQuote,
  showCarDetails,
  saveSearch,
  appState,
  carDatabase
};
