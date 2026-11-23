# Ankit — Graphic Design Portfolio

Plain HTML, CSS and JavaScript. No build step, no backend. Works on GitHub Pages.

## Files
- `index.html` — page structure and your text (about, contact, social links)
- `data.js` — **your projects and skills. Edit this to update the work grid.**
- `style.css` — colours and fonts are at the top (`:root`)
- `script.js` — behaviour (you rarely need to touch it)
- `assets/projects/` — project images (placeholders now)
- `assets/images/` — portrait and favicon

## Add your own work
1. Put images in `assets/projects/` (JPG/WebP, about 1600px wide, under 400 KB each).
2. Open `data.js`, copy a project block, change the title, `app`, `year`, `thumb`, `gallery`, `description`, `process`, `tools`.
3. `app` creates the horizontal filter buttons automatically: Illustrator, Photoshop, InDesign, Canva, Dimension, or any new name you type.
4. `size` can be `wide`, `tall` or `square`.

## Personalise
- Replace `hello@yourname.com` and the three social URLs in `index.html` (Contact section).
- Replace `assets/images/portrait.svg` with your photo (see the comment in `index.html`).
- Change the name "Ankit" in `index.html` (logo, title, footer).
- Change colours in `style.css` under `:root`.

## Deploy on GitHub Pages
1. Create a GitHub account and a new **public** repository, e.g. `portfolio`.
2. Upload everything inside this folder (files at the top level of the repo, not inside an extra folder): **Add file → Upload files**, then **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. Wait 1–2 minutes. Your site will be at `https://YOUR-USERNAME.github.io/portfolio/`.
5. For a root address (`YOUR-USERNAME.github.io`), name the repository exactly `YOUR-USERNAME.github.io`.

All paths are relative, so it works in a subfolder URL. To test locally, run `python3 -m http.server` in this folder and open http://localhost:8000.

## Notes
- Fonts (Bricolage Grotesque, DM Sans) load from Google Fonts; fallbacks are set if offline.
- Animations are turned off for visitors who prefer reduced motion.
