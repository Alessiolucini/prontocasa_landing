# Design System: ProntoCasa Landing Page
**Project ID:** 983883976817986285
**Stitch Project Title:** ProntoCasa Hero Section

## 1. Visual Theme & Atmosphere
The ProntoCasa landing page exudes a **warm, trustworthy, and modern** aesthetic. It combines an inviting cream-toned canvas with bold orange accents to convey reliability and accessibility for home repair services. The atmosphere is **clean yet approachable** — a blend of professional confidence and friendly warmth, reminiscent of a beautifully maintained Italian home.

The design uses **generous whitespace** to breathe, paired with **soft, rounded shapes** that feel organic and welcoming. Dark navy sections create dramatic contrast for calls-to-action and statistics, evoking trust and authority.

**Mood keywords:** Warm, Trustworthy, Modern, Approachable, Professional, Italian Elegance

## 2. Color Palette & Roles

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| Sunset Orange | #f48c25 | Primary accent — CTAs, highlighted text, buttons, active states |
| Deep Sunset Orange | #e07a15 | Primary hover state — darkened for interaction feedback |
| Soft Amber Glow | #faa84d | Secondary accent — lighter orange for subtle highlights |
| Warm Orange Aura | rgba(244,140,37,0.15) | Glow effects — soft radial glows behind elements |
| Pure White | #ffffff | Main background — clean canvas for content sections |
| Warm Parchment | #faf7f2 | Warm background — hero section and alternating sections |
| Soft Linen | #f5f0ea | Section background — subtle differentiation between areas |
| Deep Navy | #1a1a2e | Dark sections — stats, download CTA, and contrast areas |
| Midnight Indigo | #111125 | Footer background — deepest layer of the page |
| Near-Black Navy | #1a1a2e | Primary text — headings and body copy on light backgrounds |
| Muted Lavender Gray | #5a5a72 | Secondary text — descriptions and supporting copy |
| Dusty Silver | #8a8a9e | Muted text — captions, metadata, and tertiary information |
| Snow White | #ffffff | Text on dark — headings and copy on navy/dark backgrounds |
| Soft Lilac Gray | #c8c8d8 | Text on dark (secondary) — descriptions on dark backgrounds |
| Warm Sand Border | #e8e4de | Borders — card outlines and dividers |
| Light Sand | #f0ece6 | Light borders — subtle separations |
| Fresh Green | #22c55e | Success/verification — checkmarks and positive indicators |
| Sky Blue | #3b82f6 | Info — informational badges and links |

## 3. Typography Rules
- **Font Family:** Manrope — a geometric, modern sans-serif with excellent readability and a warm personality
- **Hero Headlines:** 4rem (64px), bold weight (800), tight letter-spacing for maximum impact
- **Section Headers:** 2rem–2.5rem, bold weight (700), with orange highlighted keywords
- **Body Text:** 1rem–1.125rem, regular weight (400), generous line-height (1.6) for comfortable reading
- **Small Labels:** 0.75rem–0.875rem, uppercase letter-spacing for badges and section labels
- **Text Rendering:** -webkit-font-smoothing: antialiased for crisp typography

## 4. Component Stylings
* **Primary Buttons:** Generously rounded (border-radius: 9999px pill shape), Sunset Orange (#f48c25) background, white text, with a warm glow shadow on hover. Scale up subtly (1.05) on hover.
* **App Store Buttons:** Dark Navy (#1a1a2e) pill-shaped buttons with white text and store icons, used in pairs (Apple + Google Play).
* **Service Cards:** White background with warm sand borders (#e8e4de), gently rounded corners (16px), whisper-soft shadow on hover (0 8px 30px rgba(0,0,0,0.1)). Cards lift upward 8px on hover.
* **Testimonial Cards:** White background, subtle border, 16px rounded corners. Feature 5-star ratings in golden orange, quoted text in muted gray, and avatar circles with colored initials.
* **Stats Items:** Displayed on dark navy background, with large bold white numbers and orange accent indicators.
* **Phone Mockup:** Realistic iPhone frame containing app screenshots, floating with a subtle animation. Used in both Hero and Download sections on cream and dark backgrounds respectively.
* **Section Labels:** Uppercase, small text inside a pill-shaped badge with a warm orange tinted background and orange text.
* **Inputs/Forms:** Not present in current design — if needed, use rounded inputs (8px) with warm sand borders on parchment background.

## 5. Layout Principles
- **Container:** Max-width 1200px, centered, with 1.5rem horizontal padding
- **Grid System:** CSS Grid with responsive columns — 3-column for services, 4-column for how-it-works steps, 2-column for hero and download
- **Section Spacing:** Generous vertical padding (6rem–8rem) between sections for breathing room
- **Visual Rhythm:** Alternating light/warm/dark backgrounds create a pleasant scrolling rhythm: Warm Parchment → White → Warm Parchment → Dark Navy → White → Dark Navy → Midnight
- **Hierarchy:** Two-column layouts with text left / visual right for hero and CTA sections
- **Animations:** Scroll-triggered fade-in-up animations with staggered delays for sequential reveals. Phone mockups have floating animations.
- **Whitespace Strategy:** Premium, generous — never cramped. Minimum 3rem between content blocks within sections.

## 6. Design System Notes for Stitch Generation

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first with mobile responsive
- Theme: Light with warm cream backgrounds, Dark Navy for contrast sections
- Background Primary: Warm Parchment (#faf7f2) for content, Pure White (#ffffff) for cards
- Background Dark: Deep Navy (#1a1a2e) for stats and CTA sections
- Primary Accent: Sunset Orange (#f48c25) for all interactive elements and highlights
- Text Primary: Near-Black Navy (#1a1a2e) for headings on light backgrounds
- Text Secondary: Muted Lavender Gray (#5a5a72) for descriptions
- Text on Dark: Snow White (#ffffff) for headings, Soft Lilac (#c8c8d8) for body on dark
- Buttons: Pill-shaped (border-radius: 9999px), orange primary, dark navy secondary
- Cards: White background, warm sand border (#e8e4de), gently rounded (16px), soft shadow
- Typography: Manrope font family, bold for headers, regular for body, 1.6 line-height
- Shadows: Whisper-soft diffused shadows (0 4px 20px rgba(0,0,0,0.06)) for cards, warm glow (0 0 40px rgba(244,140,37,0.15)) for accents
- Layout: 1200px max-width container, generous whitespace, alternating warm/white/dark sections
- Language: Italian (all text content in Italian)
