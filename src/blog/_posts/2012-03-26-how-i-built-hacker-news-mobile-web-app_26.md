How I built the Hacker News mobile web app, Part 2
===

This is continued from the [first part](/blog/2012/03/how-i-built-hacker-news-mobile-web-app).

Before I begin, I would like to mention that I'm very surprised by the **amazing response** on the first article and the **massive traffic** hitting my site. It was seriously unexpected and **quite meta**.

[![Hacker News Mobile web app showing the first article](/blog/images/screenshots/web/hacker-news-web-app-blog-article-meta-thumbnail.png)](/blog/images/screenshots/web/hacker-news-web-app-blog-article-meta.png)

The first part puts focus on the look and feel of the app. For this second part, I'll provide an addendum on some new things I found and various details on the development of the app.

iOS imitation
---

In the first article, I mentioned an example of rendering the Back button in pure CSS without images. It doesn't look that good and has artifacts on it. Well, there exists a way, way better implementation by Gregor Adams. It is [**the best** pure CSS iOS Back button](http://dream-world.us/2011/11/30/the-best-pure-css3-ios-style-arrow-back-button/ "the best pure CSS3 iOS style arrow Back button") I've ever seen. Here's a comparison:

![Native iOS navigation bar Back button and one done in pure CSS, zoomed in 5 times](/blog/images/figures/interface/ios-navigation-bar-back-button-better-css-native.png)

No artifacts and smooth edges. No images are used at all. It uses **a lot** of fancy CSS properties to achieve this almost exact replica.

