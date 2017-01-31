## Project Setup

This project assumes you have NodeJS. You should also have npm installed as well (this usually comes packaged with Node). Once you have it cloned, you should run `npm install` to get all the dependencies.

Finally, run one of the following commands in the cloned directory:

- `npm run dev`: This starts a dev server with autoreload on the port `8080`.
- `npm run build`: This creates the `dist` files.

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

### Roadmap

* Fix crossbrowser issues. Safari mostly.
* Make a stable release.
* Write tests
