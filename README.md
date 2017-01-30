# WebSlides = Good Karma

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/jlantunez/webslides.svg?style=social)](https://twitter.com/webslides)

Finally, everything you need to make HTML presentations in a beautiful way. Just the essentials. You can create your own presentation instantly. Simply choose a demo and customize it in minutes — [https://webslides.tv/demos](https://webslides.tv/demos)

### Why WebSlides?
Good karma and productivity. Just a basic knowledge of HTML and CSS is required. Designers, marketers, and journalists can now focus on the content.

## Project Setup

This project assumes you have NodeJS. You should also have npm installed as well (this usually comes packaged with Node). Once you have it cloned, you should run `npm install` to get all the dependencies.

Finally, run one of the following commands in the cloned directory:

- `npm run dev`: This starts a dev server with autoreload on the port `8080`.
- `npm run build`: This creates the `dist` files.

### Features
Version 0.1 (Jan 8, 2017):

- Navigation (horizontal and vertical sliding): touchpad, keyboard shorcuts, and swipe.
- Slide counter.
- Permalinks: go to a specific slide.
- Simple CSS alignments. Put content wherever you want (vertical centering...)
- 40+ components: background images/videos, quotes, cards, covers...
- Flexible blocks with auto-fill and equal height.
- Fonts: Roboto, Maitree (Serif), and San Francisco.
- Vertical rhythm (use multiples of 8).

## Markup

- Code is clean and scalable. It uses intuitive markup with popular naming conventions. There's no need to overuse classes or nesting.
- Each parent `<section>` in the `#webslides` element is an individual slide.

```
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

`<article id="webslides" class="vertical">`

## JavaScript

In order to bootstrap the WebSlides you'll need to create a instance of it:

`const ws = new WebSlides();`

That'll make everything run without any hassle. 

Do you want to get your hands dirty? This is the API for the WebSlides module:

<dl>
<dt><a href="#goToSlide">goToSlide(slideIndex, opt_forward)</a></dt>
<dd><p>Goes to a given slide.</p>
</dd>
<dt><a href="#goNext">goNext()</a></dt>
<dd><p>Goes to the next slide.</p>
</dd>
<dt><a href="#goPrev">goPrev()</a></dt>
<dd><p>Goes to the previous slide.</p>
</dd>
<dt><a href="#registerPlugin">registerPlugin(key, cto)</a></dt>
<dd><p>Registers a plugin to be loaded when the instance is created. It allows
(on purpose) to replace default plugins.
Those being:</p>
<ul>
<li>Navigation</li>
<li>Hash</li>
<li>Keyboard</li>
</ul>
</dd>
</dl>

<a name="goToSlide"></a>

### `goToSlide(slideI, forward)`
Goes to a given slide.

| Param | Type | Description |
| --- | --- | --- | --- |
| slideIndex | <code>number</code> | The slide index. |
| forward | <code>boolean</code> | Whether we're forcing moving forward/backwards. This parameter is used only from the `goNext`, `goPrev` functions to adjust the scroll animations. |

<a name="goNext"></a>

### `goNext()`
Goes to the next slide. If the page is vertical, it will animate the scroll down.

<a name="goPrev"></a>

### `goPrev()`
Goes to the previous slide. If the page is vertical, it will animate the scroll up

<a name="registerPlugin"></a>

### `registerPlugin(key, cto)`
Registers a plugin to be loaded when the instance is created. It allows
(on purpose) to replace default plugins.

Those being:

 - Navigation
 - Hash
 - Keyboard

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | They key under which it'll be stored inside of the instance, inside the plugins dict. |
| cto | <code>function</code> | Plugin constructor. |

### Plugin development

Almost every single feature of WebSlides is a plugin that can be overwritten and you are able to create your custom plugins. Just call `registerPlugin` (as seen above) **before creating** the instance:

```
// Adding the constructor to WebSlides
WebSlides.registerPlugin('MyPlugin', MyPlugin);

// Starting WebSlides
// Your plugin will be constructed at this time and it will receive the webslides instance as the only parameter.
const ws = new WebSlides();
// You can also access ws.plugins.MyPlugin now
```

This allows you to rewrite the navigation to use a menu (for example) or add that missing piece of functionality you'd like to see.

Make sure to let us know so it could get added to the repo!

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

### Credits

- WebSlides was created by [@jlantunez](https://twitter.com/jlantunez) using [Cactus](https://github.com/eudicots/Cactus).
- Thanks [@LuisSacristan](https://twitter.com/luissacristan) for the javascript code :)
- Based on [SimpleSlides](https://github.com/jennschiffer/SimpleSlides), by [@JennSchiffer](https://twitter.com/jennschiffer).

### Roadmap

* Fix crossbrowser issues. Safari mostly.
* Make a stable release.
* Write tests