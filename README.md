# WebSlides = Good Karma

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/jlantunez/webslides.svg?style=social)](https://twitter.com/webslides)

Finally, everything you need to make HTML presentations in a beautiful way. Just the essentials. You can create your own presentation instantly. Simply choose a demo and customize it in minutes — https://webslides.tv/demos.

A new release (at least) every 8th day of the month.

### Why WebSlides?
Good karma and productivity. Just a basic knowledge of HTML and CSS is required. Designers, marketers, and journalists can now focus on the content.

### Features

- Navigation (horizontal and vertical sliding): touchpad, keyboard shortcuts, and swipe.
- Slide counter.
- Permalinks: go to a specific slide.
- Autoslide
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
- [pt](http://williamngan.github.io/pt/)

### License

WebSlides is licensed under the [MIT License](https://opensource.org/licenses/MIT). 
Use it to make something cool.

### Dive In!

Please check out:

 - Want to get techie? Read [our technical docs](docs/technical.md)
 - Do not miss [our demos](https://webslides.tv/) 
 
### Credits

- WebSlides was created by [@jlantunez](https://twitter.com/jlantunez) using [Cactus](https://github.com/eudicots/Cactus).
- Thanks [@LuisSacristan](https://twitter.com/luissacristan) for the javascript code :)
- Based on [SimpleSlides](https://github.com/jennschiffer/SimpleSlides), by [@JennSchiffer](https://twitter.com/jennschiffer).
