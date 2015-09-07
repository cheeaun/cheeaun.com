var cheerio = require('cheerio');

module.exports = plugin;

function plugin(options){
  options = options || {};

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      var data = files[file];
      if (!data.title){
        var contents = data.contents.toString();
        var $ = cheerio.load(contents);
        var title = $('h1').text();
        if (/chee aun/i.test(title)) return;
        data.title = title;
      }
    });
  };
};
