# Responsive Breakpoint Strategy

## Overview

This document defines the standardized breakpoint strategy for BrandonMicci.com to ensure consistent responsive behavior across all components and sections.

## Standard Breakpoints

### Mobile First Approach

All styles are written mobile-first, with progressive enhancement for larger screens.

### Breakpoint Definitions

| Breakpoint Name   | Min Width | Max Width | Target Devices             | Usage                      |
| ----------------- | --------- | --------- | -------------------------- | -------------------------- |
| **Mobile**        | -         | 640px     | iPhone SE, iPhone 12/13/14 | Base styles (mobile-first) |
| **Small Tablet**  | 641px     | 768px     | iPad Mini portrait         | Intermediate sizing        |
| **Tablet**        | 769px     | 1023px    | iPad Air, standard tablets | Medium layouts             |
| **iPad Pro**      | 1024px    | 1279px    | iPad Pro 11"/12.9"         | Large tablet optimization  |
| **Desktop**       | 1280px    | 1440px    | Standard desktops          | Full desktop experience    |
| **Large Desktop** | 1441px+   | -         | Large monitors, 4K         | Maximum spacing and sizing |

## Implementation Guidelines

### Media Query Syntax

```css
/* Mobile (default) */
.component {
  property: mobile-value;
}

/* Small Tablet */
@media (min-width: 641px) {
  .component {
    property: small-tablet-value;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1023px) {
  .component {
    property: tablet-value;
  }
}

/* iPad Pro Specific Override */
@media (min-width: 1024px) and (max-width: 1279px) {
  .component {
    property: ipad-pro-value;
  }
}

/* Desktop */
@media (min-width: 1280px) {
  .component {
    property: desktop-value;
  }
}

/* Large Desktop */
@media (min-width: 1441px) {
  .component {
    property: large-desktop-value;
  }
}
```

### Mobile Menu Breakpoint

The mobile hamburger navigation menu is active up to **1279px max-width**, which includes:

- All mobile devices
- All tablets (including iPad Mini and iPad Air)
- iPad Pro (11" and 12.9")

Desktop navigation bar appears at **1280px and above**.

```css
/* Mobile menu active */
@media (max-width: 1279px) {
  .mobile-toggle {
    display: flex;
  }
  .nav-menu {
    /* Collapsed mobile menu styles */
  }
}
```

## Component-Specific Breakpoints

### Hero Section

- **Mobile (< 640px)**: Single column layout, stacked CTAs
- **Tablet (769-1023px)**: Two-column layout with adjusted spacing
- **iPad Pro (1024-1279px)**: Optimized spacing with `padding-bottom: 0.25rem`
- **Desktop (1280px+)**: Full two-column layout with `padding-bottom: 0.5rem`

### Section Headers

| Breakpoint             | Font Size  | Line Height |
| ---------------------- | ---------- | ----------- |
| Mobile (< 768px)       | 2.0rem     | 1.2         |
| Tablet (769-1023px)    | 2.4-2.6rem | 1.2         |
| iPad Pro (1024-1279px) | 2.4rem     | 1.2         |
| Desktop (1280px+)      | 2.8rem     | 1.2         |

All section headers maintain consistent sizing across:

- Strategic Advantage Header (`.strategic-title`)
- Executive Experience (`.section-header-title`)
- Transformation Leadership (`.portfolio-title`)

### KPI Grid

- **Mobile**: 2x2 grid with `padding: 0 1.25rem`
- **Tablet**: 2x2 grid with adjusted spacing
- **Desktop**: 4x1 horizontal grid

### Strategic Leadership Capabilities (Hero Section)

- **Mobile**: Single column, centered titles and icons
- **Desktop**: 2x2 grid layout

### Strategic Advantage Differentiators

- **Mobile**: Single column, centered titles, centered body text
- **Desktop**: 2x2 grid, centered titles, left-aligned body text

## Spacing Strategy

### Section Padding

```css
/* Global section padding */
section {
  padding-block: clamp(2rem, 4vw, 5rem);
}

/* Hero section specific */
@media (min-width: 1024px) {
  .hero-section {
    padding-bottom: 0.5rem;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .hero-section {
    padding-bottom: 0.25rem; /* iPad Pro tighter spacing */
  }
}
```

### Inter-Section Spacing

- **Mobile**: 2-3rem between sections
- **Desktop**: 3-4rem between sections
- **Strategic Advantage**: `pt-4` (1rem top padding)

## Typography Scaling

### Fluid Typography with clamp()

