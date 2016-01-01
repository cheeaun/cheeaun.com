var cheerio = require('cheerio');
var moment = require('moment');
var sizeOf = require('image-size');

module.exports = plugin;

function plugin(options){
  options = options || {};

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      if (/blog/i.test(file)) files[file].isBlog = true;
      if (/_posts/i.test(file)){
        var data = files[file];
        // Article type
        data.isArticle = true;
        // Dates
        var date = (file.match(/_posts[\/\\](\d+-\d+-\d+)-/i) || [, null])[1];
        data.date = date;
        var humanDate = data.humanDate = moment(date).format('D MMMM YYYY');
        data.iso8601Date = moment(date).format();
        // Date headings
        var contents = data.contents.toString();
        var $ = cheerio.load(contents);
        $('h1').first().after('<time>' + humanDate + '</time>');
        // Summary
        var summary = $('p').text().slice(0, 140).trim() + '…';
        data.summary = summary;
        // Fix relative images path in links
        $('a').each(function(){
          var a = $(this);
          var href = a.attr('href');
          if (/^\.\.\/images/i.test(href)){
            href = href.replace(/^\.\.\/images/i, '/blog/images');
            a.attr('href', href);
          }
        });
        // Image dimensions
        $('img').each(function(){
          var img = $(this);
          var src = img.attr('src');
          if (/^http/i.test(src)){
            console.log('Found remote image: ' + src);
            return;
          }
          if (/^\.\.\//i.test(src)){ // Resolve relative path
            src = src.replace(/^\.\.\//i, '/blog/');
            img.attr('src', src);
          }
          var dimensions = sizeOf('src' + src);
          img.attr('width', dimensions.width);
          img.attr('height', dimensions.height);
          var el = img;
          if (img.parent('a').length) el = img.parent('a');
          if (el.parent('p').length){ // remove the <p>
            el.parent('p').addClass('__P2FIGURE__');
          } else {
            el.replaceWith('<figure>' + $.html(el) + '</figure>');
          }
        });
        $('p.__P2FIGURE__').each(function(){
          var p = $(this);
          p.replaceWith('<figure>' + p.html() + '</figure>');
        });
        data.contents = new Buffer($.html());
        // Path - Year and month, NOT day
        var path = file.replace(/_posts[\/\\](\d+)-(\d+)-\d+-/i, '$1/$2/');
        data.permalink = '/' + path.replace(/\\/ig, '/').replace('.html', '/');
        delete files[file];
        files[path] = data;
      }
    });
  };
};
