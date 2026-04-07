# LEARNINGS.md — Premium Website Build Skill
## Erkenntnisse aus dem ImmoIQ Build-Prozess

Dieses Dokument ist die destillierte Erfahrung aus 6+ Iterationen einer Premium Lead-Gen Website. Es ersetzt nicht CLAUDE.md oder BLUEPRINT.md — es ist das strategische Layer das VOR den technischen Specs kommt.

---

## PHASE 0: BEVOR EINE ZEILE CODE GESCHRIEBEN WIRD

### 0.1 Produkt-Archetyp bestimmen

Jede Website verkauft einen von 5 Archetypen. Der Archetyp bestimmt ALLES — Font, Ton, Layout, Farbwelt.

| Archetyp | Font-Stil | Ton | Hero-Element | Beispiele |
|---|---|---|---|---|
| **High-Ticket Beratung** | Serif Display + Sans Body | Persoenlich, direkt, "ich zeig dir" | Video von Founder, Testimonials | saleshax.de, immoiq |
| **SaaS / Tool** | Geometric Sans (Inter, Plus Jakarta) | Feature-fokussiert, clean | Dashboard UI, Produkt-Screenshots | linear.app, vercel.com |
| **Agency / Kreativ** | Mix Serif + Sans, oft Uppercase | Bold, selbstbewusst | Portfolio-Arbeiten, Video-Reels | lemonads.studio, 7i7.de |
| **E-Commerce** | Neutral Sans oder Elegant Serif | Produkt-zentriert, aspirational | Produkt-Fotos, Lifestyle | Apple, Aesop |
| **Personal Brand** | Editorial Serif | Storytelling, nahbar | Founder-Foto, Video | Einzelpersonen, Coaches |

**PFLICHT:** Vor dem Build den Archetyp festlegen und dokumentieren. Beispiel:
```
Archetyp: High-Ticket Beratung
→ Serif Headlines, Sans Body
→ Founder-Video als Hero
→ Persoenlicher Ton ("ich", "wir", "du")
→ Vertrauen > Features
→ Person verkauft, nicht das Tool
```

### 0.2 Referenz-Websites analysieren

**NIEMALS ohne Referenzen bauen.** 2-3 URLs sind Pflicht.

Fuer jede Referenz dokumentieren:
```
URL: saleshax.de
Was uebernehmen:
  - Serif/Sans Mix in Headlines
  - Hell/Dunkel Sektionswechsel
  - Nummern-basierte Service-Liste (001, 002, 003)
  - Editorial Ton
Was NICHT uebernehmen:
  - Farbwelt (zu neutral fuer ImmoIQ)
  - Navigation Style
```

**Workflow:**
1. Website scrapen (firecrawl oder manuell)
2. Screenshots Desktop + Mobile (4-5 Viewports)
3. Font identifizieren (Browser DevTools oder WhatFont)
4. Farb-Palette extrahieren
5. Sektions-Rhythmus notieren (Hell/Dunkel/Bild/Gradient)
6. Copy-Stil analysieren (Laenge, Ton, Headlines)
7. **Erst dann: Design-Decisions ableiten**

### 0.3 Asset-Checkliste

Vor dem Build muss klar sein welche Assets existieren. Fehlende Assets = die groesste Limitierung. Code kann fehlende Assets NICHT kompensieren.

```
PFLICHT-ASSETS:
[ ] Founder-Foto(s) — hohe Qualitaet, kein Stockfoto
[ ] Logo als SVG
[ ] Video/VSL — komprimiert fuer Web
[ ] Client-Logos / Trust-Badges (wenn vorhanden)
[ ] Testimonial-Fotos (oder zumindest echte Namen)

NICE-TO-HAVE:
[ ] Produkt-Screenshots / Dashboard-UI
[ ] Team-Fotos
[ ] Office/Location-Fotos
[ ] Custom Illustrationen / Icons

PLATZHALTER-STRATEGIE:
Wenn Assets fehlen, nicht improvisieren mit generischen Loesungen.
Stattdessen: Platzhalter die klar als Platzhalter erkennbar sind +
Notiz was spaeter eingefuegt wird. Ein Video-Placeholder mit
Play-Button und "Max erklaert ImmoIQ" ist besser als ein
animiertes SVG-Dashboard das das Produkt falsch repraesentiert.
```

