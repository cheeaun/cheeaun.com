cheeaun.com
===

This is cheeaun's web site.

Powered by [Metalsmith](http://www.metalsmith.io/).

Setup
---

- `npm i` - installs all dependencies.
- `npm run build` - builds all static files from `src` folder to the `build` folder.
- `npm run watch` - watches `src` folder and runs `build` script when files changed.
- `npm run serve` - starts server for `build` folder.
- `npm start` - runs both `watch` and `serve` scripts.

The files in `build` folder are automagically deployed to `gh-pages` by using [Wercker](http://wercker.com/), following the steps on this article, [Deploy anything to GitHub Pages with wercker](http://luke.vivier.ca/wintersmith-with-wercker/).
