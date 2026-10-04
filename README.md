# Pekárna / pekarna.works

A small bilingual site for a shared creative workspace in Prague 7 / Holešovice.
Plain HTML, CSS and JavaScript. No build step, framework, analytics or third-party requests.

## Preview

Run `python3 -m http.server 8080` in this directory and open http://localhost:8080.

## GitHub Pages setup

1. Push the contents to the `main` branch of `rotoround/pekarna-works`.
2. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. Set the custom domain to `pekarna.works` (the CNAME file already contains it).
4. At the DNS provider, set apex A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. If using www, set its CNAME to `rotoround.github.io`. Preserve existing mail/MX/TXT records.
5. Remove only conflicting web A/AAAA records; wait for GitHub's DNS check and certificate, then enable Enforce HTTPS. DNS and certificate provisioning can take up to 24 hours.

GitHub Free requires a public repository for Pages. No custom workflow is needed: Pages automatically publishes changes to main. `.nojekyll` disables Jekyll processing.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Content and assets

- Main copy, alt text and metadata: `index.html`; styling: `style.css`.
- CZ followed by EN in each text block. The precise address is intentionally omitted.
- Hero: PEKARNA_2026_web_002.jpg; other interiors: 006, 004, 007.
- Work detail: EEB1E2A6-444D-402A-A1C4-793A43650D65_1_102_o.jpeg. It represents work/materials, not a photo documented as taken on the premises.
- Photographs supplied by the owner; optimized WebP derivatives at multiple widths with embedded metadata removed. Original photographs remain outside this repository.
- Self-hosted Space Grotesk, SIL Open Font License (see FONT-LICENSE.txt).
- The subtle photo drift is disabled on mobile and with reduced-motion preferences. Content remains available without JavaScript.
- Open Graph preview: `og-pekarna.jpg`, 1200 × 630.

No rights to the photographs are granted by publishing this repository.
