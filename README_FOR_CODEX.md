# Instructions for Codex

Please build a Chinese-first academic personal website for Haodan Tang.

## Key Requirements
- Chinese is the default language.
- English version should be available through a clear EN switch or /en route.
- The Chinese version is more complete than the English version.
- Style should match a clean, international, business-school scholar homepage.
- The site should be easy to open in mainland China.

## Content Files
- content/site_content_zh.md
- content/site_content_en.md

Use them as the source of truth.
Do not invent new facts.

## Technical Stack
- Next.js
- TypeScript
- Tailwind CSS

## Pages
Chinese:
- 首页
- 研究
- 教学
- 简历
- 学术服务
- 联系方式

English:
- /en
- /en/research
- /en/teaching
- /en/cv
- /en/service
- /en/contact

## UI Guidance
- Prioritize typography, spacing, and readability
- Keep the publication list elegant and easy to scan
- Keep navigation simple
- Use subtle interactions only
- Avoid product landing page aesthetics
- Avoid heavy gradients and decorative effects

## Performance Guidance
- Avoid Google Fonts CDN
- Prefer system font stack
- Minimize third-party dependencies
- Keep the site static-friendly
- Use local assets when possible