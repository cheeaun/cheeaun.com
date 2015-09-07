Vista-style tweaks for Firefox
===

Last time, I used to play a lot with the Firefox interface. The following web pages can prove it:

- [Rounded Address Bar](http://forums.mozillazine.org/viewtopic.php?t=68357)
- [Firefox 1.1 Options on Firefox 1.0](http://forums.mozillazine.org/viewtopic.php?t=197355)
- [Neat Trick](http://forums.mozillazine.org/viewtopic.php?t=159454)
- [css help](http://forums.mozillazine.org/viewtopic.php?t=73108)

Those days were great. It reminds me how I use to apply some advanced CSS and XUL binding stuff to totally change Firefox's interface. So now, I'm going to share something that I've been using for few months now. This applies to Firefox users on Windows Vista. As a note, **most tweaks here are to be implemented in [userChrome.css](http://www.mozilla.org/support/firefox/edit#css "Editing Configuration Files"). Be careful.**

I've been using Vista for quite some time now and I supposed most of us already know about the *Vista look* with glass effects, shadows, fancy animations and live thumbnails. When I first installed Firefox on Vista, I have to admit that Firefox's interface does look a bit weird. Or at least, something is missing. Am I right?

So, here are the steps:

1.
	![before: Firefox interface with menubar; after: Firefox interface without the menubar, installed with the 'Hide Menubar' extension](/blog/images/screenshots/firefox/menubar-hide-vista-style-before-after-firefox.png)

	Obviously is the menubar. Before I start using Vista, I disagree that the menubar is hidden by default because of some reasons. But now, I got used to it. Gosh. The lack of menubar does seem to make the interface cleaner though. So, I got to hide the menubar. With CSS?

	```
	#toolbar-menubar{
	display: none !important;
	}
	```

	**No**. This is not practical. **Do not use the above code.** I still need the menubar sometimes. In Vista, when you press `Alt`, the menubar appears on demand. To emulate that on Firefox, you'll need the [Hide Menubar](https://addons.mozilla.org/en-US/firefox/addon/4762) extension by yuoo2k. Works perfect!

2.
	![before: the 'darker' background of the tabs bar on Firefox; after: the new shiny Vista-style background of the tabs bar on Firefox](/blog/images/screenshots/firefox/tabbrowser-tabs-background-vista-style-before-after-firefox.png)

	The tabs. Oops, I mean the background *behind* the tabs actually. From what I see, it's a little *darker than usual*. Somehow, on Internet Explorer 7, the tabs bar just look *shiny*, though I don't quite like the huge tabs taking up all the space. Mind you, Firefox's tabs are just nice. This may seem unnecessary but the code below will make quite a difference:

	```
	.tabbrowser-tabs{
	-moz-appearance: toolbox !important;
	}
	```

3.
	![before: the normal Firefox navigation toolbar; after: the 'darker' Firefox navigation toolbar when the window is maximized](/blog/images/screenshots/firefox/dark-navigation-toolbar-window-maximized-vista-style-before-after-firefox.png)

	Okay, the navigation toolbar, the toolbar that contains the Back, Forward buttons, location bar and stuff. If you enable Windows Aero, when some windows are maximized such as Internet Explorer's, you'll find that the navigation bar turns into a dark background. I don't know why Windows did that, but it does seem useful as it makes me **more focused** on the tabs bar and the web content area of the browser window. Perhaps, just a personal preference. Here goes:

	```
	#main-window[sizemode="maximized"] toolbox{
	-moz-appearance: none !important;
	background-color: #0C2032 !important;
	}

	#main-window[sizemode="maximized"] toolbox,
	#main-window[sizemode="maximized"] toolbox>toolbar{
	border-width: 0 !important;
	}

	#main-window[sizemode="maximized"] toolbox>toolbar:not([id="nav-bar"]){
	-moz-appearance: toolbox !important;
	background-color: -moz-dialog !important;
	}
	```

	So, when Firefox's window is maximized, the background of the navigation toolbar will become dark. Cool.

4.
	![before: the awkward 'Go' button, 'Search' button, location bar and search bar on Firefox; after: Vista-style 'Go' button, 'Search' button, location bar and search bar](/blog/images/screenshots/firefox/better-location-bar-search-bar-buttons-vista-style-before-after-firefox.png)

	What's left now is the location bar and the search bar. Vista's address bar has all those hover effects, *glowing* buttons and built-in loading indicator. Also, if you try the previous tweak, you'll notice that the 'Go' button and 'Search' button looks awkward. The white-background location bar and search bar are too contrasting against the black background, when maximized.

	Let's fix the the whole thing and implement the hover effects at the same time:

	```
	#urlbar,
	#searchbar,
	#go-button-stack>vbox{
	opacity: .8 !important;
	}

	#go-button-stack>vbox,
	.search-go-button-stack>vbox{
	background-color: -moz-field !important;
	-moz-border-radius-topright: 5px !important;
	-moz-border-radius-bottomright: 5px !important;
	}

	#urlbar-button-box:hover #urlbar:not([focused="true"]),
	#urlbar-button-box:hover #urlbar:not([focused="true"]) + #go-button-stack>vbox{
	opacity: .95 !important;
	}

	#urlbar[focused="true"] ,
	#urlbar[focused="true"]  + #go-button-stack>vbox,
	#searchbar:hover,
	#go-button,
	.search-go-button{
	opacity: .999 !important;
	}

	.autocomplete-history-dropmarker,
	.searchbar-engine-button-stack>vbox{
	background-color: -moz-field !important;
	}
	```

	Done? Not yet.

	![Vista-styled or Safari-styled Firefox location bar, which doubles as a loading bar, installed with the 'Fission' extension](/blog/images/screenshots/firefox/loading-progress-meter-location-bar-vista-safari-style-fission-firefox.png)

	How about that Vista-style address bar which doubles as a loading bar? Or should I mention Safari-style address bar? Whatever. The [Fission](https://addons.mozilla.org/en-US/firefox/addon/1951) extension by zeniko is the ultimate answer. And a little ingredient to spice it up:

	```
	#urlbar[fission="fusion"] > #statusbar-icon .progress-bar{
	-moz-appearance: progresschunk !important;
	background-color: transparent !important;
	opacity: .5 !important;
	}

	.autocomplete-textbox-container-fission{
	opacity: .999 !important;
	}
	```

Finally, done.

All tweaks listed have been tested on Firefox 2.0.0.7 using its default theme. Might not work on other themes though. Yet, I do find some related themes like [AeroFox Basic](https://addons.mozilla.org/en-US/firefox/addon/4583), [myFirefox](https://addons.mozilla.org/en-US/firefox/addon/4129) and [Vista-aero](https://addons.mozilla.org/en-US/firefox/addon/4988). These themes are so-called **complete packages**. My tweaks are basically to make the current Firefox interface more Vista-friendly. These themes aim to **emulate** Internet Explorer 7's interface on Firefox, instead.

Frankly speaking, I'm not a fan of Internet Explorer 7's interface. I just want my Firefox to look a little better. Hope this helps yours to look better too.

**Update 28 September 2007**: It seems that I'm quite *outdated*. I never actually know the existence of the [Stylish](https://addons.mozilla.org/en-US/firefox/addon/2108) extension till now! I got to say this is a very wonderful extension because I don't have to get messy with the 'userChrome.css' all the time. Even better, I don't even have to restart after implementing some styles. Wow.

Immediately, I posted all styles here to [userstyles.org](http://userstyles.org/). Please review my contributions:

- [Firefox 2: Native-looking tabs background](http://userstyles.org/styles/3610)
- [Vista-style dark background for navigation toolbar](http://userstyles.org/styles/3611)
- [Firefox 2: Vista-style location bar and search bar](http://userstyles.org/styles/3612)
- [Native-looking progress meter for Fission ext](http://userstyles.org/styles/3615)
