/**
 * Sherazi Solutions - Interactive Application Logic
 * Mobile Software Services Shop
 */

// Configuration
const CONFIG = {
  shopName: "Sherazi Solutions",
  whatsappNumber: "923001234567", // Replace with actual business WhatsApp number (format: country code without +)
  whatsappDisplay: "+92 300 1234567",
  email: "support@sherazisolutions.com",
  address: "Shop #14, Bilal Mobile Center, Hall Road, Lahore, Pakistan",
  hours: "Monday - Saturday: 11:00 AM - 9:00 PM (Sunday Closed)",
  disclaimer: "Prices are estimates and may vary by model, chipset, and security patch."
};

// 10 Core Services Data
const SERVICES = [
  {
    id: "flashing",
    title: "Flashing / Stock ROM Install",
    tagline: "Factory OS Recovery",
    description: "Full clean reinstallation of factory official firmware to resolve software corruption, boot errors, or restore pure stock state.",
    minPrice: 800,
    maxPrice: 2000,
    priceRange: "PKR 800 - 2,000",
    turnaround: "30 - 45 mins",
    category: "system",
    icon: `<svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
    </svg>`
  },
  {
    id: "firmware-update",
    title: "Firmware Update / Downgrade",
    tagline: "Version Optimization",
    description: "Safely upgrade to the latest official release or roll back to an earlier stable Android/iOS build for speed or app compatibility.",
    minPrice: 700,
    maxPrice: 1800,
    priceRange: "PKR 700 - 1,800",
    turnaround: "30 - 60 mins",
    category: "system",
    icon: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
    </svg>`
  },
  {
    id: "rooting",
    title: "Rooting (Magisk)",
    tagline: "Advanced System Access",
    description: "Systemless Magisk root setup, Zygisk activation, plus Play Integrity / SafetyNet bypass to keep banking and crypto apps working.",
    minPrice: 1000,
    maxPrice: 2500,
    priceRange: "PKR 1,000 - 2,500",
    turnaround: "45 - 90 mins",
    category: "modding",
    icon: `<svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`
  },
  {
    id: "unrooting",
    title: "Unrooting / Back to Stock",
    tagline: "Clean Security Restoration",
    description: "Complete unroot, restoring stock boot & recovery images, locking bootloaders where possible, and reviving Knox/device compliance.",
    minPrice: 800,
    maxPrice: 1500,
    priceRange: "PKR 800 - 1,500",
    turnaround: "30 - 45 mins",
    category: "modding",
    icon: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
    </svg>`
  },
  {
    id: "dead-boot",
    title: "Dead Boot Repair",
    tagline: "Hard-Brick Unbricking",
    description: "Emergency EDL 9008 mode recovery, hardware Testpoint flashing, and preloader / boot partition repairs for completely blacked-out phones.",
    minPrice: 1500,
    maxPrice: 4000,
    priceRange: "PKR 1,500 - 4,000",
    turnaround: "1 - 3 hours",
    category: "repair",
    icon: `<svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`
  },
  {
    id: "bootloop",
    title: "Bootloop / Stuck on Logo Fix",
    tagline: "Endless Reboot Recovery",
    description: "Diagnose and fix infinite restart loops, recovery crashes, or freezes on Samsung / Xiaomi / Android boot logos without hardware tampering.",
    minPrice: 1000,
    maxPrice: 2500,
    priceRange: "PKR 1,000 - 2,500",
    turnaround: "30 - 60 mins",
    category: "repair",
    icon: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
    </svg>`
  },
  {
    id: "frp-removal",
    title: "FRP / Google Account Removal",
    tagline: "Factory Reset Bypass",
    description: "Bypass Google FRP verification lock and Mi / Samsung account screens after hard resets on supported security patches.",
    minPrice: 1000,
    maxPrice: 3000,
    priceRange: "PKR 1,000 - 3,000",
    turnaround: "20 - 45 mins",
    category: "unlock",
    icon: `<svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
    </svg>`
  },
  {
    id: "pattern-unlock",
    title: "Pattern / Password Unlock",
    tagline: "Lock Screen Reset",
    description: "Safely remove forgotten pin codes, alphanumeric passwords, face lock, and swipe patterns with modern software flashing utilities.",
    minPrice: 700,
    maxPrice: 2000,
    priceRange: "PKR 700 - 2,000",
    turnaround: "20 - 40 mins",
    category: "unlock",
    icon: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
    </svg>`
  },
  {
    id: "imei-repair",
    title: "IMEI / Network Repair",
    tagline: "Baseband & Signal Restoration",
    description: "Restore corrupted NVRAM / EFS partitions, repair null IMEI, unknown baseband, and resolve 'Emergency Calls Only' / signal drops.",
    minPrice: 1500,
    maxPrice: 3500,
    priceRange: "PKR 1,500 - 3,500",
    turnaround: "1 - 2 hours",
    category: "repair",
    icon: `<svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
    </svg>`
  },
  {
    id: "custom-recovery",
    title: "Custom Recovery (TWRP) Install",
    tagline: "TWRP / OrangeFox Setup",
    description: "Unlock bootloader and flash custom recovery (TWRP, OrangeFox, PBRP) with DM-Verity disable for easy Nandroid backups and custom ROMs.",
    minPrice: 1000,
    maxPrice: 2000,
    priceRange: "PKR 1,000 - 2,000",
    turnaround: "30 - 60 mins",
    category: "modding",
    icon: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`
  }
];

// Brands configuration with tech notes and price modifiers
const BRANDS = {
  samsung: {
    name: "Samsung",
    note: "Knox security & Odin multi-file flashing. Exynos and Snapdragon models supported.",
    multiplier: 1.15,
    customOverrides: {
      "frp-removal": { min: 1200, max: 3000, note: "Supports Android 10 through 14. Knox test-mode & MTP bypass." },
      "dead-boot": { min: 2000, max: 4000, note: "EDL / EUB mode test-point restoration." }
    }
  },
  xiaomi: {
    name: "Xiaomi (Redmi / Poco)",
    note: "Mi Flash tool, Fastboot & EDL 9008 auth flashing. HyperOS / MIUI compatible.",
    multiplier: 1.0,
    customOverrides: {
      "frp-removal": { min: 1000, max: 2500, note: "Mi Account unlock & Fastboot FRP reset." },
      "custom-recovery": { min: 1000, max: 1800, note: "TWRP / OrangeFox installation with Magisk root." }
    }
  },
  oppo: {
    name: "Oppo",
    note: "ColorOS OFP flashing, MSM download tool, and MediaTek/Snapdragon authorization.",
    multiplier: 1.05,
    customOverrides: {
      "dead-boot": { min: 1800, max: 3800, note: "Preloader and testpoint recovery." }
    }
  },
  vivo: {
    name: "Vivo",
    note: "Funtouch OS & OriginOS firmware repair. AFTool and Fastboot mode service.",
    multiplier: 1.05,
    customOverrides: {
      "pattern-unlock": { min: 800, max: 2000, note: "Safe user-data reset via fastboot / recovery." }
    }
  },
  infinix: {
    name: "Infinix",
    note: "MediaTek (MTK) & UniSoC chipsets. SP Flash Tool / Transsion Download Tool.",
    multiplier: 0.95,
    customOverrides: {
      "flashing": { min: 800, max: 1500, note: "Clean XOS factory firmware flash." },
      "frp-removal": { min: 800, max: 1800, note: "One-click MTK USB bypass." }
    }
  },
  tecno: {
    name: "Tecno",
    note: "HiOS firmware flashing, MediaTek DA auth bypass, and null baseband fixes.",
    multiplier: 0.95,
    customOverrides: {
      "flashing": { min: 800, max: 1500, note: "HiOS stock ROM restore." },
      "dead-boot": { min: 1400, max: 3000, note: "MTK Brom mode recovery without auth." }
    }
  },
  realme: {
    name: "Realme",
    note: "Realme UI flash packages, Deep-Testing unlock tool, and Fastboot restore.",
    multiplier: 1.0,
    customOverrides: {
      "flashing": { min: 900, max: 1800, note: "Official OZIP / OFP stock firmware." }
    }
  },
  iphone: {
    name: "iPhone (Apple)",
    note: "Official Apple DFU restore, iOS update/downgrade, and error 4013/14 diagnosis.",
    multiplier: 1.25,
    customOverrides: {
      "rooting": { min: 1500, max: 3000, note: "Jailbreak (checkra1n, Palera1n, Dopamine) depending on iOS version." },
      "unrooting": { min: 800, max: 1500, note: "Clean iOS DFU restore to remove jailbreak footprints." },
      "custom-recovery": { min: 0, max: 0, note: "Not applicable on Apple iOS architecture." },
      "frp-removal": { min: 1500, max: 4000, note: "Passcode screen bypass / Hello screen service (model specific)." }
    }
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  setupPriceChecker();
  setupContactForm();
  setupNavigation();
  setupWhatsAppLinks();
});

// Render Services Grid
function renderServices(filter = 'all') {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  container.innerHTML = filtered.map(service => `
    <div class="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden">
      <!-- Glow accent top border -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
      
      <div>
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all">
            ${service.icon}
          </div>
          <span class="text-xs font-mono-tech px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
            ${service.turnaround}
          </span>
        </div>

        <h3 class="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          ${service.title}
        </h3>
        
        <p class="text-xs font-medium text-emerald-400 mb-3 font-mono-tech uppercase tracking-wider">
          ${service.tagline}
        </p>

        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          ${service.description}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div>
          <span class="text-xs text-slate-500 block">Estimated Cost</span>
          <span class="text-base font-bold text-white font-mono-tech group-hover:text-emerald-400 transition-colors">
            ${service.priceRange}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button 
            onclick="selectServiceInChecker('${service.id}')"
            title="Check brand price"
            class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-cyan-900/50 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-1.5"
          >
            Calculate
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
          
          <button 
            onclick="inquireServiceWhatsApp('${service.title}')"
            title="Instant WhatsApp Inquiry"
            class="p-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-800 text-emerald-400 hover:text-white border border-emerald-800/50 transition-all"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.771.88 2.796.88 3.182 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.767-5.767-5.767zm0 10.42c-.933 0-1.748-.28-2.548-.82l-.183-.124-1.579.414.421-1.54-.121-.192c-.595-.945-.91-1.666-.91-2.592 0-2.617 2.128-4.746 4.75-4.746 2.622 0 4.747 2.129 4.747 4.75 0 2.621-2.125 4.746-4.747 4.746z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Category filter tabs for services
window.filterServices = function(category) {
  const buttons = document.querySelectorAll('.service-filter-btn');
  buttons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/50');
      btn.classList.remove('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
    } else {
      btn.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/50');
      btn.classList.add('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
    }
  });
  renderServices(category);
};

// Setup Price Checker
function setupPriceChecker() {
  const brandSelect = document.getElementById('calc-brand');
  const serviceSelect = document.getElementById('calc-service');

  if (!brandSelect || !serviceSelect) return;

  // Populate Services Dropdown
  serviceSelect.innerHTML = SERVICES.map(s => `
    <option value="${s.id}">${s.title}</option>
  `).join('');

  // Add event listeners
  brandSelect.addEventListener('change', calculatePrice);
  serviceSelect.addEventListener('change', calculatePrice);

  // Initial calculation
  calculatePrice();
}

// Calculate Price Function
function calculatePrice() {
  const brandKey = document.getElementById('calc-brand')?.value || 'samsung';
  const serviceKey = document.getElementById('calc-service')?.value || 'flashing';

  const brand = BRANDS[brandKey] || BRANDS.samsung;
  const service = SERVICES.find(s => s.id === serviceKey) || SERVICES[0];

  let minPrice = service.minPrice;
  let maxPrice = service.maxPrice;
  let customNote = brand.note;

  // Brand-specific overrides if applicable
  if (brand.customOverrides && brand.customOverrides[serviceKey]) {
    const override = brand.customOverrides[serviceKey];
    minPrice = override.min;
    maxPrice = override.max;
    if (override.note) customNote = override.note;
  } else {
    // Apply brand factor rounded to nearest 50
    minPrice = Math.round((service.minPrice * brand.multiplier) / 50) * 50;
    maxPrice = Math.round((service.maxPrice * brand.multiplier) / 50) * 50;
  }

  // Handle incompatible edge cases (e.g., TWRP on iPhone)
  const isApplicable = !(brandKey === 'iphone' && serviceKey === 'custom-recovery');

  // Update DOM Elements
  const priceDisplay = document.getElementById('calc-result-price');
  const noteDisplay = document.getElementById('calc-result-note');
  const brandDisplay = document.getElementById('calc-result-brand');
  const serviceDisplay = document.getElementById('calc-result-service');
  const turnaroundDisplay = document.getElementById('calc-result-time');
  const waBtn = document.getElementById('calc-wa-btn');
  const quoteBtn = document.getElementById('calc-quote-btn');

  if (priceDisplay) {
    if (!isApplicable) {
      priceDisplay.textContent = "Not Applicable";
      priceDisplay.className = "text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono-tech";
    } else {
      priceDisplay.textContent = `PKR ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}`;
      priceDisplay.className = "text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono-tech";
    }
  }

  if (noteDisplay) noteDisplay.textContent = customNote;
  if (brandDisplay) brandDisplay.textContent = brand.name;
  if (serviceDisplay) serviceDisplay.textContent = service.title;
  if (turnaroundDisplay) turnaroundDisplay.textContent = service.turnaround;

  // Update WhatsApp direct booking button
  if (waBtn) {
    const waText = encodeURIComponent(
      `Hello ${CONFIG.shopName}! I checked your website price calculator for:\n• Brand: ${brand.name}\n• Service: ${service.title}\n• Estimated: PKR ${minPrice} - ${maxPrice}\n\nPlease confirm availability and turnaround time.`
    );
    waBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`;
  }

  // Update fill quote button
  if (quoteBtn) {
    quoteBtn.onclick = () => {
      prefillContactForm(brand.name, service.title);
    };
  }
}

// Select Service inside Price Checker directly from services grid
window.selectServiceInChecker = function(serviceId) {
  const serviceSelect = document.getElementById('calc-service');
  if (serviceSelect) {
    serviceSelect.value = serviceId;
    calculatePrice();
  }
  const checkerSection = document.getElementById('price-checker');
  if (checkerSection) {
    checkerSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Inquire on WhatsApp directly for a specific service
window.inquireServiceWhatsApp = function(serviceTitle) {
  const waText = encodeURIComponent(
    `Hello ${CONFIG.shopName}, I would like to get a quote and details for '${serviceTitle}'. My phone model is: `
  );
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`, '_blank');
};

// Prefill Contact Form from Calculator
function prefillContactForm(brandName, serviceTitle) {
  const modelInput = document.getElementById('contact-model');
  const issueInput = document.getElementById('contact-issue');

  if (modelInput) {
    modelInput.value = `${brandName} `;
    modelInput.focus();
  }
  if (issueInput) {
    issueInput.value = `Need assistance with ${serviceTitle}.`;
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Setup Contact Form
function setupContactForm() {
  const form = document.getElementById('service-contact-form');
  const waDirectBtn = document.getElementById('contact-wa-direct-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim();
      const phone = document.getElementById('contact-phone')?.value.trim();
      const model = document.getElementById('contact-model')?.value.trim();
      const issue = document.getElementById('contact-issue')?.value.trim();

      if (!name || !phone || !model || !issue) {
        showToast("Please fill in all required fields.", "error");
        return;
      }

      // Generate Ticket Number
      const ticketNum = "SS-" + Math.floor(100000 + Math.random() * 900000);

      // Show instant feedback modal / toast
      const successModal = document.getElementById('success-modal');
      const modalTicket = document.getElementById('modal-ticket-id');
      const modalDetails = document.getElementById('modal-details-summary');
      const modalWaConfirm = document.getElementById('modal-wa-confirm-btn');

      if (successModal && modalTicket && modalDetails && modalWaConfirm) {
        modalTicket.textContent = ticketNum;
        modalDetails.textContent = `Client: ${name} | Phone: ${phone} | Device: ${model} | Issue: ${issue}`;
        
        const waText = encodeURIComponent(
          `Hello ${CONFIG.shopName}!\nI just submitted an inquiry on your website.\n\n• Ticket: ${ticketNum}\n• Name: ${name}\n• Phone: ${phone}\n• Device Model: ${model}\n• Issue: ${issue}`
        );
        modalWaConfirm.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`;

        successModal.classList.remove('hidden');
      } else {
        showToast(`Inquiry received! Ticket #${ticketNum}. Our technician will contact you shortly.`, "success");
      }

      form.reset();
    });
  }

  // Direct WhatsApp dispatch from contact form fields
  if (waDirectBtn) {
    waDirectBtn.addEventListener('click', () => {
      const name = document.getElementById('contact-name')?.value.trim() || 'Valued Customer';
      const phone = document.getElementById('contact-phone')?.value.trim() || 'N/A';
      const model = document.getElementById('contact-model')?.value.trim() || 'Device Model';
      const issue = document.getElementById('contact-issue')?.value.trim() || 'Mobile Software Service Inquiry';

      const waText = encodeURIComponent(
        `Hello ${CONFIG.shopName}!\n\n• Name: ${name}\n• Phone: ${phone}\n• Device Model: ${model}\n• Issue / Service Needed: ${issue}\n\nPlease let me know the cost and time required.`
      );
      window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`, '_blank');
    });
  }

  // Close modal button
  const closeModalBtn = document.getElementById('close-modal-btn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      document.getElementById('success-modal')?.classList.add('hidden');
    });
  }
}

// Navigation & Mobile Drawer
function setupNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = mobileMenu.classList.toggle('hidden');
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Sticky Navbar shadow on scroll
  const navbar = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('bg-slate-950/90', 'border-cyan-900/40', 'shadow-lg', 'shadow-black/50');
      navbar?.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar?.classList.remove('bg-slate-950/90', 'border-cyan-900/40', 'shadow-lg', 'shadow-black/50');
      navbar?.classList.add('bg-transparent', 'border-transparent');
    }
  });
}

// Global WhatsApp Links Configuration
function setupWhatsAppLinks() {
  const genericWaText = encodeURIComponent(`Hello ${CONFIG.shopName}! I need assistance with mobile software repair.`);
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${genericWaText}`;

  // Update elements with wa-link class
  document.querySelectorAll('.wa-global-link').forEach(el => {
    el.href = waUrl;
  });

  // Display phone numbers where placeholders exist
  document.querySelectorAll('.wa-display-number').forEach(el => {
    el.textContent = CONFIG.whatsappDisplay;
  });

  // Display address & hours
  document.querySelectorAll('.shop-address').forEach(el => {
    el.textContent = CONFIG.address;
  });
  document.querySelectorAll('.shop-hours').forEach(el => {
    el.textContent = CONFIG.hours;
  });
}

// Toast notification helper
function showToast(message, type = "info") {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 4500);
}
