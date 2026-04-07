# BLUEPRINT.md — Premium Webdesign Blueprint
## Universelle Design-Regeln fuer Claude Code — Awwwards-Level

---

## PHILOSOPHIE

1. **Wenn du denkst "das reicht" — es reicht nicht.** Jede Komponente braucht eine Mikrointeraktion oder ein Detail.
2. **Schwarz ist kein Design.** Dunkle Seiten brauchen Farbverlaeufe, Glows, Bilder, Kontrast-Wechsel.
3. **Copy < Visuals.** Apple schreibt 4 Worte wo andere 40 schreiben.

---

## STACK

```
Next.js 14+ (App Router) — NICHT 16
TypeScript strict
Tailwind CSS 3.4 — NICHT v4 (Safari-Bugs: @layer, color-mix, oklab)
Framer Motion 11+
Lenis — Smooth Scroll
Lucide React — Icons
```

---

## DIE 12 GEBOTE

### 1. BILDER VOR ALLEM
- JEDE Sektion ueber 300px braucht Bild, Farbverlauf oder SVG
- Hero: IMMER Full-Bleed Hintergrundbild mit Overlay-Gradient
- Zwischen Sektionen: Parallax Image-Breaker (50-70vh, object-cover)

### 2. VISUELLER RHYTHMUS
```
Bild → Content (hell) → Bild → Content (dunkel) → Bild → Content (Akzent)
```
NIEMALS zwei gleich aussehende Sektionen hintereinander.

### 3. FARBVERLAEUFE > FLAT
- Radialer Glow hinter Headlines (blur-[120px], 4-8% Opacity)
- Gradient-Linie am Sektionsrand
- Akzent-Glow auf Cards beim Hover

### 4. BUTTONS — Double-Layer
```tsx
<div className="group relative p-[5px] rounded-full bg-gradient-to-b from-white/[0.1] to-white/[0.03]
  border border-white/[0.12] shadow-[0_4px_24px_rgba(ACCENT_RGB,0.25),0_0_60px_rgba(ACCENT_RGB,0.1)]">
  <button style={{ background: `linear-gradient(to bottom, ACCENT_LIGHT, ACCENT)` }}
    className="relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
      transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.15]
      to-transparent skew-x-[-20deg]" />
    <span className="absolute top-0 left-[20%] right-[20%] h-px
      bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <span className="relative">{children}</span>
  </button>
</div>
```
- JEDER primaere CTA: Double-Layer + Shine-Sweep
- Min-Height: 46px (sm), 54px (md), 58px (lg)
- `accent` Prop fuer per-Seiten Theming

### 5. CARDS
- Background: Mindestens #1A1A1A — NICHT white/[0.03] (unsichtbar!)
- Border: border-white/[0.1] minimum
- Hover: Akzent-Border, translateY -4 bis -6px, Glow
- JEDE Card: Einen visuellen Akzent (Dot, Top-Line, Icon-Glow, Bild)
- Groessen variieren: Asymmetrische Grids

### 6. TYPOGRAFIE
```
Headlines: Display-Font, 600-700 | Mobile 32-44px, Desktop 56-96px | Leading 0.9-1.0, Tracking -0.02em
Body: Sans-Serif, 400-500 | 16px min, 1.65 line-height | Farbe white/50 min (NICHT white/35 = WCAG-Fail)
Apple-Regel: Text ueber 2 Zeilen = zu lang.
```

### 7. SCROLL-ANIMATIONEN
```tsx
// KEINE initial={{ opacity: 0 }} auf Server-Content!
// NUR below-fold:
<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />

// Hero: CSS-only oder keine Animation. NIE Framer initial={{ opacity: 0 }}.

// Parallax:
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
```

### 8. MOBILE FIRST
- Start bei 390px. Touch-Targets 48px+, Buttons 52-58px
- KEINE `<input type="date">`, KEINE Dropdowns wo Chips moeglich
- Input font-size 16px+ (iOS Zoom!)
- Sticky Bottom Bar mit Preis + CTA
- Snap-Scroll Galleries auf Mobile
- Breakpoints: 0-639 (DEFAULT) → 640 (sm) → 1024 (lg)

### 9. LP CONVERSION-FUNNEL
```
1. HERO — Full-Bleed Bild, Apple-Copy (4-6 Worte), Trust, CTA + Preis
2. STATS BAR — 3 Zahlen in Akzentfarbe
3. IMAGE BREAKER — Parallax (50-70vh)
4. BEFORE/AFTER — Rot vs Akzent Side-by-Side
5. IMAGE BREAKER
6. SOCIAL PROOF — Grosses Zitat + Metrik
7. PROCESS — 3 Steps, animierte SVGs
8. GALLERY — Masonry Desktop / Snap-Scroll Mobile
9. PRICING — Value-Stack + Tabelle
10. BOOKING/CTA
```

### 10. PER-SEITEN FARBTHEMA
Jede Unterseite: Eigene Akzentfarbe auf Buttons, Stats, Icons, Borders, Timeline.
React Context (ThemeProvider) + accent/accentLight Props.

### 11. SVG-ILLUSTRATIONEN > ICONS
Lucide fuer Navigation. Features: Eigene SVGs mit Animation (pulse, blink, rotate).

### 12. COPY — Apple-Prinzip
```
FALSCH: "2-4 Personen, 15-20m², bis 4 Mikrofone."
RICHTIG: "Deine Stimme. Dein Studio."
Hero: Max 6 Worte. Specs → Pricing. 1 Headline + 1 Subline pro Sektion.
```

---

## SAFARI-KOMPATIBILITAET

```
VERBOTEN: Tailwind v4, color-mix(in oklab), Gradient "in oklab", initial={{ opacity: 0 }} auf SSR
PFLICHT: :root {} AUSSERHALB @layer, Hex-Fallbacks, Safari-Fallback-Script (2s Timeout)
```

---

## PERFORMANCE

- next/image mit sizes="" + priority auf Hero
- Fonts via `<link>`, NICHT CSS @import
- Lenis nur Client-Side
- Framer Motion: viewport={{ once: true }}

---

## PLAYWRIGHT SCREENSHOT-LOOP

### Setup
```bash
npm install playwright --save-dev && npx playwright install chromium
```

### Nach JEDER Sektion
```javascript
const { chromium } = require('playwright');
async function screenshot(url, name) {
  const browser = await chromium.launch();
  const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await d.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
  await d.waitForTimeout(3000);
  await d.screenshot({ path: `/tmp/${name}-full.png`, fullPage: true });
  const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await m.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
  await m.waitForTimeout(3000);
  await m.screenshot({ path: `/tmp/${name}-mobile.png` });
  await browser.close();
}
```

### Analyse
- **Thumbnail-Test:** 100x100px verkleinern. Schwarzes Rechteck = mehr Bilder/Glows.
- **7 Fragen:** Sichtbarkeit, Hierarchie, Visueller Anker, Kontrast, Weissraum, CTA, Mobile?

---

## CHECKLISTE VOR DEPLOY

- [ ] Hero: Full-Bleed Bild
- [ ] Buttons: Double-Layer + Shine-Sweep
- [ ] LPs: Eigene Akzentfarben
- [ ] Safari: Body nicht in @layer, kein opacity:0 auf Hero
- [ ] Cards: bg #1A1A1A+, border white/10
- [ ] Parallax Breaker zwischen Sektionen
- [ ] Copy: Apple-kurz
- [ ] Trust above fold
- [ ] Value-Stack im Pricing
- [ ] Mobile: 48px+ Targets, 16px+ Inputs
- [ ] Fonts: `<link>` nicht @import
