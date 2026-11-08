# Working on davidelarocca.com

Personal website of Davide La Rocca. Static Astro site, published to GitHub Pages on
davidelarocca.com. Updates are made by AI agents (Claude Code, Codex) on Davide's request.
Write the site copy in English; reply to Davide in Italian.

## Where things live

| What | Where |
| --- | --- |
| Statement, bio, the line under the bio, Now, "last edited" date | `person` in `src/data/site.ts` |
| The edited statement (cuts, replacements, numbered notes) | `editedStatement`, `editNotes` in `src/data/site.ts` |
| Index entries (research, software, journeys) | `works` in `src/data/site.ts` |
| Contact links in the footer | `elsewhere` in `src/data/site.ts` (an `href` starting with `#` is hidden) |
| Work and education | `roles`, `education` in `src/pages/background.astro` |
| Homepage layout | `src/pages/index.astro` and `src/components/edits/` |
| Colours, fonts, grid | `src/styles/base.css` |

## Common tasks

- **Add an index entry:** add an object to `works`. Numbers are assigned by year automatically.
  `featured: true` shows it large, with question, method, outcome and a margin note;
  `draft: true` keeps it off the site. Link the source in `href`.
- **Update Now:** edit `person.now`.
- **Any content change:** set `person.updated` to today's date (`YYYY-MM-DD`).

## Rules

- **Never publish personal contact details:** no email address or `mailto:` link, no phone
  number, date of birth or home address, not even in comments or commit messages.
  Contacts are LinkedIn and GitHub only. The repository is public, and its history is too.
- **Name only projects already on the site.** Ask Davide before adding any other project.
- **Evidence, not claims:** facts must be checkable (DOI, repository, publisher page). No
  invented numbers, and no mock output presented as real. `VerifyRun.astro` is a recorded
  real run: change it only to replace it with another real run, dated.
- **Design:** white paper, one neon accent (`--accent`). The accent is a fill under dark text
  or a strike line, never small text on white. Newsreader for text, Fragment Mono for labels.
- **Publishing:** commit and push to `main` only when Davide asks. A push deploys the site
  through `.github/workflows/deploy.yml` in about two minutes.
- **DNS:** do not change DNS records. The mail records on the domain belong to an email
  forwarding service and must stay as they are.

## Before publishing

1. `npm run build` passes.
2. Check `/` and `/background/` at 320, 390, 768, 1280 and 1920 px wide: no horizontal
   scroll, no console errors, controls at least 24 px tall (links inside a sentence excepted).
3. `grep -riE 'mailto|@[a-z0-9-]+\.[a-z]' dist` finds no email address.
4. After the push, open https://davidelarocca.com and confirm the change is live.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
