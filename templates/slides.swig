<article id="slides">
  {% for slide in collections.slides %}
  <section
    class="{% for value in slide.classes %}{{ value }} {% endfor %}"
    {% for name, value in slide.data %}
    data-{{name}}="{{value}}"
    {% endfor %}
  >
    {% autoescape false %}
    {{ slide.contents }}
    {% endautoescape %}
  </section>
  {% endfor %}
</article>
