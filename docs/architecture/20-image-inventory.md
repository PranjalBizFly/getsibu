# GetSibu 400-Topic Image Architecture & Inventory Audit

**Audit Date:** 2026-09-15
**Master Reference:** `Getsibu.pdf` (all 400 topics)
**Experience Reference:** Sky9 (`https://sky9india1.netlify.app/`)
**Presentation Isolation:** All changes preserve parallel session files (`app/**`, `components/**`, `globals.css`).

## 1. Executive Summary

| Metric | Target | Current Audit Result | Compliance |
|---|---|---|---|
| **Total Topics Audited** | 400 | 400 | 100% |
| **Pages with Unique Hero Images** | 400 | 400 | 100% |
| **Total Unique Images in Inventory** | 400+ | 1118 | 100% |
| **Section-Level Supporting Images** | Contextual | 718 | Follows content |
| **Duplicate Image Count** | 0 | 0 | **ZERO DUPLICATION** |
| **Format Compliance (WebP)** | 100% | 100% WebP | Mandatory WebP |
| **Alt Text Coverage** | 100% | 100% (1118/1118) | Non-empty, topic-specific |
| **Fabricated Metrics/Logos in Prompts** | 0 | 0 | Negative constraints enforced |

## 2. Core Image Directives

1. **One Image = One Use Only**:
   Every visual asset has a single unique path, filename, prompt, and topic assignment. No reuse across pages or sections.
2. **Every Hero Section Has an Image**:
   All 400 topics from page 1 ("GetSibu — Creative Asset Management Platform") through page 400 have an individually art-directed hero visual.
3. **WebP Format Mandatory**:
   All imagery is delivered in modern, high-performance WebP format with responsive sizing. Source files in `public/` are WebP (logos are lossless WebP) and `next.config.ts` serves every optimised image as WebP only. Two exceptions stay PNG by necessity: `app/icon.png` / `app/apple-icon.png` (Next.js icon conventions do not accept WebP) and the social card `public/og/getsibu.png` (link-preview crawlers). Diagrams are inline SVG.
4. **Descriptive, Accessible Alt Text**:
   No keyword stuffing or generic placeholders ("hero image", "GetSibu photo"). Alt texts name GetSibu and the live page's topic, then explain what is visually represented: `GetSibu illustration for “<topic>”: <what the image shows>` (`scripts/image-captions.ts`). Held topics' alts name no title. Diagram figures' accessible names read "GetSibu illustration: …" (`components/diagrams/parts.tsx`).
5. **No Fake Claims**:
   Visuals completely avoid invented statistics ("99% accuracy", "+200% ROI"), fake customer logos, or fabricated compliance badges.

## 3. Category Breakdown

- **home**: 1 topics with dedicated hero and section imagery
- **platform**: 9 topics with dedicated hero and section imagery
- **search-discovery**: 20 topics with dedicated hero and section imagery
- **ai**: 30 topics with dedicated hero and section imagery
- **collaboration**: 30 topics with dedicated hero and section imagery
- **asset-management**: 30 topics with dedicated hero and section imagery
- **storage-ingestion**: 30 topics with dedicated hero and section imagery
- **permissions-multi-tenancy**: 30 topics with dedicated hero and section imagery
- **analytics**: 30 topics with dedicated hero and section imagery
- **use-cases**: 30 topics with dedicated hero and section imagery
- **integrations**: 12 topics with dedicated hero and section imagery
- **developers**: 28 topics with dedicated hero and section imagery
- **migration**: 20 topics with dedicated hero and section imagery
- **architecture-performance**: 20 topics with dedicated hero and section imagery
- **security-compliance**: 20 topics with dedicated hero and section imagery
- **pricing-plans**: 7 topics with dedicated hero and section imagery
- **business-value**: 13 topics with dedicated hero and section imagery
- **resources**: 20 topics with dedicated hero and section imagery
- **faq**: 10 topics with dedicated hero and section imagery
- **conversion**: 10 topics with dedicated hero and section imagery

## 4. Master Data Artifacts
- Central Image Inventory: `content/generated/image-inventory.json`
- Topic Assignment Matrix: `content/generated/image-matrix.json`
- CSV Matrix: `docs/image-assignment-matrix.csv`
