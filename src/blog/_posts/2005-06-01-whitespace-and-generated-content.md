Whitespace and generated content
===

CSS is fun and I'm *still* learning it because in my opinion, it's a never-ending process. Like web pages, CSS is a growing entity. There are always more things to learn and understand. This time, I focus on CSS whitespace and generated content.

I first got interested in CSS [whitespace](http://w3.org/TR/CSS21/syndata.html#whitespace) handling when I saw these lines of code from Ian Hickson's [site](http://ln.hixie.ch/ "Hixie's Natural Log") stylesheet, about two years ago till now:

<pre><code>pre.irc{
white-space: pre; <em class="remark">/* CSS2 */</em>
white-space: -moz-pre-wrap; <em class="remark">/* Mozilla */</em>
white-space: -hp-pre-wrap; <em class="remark">/* HP printers */</em>
white-space: -o-pre-wrap; <em class="remark">/* Opera 7 */</em>
white-space: -pre-wrap; <em class="remark">/* Opera 4-6 */</em>
white-space: pre-wrap; <em class="remark">/* CSS 2.1 */</em>
white-space: pre-line; <em class="remark">/* CSS 3 (and 2.1 as well, actually) */</em>
word-wrap: break-word; <em class="remark">/* IE */</em>
}</code></pre>

This looks confusing. Therefore, I asked Ian about this intricacy. He explained, in [CSS2](http://w3.org/TR/CSS2/), there is no way to indicate that spaces and newlines should be preserved, but that if the text reaches the end of the containing block, it is okay to wrap it. The closest is `white-space: pre`, but that doesn't wrap. Before [CSS2.1](http://w3.org/TR/CSS21/) is in Candidate Recommendation, user agents are not allowed to implement them, so they have implemented [proprietary extensions](http://w3.org/TR/CSS21/syndata.html#q4 "Vendor-specific extensions"). Ian lists all these possibilities, and because of CSS's [forward compatibility guidelines](http://w3.org/TR/CSS21/syndata.html#syntax "4.1 Syntax"), user agents pick the last one they support.

As for the last property, `word-wrap: break-word` is Internet Explorer's proprietary extension which is not part of any standards and will not be described here.

What is the difference between `pre`, `pre-wrap` and `pre-line`? How about `normal` and `nowrap` then? The more I read on the `white-space` property, the more I get confused with the [meanings of the values](http://w3.org/TR/CSS21/text.html#propdef-white-space "16.6 Whitespace: the 'white-space' property") and its [processing model](http://w3.org/TR/CSS21/text.html#white-space-model "16.6.1 The 'white-space' processing model"). Again, Ian helped me to simplify things up with a quick and basic table that shows the naming convention and relationships among the values:

<table>
<caption>Relationships for values of the <code>white-space</code> property</caption>
<thead>
<tr>
<th>name</th>
<th>spaces</th>
<th>wrapping</th>
<th>newlines</th>
</tr>
</thead>
<tbody>
<tr>
<th><code>normal</code></th>
<td>collapse</td>
<td>wrap</td>
<td>ignore</td>
</tr>
<tr>
<th><code>pre-line</code></th>
<td>collapse</td>
<td>wrap</td>
<td>preserve</td>
</tr>
<tr>
<th><code>nowrap</code></th>
<td>collapse</td>
<td>don't</td>
<td>ignore</td>
</tr>
<tr>
<th><em class="remark">(none)</em></th>
<td>collapse</td>
<td>don't</td>
<td>preserve</td>
</tr>
<tr>
<th><em class="remark">(none)</em></th>
<td>preserve</td>
<td>wrap</td>
<td>ignore</td>
</tr>
<tr>
<th><code>pre-wrap</code></th>
<td>preserve</td>
<td>wrap</td>
<td>preserve</td>
</tr>
<tr>
<th><em class="remark">(none)</em></th>
<td>preserve</td>
<td>don't</td>
<td>ignore</td>
</tr>
<tr>
<th><code>pre</code></th>
<td>preserve</td>
<td>don't</td>
<td>preserve</td>
</tr>
</tbody>
</table>

To make things clear, `pre-wrap` acts like `pre` but wraps if necessary, while `pre-line` acts like `normal` but preserves newlines. I'm sure `pre-wrap` would be very useful for displaying *long lines* of computer codes that might overlap on other elements or goes off the screen. From the table, there are some which don't have names yet, due to repeatedly failed attempts to come up with better names. However in CSS3, each of the facets of these values can be **individually** controlled, as documented in the [CSS3 Text Module](http://w3.org/TR/css3-text/) under [line breaking](http://w3.org/TR/css3-text/#line-breaking "6. Line breaking") and [text wrapping](http://w3.org/TR/css3-text/#text-wrapping "7. Text Wrapping, White space Control and Text Overflow").

Okay, how about browser support? Most modern browsers now correctly support `pre`, `normal` and `nowrap`. Firefox supports `-moz-pre-wrap` but not `pre-wrap` and `pre-line` yet, reported as [Bug 261081](https://bugzilla.mozilla.org/show_bug.cgi?id=261081 "Bug 261081 - Add support for pre-wrap value of white-space") and [Bug 230555](https://bugzilla.mozilla.org/show_bug.cgi?id=230555 "Bug 230555 - Add support for pre-line value of white-space"). Opera 8 supports `pre-wrap` including its previous extensions, `-pre-wrap` and `-o-pre-wrap`, but not `pre-line`. I guess, `pre-line` is much harder to be implemented?

Now, let's take this one step further. I start to fiddle with CSS [content generation](http://w3.org/TR/CSS21/generate.html "12 Generated content, automatic numbering, and lists"), specifically using the `content` property with the `:before` and `:after` pseudo-elements. Here are some of my experiments, starting with basic HTML codes:

<pre><code>&lt;div title=&quot;<em>some
title
text</em>&quot;&gt;text inside container&lt;/div&gt;</code></pre>

Note that there are two line breaks, purposedly typed, in the value of the `title` attribute. Accompanied with a little CSS:

```
div[title]:after{
content: attr(title);
}
```

So, should the line breaks in the HTML source be generated via CSS? **No**. According to the [HTML 4.01 specification](http://w3.org/TR/html401/), line breaks are not identified as [white space characters](http://w3.org/TR/html401/struct/text.html#h-9.1 "9.1 White space") and do not constitute line breaks in HTML.

Second experiment. The HTML codes:

```
<p>paragraph text</p>
```

This time, I include line breaks in the CSS source instead:

<pre><code>p:after{
content: &quot;<em>generated text
after the
paragraph text</em>&quot;;
}</code></pre>

Two line breaks and **nothing** will be generated at all because the specification states that [a string cannot directly contain a newline](http://w3.org/TR/CSS21/syndata.html#strings "4.3.7 Strings"), unless the codes are modified to:

<pre><code>p:after{
content: &quot;generated text<strong>\</strong>
after the<strong>\</strong>
paragraph text&quot;;
}</code></pre>

Of course, this is not an intended effect because the newlines escaped with a backslash will be ignored in the rendering. I read the specification again and found a way to include line breaks or newlines in strings:

> To include a newline in a string, use an escape representing the line feed character in Unicode (U+000A), such as "\A" or "\\00000a". This character represents the generic notion of "newline" in CSS.
>
> — <http://w3.org/TR/CSS21/syndata.html#strings>

Another try, with escaped line feed characters:

<pre><code>p:after{
content: &quot;generated text<strong>\A</strong> after the<strong>\A</strong> paragraph text&quot;;
}</code></pre>

Opera 8 renders the line feed characters but **not** Firefox. At first, I thought Firefox couldn't read this character yet but later, I [found out that](http://w3.org/TR/CSS21/generate.html#content "12.2 The 'content' property"):

> Authors may include newlines in the generated content by writing the "\A" escape sequence in one of the strings after the '`content`' property. This inserted line break is still subject to the '`white-space`' property.
>
> — <http://w3.org/TR/CSS21/generate.html#content>

with this example:

<pre><code>h1:before {
display: block;
text-align: center;
<strong>white-space: pre;</strong>
content: &quot;chapter\A hoofdstuk\A chapitre&quot;
}</code></pre>

From my understanding, the `pre` value preserves spaces and newlines, and doesn't wrap. Does this mean that it preserves the *escaped* line feed character the same way as newlines?

Yet another try:

<pre><code>p:after{
<em>white-space: pre;</em>
content: &quot;generated text\A after the\A paragraph text&quot;;
}</code></pre>

It works on Firefox. I also tried another possibility:

<pre><code>p{
<em>white-space: pre;</em>
}

p:after{
content: &quot;generated text\A after the\A paragraph text&quot;;
}</code></pre>

It works too, just as [mentioned in the specification](http://w3.org/TR/CSS21/generate.html#before-after-content "12.1 The :before and :after pseudo-elements"):

> The `:before` and `:after` pseudo-elements [inherit](http://w3.org/TR/CSS21/cascade.html#inheritance "6.2 Inheritance") any inheritable properties from the element in the document tree to which they are attached.
>
> — <http://w3.org/TR/CSS21/generate.html#before-after-content>

Initially, before `white-space: pre` is applied, Firefox ignores the escaped line feed character because the `:after` pseudo-element inherits the `white-space: normal` style from the `p` tag. In another case, Opera 8 renders the escaped line feed character, even without `white-space: pre`, thus proves that the `:after` pseudo-element is actually applied with `white-space: pre-line`. Then I see, Opera 8 *does* support `pre-line` but only for generated content of pseudo-elements? Is this a wrong implementation?

Maybe. Maybe not, following an example from [section 16.6 on whitespace](http://w3.org/TR/CSS21/text.html#white-space-prop "16.6 Whitespace: the 'white-space' property"):

> The following examples show what whitespace behavior is expected from the `PRE` and `P` elements, the "`nowrap`" attribute in HTML, and in generated content.
>
> <pre><code>pre { white-space: pre }
> p { white-space: normal }
> td[nowrap] { white-space: nowrap }
> <strong>:before,:after { white-space: pre-line }</strong></code></pre>
>
> — <http://w3.org/TR/CSS21/text.html#white-space-prop>

Interesting. The `pre-line` behaviour is *expected* in generated content, instead of inherited? If then, this means Opera 8 is correct. *Partially* correct, because it *still* renders the escaped newline under `white-space: normal` though:

<pre><code>p:after{
<em>white-space: normal;</em>
content: &quot;generated text\A after the\A paragraph text&quot;;
}</code></pre>

As exciting as it gets, I take the very first HTML example above again, and apply these lines of CSS:

<pre><code>div[title]:after{
<em>white-space: pre;</em>
content: attr(title);
}</code></pre>

Opera 8 ignores the line breaks in the HTML source. Firefox **renders them**! Whoa. If I'm not mistaken, the returned string [should not be parsed by the CSS processor](http://w3.org/TR/CSS21/generate.html#x17 "attr(X)"). Yet another wrong implementation?

My experiments are done with the help of only two browsers, Mozilla Firefox 1.0+ and Opera 8, on Windows XP. I supposed anything rendered on Firefox should be the same with any Gecko-powered browsers such as Mozilla Suite and Netscape. Obviously, any versions of Internet Explorer, hopefully not 7 and above, are useless and fail all test cases here. Though I might be curious how my experiments would affect Safari and any other standards-compliant browsers.

I'm not sure if this has been discussed somewhere else and I could have missed some points, whatever. So, please correct me if I'm wrong. Overall, CSS is fun, right?

**Update 4 June 2005**: To make things more visually stimulating, I've prepared a [testcase page](/experiments/whitespace-generated-content/ "Whitespace and generated content") which includes the above codes, for testing purposes.
