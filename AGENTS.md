# AGENTS.md — ImmoIQ

## Workflow

1. Baue Komponente → 2. Playwright Screenshots → 3. Thumbnail-Test + 7 Fragen → 4. 5-Agenten-Review → 5. Fixes → 6. Wiederhole bis 45/50+

**Keine neue Sektion bevor aktuelle 45/50 hat.**

---

## Playwright Setup

```bash
npm install playwright --save-dev && npx playwright install chromium
```

```javascript
const { chromium } = require('playwright');
async function screenshotAll() {
  const browser = await chromium.launch();
  const pages = [
    ['http://localhost:3000', 'home'],
    ['http://localhost:3000/impressum', 'impressum'],
    ['http://localhost:3000/datenschutz', 'datenschutz'],
  ];
  for (const [url, name] of pages) {
    const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await d.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
    await d.waitForTimeout(3000);
    await d.screenshot({ path: `/tmp/${name}-desktop.png`, fullPage: true });
    const h = await d.evaluate(() => document.body.scrollHeight);
    for (let i = 0; i < Math.ceil(h / 900); i++) {
      await d.evaluate(y => window.scrollTo(0, y), i * 900);
      await d.waitForTimeout(800);
      await d.screenshot({ path: `/tmp/${name}-d${i}.png` });
    }
    await d.close();
    const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await m.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
    await m.waitForTimeout(3000);
    await m.screenshot({ path: `/tmp/${name}-mobile.png`, fullPage: true });
    await m.close();
  }
  await browser.close();
}
screenshotAll();
```

---

## 5 Review-Agenten

### Agent 1: MOBILE USER
Persona: Immobilienbesitzer, 42, iPhone 15, kommt ueber Meta Ad, hat 4 Mietwohnungen, will schnell verstehen was ImmoIQ bringt.
- [ ] CTA above-fold sichtbar?
- [ ] Touch-Targets 48px+?
- [ ] Keine Dropdowns wo Chips moeglich?
- [ ] Input font-size >= 16px?
- [ ] Sticky Bottom-Bar mit CTA?
- [ ] Text lesbar? (14px+ Body, WCAG AA Kontrast)
- [ ] Lazy-loaded Bilder?
- [ ] Kein horizontales Overflow?
- [ ] Unter 3s interaktiv?
- [ ] Unter 60s von Landing bis Calendly-Klick?
Score: X/10. Min 8/10.

