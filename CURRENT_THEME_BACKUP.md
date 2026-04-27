# Current Theme Backup

This file captures the pre-rebrand visual tokens currently used across the site.

## Background Colors Used
- `#fbf9f4` - primary site background and several page shells
- `#f5f3ee` - surface background
- `#f0eee9` - container background / hover surface
- `#eae8e3` - elevated container border/surface tone
- `#fdf8f8` - footer background
- `#fff` / `#ffffff` - light section backgrounds and text on dark overlays
- `#000` / `#111111` / `#0d0d0d` - dark hero/video surfaces and media placeholders
- `#1b1c19` - dark section background and base ink tone
- `#e5e2e1` - placeholder/image fallback tone

## Primary / Secondary Text Colors
- `#1b1c19` - primary text and headline color
- `#5e5e5b` - secondary text color
- `#747878` - muted text, navigation links, small labels
- `#a0a09d` - copyright / tertiary text
- `#c4c7c7` - subtle text / outline tone
- `rgba(255,255,255,0.7)` and `rgba(255,255,255,0.6)` - text on transparent or dark sections

## Accent Colors
- The current accent system is mostly monochrome and ink-led
- `#1b1c19` is used as the main accent color for buttons, dividers, and interactive states
- `#ffffff` is used as the inverse hover / contrast accent on dark sections

## Border Colors
- `#e4e2dd` - global border token
- `rgba(28,27,27,0.08)` - soft borders in cards and sections
- `rgba(28,27,27,0.1)` - divider / scrollbar / line accents
- `#ddd` and `#eee` - email/body separators in generated UI or page dividers

## Button Colors
- Primary outline buttons: transparent background, `#1b1c19` border and text
- Primary hover state: `#1b1c19` background with `#fbf9f4` text
- Inverse buttons on dark sections: `#ffffff` border and text
- CTA submit buttons and some section buttons use the same black-on-cream system

## Existing Font Families
- `Manrope` - body / UI / navigation font
- `Noto Serif` - headlines, serif body, and brand text
- `Great Vibes` - decorative footer script wordmark
- `Inter` - some page-level utility text and hero labels
- Fallbacks currently rely on `system-ui`, `Georgia`, and generic serif/sans stacks

## Logo Font Currently Used
- Header logo text currently uses `Noto Serif`
- Footer brand text also uses `Noto Serif`

## Major Spacing / Style Tokens
- `--stack-xl: 160px`
- `--stack-lg: 80px`
- `--stack-md: 40px`
- `--stack-sm: 20px`
- `--gutter: 24px`
- `--margin-x: 5vw`
- `--max-w: 1320px`
- Navigation padding uses `clamp(16px, 4vw, 28px)` / `clamp(16px, 5vw, 40px)`
- Section paddings commonly use `clamp(60px, 12vw, 160px)` and `clamp(80px, 15vw, 160px)`
- Button padding commonly uses `14px 32px` and uppercase letter-spaced labels
- Borders are mostly square / radius 0, with minimal rounding only in some media shells
