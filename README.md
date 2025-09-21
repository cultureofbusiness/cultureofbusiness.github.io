# Culture of Business — Static React mockup

This repository contains a small static React site (no build step) intended for publishing to GitHub Pages at `cultureofbusiness.github.io`.

How it works
- `index.html` loads React and ReactDOM from CDN and renders a single-file React app. No bundler required.
- `css/styles.css` contains styling to match the provided mockup image.

To publish
1. Ensure this repository is pushed to `https://github.com/cultureofbusiness/cultureofbusiness.github.io` on the `main` branch.
2. In the repository Settings → Pages, choose the `main` branch and root folder as the publishing source.
3. GitHub will publish the site at `https://cultureofbusiness.github.io/`.

If you prefer a build-based React setup (create-react-app / Vite), I can convert this later.
