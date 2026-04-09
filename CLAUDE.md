# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML personal portfolio site for Syed Misbah, deployed via GitHub Pages at `syedmisbah.github.io`. No build step — edit files, commit, and push.

## Local Development

```bash
python3 -m http.server
```

Then open `http://localhost:8000`. GitHub Pages auto-deploys on push to `master`.

## Architecture

**No framework, no build system.** Pure HTML, CSS, and jQuery.

### Navigation

All pages share a common nav by fetching `nav.html` into `#nav-placeholder`:

```html
<div id="nav-placeholder"></div>
<script>
  fetch('nav.html').then(r => r.text()).then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
  });
</script>
```

Pages in subdirectories (e.g., `posts/`) must use `../nav.html` in the fetch path.

### Layout

Flexbox sidebar layout defined in `css/main.css`: fixed 150px left nav + main content area. Collapses to stacked layout below 1024px. jQuery in `js/main.min.js` handles the sidebar toggle.

### Content Pages

- `index.html` — home/landing
- `about.html` — bio
- `musings.html` — blog post index (links to `posts/*.html`)
- `posts/*.html` — individual blog posts (20 posts)
- `reading-list.html`, `good-reads.html`, `good-links.html` — curated lists
- `ai/index.html` — AI section placeholder

### Adding a New Blog Post

1. Create `posts/your-post-slug.html` — copy an existing post as a template
2. Add the entry to `musings.html` in the post list

### Static Assets

- `css/main.css` — primary custom styles (edit this for layout/color changes)
- `css/bootstrap.min.css`, `js/bootstrap.min.js` — Bootstrap 3
- `js/jquery-1.11.0.min.js` — jQuery
- `img/` — images, `font-awesome/` — icons
- `data/` — resume PDF, CSV references, Reddit data export
