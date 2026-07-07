# Design Document — Cybershield

> Source of truth for all visual and structural design decisions.
> Read this fully before making any design change. Update it after every change.

## 1. Brief

- **Subject:** Cybershield — proactive cybersecurity platform (threat hunting, ethical hacking, 24/7 incident response) for SMB and enterprise.
- **Audience:** CTOs, CISOs, and security-aware founders at companies of 5–5000 employees who know they need protection and are shopping for a partner, not a product.
- **Primary goal:** Move a qualified visitor to a threat-assessment conversation (form or hotline call). Trust is the gate; the CTA is the gate's exit.
- **Voice:** Competent, alert, a little bit unsettled. Three adjectives: **confident, deliberate, concrete**.
- **Originality level:** **2 — Detailed** (conventional structure, elevated execution, with one meaningful palette pivot).

## 2. Color tokens

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0a0c10` | Page bg (slightly warmer than pure black) |
| `surface` | `#11141b` | Cards, base panels |
| `surface-raised` | `#1a1f2b` | Hovered/elevated panels, hero CTA card |
| `border` | `#2a3344` | Default hairlines (replaces the previous `border-primary/30` cliché) |
| `border-active` | `#3a4658` | Hover state for borders |
| `calm` | `#7eb6e8` | Primary blue — info, monitoring, links, headings |
| `calm-soft` | `#aacceb` | Subdued text, hovers |
| `alert` | `#ff7a45` | Signal orange — primary CTAs, critical highlights, outcome callouts |
| `alert-soft` | `#ffb288` | Soft fills, hover |
| `ink-text` | `#d8dce4` | Body text |
| `ink-muted` | `#8a93a3` | Secondary text (≥ 5.6:1 contrast on `ink`) |
| `ink-dim` | `#5a6376` | Eyebrows, captions, footers |

**Semantic note:** the two accent colors carry meaning, not just aesthetic. Blue = the steady state (calm, monitoring, OK). Orange = the moment that needs attention (active threat, the single most important action on the page). This matches real security-operations language (info/warning/critical) and breaks the cyan+purple "AI cyber template" trap.

**Contrast (WCAG AA, all on `ink`):**
- `ink-text` → 12.4:1 ✓
- `calm` → 9.1:1 ✓
- `alert` → 7.5:1 ✓
- `ink-muted` → 5.6:1 ✓

## 3. Typography

| Role | Family | Weights | Usage |
|---|---|---|---|
| Body | **Inter** | 400, 500, 600 | All running text. Line-height 1.6 default. |
| Display | **Montserrat** | 600, 700, 800 | Headings. Tracking −0.02em to −0.03em on display sizes. |
| Mono | **JetBrains Mono** | 400, 500 | Eyebrows, data, status lines, code-feel. |

**Type scale** (`clamp()`-based, fluid):
- `display`: `clamp(2.5rem, 5vw + 1rem, 4.5rem)` · 800 · tracking −0.025em
- `h1`:     `clamp(2rem,   3vw + 1rem, 3rem)`     · 700 · tracking −0.02em
- `h2`:     `clamp(1.5rem, 2vw + 0.75rem, 2.25rem)` · 700 · tracking −0.02em
- `h3`:     `1.25rem → 1.5rem` (responsive) · 600
- `h4`:     `1rem → 1.125rem` · 600

**Body weight** moved from previous 300 → **400**. Weight 300 on dark UI is borderline-illegible; this is the single biggest readability fix.

## 4. Spacing & layout

- **Spacing scale:** Tailwind default; section rhythm via three `density` levels (`'airy' | 'normal' | 'tight'`).
- **Container:** `max-w-6xl` (default) · `max-w-7xl` for stats and case-studies (need horizontal room).
- **Section padding:** `py-20 sm:py-28 md:py-32` for `normal` density. (Tighter than the previous `py-16/20/24` — sections now feel deliberate, not cramped.)
- **Grid logic:** intrinsic-first where possible. Service bento uses 1/2/3-col responsive grid. Case studies use 5/7 split (image : content).
- **Radius:** `4px` (sm) / `8px` (card default) / `12px` (panel).
- **Borders:** **default = `border` (quiet grey), never `border-calm/30`**. Calm only appears on hover, alert only on CTAs. This is the single biggest "stopped looking like a template" change.
- **Breakpoints:** mobile-first. Default = mobile. `sm:` 640 · `md:` 768 · `lg:` 1024 · `xl:` 1280.

