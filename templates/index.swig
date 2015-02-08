<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="{{ title }}" />
    <meta property="og:site_name" content="{{ site_name }}" />
    <meta property="og:url" content="{{ url }}" />
    <meta property="og:description" content="{{ description }}" />
    <meta property="og:image" content="{{ url }}/{{ image }}" />
    <meta property="og:type" content="{{ type }}" />
    <meta property="fb:profile_id" content="{{ profile_id }}" />
    <meta property="article:publisher" content="{{ publisher }}" />

    <title>{{ title }}</title>

    {% for href in stylesheets %}
    <link rel="stylesheet" type="text/css" href="{{ href }}" />
    {% endfor %}

  </head>
  <body>
    <a class='fork-me' href='http://github.com/ioschool/art-of-io'>
      Fork me on GitHub
    </a>

    <main>
      {% autoescape false %}
      {{ contents }}
      {% endautoescape %}
    </main>

    {% for href in scripts %}
    <script type="text/javascript" src="{{ href }}"></script>
    {% endfor %}

    {% include "./analytics.swig" %}
  </body>
</html>
