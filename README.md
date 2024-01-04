# Helsingin Erä-Leijonien kotisivut

[![Build and deploy to github pages](https://github.com/eraleijonat/hel-kottarit/actions/workflows/static.yml/badge.svg)](https://github.com/eraleijonat/hel-kottarit/actions/workflows/static.yml)

Helsingin Erä-Leijonien kotisivut. Staattinen sivusto, joka on toteutettu [Svelte kit](https://kit.svelte.dev/) -frameworkilla. Sivuston sisältö on hallittavissa [Builder.io](https://builder.io/) -CMS:llä.

## Teknologiat

- [Svelte kit](https://kit.svelte.dev/) - Frontend
- [Builder.io](https://builder.io/) - CMS
- [Webhook relay](https://webhookrelay.com/) - Builder.io:n lähetämän webhookin populointi avaimella ja edelleenlähetys githubiin
- Github actions - Staattisen sivun generointi ja julkaisu
- Github pages - Hostaus

## Kehitys

- Asenna tarvittavat paketit `npm install`
- Aja sivua lokaalisti `npm run dev`
- Sivut lokaalisti nähtävissä [localhost:5173](http://localhost:5173)

## Sisällönhallinta

Sisältöä hallitaan [Builder.io](https://builder.io/)-palvelun avulla. Builderissa julkaistut päivitykset käynnistävät automaattisesti GitHub-toiminnon, joka generoi uudet ja julkaisee päivitetyn staattisen sivun. Jos tarvitset pääsyn CMS:ään, laita viestiä Veikolle.

## Ylläpitäjät

- [Veikko](https://github.com/veikkoAJ/)