**Section background rhythm** — each section uses a distinct background, no two adjacent share the same. Repetition is allowed, adjacency is not. The background transition *is* the separator; no hairline needed between sections.

| # | Section | Background / Tone | Why |
|---|---|---|---|
| 1 | Hero | `bg-glow-both` + `bg-grid` in `.bg-fade-bottom` wrapper | signature element + soft fade into next section |
| 2 | Stats | `none` | clean canvas for the "by the numbers" beat — a pause |
| 3 | About | `tone="tinted-calm"`, `bg="none"` | subtle warm tint + top-right calm glow — humanizes the team section |
| 4 | Services | `grid-fine` | thin-line grid, technical rhythm |
| 5 | CaseStudies | `none` | cards are the only visual; photos carry the section |
| 6 | Prices | `tone="tinted-alert"`, `bg="none"` | subtle alert tint + bottom-left glow — ties to "Most popular" urgency |
| 7 | FAQ | `dots` | calm-tinted dot pattern, different motif from `grid-fine` |
| 8 | Contact | `glow-center` | subtle calm radial glow centered on the form — draws eye to input area |
| 9 | Footer | `bg-surface` (status line only) | solid anchor |

## 5. Signature element

**What:** the **refined radar** in the hero — a single thin outer ring with a slowly-sweeping arm, a center crosshair, four calm-blue contact blips, and **one alert-orange blip** ("the active threat") with an outward-ping ring and a docked callout reading `Alert · 4m 12s ago`. Carries the page's semantic palette into the visual *and* tells the story.

**Why:** the previous radar (three concentric pings, no sweep, no semantic color) was the most "AI cyber site" tell in the whole build. The current version is recognizable as a radar but disciplined — one confident color decision per ring, the orange blip is the only "look at me" mark, and the callout turns the visual into a status readout. The page's two semantic colors (calm + alert) are now both *doing work* on the radar.

**Where it appears:** hero (desktop right column, mobile below the CTAs — the callout is hidden on mobile to avoid overflow on the smaller radar). Repeated nowhere else, but the **single orange blip** echoes in the status ticker dot, the alert CTAs, the callout, the ping ring, and the case-study outcome numbers — the "alert" semantic runs through the whole site, the radar is just its most visible expression.

## 6. Motion

- **Reveal-on-scroll:** 12px translateY · 500ms ease-out · staggered up to 200ms. Wrapped in `prefers-reduced-motion` guard.
- **Button hover:** 200ms color shift + 1px translateY (was: no translate, weightless). Tactile without being noisy.
- **Hero radar:** slow 6s rotation, 4s blip-fade, 2s alert-pulse. `prefers-reduced-motion` disables all of it.
- **Status ticker dot:** 1.6s pulse. Always-on, but barely-there.
- **Glance at the page and the only movement is the radar + the dot in the ticker.** Everything else is static on arrival.

## 7. Component conventions

