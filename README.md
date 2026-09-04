# Your Name — Portfolio

A clean, warm-toned portfolio site: Home, About, Work, Blog, and Contact pages.
Plain HTML/CSS/JS — no build step, no framework. Open `index.html` in a browser
and it just works.

## Files

```
portfolio/
├── index.html      Home page (hero, featured work, experience, skills)
├── about.html       About page (bio + toolkit)
├── work.html        All projects grid
├── blog.html        Notes / blog list
├── contact.html      Contact form
├── styles.css        All styling — colors, fonts, layout live here
├── script.js          Mobile nav toggle + contact form handler
└── README.md          This file
```

## Quick customization checklist

1. **Your name & bio** — search each HTML file for "Your Name" and the
   placeholder bio text, and replace with your own.
2. **Colors & fonts** — open `styles.css` and edit the `:root { ... }`
   variables at the top. Everything on the site references these, so
   changing `--accent` or `--bg` re-themes the whole site.
3. **Projects** — edit the cards in `work.html` (and the two "Featured"
   cards in `index.html`). Each card is a self-contained `<a class="card
   project-card">` block — copy/paste one to add more.
4. **Blog posts** — edit the `.post-row` blocks in `blog.html`.
5. **Social links** — update the `href` values in the footer (repeated at
   the bottom of every page) and on `contact.html`.
6. **Photo** — the circular avatar is currently your initials on a color
   background (`.hero-photo`, `.about-photo`). To use a real photo, replace
   the `<div class="hero-photo">YN</div>` with
   `<img class="hero-photo" src="your-photo.jpg" alt="Your Name">` and add
   the image file next to the HTML files.

## The contact form (already wired up — just needs your key)

`contact.html` and `script.js` are set up to send real emails through
[Web3Forms](https://web3forms.com), a free service that needs no backend
and no account signup — just an email to receive messages at.

**Setup (2 minutes):**

1. Go to **https://web3forms.com/** and enter the email address you want
   contact-form messages delivered to.
2. Web3Forms emails you an **Access Key** (a string like
   `a1b2c3d4-....`).
3. Open `contact.html`, find this line near the top of the form:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
   Replace `YOUR_ACCESS_KEY_HERE` with your real key.
4. Save, reload `contact.html`, and submit a test message — it'll arrive
   in your inbox within a few seconds.

That's it — no server, no npm install, no API keys stored anywhere but
that one line. The form also has a hidden honeypot field (`botcheck`) to
cut down on spam.

**Want a different service instead?** Formspree and Getform work the same
way — sign up, get a form endpoint/key, and swap the `access_key` field
and the `fetch()` URL in `script.js` accordingly.

**Want a custom backend instead?** Replace the `fetch("https://api.web3forms.com/submit", ...)`
call in `script.js` with a call to your own API endpoint.

## Deploying

Since it's static HTML/CSS/JS, you can host it for free on any of:
- **Netlify** or **Vercel** — drag-and-drop the `portfolio` folder
- **GitHub Pages** — push the folder to a repo and enable Pages
- **Cloudflare Pages**

No build command needed — just set the output/publish directory to this
folder.
