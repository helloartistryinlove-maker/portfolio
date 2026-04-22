HomePage 

---
name: Artistry in Love
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#221a11'
  on-tertiary-container: '#8f8274'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#f0e0d0'
  tertiary-fixed-dim: '#d3c4b5'
  on-tertiary-fixed: '#221a11'
  on-tertiary-fixed-variant: '#4f453a'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-display:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  margin-edge: 5vw
  gutter: 24px
  stack-xl: 160px
  stack-lg: 80px
  stack-md: 40px
  stack-sm: 20px
---

## Brand & Style

The design system is rooted in the philosophy of "Luxury through Restraint." It positions photography as high art, evoking an emotional response that is both cinematic and timeless. The target audience consists of discerning couples and planners who value storytelling and editorial quality over traditional wedding tropes.

The style is a blend of **Minimalism** and **Cinematic Editorial**. It prioritizes vast amounts of whitespace—referred to here as "breathable luxury"—to allow high-resolution imagery to serve as the primary structural element. The aesthetic mimics the layout of a premium fashion magazine, utilizing asymmetric balance and rigid alignment to create a sense of intentionality and quiet confidence.

## Colors

The palette is anchored by **Warm Ivory** (#F9F7F2), providing a softer, more organic foundation than pure white, which can feel clinical. **Charcoal** (#1A1A1A) is used for typography and structural lines to maintain high legibility and a grounding presence. 

**Muted Taupe** and a secondary metallic-leaning taupe are used for subtle UI accents, such as dividers and hover states, ensuring that the interface never distracts from the photography. This monochromatic-adjacent approach ensures that the vibrant colors within the photographs remain the focal point of the user experience.

## Typography

This design system employs a high-contrast typographic pairing to establish an editorial hierarchy. **Noto Serif** serves as the headline face; its classic, refined proportions evoke the feeling of a masthead. Large display sizes should be used with tight leading to create a "composed" look.

**Manrope** provides a modern, functional counterpoint for body copy and navigation. For labels and small metadata, Manrope is used in uppercase with generous letter spacing to mimic the captions found in luxury art books. Bold weights should be used sparingly, reserved primarily for functional labels.

## Layout & Spacing

The layout utilizes a **Fixed 12-column grid** centered within a fluid container that maintains wide horizontal margins (5vw). This ensures the content feels framed like a piece of art. 

The vertical spacing rhythm is intentionally oversized. Sections are separated by significant "stack" intervals (up to 160px) to force a slower, more deliberate scrolling experience. Imagery should frequently break the grid—for example, a vertical portrait might span 5 columns while leaving 7 columns of whitespace—to create an asymmetrical, cinematic composition.

## Elevation & Depth

To maintain the "clean luxury" aesthetic, this design system avoids traditional drop shadows and heavy blurs. Depth is achieved through **Tonal Layers** and **Rigid Overlays**. 

Elements like navigation bars or image captions use a subtle "Surface-on-Surface" approach, where a slightly different neutral shade defines the boundary. When depth is required (such as in a mobile menu), a solid-color flat overlay is preferred over transparency. Fine, 1px charcoal or taupe borders are used for functional separation, reinforcing the grid-based, architectural feel of the interface.

## Shapes

The design system uses a **Sharp (0px)** roundedness profile. In the world of high-end editorial design, crisp corners convey precision, modernism, and a connection to physical print media. 

Every UI element—including buttons, input fields, and image containers—must maintain these hard edges. This geometric rigidity provides a sophisticated contrast to the fluid, organic shapes often found in the photography (such as fabrics, landscapes, and human forms).

## Components

### Buttons
Buttons are strictly minimal. The primary style is a "Ghost Button" with a 1px Charcoal border and sharp corners. The secondary style is a text-only link with a 1px underline that extends on hover. Animation should be slow and graceful, likely a simple color fade or a subtle width expansion of the underline.

### Inputs & Forms
Input fields consist of a single bottom border (1px Charcoal) and a floating label in `label-sm` typography. This mimics the look of a premium stationery set or a gallery guestbook.

### Cards & Gallery Elements
Gallery items are "Full-Bleed Cards" where the image fills the entire container. Titles and metadata should appear either below the image in a minimalist stack or as a clean, sharp-edged overlay that appears only on interaction.

### Navigation
The navigation bar should be sparse, with links tucked into a high-contrast "Menu" label or spread across the top with significant tracking. It should feel like a table of contents rather than a functional utility bar.

### Additional Components
- **Cinematic Scroller:** A horizontal-scroll section for viewing wide-format "hero" shots.
- **Editorial Quote:** A large-scale quote component using `headline-display` typography with a signature-style attribution.


Code- <!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&amp;family=Noto+Serif:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "tertiary-fixed-dim": "#d3c4b5",
                    "on-secondary": "#ffffff",
                    "surface": "#fbf9f4",
                    "on-error": "#ffffff",
                    "surface-container-high": "#eae8e3",
                    "error-container": "#ffdad6",
                    "surface-container-lowest": "#ffffff",
                    "primary-container": "#1c1b1b",
                    "surface-dim": "#dbdad5",
                    "on-secondary-fixed": "#1b1c1c",
                    "surface-variant": "#e4e2dd",
                    "on-tertiary-fixed-variant": "#4f453a",
                    "tertiary": "#000000",
                    "surface-container-highest": "#e4e2dd",
                    "on-primary": "#ffffff",
                    "on-tertiary-fixed": "#221a11",
                    "secondary-fixed-dim": "#c7c6c6",
                    "primary": "#000000",
                    "inverse-on-surface": "#f2f1ec",
                    "inverse-surface": "#30312e",
                    "primary-fixed-dim": "#c8c6c5",
                    "on-primary-container": "#858383",
                    "on-secondary-fixed-variant": "#464747",
                    "outline-variant": "#c4c7c7",
                    "surface-container-low": "#f5f3ee",
                    "surface-bright": "#fbf9f4",
                    "error": "#ba1a1a",
                    "secondary-fixed": "#e3e2e2",
                    "on-tertiary": "#ffffff",
                    "primary-fixed": "#e5e2e1",
                    "secondary": "#5e5e5e",
                    "on-surface-variant": "#444748",
                    "tertiary-fixed": "#f0e0d0",
                    "outline": "#747878",
                    "inverse-primary": "#c8c6c5",
                    "on-tertiary-container": "#8f8274",
                    "surface-tint": "#5f5e5e",
                    "surface-container": "#f0eee9",
                    "on-secondary-container": "#646464",
                    "on-error-container": "#93000a",
                    "background": "#fbf9f4",
                    "on-primary-fixed-variant": "#474746",
                    "tertiary-container": "#221a11",
                    "on-surface": "#1b1c19",
                    "on-background": "#1b1c19",
                    "on-primary-fixed": "#1c1b1b",
                    "secondary-container": "#e3e2e2"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-xl": "160px",
                    "stack-md": "40px",
                    "gutter": "24px",
                    "stack-lg": "80px",
                    "margin-edge": "5vw",
                    "stack-sm": "20px"
            },
            "fontFamily": {
                    "body-md": ["Manrope"],
                    "label-sm": ["Manrope"],
                    "body-lg": ["Manrope"],
                    "headline-lg": ["Noto Serif"],
                    "headline-display": ["Noto Serif"],
                    "headline-md": ["Noto Serif"]
            },
            "fontSize": {
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.15em", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-lg": ["40px", {"lineHeight": "1.2", "fontWeight": "400"}],
                    "headline-display": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .hero-gradient {
            background: linear-gradient(to bottom, rgba(27, 28, 25, 0.4), rgba(27, 28, 25, 0));
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md antialiased">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/90 dark:bg-stone-950/90 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800 flex justify-between items-center px-[5vw] py-8">
<div class="font-serif text-2xl tracking-tighter text-stone-900 dark:text-stone-50">Artistry in Love</div>
<div class="hidden md:flex items-center space-x-12">
<a class="font-serif tracking-[0.2em] uppercase text-xs text-stone-900 dark:text-stone-50 border-b border-stone-900 dark:border-stone-50 pb-1" href="#">Home</a>
<a class="font-serif tracking-[0.2em] uppercase text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors duration-500" href="#">Films</a>
<a class="font-serif tracking-[0.2em] uppercase text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors duration-500" href="#">Blogs</a>
<a class="font-serif tracking-[0.2em] uppercase text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors duration-500" href="#">Testimonials</a>
<a class="font-serif tracking-[0.2em] uppercase text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors duration-500" href="#">Contact</a>
<a class="font-serif tracking-[0.2em] uppercase text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors duration-500" href="#">Careers</a>
</div>
<button class="font-serif tracking-[0.2em] uppercase text-xs px-6 py-2 border border-stone-900 dark:border-stone-50 text-stone-900 dark:text-stone-50 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-950 transition-all duration-500">
            Inquire
        </button>
</nav>
<main>
<!-- Hero Section -->
<section class="relative h-screen w-full overflow-hidden">
<div class="absolute inset-0 z-0">
<img alt="Cinematic wedding hero" class="w-full h-full object-cover" data-alt="Cinematic high-contrast black and white shot of a couple embracing in a grand marble hallway with soft natural window light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeyYpvNhLWfwrIJbEWJ-ghhakGgm-_xP6EcCOviXAdEx_ZpV38ziYERdswmu5rha3a6gtaEy-bblCKo5T_wkP4IjvA9_bI92lhOtcGlfLX2bszZNandvsBPR7UNLo4BiGOGaw88yllytkAE8TwBQiI4F57nGFKij9JKt5aWc1g4Syo7YsZ11IkRtohFvBWl-2ogPcCQ7mgNH7jndZjgrTUNjhXUylCHBy5bwvbE_AfUPYoSBD6lLp4bcOQSxoQ4WYLjoqAy-lOqo5l"/>
<div class="absolute inset-0 bg-stone-900/30"></div>
</div>
<div class="relative z-10 h-full flex flex-col justify-center px-[5vw]">
<div class="max-w-4xl">
<span class="font-label-sm text-white mb-6 block">ESTABLISHED MMXXIV</span>
<h1 class="font-headline-display text-white mb-8">Capturing the quiet <br/><span class="italic">architecture</span> of emotion.</h1>
<div class="flex items-center space-x-8">
<a class="font-label-sm text-white group flex items-center" href="#portfolio">
                            VIEW THE FILMS
                            <span class="ml-4 h-[1px] w-12 bg-white group-hover:w-20 transition-all duration-700"></span>
</a>
</div>
</div>
</div>
<div class="absolute bottom-10 left-[5vw] z-10">
<div class="flex flex-col space-y-2">
<span class="font-label-sm text-white/60">CURRENTLY FILMING</span>
<span class="font-label-sm text-white">LAKE COMO, ITALY</span>
</div>
</div>
</section>
<!-- Cinematic Scroller / Introduction -->
<section class="py-stack-xl px-[5vw] grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div class="md:col-span-5 mb-12 md:mb-0">
<h2 class="font-headline-lg text-primary mb-8">A legacy defined by what is <span class="italic font-serif">felt</span>, not just seen.</h2>
<p class="font-body-lg text-secondary max-w-md">We specialize in editorial wedding cinema for those who value the intentional, the understated, and the timeless. Our approach is observational, preserving the raw honesty of your celebration.</p>
<div class="mt-12">
<a class="font-label-sm text-primary underline underline-offset-8 decoration-stone-300 hover:decoration-stone-900 transition-all duration-500" href="#">OUR PHILOSOPHY</a>
</div>
</div>
<div class="md:col-span-6 md:col-start-7">
<div class="aspect-[4/5] overflow-hidden border border-stone-200">
<img alt="Editorial wedding portrait" class="w-full h-full object-cover grayscale" data-alt="Minimalist editorial photography of a wedding dress hanging against a stark white textured wall with dramatic morning shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAubkwzdjWRKeW_YYZgyR84Lj2YmJl8r3Z-aaeeN7wIUE9yAJHg8-wX_5NQeuj07Iu6OKy2f3KsuR6JCmq1u3i3YzNKHINK9UbcBYMaZfw1Cw6ZUBJ3C36pLu7AtbJSvfgW9bYGQusQU7AgI8H_EyI1CY0gnr_m8cZFHTSxGmev7p6Q_fyum5E4-q9P6fhOE3wisT3LZhNYJu6Urplzzq9ny65NYpJ3DUPM9E4MPH_WiAJg2skP-GIIfYn5YTrhYZXBfCOCmsEI3JZ"/>
</div>
</div>
</section>
<!-- Featured Portfolio Bento Grid -->
<section class="bg-stone-50 py-stack-xl px-[5vw]" id="portfolio">
<div class="mb-stack-lg flex justify-between items-end">
<div>
<span class="font-label-sm text-stone-400 block mb-4">SELECTED WORKS</span>
<h2 class="font-headline-display text-primary">The Portfolio</h2>
</div>
<a class="font-label-sm text-primary border-b border-primary pb-1" href="#">VIEW ALL FILMS</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
<!-- Large Item -->
<div class="md:col-span-8 group cursor-pointer">
<div class="aspect-[16/9] overflow-hidden relative mb-4">
<img alt="Amalfi Coast Wedding" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Aerial wide shot of a luxury wedding ceremony set on a cliffside overlooking the azure waters of the Amalfi Coast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKKIJOmgGOYEnh5neQwZTKvIgxRnW7XO9JdeYJzqnUStzvJDON3EsvQtmcvjh_mhwcmEBJBf2lTrbbjRMUU7betfpdi6jelg1dHLcUdtaRHrSEXUTopbNdoTkrysb2ZxMAAFyX96D_279-ZnLvfk7rLqSSVXrmD0eVtjgHQHA6VNNeTz2glNp7s_z_tBes_kYrlCznT8YNy1bTO26h-VDC4Z_UEe-88iifX9bmDmLjR2mTm06PTsOAHCszIuGyTd_wzVR1C5ncM7W"/>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
<span class="material-symbols-outlined text-white text-6xl">play_circle</span>
</div>
</div>
<div class="flex justify-between items-center">
<h3 class="font-headline-md italic">Sienna &amp; Alessandro</h3>
<span class="font-label-sm text-stone-400">AMALFI, ITALY</span>
</div>
</div>
<!-- Vertical Item -->
<div class="md:col-span-4 group cursor-pointer">
<div class="aspect-[3/4] overflow-hidden relative mb-4">
<img alt="Paris Elopement" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Candid portrait of a couple in a vintage car driving through the streets of Paris at dusk, soft city lights blurring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ToqtMwu-bihIn6H38UBrHFx3mTnAFC_SGi8fycPegF3KKpzQW416xq9TfHsSl7pPn9IWuDVFCbkuP252TBZz7NOKxg9E1qzNCcc5IGv6hFEiZ-3EBdadZIiWGUBKd8JC48h96TH8cAzDbNgHiLM0819sH5xv458vFKJLYEt6WdvZFPMrnrnqm6bHrMulXNPG9K1u7HAGkz3OxfHZxSgYR-2KXFWnSU5hl7191mhFcFd8nLvBMGaThsM2Qr5BT-BOxXPqEO6gph0R"/>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
<span class="material-symbols-outlined text-white text-6xl">play_circle</span>
</div>
</div>
<div class="flex justify-between items-center">
<h3 class="font-headline-md italic">Chloe &amp; Julian</h3>
<span class="font-label-sm text-stone-400">PARIS, FRANCE</span>
</div>
</div>
<!-- Small Horizontal Item -->
<div class="md:col-span-5 group cursor-pointer">
<div class="aspect-[4/3] overflow-hidden relative mb-4">
<img alt="English Countryside" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Close-up of elegant table setting with crystal glassware, white linens, and delicate wild flowers in a garden marquee" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf8824BInL3_6trf-tJ_1EI0vOhnztO6KcuT9-Ex2yhx5kWgCj4NxBRFXnCAZhPuC-gobXsoAehJ3SAz_Fkc0BT4vAnSvFfsqxKhP2leh-xFK36VpnHmdPojntv1kzRlA8VDmoCNJhsQJD13wEVJ2jUJXAipt8WECw1OmGAr-2TQBo1mOYTHQ72GitJeiMVT_1trj4KlmvRfVZ9prtodoG8rUASo7IhgrwG8wdZjV5MSArjk3PBzuX5cXBhlxenpRw8NXbs6nF7bPO"/>
</div>
<div class="flex justify-between items-center">
<h3 class="font-headline-md italic">Isabella &amp; James</h3>
<span class="font-label-sm text-stone-400">COTSWOLDS, UK</span>
</div>
</div>
<!-- Descriptive Text Block -->
<div class="md:col-span-7 flex flex-col justify-center px-12">
<p class="font-headline-md text-stone-400 leading-relaxed italic">
                        "They don't just film a wedding; they document a feeling. Every frame feels like a memory we didn't know we'd forgotten."
                    </p>
<span class="font-label-sm mt-6">— HARPER'S BAZAAR</span>
</div>
</div>
</section>
<!-- Emotional Storytelling / Process -->
<section class="py-stack-xl px-[5vw]">
<div class="max-w-screen-xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div class="order-2 md:order-1 relative">
<div class="aspect-[4/5] w-4/5 mx-auto relative z-10">
<img alt="The artist at work" class="w-full h-full object-cover" data-alt="Overhead shot of a filmmaker's desk with vintage cameras, a leather journal, and black and white film strips" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7JfAfrbsb42D1mFcxidBppaP93GLFu0XLddrGPFCyXY0sAmHQAxeesR72bi8OC-YBiDHEUpr6tcIlW3w3UG6cxMOj_XyEagvzULTLe9eYWtyiCsC14BHmOkrhBdd6CHOCK0b36jOroBIbUQLCilkffoTN1f1NjT9dphCwn98_OV-vn5Jb3tZv1FCu0QsL0E18umTuH7slBYWdFkS8WcJXR_ZLswrSkteGIpwuClLhYlWK7GCXefGxFGMTddb7hM2cADldojUYZCMo"/>
</div>
<div class="absolute -bottom-10 -right-4 w-1/2 aspect-square bg-stone-100 -z-10"></div>
</div>
<div class="order-1 md:order-2">
<span class="font-label-sm text-stone-400 block mb-6">THE ARTISTRY</span>
<h2 class="font-headline-lg mb-8">Intentional Filmmaking</h2>
<div class="space-y-8">
<div>
<h4 class="font-label-sm mb-2">01. DISCOVERY</h4>
<p class="font-body-md text-secondary">A deep dive into your narrative, aesthetics, and the nuances that make your connection unique.</p>
</div>
<div>
<h4 class="font-label-sm mb-2">02. OBSERVATION</h4>
<p class="font-body-md text-secondary">Discreet, handheld cinematography that captures the unscripted moments between the milestones.</p>
</div>
<div>
<h4 class="font-label-sm mb-2">03. CURATION</h4>
<p class="font-body-md text-secondary">Meticulous editing where sound design and color grading create an immersive cinematic experience.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonial Quote -->
<section class="py-stack-xl bg-primary text-on-primary text-center px-[5vw]">
<div class="max-w-4xl mx-auto">
<span class="material-symbols-outlined text-4xl mb-8 opacity-40">format_quote</span>
<blockquote class="font-headline-display text-4xl md:text-5xl italic leading-tight mb-12">
                    "Artistry in Love created something more than a film; they created a heirloom. We watch it and feel the exact same breeze from that evening in Lake Como."
                </blockquote>
<cite class="font-label-sm not-italic tracking-[0.3em]">MR. &amp; MRS. VANDERBILT</cite>
</div>
</section>
<!-- Final Conversion -->
<section class="py-stack-xl px-[5vw] text-center">
<div class="max-w-2xl mx-auto">
<h2 class="font-headline-lg mb-8">Now booking for the MMXXV Season</h2>
<p class="font-body-lg text-secondary mb-12">We accept a limited number of commissions each year to ensure every film receives our undivided artistic devotion.</p>
<a class="inline-block font-label-sm px-12 py-5 border border-primary hover:bg-primary hover:text-white transition-all duration-700 tracking-[0.2em]" href="#">
                    START THE CONVERSATION
                </a>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-[5vw] py-20 mt-40">
<div class="flex flex-col md:flex-row justify-between items-center w-full">
<div class="mb-10 md:mb-0">
<div class="font-serif text-xl italic text-stone-800 dark:text-stone-200 mb-4">Artistry in Love</div>
<p class="font-label-sm text-stone-400">EDITORIAL WEDDING CINEMA</p>
</div>
<div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
<a class="font-serif text-sm tracking-widest uppercase text-stone-500 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-8 transition-all duration-700" href="#">Studio</a>
<a class="font-serif text-sm tracking-widest uppercase text-stone-500 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-8 transition-all duration-700" href="#">Terms of Service</a>
<a class="font-serif text-sm tracking-widest uppercase text-stone-500 dark:text-stone-400 hover:underline decoration-stone-300 underline-offset-8 transition-all duration-700" href="#">Privacy Policy</a>
</div>
</div>
<div class="mt-20 flex flex-col md:flex-row justify-between items-center w-full border-t border-stone-200 dark:border-stone-800 pt-8">
<div class="font-serif text-sm tracking-widest uppercase text-stone-500 dark:text-stone-400">
                © Artistry in Love. All Rights Reserved.
            </div>
<div class="flex space-x-6 mt-4 md:mt-0">
<a class="text-stone-400 hover:text-primary transition-colors duration-500" href="#">INSTAGRAM</a>
<a class="text-stone-400 hover:text-primary transition-colors duration-500" href="#">VIMEO</a>
<a class="text-stone-400 hover:text-primary transition-colors duration-500" href="#">PINTEREST</a>
</div>
</div>
</footer>
</body></html>