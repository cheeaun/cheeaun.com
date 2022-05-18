---
title: Projects
---

Projects
===

<style>
#projects-list > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#projects-list h2 {
  margin: 0;
  font-size: 24px;
}
#projects-list > ul > li{
  margin: 0 auto 2em;
  position: relative;
  max-width: 610px;
}
#projects-list > ul > li figure {
  outline: 1px solid rgba(128,128,128,.5);
  position: relative;
  margin-top: 0;
}
#projects-list > ul > li figure:hover {
  outline-color: var(--link-color);
}
#projects-list > ul > li figure:hover img {
  filter: brightness(.9);
}
#projects-list > ul > li figure img + img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation: peekaboo 15s ease-in-out both infinite alternate;
}
@keyframes peekaboo {
  0%, 40% {
    opacity: 0;
  }
  60%, 100% {
    opacity: 1;
  }
}
#projects-list > ul > li p + ul {
  margin-top: -1em;
}
#projects-list > ul > li li {
  list-style-type: disc;
}
#projects-list figure ~ h2,
#projects-list figure ~ p {
  padding-right: 64px;
}
#projects-list > ul > li details {
  position: absolute;
  height: 100%;
  bottom: 0;
  overflow: hidden;
  left: -1em;
  right: -1em;
  pointer-events: none;
}
#projects-list > ul > li details[open] {
  pointer-events: auto;
}
#projects-list > ul > li details summary {
  pointer-events: auto;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  user-select: none;
  text-indent: -999em;
  background: no-repeat center;
  width: 32px;
  height: 32px;
  margin: 1em;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path fill="gray" d="M150 0a150 150 0 1 0 0 300 150 150 0 0 0 0-300zm63 167h-48v50a15 15 0 0 1-31 0v-50H87a15 15 0 0 1 0-31h47V91a15 15 0 1 1 31 0v45h48a15 15 0 1 1 0 31z"/></svg>');
  transition: transform 0.3s ease-in-out;
  opacity: 0.5;
}
#projects-list > ul > li details summary:hover {
  opacity: .75;
}
#projects-list > ul > li details summary:active {
  opacity: .9;
}
#projects-list > ul > li details[open] summary {
  transform: rotate(135deg);
  position: absolute;
}
#projects-list > ul > li details summary + div {
  position: absolute;
  max-height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-faint-color);
  padding: 2em;
  z-index: 2;
  overflow: auto;
  box-shadow: inset 0 0 0 3px rgba(128,128,128,.2);
}
@supports (backdrop-filter: blur(30px)) {
  #projects-list > ul > li details summary + div {
    background-color: rgba(255,255,255,.9);
    backdrop-filter: blur(30px);
  }
}
#projects-list > ul > li details[open] summary + div {
  animation: appear 0.3s ease-in-out both;
}
@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
em.tag {
  font-style: normal;
  border-radius: 3px;
  padding: .3em .5em;
  background-color: #999;
  color: #fff;
  font-size: 12px;
  display: inline-block;
  line-height: 1;
  letter-spacing: normal;
  text-transform: uppercase;
  vertical-align: middle;
}
@supports (display: grid) {
  @media (min-width: 40em) {
    #container {
      max-width: calc(100% - 2em);
    }
    #projects-list > ul {
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(420px, 1fr) );
      column-gap: 3em;
    }
  }
}
@media screen and (prefers-color-scheme: dark) {
  @supports (backdrop-filter: blur(30px)) {
    #projects-list > ul > li details summary + div {
      background-color: rgba(0,0,0,.9);
    }
  }
}
</style>
<div id="projects-list">

- <figure>
    <a href="https://hackerwebapp.com/"><img src="/project-images/hackerweb.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [HackerWeb]((https://hackerwebapp.com/))

  A simply readable Hacker News app.

  <details><summary>More details</summary><div>

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

  </div>

