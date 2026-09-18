# Siyu Chen — Academic Website

A lightweight two-page academic website. It uses plain HTML, CSS, and JavaScript, so it can be hosted directly on GitHub Pages and does not require a build step.

## Preview locally

Double-click `index.html`, or run a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update content

Nearly all text and research content lives in **`content.js`**.

- Change your name, bio, email, and institution under `profile`.
- Add an abstract inside the matching paper's `abstract: "..."` field.
- Put PDFs in the `files/` folder, then set `pdf: "files/your-paper.pdf"`.
- Put paper figures in the `assets/` folder, then set `image: "assets/your-figure.png"`.
- Add a caption with `imageCaption: "..."`.

When a paper has a PDF path, both its title and **View PDF** open the document in a new tab. When no PDF or figure is supplied, the site shows a clean placeholder.

## Replace the portrait and CV

The current portrait is taken directly from `image_siyu.png` using CSS cropping. To use a new portrait:

1. Add it as `assets/profile.jpg`.
2. In `styles.css`, replace the `.portrait` background rules with:

```css
background: url("assets/profile.jpg") center / cover no-repeat;
```

The CV button currently opens `image_siyu_1.png`. Once you have a PDF:

1. Add it as `files/siyu-chen-cv.pdf`.
2. Change `cv` in `content.js` to `"files/siyu-chen-cv.pdf"`.

## Publish with GitHub Pages

Push these files to a GitHub repository, then open **Settings → Pages**, select **Deploy from a branch**, and choose your main branch and the `/ (root)` folder.
