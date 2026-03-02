# BrandonMicci.com — Content Alignment Audit
**Date:** March 2, 2026 | **Source of Truth:** Brandon_Micci_Resume_AI_Transformation.pdf | **For:** Claude Code Implementation

---

## Summary

| Category | Count |
|----------|-------|
| 🔴 Role Title Mismatches | 3 |
| 🟡 Date/Detail Inaccuracies | 4 |
| 🟠 Metric Attribution Errors | 2 |
| 🔵 Already Flagged (Batch 1) | 5 |
| ✅ Verified Correct | 40+ data points |

This audit cross-references **every claim** on the website against Brandon's current resume. The site's core metrics ($400M+, 27K+, 250% ROI, $22M+) are accurate. The issues are concentrated in **role titles** that don't match the resume, **date ranges** that are oversimplified, and **one metric (80%) attributed to the wrong achievement**.

---

## 🔴 Role Title Mismatches (Fix These)

### Issue 1: Capgemini title wrong in ExperienceHighlights.tsx
**File:** `src/components/ExperienceHighlights.tsx` line 34
- **Website says:** `Senior Director, Intelligent Industry & Emerging Technology`
- **Resume says:** `Senior Director, Head of AI/IoT & Emerging Technology Practice`
- **Fix:** Change to `Senior Director, Head of AI/IoT & Emerging Technology`
- **Impact:** Main homepage — visible in Experience Highlights cards

### Issue 2: EY title wrong in ExperienceHighlights.tsx
**File:** `src/components/ExperienceHighlights.tsx` line 49
- **Website says:** `Senior Manager, Forensic Technology & Data Analytics`
- **Resume says:** `Senior Manager, AI/ML Forensic Analytics & Technology`
- **Fix:** Change to `Senior Manager, AI/ML Forensic Analytics & Technology`
- **Impact:** Main homepage — visible in Experience Highlights cards

### Issue 3: EY engagement client description inconsistent
**Files:** `src/components/ExecutiveExperience.tsx` line 138, `src/app/case-studies/page.tsx` line 81
- **Website says:** "global insurance firm" (ExecutiveExperience) / "Fortune 50 Insurer" (Case Studies)
- **Resume says:** "Top-5 national health insurer"
- **Fix:** Standardize to "Top-5 national health insurer" or "Fortune 50 health insurer" across both files
- **Note:** The $400MM fraud detection case study also says "Fortune 50 Insurer" — this is the EY deal, and the client was a health insurer, not a general insurer

---

## 🟡 Date & Detail Inaccuracies

### Issue 4: Southwest promotion year wrong
**File:** `src/components/ExecutiveExperience.tsx` line 151
- **Website says:** `Head of Digital Innovation & IoT (Promoted 2020)`
- **Resume says:** `Head of Digital Innovation & IoT (Promoted Aug 2019 – Dec 2020)`
- **Fix:** Change to `Head of Digital Innovation & IoT (Promoted Aug 2019)`
- **Why:** Brandon was promoted in August 2019, not 2020

### Issue 5: ExperienceHighlights combined card is misleading
**File:** `src/components/ExperienceHighlights.tsx` lines 63-76
- **Website shows:** One card with dates "2015 - 2019", role "Analytics COE Leader & Digital Innovation", companyType "Fortune 100 Bank + Major Airline"
- **Resume reality:** This conflates THREE separate employers:
  - Capital One (Jan 2015 – Nov 2017)
  - Citigroup (Nov 2017 – Feb 2019) — completely missing from this summary card
  - Southwest Airlines is the "Major Airline" but dates were 2019-2020, not within 2015-2019
- **Fix Options:**
  - A) Expand to two cards: "Capital One & Citigroup" (2015-2019) + keep Southwest separate in its own era
  - B) Update dates to "2015 - 2020" and companyType to "Fortune 100 Banks + Major Airline"
  - C) **Brandon to decide** — this is a design/messaging choice
- **Impact:** Main homepage — fourth Experience Highlights card

### Issue 6: "11 roles" claim appears inflated
**File:** `src/components/ExperienceHighlights.tsx` line 195
- **Website says:** "11 roles across Fortune 500, Big Four, and leading enterprises"
- **Resume shows:** 9 distinct role entries (JPMC, Capgemini, EY, Southwest×2, Citigroup, Capital One, Booz Allen, PwC)
- **Fix:** Change to "9 roles" or "10+ years across" (if counting sub-roles differently)
- **Brandon to confirm** actual count he wants to display