This also leads me to discover even more impressive work by others who tried to mimic the iOS interface, such as [CSSUIKit](http://cssuikit.com/) and [-webkit-OS](http://webkit-os.pixelass.com/). I find -webkit-OS very interesting because it also replicate the look of the iOS Lock screen and Springboard, including slide-to-unlock and wiggling icons!

[![-webkit-OS Lock screen](/blog/images/screenshots/web/webkit-os-lock-screen-thumbnail.png)](/blog/images/screenshots/web/webkit-os-lock-screen.png)

The screenshot above is [-webkit-OS](http://webkit-os.pixelass.com/), a **web page**. The date and time is live, and you can slide to unlock to see the Springboard. The status bar is slightly translucent because of this code:

```
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

It works only on WebKit and I got to admit, it's really awesome.

Standalone mode
---

HNmobile doesn't launch in standalone mode. If you add it to your Home screen and launch it, it will open in Mobile Safari. It's not that I can't make it work, HNmobile is just the type of app that **doesn't work well** as a 'standalone' app. Why? How do you define a 'standalone' app?

From my observations, standalone mode only works for web apps that let users do *everything* in it. For HNmobile, you can read stories and comments. To view a story link, it *has* to open in Mobile Safari. *That* is no longer 'standalone' because you can't preview a link *inside* the web app. This is the reason why HNmobile doesn't launch in standalone mode and in the end, it turns out the app works **better** inside Mobile Safari instead.

So, what type of apps are suitable to be 'standalone'? Two examples.

[![Doubbble mobile web app](/blog/images/screenshots/web/doubbble-web-app-thumbnail.png)](/blog/images/screenshots/web/doubbble-web-app.png)

First, this is [Doubbble](http://doubbble.com/) by [Benjamin De Cock](http://deaxon.com/). It's a [Dribbble](http://dribbble.com/) viewer mobile web app. You may notice that Mobile Safari's toolbar is gone, that's standalone mode. You can view popular Dribbble shots or 'Following' shots, view individual shots and swipe through them. If given the time and effort to implement more of [Dribbble's API](http://dribbble.com/api), you can do pretty much anything **without leaving the app**.

[![Messenger mobile web app](/blog/images/screenshots/web/messenger-web-app-thumbnail.png)](/blog/images/screenshots/web/messenger-web-app.png)

Second, this is [Messenger](https://github.com/Harrison/Messenger) by Philip Harrison, a mobile web app which I happen to find on GitHub. It's basically a clone of the iOS built-in Messages app. It's not really a working app, but it demonstrates the possibility of building a messaging or chatting mobile application. You can browse through messages, tap on them and see the whole thread. It even has pull-to-refresh, implemented together with `-webkit-overflow-scrolling: touch`.

These two example applications show content that can be consumed **internally**. For HNmobile, the story links, which is the main content, are **external**, requiring the user to launch them in another application. There may be external content as well for Messenger such as messages with URLs. That is okay because it's not the **main** content. Even the native Messages app launches links in Mobile Safari instead of a built-in browser.

Of course, this only applies to iOS-specific mobile web apps and if you're building one, remember to keep this in mind. As long as there's no way for me to *simulate* a built-in browser in a web app, HNmobile will remain being a non-standalone app.

Navigation bar
---

I'm always fascinated by the way iOS navigation bar layout works. It looks simple, yet *not quite* simple. Here's a simple sketch of the navigation bar layout with buttons:

![Sketch of iOS navigation bar layout](/blog/images/figures/interface/ios-navigation-bar-sketch.png)

The HTML code, in the most minimal form:

```
<header>
    <a href="#">Back</a>
    <h1>Title</h1>
    <a href="#">Button</a>
</header>
```

Initially, I didn't expect much and plan to just code this in a quick and easy way. Instead of using floats or other common CSS layout techniques, I experimented using the [CSS Flexible Box Layout](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/). Note that the one I use is the old standard, while [the new one](http://dev.w3.org/csswg/css3-flexbox/) has debuted in some recent browsers. I suggest reading Paul Irish's article on [Quick hits with the Flexible Box Model](http://www.html5rocks.com/en/tutorials/flexbox/quick/) to understand the implementation, before reading this.

Here's how it looks like:

![Sketch of iOS navigation bar layout, done with CSS Flexible Box Layout](/blog/images/figures/interface/ios-navigation-bar-sketch-css-flex-box.png)

The CSS code `box-flex: 1` will make the title container, in this case the `h1` element, **grow** to fill the space. It works great, except for few cases. If one of the navigation bar buttons changes in width, the text alignment is shifted.

![Sketch of iOS navigation bar layout, text alignment shifted due to shorter button](/blog/images/figures/interface/ios-navigation-bar-sketch-text-alignment-1.png)

If the button is not there, it's also shifted.

![Sketch of iOS navigation bar layout, text alignment shifted due to a missing button](/blog/images/figures/interface/ios-navigation-bar-sketch-text-alignment-2.png)

Same thing applies if one of the buttons got wider.

![Sketch of iOS navigation bar layout, text alignment shifted due to a wider button](/blog/images/figures/interface/ios-navigation-bar-sketch-text-alignment-3.png)

On iOS, the navigation bar title doesn't shift regardless of these minor layout changes. It should still maintain being at the center of the navigation bar and not *pushed* by the buttons. Interestingly, using CSS floats have the *same issue* as flexible box too, so I try absolute positioning on the buttons instead.

![Sketch of iOS navigation bar layout, using CSS absolute positioning on the buttons](/blog/images/figures/interface/ios-navigation-bar-sketch-position-absolute.png)

Now, the title text will **always** be in the center because absolute-positioned buttons will not affect it anymore. But when the text becomes *too long*, the title text goes *under* the buttons and they overlap over it.

![Sketch of iOS navigation bar layout, longer title text overlapped by the buttons](/blog/images/figures/interface/ios-navigation-bar-sketch-button-overlap-1.png)

Longer buttons can also overlap on the title.

![Sketch of iOS navigation bar layout, title text overlapped by longer buttons](/blog/images/figures/interface/ios-navigation-bar-sketch-button-overlap-2.png)

On iOS, even though the title alignment is not affected by the minor changes in the button width on both sides, it will eventually shift *if* the button becomes too long and *intrudes* the title's space. In the diagram above, the title becomes *left-aligned* along the Back button, and it seems like it still **tries to be in the center** of the navigation bar.

I try to fix the overlapping problem by applying some CSS margins:

![Sketch of iOS navigation bar layout, using absolute positioning and margins](/blog/images/figures/interface/ios-navigation-bar-sketch-position-absolute-margin.png)

Remember that the left and right margins still have to be (almost) the same so that it won't shift the title like the first few diagrams above. And I have to hardcode them, knowing the width of the buttons in the first place. The title is also applied with `text-overflow: ellipsis` so that longer text will be clipped and shows the ellipsis character.

![Sketch of iOS navigation bar layout, all rendered correctly thanks to absolute positioning and margins](/blog/images/figures/interface/ios-navigation-bar-sketch-correct-text-alignment.png)

HNmobile currently uses this technique. It works in *most* cases, fortunately. The obvious case where it *doesn't* work correctly is when the title is long and there's no button on the right side:

![Sketch of iOS navigation bar layout, title text clipped even when there's no button on the right](/blog/images/figures/interface/ios-navigation-bar-sketch-incorrect-text-alignment.png)

Here you'll see that if the title is long and there's space around it, iOS will fill it up. Makes sense.

These are all the use cases I found when developing HNmobile, and there could be more other interesting ones. In the end, to implement this **correctly**, the layout has be done **programmatically** with JavaScript, not to mention that you still have to animate them when switching between pages. I hate to say this but this flexible layout just **can't be done** in pure 100% CSS, judging from my current knowledge of whatever CSS grid, positioning or text module specifications out there.

Putting things in perspective, this is *merely* a navigation bar, which takes up only **10%** of the iPhone screen. It's simply remarkable that there's so much attention to detail in this.

Application Cache
---

HNmobile uses [Application Cache](http://html5doctor.com/go-offline-with-application-cache/ "Go offline with application cache") for caching resources locally in the browser. It results in much faster subsequent page loads because practically no requests are done except to check for updated manifest file. It's amazing that GitHub sends the correct MIME type for manifest files, which is `text/cache-manifest`, else I wouldn't be able to host HNmobile on [GitHub Pages](http://pages.github.com/).

For the past few weeks, I've deployed a number of updates and recently started using Google Analytics to track the update rate. To update the manifest file, the common technique is to add version numbers, like this:

```
CACHE MANIFEST
# version 1

CACHE
index.html
hn.css
...
```

However, the problem is, by just looking at the version number, you don't know *when* the update was deployed. A good tip here would be to use date strings, *together* with version numbers, just in case you like version numbers:

```
CACHE MANIFEST
# 2012-03-25:v1

CACHE
index.html
hn.css
...
```

Then I pass this to Google Analytics with [Event Tracking](http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html) so that I can see the version distribution among HNmobile users.

![HNmobile version distribution tracked with Google Analytics](/blog/images/screenshots/web/google-analytics-hnmobile-version-distribution.png)

This is really useful for me to debug certain issues with Application Cache and find ways to make the updates propagate faster to users. As what [most Mobile Gurus stated](http://www.stevesouders.com/blog/2011/10/03/improving-app-cache/ "Improving app cache"), Application Cache can be pretty *clumsy*. I still don't understand why there are less than 10% of users having the older version of the cache. Hopefully this tracking will help me uncovering the mysteries.

Error logging
---

Sometimes, it's hard to track client-side errors and exceptions. It may work well on your device, but strangely break on others. It's especially hard to debug because that device is not in your hands. There are ways to do [client-side error logging](http://blog.pamelafox.org/2011/10/client-side-error-logging.html "Client-Side Error Logging"), either to your own server or remotely with third-party services like [ErrorStack](http://errorstack.appspot.com/), [jsErrLog](http://jserrlog.appspot.com/) and [Errorception](http://errorception.com/). I decided to use [Muscula](http://www.muscula.com/) for HNmobile, which is currently free so that I can get a rough idea on how it works.

![HNmobile error log tracked with Muscula](/blog/images/screenshots/web/muscula-hnmobile-error-log.png)

After running it for weeks, first thing I realise is that it doesn't quite work with minified JavaScript files because the error is always reported at line number 1. [Errorception mentioned this solution](http://errorception.com/makethemost "Making the most of Errorception"):

> Instruct your minifier to preserve line-breaks in your minified code. There are two good reasons for this. Firstly, it makes line numbers actually meaningful in your bug reports. Secondly, when you do find an error it becomes very easy to debug even on production through a tool like Firebug or WebInspector.
>
> — <http://errorception.com/makethemost>

I'm not sure if I'll do that, so I just leave it for now.

Besides that, there's also a bunch of errors that you need to specifically *ignore* because they are usually caused by browser extensions and social media widgets. Pamela Fox has [compiled a list errors to be ignored in this gist](https://gist.github.com/1878283), which I think is worth a read.

I believe this is the most interesting error message of all:

```
ReferenceError: Can't find variable: atomicFindClose
```

Even Google [can't figure it out](http://www.google.com/search?q=%22atomicFindClose%22).

Miscellaneous
---

HNmobile uses [node-hnapi](https://github.com/cheeaun/node-hnapi), yet another unofficial API for Hacker News, which I built as an excuse to learn Node.js. It's hosted on [Heroku](http://www.heroku.com/) and uses [Redis](http://redis.io/) for caching the JSON responses. Since it's hosted on another domain, the API supports [CORS](http://enable-cors.org/) so that HNmobile can do cross-domain `XMLHttpRequest`s. CORS require an interplay of server and client, and it only [works on newer web browsers](http://caniuse.com/cors). Fortunately, Mobile Safari supports it, so that make things easier. The API is quite experimental for now, so expect it to be down few times when the load is high.

Another very interesting observation in the statistics reveal that some of the users are on iPad. I expect HNmobile works there too, even on the new iPad's Retina display. The problem is it's not *optimized* for the larger screen real estate. Tim Cook mentioned in a [recent Apple event](http://www.apple.com/apple-events/march-2012/) that iPad apps work great because they don't look like a blown-up, stretched-out smartphone app. Embarassingly, HNmobile [looks like that right now](https://twitter.com/ronalddevera/statuses/181272614197673985).

More improvements are definitely coming to HNmobile. The app is released under the MIT license, so feel free to [fork and report issues on GitHub](https://github.com/cheeaun/hnmobile). A **big thanks** to all users and everyone giving me valuable feedback.

**Update 27 March 2012**: [HN post here.](http://news.ycombinator.com/item?id=3756771)

**Update 26 December 2012**: [This app is now called HackerWeb.](/blog/2012/12/introducing-hackerweb)
