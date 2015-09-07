var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var inplace = require('metalsmith-in-place');
var markdown = require('metalsmith-markdownit');
var permalinks = require('metalsmith-permalinks');
var cleanCSS = require('metalsmith-clean-css');
var collections = require('metalsmith-collections');
var contentTitles = require(__dirname + '/plugins/content-titles');
var blogData = require(__dirname + '/plugins/blog-data');

var metalsmith = Metalsmith(__dirname)
  .metadata({
    authorName: 'Lim Chee Aun',
    domainURL: 'http://cheeaun.com'
  })
  .use(cleanCSS())
  .use(markdown('commonmark'))
  .use(contentTitles())
  .use(blogData())
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
    engine: 'handlebars',
    pattern: ['blog/index.*', 'blog/archives.*', 'blog/feed.xml']
  }))
  .use(layouts({
    engine: 'handlebars',
    pattern: ['*.html', '**/*.html'],
    default: 'layout.html'
  }))
  .use(permalinks({
    relative: false
  }))
  .build(function(err){
    if (err) throw err;
  });
