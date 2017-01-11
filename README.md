# WebSlides = Good Karma
Finally, everything you need to make HTML presentations in a beautiful way. Just the essentials. You can create your own presentation instantly. Simply choose a demo and customize it in minutes — [https://webslides.tv/demos](https://webslides.tv/demos)

### Why WebSlides?
Good karma and productivity. Just a basic knowledge of HTML and CSS is required. Designers, marketers, and journalists can now focus on the content.

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

### Markup

- Code is clean and scalable. It uses intuitive markup with popular naming conventions. There's no need to overuse classes or nesting.
- Each parent <code>&lt;section&gt;</code> in the #webslides element is an individual slide.

<pre>&lt;article id="webslides"&gt;
    &lt;section&gt;
    	&lt;h1&gt;Slide 1&lt;/h1&gt;
    &lt;/section&gt;
    &lt;section class="bg-black aligncenter"&gt;
    <span class="code-comment">&lt;!-- .wrap = container 1200px --&gt;</span>
    	&lt;div class="wrap"&gt;
    		&lt;h1&gt;Slide 2&lt;/h1&gt;
    	&lt;/div&gt;
    &lt;/section&gt;
&lt;/article&gt;</pre>

#### Vertical Sliding

<pre>&lt;article id="webslides" class="vertical"&gt;</pre>

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

- Typography: .text-landing, .text-data, .text-intro...
- Background Colors: .bg-primary, .bg-apple, .bg-blue...
- Background Images: .background,.background-center-bottom...
- Cards: .card-50, .card-40...
- Flexible Blocks: .flexblock.clients, .flexblock.metrics...


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
