# Modern Tech Esthetic — Design System

A brand system for **Modern Tech Esthetic**: precision-object product marketing. Cool graphite neutrals, oversized tightly-tracked grotesk headlines, technical monospace metadata, product photography treated as the hero, and exactly one saturated accent per view.

## Sources

Everything here was derived from three reference comps the user uploaded. No codebase, Figma file, repository, brand guide, or logo was provided.

| File | What it shows |
|---|---|
| `uploads/Social Media Design - Smartphone.jfif` | 9:16 dark social poster — "Assistência técnica especializada." Full-bleed macro product photo, bottom scrim, light/black weight pairing, vertical mono rail, black footer bar with three mono credits (DAM ALBERT / 2K26 / IMPORTS). |
| `uploads/download (1).jfif` | Light editorial spec sheet (Braun Super 8 / Nizo 2056). Acid-yellow highlight markers, crosshair registration marks, left-ruled mono spec table, small-body multi-column copy, highlighted price block. |
| `uploads/1141381099327567787.jfif` | Light commerce hero ("Skot." electric moped). Soft grey slab with 32px corners, pill glass nav, floating product cards, oversized grotesk headline, social-proof cluster, red brand mark. |

**No logo was supplied**, so none was drawn. Wherever a mark would sit, the system sets the brand name in the display face (see `thumbnail.html`). The "Skot." mark in the storefront UI kit is a recreation of the reference comp's own placeholder wordmark, not a Modern Tech Esthetic logo.

## Content fundamentals

**Voice.** Declarative and specification-like. The brand states what a thing *is* and what it *does*, then stops. No persuasion verbs, no hype adjectives, no second-person coaching.

- Headlines are noun phrases or short declaratives, frequently a two-line pair where the second line carries the weight and the full stop: *"Assistência técnica / **especializada.**"*, *"Super fast / electric Moped"*, *"Really / Precision"*, *"Braun® Iconic / Quality"*.
- Body copy is factual and unhurried, 1–3 sentences, often technical: *"Officially the UK's No.1 selling moped. This 50cc Panther moped is agile and ready to strike."*
- Person: mostly impersonal third person about the object. First-person plural appears only for services the company performs — *"Atendemos qualquer modelo"*, *"We reply within one working day"*. Second person is rare and only in forms.
- **Casing.** Sentence case for headlines and body. UPPERCASE for every piece of mono metadata — labels, spec keys, footers, credits, form labels. Never title case.
- **Punctuation.** Terminal full stops on headline pairs are a deliberate device, not an accident. Registered marks are kept (`Braun®`, `Variogon®`, `Nizo 2056™`). Numbers stay in their native format (`1,4 / 7 – 56 mm`, `359.99 USD`, `2K26`).
- **Metadata copy** reads like a print colophon: creator, year, category — `DAM ALBERT · 2K26 · IMPORTS`, `Ref. 2056 / 3056`, `ITEM NUMBER: 402798193623`.
- **No emoji.** Anywhere. Small unicode marks that read as typographic furniture are allowed: `+` registration crosses, `·` separators, `×` for dismiss, `★` in a rating cluster, `→`/`↗` only when an icon isn't available.
- Numerals over words ("10k+ positive reviews", "48h", "36 months"). Prices are set in the display face; units in mono.
- Avoid: exclamation marks, "unlock/elevate/seamless", rhetorical questions, "Let's", CTA copy longer than three words ("Book now", "View model", "Add to cart", "Contact us").

## Visual foundations

**Colour.** A single cool graphite ramp (`--ink-000` → `--ink-950`) carries essentially the whole interface; the base neutral is `#f6f7f8` in light and `#08090a` in dark. Two saturated accents exist and are used sparingly: **acid yellow** `--acid-400 #ecff4a` as a marker-pen highlight (a year, a price, a single CTA) and **signal red** `--signal-500 #e5341f` for brand marks and alerts. Status colours appear only in feedback. At most one accent object per view — the accent is a pointer, not decoration. Never gradients as brand colour; the only gradients in the system are photographic scrims and placeholder fills.

**Type.** One grotesk for everything visible (`Archivo`) plus one monospace for metadata (`JetBrains Mono`). Display sizes run 40–112px at `-3.5%` tracking and `0.94` leading — always tighter than default. Weight contrast inside a single headline (regular line + 800 line) is the signature move. Body is 15/1.5 at a 62-character measure; editorial body drops to 11.5–13px in narrow columns. Mono is always uppercase with 12–18% tracking, 9–13px.

**Spacing & layout.** A 2/4/8/12/16/20/24/32/40/56/80/120 scale. Page padding 40–56px. Content is framed inside a rounded slab (radius 32) rather than running to the browser edge on marketing surfaces. Fixed elements: a sticky glass top bar, a vertical mono rail hugging the left margin, and a footer strip of three mono credits (left / centre / right). Crosshair `+` registration marks sit in the margins of editorial layouts as pure print reference.

