# Nagendran Murugan — Personal Portfolio

A handcrafted, high-performance, dark-cinematic personal portfolio website for **Nagendran Murugan**, incoming Software Engineering student at **Universiti Malaya**.

Built with modern creative front-end standards: 60fps Lenis + GSAP scroll choreography, lazy-loaded Three.js / React Three Fiber interactive wireframe element, responsive glassmorphism, fluid magnetic interactions, custom dual-ring cursor, and strict adherence to personal privacy standards.

---

## ⚡ Tech Stack & Architecture

- **Core**: Vite, React 18, TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables (Electric Cyan `#00F0FF`, Cosmic Violet `#8B5CF6`, Magenta `#FF2E93`)
- **Smooth Scroll**: Lenis unified with GSAP Ticker loop
- **Animation & Motion**: GSAP ScrollTrigger + Framer Motion
- **3D Scene**: `@react-three/fiber` + `@react-three/drei` (Lazy-loaded with fallback)
- **Routing**: React Router v6 (Single Page Architecture with Dynamic Case Study Detail Pages)
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code / Meta labels)

---

## 🛠️ Project Setup & Local Development

### 1. Prerequisites
- Node.js (v18.0.0 or later recommended; tested on Node.js v26)
- npm

### 2. Installation
```bash
cd portfolio
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 📝 How to Update & Edit Content

All text, bio details, stats, skills, projects, and timeline milestones are centrally defined in a **single file**:
📍 `src/data/content.ts`

### Modifying Identity & Bio
Open `src/data/content.ts` and modify `SITE_CONTENT.identity` or `SITE_CONTENT.bio`:
```typescript
identity: {
  fullName: "Nagendran Murugan",
  officialName: "Nagendran A/L Murugan",
  shortName: "Nagen",
  university: "Universiti Malaya",
  degree: "Bachelor of Computer Science (Software Engineering), Year 1",
  email: "nagen4230@gmail.com",
  github: "https://github.com/Nagen4230",
  linkedin: "https://www.linkedin.com/in/nagendran-murugan-553844440",
  ...
}
```

### Swapping Profile Photo & Résumé
- **Profile Photo**: Place your photo at `public/images/profile.jpg`. The website automatically applies a duotone neon-mask hover effect. If missing or broken, it gracefully displays an SVG monogram fallback.
- **Résumé**: Place your updated PDF at `public/resume.pdf`. The "Download Résumé" magnetic buttons throughout the site directly reference this path.

### Configuring the Contact Form
In `src/components/sections/ContactSection.tsx`, the form is pre-wired with client-side validation. To connect it directly to an external email service:
- **Formspree**: Replace the `<form>` submit handler with your Formspree endpoint (e.g. `https://formspree.io/f/your_form_id`).
- **EmailJS / Resend**: Call your client hook within `handleSubmit`.

---

## 🚀 Deployment Instructions

### Option A: Vercel (Recommended — Free & Instant)
A `vercel.json` rewrite configuration is already included for SPA routing.

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Nagendran Murugan cinematic portfolio"
   git branch -M main
   git remote add origin https://github.com/Nagen4230/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and import the `portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**. Your site will be live on `https://<project-name>.vercel.app` with instant global CDN caching and SSL.

### Option B: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.ts`, add `base: '/portfolio/'` (matching your GitHub repository name).
3. In `package.json`, add `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.

---

## 🔒 Strict Privacy Compliance

In accordance with personal privacy guidelines:
- **Zero** phone numbers, physical residential addresses, or referee personal details are published in UI markup, meta tags, or structured JSON-LD schemas.
- Professional contact is routed strictly through the verified email (`nagen4230@gmail.com`), GitHub, and LinkedIn profiles.
