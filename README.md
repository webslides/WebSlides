# WebSlides = Create stories with Karma

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Release](https://img.shields.io/github/release/webslides/webslides.svg)](https://github.com/webslides/webslides/releases/latest)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/jlantunez/8)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/webslides/webslides.svg?style=social)](https://twitter.com/webslides)

Finally, everything you need to make HTML presentations, landings, and longforms in a beautiful way. Just the essentials. A new release (at least) every 8th day of the month — [https://webslides.tv/demos](https://webslides.tv/demos).

* * *
### Download
Simply choose a demo and customize it in minutes. Latest version: [webslides.tv/webslides-latest.zip](https://webslides.tv/webslides-latest.zip).
* * *


### Why WebSlides? Productivity
This is about telling the story, and sharing it in a beautiful way. Just a basic knowledge of HTML and CSS is required. Designers, marketers, and journalists can now focus on the content.

## Features

- Navigation (horizontal and vertical sliding): remote presenters, touchpad, keyboard shortcuts, and swipe.
- Slide counter.
- Permalinks: go to a specific slide.
- Autoslide.
- Click to nav.
- Simple CSS alignments. Put content wherever you want (vertical centering...)
- 40+ components: background images/videos, quotes, cards, covers...
- Flexible blocks with auto-fill and equal height.
- Fonts: Roboto, Maitree (Serif), and San Francisco.
- Vertical rhythm (use multiples of 8).

## Markup

- Code is clean and scalable. It uses intuitive markup with popular naming conventions. There's no need to overuse classes or nesting.
- Each parent `<section>` in the `#webslides` element is an individual slide.

```html
<article id="webslides">
    <section>
        <h1>Slide 1</h1>
    </section>
    <section class="bg-black aligncenter">
    <!-- .wrap = container 1200px -->
        <div class="wrap">
            <h1>Slide 2</h1>
        </div>
    </section>
</article>
```

### Vertical Sliding

```html
<article id="webslides" class="vertical">
```

### What's in the download?

The download includes demos and images (devices and logos). 
All content is for demo purposes only. Images are property of their respective owners.

```
webslides/
├── index.html
├── css/
│   ├── base.css
│   └── colors.css
│   └── svg-icons.css (optional)
├── js/
│   ├── webslides.js
│   └── svg-icons.js (optional)
└── demos/
└── images/
```

### CSS Syntax (classes)

- Typography: `.text-landing`, `.text-data`, `.text-intro`...
- Background Colors: `.bg-primary`, `.bg-apple`, `.bg-blue`...
- Background Images: `.background`,`.background-center-bottom`...
- Cards: `.card-50`, `.card-40`...
- Flexible Blocks: `.flexblock.clients`, `.flexblock.metrics`...

### Extensions

You can add:

- [Unsplash](https://unsplash.com) photos
- [animate.css](https://daneden.github.io/animate.css)
- [particles.js](https://github.com/VincentGarreau/particles.js)
- [Animate on scroll](http://michalsnik.github.io/aos/) (Useful for longform articles)
- [pt](http://williamngan.github.io/pt/)


### Dive In!

- Do not miss [our demos](https://webslides.tv/). 
- Want to get techie? Read [our wiki](wiki):
  - [FAQ](https://github.com/webslides/WebSlides/wiki)
  - [Core API](https://github.com/webslides/WebSlides/wiki/Core-API)
  - [Plugin Docs](https://github.com/webslides/WebSlides/wiki/Plugin-docs)
  - [Plugin Development](https://github.com/webslides/WebSlides/wiki/Plugin-development)
 
### Credits

- WebSlides was created by [@jlantunez](https://twitter.com/jlantunez) using [Cactus](https://github.com/eudicots/Cactus).
- Javascript: [@Belelros](https://twitter.com/Belelros) and [@LuisSacristan](https://twitter.com/luissacristan).
- Based on [SimpleSlides](https://github.com/jennschiffer/SimpleSlides), by [@JennSchiffer](https://twitter.com/jennschiffer).