**Backgrounds & imagery.** Never a flat brand colour behind content. Light surfaces are near-white to `--ink-100`; dark surfaces are near-black with a subtle directional falloff (as photographed studio sweep, not a colour gradient). Imagery is cool-toned, high-key studio product photography — either a cut-out object floating on a soft grey slab, or a full-bleed macro crop on near-black. No warm grading, no grain, no illustration, no stock people. Occasional circular crops for macro details.

**Protection.** Text over photography sits on `--scrim-bottom` (an ink gradient to 88%), never on a tinted capsule. Floating chrome over photography uses glass instead: `rgba(255,255,255,.10)` + `blur(18px)` + a `rgba(255,255,255,.14)` hairline. Blur is used only for this and for modal scrims.

**Corners & cards.** Controls are fully pill (`999px`). Cards are 20px, slabs 32px, images inside cards 12px, mono chips 3px. Cards carry a shadow, not a border — `--shadow-2` (`0 6px 18px -6px`) for resting cards, `--shadow-3` for floating panels, `--shadow-lift` for modals. A hairline (`inset 0 0 0 1px`) replaces shadow only on flat, inline cards. No inner shadows anywhere. No coloured left borders.

**Borders.** `--line-hairline` (`#d9dcde`) for structure, `--line-strong` (ink 950) for emphasis and secondary-button outlines. Rules are always 1px; the spec table's left rule and the MonoLabel's 24px lead rule are the two decorative uses.

**Motion.** Short and mechanical. `cubic-bezier(.2,0,0,1)` for everything; 140ms hover, 220ms state change, 420ms panel, 700ms scroll reveal (fade + 12px rise). No bounce, no spring, no parallax, no looping ambient animation.

**States.** Hover changes *colour*, never opacity — primary ink lightens to `--ink-700`, accent darkens to `--acid-600`, secondary inverts to solid ink, ghost picks up `--surface-sunken`, interactive cards lift 2px and deepen their shadow. Press is a uniform `scale(0.97)`. Focus is a 2px ink outline at 2px offset (acid yellow in dark theme). Disabled is 38% opacity with no cursor.

## Iconography

**Lucide** (CDN, `unpkg.com/lucide@0.454.0`), stroke 1.75 at 18–20px, 1.5 above 32px, `currentColor`, square caps. **This is a substitution and is flagged:** the reference comps contain no icon set of their own — only third-party brand logos (Samsung, Apple, Android, Xiaomi, Motorola) that cannot be redistributed here, and a few UI glyphs (search, cart, moon, arrow-up-right) whose weight and geometry Lucide matches closely. If you have the real icon set, drop it in `assets/icons/` and repoint `components/core/Icon.jsx`.

Rules: one family only, never mixed; icons are always paired with a label or an `aria-label`; never used decoratively inside body copy; never coloured except to inherit text colour; no filled glyphs. Diagonal `arrow-up-right` is the house "go" arrow. Emoji are never used. Unicode is limited to typographic furniture (`+`, `·`, `×`, `★`).

No logos, illustrations or photography ship in `assets/` — none were provided and none were invented. Placeholder blocks in the UI kits mark every spot real imagery belongs.

## Index

- `styles.css` — the single entry point; imports everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`
- `components/components.css` — component class layer (`.mte-*`)
- `guidelines/` — 15 foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/storefront/` — light commerce site, click-through
- `ui_kits/campaign/` — editorial spec page + dark social posters
- `SKILL.md` — Agent Skills entry point
- `thumbnail.html` — homepage tile

### Components

**core** — Button, IconButton, Icon, Card, Badge, Tag
**forms** — Field, Input, Select, Checkbox, Radio, Switch
**navigation** — Tabs
**feedback** — Dialog, Tooltip
**brand** — MonoLabel, SpecList

### Intentional additions

- **Icon** — thin wrapper over the Lucide CDN set, so consumers have one call site to repoint if the real icon set arrives.
- **MonoLabel** and **SpecList** — not "standard" primitives, but the mono margin caption and the left-ruled spec table appear in all three reference comps and are the most recognisable parts of the brand.
- **Field** — label/hint/error shell, so the mono uppercase label treatment is consistent across form controls.

### Substitutions to confirm

- **Fonts.** No font files were supplied. `Archivo` (Google Fonts) stands in for the neutral grotesk in the comps; `JetBrains Mono` stands in for the technical mono. Both load from the Google Fonts CDN — there are no `@font-face` binaries in this project. Send the real files and they'll be swapped in.
- **Icons.** Lucide, as described above.
- **Imagery.** All placeholders.