---

## PHASE 1: DESIGN-ENTSCHEIDUNGEN

### 1.1 Typografie — Die wichtigste Einzelentscheidung

**Erkenntnis:** Die Font-Wahl hat mehr Impact auf die Wahrnehmung als jede andere Design-Entscheidung. Ein Serif-Font hat in unserem Fall den Vibe von "Fintech-Startup" zu "Premium-Beratung" gedreht — ohne dass sich sonst etwas geaendert hat.

**Regeln:**

```
SERIF (DM Serif Display, Playfair, Instrument Serif):
→ Wirkt: Premium, vertrauenswuerdig, editorial, erwachsen
→ Fuer: Beratung, High-Ticket, Personal Brand, Luxury
→ Kombination: Serif Headlines + Sans Body (Inter, System)

GEOMETRIC SANS (Plus Jakarta Sans, Geist, Inter):
→ Wirkt: Modern, technisch, clean, startup
→ Fuer: SaaS, Tools, Tech-Produkte
→ Kombination: Eine Font-Familie, Gewichte variieren

HUMANIST SANS (DM Sans, Source Sans):
→ Wirkt: Freundlich, zugaenglich, warm
→ Fuer: B2C, Community, Lifestyle

DISPLAY/CUSTOM (Clash Display, Cabinet Grotesk):
→ Wirkt: Bold, kreativ, selbstbewusst
→ Fuer: Agencies, kreative Dienstleister
```

**Serif + Italic als Stilmittel (SalesHax-Pattern):**
```
Nicht: "FINDE DIE 40.000€ DIE IN DEINEM PORTFOLIO VERSTECKT SIND"
Sondern: "Dein Portfolio hat 40-50.000€ Potenzial. Wir zeigen dir wo."
                                                    ^^^^^^^^^^^^^^^^
                                                    Italic, 40% Opacity

Das Pattern: Starke Aussage normal. Ergaenzung/Emotion in Italic + gedaempfter Opacity.
```

### 1.2 Hell/Dunkel-Rhythmus

**Erkenntnis:** Eine komplett dunkle Seite wirkt nach 3 Scrolls monoton. Eine komplett helle Seite wirkt generisch. Der Wechsel ist der Schluessel.

```
GUTER RHYTHMUS:
  Hero        → DUNKEL  (Dramatik, Aufmerksamkeit)
  Stats       → AKZENT  (Blau-Gradient, Trenner)
  Problem     → HELL    (Lesbarkeit, Kontrast zum Hero)
  Loesung     → DUNKEL  (Premium, Feature-Cards)
  Authority   → DUNKEL  (Tiefe, Vertrauen)
  Testimonial → HELL    (Clean, Cards auf Weiss)
  Process     → HELL    (Einfachheit, Klarheit)
  Pricing     → DUNKEL  (Exklusivitaet)
  FAQ         → HELL    (Offenheit, Transparenz)
  Final CTA   → AKZENT  (Blau-Gradient, Urgency)
  Footer      → DUNKEL

SCHLECHTER RHYTHMUS:
  Alles dunkel → Monoton, ermuedend, "noch eine Dark-Mode Seite"
  Alles hell   → Generisch, kein Premium-Feeling
  Zufaellig    → Kein visueller Fluss
```

**Regel:** Maximal 2 gleiche Hintergruende hintereinander. Ideal: Jede Sektion unterscheidet sich von der vorherigen.

**Dunkle Sektionen:** Fuer Premium, Tiefe, Feature-Showcase, Pricing.
**Helle Sektionen:** Fuer Lesbarkeit, Social Proof, FAQ, Process.
**Akzent-Sektionen:** Fuer CTAs, Stats, Urgency (sparsam einsetzen).

