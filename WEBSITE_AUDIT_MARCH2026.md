# BrandonMicci.com — Full Site Audit & Fix Plan
**Date:** March 2, 2026 | **Version:** 1.0 | **For:** Claude Code Implementation

---

## Summary

| Category | Count |
|----------|-------|
| 🔴 Critical Bugs | 5 |
| 🟡 Medium Issues | 4 |
| 🟢 Enhancements | 3 |
| Pages Audited | 7 |

The site architecture is solid. The primary issues are stale year counts (16+ instead of 17+) in multiple files due to an out-of-date source-of-truth constant, a dead navigation link, and placeholder LinkedIn URLs in testimonials. No broken layouts, 404s on critical paths, or security issues.

---

## Batch 1 — Critical Fixes (Single PR)

### Fix 1: Update metrics.ts source of truth
**File:** `src/lib/metrics.ts` line 5
**Change:** `yearsLeading: 16` → `yearsLeading: 17`
**Why:** This constant drives HeroSection animated counters and stat labels via `METRICS.yearsLeading`. One change fixes: HeroSection animated counter (desktop + mobile), stat label text, and any other consumer of METRICS.

### Fix 2: Update hardcoded 16+ references (not using METRICS)
These files have hardcoded strings that DO NOT use the METRICS constant — they need separate fixes:

1. **`src/components/ExperienceHighlights.tsx` line 94**
   - Change: `16+ years leading AI strategy` → `17+ years leading AI strategy`

2. **`src/components/EnhancedStructuredData.tsx` line 12**
   - Change: `16+ years of experience` → `17+ years of experience`

3. **`src/app/experience/page.tsx` lines 8, 22, 30** (THREE separate strings in metadata)
   - Line 8 (description): `16+ year executive career` → `17+ year executive career`
   - Line 22 (OG description): `16+ years leading AI strategy` → `17+ years leading AI strategy`
   - Line 30 (Twitter description): `16+ years leading AI strategy` → `17+ years leading AI strategy`

### Fix 3: Fix Navigation Home link (broken anchor)
**File:** `src/components/Navigation.tsx`
- **Line 462:** Change `href="/#home"` → `href="/"`
- **Line 463:** Change `activeLink === 'home'` → `activeLink === 'hero'`
- **Line 464:** Change `handleSmoothScroll(e, 'home')` → `handleSmoothScroll(e, 'hero')`

**Why:** The section in `page.tsx` uses `id="hero"`, not `id="home"`. The mismatch causes the Home nav link's smooth scroll to silently fail — `document.getElementById('home')` returns null.

### Verification after Batch 1
Run this grep to confirm zero remaining 16+ references:
```bash
grep -rn "16+" src/ --include="*.tsx" --include="*.ts" | grep -v node_modules | grep -v ".next"
```
Expected: zero results.

Also verify Navigation by checking:
```bash
grep -n "home" src/components/Navigation.tsx
```
Expected: no remaining references to 'home' as a section ID.

---

## Batch 2 — Medium Issues (Second PR)

### Fix 4: Case study metric consistency
**File:** `src/app/case-studies/page.tsx` line 136
**Change:** In the `industry-4-iot` case study metrics array, change `{ value: '1000+', label: 'Connected Devices' }` → `{ value: 'Thousands', label: 'Connected Devices' }`
**Why:** Body text was already corrected to say "thousands of devices" but the metric box still says "1000+".

### Fix 5: Add Coming Soon placeholder cards to Case Studies
**File:** `src/app/case-studies/page.tsx`
Add 1-2 placeholder entries at the end of the `caseStudies` array. Suggested:
- "Agentic AI Workflow Automation" (Financial Services, Coming Soon)
- "Enterprise Data Platform Modernization" (Fortune 500, Coming Soon)

Style these cards with:
- A "Coming Soon" badge in the card header
- Reduced opacity (0.6) on the card body
- No metrics boxes
- A teaser 1-liner for challenge/solution instead of full text
- No results or tech tags sections

