# CLAUDE.md — ImmoIQ

## Projektuebersicht

**ImmoIQ** ist eine KI-gestuetzte Portfolio-Optimierungsplattform fuer Immobilienbesitzer. Die Website ist eine Premium Lead-Gen Single Page mit dem Ziel: Calendly-Strategiecall buchen (30 Min mit Max Bertlein).

- **Zielgruppe:** Private Immobilienbesitzer mit 1–15+ Einheiten (Kapitalanleger, Erben, Selbstverwalter, Delegierer). Kommen ueber Meta Ads → Mobile-First (iPhone).
- **Conversion-Ziel:** Calendly-Call buchen
- **Sprache:** Deutsch
- **Founders:** Max & Julian Bertlein (WBD Gruppe)
- **Pricing:** 2.900€ Founders (30 Plaetze), 4.900€ regulaer
- **Garantie:** 12 Monate Geld-zurueck

## Stack

```
Next.js 14+ (App Router) — NICHT 16
TypeScript strict
Tailwind CSS 3.4 — NICHT v4 (Safari-Bugs)
Framer Motion 11+
Lenis — Smooth Scroll
Lucide React — Icons
```

## Routing-Architektur

Single Page — keine Unterseiten. Alles auf `/`.

```
/                 → Homepage (Single Page Lead-Gen)
/impressum        → Impressum (statisch)
/datenschutz      → Datenschutz (statisch)
```

## Farb- und Button-System

### Farbpalette

```
--immoiq-blue:        #0066FF     → Primary / CTAs / Akzente
--immoiq-blue-light:  #3388FF     → Gradient-Top / Hover
--immoiq-blue-deep:   #0044CC     → Gradient-Bottom / Active
--immoiq-blue-glow:   0, 102, 255 → Fuer rgba() Glows

--bg-primary:         #FAFAF8     → Haupthintergrund (warmes Off-White)
--bg-section-alt:     #F0F0EC     → Alternierende Sektionen
--bg-dark:            #0A0F1C     → Dunkle Authority-Sektion
--bg-dark-card:       #141B2D     → Cards in dunkler Sektion

--text-primary:       #0A0F1C     → Headlines auf hell
--text-secondary:     #4A5568     → Body auf hell (WCAG AA)
--text-on-dark:       #FFFFFF     → Text auf dunkel
--text-muted-dark:    #94A3B8     → Body auf dunkel (WCAG AA)

--accent-green:       #22C55E     → Positive Zahlen / Erfolg
--accent-red:         #EF4444     → Negative Zahlen / Before
--accent-gold:        #F59E0B     → Founders Badge / Urgency
```

### Primary CTA Button (Double-Layer)

```tsx
<div className="group relative p-[5px] rounded-full bg-gradient-to-b from-white/[0.15] to-white/[0.05]
  border border-[#0066FF]/20 shadow-[0_4px_24px_rgba(0,102,255,0.25),0_0_60px_rgba(0,102,255,0.1)]">
  <button style={{ background: 'linear-gradient(to bottom, #3388FF, #0066FF)' }}
    className="relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
      transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.15]
      to-transparent skew-x-[-20deg]" />
    <span className="absolute top-0 left-[20%] right-[20%] h-px
      bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <span className="relative">Kostenloses Strategiegespraech</span>
  </button>
</div>
```

### Ghost Button (Secondary)

```tsx
<button className="rounded-full px-8 py-3.5 text-sm font-semibold text-[#0066FF]
  border border-[#0066FF]/30 hover:border-[#0066FF]/60 hover:bg-[#0066FF]/5
  transition-all duration-300">
  Mehr erfahren
</button>
```

## Homepage Sektionsarchitektur

Visueller Rhythmus: Hell → Bild → Dunkel → Bild → Hell → Akzent

