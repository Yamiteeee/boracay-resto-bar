Markdown
# Aplaya Boracay – Premium Beachfront Restaurant & Lounge

A high-performance, visually stunning, single-page web application built for **Aplaya Boracay**, featuring fluid editorial animations, high-contrast typography, structural responsive layout design, and a custom touch/scroll-isolated menu coverflow matrix.

##  Features

* **Cinematic Page Transitions:** Implements fine-tuned Framer Motion variants (`slipLeft`, `slipRight`) tracking structural entry thresholds.
* **Touch & Scroll Isolated Menu Matrix:** Custom interactive carousel supporting multi-directional tracking rules (`wheel`, `drag`, `touch`) with strict overscroll containment to isolate page-bleed.
* **Native Smooth Navigation:** Pure local routing architecture mapping layout sections cleanly across mobile and desktop viewport constraints.
* **Premium Visual Foundations:** Elegant underlying noise matrix backgrounds, immersive editorial typography hierarchies, and dark-inversion glass containers.
* **Optimized Performance:** Built on Next.js 14/15 App Router utilizing `next/font` optimization and hardware-accelerated CSS translation layers.

---

## Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (Antialiased typography, fluid spacing, micro-gradients)
* **Animation Engine:** Framer Motion (Hardware accelerated `will-change-transform` workflows)
* **Language:** TypeScript (Strict type interfaces)

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Yamiteeee/boracay-resto-bar.git](https://github.com/your-username/boracay-resto-bar.git)
Navigate to the project directory:

Bash
cd boracay-resto-bar
Install production and development dependencies:

Bash
npm install
Development Server
Run the local environmental instance:

Bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 inside your browser window to interact with the environment.

🗺️ Project Architecture
Plaintext
   ```bash
src/
├── app/
│   ├── layout.tsx         # Global fonts, metadata wrappers, and context injects
│   └── page.tsx           # Home entry orchestrating layout structure and animations
├── components/
│   ├── Animation/         # PageAnimation wrappers and shared variants
│   ├── Card.tsx           # Reusable menu item components
│   ├── Navbar.tsx         # Anchor routing navigation matrix
│   └── Logo.tsx           # Global vectorized brand asset
├── hooks/
│   └── useMenu.ts         # Carousel control state, limits, and math offsets
└── sections/
    ├── Hero.tsx           # High-impact landing zone
    ├── OurStory.tsx       # Narrative brand block
    ├── Menu.tsx           # Multi-mode grid/carousel showcase
    └── Reservation.tsx    # Digital table booking interface


  ```
 Mobile & Performance Fixes Implemented
Layout Shifting/Bleeding Fixed: Isolated horizontal entries via recursive overflow-x-hidden wrapper blocks to prevent canvas expansion during mobile elastic gestures.

Carousel Event Proximity Fixed: Patched event propagation bubbling using explicit e.stopPropagation() handlers and custom delta calculations to isolate wheel events from moving the background page.

Strict Type Assurances: Type-casted DOM selectors safely (as HTMLElement) to suppress rigid compilation errors (TS2345) during CI/CD build actions.

 Deployment
This platform is ready to deploy directly via the Vercel Platform.

To build the static application assets locally:

Bash
npm run build