### Fix 6: Testimonial LinkedIn links — 12 dead href="#" links
**File:** `src/components/TestimonialsSection.tsx`
Lines: 394, 422, 447, 471, 498, 524, 548, 573, 598, 621, 648, 673

**Option A (preferred):** If Brandon provides LinkedIn profile URLs for each recommender, replace each `href="#"` with the real URL and add `target="_blank" rel="noopener noreferrer"`.

**Option B (fallback):** Remove the `<a href="#" className="linkedin-link">in</a>` element and its container entirely from each testimonial card. Dead links hurt credibility.

**Decision needed from Brandon before implementing.**

### Fix 7: Improve Experience page OG metadata
**File:** `src/app/experience/page.tsx`
- Line ~20: Change OG title from `'Executive Experience | Brandon Micci'` → `'17+ Years AI & Digital Transformation Leadership | Brandon Micci'`
**Why:** Generic OG title won't hook recruiters when shared on LinkedIn/Slack.

---

## Batch 3 — Enhancements (Separate PR / Sprint)

### Enhancement 1: Add GA4 Analytics
1. Create `src/components/GoogleAnalytics.tsx` with GA4 script tags
2. Get GA4 Measurement ID from analytics.google.com (Brandon to provide)
3. Import and render in `src/app/layout.tsx`
4. Add custom gtag events for: `resume_download`, `brief_download`, `linkedin_click`, `email_click`, `contact_save`
5. Wire events to existing onClick handlers in HeroSection.tsx, IndustryCollaboration.tsx, ContactCard.tsx

### Enhancement 2: Digital Business Card click tracking
**File:** `src/components/ContactCard.tsx`
The `trackAction()` function (line ~8+) is already wired to button clicks. Extend it to call `gtag('event', action, { event_category: 'contact_card' })` for each action: linkedin, email, save_contact.

### Enhancement 3: Floating Contact CTA
1. Create `src/components/FloatingContactButton.tsx`
2. Fixed position bottom-right (bottom: 24px, right: 24px), z-index: 50
3. Link to `/#connectwithme`
4. Use IntersectionObserver on the hero section — only show after user scrolls past hero
5. Subtle entrance animation, then steady state
6. Import in `src/app/page.tsx`

---

## What's Working Well (Don't Touch)

- ✅ Site architecture — Next.js App Router, TypeScript, component structure
- ✅ SEO foundation — sitemap, robots.ts, structured data, og images, viewport
- ✅ Performance — Vercel Analytics, Speed Insights, content-visibility CSS, WebP, dynamic imports with SSR
- ✅ Lighthouse CI — GitHub Actions workflow on every PR
- ✅ PDF downloads — All 4 paths correctly wired (fixed March 2 session)
- ✅ Contact page — Clean, professional, pre-filled email templates, vCard
- ✅ Digital Business Card — Great design, all links correct
- ✅ Testimonials content — 12 real LinkedIn recommendations
- ✅ Case studies content — 8 detailed, metrics-backed case studies
- ✅ Mobile responsiveness — All components have 768px breakpoints
- ✅ Accessibility — skip-to-content, aria-labels, reduced-motion support
- ✅ Navigation anchors — strategic-advantage, executive-experience, transformation-leadership, professional-impact, connectwithme all verified correct

---

## Navigation Anchor Map (Reference)

| Nav Link | href | Section ID | Status |
|----------|------|------------|--------|
| Home | `/#home` | `id="hero"` | 🔴 BROKEN — Fix 3 |
| Strategic Advantage | `/#strategic-advantage` | `id="strategic-advantage"` | ✅ Fixed Mar 2 |
| Executive Experience | `/#executive-experience` | `id="executive-experience"` | ✅ Correct |
| Transformation | `/#transformation-leadership` | `id="transformation-leadership"` | ✅ Correct |
| Professional Impact | `/#professional-impact` | `id="professional-impact"` | ✅ Correct |
| Connect With Me | `/#connectwithme` | `id="connectwithme"` | ✅ Correct |