### Issue 7: Southwest Data COE dates oversimplified
**File:** `src/components/ExecutiveExperience.tsx` line 170
- **Website says:** dates `2019 - 2020` for Manager, Data Enablement & Analytics COE
- **Resume says:** `Feb 2019 – Aug 2019` (only 6 months before promotion)
- **Fix:** Change dates to `Feb 2019 – Aug 2019` or `2019` (without range)

---

## 🟠 Metric Attribution Errors

### Issue 8: 80% metric wrongly attributed to Analytics Community
**Files:**
- `src/components/TransformationLeadership.tsx` line 76 — primaryProjects "World's Largest Analytics Community" shows `{ value: '80%', label: 'Capability Boost' }`
- `src/app/case-studies/page.tsx` line 115 — "Achieved 80% improvement in analytics capability"
- **Resume actually says:** "increasing control coverage by 80%" — this was the NLP/OCR automation achievement at Capital One, NOT the analytics community
- **Fix:** Either:
  - A) Remove the 80% metric from the Analytics Community cards entirely
  - B) Replace with a more relevant metric like `$8M` / `Annual Savings` (from legacy dashboard decommissioning)
  - C) Keep but relabel to: `80% Control Coverage` with note it came from NLP/OCR innovation
- **Brandon to decide** which option

### Issue 9: "85% Process Automation" not on resume
**File:** `src/app/case-studies/page.tsx` line 202, `src/components/TransformationLeadership.tsx` line 126
- **Website says:** Analytics-as-a-Service Platform achieved "85% Process Automation"
- **Resume says:** Only mentions "$25MM+ in annual recurring revenue" for EY's Analytics-as-a-Service — no 85% figure
- **Fix:** Either remove this metric, replace with a resume-backed one, or **Brandon to confirm** if 85% is accurate but not on resume

---

## 🔵 Already Flagged in Batch 1 Audit (For Reference)

These were already identified in WEBSITE_AUDIT_MARCH2026.md and may have been fixed by Claude Code:

1. `src/lib/metrics.ts` line 5 — `yearsLeading: 16` → `17`
2. `src/components/ExperienceHighlights.tsx` line 94 — "16+ years" → "17+ years"
3. `src/components/EnhancedStructuredData.tsx` line 12 — "16+ years" → "17+ years"
4. `src/app/experience/page.tsx` lines 8, 22, 30 — "16+" → "17+"
5. Navigation Home link — `/#home` → `/` (section is `id="hero"`)

---

## ✅ Verified Correct (No Changes Needed)

### Hero Section (HeroTitle + HeroParagraph + MetricsGrid)
- ✅ "Senior AI & Digital Transformation Executive" — intentional branding title (OK)
- ✅ "17+ years" — matches resume
- ✅ "$400M in measurable business outcomes" — matches resume's "$400M+ in quantifiable business impact"
- ✅ "$22M+ in annualized savings through LLM-powered automation at JPMorgan" — exact match
- ✅ "30,000+ users at Capital One" — exact match
- ✅ MetricsGrid: $400M+, 27K+, 250%, 17+ — all match resume

### ExecutiveExperience.tsx (Full Timeline)
- ✅ JPMC: "Head of AI Strategy & Business Transformation" — exact title match
- ✅ JPMC: "$22M+ Annualized Savings" — exact match
- ✅ JPMC: "27,000+ employees" on LLM platform — exact match
- ✅ JPMC: "30+ AI/ML use cases" — exact match
- ✅ JPMC: "$15M+ P&L" — exact match
- ✅ JPMC: "12+ knowledge sources" — exact match
- ✅ Capgemini: "$30M P&L" — exact match
- ✅ Capgemini: "$9.8M in new revenue" — exact match
- ✅ Capgemini: "34% market penetration" — exact match
- ✅ EY: "$400MM, 10-year" — exact match
- ✅ EY: "$25MM+" annual revenue — exact match
- ✅ EY: "$6M+ ESG analytics" — exact match
- ✅ Southwest: "250% ROI", "$20M+ annual savings" — exact match
- ✅ Southwest: "$25M technology budget" — exact match
- ✅ Southwest: "2,500+ users", "40% adoption" — exact match
- ✅ Citigroup: "500+ engineers", "98% uptime", "200% cloud acceleration" — exact match
- ✅ Citigroup: "10M+ customers" Hadoop marketing engine — exact match
- ✅ Capital One: "30,000+ enterprise users" — exact match
- ✅ Capital One: "CEO Rich Fairbank" dashboards — exact match
- ✅ Capital One: "$8M annual savings", "2,000+ legacy dashboards" — exact match
- ✅ Booz Allen: "150% fraud detection" — exact match
- ✅ Education: BA Business Administration, GWU — exact match