```css
/* Headline example */
.headline {
  font-size: clamp(1.6rem, 3.8vw, 2.8rem);
}

/* Subheader example */
.dek {
  font-size: clamp(1.1rem, 1.9vw, 1.35rem);
}
```

### Responsive Font Sizing

| Element              | Mobile  | Tablet     | Desktop |
| -------------------- | ------- | ---------- | ------- |
| H1 (Hero)            | 1.6rem  | 2.2-2.4rem | 2.8rem  |
| H2 (Sections)        | 2.0rem  | 2.4-2.6rem | 2.8rem  |
| Body (Hero subtitle) | 1.1rem  | 1.2rem     | 1.35rem |
| CTA Buttons          | 0.95rem | 0.85rem    | 1.0rem  |

## Accessibility Considerations

### Reduced Motion

All animations respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Touch Target Sizing

Minimum touch target size maintained across all breakpoints:

- **Minimum**: 44x44px (iOS guidelines)
- **Optimal**: 48x48px (Material Design)

CTA buttons maintain adequate padding:

```css
.btn {
  padding: 0.9rem 1.1rem; /* Exceeds minimum touch target */
}
```

## Image Responsive Behavior

### Hero Image (HeroImage.tsx)

```typescript
sizes =
  '(min-width:1280px) 460px, (min-width:1024px) 34vw, (min-width:769px) 32vw, 70vw';
```

### Breakpoint-specific sizing:

- **Mobile (< 769px)**: `clamp(180px, 60vw, 280px)`, max 70vw
- **Tablet (769-1023px)**: `clamp(200px, 20vw, 240px)`, 32vw
- **iPad Pro (1024-1279px)**: 34vw
- **Desktop (1280px+)**: Fixed 460px

## Best Practices

### DO ✅

1. **Use min-width for progressive enhancement**

   ```css
   @media (min-width: 1280px) {
     /* Desktop styles */
   }
   ```

2. **Use specific ranges for tablet/iPad overrides**

   ```css
   @media (min-width: 1024px) and (max-width: 1279px) {
     /* iPad Pro */
   }
   ```

3. **Use clamp() for fluid typography**

   ```css
   font-size: clamp(1rem, 2vw, 1.5rem);
   ```

4. **Test all breakpoints in DevTools**
   - iPhone SE (375px)
   - iPhone 12/13/14 (390px)
   - iPad Mini (768px)
   - iPad Air (820px)
   - iPad Pro (1024px, 1366px)
   - Desktop (1280px, 1440px, 1920px)

### DON'T ❌

1. **Don't use arbitrary breakpoints**

   ```css
   /* ❌ Avoid */
   @media (max-width: 999px) {
   }
   ```

2. **Don't use max-width for desktop styles**

   ```css
   /* ❌ Avoid - use min-width instead */
   @media (max-width: 1920px) {
   }
   ```

3. **Don't mix breakpoint strategies in the same component**
   - Be consistent with the standard breakpoints defined above

4. **Don't forget reduced motion**
   - All animations should gracefully degrade for users with `prefers-reduced-motion`

## Testing Checklist

When implementing responsive styles, test on:

- [ ] iPhone SE (375px) - Mobile
- [ ] iPhone 12/13/14 (390px) - Mobile
- [ ] iPhone 14 Pro Max (430px) - Mobile
- [ ] iPad Mini (768px) - Small Tablet
- [ ] iPad Air (820px) - Tablet
- [ ] iPad Pro 11" (1024px) - iPad Pro
- [ ] iPad Pro 12.9" (1366px) - iPad Pro/Desktop
- [ ] Desktop (1280px) - Desktop
- [ ] Desktop (1440px) - Desktop
- [ ] Large Desktop (1920px+) - Large Desktop

## Maintenance Notes

- **Last Updated**: October 2025
- **Maintained By**: Brandon Micci Development Team
- **Review Frequency**: Quarterly or when adding new components

### Recent Changes

- **October 2025**: Standardized iPad Pro breakpoint to 1024-1279px
- **October 2025**: Extended mobile menu to 1279px max-width
- **October 2025**: Applied consistent section header sizing (2.8rem desktop, 2rem mobile)
- **October 2025**: Implemented hero section padding optimization for iPad Pro

## Related Documentation

- `src/app/globals.css` - Global responsive utilities
- `src/components/Navigation.tsx` - Mobile menu implementation
- `src/components/HeroSection.tsx` - Hero responsive layout
- `README.md` - General project documentation
