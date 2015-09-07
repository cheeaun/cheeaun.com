Smart icon sizing
===

I've spent the last few days updating the Phoenity theme for Mozilla Firefox 1.0 PR. Again, I found [few more interface glitches](http://bugzilla.mozilla.org/show_bug.cgi?id=257480 "Bug 257480 - theme style and icon cleanup - spit & polish") during the process. I also had some problems here and there, as I struggle to cope with the changes in Winstripe theme's codes. One of them is **icon sizing**.

![incorrect large size of the throbber positioned to the right corner of the menubar](/blog/images/screenshots/firefox/throbber_large_menubar.png)

Before this, the Phoenity theme implements large and small sizes for the throbber, so do most other themes. When Winstripe is introduced to the Firefox interface, the throbber no longer has a large dimension and is positioned way up to the right corner of the menubar. This means *bad news* because for my theme, the throbber will be in large size, in large-icon mode, thus increasing the menubar's height. In other words, it looks *ugly*.

![correct small size of the throbber positioned to the right corner of the menubar](/blog/images/screenshots/firefox/throbber_small_menubar.png)

So, I kept thinking about it. Should I remove the large throbber? And maybe make it available from a sub-skin? No, that would be too redundant and I still want to keep the throbber that way, changing sizes according to the icon modes. I wonder if only there is a way for the size of the throbber to change *proportionally* to the height of the toolbar. Of course, this idea is **impossible** to be done merely with CSS. I have no choice but to think of other ways then.

My first solution is this:

```
#toolbar-menubar #menubar-items + toolbarspring + #throbber-box > #navigator-throbber,
#toolbar-menubar #wrapper-menubar-items + toolbarpaletteitem[type="spring"] + #wrapper-throbber-box #throbber-box > #navigator-throbber{
list-style-image: url(chrome://browser/skin/throbber_small.gif);
}

#toolbar-menubar #menubar-items + toolbarspring + #throbber-box > #navigator-throbber[busy="true"],
#toolbar-menubar #wrapper-menubar-items + toolbarpaletteitem[type="spring"] + #wrapper-throbber-box #throbber-box > #navigator-throbber[busy="true"]{
list-style-image: url(chrome://browser/skin/throbber_small_loading.gif);
}
```

![incorrect large size of the throbber when the location bar is dragged next to it on the menubar](/blog/images/screenshots/firefox/throbber_large_location_bar_menubar.png)

The codes above makes the throbber small if it's positioned next to the menubar items and a flexible space, which is the default set for first-time launch of Firefox. If it's not positioned that way, then the throbber would be sizeable. Pretty good, but it's *too dependent* on the position of the elements on the toolbar and will not work well if other items, except toolbar buttons, are dragged there.

My second solution is this:

```
#toolbar-menubar #throbber-box > #navigator-throbber{
list-style-image: url(chrome://browser/skin/throbber_small.gif);
}

#toolbar-menubar #throbber-box > #navigator-throbber[busy="true"]{
list-style-image: url(chrome://browser/skin/throbber_small_loading.gif);
}
```

![incorrect small size of the throbber when the Home toolbar button is dragged next to it on the menubar](/blog/images/screenshots/firefox/throbber_small_home_toolbar_button_menubar.png)

This time, the codes will make the throbber small if it's positioned anywhere on the menubar. But what if I drag the toolbar buttons to the menubar? Then logically, the throbber *should* be sizeable and *not* in fixed small size anymore. I do have a choice to ignore this, but I'm afraid some users will get confused treating it as a bug.

![incorrect large size of the throbber positioned next to the location bar and Go button, not on the menubar but another toolbar instead](/blog/images/screenshots/firefox/throbber_large_location_bar_go_button_toolbar.png)

Besides, this implementation is limited *only* to the menubar and cannot work on other additional toolbars. On my Firefox, I have added a new toolbar for the location field and Go button. Dragging the throbber there will unintentionally increase the toolbar's height in large-icon mode. Again, it looks ugly.

My third solution is this:

```
toolbar:not([currentset*="-button"]) #throbber-box > #navigator-throbber{
list-style-image: url(chrome://browser/skin/throbber_small.gif);
}

toolbar:not([currentset*="-button"]) #throbber-box > #navigator-throbber[busy="true"] {
list-style-image: url(chrome://browser/skin/throbber_small_loading.gif);
}
```

![correct large size of the throbber when the Home toolbar button is dragged next to it on the menubar](/blog/images/screenshots/firefox/throbber_large_home_toolbar_button_menubar.png)

This is also my final solution because it introduces a *smarter* icon sizing mechanism. The codes above will make the throbber small if there are **no** toolbar buttons on the toolbar. It works by detecting the contents of the toolbar, via the values of the `currentset` attribute. By default, the throbber will be sizeable. If the `currentset` attribute **doesn't** contain partial values of `-button`, the throbber will be small, so that the toolbar doesn't grow unnecessarily.

![correct small size of the throbber positioned next to the location bar and Go button](/blog/images/screenshots/firefox/throbber_small_location_bar_go_button_toolbar.png)

However, there are few tiny glitches. Firefox's interface doesn't seem to be dynamic enough, for the icon sizing to take place smoothly. Sometimes, it takes few milliseconds to re-adjust the rendering. Another glitch that might happen is due to compatibility with extensions which provide additional toolbar buttons. Some extensions use a different value for `currentset`, instead of `extension-button`, therefore breaks the mechanism.

For now, this is the best solution I know. I've also implemented this mechanism to the Go button for my Phoenity theme version 1.3, released three days ago. Anyway, I hope that this could be helpful to other Firefox theme designers too.