### 1.3 Visuelle Tiefe — Was funktioniert und was nicht

```
FUNKTIONIERT:
  ✓ Glassmorphism Cards auf dunklem BG (bg-[#141B2D]/80, backdrop-blur, gradient border)
  ✓ Dunkle Cards auf hellem BG (starker Kontrast, z.B. Chart-Card auf Weiss)
  ✓ Subtile radiale Glows hinter Headlines (blur-[120px], 4-8% Opacity)
  ✓ Gradient-Borders via Wrapper-Div Technik
  ✓ Hover: translateY(-2px) + Border-Color-Shift + Shadow-Increase

FUNKTIONIERT NICHT / UEBERLADEN:
  ✗ Grid-Texture als Background-Pattern → Wirkt wie Tech-Template
  ✗ Grain/Noise Overlay global → Unnoetig, addiert nichts
  ✗ Parallax-Breaker ohne echte Fotos → Leere Gradient-Flaechen
  ✗ Animierte SVG-Dashboards fuer Nicht-SaaS Produkte → Falsche Erwartung
  ✗ Floating Cards mit Mouse-Parallax → Gimmick wenn kein SaaS
  ✗ Grid + Grain + Glow + Parallax zusammen → Overengineered
```

**Grundregel: Im Zweifel weglassen.** Jedes visuelle Element muss einen Grund haben. "Sieht cool aus" ist kein Grund. "Lenkt die Aufmerksamkeit auf den CTA" ist ein Grund.

---

## PHASE 2: COPY UND TEXT

### 2.1 Apple-Prinzip fuer Headlines

```
FALSCH (zu lang, zu beschreibend):
"Die KI-gestützte Portfolioanalyse die zeigt, wo dein Geld liegen bleibt."

RICHTIG (kurz, emotional, sofort klar):
"Dein Portfolio hat 40-50.000€ Potenzial."

FALSCH (Feature-fokussiert):
"KI-Portfolioanalyse mit Zugriff auf alle Fundamentaldaten in Deutschland"

RICHTIG (Benefit-fokussiert):
"Wir zeigen dir auf den Euro genau, wo du Geld liegen lässt."
```

**Regeln:**
- Headline: Max 8-10 Worte. Muss auch ohne Kontext verstaendlich sein.
- Subline: 1 Satz. Konkretisiert die Headline.
- Body: Max 3 Saetze pro Absatz.
- Proof > Promise: Zahlen, Ergebnisse, Testimonials wiegen mehr als Versprechen.

### 2.2 Copy-Ton nach Archetyp

```
HIGH-TICKET BERATUNG:
  Ton: Persoenlich, direkt, wie ein Gespraech
  Perspektive: "Ich" und "Wir" (nicht "unser Unternehmen")
  Beispiel: "Wir haben hunderte Portfolios durchgerechnet. Bei jedem lag Geld auf dem Tisch."
  Vermeiden: Marketing-Sprache, "transformiere dein...", "revolutioniere..."

SAAS / TOOL:
  Ton: Clean, feature-fokussiert, technisch-klar
  Perspektive: Produkt im Zentrum
  Beispiel: "Ship faster. Break nothing."
  Vermeiden: Persoenliches, Storytelling, Emotionen

AGENCY:
  Ton: Selbstbewusst, kurz, visuell-getrieben
  Perspektive: Arbeit spricht fuer sich
  Beispiel: "Architekten fuer Performance Creatives"
  Vermeiden: Zu viel Text, Erklaerungen
```

### 2.3 VSL/Video-Integration

**Erkenntnis:** Ein Video vom Founder das direkt zur Kamera spricht baut mehr Vertrauen auf als jede Animation, jedes Dashboard, jeder Text. Wenn ein VSL existiert, ist es das #1 Hero-Element.

