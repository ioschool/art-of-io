# Closest

Similar to jQuery's `$.fn.closest` and `$.fn.parents`.
Finds the closest parent that matches a selector.

## API

### closest(element, selector, checkSelf, within)

* `element` - will check this elements parents
* `selector` - CSS selector to match parents
* `checkSelf` - check `element`.
  If falsey, will begin with `element.parentNode` and is synonymous to `$.fn.parents`.
  Otherwise, it's `$.fn.closest`.
* `within` - check only within this element. By default, `document`.

Example:

```js
closest(document.body, 'html') === document.documentElement
closest(document.body, 'body', true) === document.body
closest(document.documentElement, 'html') == null
```

## License

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.