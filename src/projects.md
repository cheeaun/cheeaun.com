---
title: Projects
layout: basic.html.hbs
---

Projects
===

<style>
#projects-list {
  padding: 2em 0;
  min-height: 100vh;
}
#projects-list > ul {
  list-style: none;
  margin: 0;
  padding: 0;
  /* padding: 1em;
  columns: auto 320px;
  column-gap: 2em; */
  position: relative;
}
#projects-list h2 {
  margin: .25em 0;
  font-size: 24px;
}
#projects-list > ul > li{
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  padding: 1em 1em .1em;
  /* margin: 0 0 2em; */
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,.1);
  transition: .3s box-shadow;
}
#projects-list > ul > li:hover{
  box-shadow: 0 17px 30px rgba(0,0,0,.2);
}
#projects-list > ul > li > p:first-child {
  /* assume first p has the image */
  margin: -1em -1em .5em;
}
#projects-list > ul > li > p:first-child img {
  /* assume first p has the image */
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 15px 30px #0b62a020;
  object-fit: cover;
  width: 100%;
  min-height: 240px;
  height: 240px;
  background-color: #ccc;
  transition: .3s all;
  opacity: .9;
  transform: scale(.98);
}
#projects-list > ul > li:hover > p:first-child img {
  opacity: 1;
  transform: scale(1);
}
#projects-list > ul > li p + ul {
  margin-top: -1em;
}
#projects-list > ul > li li {
  list-style-type: disc;
}
#projects-list strong > a {
  background-color: #0b62a010;
  padding: .5em;
  text-decoration: none;
  display: block;
  text-align: center;
  border-radius: .5em;
  transition: .3s background-color;
}
#projects-list > ul > li:hover strong > a {
  background-color: #0b62a099;
  color: #fff;
}
#projects-list > ul > li strong > a:hover {
  background-color: #0b62a0;
  color: #fff;
}
em.tag {
  font-style: normal;
  border-radius: 3px;
  padding: .3em .75em;
  background-color: #999;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  display: inline-block;
  line-height: 1;
  letter-spacing: normal;
  text-transform: uppercase;
  vertical-align: middle;
}
</style>
<div id="projects-list">

