# Personal Research Webpage

This is a static webpage. You can run it from your Mac terminal without installing anything.

## 1. Add your photos

Your profile image is already set to:

```text
images/profile.JPG
```

For the optional research and life images, copy files into this folder:

```bash
cd /Users/zyc626/Documents/Codex/2026-06-06/how-to-build-a-webpage-for/outputs/profile-site
cp /path/to/your/research-photo.jpg images/research.jpg
cp /path/to/your/life-photo.jpg images/life.jpg
```

The page still works before you add photos.

## 2. Edit your personal links

Open `index.html` and replace:

- `your.email@duke.edu`
- `YOUR_ID`
- `YOUR_LINKEDIN`

## 3. Open it locally

Option A:

```bash
open index.html
```

Option B, using a local web server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 4. Put it on GitHub Pages

Create a new public GitHub repository named:

```text
YichengZou626.github.io
```

Upload all files from this folder to that repository. GitHub Pages will publish the site at:

```text
https://YichengZou626.github.io
```

Google search will not show it immediately. First the site needs to be public, then Google has to crawl and index it.
