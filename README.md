# Mohd Abdul Parvez — Personal Portfolio

A responsive, recruiter-friendly personal portfolio for an aspiring Data Analyst.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (DM Sans and Manrope)

No build tools, package installation, or framework are required.

## Folder structure

```text
myportfolio/
├── images/
│   └── par.jpg              # Optional profile photo
├── assets/
│   └── resume.pdf           # Add your own PDF resume
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Open this folder in Visual Studio Code.
2. If you use the Live Server extension, right-click `index.html` and choose **Open with Live Server**.
3. Alternatively, open `index.html` directly in a modern browser.

## Before publishing

1. Add your profile image at `images/par.jpg`. If it is not present, the page displays an initials fallback.
2. Add your current resume as `assets/resume.pdf`. The download buttons point to this location.
3. Confirm that the contact email and LinkedIn URL are correct.
4. Add the GitHub repository URLs for Healthcare EDA, Hotel Booking Analysis and CafePreorder when available.
5. Confirm the completion status of Healthcare EDA and Hotel Booking Analysis.
6. Review all project descriptions to ensure they accurately represent your work.

## Updating projects

Open `script.js` and edit the `projects` array near the top. Each project has:
- `number`
- `title`
- `status`
- `description`
- `highlights`
- `technologies`
- `url`
- `linkLabel`

For projects without a public repository, leave `url` as an empty string. The page will show a non-clickable “Repository link to be added” label.

## Deploy to GitHub Pages

1. Open the GitHub repository that hosts your portfolio.
2. Upload or replace `index.html`, `style.css`, `script.js`, `README.md`, and the `images` / `assets` folders.
3. Commit and push the changes to the branch used by GitHub Pages (commonly `main`).
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the correct branch and folder (usually `/(root)`), then save.
7. Wait for the deployment to finish and open your published URL.

If your existing Pages setup uses a `/docs` folder or another branch, keep that same publishing source and place the files there instead.

## Notes

- This is a static website and is compatible with GitHub Pages.
- The theme preference is stored in the browser's local storage.
- The contact email link opens the visitor's email application; it does not send messages through a server.
- The resume file is not included. Add your own PDF before sharing the site with recruiters.