### Sektion 1: HERO (Hell — #FAFAF8)
- **Layout:** Vollbreite, zentriert
- **Headline:** Max 6 Worte. "Dein Portfolio. Voll optimiert." (Display Font, 64-96px Desktop, 36-44px Mobile)
- **Subline:** 1 Satz. "Die KI-gestuetzte Portfolioanalyse die zeigt, wo dein Geld liegen bleibt." (18px, text-secondary)
- **CTA:** Double-Layer Button "Kostenloses Strategiegespraech" + Ghost "So funktioniert's"
- **Trust Bar:** Direkt unter CTA. "800+ Deals · 150+ eigene Einheiten · 300 Mio. Volumen"
- **Visual:** Rechts/darunter: Stilisiertes Dashboard-Mockup oder abstraktes Portfolio-Visual mit blauem Glow
- **KEIN initial={{ opacity: 0 }}** — CSS-only Entrance oder gar keine Animation

### Sektion 2: STATS BAR (Blau-Gradient)
- **Layout:** Volle Breite, horizontaler Gradient #0066FF → #0044CC
- **3 Zahlen:** "40–50k€ Potenzial" | "12.000€ Ersparnis (1. Testkunde)" | "800+ analysierte Portfolios"
- **Style:** Grosse weisse Zahlen (48-64px), kleine Labels darunter

### Sektion 3: IMAGE BREAKER
- **Parallax Bild:** Premium Immobilien-Architektur (Skyline, modernes Gebaeude). 60vh, object-cover.
- **Kein Text** — rein visueller Breaker.

### Sektion 4: PROBLEM (Hell — #F0F0EC)
- **Layout:** 2-Spaltig Desktop, gestackt Mobile
- **Headline:** "2,x% Rendite. Mehr bleibt den meisten nicht."
- **Body:** Kurzer Erklaertext — Problem in 3 Bullet-Saetzen:
  1. Mieterhöhungen nicht gemacht
  2. Steuervorteile nicht genutzt
  3. Wertsteigerungspotenzial verschenkt
- **Visual:** Rote Zahl "2,4%" gross animiert (Counter) + Pfeil nach oben zu gruener Zahl
- **Subtiler roter Glow** hinter der Problem-Zahl

### Sektion 5: IMAGE BREAKER
- **Parallax Bild:** Close-up Haende auf Laptop/Tablet mit Zahlen. 50vh.

