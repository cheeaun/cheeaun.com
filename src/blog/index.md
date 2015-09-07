---
title: Blog
---

Recent Posts
===

<div>
  {{#each latestPosts}}
    <article>
      <header>
        <time datetime="{{date}}">{{humanDate}}</time>
        <h2><a href="{{permalink}}" rel="bookmark">{{title}}</a></h2>
      </header>
      <p>{{{summary}}}</p>
    </article>
  {{/each}}
</div>

[View entire archives →](/blog/archives)
