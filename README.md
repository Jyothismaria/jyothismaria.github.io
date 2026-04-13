# Jyothismaria Joseph — Portfolio

## Deploy to GitHub Pages

**1. Create repo** named `Jyothismaria.github.io` (public, no README init)

**2. Push:**
```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/Jyothismaria/Jyothismaria.github.io.git
git push -u origin main
```

**3. Enable Pages:** Settings → Pages → Source → **GitHub Actions**

Live at: **https://jyothismaria.github.io**

## Adding your photo
In `index.html`, replace `<div class="photo-initials">JJ</div>` with:
```html
<img src="images/photo.jpg" alt="Jyothismaria Joseph" />
```

## Adding your resume
Drop `resume.pdf` in the root folder. All footer links already point to it.

## Adding a blog post
1. Copy any file in `/blog/` as a template
2. Add a new `<a class="blog-row">` entry in `blog.html`
3. Push — deploys automatically
