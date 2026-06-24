---
name: Tahaqaq Civic System
colors:
  surface: '#f4fcef'
  surface-dim: '#d5dcd0'
  surface-bright: '#f4fcef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6ea'
  surface-container: '#e9f0e4'
  surface-container-high: '#e3eade'
  surface-container-highest: '#dde5d9'
  on-surface: '#161d16'
  on-surface-variant: '#3e4a3d'
  inverse-surface: '#2b322a'
  inverse-on-surface: '#ebf3e7'
  outline: '#6d7b6b'
  outline-variant: '#bdcab9'
  surface-tint: '#006e29'
  primary: '#006b28'
  on-primary: '#ffffff'
  primary-container: '#008735'
  on-primary-container: '#f7fff2'
  inverse-primary: '#5edf76'
  secondary: '#176d2b'
  on-secondary: '#ffffff'
  secondary-container: '#9ff3a1'
  on-secondary-container: '#1d712f'
  tertiary: '#745b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cda72c'
  on-tertiary-container: '#4f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7cfd8f'
  primary-fixed-dim: '#5edf76'
  on-primary-fixed: '#002107'
  on-primary-fixed-variant: '#00531d'
  secondary-fixed: '#a1f6a4'
  secondary-fixed-dim: '#86d98a'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#00531a'
  tertiary-fixed: '#ffe08b'
  tertiary-fixed-dim: '#ebc246'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#f4fcef'
  on-background: '#161d16'
  surface-variant: '#dde5d9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is engineered for high-trust civic engagement and professional governance. It balances the authority of a public institution with the accessibility of a modern service platform. 

The aesthetic is a refined evolution of **Modern Corporate** design, heavily influenced by **HeroUI** principles: clarity, generous spacing, and organic softness. It avoids the coldness of traditional bureaucracy by using a warm, off-white foundation and natural green tones, evoking growth and stability. The emotional response is intended to be one of "approachable authority"—users should feel that the system is both official and helpful.

## Colors

The palette is rooted in a "Civic Verdant" theme. 
- **Primary Green (#00A040):** Used for key calls-to-action, success states, and primary brand markers. It signifies progress and action.
- **Dark Green (#006020):** The primary color for typography, navigation backgrounds, and structural footers. It provides the "anchor" of authority and ensures high legibility.
- **Gold & Ochre (#F2C94C / #E0C080):** These are used sparingly for emphasis, decorative accents, and to highlight status changes. Gold is for high-priority highlights; Ochre is for subtle decorative elements and slide accents.
- **Off-White (#E0E0C0):** The base surface for all views. This avoids the harshness of pure white (#FFFFFF), reducing eye strain and providing a sophisticated, paper-like texture to the interface.

## Typography

The design system utilizes **Inter** exclusively to leverage its exceptional legibility and systematic weight distribution. 

Headlines use semi-bold and bold weights with tighter letter spacing to maintain a strong, authoritative presence. Body text is set with generous line heights (1.6) to ensure comfortable reading of long-form civic documentation. All Dark Green text on the Off-White background must maintain a contrast ratio of at least 7:1 for peak accessibility.

## Layout & Spacing

The layout follows a **Fixed-Width Adaptive** model for desktop (max-width: 1280px) to maintain readable line lengths, and a **Fluid** model for mobile devices.

A 12-column grid is used for desktop layouts, while a 4-column grid is utilized for mobile. Spacing is governed by an 8pt linear scale. Large vertical gaps (Section 4: `xl`) are encouraged between major content blocks to create a sense of "breathtaking" clarity and organizational transparency. Padding within cards and containers should never drop below `md` (24px) to maintain the HeroUI-inspired airy feel.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Soft Ambient Shadows**. 

Instead of heavy black shadows, this design system uses low-opacity shadows tinted with the Dark Green palette (e.g., `rgba(0, 96, 32, 0.08)`). 
- **Level 1 (Surface):** The Off-White background.
- **Level 2 (Cards):** Pure white (#FFFFFF) surfaces with a subtle 4px blur shadow. 
- **Level 3 (Modals/Popovers):** Pure white surfaces with a 20px blur and 10% opacity shadow, creating a floating effect.

Glassmorphism should be used sparingly, reserved only for navigation blurs (header/footer) to allow the Off-White background to peek through, maintaining context during scroll.

## Shapes

The design system adopts an **Ultra-Rounded** language. 
- **Standard Components:** Buttons and input fields use a `0.5rem` (8px) radius.
- **Main Containers:** Cards, modals, and featured hero sections use `rounded-2xl` (1rem) or `rounded-3xl` (1.5rem) to evoke a friendly, modern, and non-threatening civic atmosphere.
- **Interactive Accents:** Gold accent bars should have fully rounded (pill-shaped) ends to complement the soft typography.

## Components

### Buttons
Primary buttons use the **Primary Green (#00A040)** with white text. Hover states shift to the Dark Green. Secondary buttons use a Dark Green outline with a subtle Off-White fill.

### Cards
Cards are the primary content vehicle. They must have a white (#FFFFFF) background, `rounded-2xl` corners, and the Level 2 ambient shadow. Use the **Ochre Gold** as a 4px top-border accent for "featured" or "announcement" cards.

### Input Fields
Inputs use a white background with a 1px border of `rgba(0, 96, 32, 0.2)`. On focus, the border thickens to 2px and changes to the Primary Green, accompanied by a soft green outer glow.

### Chips & Badges
Chips are pill-shaped. Use the **Gold (#F2C94C)** for status indicators (e.g., "Pending" or "In Review") to ensure they catch the eye without signifying "Error" or "Success."

### Navigation
The header should use the **Dark Green (#006020)** with white text links. The active state is indicated by a **Gold (#F2C94C)** 3px bottom-bar, visually connecting the navigation to the brand's premium accents.

### Icons
Use **filled** icon variants exclusively (e.g. `pencil`, `document-text`, `notifications`). Never use outline/hollow variants (`-outline` suffix). Filled icons convey stronger presence and authority, consistent with the civic trust theme. The icon library is Ionicons via HeroUI — always reference the filled name.