```
VIDEO-IMPLEMENTIERUNG:
1. Komprimiere Original (FFmpeg):
   - Preview: 8s, muted, 720p, CRF 32 → ~200KB (Autoplay-Loop)
   - Full: 720p, CRF 26, faststart → ~10-30MB (bei Klick)
   - Poster: Einzelframe JPG → ~100KB (sofort sichtbar)

2. Player-Verhalten:
   - Page Load: Poster-Bild zeigt sich instant
   - Sofort: Preview-Loop startet muted autoplay
   - Bei Klick: Wechsel zu Full-Video mit Sound
   - preload="none" auf Full-Video (laedt nicht vor)

3. Performance:
   - Initial Load: ~300KB (Poster + Preview)
   - Full Video: Erst bei User-Interaktion
   - movflags +faststart: Video startet bevor es fertig geladen ist
```

---

## PHASE 3: LAYOUT-PATTERNS

### 3.1 Sektions-Layouts — Nie zweimal dasselbe

```
VARIATION IST PFLICHT. Diese Layouts abwechseln:

1. ZENTRIERT
   Headline + Subline zentriert, Content darunter.
   Fuer: Hero, CTA, Stats

2. ZWEI-SPALTIG
   Text links, Visual rechts (oder umgekehrt).
   Fuer: Problem, Authority

3. BENTO GRID
   Asymmetrische Cards, verschieden gross.
   Fuer: Features/Loesung, Services

4. HORIZONTAL SCROLL / MARQUEE
   Karten oder Elemente horizontal scrollend.
   Fuer: Testimonials, Logos, Partner

5. TIMELINE / STEPS
   Horizontal (Desktop) oder Vertikal (Mobile).
   Fuer: Process, How-It-Works

6. SINGLE CARD
   Eine grosse, zentrierte Card mit Content.
   Fuer: Pricing, Highlighted Feature

REGEL: Nie zwei aufeinanderfolgende Sektionen mit dem gleichen Layout.
```

### 3.2 Card-Varianten nach Hintergrund

```
CARD AUF DUNKLEM HINTERGRUND (Glassmorphism):
  - bg: rgba(20, 27, 45, 0.6) oder #141B2D
  - backdrop-blur-xl
  - border: white/[0.08]
  - Gradient-Border via Wrapper: bg-gradient-to-br from-white/[0.12] to-transparent p-[1px]
  - Hover: border-[#0066FF]/30, translateY(-2px), shadow glow

CARD AUF HELLEM HINTERGRUND:
  - bg: #FFFFFF
  - border: #E5E7EB
  - shadow-sm
  - Hover: shadow-lg, translateY(-2px), border-[#0066FF]/20

DARK CARD AUF HELLEM HINTERGRUND (Kontrast):
  - bg: #141B2D oder #0A0F1C
  - Weisser Text
  - Starker visueller Anker
  - Fuer: Charts, Dashboards, Featured Content
```

### 3.3 Conversion-Flow (Storytelling-Struktur)

```
1. PROMISE (Hero)
   Was bekommt der Besucher? Konkretes Ergebnis mit Zahl.
   "Dein Portfolio hat 40-50.000€ Potenzial."

2. PROOF (Stats/Trust)
   Sofort beweisen. Zahlen, Logos, Social Proof.
   "800+ Deals · 300M€ Volumen · 150+ eigene Einheiten"

3. PROBLEM (Pain Amplification)
   Schmerz konkretisieren. Kosten beziffern.
   "Du verlierst 30.000-75.000€ pro Jahr."

4. SOLUTION (Benefit-Stack)
   Was bekommt man konkret? Benefits, nicht Features.
   "Analyse auf den Euro genau. Persoenlicher Fahrplan. Gutachten."

5. AUTHORITY (Warum wir?)
   Gruender-Story, Erfahrung, Media, Track Record.
   "Nicht irgendein Tool. 800 Deals, 150 eigene Einheiten."

6. SOCIAL PROOF (Ergebnisse anderer)
   Testimonials mit konkreten Zahlen.
   "+12.000€ gespart bei nur 4 Einheiten."

7. PROCESS (Wie einfach es ist)
   3 simple Steps. Reibung minimieren.
   "Termin buchen → Analyse erhalten → Umsetzen"

8. PRICING (Investment + Guarantee)
   Preis + Value Stack + Garantie + Urgency.
   "2.900€ · 12 Monate Garantie · 14x Return"

9. OBJECTIONS (FAQ)
   Top-Einwaende entkraeften.
   "Ich hab nur 2-3 Wohnungen, lohnt sich das?"

10. CLOSE (Final CTA + Urgency)
    Emotionaler Abschluss. Fristen, Knappheit.
    "Jedes Jahr das vergeht, kostet dich Geld."
```

