Scrollbar tweaks
===

![tweaked appearance of the scrollbar widget, specifically the scrollbar buttons and slider, on Mozilla Firefox](/blog/images/screenshots/firefox/tweaked_scrollbar_buttons_slider_themes_manager.png)

Do you notice anything *weird* in the screenshot? Take a look at it carefully. It's neither the themes list nor the buttons. No, it's not a *trick* image or whatever.

It's the *scrollbar*.

I've customised my Firefox with Mac-alike scrollbars, by adding few codes to **both** 'userChrome.css' and 'userContent.css' files of my profiles folder. Somehow I got bored with the default Windows scrollbar and thought of trying out the Mac scrollbar, where the scrollbar buttons are located at one side of the slider instead. In my opinion, the relocated scrollbar buttons seems *better* in terms of interface usability.

I read the XBL binding for the scrollbar widget, 'scrollbar.xml' archived in the 'toolkit.jar' file of the 'chrome' folder, and discovered that there are *actually four* scrollbar buttons. I'm confused, why four? Isn't it that Windows have only two? Reading the codes, there are two scrollbar buttons on both sides of the slider, showing two opposing arrows. One of the buttons of each side is hidden. Out of curiosity, I played around the codes, using CSS to tweak the buttons and came up with these:

- ![tweaked appearance of the scrollbar widget, Mac-alike look, on Mozilla Firefox](/blog/images/screenshots/firefox/scrollbar_mac_alike_tweak.png)

	The code for Mac-alike scrollbar is:

	```
	scrollbarbutton[sbattr="scrollbar-up-top"]{
	display: none !important;
	}
	scrollbarbutton[sbattr="scrollbar-up-bottom"]{
	display: -moz-box !important;
	}
	```

- ![tweaked appearance of the scrollbar widget, reversed type of Mac-alike look, on Mozilla Firefox](/blog/images/screenshots/firefox/scrollbar_reversed_mac_alike_tweak.png)

	For a *reversed* type of Mac-alike scrollbar, try this:

	```
	scrollbarbutton[sbattr="scrollbar-down-top"]{
	display: -moz-box !important;
	}
	scrollbarbutton[sbattr="scrollbar-down-bottom"]{
	display: none !important;
	}
	```

- ![tweaked appearance of the scrollbar widget, specially for Linux environment, on Mozilla Firefox](/blog/images/screenshots/firefox/scrollbar_linux_tweak.png)

	Some of you Linux users would love this instead:

	```
	scrollbarbutton[sbattr="scrollbar-up-bottom"]{
	display: -moz-box !important;
	}
	```

- ![tweaked appearance of the scrollbar widget, with no scrollbar buttons at all, on Mozilla Firefox](/blog/images/screenshots/firefox/scrollbar_no_buttons_tweak.png)

	If you *hate* the scrollbar buttons, remove them all!

	```
	scrollbarbutton[sbattr="scrollbar-up-top"],
	scrollbarbutton[sbattr="scrollbar-down-bottom"]{
	display: none !important;
	}
	```

Wow, this is getting very cool. Fortunately, the fun doesn't stop here, yet.

![two vertical scrollbars, one is Mozilla Firefox's, the other is Windows Luna's, both has different width](/blog/images/screenshots/firefox/scrollbar_fatter_width_firefox_windows_luna.png)

My experiments lead me to a minor rendering bug in Firefox. The scrollbar in Firefox is 2 pixels wider than normal. Yes, *only 2 pixels*. Sounds negligible, right? Wrong. Suddenly, my mind flashed all the way back to the beginning of Phoenity when a person named Mathieu Johnson sent me an email titled 'Bug in Phoenity 0.1' on 5 November 2002, quoted:

> I found a bug that is not to be found in other themes I tried. You cannot drag the scroll bar if you click at the extreme right of the screen. It's one of the feature I like the most in Mozilla/Phoenix over Internet Explorer. But your theme seems to copy IE annoying behavior. Anyway, Keep up the good work.

Sometimes, my memory is pretty good. That was about 2 years ago. It's an insignificant bug that *still exists* in current builds of Firefox, probably only on Windows. The way to fix this may differ, but for Windows XP Luna, here is a temporary solution:

<pre><code>scrollbar[orient=&quot;vertical&quot;] scrollbarbutton,
scrollbar[orient=&quot;vertical&quot;] slider{
<em>margin-right: -1px !important;
margin-left: -1px !important;</em>
}</code></pre>

The above code only applies to vertical scrollbars, neglecting the horizontal ones. The applied negative margins *push* the scrollbar buttons and slider to occupy the whole container of the scrollbar, making it 2 pixels narrower. As a result, it looks *exactly* like Windows scrollbar, and you can finally drag it at the extreme right of the screen! Different XP themes tend to require different values of the margins. Please don't' ask me why but you can try to experiment with it. Just make sure you are equipped with some basic CSS and XUL knowledge, before messing things up.

With these tweaks together, I'm definitely satisfied with my Firefox scrollbars.