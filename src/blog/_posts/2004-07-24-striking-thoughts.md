Striking thoughts
===

I had a read at Tantek's [thoughts](http://tantek.com/log/2004/07.html "tantek/log/2004/07"). Since he doesn't provide any Atom or RSS feed, I tend to read his log only once in a while. Really, there are always new things to learn there. I even browsed through the site's XHTML codes, just to find anything *special* which I haven't know.

This piece of code, from a post titled [Contact information obsolescence protocol](http://tantek.com/log/2004/07.html#d08t1829), got my attention:

<pre><code><em>&lt;del datetime=&quot;20040707&quot; class=&quot;obsolete&quot;&gt;</em>
&lt;dl&gt;&lt;dt&gt;Work number&lt;/dt&gt;
&lt;dd&gt;...&lt;/dd&gt;
&lt;dt&gt;Work email&lt;/dt&gt;
&lt;dd&gt;...&lt;/dd&gt;
&lt;/dl&gt;
<em>&lt;/del&gt;</em></code></pre>

If I'm not mistaken, text between the `del` tag should be rendered as strike-through, for most graphical browsers. On Firefox 0.9.2, it's not rendered as such. I did some quick tests, and found out that it only happens for text in block elements contained within the `del` tag. On Internet Explorer 6 and Opera 7.5, the strike-through is clearly visible.

Could this be a *Gecko-related bug*?