### Layout.tsx / OG Metadata
- ✅ "JPMorgan Chase" — correct
- ✅ "17+ years delivering $400M+" — correct
- ✅ "$22M+ AI-driven savings" — correct
- ✅ "27K+ AI users enabled, 30K+ analytics users" — correct

### FAQSection.tsx
- ✅ All FAQ answers verified against resume — metrics, companies, competencies all match

### Contact Page
- ✅ brandon@brandonmicci.com — professional email (resume uses gmail, but site using custom domain is intentional)
- ✅ vCard download — present and functional
- ✅ Pre-filled email templates — clean and professional

### TransformationLeadership.tsx (Project Cards)
- ✅ Enterprise Knowledge Assistant: 27,000+ users, 10+ data sources — matches
- ✅ IoT Innovation Platform: 250% ROI, $20M+ — matches
- ✅ AI Fraud Detection Engine: $400M contract value — matches
- ✅ Global Infrastructure Transformation: 98% uptime, 200% cloud acceleration — matches
- ✅ Event-Based Marketing Engine: 10M+ customers — matches
- ✅ Analytics-as-a-Service: $25MM+ annual revenue — matches

### IndustryCollaboration.tsx (Connect With Me Section)
- ✅ PDF links: `/BrandonMicciResume.pdf` and `/executive-brief.pdf` — correct (fixed earlier today)
- ✅ LinkedIn: `linkedin.com/in/brandonmicci` — correct
- ✅ Email: `brandon@brandonmicci.com` — correct

---

## Additional Observations (Non-Critical)

### Observation A: "Study Abroad: Florence, Italy" in Education
**File:** `src/components/ExecutiveExperience.tsx` line 917
- Not on resume. May be intentional extra detail for the website. **Brandon to confirm** if he wants to keep it.

### Observation B: Two email addresses in use
- Website/Structured Data: `brandon@brandonmicci.com`
- Resume: `brandon.micci@gmail.com`
- **This appears intentional** — professional domain for website, personal Gmail on resume

### Observation C: Two phone numbers in use
- Structured Data: `+14697088925` (Google Voice)
- Resume: `610.310.0066`
- **Likely intentional** — Google Voice for web/recruiter contact vs personal number on resume

### Observation D: EnhancedStructuredData.tsx includes advisory/speaking services
- The schema includes "Keynote Speaker & Executive Advisor" occupation and "ProfessionalService" schema
- Resume doesn't explicitly list advisory services — but this is likely aspirational/accurate for the website's purpose

---

## Implementation Priority

### Immediate Fixes (No Brandon Input Needed)
1. **Issue 1:** Fix Capgemini title in ExperienceHighlights.tsx
2. **Issue 2:** Fix EY title in ExperienceHighlights.tsx
3. **Issue 4:** Fix Southwest promotion year in ExecutiveExperience.tsx
4. **Issue 7:** Fix Southwest Data COE dates in ExecutiveExperience.tsx

### Needs Brandon's Decision
5. **Issue 3:** Standardize EY client description (health insurer vs insurer)
6. **Issue 5:** ExperienceHighlights combined card redesign
7. **Issue 6:** "11 roles" claim — confirm actual count
8. **Issue 8:** 80% metric attribution — which achievement does it belong to?
9. **Issue 9:** 85% automation metric — is this verifiable?

---

## Verification Commands

After implementing fixes, run these checks:

```bash
# Verify Capgemini title consistency
grep -rn "Intelligent Industry" src/ --include="*.tsx"
# Expected: zero results (should all say "AI/IoT & Emerging Technology")

# Verify EY title consistency
grep -rn "Forensic Technology" src/ --include="*.tsx"
# Expected: zero results (should all say "AI/ML Forensic Analytics")

# Verify promotion year
grep -rn "Promoted 2020" src/ --include="*.tsx"
# Expected: zero results

# Verify no remaining "16+" references
grep -rn "16+" src/ --include="*.tsx" --include="*.ts" | grep -v node_modules
# Expected: zero results
```