- <figure>
    <a href="https://cheeaun.earth"><img src="/project-images/cheeaun-earth.jpg" alt="" width="1280" height="1024" loading="lazy"><img src="/project-images/cheeaun-earth-2.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [cheeaun.earth](https://cheeaun.earth)

  A map of places I've checked in on Earth.

  <details><summary>More details</summary><div>

  Featured: [Map Your Trips Around the World](https://googlemapsmania.blogspot.com/2017/07/map-your-trips-around-world.html)

  </div>

- <figure>
    <a href="https://cheeaun.life"><img src="/project-images/cheeaun-life.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [cheeaun.life](https://cheeaun.life)

  A timeline of important events in my life.

  <details><summary>More details</summary><div>

  Discussion: [Show HN: Life – A timeline of important events in (your) life](https://news.ycombinator.com/item?id=6833565)

  </div>

- <figure>
    <a href="https://busrouter.sg/"><img src="/project-images/busrouter-sg.jpg" alt="" width="1280" height="1024" loading="lazy"><img src="/project-images/busrouter-sg-2.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [BusRouter SG](https://busrouter.sg/)

  Explore bus stops and routes on the map for all bus services in Singapore.

  <details><summary>More details</summary><div>

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
  
  </div>

- <figure>
    <a href="https://railrouter.sg/"><img src="/project-images/railrouter-sg.jpg" alt="" width="1280" height="1024" loading="lazy"><img src="/project-images/railrouter-sg-2.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [RailRouter SG](https://railrouter.sg/)

  Explore MRT and LRT rail routes in Singapore.

  <details><summary>More details</summary><div>

  Featured:
  
  - [Explore The Rail System Using RailRouter](https://therojakplace.com/2016/01/explore-the-rail-system-using-railrouter/)
  - [RailRouter SG Lets You Know Which Crowded MRT Stations To Avoid.](https://the-sg-life.com/2021/11/10/railrouter-sg-lets-you-know-which-crowded-mrt-stations-to-avoid/)

  Discussions:

  - [RailRouter SG now updated with TEL2 line and stations](https://www.reddit.com/r/singapore/comments/pdqdwh/railrouter_sg_now_updated_with_tel2_line_and/)
  - [Real-time crowdedness level indicators on MRT/LRT stations](https://www.reddit.com/r/singapore/comments/qpwi0r/realtime_crowdedness_level_indicators_on_mrtlrt/)
  
  </div>

- <figure>
    <a href="https://taxirouter.sg/"><img src="/project-images/taxirouter-sg.jpg" alt="" width="1280" height="1024" loading="lazy"><img src="/project-images/taxirouter-sg-2.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [TaxiRouter SG](https://taxirouter.sg/)

  Explore available taxis and taxi stands in Singapore.

  <details><summary>More details</summary><div>
  
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
  
  </div>

- <figure>
    <a href="https://exploretrees.sg/"><img src="/project-images/exploretrees-sg.jpg" alt="" width="1280" height="1024" loading="lazy"><img src="/project-images/exploretrees-sg-2.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [ExploreTrees.SG](https://exploretrees.sg/)

  Explore Trees in Singapore.

  <details><summary>More details</summary><div>
  
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
  
  </div>

- <figure>
    <a href="https://checkweather.sg/"><img src="/project-images/checkweather-sg.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Check Weather SG](https://checkweather.sg/)

  Yet another weather app for Singapore.

  <details><summary>More details</summary><div>
  
  Read more: [Building Check Weather SG](/blog/2018/06/building-check-weather-sg)

  Featured: [The reality of standing up for my country – part 1](https://harishpillay.com/2020/07/27/the-reality-of-standing-up-for-my-country-part-1/)

  Discussion: [I built an iOS app (including a site & two bots) that shows rain radar in Singapore](https://www.reddit.com/r/singapore/comments/h9dne3/i_built_an_ios_app_including_a_site_two_bots_that/)
  
  </div>

- <figure>
    <a href="https://cheeaun.github.io/repokemon/"><img src="/project-images/repokemon.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Repokémon](https://cheeaun.github.io/repokemon/)

  Showcase of GitHub repos with Pokémon names.

  <details><summary>More details</summary><div>
  
  Read more: [Building Repokémon](/blog/2016/08/building-repokemon)

  Presented: [Repokémon - Talk.CSS #9](https://www.youtube.com/watch?v=ECYVAiM1gSc)

  Featured: [Product Hunt: Repokémon](https://www.producthunt.com/posts/repokemon)

  Discussion: [Repokémon – Showcase of GitHub Repos with Pokémon Names](https://news.ycombinator.com/item?id=12098918)
  
  </div>

- <figure>
    <a href="https://cheeaun.github.io/chengyu-wordle/"><img src="/project-images/chengyu-wordle.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Chengyu Wordle](https://cheeaun.github.io/chengyu-wordle/)

  Wordle, for Chinese idioms - 成语 (chéngyǔ)

  <details><summary>More details</summary><div>
  
  Read more: [Chengyu Wordle Is Not a Love Story](/blog/2022/02/chengyu-wordle-is-not-a-love-story)

  Featured:

  - [Wikipedia: Wordle](https://zh.wikipedia.org/wiki/Wordle#cite_note-45)
  - [Chinese Wordle: Play and Learn Chinese (chengyus)!](https://ninchanese.com/blog/2022/01/28/chinese-wordle-play-and-learn-chinese-chengyus/)
  - [6種英文和中文的 Wordle 猜字遊戲 打發時間真好用](https://blog.user.today/wordle-games-gallery/)
  - [Wordle-Like Games Slowly Gain Traction on Chinese Social Media](https://www.sixthtone.com/news/1009586/wordle-like-games-slowly-gain-traction-on-chinese-social-media-)
  - [A Sensational Wordle Clone Without Any Actual Words](https://kotaku.com/games-like-wordle-subwaydle-nyct-mta-best-routes-1848461481)
  - [**Lee Hsien Loong**: ...I was also pleasantly surprised to find out that there are Chinese and Malay versions of the game. Give it a go — a simple but fun way to keep the mind engaged. ](https://www.facebook.com/leehsienloong/posts/484183366401131)
  - [全世界都在Wordle！快试试数字版Nerdle](https://entlife.8world.com/life/nerdle-nerdle-is-a-new-maths-based-wordle-clone-1718676)
  - [PM Lee says Wordle a fun way to keep the mind engaged, recommends Chinese & Malay versions](https://mothership.sg/2022/02/pm-lee-says-wordle-a-fun-way-to-keep-the-mind-engaged-recommends-chinese-malay-versions/)
  - [这款小游戏风靡全球，让李显龙总理都“玩上瘾了”](https://www.yan.sg/lixinglongzholi/)
  - [Want more Wordle? Here are 13 spin-offs to try, including a Singlish version](https://www.asiaone.com/lifestyle/want-more-wordle-here-are-13-spin-offs-try-including-singlish-version)
  - [连总理都推荐的爆红猜字游戏Wordle　为何在全球疯狂吸粉？](https://www.redants.sg/good-reads/story20220211-5941)
  - [Can’t Get Enough Of Wordle? Here’s 17 Wordle Variants To Try](https://shopee.sg/blog/best-wordle-games/)
  - [11 Other “Wordle” Challenges to Try](https://www.littledayout.com/11-other-wordle-challenges-to-try/)
  - [More than mere words](https://www.weekinchina.com/2022/03/more-than-mere-words/)
  - [5 Chinese Wordles for you to discover](https://www.chinoy.tv/5-chinese-wordles-for-you-to-discover/)
  - [There’s a Big Advantage to Playing Wordle in Other Languages](https://slate.com/culture/2022/03/wordle-multiple-languages-lemot-termo-chengyu.html)
  
  </div>

- <figure>
    <a href="https://cheeaun.github.io/steepless/"><img src="/project-images/steepless.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Steepless](https://cheeaun.github.io/steepless/)

  An app to find the flattest routes and avoid the hilliest routes

- <figure>
    <a href="https://kopi.guide/"><img src="/project-images/kopi-guide.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Order Kopi Guide](https://kopi.guide/)

  A helpful guide on how to order Kopi in Singapore and some say Malaysia too.

- <figure>
    <a href="https://bubble-wrap.party/"><img src="/project-images/bubble-wrap.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Bubble wrap](https://bubble-wrap.party/)

  A rather satisfying bubble wrap popping game.

- <figure>
    <a href="https://puppetron.vercel.app/"><img src="/project-images/puppetron.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Puppetron](https://puppetron.vercel.app/)

  Puppeteer (Headless Chrome Node API)-based rendering solution.

  <details><summary>More details</summary><div>
  
  Featured: [Puppeteer examples](https://github.com/puppeteer/puppeteer/tree/main/examples)
  
  </div>

- <figure>
    <a href="https://github.com/cheeaun/neat-bookmarks"><img src="/project-images/neat-bookmarks.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Neat Bookmarks](https://github.com/cheeaun/neat-bookmarks) <em class="tag">Unmaintained</em>

  A neat bookmarks tree popup extension for Google Chrome.

  <details><summary>More details</summary><div>
  
  Featured:

  - [Launch bookmarks AND bookmarklets from the Chrome Omnibox with Neat Bookmarks](https://thenextweb.com/news/launch-bookmarks-and-bookmarklets-from-the-chrome-omnibox-with-neat-bookmarks)
  - [Neat Bookmarks Gives You One Click Access to Your Chrome Bookmarks](https://lifehacker.com/neat-bookmarks-gives-you-one-click-access-to-your-chrom-5797418)
  - [Neat Bookmarks For Chrome, Search And Access Bookmarks Faster](https://www.ghacks.net/2010/10/17/neat-bookmarks-for-chrome-search-and-access-bookmarks-faster/)
  - [Access Bookmarks in Just 1 Click - Tekzilla Daily Tip](https://www.youtube.com/watch?v=RA3TxqaH26o)
  
  </div>

- <figure>
    <a href="https://github.com/cheeaun/mooeditable"><img src="/project-images/mooeditable.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [MooEditable](https://github.com/cheeaun/mooeditable) <em class="tag">Unmaintained</em>

  A simple web-based WYSIWYG editor, written in MooTools.

- <figure>
    <a href="https://github.com/cheeaun/pentagoo"><img src="/project-images/pentagoo.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Pentagoo](https://github.com/cheeaun/pentagoo) <em class="tag">Unmaintained</em>

  The popular Pentago game, written in Javascript.

  <details><summary>More details</summary><div>
  
  Read more: [Pentago or Pentagoo?](/blog/2007/10/pentago-or-pentagoo)
  
  </div>

- <figure>
    <a href="https://github.com/cheeaun/phoenity-icons"><img src="/project-images/phoenity.jpg" alt="" width="1280" height="1024" loading="lazy"></a>
  </figure>

  ## [Phoenity](https://github.com/cheeaun/phoenity-icons) <em class="tag">Unmaintained</em>

  A whole family of icons, perfectly designed to be simple, modern and usable.

  <details><summary>More details</summary><div>
  
  Featured: ["Firefox Secrets" book](https://books.google.com.sg/books?id=sfciobmzOOcC&lpg=PA110&dq=%22phoenity%22&pg=PA110#v=onepage&q=%22phoenity%22&f=false)
  
  </div>

</div>

<div style="text-align: center; margin: 5em;">
Check out more of my latest projects on <a href="https://github.com/cheeaun">GitHub</a>.<br><a href="https://twitter.com/cheeaun">Follow me on Twitter too</a>.
</div>