# Surbhi Mundhe

Product-management portfolio. Dark stage layout, avatar on the right of each section, and a connect panel for email, phone, and LinkedIn.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

The app is Vite + React. Hosting must rewrite all routes to `index.html` (`public/_redirects` is included for Netlify).

## Pages

- `/` intro
- `/about`
- `/experience`
- `/skills`
- `/education`
- `/work` domain context, plus `/work/:slug` when a real case study is published
- `/contact`

## Where to edit content

| File | What to edit |
| --- | --- |
| `src/data/site.js` | Name, headline, email, phone, LinkedIn, location, resume path |
| `src/data/employment.js` | Roles, clients, domains, career path |
| `src/data/about.js` | About copy, education, skills |
| `src/data/caseStudies.js` | Decision write-ups. The template is not a shipped project. |

Avatar frames live in `public/avatar/`. Each scene is two or three stills crossfaded in `src/components/AvatarScene.jsx`.

## Add a resume

1. Place a PDF in `public/resume/`, for example `public/resume/surbhi-mundhe.pdf`.
2. Set `resumeFile: '/resume/surbhi-mundhe.pdf'` in `src/data/site.js`.

Until that path is set, resume controls stay disabled.

## Add a case study

1. Copy `templateCaseStudy` in `src/data/caseStudies.js`.
2. Give it a unique `slug` (this becomes `/work/your-slug`).
3. Replace bracketed fields with facts you can defend.
4. Set `publicationReady: true` and `isTemplate: false`.

Do not publish the template as shipped work. Do not invent metrics, employers, or domain credentials.
