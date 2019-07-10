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
        if (!/\.html$/i.test(file)){
          delete files[file];
          return;
        }

        var data = files[file];

        // Article type
        data.isArticle = true;

        // Dates
        var date = (file.match(/_posts[\/\\](\d+-\d+-\d+)-/i) || [, null])[1];
        data.date = date;
        var humanDate = data.humanDate = moment(date).format('D MMMM YYYY');
        var humanDateShort = data.humanDateShort = moment(date).format('D MMM');
        data.iso8601Date = moment(date).format();

        // Date headings
        var contents = data.contents.toString();
        var $ = cheerio.load(contents);

        var h1 = $('h1').first();

        var articleBody = h1.nextAll();
        var bodyWrap = $('<div itemprop="articleBody"></div>');
        articleBody.each((i, el) => $(el).appendTo(bodyWrap));
        bodyWrap.insertAfter(h1);

        var header = $('<header></header>');
        h1.wrap(header).after('<time datetime="' + date + '" class="meta date" itemprop="datePublished">' + humanDate + '</time>');
        h1.attr('itemprop', 'heading');

        // Summary
        // Shortener from https://stackoverflow.com/a/5454297/20838
        var summary = bodyWrap.text().trim().replace(/[\n\t]/g, ' ').replace(/\s+/g, ' ').replace(/^(.{140}[^\s]*).*/, '$1') + '…';
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
          var pixelRatio = parseInt((src.match(/@(\d)x\./i) || [,1])[1], 10);
          var width = Math.round(dimensions.width/pixelRatio);
          var height = Math.round(dimensions.height/pixelRatio);
          if (width >= 600 && height >= 315 && !data.ogImage){
            data.ogImage = src;
          }
          img.attr('width', width);
          img.attr('height', height);
          img.attr('intrinsicsize', width + 'x' + height);
          img.attr('loading', 'lazy');
          if (width > 1080 || (width > 720 && pixelRatio > 1)) img.addClass('large');
          var el = img;
          if (img.parent('a').length) el = img.parent('a');
          if (el.parent('p').length){ // remove the <p>
            el.parent('p').addClass('__P2FIGURE__');
          } else {
            el.replaceWith('<figure>' + $.html(el) + '</figure>');
          }
        });
        $('video').each(function(){
          var video = $(this);
          var src = video.attr('src');
          if (/^\.\.\//i.test(src)){ // Resolve relative path
            src = src.replace(/^\.\.\//i, '/blog/');
            video.attr('src', src);
          }
          if (video.parent('p').length) { // remove the <p>
            video.parent('p').addClass('__P2FIGURE__');
          } else {
            video.wrap($('<figure></figure>'));
          }
        });
        $('p.__P2FIGURE__').each(function(){
          var p = $(this);
          p.replaceWith('<figure>' + p.html() + '</figure>');
        });
        data.contents = Buffer.from($.html().trim());

        // Path - Year and month, NOT day
        var path = file.replace(/_posts[\/\\](\d+)-(\d+)-\d+-/i, '$1/$2/');
        data.permalink = '/' + path.replace(/\\/ig, '/').replace('.html', '/');
        delete files[file];
        files[path] = data;
      }
    });
  };
};
