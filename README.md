cheeaun.com
===

This is cheeaun's web site.

Powered by [Metalsmith](http://www.metalsmith.io/).

Setup
---

- `yarn` - installs all dependencies.
- `yarn run build` - builds all static files from `src` folder to the `build` folder.
- `yarn run watch` - watches `src` folder and runs `build` script when files changed.
- `yarn run serve` - starts server for `build` folder.
- `yarn start` - runs both `watch` and `serve` scripts.

The files in `build` folder are automagically deployed to `gh-pages` by using [Wercker](http://wercker.com/), following the steps on this article, [Deploy anything to GitHub Pages with wercker](http://luke.vivier.ca/wintersmith-with-wercker/).