---

## PHASE 4: TECHNISCHE UMSETZUNG

### 4.1 Stack-Empfehlung

```
Next.js 14+ (App Router) — NICHT 16 (noch instabil)
TypeScript strict
Tailwind CSS 3.4 — NICHT v4 (Safari-Bugs: @layer, color-mix, oklab)
Framer Motion 11+ — Nur fuer below-fold Animationen
Lenis — Smooth Scroll (nur Client-Side)
Lucide React — Icons
```

### 4.2 Performance-Regeln

```
1. HERO: KEIN initial={{ opacity: 0 }}. CSS-only oder keine Animation.
2. FONTS: Via <link> im Head, NICHT via CSS @import
3. BILDER: next/image mit sizes="" und priority auf Hero
4. VIDEO: preload="none", Poster-Bild, Preview-Loop separat komprimiert
5. ANIMATIONEN: viewport={{ once: true }} auf allen whileInView
6. LENIS: Nur Client-Side (useEffect), nicht im SSR
```

### 4.3 Mobile-First

```
1. Start bei 390px Viewport
2. Touch Targets 48px+
3. Buttons 52-58px Hoehe
4. Input font-size 16px+ (iOS Zoom Prevention)
5. Kein <input type="date"> auf Mobile
6. Sticky Bottom Bar mit Preis + CTA
7. Breakpoints: 0-639 (DEFAULT) → 640 (sm) → 1024 (lg)
```

---

## PHASE 5: REVIEW-WORKFLOW

### 5.0 Vibe Check (NEU — VOR allen anderen Checks)

```
BEVOR technische Details geprueft werden:

1. Screenshot der Seite neben Screenshot der Referenz-Website legen
2. Auf Thumbnail-Groesse verkleinern (100x100px)
3. Drei Fragen:
   - Sieht es aus wie die Referenz oder wie ein Template?
   - Wuerde die Zielgruppe in 3 Sekunden verstehen was verkauft wird?
   - Wuerde der Founder diese Seite stolz zeigen?
4. Wenn eine Frage "Nein" → Design-Decisions ueberpruefen, nicht Code-Details fixen
```

### 5.1 Die haeufigsten Fallen

```
FALLE 1: "Dark = Premium"
→ Realitaet: Dark ohne Rhythmus/Kontrast = monoton und ermuedend.
→ Fix: Hell/Dunkel abwechseln. Maximal 2 dunkle Sektionen am Stueck.

FALLE 2: "Mehr Animationen = besser"
→ Realitaet: Grid-Texture + Grain + Parallax + SVG-Animationen = Overengineered
→ Fix: Im Zweifel weglassen. Jedes Element braucht einen Grund.

FALLE 3: "Dashboard/UI als Hero fuer Nicht-SaaS"
→ Realitaet: Ein animiertes Dashboard fuer ein Beratungsprodukt signalisiert "Software", nicht "Beratung"
→ Fix: Hero-Element muss zum Archetyp passen. Beratung = Video/Foto vom Founder.

FALLE 4: "Features auflisten statt Benefits zeigen"
→ Realitaet: "KI-Portfolioanalyse mit Zugriff auf Fundamentaldaten" sagt nichts
→ Fix: "Wir zeigen dir auf den Euro genau, wo du Geld liegen laesst."

FALLE 5: "Font ist Nebensache"
→ Realitaet: Font-Wechsel von Sans zu Serif hat den gesamten Vibe gedreht
→ Fix: Font ist die #1 Design-Entscheidung. VOR Farben, Layout, Animations.

FALLE 6: "Code kompensiert fehlende Assets"
→ Realitaet: Ohne Fotos/Videos ist jede Seite nur Text auf Background
→ Fix: Asset-Checkliste BEVOR Code geschrieben wird. Platzhalter klar kennzeichnen.

FALLE 7: "Alles auf einmal richtig machen"
→ Realitaet: 6 Iterationen waren noetig um das richtige Ergebnis zu finden
→ Fix: Schnell bauen, schnell zeigen, Feedback einholen, iterieren.
```

