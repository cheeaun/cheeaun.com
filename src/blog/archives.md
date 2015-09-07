Blog Archives
===

<ul id="blog-archives">
  {{#each posts}}
    <li>
      <time datetime="{{date}}">{{humanDate}}</time>
      <a href="{{permalink}}" rel="bookmark">{{title}}</a>
    </li>
  {{/each}}
</ul>
