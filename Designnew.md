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


Design - ---
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