### 5.2 Review-Reihenfolge (optimiert)

```
RUNDE 1: STRATEGIE (vor Code)
  □ Archetyp definiert?
  □ Referenz-Websites analysiert?
  □ Font-Strategie passt zum Archetyp?
  □ Assets vorhanden oder Platzhalter definiert?
  □ Copy-Ton festgelegt?

RUNDE 2: VIBE CHECK (nach erstem Build)
  □ Screenshot neben Referenz — gleiches Level?
  □ Hell/Dunkel-Rhythmus stimmt?
  □ Headline-Hierarchie klar?
  □ CTA auffindbar und einladend?
  □ Wuerde Founder die Seite stolz zeigen?

RUNDE 3: CONVERSION (nach Vibe-Approval)
  □ Value Prop in 3 Sekunden klar?
  □ CTA auf jeder Viewport-Hoehe sichtbar?
  □ Social Proof above fold?
  □ Conversion-Weg offensichtlich?
  □ Urgency/Scarcity vorhanden?

RUNDE 4: TECHNIK (nach Conversion-Approval)
  □ Mobile 390px getestet?
  □ Touch Targets 48px+?
  □ Keine Console Errors?
  □ Performance: < 3s interaktiv?
  □ Safari kompatibel?

RUNDE 5: POLISH
  □ Scroll-Animationen dezent?
  □ Hover-Effekte konsistent?
  □ Spacing-System eingehalten?
  □ WCAG AA Kontrast?
  □ Favicon, Meta Tags, OG Image?
```

---

## ZUSAMMENFASSUNG: DIE 10 GEBOTE

```
1. ARCHETYP VOR CODE.
   Beratung ≠ SaaS ≠ Agency. Der Archetyp bestimmt alles.

2. REFERENZEN SIND PFLICHT.
   Nie ohne 2-3 analysierte Referenz-Websites bauen.

3. FONT IST DESIGN-ENTSCHEIDUNG #1.
   Serif = Premium/Beratung. Sans = Tech/SaaS. Das allein aendert alles.

4. HELL/DUNKEL WECHSELN.
   Nie mehr als 2 gleiche Hintergruende am Stueck.

5. PERSON VOR PRODUKT.
   Bei Beratung: Founder-Video > Dashboard. Gesicht > Feature-Liste.

6. IM ZWEIFEL WEGLASSEN.
   Grid-Texture, Grain, Parallax, Floating Cards — nur wenn es einen Grund gibt.

7. COPY WIE EIN GESPRAECH.
   Nicht "unsere KI-gestuetzte Portfolioanalyse" sondern "wir zeigen dir wo dein Geld liegt."

8. ASSETS VOR CODE.
   Ohne Fotos/Video ist jede Seite nur Text auf Background.

9. SCHNELL ITERIEREN.
   Erste Version in 2 Stunden, dann Feedback, dann verbessern. Nicht 10 Stunden perfektionieren.

10. VIBE CHECK VOR PIXEL CHECK.
    Erst: "Fuehlt es sich richtig an?" Dann: "Ist der Button 48px?"
```