- ![](/projects-images/hackerweb.jpg)

  ## HackerWeb

  A simply readable Hacker News app.

  **[Check it out 👉](https://hackerwebapp.com/)**

  Read more:

  - [How I built the Hacker News mobile web app](/blog/2012/03/how-i-built-hacker-news-mobile-web-app)
  - [How I built the Hacker News mobile web app, Part 2](/blog/2012/03/how-i-built-hacker-news-mobile-web-app_26)
  - [Introducing HackerWeb](/blog/2012/12/introducing-hackerweb)
  - [Building HackerWeb for iOS](/blog/2016/03/building-hackerweb-ios/)
  - [Building HackerWeb for Android](/blog/2016/05/building-hackerweb-android/)

  Discussion: [Rebuilt my RN app from scratch. Feedback welcomed](https://www.reddit.com/r/reactnative/comments/ki6652/rebuilt_my_rn_app_from_scratch_feedback_welcomed/)

  Featured:
  
  - [Product Hunt: HackerWeb](https://www.producthunt.com/posts/hackerweb-2)
  - [EAS Build — April Preview Update](https://blog.expo.dev/eas-build-april-preview-update-ebd7dff9dd25)

- ![](/projects-images/cheeaun-earth.jpg)

  ## cheeaun.earth

  A map of places I've checked in on Earth.

  **[Check it out 👉](https://cheeaun.earth)**

  Featured: [Map Your Trips Around the World](https://googlemapsmania.blogspot.com/2017/07/map-your-trips-around-world.html)

- ![](/projects-images/cheeaun-life.jpg)

  ## cheeaun.life

  A timeline of important events in my life.

  **[Check it out 👉](https://cheeaun.life)**

  Discussion: [Show HN: Life – A timeline of important events in (your) life](https://news.ycombinator.com/item?id=6833565)

- ![](/projects-images/busrouter-sg.jpg)

  ## BusRouter SG

  Explore bus stops and routes on the map for all bus services in Singapore.

  **[Check it out 👉](https://busrouter.sg/)**

  Read more:
  
  - [Building BusRouter SG](/blog/2019/02/building-busrouter-sg)
  - [Designing bus service route diagrams on BusRouter SG](https://cheeaun.com/blog/2021/09/bus-service-route-diagrams-busrouter-sg/)

  Featured:

  - [Hop on: 5 most scenic bus routes in S'pore](https://www.straitstimes.com/lifestyle/hop-on-five-of-the-most-scenic-bus-routes-in-singapore)
  - [The future of autonomous requires open source – updates on deck.gl and introducing loaders.gl](https://mailchi.mp/uber/the-future-of-autonomous-requires-open-source-updates-on-deckgl-and-introducing-loadersgl)
  - [Stacked bus routes on a map](https://flowingdata.com/2019/02/25/stacked-bus-routes-on-a-map/)
  - [“BusRouter SG” Convenient Website to Check Bus Arrival in Singapore in Real Time!](https://pianotohikouki.com/en/singapore/BusRouter-SG)
  - [deck.gl Showcase](https://deck.gl/showcase)

  Discussions:
  
  - [[OC] Visualization of bus routes overlapping each other, in Singapore](https://www.reddit.com/r/dataisbeautiful/comments/8xbvtz/oc_visualization_of_bus_routes_overlapping_each/)
  - [I've designed a pretty unique bus service route diagram on busrouter.sg](https://www.reddit.com/r/singapore/comments/nv03xe/ive_designed_a_pretty_unique_bus_service_route/)
  - [BusRouter SG now has multi-route mode - display multiple bus routes at the same time](https://www.reddit.com/r/singapore/comments/ofyhrp/busrouter_sg_now_has_multiroute_mode_display/)

- ![](/projects-images/railrouter-sg.jpg)

  ## RailRouter SG

  Explore MRT and LRT rail routes in Singapore.

  **[Check it out 👉](https://railrouter.sg/)**

  Featured:
  
  - [Explore The Rail System Using RailRouter](https://therojakplace.com/2016/01/explore-the-rail-system-using-railrouter/)
  - [RailRouter SG Lets You Know Which Crowded MRT Stations To Avoid.](https://the-sg-life.com/2021/11/10/railrouter-sg-lets-you-know-which-crowded-mrt-stations-to-avoid/)

  Discussions:

  - [RailRouter SG now updated with TEL2 line and stations](https://www.reddit.com/r/singapore/comments/pdqdwh/railrouter_sg_now_updated_with_tel2_line_and/)
  - [Real-time crowdedness level indicators on MRT/LRT stations](https://www.reddit.com/r/singapore/comments/qpwi0r/realtime_crowdedness_level_indicators_on_mrtlrt/)

- ![](/projects-images/taxirouter-sg.jpg)

  ## TaxiRouter SG

  Explore available taxis and taxi stands in Singapore.

  **[Check it out 👉](https://taxirouter.sg/)**

  Read more:

  - [Building TaxiRouter SG](/blog/2016/03/building-taxirouter-sg)
  - [Rebuilding TaxiRouter SG](/blog/2018/04/rebuilding-taxirouter-sg)

  Presented: [Taxi Router - talk.js](https://engineers.sg/video/taxi-router-talk-js--737)

  Featured:

  - [Datasets for the rest of us, via Data.gov.sg](https://www.digitalnewsasia.com/digital-economy/datasets-rest-us-datagovsg)
  - [政府数据网站鼓励国人使用 过去半年点击率百万](https://www.youtube.com/watch?v=8zH8fbUNdKI)
  - [Launch of the Government Technology Agency](https://www.mci.gov.sg/pressroom/news-and-stories/pressroom/2016/10/launch-of-the-government-technology-agency)
  - [GovTech hits the ground running](https://www.tech.gov.sg/media/technews/govtech-hits-the-ground-running)
  - [GovTech conference 2016](https://twitter.com/heliumlife/status/784217428410544128)
  - [Data is powerful. But here’s what I care about more.](https://blog.data.gov.sg/data-is-powerful-but-heres-what-i-care-about-more-90229207d409)

  Discussions:

  - [Live Taxi Locations on Singapore Map](https://www.reddit.com/r/singapore/comments/4ives5/live_taxi_locations_on_singapore_map/)
  - [I tried rendering data.gov.sg's live taxi locations in 3D. What do you think?](https://www.reddit.com/r/singapore/comments/i7qxrh/i_tried_rendering_datagovsgs_live_taxi_locations/)

- ![](/projects-images/exploretrees-sg.jpg)

  ## ExploreTrees.SG

  Explore Trees in Singapore.

  **[Check it out 👉](https://exploretrees.sg/)**

  Read more:

  - [Building ExploreTrees.SG](/blog/2018/04/building-exploretrees-sg)
  - [Next-level visualizations with ExploreTrees.SG](/blog/2019/07/next-level-visualizations-exploretrees-sg)
  - [Replicating 3D Trees from Apple Maps](https://cheeaun.com/blog/2021/11/replicating-3d-trees-apple-maps)

  Featured: [Mapping Trees in 3D](https://googlemapsmania.blogspot.com/2021/10/mapping-trees-in-3d.html)

  Presented: [Mapping 564,266 trees in Singapore - Hack & Tell Singapore](https://engineers.sg/video/mapping-564-266-trees-in-singapore-hack-tell-singapore--2801)

  Discussions:

  - [My friend took NParks's data and built a site for people to visualise the various trees around Singapore](https://www.reddit.com/r/singapore/comments/bj0xze/my_friend_took_nparkss_data_and_built_a_site_for/)
  - [I rendered trees in SG to look like the one in Apple Maps](https://www.reddit.com/r/singapore/comments/q7v0gr/i_rendered_trees_in_sg_to_look_like_the_one_in/)
  - [What's new on ExploreTrees.SG (Oct 2021)](https://www.reddit.com/r/singapore/comments/qhib9d/whats_new_on_exploretreessg_oct_2021/)
  - [I made a cool video of my 3D trees project](https://www.reddit.com/r/singapore/comments/qjgm25/i_made_a_cool_video_of_my_3d_trees_project/)

- ![](/projects-images/checkweather-sg.jpg)

  ## Check Weather SG

  Yet another weather app for Singapore.

  **[Check it out 👉](https://checkweather.sg/)**

  Read more: [Building Check Weather SG](/blog/2018/06/building-check-weather-sg)

  Featured: [The reality of standing up for my country – part 1](https://harishpillay.com/2020/07/27/the-reality-of-standing-up-for-my-country-part-1/)

  Discussion: [I built an iOS app (including a site & two bots) that shows rain radar in Singapore](https://www.reddit.com/r/singapore/comments/h9dne3/i_built_an_ios_app_including_a_site_two_bots_that/)

- ![](/projects-images/repokemon.jpg)

  ## Repokémon

  Showcase of GitHub repos with Pokémon names.

  **[Check it out 👉](https://cheeaun.github.io/repokemon/)**

  Read more: [Building Repokémon](/blog/2016/08/building-repokemon)

  Presented: [Repokémon - Talk.CSS #9](https://www.youtube.com/watch?v=ECYVAiM1gSc)

  Featured: [Product Hunt: Repokémon](https://www.producthunt.com/posts/repokemon)

  Discussion: [Repokémon – Showcase of GitHub Repos with Pokémon Names](https://news.ycombinator.com/item?id=12098918)

- ![](/projects-images/kopi-guide.jpg)

  ## Order Kopi Guide

  A helpful guide on how to order Kopi in Singapore and some say Malaysia too.

  **[Check it out 👉](https://kopi.guide/)**

- ![](/projects-images/bubble-wrap.jpg)

  ## Bubble wrap

  A rather satisfying bubble wrap popping game.

  **[Check it out 👉](https://bubble-wrap.party/)**

- ![](/projects-images/puppetron.jpg)

  ## Puppetron

  Puppeteer (Headless Chrome Node API)-based rendering solution.

  **[Check it out 👉](https://puppetron.now.sh/)**

  Featured: [Puppeteer examples](https://github.com/puppeteer/puppeteer/tree/main/examples)

- ![](/projects-images/neat-bookmarks.jpg)

  ## Neat Bookmarks

  <em class="tag">Sold</em> <em class="tag">Unmaintained</em><br>A neat bookmarks tree popup extension for Google Chrome.

  **[Check it out 👉](https://github.com/cheeaun/neat-bookmarks)**

  Featured:

  - [Launch bookmarks AND bookmarklets from the Chrome Omnibox with Neat Bookmarks](https://thenextweb.com/news/launch-bookmarks-and-bookmarklets-from-the-chrome-omnibox-with-neat-bookmarks)
  - [Neat Bookmarks Gives You One Click Access to Your Chrome Bookmarks](https://lifehacker.com/neat-bookmarks-gives-you-one-click-access-to-your-chrom-5797418)
  - [Neat Bookmarks For Chrome, Search And Access Bookmarks Faster](https://www.ghacks.net/2010/10/17/neat-bookmarks-for-chrome-search-and-access-bookmarks-faster/)
  - [Access Bookmarks in Just 1 Click - Tekzilla Daily Tip](https://www.youtube.com/watch?v=RA3TxqaH26o)

- ![](/projects-images/mooeditable.jpg)

  ## MooEditable

  <em class="tag">Unmaintained</em><br>A simple web-based WYSIWYG editor, written in MooTools.

  **[Check it out 👉](https://github.com/cheeaun/mooeditable)**

- ![](/projects-images/pentagoo.jpg)

  ## Pentagoo

  <em class="tag">Unmaintained</em><br>The popular Pentago game, written in Javascript.

  **[Check it out 👉](https://github.com/cheeaun/pentagoo)**

  Read more: [Pentago or Pentagoo?](/blog/2007/10/pentago-or-pentagoo)

- ![](/projects-images/phoenity.jpg)

  ## Phoenity

  <em class="tag">Unmaintained</em><br>A whole family of icons, perfectly designed to be simple, modern and usable.

  **[Check it out 👉](https://github.com/cheeaun/phoenity-icons)**

  Featured: ["Firefox Secrets" book](https://books.google.com.sg/books?id=sfciobmzOOcC&lpg=PA110&dq=%22phoenity%22&pg=PA110#v=onepage&q=%22phoenity%22&f=false)

</div>

<div style="text-align: center; margin: 5em;">
Check out more of my latest projects on <a href="https://github.com/cheeaun">GitHub</a>.<br><a href="https://twitter.com/cheeaun">Follow me on Twitter too</a>.
</div>

<script>
  // https://unpkg.com/minimasonry@1.3.0/build/minimasonry.min.js
  var MiniMasonry=function(){"use strict";function t(t){return this._sizes=[],this._columns=[],this._container=null,this._count=null,this._width=0,this._removeListener=null,this._resizeTimeout=null,this.conf={baseWidth:255,gutterX:null,gutterY:null,gutter:10,container:null,minify:!0,ultimateGutter:5,surroundingGutter:!0,direction:"ltr",wedge:!1},this.init(t),this}return t.prototype.init=function(t){for(var i in this.conf)null!=t[i]&&(this.conf[i]=t[i]);if(null!=this.conf.gutterX&&null!=this.conf.gutterY||(this.conf.gutterX=this.conf.gutterY=this.conf.gutter),this._container="object"==typeof this.conf.container&&this.conf.container.nodeName?this.conf.container:document.querySelector(this.conf.container),!this._container)throw new Error("Container not found or missing");var n=this.resizeThrottler.bind(this);window.addEventListener("resize",n),this._removeListener=function(){window.removeEventListener("resize",n)},this.layout()},t.prototype.reset=function(){this._sizes=[],this._columns=[],this._count=null,this._width=this._container.clientWidth;var t=this.conf.baseWidth;this._width<t&&(this._width=t,this._container.style.minWidth=t+"px"),1==this.getCount()&&(this.conf.gutterX=this.conf.ultimateGutter,this._count=1),this._width<this.conf.baseWidth+2*this.conf.gutterX&&(this.conf.gutterX=0)},t.prototype.getCount=function(){return this.conf.surroundingGutter?Math.floor((this._width-this.conf.gutterX)/(this.conf.baseWidth+this.conf.gutterX)):Math.floor((this._width+this.conf.gutterX)/(this.conf.baseWidth+this.conf.gutterX))},t.prototype.computeWidth=function(){var t=this.conf.surroundingGutter?(this._width-this.conf.gutterX)/this._count-this.conf.gutterX:(this._width+this.conf.gutterX)/this._count-this.conf.gutterX;return t=Number.parseFloat(t.toFixed(2))},t.prototype.layout=function(){if(this._container){this.reset(),null==this._count&&(this._count=this.getCount());for(var t=this.computeWidth(),i=0;i<this._count;i++)this._columns[i]=0;for(var n,e,o=this._container.children,s=0;s<o.length;s++)o[s].style.width=t+"px",this._sizes[s]=o[s].clientHeight;n="ltr"==this.conf.direction?this.conf.surroundingGutter?this.conf.gutterX:0:this._width-(this.conf.surroundingGutter?this.conf.gutterX:0),this._count>this._sizes.length&&(e=this._sizes.length*(t+this.conf.gutterX)-this.conf.gutterX,!1===this.conf.wedge?n="ltr"==this.conf.direction?(this._width-e)/2:this._width-(this._width-e)/2:"ltr"==this.conf.direction||(n=this._width-this.conf.gutterX));for(var r=0;r<o.length;r++){var h=this.conf.minify?this.getShortest():this.getNextColumn(r),u=0;!this.conf.surroundingGutter&&h==this._columns.length||(u=this.conf.gutterX);var c="ltr"==this.conf.direction?n+(t+u)*h:n-(t+u)*h-t,u=this._columns[h];o[r].style.transform="translate3d("+Math.round(c)+"px,"+Math.round(u)+"px,0)",this._columns[h]+=this._sizes[r]+(1<this._count?this.conf.gutterY:this.conf.ultimateGutter)}this._container.style.height=this._columns[this.getLongest()]-this.conf.gutterY+"px"}else console.error("Container not found")},t.prototype.getNextColumn=function(t){return t%this._columns.length},t.prototype.getShortest=function(){for(var t=0,i=0;i<this._count;i++)this._columns[i]<this._columns[t]&&(t=i);return t},t.prototype.getLongest=function(){for(var t=0,i=0;i<this._count;i++)this._columns[i]>this._columns[t]&&(t=i);return t},t.prototype.resizeThrottler=function(){this._resizeTimeout||(this._resizeTimeout=setTimeout(function(){this._resizeTimeout=null,this._container.clientWidth!=this._width&&this.layout()}.bind(this),33))},t.prototype.destroy=function(){"function"==typeof this._removeListener&&this._removeListener();for(var t=this._container.children,i=0;i<t.length;i++)t[i].style.removeProperty("width"),t[i].style.removeProperty("transform");this._container.style.removeProperty("height"),this._container.style.removeProperty("min-width")},t}();

  setTimeout(function(){
    new MiniMasonry({
      container: '#projects-list > ul',
      baseWidth: 320,
      gutter: 25,
      ultimateGutter: 20,
    });
  }, 300);
</script>