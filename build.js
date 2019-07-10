var fs = require('fs');
var CleanCSS = require('clean-css');

var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var inplace = require('metalsmith-in-place');
var markdown = require('metalsmith-markdownit');
var collections = require('metalsmith-collections');
var redirect = require('metalsmith-redirect');

var contentTitles = require(__dirname + '/plugins/content-titles');
var blogData = require(__dirname + '/plugins/blog-data');
var archives = require(__dirname + '/plugins/archives');

var metalsmith = Metalsmith(__dirname)
  .metadata({
    authorName: 'Lim Chee Aun',
    domainURL: 'https://cheeaun.com',
    logo: fs.readFileSync('src/assets/images/cheeaun-logo.html.svg'),
    css: new CleanCSS().minify(fs.readFileSync('src/assets/cheeaun.css')).styles
  })
  .use(markdown('commonmark').enable('table'))
  .use(contentTitles())
  .use(blogData())
  .use(archives())
  .use(collections({
    latestPosts: {
      sortBy: 'date',
      pattern: 'blog/*/*/*.html',
      reverse: true,
      limit: 5
    },
    posts: {
      sortBy: 'date',
      pattern: 'blog/*/*/*.html',
      reverse: true
    }
  }))
  .use(inplace({
    pattern: '**/*.hbs',
  }))
  .use(layouts({
    pattern: ['*.html', '**/*.html'],
    default: 'layout.html.hbs'
  }))
  .use((files, metalsmith, done) => {
    Object.keys(files)
      .forEach(function(file){
        if (/index\.html$/i.test(file)) return;
        if (/\.html$/i.test(file)) {
          files[file.replace(/\.html/, '/index.html')] = files[file];
          delete files[file];
        }
      });
    done();
  })
  .use(redirect({
    '/newtedge': 'https://github.com/cheeaun/newtedge/',
    '/pre-phoenity': 'https://github.com/cheeaun/pre-phoenity/',
    '/projects/phoenity': 'https://github.com/cheeaun/phoenity-icons',
    '/projects/pentagoo': 'https://github.com/cheeaun/pentagoo',
    '/projects/greenmind-zengarden/': 'https://github.com/cheeaun/csszengarden-greenmind',
    '/projects/moodoco': 'https://github.com/cheeaun/moodoco',
    '/projects/mooeditable': 'https://github.com/cheeaun/mooeditable',
    '/projects/typesearch': 'https://github.com/cheeaun/typesearch',
    '/tweets': 'https://cheeaun.github.io/tweets/',
  }))
  .build((err) => {
    if (err) throw err;
    console.log('🚀 BUILD DONE - ' + (new Date()));
  });