- Atoms in `components/ui/`, sections in `components/sections/`, layout in `components/layout/`, nav in `components/nav/`. Pages compose sections, sections compose UI atoms. `TrustedBy` lives in `ui/` (it's a small element, not a page section).
- Variants via props (`<Button variant="cta" | "info" | "primary" | "outline" | "ghost">`), not duplicated components.
- **All color values come from tokens.** No inline hex literals except the `<meta name="theme-color">` (which has to be a literal).
- **Glass effect is reserved for hero / CTA panels only.** Most cards use a flat `bg-surface` + `border-border`. The previous "every card is glass" was the #1 reason the page read as a wall of blur.
- **Service icons** are FontAwesome (monochromatic, `text-calm`). The previous multi-color PNG service icons were a template tell.

## 8. Copy voice

- Sentence case everywhere. No all-caps section headers.
- Active verbs on buttons ("Get a threat assessment", "Send message"). Never "Submit".
- Specific over clever: "4-hour response" beats "rapid response"; "−78% security incidents in year one" beats "transformative results".
- The single biggest headline rewrite: **"Security that thinks ahead of the threat"** → **"We stop the breach your firewall won't see."** (with "won't see." as an italic + gradient moment).
- The `//` in the eyebrows is intentional — reads as a "comment marker" in code, ties to the mono typography. Stays.
- Footer credit line: "All systems nominal." stays — it's earned.

## 9. Decision log

| Date | Decision | Rationale |
|---|---|---|
| 2026-07-06 | **Initial design system created.** Pivot from `#78bbed`/`#b878ed` (cyan + purple — the AI cyber cliché) to `#7eb6e8` (calm) + `#ff7a45` (alert) with semantic role split. | The previous palette was the most "AI default cyber site" look on the web. Two colors with semantic meaning (info / critical) replace them and break the template. |
| 2026-07-06 | **Default border changed from `border-primary/30` to `border` (quiet grey).** | Constant primary-tinted borders were the #1 reason the page read as a template. Calm only shows on hover, alert only on CTAs. |
| 2026-07-06 | **Body font: Roboto 300 → Inter 400.** | Roboto at weight 300 on dark UI was borderline-illegible. Inter at 400 is a clarity win and reads more modern. |
| 2026-07-06 | **Type scale tightened** with `clamp()` and a `display` size up to `4.5rem` with tracking −0.025em. | Previous scale used Tailwind defaults and didn't have enough personality at the top. The new display size is the page's single biggest visual moment. |
| 2026-07-06 | **Hero headline rewritten.** "Security that thinks ahead of the threat" → "We stop the breach your firewall won't see." | The original is generic SaaS copy. The new line is specific to the subject, sets up the "won't see." italic moment, and signals "we know what firewalls miss" expertise. |
| 2026-07-06 | **Hero visual: refined radar replaces three-ring pings.** Single outer ring, single sweeping arm, four calm blips, one alert blip. | Three concentric pings was the most-recognizable "AI cyber radar" trope. The refined version is more sophisticated and carries the page's semantic palette. |
| 2026-07-06 | **Stats: 1+3 layout replaces 4-equal-cards.** One hero stat (12.84M+ threats blocked) in alert tone, three smaller stats stacked on the right. | 4-equal-cards is the most generic stat layout. 1+3 gives rhythm and lets the headline number carry the section. |
| 2026-07-06 | **Case studies: 2-col spread with big-number outcome callouts replaces accordion.** | Accordions are functional but visually flat. The spread layout lets the dramatic stats (`−78%`, `0`, `−99.7%`) do the talking. |
| 2026-07-06 | **Services: 3-col bento with tier hints replaces 4-col bento.** | 4-col was the densest template look. 3-col is more editorial. Tier hints ("Included in Pro" / "Enterprise" / "Add-on") give the section real depth. |
| 2026-07-06 | **Prices: emerald checkmarks replaced with semantic `calm` / `ink-dim`.** | Emerald was a third color doing nothing. Collapsing to the two-color system is cleaner and the new tone fits the rest of the site. |
| 2026-07-06 | **Contact: added "What happens next" sidebar with 3 numbered steps.** | Form alone is a dead end. The sidebar tells the visitor exactly what happens after they send — concrete, specific, removes anxiety. |
| 2026-07-06 | **Footer: 3-col layout with status line + CTA card.** | Previous 4-col was plain. New layout: brand + links + "Active incident?" CTA card. Status line at top reinforces the security-ops identity. |
| 2026-07-06 | **Button hover: added 1px translateY.** | Previous buttons were weightless (no movement). 1px translate makes them feel tactile without being noisy. |
| 2026-07-06 | **Reveal animation: 16px → 12px, 600ms → 500ms.** | The original felt floaty. The new version is confident. |
| 2026-07-06 | **Card: new tones `subtle` / `subtle-strong`; `glass` reserved for hero/CTA panels only.** | Every card being glass was why the page read as a blur. Flat surface + quiet border lets the actual content lead. |
| 2026-07-06 | **Hero: trusted-by strip added above the headline.** Five placeholder wordmarks (Meridian, Vertex, Halcyon, Northwind, Stratos) in `text-ink-muted` display weight, edge-faded with a CSS mask. | B2B security audience buys on trust; the hero previously had no social proof above the fold. Edge fade (`mask-image` linear-gradient) keeps the strip from feeling like a hard list. |
| 2026-07-06 | **Hero: secondary CTA changed from "See our work" to "Call our 24/7 hotline"** with a `fa-phone` icon and `tel:` link sourced from `data/contacts.json`. | Differentiates the page from every other B2B cyber site. The phone-call action is the highest-urgency conversion a CISO audience has — it matches the "Active incident?" card in the footer. |
| 2026-07-06 | **Hero radar: alert blip callout added.** Small mono pill ("Alert · 4m 12s ago") anchored right-edge at 60% horizontal, vertically aligned with the blip at 57%. Hidden on mobile (`hidden lg:flex`). Dashed alert-colored connector line in the SVG ties it to the blip. | The radar was *purely* decorative — the most-recognizable visual on the page doing zero semantic work. The callout turns "there's an orange dot" into "an alert was detected 4m 12s ago" — the story the visitor was always meant to read. |
| 2026-07-06 | **Hero radar: alert blip now has an outward-ping ring** (`scale(0.5) → scale(2.4)`, fade to 0, 2.5s loop, `prefers-reduced-motion` respected). Uses the existing `radar-ping` keyframe intent in `tailwind.config.cjs` but defined locally for reliability. | The static "alert ring" at r=14 read as a single mark. The ping adds liveness without making the radar noisy — the only "look at me" element on the page still has only one ring's worth of attention. |
| 2026-07-06 | **Hero → Stats transition softened.** The Hero's two background divs (glow + grid) are now wrapped in a `.bg-fade-bottom` container with a CSS `mask-image: linear-gradient(to bottom, black 0%, black 65%, transparent 100%)`. | The alert glow in `bg-glow-both` is centered at the bottom-left corner (`0% 100%`) and still has full color where the section is clipped — creating a hard horizontal line where the Hero met the Stats section. Masking only the background (not the content) fades the glow smoothly to transparent before the section's edge while keeping the text, buttons, StatusTicker, and scroll hint fully visible. New `.bg-fade-bottom` utility is reusable for any future section that needs the same soft transition. |
| 2026-07-06 | **Section separators removed; each section now has a distinct background.** Removed all `divider="top\|bottom\|both"` and `separator` props across sections. Assigned a unique background or tone to each: Stats `none` · About `tinted-calm` · Services `grid-fine` · CaseStudies `none` · Prices `tinted-alert` · FAQ `dots` · Contact `glow-center`. No two adjacent sections share the same background. | The previous 1px hairlines (both `divider-top`/`divider-bottom` pseudo-elements and the `<Separator />` `<hr>`) were stacked between every section — the `<hr>` was inheriting `ink-text` color at full opacity from the body, which read as a hard light-gray line on the dark background. With differentiated backgrounds, the background transition *is* the separator. Repetition is allowed (`none` appears in Stats and CaseStudies) but never between adjacent sections. The `.divider-top` / `.divider-bottom` CSS rules stay in the file unused, so a future section that needs a faint hairline can opt back in. |
| 2026-07-06 | **Contact form restructured: name/email/phone each on its own line; textarea grows to fill the form.** Removed the `sm:grid-cols-2` wrapper around name + email. Added `flex flex-col flex-1 gap-5` to the `<form>` and `flex flex-col` to the wrapping `<Card>` so the form stretches to match the sidebar. Added a `grow` prop to `FormField` that gives the wrapper `flex-1 min-h-0` and the textarea `flex-1 min-h-[180px]`. The submit row gets `mt-auto` so the privacy text + button pin to the bottom. | Name + email side-by-side in a 2-col grid was a leftover from a denser form layout — for a sales-contact form, vertical stacking reads as more deliberate and gives each field full width. The textarea was fixed at `rows={6}` regardless of how much vertical space the form had; making it grow to fill the available card height (matching the sidebar's NextSteps card) eliminates the visual imbalance between the form and the sidebar. The `min-h-0` on the wrapper is critical — without it, the textarea's `min-h-[180px]` would prevent the flex item from shrinking and the form would overflow the card. |
| 2026-07-06 | **Case studies: client profile moved out of the image overlay into a solid panel below the image.** The left column is now `flex flex-col` with the image as a pure visual (no text overlay, no `bg-image-fade-strong` gradient) on top, and a `bg-surface-raised` solid panel below containing the industry badge, client name, and metadata. The image is now `lg:flex-1` so it fills the remaining column height above the profile panel. | The photographs (sunset glass facade, data center, hospital) are high-luminance and high-detail. The 80% ink gradient overlay at the bottom of each image was darkening the parking lot / foreground enough to make the text *technically* readable, but the eye was being pulled to the bright building / sky above — and the small metadata line (`Size: Medium · Employees: 500 · Annual Revenue: $100M`) was especially hard to read. Moving the text into a solid `bg-surface-raised` panel (#1a1f2b) guarantees readable contrast regardless of the photo, and the image is now purely visual. The 5/7 grid split and right-column content (title, outcome, challenge, solution) are unchanged. |
| 2026-07-06 | **Section transitions softened in two passes.** **Pass 1 (quieter patterns):** reduced the opacity of the three loudest background utilities — `bg-grid-fine` 1.0 → 0.5 (Services), `bg-dots` 0.18 → 0.12 (FAQ), `bg-glow-center` 0.08 → 0.05 (Contact). This narrows the intensity range across the page so no single background dominates. **Pass 2 (feathered edges):** added a `.section-fade-edges::before` rule in `global.css` that overlays a 50% `ink` → transparent → 50% `ink` gradient at the top 10% and bottom 10% of each section. The Section component was updated with an `edgeFade` prop (default `true`) that adds the class, and the slot is now wrapped in a `<div class="relative z-10">` so the content sits above the `::before` overlay without being dimmed. | Differentiated backgrounds were the right call, but the boundaries were still reading as hard lines — especially around `grid-fine` (full-opacity border lines adjacent to `none` pure-ink sections). The two-pass approach addresses both causes: the opacity reduction shrinks the *intensity* gap between backgrounds, and the feathered edges replace the hard *boundary* with a 10%-of-section gradient that blends the background into `ink` on both sides. The `::before` uses `pointer-events: none` and sits at `z-index: 0`; the content wrapper at `z-index: 10` is above it. The Hero (custom `<section>`, not the `Section` component) is unaffected — it already has its own `.bg-fade-bottom` on the background wrapper from a previous fix. The `edgeFade` prop defaults to `true`; a future section can pass `edgeFade={false}` to opt out. |
| 2026-07-06 | **Grid backgrounds made nearly invisible.** `bg-grid-fine` opacity 0.5 → 0.10. `bg-dots` opacity 0.12 → 0.07. Non-uniform sizes (47×53, 23×29) and offsets (13px 7px, 5px 11px) retained. | The previous attempts (offset-only, then non-uniform sizes, then noise replacement) all failed. The root cause was that the patterns were *visible enough to read as a grid* — once visible, the eye finds the alignment with the layout no matter what size or offset. The actual fix is to drop the opacity below the threshold where the pattern reads as "a grid" and starts reading as "subtle texture." At 0.10 (grid-fine) and 0.07 (dots), the pattern is present as a quiet textural field but the individual lines/dots are not perceptible as repeating elements, so there's nothing for the eye to align with the layout. The noise replacement was wrong — it broke the design's character (Services is a "structured/technical" section; the grid texture was part of that). The grid utilities stay available for any future section that *wants* a visible structured background. |

## Appendix: previous direction (archived)

For reference, the pre-refresh design (kept for diff-ability, not active):
- Palette: `#080a10` ink · `#78bbed` primary · `#b878ed` accent · `#e9e9e9` font
- Type: Roboto 300/400 · Montserrat 500–800 · JetBrains Mono 400/500
- Hero: "Security that thinks ahead of the threat" · 3-ring radar · gradient CTA button
- Cards: glass-morphism on every card
- Borders: `border-primary/30` everywhere

These are superseded by the current direction above.
