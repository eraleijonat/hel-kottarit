# Helsingin Erä-Leijonien kotisivut

[![Build and deploy to github pages](https://github.com/eraleijonat/hel-kottarit/actions/workflows/static.yml/badge.svg)](https://github.com/eraleijonat/hel-kottarit/actions/workflows/static.yml)

Helsingin Erä-Leijonien kotisivut. Staattinen sivusto, joka on toteutettu [Svelte kit](https://kit.svelte.dev/) -frameworkilla. Sivuston sisältö on hallittavissa [Builder.io](https://builder.io/) -CMS:llä.

## Technologies

- [Svelte kit](https://kit.svelte.dev/) - Frontend
- [Builder.io](https://builder.io/) - CMS
- [Webhook relay](https://webhookrelay.com/) - Builder webhook forwarding to Github actions
- Github actions - static site generation and deployment
- Github pages - hosting

## Local development

- Install dependencies with `npm install`
- Run `npm run dev` to start the development server
- Open [localhost:5173](http://localhost:5173) to view the site

## Content management

Content is managed with [Builder.io](https://builder.io/). Published updates in Builder are automatically trigger a Github action that builds and deploys the site. If you need access to the CMS, please contact the maintainer.

## TODO

- Add preview environment for PRs

## Maintainers

- [Veikko](https://github.com/veikkoAJ/)
