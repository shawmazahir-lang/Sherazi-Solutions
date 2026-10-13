# Sherazi Solutions — Mobile Software Services Website

A modern, responsive, mobile-first single-page website for **Sherazi Solutions**, a specialized mobile software services laboratory.

Built with a dark techy aesthetic featuring electric cyan and emerald green accents, cyber grid textures, glassmorphism, and instant loading speeds with zero build step dependencies.

---

## 🚀 Quick Start / How to Run

Because this project is built using standard modern web technologies (HTML5, Tailwind CSS via CDN, and Vanilla JavaScript), **no build step or Node.js environment is required**.

### Option 1: Direct File Open
1. Double-click `index.html` in Windows File Explorer.
2. The website will open immediately in your default browser (Chrome, Edge, Firefox, Brave).

### Option 2: Local Web Server (Optional)
If you prefer running through a local server:
- Using VS Code: Right-click `index.html` and click **"Open with Live Server"**.
- Using npx (if Node is installed): `npx serve .`

---

## 📱 Features & Sections Included

1. **Hero Section**:
   - Title: *"Sherazi Solutions - Your Mobile Software Experts"*
   - High-tech diagnostic terminal card with live COM port status & partition diagnostics.
   - Dual Primary Action Buttons: **"Get a Quote"** and **"WhatsApp Instant Chat"**.
   - Trust and speed badges (100% Software Safe, 30 Min Turnaround, 8+ Brands Supported).

2. **Services Grid**:
   - 10 core mobile software services with custom SVG icons, tech badges, turnaround times, and PKR price ranges:
     1. **Flashing / Stock ROM Install**: PKR 800 - 2,000
     2. **Firmware Update / Downgrade**: PKR 700 - 1,800
     3. **Rooting (Magisk)**: PKR 1,000 - 2,500
     4. **Unrooting / Back to Stock**: PKR 800 - 1,500
     5. **Dead Boot Repair**: PKR 1,500 - 4,000
     6. **Bootloop / Stuck on Logo Fix**: PKR 1,000 - 2,500
     7. **FRP / Google Account Removal**: PKR 1,000 - 3,000
     8. **Pattern / Password Unlock**: PKR 700 - 2,000
     9. **IMEI / Network Repair**: PKR 1,500 - 3,500
     10. **Custom Recovery (TWRP) Install**: PKR 1,000 - 2,000
   - Interactive category filter pills: *All Services, ROM & Flashing, Boot & Unbricking, FRP & Screen Unlock, Root & Recovery*.
   - Direct *"Calculate"* and *"WhatsApp Inquiry"* buttons on every card.

3. **Interactive Price Checker**:
   - Dynamic dropdown selectors for **Brand** (*Samsung, Xiaomi, Oppo, Vivo, Infinix, Tecno, Realme, iPhone*) and **Service**.
   - Real-time price bracket estimation, turnaround time calculation, and chipset technical scope notes (e.g. Odin multi-file flashing, EDL 9008 auth, Knox security tiers).
   - Single-click **"Book This Service via WhatsApp"** pre-filling selected brand and service.
   - **"Transfer to Contact Form"** button auto-populating fields.

4. **How It Works (3 Steps)**:
   - Step 1: **Send Device Details** (Brand, model, error description).
   - Step 2: **Get a Quote** (Transparent upfront estimation).
   - Step 3: **Fast Service** (Express flashing, verification, and testing).

5. **Contact & Diagnostic Ticket Form**:
   - Form fields: Name, Phone/WhatsApp, Phone Brand & Exact Model, and Issue Description.
   - Instant ticket generation (`SS-XXXXXX`) with interactive confirmation modal.
   - Dedicated **WhatsApp Click-to-Chat** card + **"Send via WhatsApp"** button.

6. **Footer**:
   - Business branding and lab overview.
   - Placeholder Address: `Shop #14, Bilal Mobile Center, Hall Road, Lahore, Pakistan`
   - Working Hours: `Monday - Saturday: 11:00 AM - 9:00 PM (Sunday Closed)`
   - Mandatory Disclaimer: *"Prices are estimates and may vary by model."*

7. **Floating Quick Actions**:
   - Sticky floating WhatsApp action button at the bottom-right for instant mobile messaging.

---

## ⚙️ Configuration & Customization

All store information and pricing data are centralized in `app.js` under the `CONFIG` and `SERVICES` objects:

```javascript
// Located at the top of app.js
const CONFIG = {
  shopName: "Sherazi Solutions",
  whatsappNumber: "923001234567", // Enter your phone number (format: country code without +)
  whatsappDisplay: "+92 300 1234567",
  email: "support@sherazisolutions.com",
  address: "Shop #14, Bilal Mobile Center, Hall Road, Lahore, Pakistan",
  hours: "Monday - Saturday: 11:00 AM - 9:00 PM (Sunday Closed)",
  disclaimer: "Prices are estimates and may vary by model, chipset, and security patch."
};
```

---

## 📂 File Structure

```text
sherazi solutions/
├── index.html       # Semantic single-page structure, responsive layout, SEO meta tags
├── style.css        # Cyber grid pattern, glow gradients, glass cards, animations
├── app.js           # Dynamic price calculator, services catalog, WhatsApp generator, form logic
└── README.md        # Documentation and customization guide
```