### Agent 2: DESIGN CRITIC
Persona: Senior UI Designer, Figma-Power-User, hasst AI-generiertes Design, liebt Awwwards-Seiten.
- [ ] Alle Buttons Double-Layer + Shine-Sweep?
- [ ] Cards: Proper Backgrounds (#141B2D auf Dark, #FFFFFF auf Hell)?
- [ ] Typografie: Plus Jakarta Sans Display + Inter Body korrekt eingesetzt?
- [ ] Farbpalette konsistent? (ImmoIQ Blue #0066FF als einziger Akzent)
- [ ] Kein generisches AI-Design? (Kein Standard-Shadow, kein centered-everything)
- [ ] Abstaende konsistent? (8/16/24/48/80 System)
- [ ] Hintergruende nie flat? (Gradients, Glows, Bilder)
- [ ] Visueller Rhythmus eingehalten? (Keine 2 gleichen Sektionen)
- [ ] Animationen vorhanden + dezent? (whileInView, stagger)
- [ ] Parallax-Breaker zwischen Content-Sektionen?
Score: X/10. Min 8/10.

### Agent 3: CONVERSION OPTIMIZER
Persona: Performance Marketer, Meta Ads Spezialist, denkt in CPL und Conversion Rate.
- [ ] CTA auf jeder Viewport-Hoehe sichtbar?
- [ ] Value Prop in 3 Sekunden klar? ("Portfolioanalyse die zeigt wo Geld liegen bleibt")
- [ ] Social Proof above fold? (800+ Deals, Trust Bar)
- [ ] Conversion-Weg offensichtlich? (Scroll → Verstehen → Vertrauen → Buchen)
- [ ] Preis transparent? (2.900€ Founders vs 4.900€ regulaer)
- [ ] Urgency/Scarcity? ("Nur 30 Plaetze", Founders-Badge)
- [ ] Calendly-CTA friktionslos? (Direktlink, kein Formular vorher)
- [ ] Garantie prominent? (12 Monate Geld-zurueck)
- [ ] FAQ beantwortet Top-Einwaende? (7 Personas-basierte Fragen)
- [ ] Sticky Mobile CTA? (Bottom Bar mit Preis + Button)
Score: X/10. Min 8/10.

### Agent 4: DEVELOPER QA
- [ ] Keine `any` Types?
- [ ] Keine Console-Errors?
- [ ] Aria-Labels auf Buttons und interaktiven Elementen?
- [ ] Kein ungenutzter Code?
- [ ] Error-States gehandled?
- [ ] next/image mit sizes="" und priority auf Hero?
- [ ] Keine Layout-Shifts (CLS)?
- [ ] Fonts via `<link>` nicht @import?
- [ ] Lenis nur Client-Side?
- [ ] Framer Motion: viewport={{ once: true }} auf allen Animationen?
Score: X/10. Min 8/10.

### Agent 5: BRAND GUARDIAN
Persona: Max Bertlein. Kennt die Marke, ist das Gesicht von ImmoIQ. Premium, serioes, kompetent, aber nahbar.
- [ ] Ton stimmt? (Kompetent + direkt, kein "Guru"-Sprech)
- [ ] Texte natuerlich? (Klingt wie Max im Gespraech, nicht wie Marketing-Template)
- [ ] Copy promise-basiert? (Keine generischen "Bist du X der Y?" Formeln)
- [ ] Preise korrekt? (2.900€ Founders, 4.900€ regulaer, 12 Monate Garantie)
- [ ] Zahlen korrekt? (800+ Deals, 150+ Einheiten, 300 Mio. Volumen)
- [ ] CTA prominent und klar? ("Kostenloses Strategiegespraech")
- [ ] Kontaktdaten korrekt? (Calendly Link funktional)
- [ ] Fuehlt sich nach Premium an? (Nicht wie Coaching-Bro-Seite)
- [ ] Max waere stolz, diese Seite zu zeigen?
- [ ] Differenziert von Wettbewerb? (KI-Aspekt + eigene Erfahrung = Unique)
Score: X/10. Min 9/10.

---

## Prozess

```
=== REVIEW START ===
Screenshots → Thumbnail-Test → 7 Fragen → 5 Agenten → Score XX/50
< 45/50: Fix → Erneut | >= 45/50: Weiter
=== REVIEW PASSED ===
```

## Thumbnail-Test

Screenshots auf 100x100px verkleinern. Pruefe:
- Ist es ein schwarzes/weisses Rechteck? → Mehr Bilder, Glows, Gradient noetig.
- Sieht man Hierarchie? → Headlines muessen herausstechen.
- Sieht man Farbe? → Blau-Akzente muessen sichtbar sein.

## 7 Fragen pro Screenshot

1. **Sichtbarkeit:** Ist der wichtigste Content sofort sichtbar?
2. **Hierarchie:** Liest man in der richtigen Reihenfolge?
3. **Visueller Anker:** Gibt es ein dominantes Element (Bild, Zahl, Headline)?
4. **Kontrast:** Text lesbar auf allen Hintergruenden?
5. **Weissraum:** Genug Luft oder gequetscht?
6. **CTA:** Button auffindbar und einladend?
7. **Mobile:** Funktioniert die Sektion auf 390px?

## Eskalation

- 5+ Iterationen auf einer Sektion: User fragen
- Agent 1 (Mobile) < 7: PRIORITAET — Zielgruppe kommt ueber Meta Ads Mobile!
- Agent 5 (Brand) < 8: PRIORITAET — Max muss stolz sein
- 2 Agenten gleicher Fail: Doppelte Prioritaet

## Quality Gates

Phase N → N+1: Alle Komponenten 45/50+
Finale Bewertung vor Deploy: 47/50+ (94%)