### Sektion 6: LOESUNG — Was ist ImmoIQ? (Dunkel — #0A0F1C)
- **Layout:** Zentrierte Headline + 3 Feature-Cards darunter
- **Headline:** "Dein Portfolio. Durchgerechnet."
- **Subline:** "Keine Excel. Keine Vermutung. Echte Zahlen."
- **3 Cards** (bg #141B2D, border white/10, Hover: Blue Glow):
  1. **KI-Portfolioanalyse** — Icon: Brain/Chart — "Cashflow, Steuern, Finanzierung, Exit. Auf den Euro genau."
  2. **Schritt-fuer-Schritt Plan** — Icon: Route/Map — "Strategiecall, Videoakademie, Vorlagen. Du setzt alles selbst um."
  3. **Gutachten & Fahrplaene** — Icon: FileCheck — "Professionelle Sanierungsfahrplaene. Mehrere Tausend Euro wert."
- **CTA unter Cards:** Double-Layer Button

### Sektion 7: IMAGE BREAKER
- **Parallax Bild:** Beeindruckende Architektur / Immobilien-Luftbild. 55vh.

### Sektion 8: AUTHORITY — Die Bertlein-Story (Hell — #FAFAF8)
- **Layout:** Grosses Zitat links, Metriken rechts (Desktop). Gestackt Mobile.
- **Headline:** "800 Deals. 150 Einheiten. Und selbst bei uns lag Geld auf dem Tisch."
- **Body:** "Julian und ich besitzen selbst ueber 150 Einheiten. Als wir unsere eigenen Portfolios durchgerechnet haben, war das ein Schock. Genau deshalb haben wir ImmoIQ gebaut."
- **Platzhalter:** Foto Max & Julian (wird spaeter geliefert)
- **Trust Badges:** Amazon Prime "The Mittelstand" Erwaehnung, WBD Gruppe Logo-Platzhalter
- **Metriken:** 800+ Deals | 300 Mio. Volumen | 150+ eigene Einheiten (Zahlen in Blau, Labels in text-secondary)

### Sektion 9: SOCIAL PROOF (Hell — #F0F0EC)
- **Layout:** Grosses Testimonial-Zitat zentriert
- **Zitat:** "Allein durch die Steueroptimierung fast 12.000 Euro im ersten Jahr gespart — bei nur 4 Einheiten."
- **Attribution:** Platzhalter-Name + Rolle
- **Dezenter blauer Glow** hinter dem Zitat

### Sektion 10: PROCESS — So funktioniert's (Hell — #FAFAF8)
- **Layout:** 3-Step Timeline, horizontal Desktop, vertikal Mobile
- **Step 1:** "Termin buchen" — 30 Min Strategiecall, kostenlos
- **Step 2:** "Analyse erhalten" — KI-Report mit allen Zahlen
- **Step 3:** "Umsetzen" — Schritt-fuer-Schritt mit Vorlagen & Support
- **Verbindungslinie** zwischen Steps in Blau-Gradient
- **Jeder Step:** Nummer (gross, blau) + Icon + Titel + 1 Satz

### Sektion 11: IMAGE BREAKER
- **Parallax Bild:** Premium Wohnimmobilie / Mehrfamilienhaus. 50vh.

### Sektion 12: PRICING (Dunkel — #0A0F1C)
- **Layout:** Zentriert, eine Card
- **Badge:** "Founders-Preis — Nur 30 Plaetze" (Gold #F59E0B)
- **Preis:** ~~4.900€~~ durchgestrichen → 2.900€ (gross, weiss)
- **Value Stack:**
  - ✓ KI-Portfolioanalyse (Wert: X€)
  - ✓ Strategiecall mit Max (Wert: X€)
  - ✓ Videoakademie + Vorlagen (Wert: X€)
  - ✓ Professionelle Gutachten (Wert: X€)
  - ✓ Sanierungsfahrplaene (Wert: X€)
- **Garantie-Badge:** "12 Monate Geld-zurueck-Garantie" (mit Shield-Icon)
- **CTA:** Double-Layer Button "Jetzt Founders-Platz sichern"

### Sektion 13: FAQ (Hell — #FAFAF8)
- **Layout:** Accordion, max-w-3xl zentriert
- **7 Fragen** (aus Persona-Analyse):
  1. "Ich hab nur 2-3 Wohnungen, lohnt sich das?"
  2. "Ich hab das mit Excel im Griff."
  3. "Mein Steuerberater macht das schon."
  4. "2.900€ ist viel."
  5. "Ist jetzt der falsche Zeitpunkt?"
  6. "Ich hab schon einen Berater."
  7. "Was genau bekomme ich?"

### Sektion 14: FINAL CTA (Blau-Gradient, Full-Bleed)
- **Layout:** Zentriert, maximaler Impact
- **Headline:** "Dein Portfolio wartet."
- **Subline:** "30 Minuten. Kostenlos. Klarheit."
- **CTA:** Double-Layer Button (weiss auf Blau-Variante)
- **Trust Repeat:** "800+ Deals · 12 Monate Garantie · Kostenfrei"

### Footer
- Logo (ImmoIQ), Impressum, Datenschutz, Kontakt-Email
- Dezent, dunkel (#0A0F1C)

## Design-System

### Typografie

```
Display/Headlines: "Plus Jakarta Sans", 700 (Bold)
  — H1: 64-96px Desktop / 36-44px Mobile | Leading 0.92 | Tracking -0.025em
  — H2: 40-56px Desktop / 28-36px Mobile | Leading 0.95 | Tracking -0.02em
  — H3: 24-32px Desktop / 20-24px Mobile | Leading 1.1

Body: "Inter", 400-500
  — Regular: 16-18px | Leading 1.65 | Farbe text-secondary
  — On Dark: 16-18px | Leading 1.65 | Farbe text-muted-dark

Mono/Zahlen: "JetBrains Mono", 500
  — Stats: 48-64px | Fuer Pricing, Metriken

Fonts laden via <link> im Head — NICHT CSS @import!
```

### Cards (Dunkle Sektion)

```
Background: #141B2D (NICHT white/[0.03]!)
Border: border-white/[0.1]
Border-Radius: rounded-2xl (16px)
Hover: border-[#0066FF]/40 + translateY(-4px) + shadow-[0_0_30px_rgba(0,102,255,0.15)]
Padding: p-8 (32px)
Jede Card: Icon mit blauem Glow als visueller Anker
```

### Cards (Helle Sektion)

```
Background: #FFFFFF
Border: border-[#E5E7EB]
Shadow: shadow-sm
Hover: shadow-lg + translateY(-2px) + border-[#0066FF]/20
```

### Spacing-System

```
Sektions-Padding: py-24 (Mobile) / py-32 (Desktop)
Content max-width: max-w-7xl (1280px)
Card-Gap: gap-6 (24px) / gap-8 (32px)
Abstaende: 8 / 16 / 24 / 32 / 48 / 64 / 80 / 96
```

## File-Struktur

```
/app
  /layout.tsx          → Root Layout, Fonts, Lenis
  /page.tsx            → Homepage (Single Page)
  /impressum/page.tsx
  /datenschutz/page.tsx
/components
  /ui
    /Button.tsx        → Double-Layer + Ghost Variants
    /Card.tsx          → Dark + Light Variants
    /Badge.tsx         → Founders, Garantie
    /Accordion.tsx     → FAQ
  /sections
    /Hero.tsx
    /StatsBar.tsx
    /Problem.tsx
    /Solution.tsx      → 3 Feature Cards
    /Authority.tsx     → Bertlein Story
    /SocialProof.tsx
    /Process.tsx       → 3-Step Timeline
    /Pricing.tsx       → Value Stack + CTA
    /FAQ.tsx
    /FinalCTA.tsx
    /Footer.tsx
  /shared
    /ParallaxBreaker.tsx   → Wiederverwendbar, nimmt image prop
    /SectionWrapper.tsx    → Konsistente Padding/MaxWidth
    /AnimateInView.tsx     → whileInView Wrapper (NUR below-fold!)
    /TrustBar.tsx
/lib
  /fonts.ts            → Font-Config
/public
  /images              → Stock-Bilder + Logo
    /logo.png
    /logo-dark.png
    /hero-visual.png
    /breaker-1.jpg
    /breaker-2.jpg
    /breaker-3.jpg
    /breaker-4.jpg
```

## Entwicklungs-Reihenfolge

### Phase 1: Foundation
- Layout, Fonts, Tailwind Config, Lenis Setup
- Button-Komponente (Double-Layer + Ghost)
- Card-Komponente (Dark + Light)
- SectionWrapper + ParallaxBreaker
- AnimateInView Wrapper

### Phase 2: Above-the-Fold
- Hero (KEIN Framer initial={{ opacity: 0 }}!)
- StatsBar
- Erster ParallaxBreaker

### Phase 3: Core Content
- Problem-Sektion
- Solution/Feature Cards
- Authority (Bertlein Story)
- Zwei ParallaxBreaker

### Phase 4: Conversion
- Social Proof
- Process (3-Step)
- Pricing (Value Stack)
- FAQ (Accordion)
- Final CTA
- Footer

### Phase 5: Polish
- Scroll-Animationen (whileInView, stagger)
- Parallax-Feintuning
- Mobile-Optimierung (Touch Targets, Sticky CTA)
- Safari-Kompatibilitaet
- Performance (next/image, sizes, priority)

## DON'Ts

```
❌ KEIN initial={{ opacity: 0 }} auf Hero-Elementen
❌ KEIN Tailwind v4 (Safari-Bugs)
❌ KEIN white/[0.03] als Card-Background
❌ KEIN @import fuer Fonts (Tailwind schluckt es)
❌ KEIN text-white/35 (WCAG-Fail, minimum white/50)
❌ KEINE zwei gleichen Sektionen hintereinander
❌ KEIN generisches Inter-Only Design
❌ KEINE Specs im Hero (gehoeren in Pricing)
❌ KEINE Headlines ueber 2 Zeilen
❌ KEIN <input type="date"> auf Mobile
❌ KEIN Next.js 16
```

→ Lies BLUEPRINT.md fuer universelle Design-Regeln und die 12 Gebote.
→ Lies AGENTS.md fuer den QA-Workflow mit 5 Review-Agenten.
