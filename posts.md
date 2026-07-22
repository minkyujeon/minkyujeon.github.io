---
layout: minimal
title: Posts
description: >
  Blog posts and project updates.
---

{% if site.posts.size > 0 %}
<ul class="post-list">
{% for post in site.posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a>{% if post.date %}<span>{{ post.date | date: "%b %-d, %Y" }}</span>{% endif %}</li>
{% endfor %}
</ul>
{% else %}
<p class="note">No posts yet.</p>
{% endif %}
