# Portfolio

Personal portfolio of Koeuk KOS, built with Next.js (App Router), React, TypeScript and Tailwind CSS, in a neobrutalism style based on [neobrutalism-templates/portfolio](https://github.com/neobrutalism-templates/portfolio).

It is a fully static site: `npm run build` writes plain HTML, CSS and JS to `out/`, with no server needed.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

- Content and translations (English, Khmer, Chinese) live in `lib/data.ts` and `lib/i18n.ts`.
- Design tokens are in `app/globals.css` and `tailwind.config.ts`.
- `video/` is a separate Remotion project for the intro video.
