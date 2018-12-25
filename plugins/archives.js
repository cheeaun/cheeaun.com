module.exports = () => (files, metalsmith, done) => {
  var metadata = metalsmith.metadata();
  var archivesByYear = {};
  Object.values(files)
    .filter(d => !!d.date && !!d.title)
    .sort((a, b) => b.date.replace(/-/g, '') - a.date.replace(/-/g, ''))
    .forEach(function(data){
      var year = data.date.match(/^\d{4}/)[0];
      if (!archivesByYear[year]) archivesByYear[year] = [];
      archivesByYear[year].push(data);
    });
  var archives = Object.keys(archivesByYear).map(year => ({
    year: year,
    posts: archivesByYear[year],
  })).reverse();
  metadata.archives = archives;
  done();
};