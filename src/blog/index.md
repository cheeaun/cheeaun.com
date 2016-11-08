---
title: Blog
---

Recent Posts
===

<div>
  {{#each latestPosts}}
    <article class="summary">
      <header>
        <h2><a href="{{permalink}}" rel="bookmark">{{title}}</a></h2>
        <time datetime="{{date}}">{{humanDate}}</time>
      </header>
      <p>{{{summary}}}</p>
    </article>
  {{/each}}
</div>

[View entire archives →](/blog/archives)
